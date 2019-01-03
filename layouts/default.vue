<template>
  <main class="main">
    <global-header calss="header"/>
    <div class="container">
      <nuxt/>
    </div>
    <global-sidebar class="sidebar"/>
  </main>
</template>

<script>
import GlobalHeader from '../components/GlobalHeader';
import GlobalSidebar from '../components/GlobalSidebar';

export default {
  components: { GlobalSidebar, GlobalHeader }
};
</script>

<style lang="scss" scoped>
.main {
  display: grid;
  grid-template-columns: 1fr 320px;
  grid-template-areas:
    'header sidebar'
    'container sidebar';

  .header {
    grid-area: header;
  }

  .container {
    grid-area: container;
  }

  .sidebar {
    grid-area: sidebar;
  }
}
</style>
