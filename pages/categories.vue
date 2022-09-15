<template>
  <div>
    <el-input placeholder="Поиск" v-model="search"></el-input>
    <ul class="categories">
      <li class="category"
          v-for="category in categories.filter(cat=>cat.children.filter(child=>child.name.toLowerCase().indexOf(search.toLowerCase())!==-1).length>0)"
          v-bind:key="category.id">
        {{ category.name }}
        <ul>
          <li
            v-for="child in category.children.filter(child=>child.name.toLowerCase().indexOf(search.toLowerCase())!==-1)"
            v-bind:key="child.id">
            {{ child.name }}
          </li>
        </ul>
      </li>
    </ul>

  </div>
</template>

<script>
import categories_json from '~/categories.json';

export default {
  name: "categories",
  data() {
    return {
      categories: {},
      search: ''
    }
  },
  created() {
    this.categories = categories_json;
  }
}
</script>

<style lang="scss" scoped>
ul {
  margin-bottom: 10px;

  li {
    margin-bottom: 2px;
  }
}
</style>
