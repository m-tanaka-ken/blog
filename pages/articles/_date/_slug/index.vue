<template>
  <card>
    <h1 class="title">{{ title }}</h1>
    <div class="created-at"><time>{{ created_at | dateFormatYMDJp }}</time></div>
    <div class="tag-container">
      <div
        v-for="(tag, index) in tags"
        :key="index"
        class="tag"
      >{{ tag }}</div>
    </div>
    <div v-html="bodyHtml"/>
  </card>
</template>

<script>
import { sourceFileArray } from '@/articles/dist/summary';
import { name as baseTitle } from '@/package';

import Card from '@/components/Card';

export default {
  components: { Card },

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
    const url = `https://masaki-blog.info/articles/${this.params.date}/${
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
