// 创建vue 实例
import Vue from 'vue';
import {createRouter} from './router';
import {createStore} from './store'
import App from './App.vue'
export function createApp(context) {
    const router = createRouter();
    const store = createStore();
    const app = new Vue({
        router,
        store,
        render:h=>h(App)
    })
    return {app,router}
}