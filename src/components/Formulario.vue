<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-5"
        role="form"
        aria-label="Formuláiro de criação para uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja inicar?"
          v-model="descricao"
        />
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <option
              :value="projeto.id"
              v-for="projeto in projetos"
              :key="projeto.id"
            >
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <Temporizador @ao-temporizador-finalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Temporizador from "./Temporizador.vue";
import { useStore } from "vuex";
import { Key } from "../store";

export default defineComponent({
  name: "Fomulario",
  emits: ["aoSalvarTarefa"],
  data() {
    return {
      descricao: "",
      idProjeto: ''
    };
  },
  components: {
    Temporizador,
  },
  methods: {
    finalizarTarefa(tempoDeCorrido: number): void {
      this.$emit("aoSalvarTarefa", {
        duracaoEmSegundos: tempoDeCorrido,
        descricao: this.descricao,
        projeto: this.projetos.find( proj => proj.id === this.idProjeto)
      });
      this.descricao = "";
    },
  },

  setup() {
    const store = useStore(Key);

    return {
      projetos: computed(() => store.state.projetos),
    };
  },
});
</script>

<style>
.formulario {
  color: var(--text-primario);
  background-color: var(--bg-primario);
}
</style>
