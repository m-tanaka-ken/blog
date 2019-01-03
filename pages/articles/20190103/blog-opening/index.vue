<template>
  <div v-html="article"/>
</template>

<script>
import article from './index.md';

export default {
  computed: {
    article() {
      return article;
    }
  }
};
</script>

<style>
</style>
