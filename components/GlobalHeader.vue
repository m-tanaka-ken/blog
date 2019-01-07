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
  height: 100%;
  padding: 0 1rem;
}

.page-title {
  text-decoration: none;
  color: #333;
  font-family: 'Varela Round', sans-serif;
  font-weight: bold;
  font-size: 24px;
}
</style>
