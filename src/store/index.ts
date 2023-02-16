import IProjeto from "../interface/IProjeto";
import { createStore, Store } from 'vuex';
import { InjectionKey } from "vue";

interface Estado {
    projetos: IProjeto[]
}

export const Key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos:[
            {
                id: new Date().toISOString(),
                nome: 'Estudar typescript'
            },
            {
                id: new Date().toISOString(),
                nome: 'vue'
            },
            {
                id: new Date().toISOString(),
                nome: 'vuex'
            }
        ]
    }
})