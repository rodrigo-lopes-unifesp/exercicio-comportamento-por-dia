import { createInterface } from "node:readline/promises";
import { SeletorDeEstrategiaDia } from "./SeletorDeEstrategiaDia.ts";

async function main(): Promise<void> {
  const rl = createInterface({ input: process.stdin, output: process.stdout });

  try {
    const nome = await rl.question("Nome: ");
    const informacaoAdicional = await rl.question(
      "Informação adicional (nome de tarefa, meta semanal, etc.): ",
    );
    const diaInformado = await rl.question(
      "Dia da semana a consultar (Enter para usar a data atual): ",
    );

    const seletor = new SeletorDeEstrategiaDia();
    const { dia, estrategia } = diaInformado.trim()
      ? { dia: diaInformado.trim(), estrategia: seletor.obterEstrategiaPorDia(diaInformado) }
      : seletor.obterEstrategiaAtual();

    const resultado = estrategia.executar(informacaoAdicional);

    console.log(`\nUsuário: ${nome}`);
    console.log(`Dia consultado: ${dia}`);
    console.log(`Prioridade: ${resultado.prioridade}`);
    console.log(`Mensagem: ${resultado.mensagem}`);
  } finally {
    rl.close();
  }
}

main();
