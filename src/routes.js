import Home from './components/Home.vue';
import AboutMe from './components/AboutMe.vue';
import MyProjects from './components/MyProjects.vue';

// const routes = [
//     { path: '/', component: Home },
//     { path: '/about-me', component: AboutMe },
//     { path: '/projects/:name', component: MyProjects },
// ];

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/about-me', component: AboutMe, name: 'About' },
    { path: '/projects', component: MyProjects, name: 'Projects' },
];

export default routes;