<template>
  <div class="container">
    <Menu/>
    <Nuxt/>
  </div>
</template>

<script>
import Menu from '../components/menu';

export default {
  components: {
    Menu
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  max-width: 1440px;
  padding: 10px 20px;
}
</style>
