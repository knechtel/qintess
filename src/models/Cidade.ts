export class Cidade{
    id: number 
    nome: string
    populacao: number
    idEstado: number

    constructor(nome:string,populacao:number,idEstado:number){

        this.nome = nome
        this.populacao = populacao
        this.idEstado = idEstado
    }
//     constructor(){}
 }