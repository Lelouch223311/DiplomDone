import { createWebHistory } from "vue-router";
import { createRouter  } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/FrontEnd/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/FrontEnd/newpage',
            name: 'newpage',
            component: () => import('../views/NewPage.vue')
        },
        // {
        //     path: '/prodcard',
        //     name: 'prodcard',
        //     component: () => import('../components/ProductCard.vue')
        // },
        {
            path: '/FrontEnd/cards',
            name: 'cards',
            component: () => import('../views/cards.vue')
        }
    ]
});

export default router