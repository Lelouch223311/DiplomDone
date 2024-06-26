<template>
  <!-- <div>
    <h2 class="mb-6 flex justify-center text-sm font-semibold text-emerald-600 uppercase dark:text-white">Создатель</h2>
    <ul class="text-gray-500 dark:text-gray-400 font-medium flex justify-center flex-col">
        <li class="liFirst mb-4 flex justify-center">
            <a href="https://github.com/Lelouch223311/" class="hover:underline ">Github-аккаунт</a>
        </li>
        <li class="liTwo mb-4 flex justify-center">
            <a href="https://t.me/Lelouch18" class="hover:underline">Телеграм</a>
        </li>
    </ul>
</div> -->


<footer class="bg-black dark:bg-gray-900 relative bottom-0 w-[100vw] z-9950  overflow-x-hidden">
  
  <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 overflow-x-hidden">
    
      <div class="md:flex md:justify-between overflow-x-hidden">
        <div class="mb-6 md:mb-0 overflow-x-hidden">
            <a href="" class="flex items-center overflow-x-hidden">
                <img src="../assets/favicons/indonesiaFLAG.ico" class="h-8 me-3 overflow-x-hidden" alt="Indonesia Logo" />
                <span class="overflow-x-hidden self-center text-2xl bg-transparent text-white font-semibold whitespace-nowrap dark:text-white">Indonesia</span>
            </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 overflow-x-hidden">

            <div>
                <h2 class="overflow-x-hidden mb-6 flex justify-start text-sm font-semibold text-emerald-600 uppercase dark:text-white">Создатель</h2>
                <ul class="overflow-x-hidden text-gray-500 dark:text-gray-400 font-medium justify-start flex-col">
                    <li class="liFirst mb-4 overflow-x-hidden">
                        <a href="https://github.com/Lelouch223311/" class="hover:underline ">Github-аккаунт</a>
                    </li>
                    <li class="liTwo overflow-x-hidden">
                        <a href="https://t.me/Lelouch18" class="hover:underline">Телеграм</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 overflow-x-hidden" />
    <div class="sm:flex sm:items-center sm:justify-between overflow-x-hidden">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 overflow-x-hidden">© 2024 <a href="" class="hover:underline overflow-x-hidden">by Лелуш</a>. Все ваши данные переданы Мне,хе-хе-хе.
        </span>

    </div>
  </div>
</footer>


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
.liFirst:hover{
  color: blueviolet; 
}
.liTwo:hover{
  color: rgba(0, 0, 255, 0.709); 
}

</style>