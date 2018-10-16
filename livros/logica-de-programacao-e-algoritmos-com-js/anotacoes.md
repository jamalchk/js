# Lógica de Programação e Algoritmos com JavaScript

## 1. Introdução

### Lógica de Programação

- **Compreenda o que é pedido:** perca alguns minutos na leitura dos enunciados dos exercícios que você vai resolver. Eles serão valiosos no final e talvez economizem horas do seu tempo.

- **Realize deduções na construção do programa:** esse assunto é trabalhado na disciplina de Lógica Matemática (ou Lógica Formal).

- **Enumere as etapas a serem realizadas:** a inclusão de condições e repetições será abordada no sexto item.

- **Analise outras possibilidades de solução:** talvez haja uma forma mais eficiente de resolver o problema que você está solucionando.

- **Ensine ao computador uma solução**

- **Pense em todos os detalhes:** na montagem de um programa, utilizamos:

  - **comandos sequenciais:** são os mais simples, realizados um atrás do outro;

  - **condições:** servem para determinar quais comandos serão executados a partir da análise de uma condição;

  - **estruturas de repetições:** indicam que uma ação ou conjunto de ações devem ocorrer várias vezes. Nessas estruturas, é preciso indicar quantas vezes a repetição vai ocorrer ou criar algum ponto de saída do laço.

---

### Entrada, processamento e saída

Em lógica de programação, o roteiro para resolver a maioria dos programas iniciais é:

1. Leia os dados de entrada.

2. Realize o processamento dos dados.

3. Apresente a saída dos dados.

Em programas maiores, é possível que estas etapas se intercalem e outras ações, como salvar os dados em um banco de dados, podem ser necessárias.

#### Entrada de dados (Input)

Consiste em solicitar ao usuário algum tipo de informação. Logo em seguida, ocorre a etapa de processamento desta mesma informação.

#### Processamento

Implica trabalhar com variáveis para realizar algum tipo de cálculo.

#### Saída (Output)

Após processar os dados inputados pelo usuário, exibimos na tela o resultado obtido.

---

### JavaScript

Com JavaScript, podemos interagir com os visitantes de um website a partir de:

- Campos de formulário;

- Acessar e modificar o conteúdo e as características de uma página;

- Salvar informações no navegador do usuário;

- Auxiliar na construção de layouts complexos;

- Exibir opções customizadas de acordo com o input do usuário;

- Criar jogos interativos que rodam em qualquer plataforma que seja capaz de rodar um browser.

#### Livros recomendados

- JavaScript - Guia do Programador, de Maurício Samy Silva

- Aprendendo JavaScript, de Shelley Powers

- Princípios de Orientação a Objetos em JavaScript, de Nicholas C. Zakas

- Estruturas de dados e algoritmos em JavaScript, de Loiane Groner

---

### Variáveis e constantes

São espaços alocados na memória do computador que permitem guardar informações e trabalhar com elas - como o valor que o cliente deseja sacar no terminal do caixa eletrônico. Como o nome sugere, os valores armazenados em uma variável podem ser alterados durante a execução do programa.

Para as variáveis, declare com `var` e use a notação camelCase para declarar o nome da variável. No caso de constantes, use `const` e escreva o nome da constante em caixa alta.

---

### Comentários

É de fundamental importância adicionar comentários para salientar a função de algum comando não usado com tanta frequência. Comentários também são importantes durante o desenvolvimento de um projeto, para que possamos retomar a linha de raciocínio assim que reiniciarmos os trabalhos.

---

## 2. Integração com HTML

### Alguns métodos e propriedades

- `document.getElementById('idName')`: pega um elemento do HTML que contenha o id informado.

- `myElement.textContent`: altera o conteúdo de texto do meu elemento

- `myElement.innerText`: também altera o conteúdo de texto do meu elemento

- `myElement.innerHTML`: muda o conteúdo do meu elemento, podendo inclusive adicionar tags HTML. Não recomendado por questões de segurança

- `document.getElementById('idName').value`: pegar o valor que está dentro deste elemento no HTML (útil para casos de input)

