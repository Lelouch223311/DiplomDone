<template>
    <div>
        <h1>Создатель Сайта решил сделать эту страницу Корневой(по секрету говорю)</h1>
        <h2> <span style="color:gray; display: flex; justify-content: center;">Это главная страница HomeView.vue in client</span></h2>
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
// console.log(` 'Путь этого файла: client/views/HomeView.vue' ${import.meta.env.VITE_APP_HOST} + ":" + ${import.meta.env.VITE_APP_PORT}`);
// console.log(`${procces.env.VITE_APP_HOST}:${procces.env.VITE_APP_PORT}  HomeView.vue`)

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
