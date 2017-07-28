import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: `${process.env.BASE_URL}`,
            name: 'Hello',
            component: Hello
        },
        {
            path: `${process.env.BASE_URL}index.html`,
            name: 'Hello',
            component: Hello
        }
    ]
})
