<template>
  <header class="header">
    <nuxt-link
      to="/"
      class="page-title"
    >
      Masaki Blog
    </nuxt-link>
    <div
      class="profile"
      @click="handleClickProfile"
    >
      Profile
    </div>
  </header>
</template>

<script>
export default {
  name: 'GlobalHeader',
  methods: {
    handleClickProfile() {
      this.$emit('clickProfile');
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.profile {
  display: none;
  cursor: pointer;
}

@media (max-width: 1100px) {
  .profile {
    display: block;
  }
}
</style>
