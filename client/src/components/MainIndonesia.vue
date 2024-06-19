


<template>
  
  <!-- <div class="container mx-auto my-10 main-indonesia">
    <div class="flex items-center justify-center mb-10">
      <img :src="imgSrc" alt="Imageы" class=" w-6/12 mr-4 h-2/3 shadow rounded-xl"/> 
      <div class="w-1/2 text-right">
        <h3 class="font-bold text-white text-7xl p-5 flex flex-wrap">{{ header }}</h3>
         <p class="flex flex-wrap text-white">{{ caption }}</p>
      </div>
    </div>
  </div> -->

    <div class="container mx-auto flex p-2 space-y-4 border border-gray-500 rounded-xl bg-black">
      <div class="flex flex-row space-x-4 h-[400px]">
        <!-- <img src="/assets/img/IndonesiaComponent2.png" alt="Описание картинки" class="w-1/2 rounded shadow" /> -->
        <div class="flex flex-col justify-center w-1/2">

          <img :src="imgSrc" alt="Images" class="max-w-[450px] max-h-full  shadow rounded-xl"/> 

        </div>
        <div class="flex flex-col justify-center h-full w-1/2"> 
        <h3 class="font-bold text-red-600 text-4xl flex flex-wrap first-letter:border-lime-400">{{ header }}</h3>
        <p class="peshka flex flex-wrap text-white">{{ caption }}</p>
        </div>
      </div>
      <!-- <div class="flex flex-row-reverse space-x-reverse space-x-4">
        <img :src="imgSrc" alt="Imageы" class=" w-6/12 mr-4 h-2/3 shadow rounded-xl"/> 
        <h3 class="font-bold text-white text-4xl p-5 flex flex-wrap">{{ header }} </h3>
        <p class="flex flex-wrap text-white">{{ caption }} </p>
      </div> -->
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
.peshka{
  font-family: Open Sans;
}

/*.main-indonesia {
   display: flex; 
}*/
</style>