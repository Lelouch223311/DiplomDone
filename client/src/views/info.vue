<template>
  <header>
    <nav>
      <ol class="text-white px-5 py-5 rounded-full border grid">
        
        <a href="#aboutproject">Инфо о Проектах</a>
        <a href="#aboutme">Инфо о Себе</a>
        <router-link to="/">к Главной</router-link>
      </ol>

    </nav>

  </header>
  <main>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br> <br><br><br><br><br> <br><br><br><br><br><br><br><br><br><br>
    <div id="aboutme"><b class="flex justify-center">Информация о Себе:</b></div>

    <p>Привет ! Хотел бы рассказать тебе про свой опыт,мне 21 год и я умею следующее: </p>
    <p class="text-gray-700">Эти деления просто для красоты и не относятся к реальному опыту разработки,опыт указан рядом</p>
    <p>JavaScript [<b class="b_anim text-red-500">| | </b> | | | ] <b class="text-gray-600">Опыт разработки: 7 месяцев</b> </p>
    <p>HTML [<b class="b_anim text-red-500">| | </b> | | | ] <b class="text-gray-600">Опыт разработки: 7 месяцев</b></p>
    <p>CSS [<b class="b_anim text-red-500">| | </b> | | | ] <b class="text-gray-600">Опыт разработки: 7 месяцев</b></p>
    <p>MySQL [<b class="b_anim text-red-500">| | </b> | | | ] <b class="text-gray-600">Опыт разработки: 2 года</b></p>
    <p>Git [<b class="b_anim text-red-500">| | </b> | | | ] <b class="text-gray-600">Опыт разработки: 7 месяцев</b></p>

    <p>Vue.js [<b class="b_anim b_anim text-red-500">| | </b> | | | ] <b class="text-gray-600">Опыт разработки: 5 месяцев</b></p>
    <p>React [<b class="b_anim text-red-500">| </b> | | | | ] <b class="text-gray-600">Опыт разработки: 2 недели</b></p>
    <p>Node.js [<b class="b_anim text-red-500">|</b> | | | | ] <b class="text-gray-600">Опыт разработки: 3 месяца</b></p>
    <p>MongoDB [<b class="b_anim text-red-500">| </b> | | | | ] <b class="text-gray-600">Опыт разработки: ~2 недели</b></p>
    <p>Express [<b class="b_anim text-red-500">|</b> | | | | ] <b class="text-gray-600">Опыт разработки: ~2 недели</b></p>
    <p>Bootstrap [<b class="b_anim text-red-500">| </b> | | | | ] <b class="text-gray-600">Опыт разработки: пару дней (пересел на Tailwind)</b></p>
    <p>Tailwind [<b class="b_anim text-red-500">| | </b> | | | ] <b class="text-gray-600">Опыт разработки: 4 месяца</b></p>
    <p>Figma [<b class="b_anim text-red-500">| | </b> | | | ] <b class="text-gray-600">Опыт разработки: 6 месяцев</b></p>

    <p class="text-gray-800">Надеюсь тебе понравилась такая иллюстрация :3</p>
    <p class="text-gray-800">Я нигде не наврал и т.д ! Всё что указано - то и есть !</p>

  </main>
  <main>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br> <br><br><br><br><br> <br><br><br><br><br><br><br><br><br><br>
    <div id="aboutproject"><b class="flex justify-center">Информация о Проектах:</b></div>

    <p>Увы но это мой единственный нормальный проект :c <br>другие я не хочу даже афишировать :3</p>

    <p class="text-gray-400">Повторю: Я нигде не наврал и т.д ! Всё что указано - то и есть !</p>

  </main>
  <footer>
    <h1>
      <br class="text-white bg-white w-12 h-12" />

    </h1>
  </footer>
</template>

<script>
export default {
  name: "info",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style>
*{
  color:white;
}
nav{

  position: fixed;
  right: 0;
  top: 50%;       /* Центрирование по вертикали (можно изменить по необходимости) */
  transform: translateY(-50%);
  padding: 30px;

}

.b_anim{
  animation: palki 0.5s 0.5s infinite linear;
}

@keyframes palki {
  0% {
    
    color:blue;
  }
  50% {
    color: red;
  }
  100% {
    color:blueviolet;
  }
}

</style>