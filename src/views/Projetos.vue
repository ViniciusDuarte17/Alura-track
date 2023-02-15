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
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Nome
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td> {{ projeto.id }} </td>
                    <td>{{ projeto.nome }}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IProjeto from "../interface/IProjeto"

export default defineComponent({
    name: "Projetos",

    data() {
        return {
            nomeDoProjeto: "",
            projetos: [] as IProjeto[]
        };
    },

    methods: {
        salvar() {
            const projeto: IProjeto = {
                id: new Date().toISOString(),
                nome: this.nomeDoProjeto
            }
            this.projetos.push(projeto)
            this.nomeDoProjeto = '';
        }
    }
});
</script>

<style scoped>
.projetos {
    padding: 1.25rem
}
</style>
