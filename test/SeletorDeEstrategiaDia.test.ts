import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { EstrategiaNula } from "../src/EstrategiasDiasSemana.ts";
import { SeletorDeEstrategiaDia } from "../src/SeletorDeEstrategiaDia.ts";

describe("SeletorDeEstrategiaDia", () => {
  const seletor = new SeletorDeEstrategiaDia();

  it("resolve os 7 dias válidos (case-insensitive)", () => {
    const dias = [
      "segunda-feira",
      "TERÇA-FEIRA",
      "Quarta-feira",
      "quinta-feira",
      "Sexta-Feira",
      "sábado",
      "Domingo",
    ];

    for (const dia of dias) {
      const estrategia = seletor.obterEstrategiaPorDia(dia);
      assert.ok(
        !(estrategia instanceof EstrategiaNula),
        `${dia} não deveria cair no Null Object`,
      );
    }
  });

  it("dia inválido devolve a EstrategiaNula (Null Object), nunca null/undefined", () => {
    const estrategia = seletor.obterEstrategiaPorDia("diaInvalido");
    assert.ok(estrategia instanceof EstrategiaNula);
    assert.notEqual(estrategia, null);
    assert.notEqual(estrategia, undefined);
  });

  it("dia vazio também devolve a EstrategiaNula", () => {
    const estrategia = seletor.obterEstrategiaPorDia("   ");
    assert.ok(estrategia instanceof EstrategiaNula);
  });

  it("obterDiaAtual mapeia corretamente os 7 dias a partir de uma data fixa", () => {
    const casos: Array<[Date, string]> = [
      [new Date(2026, 5, 21), "domingo"],
      [new Date(2026, 5, 22), "segunda-feira"],
      [new Date(2026, 5, 23), "terça-feira"],
      [new Date(2026, 5, 24), "quarta-feira"],
      [new Date(2026, 5, 25), "quinta-feira"],
      [new Date(2026, 5, 26), "sexta-feira"],
      [new Date(2026, 5, 27), "sábado"],
    ];

    for (const [data, diaEsperado] of casos) {
      assert.equal(seletor.obterDiaAtual(data), diaEsperado);
    }
  });

  it("obterEstrategiaAtual combina dia atual e estratégia correspondente", () => {
    const dataQuarta = new Date(2026, 5, 24);
    const { dia, estrategia } = seletor.obterEstrategiaAtual(dataQuarta);

    assert.equal(dia, "quarta-feira");
    const resultado = estrategia.executar("Implementar relatório");
    assert.equal(resultado.prioridade, "MEDIA");
  });
});
