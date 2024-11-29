<template>
  <header class="mainfirst w-full overflow-x-hidden h-full relative flex flex-col justify-start bg-cover p-12">
    <div class="flex justify-between w-full">

        <div class="logo text-white font-bold p-2"><RouterLink to="/">QWERy</RouterLink></div>

        <div class="nav flex gap-10 text-white">
            <nav class="navigation">
                <RouterLink to="/info">Информация</RouterLink>
            </nav>
            <nav class="navigation">
                <RouterLink to="#aboutme">О Нас</RouterLink>
            </nav>
            <nav class="navigation">
                <RouterLink to="#culture">Культура</RouterLink>
            </nav>
        </div>
        <div class="search-box flex justify-center items-center w-56 gap-1 p-2 border rounded-md border-none">
            <button class="search-button flex border-none bg-none">
                <img class="w-5 h-5" src="../assets/icons/cart.png" alt="Search">
            </button>
            <input type="text" class="search-input flex bg-transparent border-none focus:border-none font-sans"
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
    <div class="gradient h-40 absolute bottom-0 w-[100vw] left-0">

    </div>
</header>
</template>

<script>
export default {
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>
<style scoped>
.gradient{
  background-image: linear-gradient(to bottom, rgba(0,0,0,0),rgba(0,0,0,1));
}
</style>