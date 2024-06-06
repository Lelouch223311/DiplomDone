<script setup>
import { RouterView, RouterLink } from 'vue-router';

// console.log(`${procces.env.VITE_APP_HOST}:${procces.env.VITE_APP_PORT} app.vue`)



</script>



<template>
  <header>
    <ul>
      <li>
        <RouterLink to="/FrontEnd/">Главная</RouterLink>
      </li>
      <li>
        <!-- <RouterLink to="/about">O Nas</RouterLink> -->
      </li>
      <li>
        <RouterLink to="/FrontEnd/cards">Карточки</RouterLink>
      </li>
    </ul>
  </header>

  <main>
    <RouterView />

  </main>


  <footer>

    <ul>
      <li>
        <RouterLink to="/FrontEnd/">Главная</RouterLink>
      </li>
      <li>
        <!-- <RouterLink to="/about">O Nas</RouterLink> -->
      </li>
      <li>
        <RouterLink to="/FrontEnd/cards">Карточки</RouterLink>
      </li>
    </ul>
  </footer>
</template>

<style scoped>


body {
  user-select: none;
}

header{
  width: 100%;
  height: 70px;
  box-shadow: 0 0 10px black;
  display: flex;
  justify-content: center;
  align-items: center;
  ul{
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    gap: 50px;
    
    li{
      a{
        text-decoration: none;
        color: black;
        &:hover{
          color: blue;
        }
      }
      & .router-link-active{
        color: red;
      }
    }
  }
}

main{
  flex: 1 1 auto;
  overflow-y: auto;
  
}

footer{
  width: 100%;
  height: 7%;
  border-radius: 10px;
  /* background-color: green; */
  box-shadow: 0 0 10px black;
  display: flex;
  justify-content: center;
  align-items: center;

  ul{
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    gap: 50px;
    
    li{
      
      a{
        text-decoration: none;
        color: black;

        &:hover{
          color: blueviolet;
          text-shadow: 5px 5px 5px 65px black;
        }
      }
    }
    & .router-link-active{
      color: red;
    }
  }
}

</style>