<template>
  <div class="">
    <template v-if="link">
      <a href="link">Sample Link</a>
    </template>
    <template v-else>
      <button>Button</button>
    </template>
  </div>
</template>

<script>
export default {
  props: ['link']
};
</script>

<style lang="css">
</style>
