<template>
    <div>
        <h3>{{product.title}}</h3>
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
    export default{
        name: 'productImages',
        props: ['article', 'id', 'type'],
        data(){
            return{
                loading: false,
                product: {},
                size: 250,
            }
        },
        mounted(){
          if(this.type==='no_overprint'){
            this.product = this.$store.getters.getNoOverprint[this.id]
          } else {
            this.product = this.$store.getters.getOverprint[this.id]
          }

        },
        methods: {
            getImages(template){
                let pathArr = template.split('ARTICLE')
                let path = pathArr[0]+this.article+pathArr[1]

                pathArr = path.split('SIZE')
                path = pathArr[0]+this.size+pathArr[1]

                return path;
            }
        }
    }
</script>

<style scoped lang="scss">
    .cards{
        display: flex;
        flex-wrap: wrap;
        .el-card{
            margin: 5px;
            width: 200px;
            height: 200px;
        .img{
            width: 100%;

            img{
                width: 100%;
                height: auto;
            }
        }
    }
    }

</style>
