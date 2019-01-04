<template>
  <main class="main">
    <global-header class="header"/>
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
  grid-template-rows: 65px 1fr;
  grid-template-areas:
    'header sidebar'
    'container sidebar';

  .header {
    grid-area: header;
    background: #c5e6ef;
  }

  .container {
    grid-area: container;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
  .sidebar {
    grid-area: sidebar;
    background: #2f4e73;
  }
}
</style>
