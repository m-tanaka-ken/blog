<template>
  <main
    v-touchmove="handleTouchmove"
    class="main">
    <div class="header-container">
      <global-header @clickProfile="toggleSidebar" />
    </div>
    <div class="container">
      <nuxt class="content"/>
    </div>
    <div
      :class="{show: isShow}"
      class="sidebar-container">
      <global-sidebar/>
    </div>
    <div 
      class="sidebar-mask" 
      @click="toggleSidebar"/>
  </main>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader';
import GlobalSidebar from '@/components/GlobalSidebar';

export default {
  components: { GlobalSidebar, GlobalHeader },

  data() {
    return {
      isShow: false
    };
  },

  methods: {
    toggleSidebar() {
      this.isShow = !this.isShow;
      this.toggleLockScroll();
    },

    handleTouchmove(event) {
      if (!this.isShow) return;
      event.preventDefault();
      return window.clientWidth > 1100;
    },

    toggleLockScroll() {
      const body = document.body;
      if (this.isShow) {
        body.classList.add('lock-scroll');
        return;
      }

      body.classList.remove('lock-scroll');
    }
  }
};
</script>

<style>
.lock-scroll {
  overflow: hidden;
}
</style>

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

  .sidebar-container {
    z-index: 1;
  }

  .sidebar-mask {
    position: fixed;
    top: 0;
    display: none;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .sidebar-container.show + .sidebar-mask {
    display: block;
  }
}

@media (max-width: 1100px) {
  .main {
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'container';

    .sidebar-container {
      position: absolute;
      display: none;
      height: 100vh;
      right: 0;

      &.show {
        display: block;
      }
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
