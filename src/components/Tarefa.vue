

<template>
    <Box>
        <div class="columns">
            <div class="column is -7">
                {{ tarefa.descricao || 'Tarefa sem descrição' }}
            </div>
            <div class="column">
                <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
            </div>
        </div>
    </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import iTarefa from '../interface/ITarefa';
import Box from './Box.vue';
import Cronometro from './Cronometro.vue';
export default defineComponent({
    name: 'Tarefa',
    props: {
        tarefa: {
            type: Object as PropType<iTarefa>,
            required: true
        }
    },
    components: {
        Cronometro,
        Box
    }
})
</script>