<template>
  <div>
    <header>
      <h1>Wizard</h1>
      <DonateComponent></DonateComponent>
      <el-radio-group v-model="design_type">
        <el-radio-button label="portrait">Портрет</el-radio-button>
        <el-radio-button label="overprint">Оверпринт</el-radio-button>
      </el-radio-group>
    </header>

    <div class="article_input_group">
      <h4>Введите артикул</h4>
      <div class="els">
        <div class="form">
          <el-input placeholder="Артикул" v-model="article"></el-input>
          <!-- <el-button type="primary">Получить изображения</el-button> -->
        </div>
      </div>
    </div>

    <div class="images">
      <ProductImage v-if="design_type==='overprint'" v-for="(item, id) in $store.getters.getOverprint" :article="article" @key="id"
                    :id="id"></ProductImage>
      <ProductImage v-if="design_type==='portrait'" v-for="(item, id) in $store.getters.getNoOverprint" type="no_overprint" :article="article" @key="id"
                    :id="id"></ProductImage>
    </div>
  </div>
</template>

<script>
import ProductImage from '../components/productImages.vue';
import DonateComponent from '../components/donateComponent.vue';


export default {
  name: 'IndexPage',
  data() {
    return {
      article: 3071829,
      design_type: null
    }
  },
  components: {
    ProductImage,
    DonateComponent
  }
}
</script>

<style scoped lang="scss">
.article_input_group {
  > h4 {
    margin-bottom: 10px;
    font-weight: normal;
  }

  .form {
    display: flex;

    .el-input {
      width: 300px;
      margin-right: 10px;
    }
  }
}

</style>
