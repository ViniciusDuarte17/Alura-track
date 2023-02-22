import { TipoDaNotificacao } from "../interface/INotificacoes"
import { store } from "../store"
import { NOTIFICAR } from "../store/tipo-mutacoes"

export const notificarMixins = {
    methods: {
        notificar(tipo: TipoDaNotificacao, titulo: string, texto: string) {
            store.commit(NOTIFICAR, {
                titulo,
                texto,
                tipo
            })
        }
    }
}