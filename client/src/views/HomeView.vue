<template>
    <div>
        <h1>Создатель Сайта решил сделать эту страницу Корневой(по секрету говорю)</h1>
    </div>



    <div class="">
        <h1 v-show="title">Главная</h1>
    </div>
</template>
<style scoped>
h1{
    display: flex;
    justify-content: center;
    
}
.products {
    display: flex;
    flex-wrap: wrap;

}
</style>
<script>
console.log(` 'Путь этого файла: client/app.vue' ${import.meta.env.VITE_APP_HOST} + ":" + ${import.meta.env.VITE_APP_PORT}`);

// import ProductCard from '../components/ProductCard.vue';



export default {

    data() {
        return {
            products: [],
            title: false,
            inputValue: null,

        };
    },
    methods: {
        titleFunc(event) {
            this.title = !this.title;
        },

        // myFunc(event){
        //     alert('Alert Bro')
        // },
    },
};

</script>
