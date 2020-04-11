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

* ## Encapsulamento
### Convenção
No javascript ainda não podemos definir privacidades nas propriedades de forma que funcione, a nao ser que de forma apenas convencional, utilizando '_'(underline) logo depois do `this.`:
```js
this._data = new Date();
```
E assim (por convenção) os mesmos só PODERÃO ser acessados pelos metodos da propria classe.
Mas nada me impede AINDA de alterar o valor de quantidade que deveria ser `privado`:
```js
n1._quantidade = 1000
```
Para isso utilizaremos o `Object.freeze()` dentro do construtor passando o `this` como objeto congelado.
``` js
class Negociacao {
   constructor(data, quantidade, valor) {
      this.data = data; // recebe new Date()
      this.quantidade = quantidade; // recebe 2
      this.valor = valor; // recebe 200
      Object.freeze(this);
   }
}
```


* ### Get

A criação dos nossos getters (metodos que retornarão o valor das propriedades) pode ser definida da seguinte forma:
```js
get data() {
   return this._data;
}
```
Utilizando assim da propriedade `get` forçaremos a ser apenas um metodo de leitura, e podemos chama-lo usando:
```js
var n1 = new Negociacao(new Date, 2, 200);
n1.quantidade; // 200
```
Note que fica aparente a sensação de que estamos chamando uma propriedade,quando na verdade estamos invocando o metodo `get quantidade() {...}`.