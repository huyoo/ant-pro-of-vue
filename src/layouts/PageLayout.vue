<template>
  <div>
    <div>head</div>
    <div class="content">
      <span>content</span>
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PageLayout"
  }
</script>

<style scoped>

</style>