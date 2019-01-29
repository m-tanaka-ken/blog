<template>
  <section>
    <card class="article">
      <header class="header">
        <h1 class="title">{{ title }}</h1>
        <div class="created-at">投稿日：<time>{{ created_at | dateFormatYMDJp }}</time></div>
        <tag-list :tags="tags"/>
      </header>
      <div v-html="bodyHtml"/>
    </card>
  </section>
</template>

<script>
import { sourceFileArray } from '@/articles/dist/summary';
import { name as baseTitle } from '@/package';

import Card from '@/components/Card';
import TagList from '@/components/TagList';

export default {
  components: { Card, TagList },

  validate({ params }) {
    return sourceFileArray.includes(
      `articles/${params.date}-${params.slug}.md`
    );
  },

  asyncData({ params }) {
    return Object.assign(
      {},
      require(`@/articles/dist/${params.date}-${params.slug}.json`),
      { params }
    );
  },

  head() {
    const title = `${this.title} - ${baseTitle}`;
    const url = `https://masaki-blog.info/${this.params.date}/${
      this.params.slug
    }`;
    return {
      title,
      meta: [
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:title', property: 'og:title', content: title }
      ],
      link: [{ rel: 'canonical', href: url }]
    };
  }
};
</script>

<style lang="scss" scoped>
.card {
  margin-top: 40px;
  margin-bottom: 40px;
}

.header {
  margin-bottom: 30px;
}

.title {
  font-size: 32px;
  margin-bottom: 20px;
}

.created-at {
  font-size: 14px;
  margin-bottom: 10px;
}

@media (max-width: 420px) {
  .card {
    margin: 0;
    padding: 16px;
    box-shadow: none;
    width: 100%;
  }
}
</style>
