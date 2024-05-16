import { createWebHistory } from "vue-router";
import { createRouter  } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/newpage',
            name: 'newpage',
            component: () => import('../views/NewPage.vue')
        },
        {
            path: '/prodcard',
            name: 'prodcard',
            component: () => import('../components/ProductCard.vue')
        },
        {
            path: '/cards',
            name: 'cards',
            component: () => import('../views/Cards.vue')
        }
    ]
});

export default router