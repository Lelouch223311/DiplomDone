<template>
    <!--! 37.18.102.197 -->

    <div class="product-card">
        <div v-if="product.attributes.sale" class="sale">Скидка</div>
        <img :src="product.attributes.img.data.attributes.url" />
        <h3>{{ product.attributes.title }}</h3>
        <p class="text-red-600">{{ product.attributes.description }}</p>
        <!-- <button class=""><a href="https://www.aviasales.ru/?params=AER0107JKT1">Подробнее</a></button> -->

        <p :class="{ price: priceRedact }">{{ product.attributes.price + ' &#8381;' }}</p>
        <h4 v-if="product.attributes.sale">{{ product.attributes.sale + ' &#8381;' }}</h4>
        <button
            class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span
                class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-full">
                <a href="https://www.aviasales.ru/?params=AER0107JKT1">Подробнее</a>
            </span>
        </button>

        <!-- <button @click="changePrice">Редакт.</button> -->
        <!-- <button @click="$emit('myFunc', this.product.attributes.price)">Button</button> -->


    </div>

    <!-- <button
    class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
    <span
        class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-full">
        <a href="https://www.aviasales.ru/?params=AER0107JKT1">Подробнее</a>
    </span>
</button> -->


</template>

<script>

//    console.log(import.meta.env.VITE_APP_HOST + `:` + import.meta.env.VITE_APP_PORT); 
//    console.log(`${procces.env.VITE_APP_HOST}:${procces.env.VITE_APP_PORT} components/productcard`);



export default {
    name: "ProductCard",
    props: {
        product: {},
    },
    data() {
        return {
            // http://37.18.102.197/cards
            baseURL: `https://cozy-chicken-d411647e9f.strapiapp.com/`,
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
    width: 250px;
    /* 200px */
    height: 460px;
    /* 360px */
    box-shadow: 0 0 10px black;
    border-radius: 10px;
    padding: 5px;
    /* 10px padding */
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow-x: hidden;
    border: 5px solid;
    animation: cards 3s 3s linear infinite;
    gap: 10px;

    color: white;

    img {
        display: flex;
        width: 100%;
        height: 150px;
    }

    p {
        display: flex;
        height: max-content;
        /* animation: peshkaFirst 1s 1s infinite linear; */
    }

    & .sale {
        display: flex;
        flex-direction: column;
        padding: 8px;
        position: absolute;
        top: 2px;
        left: 7px;
        z-index: 100;
        background-color: black;
        border-radius: 0 10px;
        color: white;
        animation: hash5 0.9s 1.5s infinite linear;
    }

    & .price {
        text-decoration: line-through;
        color: red;
    }

    h4 {
        display: flex;
        margin-top: -15px;
        text-shadow: 0px 1px 5px blueviolet;
        animation: hash4 0.9s 1.5s infinite linear;
    }

}

/* ------------------------ [ KeyFrames ] ------------------------------- */
@keyframes peshkaFirst {
    0% {
        color: white;
    }

    100% {
        color: white;
    }
}

@keyframes cards {
    0% {
        border-color: red;
        translate: 2s;
    }

    50% {
        border-color: lime;
        translate: 2s;

    }

    75% {
        border-color: blueviolet;
        translate: 1.5s;
    }

    100% {
        border-color: red;
        translate: 2s;
    }
}

@keyframes hash4 {
    0% {
        color: lime;
        translate: 2s;

    }

    45% {
        color: blueviolet;
        translate: 2s;
    }

    55% {
        color: blue;
        translate: 2s;
    }

    75% {
        color: white;
        translate: 2s;

    }

    100% {
        color: lime;
        transition: 2s;
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