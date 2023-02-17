import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Projetos from '../views/Projetos.vue';
import Formulario from '../views/Projetos/Formulario.vue';
import Tarefas from "../views/Tarefas.vue";

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'tarefas',
        component: Tarefas
    },

    {
        path: '/projetos',
        name: 'projetos',
        component: Projetos
    },
    {
        path: '/projetos/novo',
        name: 'novo projeto',
        component: Formulario
    },
    {
        path: '/projetos/:id',
        name: 'editar projeto',
        component: Formulario,
        props: true
    }
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})


export default roteador