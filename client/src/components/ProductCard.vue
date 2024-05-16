<template>
    <div class="product-card">
        <div v-if="product.attributes.sale" class="sale">Sale</div>
        <img :src="baseURL + product.attributes.img.data.attributes.url">
        <h3>{{ product.attributes.title }}</h3>
        <p>{{ product.attributes.description }}</p>

        <p :class="{ price: priceRedact }">{{ product.attributes.price  + ' шекелей' }}</p>
        <h4 v-if="product.attributes.sale">{{ product.attributes.sale + ' шекелей' }}</h4>

        <!-- <button @click="changePrice">Редакт.</button> -->
        <!-- <button @click="$emit('myFunc', this.product.attributes.price)">Button</button> -->
        

    </div>
</template>

<script>



export default {
    name: "ProductCard",
    props: {
        product: {},
    },
    data() {
        return {
            baseURL: 'http://localhost:1337',
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
        width: 100%;
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