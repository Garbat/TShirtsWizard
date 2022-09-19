<template>
  <div>
    <h3>{{ product.title }}</h3>
    <div class="cards">
      <el-card v-for="img in product.images" v-bind:key="img" v-loading="loading">
        <div class="img">
          <img :src="getImages(img)" alt="">
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productImages',
  props: ['article', 'id', 'type'],
  data() {
    return {
      loading: false,
      product: {},
      size: 250,
      color: 'white'
    }
  },
  mounted() {
    if (this.type === 'no_overprint') {
      this.product = this.$store.getters.getNoOverprint[this.id]
    } else {
      this.product = this.$store.getters.getOverprint[this.id]
    }

  },
  methods: {
    getImages(template) {
      return `https://storage-lk.vsemayki.ru/images/0/0/0/${this.article}/previews/${template}_${this.color}_${this.size}.jpg`;
    }
  }
}
</script>

<style scoped lang="scss">
.cards {
  display: flex;
  flex-wrap: wrap;

  .el-card {
    margin: 5px;
    width: 200px;
    height: 200px;

    .img {
      width: 100%;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
}

</style>
