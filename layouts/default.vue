<template>
  <div>
    <global-header/>
    <div class="container">
      <nuxt/>
    </div>
    <global-sidebar/>
  </div>
</template>

<script>
import GlobalHeader from '../components/GlobalHeader'
import GlobalSidebar from '../components/GlobalSidebar'

export default {
  components: { GlobalSidebar, GlobalHeader }
}
</script>

<style>
</style>
