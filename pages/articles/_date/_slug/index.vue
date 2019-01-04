<template>
  <div>
    article
  </div>
</template>

<script>
import { sourceFileArray } from '../../../../articles/dist/summary.json';

export default {
  validate({ params }) {
    return sourceFileArray.includes(
      `articles/${params.date}-${params.slug}.md`
    );
  }
};
</script>

<style scoped>
</style>
