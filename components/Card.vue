<template>
  <div class="card"><slot/></div>
</template>

<script>
export default {
  name: 'Card'
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
</style>
