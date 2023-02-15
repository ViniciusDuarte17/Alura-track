<template>
  <Formulario @aoSalvarTarefa="savalTarefa" />
  <div class="list">
    <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
    <Box v-if="listaEstaVazia">
      Você não esta sendo muito produtivo hoje :(
    </Box>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Box from "../components/Box.vue";
import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import ITarefa from "../interface/ITarefa";

export default defineComponent({
  name: "App",
  components: {
    Tarefa,
    Formulario,
    Box,
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false,
    };
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },
  methods: {
    savalTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
  }
});
</script>


