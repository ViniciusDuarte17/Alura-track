<template>
    <section class="projetos">
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeDoProjeto" class="field">
                    Nome do projeto
                </label>
                <input class="input" type="text" v-model="nomeDoProjeto" id="nomedoProjeto" />
            </div>
            <div class="filed">
                <button class="button" type="submit">
                    salvar
                </button>
            </div>
        </form>
      
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TipoDaNotificacao } from "../../interface/INotificacoes";
import useStore, { store } from "../../store";
import { ALTERA_PROJETO, ADICIONA_PROJETO } from "../../store/tipo-mutacoes";
import useNotificador from "../../hooks/notificador"

export default defineComponent({
    name: "Formulario",

    props: {
        id: {
            type: String
        }
    },

    mounted () {
        if(this.id) {
            const projeto = store.state.projetos.find( proj => proj.id === this.id)
            this.nomeDoProjeto = projeto?.nome || ''
        }
    },

    data() {
        return {
            nomeDoProjeto: ""
        };
    },
 
    methods: {

        salvar() {
            if (this.id) {
                this.store.commit(ALTERA_PROJETO, {
                    id: this.id,
                    nome: this.nomeDoProjeto
                })

            } else {
                this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto);
            }

            this.nomeDoProjeto = '';
            this.notificar(TipoDaNotificacao.SUCESSO, 'Exelente!', 'Projeto foi adicionado');
            this.$router.push('/projetos')
        },

    },

    setup () {
        const store = useStore()
        const {notificar} = useNotificador() 
        return {
            store,
            notificar
        }
    }
});
</script>
