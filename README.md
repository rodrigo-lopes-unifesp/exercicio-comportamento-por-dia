# Exercício - Comportamento por Dia da Semana

## Instruções de execução

```bash
npm install

npm start

npm test
```

Ao rodar `npm start`, o programa pede três informações, uma por vez:

```
Nome: <digite seu nome>
Informação adicional (nome de tarefa, meta semanal, etc.): <digite a informação>
Dia da semana a consultar (Enter para usar a data atual): <digite um dia ou deixe em branco>
```

## Estrutura das estratégias

A solução usa o padrão de projeto Stategy (em EstrategiaDia), com as sete estratégias concretas e a estratégia nula, para quando tem ausência de estratégia. Temos o SeletorDeEstrategiaDia, o componente que escolhe a estratégia certa para o dia, através de um hash map, evitando o uso de if else, e tem como fallback a estratégia nula para um dia inválido. E o main é o ponto de entrada, onde faz a interação com o usuário pela CLI.

## Questões de reflexão

**1. Como evitar verificações repetidas de valores nulos no código principal?**

Garantir que nunca retorne null ou undefined, sempre um objeto fallback que implementa a mesma interface, com a verificação acontecendo apenas uma vez.

**2. Qual padrão de projeto pode ser utilizado para representar a ausência de uma estratégia de
forma segura?**

Da para usar o Null Object Pattern, que usa uma implementação concreta da mesma interface que representa "nenhuma ação", em vez de usar o valor null ou undefined.

**3. Explique brevemente como esse padrão foi incorporado à solução.**

A classe EstrategiaNula implementa EstrategiaDia como qualquer outra estratégia concreta, mas
a função de executar devolve uma mensagem informando que não há estratégia associada. No seletor se não há uma estratégia definida para o dia, retorna EstrategiaNula como fallback.

## Exemplos de execução

### Entrada válida

```
$ npm start

Nome: Rodrigo
Informação adicional (nome de tarefa, meta semanal, etc.): Implementar relatório
Dia da semana a consultar (Enter para usar a data atual): quarta-feira

Usuário: Rodrigo
Dia consultado: quarta-feira
Prioridade: MEDIA
Mensagem: Dia de revisão: verifique o andamento da atividade "Implementar relatório".
```

### Entrada inválida (dia sem estratégia associada)

```
$ npm start

Nome: Rodrigo
Informação adicional (nome de tarefa, meta semanal, etc.): Revisar contrato
Dia da semana a consultar (Enter para usar a data atual): diaInvalido

Usuário: Rodrigo
Dia consultado: diaInvalido
Prioridade: BAIXA
Mensagem: Nenhuma estratégia associada ao dia informado. Nenhuma ação será executada.
```