| método/propriedade | o que faz                                                                                                                                                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `textContent`      | consulta ou altera o texto exibido por elementos HTML como parágrafos (`p`), cabeçalhos (`h1`, `h2`...) ou containers (`div`, `span`)                                                                                                                                                       |
| `innerHTML`        | consulta ou altera o conteúdo de elementos HTML como parágrafos (`p`), cabeçalhos ou containers. Códigos HTML presentes no conteúdo são renderizados pelo navegador. Esta propriedade pode apresentar algum risco à segurança, dando margem para ataques do tipo XSS (Cross-Site Scripting) |
| `value`            | consulta ou altera o conteúdo de campos de formulário                                                                                                                                                                                                                                       |

### Formas de adicionar JavaScript ao HTML

#### 1. Usando rotinas de tratamento de eventos HTML

É mais ou menos parecido com a ideia de usar estilos inline. As tags do meu arquivo HTML precisarão trazer atributos do tipo "onclick". Não é uma prática encorajada pelo autor.

#### 2. Usando rotinas de tratamento de eventos DOM

JavaScript e HTML ficam separados, e o JavaScript é referenciado no arquivo HTML (sendo o script um arquivo externo). 

```html
<!-- exemplo de referência no topo do documento -->
<script src="file.js"></script>
```

Em vez de usarmos "onclick" dentro da tag HTML como um atributo, podemos fazer o link entre elemento HTML e função JavaScript via id. Se meu botão tem "id" igual a "salvar", posso usar esse id lá no JavaScript. Possui um inconveniente: não dá pra anexar mais de uma função a um mesmo evento.

#### 3. Usando listeners de eventos

É a forma recomendada pelo autor. É possível registrar múltiplas funções para um mesmo elemento HTML em um mesmo evento.

Usa-se o método `elemento.addEventListener('evento', função);`. Existe um terceiro parâmetro opcional, que é relacionado à forma de propagação do evento. O nome da função dentro dos parênteses é usado sem os parênteses.

### Nomenclatura e escopo das variáveis

No livro, a seguinte convenção é adotada (mas você pode seguir o que fazer mais sentido para você):

| Tipo de informação | Nomenclatura        | Exemplo     |
| ------------------ | ------------------- | ----------- |
| Entrada            | in(nomeDaVariavel)  | inNome      |
| Saída              | out(nomeDaVariavel) | outResposta |

#### Escopo

As variáveis que vivem dentro de uma função só têm validade nesse local. Já o que estiver fora de uma função é considerado variável global.

Dê preferência em variáveis locais pois elas liberam espaço na memória assim que a função termina de ser executada. Outro problema que passa a ser evitado: você redefinir sem querer uma variável global já existente.

### Operadores aritméticos e funções matemáticas

| Operador          | Símbolo |
| ----------------- | ------- |
| Soma/Concatenação | +       |
| Subtração         | -       |
| Multiplicação     | *       |
| Divisão           | /       |
| Módulo            | %       |

#### Math

| Função                | Descrição                                                                                                | Exemplo                           |
| --------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `Math.abs(num)`       | Retorna o valor absoluto de um número (se um número for negativo, ele retorna o valor positivo absoluto) | `Math.abs(-3) //3`                |
| `Math.ceil(num)`      | Arredonda o número para cima                                                                             | `Math.ceil(4.2) //5`              |
| `Math.floor(num)`     | Arredonda o número para baixo                                                                            | `Math.floor(7.9) //7`             |
| `Math.pow(base, exp)` | Retorna a base elevada ao expoente                                                                       | `Math.pow(3,2) //9`               |
| `Math.random()`       | Gera um número aleatório de 0 a 1 com várias casas decimais                                              | `Math.random() //0.6505318643841` |
| `Math.round(num)`     | Arredonda o número para o inteiro mais próximo                                                           | `Math.round(2.7) //3`             |
| `Math.sqrt(num)`      | Retorna a raiz quadrada de um número                                                                     | `Math.sqrt(16) //4`               |


