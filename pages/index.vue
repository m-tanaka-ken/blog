<template>
  <section>
    <card v-for="article in articles" :key="article.created_at">
      <div>{{ article.created_at | dateFormatYMDJp }}</div>
      <h1 class="title">
        <nuxt-link :to="`/${article.url}`">
          {{ article.title }}
        </nuxt-link>
      </h1>
      <tag-list :tags="article.tags" />
    </card>
  </section>
</template>

<script>
import orderBy from 'lodash/orderBy';

import { fileMap } from '@/articles/dist/summary.json';
import Card from '@/components/Card';
import TagList from '@/components/TagList';

export default {
  name: 'Home',

  components: { TagList, Card },

  computed: {
    articles() {
      return orderBy(Object.values(fileMap), ['created_at'], ['desc']).filter(
        article => article.url
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  margin-top: 40px;

  & + .card {
    margin-top: 20px;
  }

  &:last-child {
    margin-bottom: 40px;
  }

  .title {
    font-weight: bold;
    font-size: 24px;
    color: #35495e;
    letter-spacing: 1px;
  }
}
@media (max-width: 420px) {
  .card {
    width: 95%;
    margin-top: 20px;
  }
}
</style>
