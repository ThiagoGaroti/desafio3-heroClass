
//Criando os objects que serão usados na class
const tipoHeroi = {
      guerreiro: "Guerreiro",
      mago: "Mago",
      arqueiro: "Arqueiro"
}

const tipoAtaque = {
      espada: "Espada",
      magia: "Magia",
      flechada: "Flechada"
}

//Criando a class do heroi, com os parâmetros solicitados e o uso do this (conoforme sintaxe),
//em seguida a function atacar que dentro da class não precisa de declaração.
class heroi {
      constructor(nome, idade, tipo, ataque) {

      this.nome = nome
      this.idade = idade
      this.tipo = tipoHeroi[tipo] || "Desconhecido"
      this.ataque = tipoAtaque[ataque]  || "Ataque desconhecido"
      }
       
      atacar () {
            console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
      }
}

//Criação dos "jogadores" que usarão a class heroi, os atríbutos criados e a function.
let player1 = new heroi ("Garoti", 34, "guerreiro", "espada")
let player2 = new heroi ("Underground", 16, "arqueiro", "flechada")

player1.atacar()
player2.atacar()
