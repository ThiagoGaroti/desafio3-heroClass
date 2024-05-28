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

let player1 = new heroi ("Garoti", 34, "guerreiro", "espada")
let player2 = new heroi ("Underground", 16, "arqueiro", "flechada")

player1.atacar()
player2.atacar()
