/**
 * Institutional copy. Wording that comes from "Valores NexGold.docx"
 * (Missão/Visão/Valores/Diferencial, Quem Somos) is kept literal — it is the
 * client's own positioning language, not ours to paraphrase.
 *
 * The PDF brief ("O Site como Demonstração de Capacidade") is a strategy
 * document about how the site should make a visitor feel — it is not
 * NexGold's voice and its lines should never be quoted verbatim as if a
 * visitor or the company said them. Use it to decide structure/tone, not
 * as a copy source.
 */

export const hero = {
  eyebrow: "NexGold",
  title: "A engenharia por trás do crescimento.",
  subtitle:
    "Não somos uma agência de marketing. Somos uma célula de inteligência e desenvolvimento voltada para a escala de negócios.",
};

export const manifesto = {
  heading: "Quem somos",
  paragraphs: [
    "A NexGold Company não é apenas uma agência de marketing ou empresa de desenvolvimento; somos uma célula de inteligência e desenvolvimento voltada para a escala de negócios. Nascemos da união de três pilares fundamentais: a visão estratégica e comercial, a criatividade de alto impacto e a engenharia tecnológica.",
    "Enquanto o mercado se contenta com o “trabalho mediano” — entregando apenas estética sem profundidade — a NexGold atua na intersecção entre dados e tecnologia. Nossa estrutura é liderada por especialistas em gestão comercial e tráfego, design estratégico e desenvolvimento de sistemas e IA. Não entregamos apenas conteúdo; construímos ecossistemas onde o marketing personalizado e o desenvolvimento de produtos tecnológicos específicos trabalham juntos para transformar a realidade comercial de micro, pequenas e médias empresas.",
  ],
};

export const missaoVisao = {
  missao: {
    label: "Missão",
    text: "Transformar a percepção de mercado dos nossos clientes através da transição do marketing observável para o marketing estratégico e personalizado, entregando soluções tecnológicas sob medida que convertem presença digital em ativos de alto valor.",
  },
  visao: {
    label: "Visão",
    text: "Redefinir o padrão de excelência para o marketing de pequenas e médias empresas, tornando-se o benchmark global em agências que integram inteligência artificial, análise de processos internos e criatividade disruptiva.",
  },
};

export const valores = [
  {
    title: "Inteligência Democrática",
    text: "Acreditamos no poder das decisões conjuntas e na colaboração entre especialistas para encontrar a melhor solução para cada desafio.",
  },
  {
    title: "Antimediocridade",
    text: "Rejeitamos o óbvio e o “posts bonitinhos” sem estratégia; nosso foco é a análise profunda e o resultado real.",
  },
  {
    title: "Transparência Tecnológica",
    text: "Utilizamos a tecnologia e a IA para dar clareza aos processos comerciais, eliminando achismos com dados concretos.",
  },
  {
    title: "Criatividade Orientada a Dados",
    text: "Nossa arte e design não existem apenas para serem belos, mas para servirem como ferramentas de conversão e autoridade.",
  },
  {
    title: "Desenvolvimento Contínuo",
    text: "Evoluímos na mesma velocidade que a tecnologia, garantindo que nossos clientes sempre tenham acesso ao que há de mais avançado no setor.",
  },
];

export const diferencial = {
  heading: "O diferencial NexGold: a “Nova Visão”",
  intro: "Nós dividimos o mundo em dois estágios claros para nossos clientes:",
  mercadoObservavel: {
    label: "O Mercado Observável",
    text: "Onde a maioria das empresas está presa, fazendo o que todos fazem, com agências que não entendem seus processos internos e entregam apenas o básico visual.",
  },
  marketingNexgold: {
    label: "O Marketing NexGold",
    text: "Onde a estratégia é personalizada, os processos comerciais são otimizados por tecnologia e cada ação é medida pelo valor (ouro) que gera para o negócio.",
  },
};

/**
 * "O que fazemos" is deliberately modeled as one connected system with two
 * branches (Desenvolvimento / Marketing), not two separate paths — this
 * matches the docx's own framing ("ecossistemas onde o marketing
 * personalizado e o desenvolvimento de produtos... trabalham juntos"),
 * not a bifurcation.
 */
export const capacidades = {
  heading: "O que fazemos",
  intro:
    "Desenvolvimento e marketing não operam em paralelo — fazem parte do mesmo sistema.",
  hub: "NexGold",
  branches: [
    {
      label: "Desenvolvimento",
      items: [
        { title: "Software", text: "Sistemas sob medida para operações reais, não templates genéricos." },
        { title: "Produtos digitais", text: "Do zero ao produto: plataformas, dashboards, ferramentas internas." },
        { title: "Inteligência artificial", text: "IA aplicada a processo comercial, não IA como enfeite de pitch." },
        { title: "Automação", text: "Eliminação de trabalho manual repetitivo com processos e integrações." },
        { title: "Experiências web", text: "Sites e interfaces que comunicam capacidade técnica na própria execução." },
        { title: "Sistemas", text: "Arquitetura pensada para crescer junto com o negócio do cliente." },
      ],
    },
    {
      label: "Marketing",
      items: [
        { title: "Gestão comercial", text: "Processos de venda otimizados por tecnologia, não por achismo." },
        { title: "Tráfego e performance", text: "Aquisição paga orientada a dados, não a métricas de vaidade." },
        { title: "Marketing personalizado", text: "Estratégia sob medida para o seu processo comercial, não um pacote genérico." },
        { title: "Design estratégico", text: "Identidade e criativos como ferramentas de conversão e autoridade." },
        { title: "Análise de processos", text: "Mapeamento do funil comercial para decisões com dados concretos." },
      ],
    },
  ],
};

/**
 * Placeholder — nenhum case real foi fornecido ainda. Estrutura pronta para
 * troca por projetos reais (nome, descrição, imagem, link) sem alterar o
 * componente.
 */
export const projeto = {
  heading: "Projetos",
  intro: "Cada projeto é um pequeno case. Um exemplo ilustrativo de como uma experiência NexGold se constrói camada por camada:",
  isPlaceholder: true,
  name: "NexGestor",
  description:
    "Um produto ilustrativo — a experiência revela, camada por camada, o que existe por trás da interface.",
  layers: [
    "Frontend",
    "Backend",
    "Inteligência artificial",
    "Dados",
    "Integrações",
    "Arquitetura",
  ],
};

export const engenharia = {
  heading: "Engenharia",
  intro: "Uma oportunidade de mostrar que existe profundidade técnica por trás do visual.",
  items: [
    "Arquitetura",
    "Backend",
    "Frontend",
    "Inteligência artificial",
    "Dados",
    "Infraestrutura",
    "Integrações",
  ],
};

export const processo = {
  heading: "Processo",
  text: "Como uma ideia se transforma em produto dentro da NexGold.",
};

export const encerramento = {
  heading: "O que podemos construir juntos?",
  principle:
    "Soluções tecnológicas sob medida que convertem presença digital em ativos de alto valor — para o seu negócio, não para o mercado observável.",
};

export const techMarquee = [
  "React",
  "Next.js",
  "TypeScript",
  "GSAP",
  "IA aplicada",
  "Automação",
  "Dados",
  "Arquitetura",
];

export const navLinks = [
  { label: "Quem somos", href: "#manifesto" },
  { label: "Valores", href: "#valores" },
  { label: "O que fazemos", href: "#capacidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];
