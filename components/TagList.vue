<template>
  <div class="tag-list">
    <div
      v-for="(tag, index) in tags"
      :key="index"
      class="tag"
    >
      {{ tag }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TagList',
  props: {
    tags: {
      type: Array,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.tag-list {
  display: flex;
  align-items: baseline;
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
