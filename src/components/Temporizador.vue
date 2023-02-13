<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <Cronometro :tempoEmSegundos="tempoEmSegundos" />

        <AproveitarBotao textoDoBotao="play" @some-event="iniciar" :isCronomentroRodando="cronomentroRodando">
            <i class="fas fa-play"></i>
        </AproveitarBotao>
        <AproveitarBotao textoDoBotao="stop" @some-event="finalizar" :isCronomentroRodando="!cronomentroRodando">
            <i class="fas fa-stop"></i>
        </AproveitarBotao>

    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cronometro from "./Cronometro.vue";
import AproveitarBotao from "./AproveitarBotao.vue";

export default defineComponent({

    name: "Temporizador",
    emits: ['aoTemporizadorFinalizado'],
    components: {
        Cronometro,
        AproveitarBotao
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronomentroRodando: false
        };
    },

    methods: {
        iniciar() {
            // iniciar a contagem
            this.cronomentroRodando = true
            this.cronometro = setInterval(() => {
            this.tempoEmSegundos += 1;
            }, 1000);
        },
        finalizar() {
            this.cronomentroRodando = false
            clearInterval(this.cronometro);
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos);
            this.tempoEmSegundos = 0;
        },
    },
});
</script>

  <!-- <button class="button" @click="iniciar" :disabled="cronomentroRodando">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button class="button" @click="finalizar" :disabled="!cronomentroRodando">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button> -->