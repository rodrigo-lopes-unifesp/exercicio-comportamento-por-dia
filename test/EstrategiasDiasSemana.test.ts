import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  DomingoStrategy,
  EstrategiaNula,
  QuartaFeiraStrategy,
  QuintaFeiraStrategy,
  SabadoStrategy,
  SegundaFeiraStrategy,
  SextaFeiraStrategy,
  TercaFeiraStrategy,
} from "../src/EstrategiasDiasSemana.ts";

describe("Estratégias concretas dos dias da semana", () => {
  it("Segunda-feira: organiza prioridades com ALTA prioridade", () => {
    const resultado = new SegundaFeiraStrategy().executar(
      "Planejamento da sprint",
    );
    assert.match(resultado.mensagem, /Planejamento da sprint/);
    assert.equal(resultado.prioridade, "ALTA");
  });

  it("Terça-feira: avança tarefa pendente com ALTA prioridade", () => {
    const resultado = new TercaFeiraStrategy().executar("Corrigir bug #42");
    assert.match(resultado.mensagem, /Corrigir bug #42/);
    assert.equal(resultado.prioridade, "ALTA");
  });

  it("Quarta-feira: revisa atividade com MEDIA prioridade (exemplo do enunciado)", () => {
    const resultado = new QuartaFeiraStrategy().executar(
      "Implementar relatório",
    );
    assert.equal(
      resultado.mensagem,
      'Dia de revisão: verifique o andamento da atividade "Implementar relatório".',
    );
    assert.equal(resultado.prioridade, "MEDIA");
  });

  it("Quinta-feira: colabora com a equipe com MEDIA prioridade", () => {
    const resultado = new QuintaFeiraStrategy().executar(
      "Meta semanal de testes",
    );
    assert.match(resultado.mensagem, /Meta semanal de testes/);
    assert.equal(resultado.prioridade, "MEDIA");
  });

  it("Sexta-feira: registra conclusão com MEDIA prioridade", () => {
    const resultado = new SextaFeiraStrategy().executar("Deploy da feature X");
    assert.match(resultado.mensagem, /Deploy da feature X/);
    assert.equal(resultado.prioridade, "MEDIA");
  });

  it("Sábado: estudo livre ou descanso com BAIXA prioridade", () => {
    const resultado = new SabadoStrategy().executar("Curso de TypeScript");
    assert.match(resultado.mensagem, /Curso de TypeScript/);
    assert.equal(resultado.prioridade, "BAIXA");
  });

  it("Domingo: planeja a próxima semana com BAIXA prioridade", () => {
    const resultado = new DomingoStrategy().executar("Metas de julho");
    assert.match(resultado.mensagem, /Metas de julho/);
    assert.equal(resultado.prioridade, "BAIXA");
  });

  it("EstrategiaNula: deve responder de forma segura, sem lançar erro", () => {
    const resultado = new EstrategiaNula().executar("qualquer informação");
    assert.equal(resultado.prioridade, "BAIXA");
    assert.match(resultado.mensagem, /Nenhuma estratégia associada/);
  });
});
