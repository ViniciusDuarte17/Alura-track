<template>
   <button class="button" @click="$emit('someEvent')" :disabled="isCronomentroRodando">
            <span class="icon">
                <slot></slot>
            </span>
            <span>{{ textoDoBotao }}</span>
        </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AproveitarBotao',
   
    props:{
        textoDoBotao: String,
        isCronomentroRodando: Boolean
    },
    methods: {
    submit() {
      this.$emit('someEvent')
    }
  }
})

</script>