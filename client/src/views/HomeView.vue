<template>

    <header class="mainfirst w-full h-full absolute bg-cover justify-between p-12">
        <div class="flex justify-between w-full">

            <div class="logo text-white font-bold p-2">QWERy</div>

            <div class="nav flex gap-10 text-white">
                <nav class="navigation">
                    <RouterLink to="/FrontEnd/info">Информация</RouterLink>
                </nav>
                <nav class="navigation">
                    <RouterLink to="/FrontEnd/aboutme">О Нас</RouterLink>
                </nav>
                <nav class="navigation">
                    <RouterLink to="/FrontEnd/culture">Культура</RouterLink>
                </nav>
            </div>
            <div class="search-box flex justify-center items-center w-56 gap-1 p-2 border rounded-md border-none">
                <button class="search-button flex border-none bg-none">
                    <img class="w-5 h-5" src="../assets/icons/cart.png" alt="Search">
                </button>
                <input type="text" class="search-input flex bg-transparent border-none focus:border-none"
                    placeholder="Search...">
            </div>

        </div>
        <div class="center-text-header flex justify-center text-center flex-col p-32 items-start ml-96">
            <div class="font-bold text-white text-6xl">
                Откройте
            </div>
            <div class="texttwo flex text-white text-5xl justify-center">
                для себя чудесную Индонезию
            </div>
        </div>
    </header>
    <main class="maintwo shadow-black text-white">
        <div>
            Вам понравился отпуск?
        </div>
        <div>
            Вы будете поражены, если примете участие в этом парусном туре по острову Комодо. Так что это также обязательно для вас: помимо наслаждения туризмом на острове Комодо, вы также должны попробовать морской туризм.  Прекрасные воды Комодо познакомят вас со многими путешественниками из других стран.
        </div>
    </main>

</template>

<style scoped>
.search-input{
    outline: 0;
    outline-offset: 0;
}


.mainfirst {
    background-image: url(../assets/img/Background.png);
}

/*.parent{
    display: flex;
    justify-content: center;
    /*text-align: center;
    align-items: center;
    align-self: center;
    width: 100%;
    height: 100%;
}
    /* background-image: url(../assets/img/backgroundManAndProgramming.png); */

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
