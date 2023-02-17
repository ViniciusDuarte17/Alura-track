import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Projetos from '../views/Projetos.vue';
import Formulario from '../views/Projetos/Formulario.vue';
import Tarefas from "../views/Tarefas.vue";
import Lista from "../views/Projetos/Lista.vue";

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'tarefas',
        component: Tarefas
    },

    {
        path: '/projetos',
        component: Projetos,
        children: [
            {
                path: '',
                name: 'projetos',
                component: Lista
            },
            {
                path: 'novo',
                name: 'novo projeto',
                component: Formulario
            },
            {
                path: ':id',
                name: 'editar projeto',
                component: Formulario,
                props: true
            }
        ]
    }
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})


export default roteador