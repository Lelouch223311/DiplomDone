<template>

    <Modalka />


    <HeaderIndonesia />
    <MainIndonesia 

        :imgSrc="image1" 
        header="Вам понравился отпуск ?"
        caption="Вы будете поражены, если примете участие в этом парусном туре по острову Комодо. Так что это также обязательно для вас: помимо наслаждения туризмом на острове Комодо, вы также должны попробовать морской туризм.  Прекрасные воды Комодо познакомят вас со многими путешественниками из других стран." 
        
        />

    <CenterIndonesia 
        text="Твёрдо шагайте, мы поднимемся вместе!"
        text2="Наслаждаться бескрайними просторами песчаного моря, быть свидетелем великолепия взмывающей в небо горы Семеру и любоваться красотой солнца, выходящего из-под своего ложа, или иным образом наслаждаться тусклыми сумерками с хребта Бромо - это незабываемые впечатления от посещения Бромо."

        />

    <MainIndonesia 
        :imgSrc="image2"
        header="Наша культура здесь очень дружелюбна к людям"
        caption="Известна своей вежливостью, манерами и мягкостью. Это становится характерной чертой, когда они смешиваются с другими племенами, и становится основными чертами, передаваемыми их предками." 
        
        />
    <cards />

    <FooterIndonesia />





        
</template>

<style scoped>
.search-input {
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
let btn = document.body.querySelector('.btnOne')
// import CenterIndonesia from '../components/CenterIndonesia.vue';
import CenterIndonesia from '../components/CenterIndonesia.vue';
import HeaderIndonesia from '../components/HeaderIndonesia.vue';
import MainIndonesia from '../components/MainIndonesia.vue';
import cards from '../views/cards.vue';
import FooterIndonesia from '../components/FooterIndonesia.vue';
import Modalka from '../components/Modalka.vue'
// console.log(` 'Путь этого файла: client/views/HomeView.vue' ${import.meta.env.VITE_APP_HOST} + ":" + ${import.meta.env.VITE_APP_PORT}`);
// console.log(`${procces.env.VITE_APP_HOST}:${procces.env.VITE_APP_PORT}  HomeView.vue`)

// import ProductCard from '../components/ProductCard.vue'

export default {
    components: {
        HeaderIndonesia,
        MainIndonesia,
        CenterIndonesia,
        cards,
        FooterIndonesia,
        Modalka
    },
    data() {
        return {
            products: [],
            title: false,
            inputValue: null,
            // ne pravilno img1-img2 image1: '../../public/assets/img/IndonesiaComponent2.png',
            // image2: '../../public/assets/img/IndonesiaComponent2_1.png',
            image1: '../../assets/img/IndonesiaComponent2.png',
            image2: '../../assets/img/IndonesiaComponent2_1.png'
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




// let modalka = document.body.querySelector('.alert')
// modalka = 'Здравствуйте ! Я увы не смог доделать адаптив нормально,так что на телефоне он будет ужасным\n\Связанно это с тем,что почти под конец,Я решил изменить свой проект,и просто не успел доделать.'
// alert(modalka)
</script>
