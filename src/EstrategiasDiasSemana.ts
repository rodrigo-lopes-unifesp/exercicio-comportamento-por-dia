import type { EstrategiaDia, ResultadoEstrategia } from "./EstrategiaDia.ts";

export class SegundaFeiraStrategy implements EstrategiaDia {
  executar(informacaoAdicional: string): ResultadoEstrategia {
    return {
      mensagem: `Dia de organização: defina suas prioridades considerando "${informacaoAdicional}".`,
      prioridade: "ALTA",
    };
  }
}

export class TercaFeiraStrategy implements EstrategiaDia {
  executar(informacaoAdicional: string): ResultadoEstrategia {
    return {
      mensagem: `Dia de execução: avance na tarefa pendente "${informacaoAdicional}".`,
      prioridade: "ALTA",
    };
  }
}

export class QuartaFeiraStrategy implements EstrategiaDia {
  executar(informacaoAdicional: string): ResultadoEstrategia {
    return {
      mensagem: `Dia de revisão: verifique o andamento da atividade "${informacaoAdicional}".`,
      prioridade: "MEDIA",
    };
  }
}

export class QuintaFeiraStrategy implements EstrategiaDia {
  executar(informacaoAdicional: string): ResultadoEstrategia {
    return {
      mensagem: `Dia de colaboração: compartilhe "${informacaoAdicional}" com alguém da equipe.`,
      prioridade: "MEDIA",
    };
  }
}

export class SextaFeiraStrategy implements EstrategiaDia {
  executar(informacaoAdicional: string): ResultadoEstrategia {
    return {
      mensagem: `Dia de registro: anote a conclusão de "${informacaoAdicional}".`,
      prioridade: "MEDIA",
    };
  }
}

export class SabadoStrategy implements EstrategiaDia {
  executar(informacaoAdicional: string): ResultadoEstrategia {
    return {
      mensagem: `Dia de estudo livre ou descanso: aproveite para cuidar de "${informacaoAdicional}".`,
      prioridade: "BAIXA",
    };
  }
}

export class DomingoStrategy implements EstrategiaDia {
  executar(informacaoAdicional: string): ResultadoEstrategia {
    return {
      mensagem: `Dia de planejamento: defina a meta da próxima semana sobre "${informacaoAdicional}".`,
      prioridade: "BAIXA",
    };
  }
}

export class EstrategiaNula implements EstrategiaDia {
  executar(_informacaoAdicional: string): ResultadoEstrategia {
    return {
      mensagem:
        "Nenhuma estratégia associada ao dia informado. Nenhuma ação será executada.",
      prioridade: "BAIXA",
    };
  }
}
