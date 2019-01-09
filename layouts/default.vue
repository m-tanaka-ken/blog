<template>
  <main class="main">
    <div class="header-container">
      <global-header />
    </div>
    <div class="container">
      <nuxt class="content"/>
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
  background: #f2f9f8;

  .header-container {
    grid-area: header;
    background: #c5e6ef;
  }

  .header {
    width: 860px;
    margin: 0 auto;
  }

  .container {
    grid-area: container;
    display: flex;
    min-height: 100vh;
    justify-content: center;
    min-width: 100%;
  }

  .content {
    width: 860px;
    margin: 0 auto;
  }

  .sidebar-container {
    grid-area: sidebar;
    background: #2f4e73;
  }
}

@media (max-width: 1100px) {
  .main {
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'container';

    .sidebar-container {
      display: none;
    }
  }
}

@media (max-width: 420px) {
  .main {
    grid-template-rows: 60px;

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .header {
      width: 100%;
    }
  }
}
</style>
