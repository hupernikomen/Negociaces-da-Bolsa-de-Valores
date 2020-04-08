# Negociações Bolsa de Valores

## O que aprendemos nesse curso?

Toda classe deve ter seus atributos dentro de um `constructor` . E cada atributo deve ser precedido da palavra `this` , que referencia a classe. Ou seja, o `this` está basicamente dizendo: Esse atributo `data` pertence a classe "DESTE" construtor (Negociacao).

``` js
class Negociacao {
    constructor() {
        this.data = new Date();
        this.quantidade = 1;
        this.valor = 0.0;
        // Com o this informo que o atributo data pertence a classe `Negociacao` 
    }
}
```

Para instanciar: 

``` js
// Assim crio uma nova negociação, podendo tambem atribuir valores aos atributos
var n1 = new Negociacao();
n1.valor = 200;
```

Outro ponto do nosso estudo mostra que existe uma outra forma de passagem desses valores, que pode ser feita no momento da criação da nossa instancia, passando os valores pos parametros ao constructor da classe.

``` js
var n1 = new Negociacao(new Date, 2, 200);
```

E na classe precisamos receber esses valores... 

``` js
class Negociacao {
   constructor(data, quantidade, valor) {
      this.data = data; // recebe new Date()
      this.quantidade = quantidade; // recebe 2
      this.valor = valor; // recebe 200
   }
}
```

Mas nossa classe precisa ter como calcular um volume de negociação, que deve multiplicar a quantidade de negociações pelo seu valor. Entramos então nos `metodos` da classe.

``` js
obtemVolume() {
   return this.quantidade * this.valor;
}
```

