<template>
  <div class="h-[100vh] flex justify-center items-center w-full">


    <div class="cartinka h-[80vh] flex justify-center items-center w-2/3 rounded-xl flex-col">
      <p class="flex justify-center text-white font-bold text-3xl">{{ text }}</p>
      <p class="flex text-white">{{ text2 }}</p>
    </div>

  </div>



</template>

<script>

export default {
  name: "CenterIndonesia",
  data() {
    return {
    };
  },
  props: {
    text: String,
    text2: String,
  }
};
</script>
<style>
.cartinka {

  background-image: url('../assets/img/IndonesiaComponent3.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

}
</style>