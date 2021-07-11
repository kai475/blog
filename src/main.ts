import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.mount('#app');

const a = require('../docs/algorithms/arrayUniq.ts');

console.log(a);
