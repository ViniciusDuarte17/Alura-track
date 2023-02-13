<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-8"
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
      <div class="column">
        <Temporizador @ao-temporizador-finalizado="finalizarTarefa"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Temporizador from "./Temporizador.vue";

export default defineComponent({
  name: "Fomulario",
  emits: ['aoSalvarTarefa'],
  data() {
    return {
      descricao: ''
    }
  },
  components: {
    Temporizador,
  },
  methods: {
    finalizarTarefa(tempoDeCorrido: number): void {
     this.$emit('aoSalvarTarefa', {
      duracaoEmSegundos:  tempoDeCorrido,
      descricao: this.descricao
     })
      this.descricao = '';
    }
  }
});
</script>


<style>
.formulario{
  color: var(--text-primario);
  background-color: var(--bg-primario);
}
</style>