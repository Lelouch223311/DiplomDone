<template>
  <div v-if="isModalOpen" class="modal fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog"
    aria-modal="true">
    
    <div class="modal-bg bg-orange-400/30 w-[100vw] h-[100vh] absolute top-0 left-0"></div>
    
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      
      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="typing-demo text-lg leading-6 font-medium text-gray-900" id="modal-title">ВНИМАНИЕ</h3>
              
              <div class="mt-2">
                <p class="typing-demoTwo text-sm text-gray-500">
                  Здравствуйте ! Я увы не смог доделать адаптив нормально,так что на телефоне он будет смотреться не совсем красиво. Hе успел доделать. 
                </p>
                <p class="text-sm text-red-600">
                  *Вы можете в своём мобильном браузере нажать на три точки в углу справо,и нажать "версия для ПК",отдалить на максимум и будет нормально.
                </p>
                <p class=" text-sm text-red-700">*все кнопки работают!</p>
              </div>
            </div>
          </div>
        </div>

          <img src="../assets/gifs/myGifSorry.gif" alt="">
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button @click="closeModal" :style="dynamicStyles" type="button"
            class="close-modal-btn w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm ">
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useEventListener } from '@vueuse/core'

export default {
  name: "Test",
  created() { },
  data() {
    return {
      isModalOpen: true,
    };
  },
  props: {

  },
  methods: {
    closeModal() {
      this.isModalOpen = false;
    }
  },
};
</script>

<style scoped>

.modal-bg {
  backdrop-filter: blur(3.5px); /* 3.5px */

}

.typing-demo {
  width: 8.3ch;
  color: lime;
  background-color: black;
  animation: typing 2.5s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2rem;
}



@keyframes typing {
  0% {
    width: 0
  }

  50%,
  40% {
    width: 8.3ch
  }
}

@keyframes blink {
  50% {
    border-color: transparent
  }
}


</style>

