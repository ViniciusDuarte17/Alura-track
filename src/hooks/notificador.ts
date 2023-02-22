import { TipoDaNotificacao } from "../interface/INotificacoes"
import { store } from "../store"
import { NOTIFICAR } from "../store/tipo-mutacoes"

type Notificador = {
    notificar(tipo: TipoDaNotificacao, titulo: string, texto: string): void
}

export default (): Notificador => {

    const notificar = (tipo: TipoDaNotificacao, titulo: string, texto: string): void => {
        store.commit(NOTIFICAR, {
            titulo,
            texto,
            tipo
        })
    }
    return {
        notificar
    }
}
