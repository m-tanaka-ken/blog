<template>
  <aside class="sidebar">
    <div class="profile">
      <div class="icon-container">
        <img
          class="icon"
          src="/images/icon.png">
      </div>
      <h2>Masaki Tanaka</h2>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'GlobalSidebar'
};
</script>

<style lang="scss">
.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f2f9f8;
  min-height: 400px;
}

.icon-container {
  width: 100px;
}

.icon {
  width: 100%;
  border-radius: 100%;
}
</style>
