<template>
    <!--! 37.18.102.197 -->
    <div class="product-card">
        <div v-if="product.attributes.sale" class="sale">Sale</div>
        <img :src="baseURL + product.attributes.img.data.attributes.url" />
        <h3>{{ product.attributes.title }}</h3>
        <p>{{ product.attributes.description }}</p>

        <p :class="{ price: priceRedact }">{{ product.attributes.price  + ' &#8381;' }}</p>
        <h4 v-if="product.attributes.sale">{{ product.attributes.sale + ' &#8381;' }}</h4>

        <!-- <button @click="changePrice">Редакт.</button> -->
        <!-- <button @click="$emit('myFunc', this.product.attributes.price)">Button</button> -->
        

    </div>
</template>

<script>
   console.log(import.meta.env.VITE_APP_HOST + `:` + import.meta.env.VITE_APP_PORT); 
   console.log(`${procces.env.VITE_APP_HOST}:${procces.env.VITE_APP_PORT} components/productcard`);

   
   
   export default {
       name: "ProductCard",
    props: {
        product: {},
    },
    data() {
        return {
            // http://37.18.102.197/cards
            baseURL: `http://37.18.102.197:1337/`,
            // baseURL: `https://localhost:1337`,
            // baseURL: `http://${import.meta.env.VITE_APP_HOST}:${import.meta.env.VITE_APP_PORT}`,
            // baseURL: `http://${import.meta.env.VITE_APP_HOST}:${import.meta.env.VITE_APP_PORT}`,
            // baseURL: `${import.meta.env.HOST}:${import.meta.env.PORT}`,
            sum: '', // Сумма продукта для редактирования
        }
        
    },
    methods: {
    //     changePrice() {
        //         const priceChild = this.product.attributes.price
        //         this.$emit('changePriceEvent', priceChild)
        //     }
        
    },
    computed: {
        priceRedact() {
            let sale = this.product.attributes.sale
            return sale > 0 ? true : false
        },
        
    }
}


</script>

<style>

.product-card {
    width: 200px;
    height: 360px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    gap: 10px;

    img {
        display: flex;
        width: 100%;
        height: 150px;
    }

    p{
        display: flex;
        height: max-content;
    }
    & .sale {
        display: flex;
        flex-direction: column;
        padding: 8px;
        position: absolute;
        top: 10px;
        left: -10px;
        background-color: red;
        border-radius: 0 10px;
        color: white;
        animation: hash5 0.9s 1.5s infinite linear;
    }

    & .price {
        text-decoration: line-through;
        color: red;
    }

    h4 {
        color: red;
        text-shadow: 0px 1px 5px blueviolet;
        animation: hash4 0.9s 1.5s infinite linear;
    }

}

/* ------------------------ [ KeyFrames ] ------------------------------- */
@keyframes hash4 {
    0% {
        color: red;
    }

    /* 45%{
        color: blueviolet;
    }
    55%{
        color: red;
    } */
    100% {
        color: darkblue;
    }
}

@keyframes hash5 {
    0% {
        color: white;
    }

    15% {
        color: aqua;
    }

    45% {
        color: green;
    }

    100% {
        color: white;
    }
}

/* ------------------------ [ KeyFrames END ] ------------------------------- */


</style>