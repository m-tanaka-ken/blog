<template>
  <section class="content">
    <div>
      <h1 class="title">
        <nuxt-link to="/articles/20190103/blog-opening">article</nuxt-link>
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style lang="scss" scoped>
.content {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
