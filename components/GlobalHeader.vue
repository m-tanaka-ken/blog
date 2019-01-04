<template>
  <header class="header">
    <nuxt-link 
      to="/" 
      class="page-title">Masaki Blog</nuxt-link>
  </header>
</template>

<script>
export default {
  name: 'GlobalHeader'
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  width: 860px;
  margin: auto;
  height: 100%;
}

.page-title {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 22px;
}
</style>
