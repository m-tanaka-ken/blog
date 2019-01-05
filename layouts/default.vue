<template>
  <main class="main">
    <div class="header-container">
      <global-header />
    </div>
    <div class="container">
      <nuxt/>
    </div>
    <div class="sidebar-container">
      <global-sidebar/>
    </div>
  </main>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader';
import GlobalSidebar from '@/components/GlobalSidebar';

export default {
  components: { GlobalSidebar, GlobalHeader }
};
</script>

<style lang="scss" scoped>
.main {
  display: grid;
  grid-template-columns: 1fr 240px;
  grid-template-rows: 65px 1fr;
  grid-template-areas:
    'header sidebar'
    'container sidebar';

  .header-container {
    grid-area: header;
    background: #c5e6ef;
  }

  .container {
    grid-area: container;
    display: flex;
    min-height: 100vh;
    justify-content: center;
    margin-top: 50px;
    min-width: 100%;
  }

  .sidebar-container {
    grid-area: sidebar;
    background: #2f4e73;
  }
}
</style>
