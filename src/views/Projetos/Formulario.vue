<template>
    <section class="projetos">
        <h1 class="title">Projetos</h1>
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
import useStore from "../../store";

export default defineComponent({
    name: "Formulario",

    data() {
        return {
            nomeDoProjeto: ""
        };
    },

    methods: {
        salvar() {
            this.store.commit('ADICIONA_PROJETO', this.nomeDoProjeto);
            this.nomeDoProjeto = '';
            this.$router.push('/projetos')
        }
    },

    setup () {
        const store = useStore()
        return {
            store
        }
    }
});
</script>

<style scoped>
.projetos {
    padding: 1.25rem
}
</style>
