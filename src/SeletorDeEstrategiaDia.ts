import type { EstrategiaDia } from "./EstrategiaDia.ts";
import {
  SegundaFeiraStrategy,
  TercaFeiraStrategy,
  QuartaFeiraStrategy,
  QuintaFeiraStrategy,
  SextaFeiraStrategy,
  SabadoStrategy,
  DomingoStrategy,
  EstrategiaNula,
} from "./EstrategiasDiasSemana.ts";

const NOMES_DIAS_POR_INDICE = [
  "domingo",
  "segunda-feira",
  "terça-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
  "sábado",
];

const ESTRATEGIAS_POR_DIA = new Map<string, EstrategiaDia>([
  ["segunda-feira", new SegundaFeiraStrategy()],
  ["terça-feira", new TercaFeiraStrategy()],
  ["quarta-feira", new QuartaFeiraStrategy()],
  ["quinta-feira", new QuintaFeiraStrategy()],
  ["sexta-feira", new SextaFeiraStrategy()],
  ["sábado", new SabadoStrategy()],
  ["domingo", new DomingoStrategy()],
]);

const ESTRATEGIA_NULA = new EstrategiaNula();

export class SeletorDeEstrategiaDia {
  obterDiaAtual(data: Date = new Date()): string {
    return NOMES_DIAS_POR_INDICE[data.getDay()];
  }

  obterEstrategiaPorDia(diaInformado: string): EstrategiaDia {
    const diaNormalizado = diaInformado.trim().toLowerCase();
    return ESTRATEGIAS_POR_DIA.get(diaNormalizado) ?? ESTRATEGIA_NULA;
  }

  obterEstrategiaAtual(data?: Date): { dia: string; estrategia: EstrategiaDia } {
    const dia = this.obterDiaAtual(data);
    return { dia, estrategia: this.obterEstrategiaPorDia(dia) };
  }
}
