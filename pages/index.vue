<template>
  <section class="content">
    <div
      v-for="(article, key) in summary"
      v-if="article.url"
      :key="key"
      class="card"
    >
      <h1 class="title">
        <nuxt-link :to="`/articles/${article.url}`">{{ article.title }}</nuxt-link>
      </h1>
    </div>
  </section>
</template>

<script>
import summary from '../articles/dist/summary.json';

export default {
  name: 'Home',
  computed: {
    summary() {
      return summary.fileMap;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  padding: 1rem;
  box-shadow: 2px 3px 8px 0 rgba(0, 0, 0, 0.16);
  width: 724px;

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
</style>
