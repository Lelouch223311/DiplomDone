<template>


    <div class="products">
        <ProductCard 
        @myFunc="changePrice"
        v-for="item in products"
        :product="item"
        :key="item.id"
        />
    </div>

    <!-- <input type="text" v-model="price" placeholder="цена"> -->
 
</template>

<script>
   console.log(import.meta.env.VITE_APP_HOST + `:` + import.meta.env.VITE_APP_PORT); 
// console.log(`${procces.env.VITE_APP_HOST}:${procces.env.VITE_APP_PORT}`)

import ProductCard from '../components/ProductCard.vue';
export default {
   components:{
       ProductCard: ProductCard
   },
   data () {
       return{
           products: [],
           price: null,
       }
   },
   methods: {
    changePrice(priceChild){
            this.price = priceChild
        },
   },
   async beforeMount(){
        // const data = await fetch(`http://${procces.env.VITE_APP_HOST}:${procces.env.VITE_APP_PORT}/api/products?populate=*`)
        // const data = await fetch(`http://${import.meta.env.VITE_APP_HOST}:${import.meta.env.VITE_APP_PORT}/api/products?populate=*`)
        const data = await fetch(`http://localhost:1337/api/products?populate=*`)
    
        const js = await data.json()
        this.products = js.data
   }
   }

</script>

<style scoped>
.products{
    width: 95%;
    margin: 40px auto;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

</style>