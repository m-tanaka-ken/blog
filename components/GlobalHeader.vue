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
  padding: 0 2rem;
}

.page-title {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 18px;
}
</style>
