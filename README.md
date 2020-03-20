### Negociações Bolsa de Valores

O que aprendemos nesse curso?

+ Uso do this
Ele referencia a classe ou o objeto ao qual ele faz parte:

class Exemplo {
   constructor() {
      this.nome = 'Wilson';
   }
}

O 'this', esta dizendo que está criando uma propriedade 'nome' da classe 'Exemplo'. => Exemplo.nome

+ Convenção de privacidade das propriedades
Para definirmos que uma propriedade é apenas de 'leitura' em projetos javascript convencionou-se que os atributos devem ser precedidos de <em>underline</em>:

this._nome = 'Wilson';

+ get (como getter)
Com as propriedades definidas com privacidade de 'leitura' podendo serem alteradas apenas pela propria classe, precisamos criar metodos das nessas classes capazes de fazer essa ponte de comunicação. Para isso usamos o get:

get LerNome() {
   return this._nome;
}

Para ver o valor utilizamos:
let exemplo = new Exemplo();
exemplo.letNome // Wilson

+ Object.freeze()
Congela a propriedade para garantir a imutabilidade de seus valores

Object.freeze(this);

Passando o 'this' como parametro ao inves de uma propriedade unica, congela TODAS as propriedades de uma só vez

+ Classes inicializadas
Podemos criar classes com valores inicializados no momento da instancia:

let exemplo = new Exemplo('Wilson');

class Exemplo {
   constructor(nome) {
      this._nome = nome;
   }
}

++ Continua...