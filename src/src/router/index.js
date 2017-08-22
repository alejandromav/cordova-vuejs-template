import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/home';
import Settings from '@/components/settings/settings';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			alias: [ '/index.html' ],
			name: 'Home',
			component: Home
		},
		{
			path: '/settings',
			name: 'Settings',
			component: Settings
		}
	]
});
