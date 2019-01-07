<template>
  <aside class="sidebar">
    <div class="profile">
      <div class="icon-container">
        <img
          class="icon"
          src="/images/icon.png"
          alt="my-icon"
        >
      </div>
      <h2>Masaki Tanaka</h2>
      <p>PHPer→フロントエンドエンジニア</p>
      <div class="sns-icons">
        <a 
          class="icon-container" 
          href="https://twitter.com/JfipKen"
          target="_blank"
        >
          <img
            class="icon"
            src="/images/twitter_icon.png"
            alt="twitter">
        </a>
        <a 
          class="icon-container" 
          href="https://github.com/m-tanaka-ken"
          target="_blank"
        >
          <img
            class="icon"
            src="/images/github-icon.png"
            alt="twitter">
        </a>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'GlobalSidebar'
};
</script>

<style lang="scss">
.sidebar {
  padding: 15px;
}

.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f2f9f8;
  min-height: 350px;
}

.icon-container {
  width: 100px;
}

.icon {
  width: 100%;
  border-radius: 100%;
}

.sns-icons {
  display: flex;
  justify-content: center;
  width: 100%;

  .icon-container {
    display: block;
    width: 40px;

    & + .icon-container {
      margin-left: 10px;
    }
  }
}
</style>
