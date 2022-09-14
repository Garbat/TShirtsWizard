<template>
  <div>
    <header>
      <h1>Wizard</h1>
      <DonateComponent></DonateComponent>
      <el-radio-group v-model="design_type" @change="saveLocal()">
        <el-radio-button label="no_overprint">Портрет</el-radio-button>
        <el-radio-button label="overprint">Оверпринт</el-radio-button>
      </el-radio-group>
    </header>

    <div class="article_input_group">
      <h4>Введите артикул</h4>
      <div class="els">
        <div class="form">
          <el-input placeholder="Артикул" v-model="article" @change="saveLocal()"></el-input>
          <!-- <el-button type="primary">Получить изображения</el-button> -->
        </div>
      </div>
    </div>

    <div class="content">
      <div class="images">
        <div class="overprint" v-if="design_type==='overprint'">
          <ProductImage v-for="(item, id) in $store.getters.getOverprint"
                        :article="article" v-bind:key="id"
                        :id="id"
                        v-if="showProduct(id)"
          ></ProductImage>
        </div>
        <div class="no_overprint" v-if="design_type==='no_overprint'">
          <ProductImage v-for="(item, id) in $store.getters.getNoOverprint"
                        type="no_overprint" :article="article" v-bind:key="id"
                        :id="id"
                        v-if="showProduct(id)"
          ></ProductImage>
        </div>

      </div>
    </div>
    <div class="list">
      <div class="overprint" v-if="design_type==='overprint'">

        <el-checkbox-group v-model="list.overprint" @change="saveLocal()">
          <el-checkbox
            v-for="(item, id) in $store.getters.getOverprint" :label="id" v-bind:key="id"
          >{{ item.title }}
          </el-checkbox>
        </el-checkbox-group>

      </div>
      <div class="no_overprint" v-if="design_type==='no_overprint'">
        <el-checkbox-group v-model="list.no_overprint" @change="saveLocal()">
          <el-checkbox
            v-for="(item, id) in $store.getters.getNoOverprint" :label="id" v-bind:key="id"
          >{{ item.title }}
          </el-checkbox>
        </el-checkbox-group>
      </div>

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
      design_type: null,
      list: {
        overprint: [],
        no_overprint: [],
      },
    }
  },
  components: {
    ProductImage,
    DonateComponent
  },
  created() {
    this.init()


  },
  methods: {
    init() {
      if (process.client && !!localStorage.getItem('overprint_list')) {
        this.list.overprint = localStorage.getItem('overprint_list').split(',')
      } else {
        for (let id in this.$store.getters.getOverprint) {
          this.list.overprint.push(id)
        }
      }

      if (process.client && !!localStorage.getItem('no_overprint_list')) {
        this.list.no_overprint = localStorage.getItem('no_overprint_list').split(',')
      } else {
        for (let id in this.$store.getters.getNoOverprint) {
          this.list.no_overprint.push(id)
        }
      }

      if (process.client && !!localStorage.getItem('main_article')) {
        this.article = localStorage.getItem('main_article')
      } else {
        this.article = this.$store.state.main_article
      }

      if (process.client && !!localStorage.getItem('design_type')) {
        this.design_type = localStorage.getItem('design_type')
      }

    },
    showProduct(id) {
      return !!this.list[this.design_type].find(el => el === id);
    },
    saveLocal() {
      localStorage.setItem('main_article', this.article)
      localStorage.setItem('overprint_list', this.list.overprint)
      localStorage.setItem('no_overprint_list', this.list.no_overprint)
      localStorage.setItem('design_type', this.design_type)
    }
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

.content {
  display: flex;
  max-width: calc(100% - 200px);
}

.list {
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px;
  height: 100vh;
  width: 200px;
  background: white;
}

</style>
