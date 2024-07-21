import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/home',
			name: 'Home',
      redirect: '/',
		},
		{
			path: '/',
			name: 'CardBuddy',
			component: () => import('@/views/CardBuddy.vue'),
		},
	],
});

export default router;
