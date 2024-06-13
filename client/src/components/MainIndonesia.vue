


<template>
  <div class="container mx-auto my-10 main-indonesia">
    <div class="flex items-center justify-center mb-10">
      <img :src="imgSrc" alt="Image 1" class=" w-6/12 mr-4 h-2/3"/> <!-- w-1/2 -->
      <div class="w-1/2 text-right">
        <h3 class="font-bold text-white text-7xl p-5 flex flex-wrap">{{ header }}</h3>
         <p class="flex flex-wrap text-white">{{ caption }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    imgSrc: String,
    header: String,
    caption: String,
  }
};
</script>

<!--
<template>
  
  <main class="maintwo shadow-black w-full text-red-500 bg-black h-full"> 

    <div class="relative h-full w-full">
      <img class="h-96" src="../assets/img/IndonesiaComponent2.png" alt=""> <div class="flex right-96">Вам понравился отпуск?</div>
    </div>
    <div class="flex ">
        

    </div>
    <div>
        Вы будете поражены, если примете участие в этом парусном туре по острову Комодо. Так что это также обязательно для вас: помимо наслаждения туризмом на острове Комодо, вы также должны попробовать морской туризм.  Прекрасные воды Комодо познакомят вас со многими путешественниками из других стран.
    </div>
</main>

</template>
-->

<!-- <script> -->
export default {
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
<!-- </script> -->

<style>
.main-indonesia {
  display: flex;
}
</style> <!--! h-11 -->