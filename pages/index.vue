<template>
  <section class="content">
    <card
      v-for="article in articles"
      v-if="article.url"
      :key="article.created_at"
    >
      <div>{{ article.created_at | dateFormat }}</div>
      <h1 class="title">
        <nuxt-link :to="`/articles/${article.url}`">{{ article.title }}</nuxt-link>
      </h1>
      <div class="tag-container">
        <div
          v-for="(tag, index) in article.tags"
          :key="index"
          class="tag"
        >{{ tag }}</div>
      </div>
    </card>
  </section>
</template>

<script>
import orderBy from 'lodash/orderBy';
import format from 'date-fns/format';

import { fileMap } from '@/articles/dist/summary.json';
import Card from '@/components/Card';

export default {
  name: 'Home',
  components: { Card },
  filters: {
    dateFormat: function(date) {
      return format(date, 'YYYY年M月D日');
    }
  },
  computed: {
    articles() {
      return orderBy(Object.values(fileMap), ['created_at'], ['desc']);
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-weight: bold;
  font-size: 24px;
  color: #35495e;
  letter-spacing: 1px;
}

.tag-container {
  display: flex;
}

.tag {
  list-style: none;
  padding: 0 8px;
  background: #baabcf;
  color: #f7f7f7;
  border-radius: 12px;

  & + .tag {
    margin-left: 10px;
  }
}
</style>
