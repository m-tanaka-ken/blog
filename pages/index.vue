<template>
  <section class="content">
    <div
      v-for="article in articles"
      v-if="article.url"
      :key="article.created_at"
      class="card"
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
    </div>
  </section>
</template>

<script>
import orderBy from 'lodash/orderBy';
import format from 'date-fns/format';
import { fileMap } from '../articles/dist/summary.json';

export default {
  name: 'Home',
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
.card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 2px 3px 8px 0 rgba(0, 0, 0, 0.16);
  width: 860px;

  & + .card {
    margin-top: 20px;
  }
}

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
