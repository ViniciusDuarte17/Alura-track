
export enum TipoDaNotificacao  {
    SUCESSO,
    FALHA,
    ATENCAO
};


export interface INotificacao {
    titulo: string,
    texto: string,
    tipo: TipoDaNotificacao,
    id: number
}