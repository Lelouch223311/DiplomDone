<template>
    <HeaderIndonesia />
    <MainIndonesia 
        :imgSrc="image1"
        header="Вам понравился отпуск ?"
        caption="Вы будете поражены, если примете участие в этом парусном туре по острову Комодо. Так что это также обязательно для вас: помимо наслаждения туризмом на острове Комодо, вы также должны попробовать морской туризм.  Прекрасные воды Комодо познакомят вас со многими путешественниками из других стран."
    />
    <MainIndonesia 
        :imgSrc="image2" 
        header="Вам понравился отпуск ?"
        caption="Вы будете поражены, если примете участие в этом парусном туре по острову Комодо. Так что это также обязательно для вас: помимо наслаждения туризмом на острове Комодо, вы также должны попробовать морской туризм.  Прекрасные воды Комодо познакомят вас со многими путешественниками из других стран."
    />
    <!-- <MainIndonesia :items="[
        {image: '../assets/img/IndonesiaComponent2.png', description: 'Вам понравился отпуск?', descriptiontwo: 'Вы будете поражены, если примете участие в этом парусном туре по острову Комодо. Так что это также обязательно для вас: помимо наслаждения туризмом на острове Комодо, вы также должны попробовать морской туризм.  Прекрасные воды Комодо познакомят вас со многими путешественниками из других стран.'}, 
        {image: '../assets/img/IndonesiaComponent2.png', description: 'This is a sample description 2'}
      ]"/> -->
      
      

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
import HeaderIndonesia from '../components/HeaderIndonesia.vue';
import MainIndonesia from '../components/MainIndonesia.vue';
// console.log(` 'Путь этого файла: client/views/HomeView.vue' ${import.meta.env.VITE_APP_HOST} + ":" + ${import.meta.env.VITE_APP_PORT}`);
// console.log(`${procces.env.VITE_APP_HOST}:${procces.env.VITE_APP_PORT}  HomeView.vue`)

// import ProductCard from '../components/ProductCard.vue'

export default {
    components: {
        HeaderIndonesia,
        MainIndonesia,
    },
    data() {
        return {
            products: [],
            title: false,
            inputValue: null,
            image1: '../assets/img/IndonesiaComponent2.png',
            image2: '../assets/img/IndonesiaComponent2.png',
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
