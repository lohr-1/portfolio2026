export const projectsData = [
  {
    id: "pettech",
    title: "PetTech SaaS Portal",
    stat: "UX/UI Design · Data Analytics",
    description: "Arquitetura de informação e design de interface para uma plataforma de telemetria e análise clínica de animais de estimação. Painéis de visualização de dados complexos para suporte à decisão veterinária.",
    image: "https://picsum.photos/seed/dogapi/800/400",
    link: "https://github.com/lohr-1/thedogapi",
    visaoGeral: "O PetTech SaaS Portal é uma plataforma completa de telemetria e análise de dados clínicos projetada para veterinários, clínicas e hospitais de grande porte. O sistema centraliza informações vitais coletadas de sensores corporais de animais internados, dados de exames laboratoriais anteriores e históricos médicos, fornecendo um fluxo de trabalho preditivo e painéis de controle integrados.",
    problema: "Médicos veterinários em regime de plantão enfrentavam grande dificuldade em monitorar múltiplos animais em estado crítico de forma simultânea. As informações eram fragmentadas em prontuários físicos e diferentes aparelhos de monitoramento sem integração. Isso aumentava o tempo de reação a crises biológicas e gerava uma carga de estresse operacional excessiva na equipe.",
    processo: {
      intro: "O desenvolvimento seguiu uma metodologia centrada na experiência em cenários de alta pressão:",
      steps: [
        {
          label: "1. Imersão Clínica",
          detail: "Realizamos 12 sessões de shadowing acompanhando a rotina noturna de UTIs veterinárias para mapear os pontos críticos de coleta de dados e alarmes."
        },
        {
          label: "2. Arquitetura de Prioridade",
          detail: "Definimos uma escala de criticidade visual. Cada widget de animal passou por triagem estrutural baseada em thresholds biológicos configuráveis."
        },
        {
          label: "3. Protótipos de Baixa Fidelidade",
          detail: "Construímos wireframes interativos de alto contraste físico para garantir legibilidade perfeita mesmo sob iluminação adversa de consultórios."
        }
      ]
    },
    solucao: "Desenvolvemos uma interface modular de painéis dinâmicos. Os veterinários podem organizar a disposição dos painéis com base nas especialidades dos animais sob cuidados (ex: cardiologia, pós-operatório). Implementamos gráficos de série temporal interativos que compilam temperatura, batimentos cardíacos e saturação em uma única linha de tempo contínua, com sistema inteligente de alertas visuais piscantes.",
    resultado: "Nos testes em ambiente simulado e piloto subsequente, registrou-se uma redução de 35% no tempo médio de resposta a intercorrências críticas. A satisfação da equipe de enfermagem veterinária aumentou substancialmente devido à centralização de alertas, e a taxa de adoção do software atingiu 92% na primeira semana de deploy institucional."
  },
  {
    id: "inventory",
    title: "Inventory Control SaaS",
    stat: "UX Architecture · B2B Operations",
    description: "Design de jornadas operacionais complexas e interfaces de múltiplos estados para logística de estoque. Otimização de legibilidade de dados tabulares e fluxos rápidos de conferência física.",
    image: "https://picsum.photos/seed/stock/800/400",
    link: "",
    visaoGeral: "Este produto consiste em um portal SaaS corporativo robusto focado na gestão e controle logístico de grandes armazéns de distribuição (WMS). Ele conecta os gerentes de logística (que necessitam de visões analíticas abrangentes) aos operadores de pátio e galpão (que executam o picking e a conferência física rápida de mercadorias).",
    problema: "A operação de separação de mercadorias registrava atrasos frequentes causados pela ineficiência no layout dos coletores de dados portáteis. Telas com layouts mal ajustados, excesso de campos textuais minúsculos e falta de feedback tátil/visual imediato após escaneamentos resultavam em 8% de erros de digitação e redespacho errôneo.",
    processo: {
      intro: "Para estruturar a nova jornada de fluxo de estoque, executamos o seguinte processo design-led:",
      steps: [
        {
          label: "1. Análise de Ruído",
          detail: "Mapeamento das distrações e fadiga visual sofridas pelos operadores sob condições reais de carregamento de caixas e movimentação de empilhadeiras."
        },
        {
          label: "2. Mapeamento de Estados",
          detail: "Catalogamos todos os estados operacionais possíveis do coletor: conectado, aguardando escaneamento, sucesso, erro de SKU e sinal offline."
        },
        {
          label: "3. Teste de Ergonomia",
          detail: "Validação de tamanho mínimo de alvo de toque para polegares enquanto o operador segura uma prancheta ou caixa com a outra mão."
        }
      ]
    },
    solucao: "Redesenhamos a interface para rodar em modo web app responsivo de alta performance para tablets industriais e coletores. Criamos tabelas estáticas de visualização densa com fonte mono-espaçada para números de série, além de alertas em tela cheia com cores vibrantes para sinalização de falha de validação e sucesso de picking sem exigir que o operador leia textos pequenos.",
    resultado: "Os erros de expedição caíram de 8% para menos de 0.8% nos primeiros três meses de uso assistido. Além disso, o tempo médio gasto na conferência de paletes de entrada foi otimizado em 20%, o que permitiu aos centros de distribuição ampliar sua capacidade diária de processamento de cargas."
  },
  {
    id: "planner",
    title: "Academic Task & LMS Planner",
    stat: "Product Design · Education Tech",
    description: "Concepção de fluxos e experiência integrada bidirecionalmente com o Moodle. Simplificação do acompanhamento de prazos e relatórios de progresso em um dashboard limpo.",
    image: "https://picsum.photos/seed/task/800/400",
    link: "",
    visaoGeral: "O Academic Planner é um planejador inteligente focado em estudantes e professores universitários. Ele se conecta de forma direta à API da plataforma Moodle da instituição de ensino, extraindo tarefas, prazos de entrega, notas e fóruns pendentes de forma a organizá-los em um fluxo de trabalho unificado, limpo e acionável.",
    problema: "Alunos relatam sobrecarga mental e perda recorrente de prazos devido à interface obsoleta e excessivamente ramificada do Moodle tradicional. A fragmentação de calendários específicos para cada matéria dificultava a visualização holística da carga semanal de estudos.",
    processo: {
      intro: "Adotamos um processo iterativo com foco direto no público jovem e acadêmico:",
      steps: [
        {
          label: "1. Focus Groups",
          detail: "Conduzimos discussões e dinâmicas com 15 estudantes de variados cursos para entender como eles organizavam sua agenda paralela de estudos."
        },
        {
          label: "2. Jornada Unificada",
          detail: "Desenho da arquitetura de fluxo que consolida tarefas manuais inseridas pelo próprio aluno com os prazos gerados automaticamente pelo professor."
        },
        {
          label: "3. Iteração Rápida",
          detail: "Protótipos em média fidelidade submetidos a testes de usabilidade semanais para simplificar o ato de marcar uma tarefa como 'concluída'."
        }
      ]
    },
    solucao: "Criação de um hub centralizado contendo um calendário drag-and-drop dinâmico, uma barra de progresso gamificada baseada nas entregas da semana, e um menu lateral limpo. O usuário consegue anexar arquivos e enviar o dever de casa diretamente pela nossa interface para o Moodle, eliminando 5 etapas redundantes de navegação.",
    resultado: "A taxa de entrega pontual das disciplinas integradas à nova ferramenta subiu em 28%. Na pesquisa de usabilidade realizada ao término do semestre piloto, o produto obteve nota média de 4.8/5.0 em facilidade de uso, tornando-se o gerenciador de estudos padrão recomendado pela reitoria da instituição acadêmica parceira."
  },
  {
    id: "university",
    title: "University Operations Hub",
    stat: "Operational UX · Process Automation",
    description: "Mapeamento de processos e design de portais administrativos corporativos. Redução do atrito em solicitações acadêmicas e automatização de fluxos de aprovação.",
    image: "https://picsum.photos/seed/uni/800/400",
    link: "",
    visaoGeral: "O University Operations Hub é um sistema ERP de nível corporativo voltado à automação e controle administrativo das operações internas de faculdades privadas. O hub integra os setores de secretaria, tesouraria, controle acadêmico e coordenação pedagógica em um único fluxo digital seguro.",
    problema: "A tramitação de documentos estudantis básicos (como histórico escolar oficial e trancamento de matrícula) exigia o preenchimento de formulários de papel e aprovações físicas em múltiplos guichês. Esse atrito administrativo gerava atrasos de até 15 dias úteis e criava filas intermináveis na secretaria física nos começos de período.",
    processo: {
      intro: "Estruturamos as aprovações através de um mapeamento profundo dos fluxos operacionais internos:",
      steps: [
        {
          label: "1. Service Blueprinting",
          detail: "Mapeamos os processos de ponta a ponta, listando ações do aluno, equipe de atendimento (frontstage) e sistemas/servidores legados (backstage)."
        },
        {
          label: "2. Agrupamento Inteligente",
          detail: "Reorganização das filas de tarefas administrativas de modo a automatizar rotas de envio com base na disponibilidade de coordenadores acadêmicos."
        },
        {
          label: "3. Design de Segurança",
          detail: "Validação de etapas adicionais de aprovação e criptografia de assinaturas digitais direto na interface do painel do funcionário."
        }
      ]
    },
    solucao: "Idealizamos um painel administrativo com fluxo de filas inteligentes de tarefas pendentes organizadas por urgência do aluno e prazos contratuais. O sistema dispõe de formulários dinâmicos autovalidáveis para os alunos na ponta de entrada e um painel de despacho rápido para o funcionário aprovar solicitações repetitivas com apenas um clique.",
    resultado: "Conseguimos reduzir o prazo de atendimento médio da secretaria de 14 dias úteis para menos de 48 horas úteis, digitalizando completamente mais de 15 mil solicitações mensais e gerando economia física em papelaria e suporte operacional na ordem de 60% ao ano."
  }
];
