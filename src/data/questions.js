const questions = [
  // Nível Fácil (1-11)
  {
    ods: 1,
    difficulty: 'fácil',
    text: "Qual é o principal objetivo do ODS 1?",
    options: [
      "Erradicar a pobreza extrema",
      "Reduzir a desigualdade",
      "Melhorar a educação",
      "Combater as mudanças climáticas"
    ],
    correctAnswer: 0,
    explanation: "O ODS 1 tem como objetivo principal erradicar a pobreza extrema em todas as suas formas, em todos os lugares."
  },
  {
    ods: 2,
    difficulty: 'fácil',
    text: "Qual ODS trata sobre fome zero?",
    options: [
      "ODS 1",
      "ODS 2", 
      "ODS 3",
      "ODS 4"
    ],
    correctAnswer: 1,
    explanation: "O ODS 2 busca acabar com a fome, alcançar a segurança alimentar e melhorar a nutrição."
  },
  {
    ods: 3,
    difficulty: 'fácil',
    text: "Qual destes é um objetivo do ODS 3 (Saúde e Bem-estar)?",
    options: [
      "Reduzir a mortalidade infantil",
      "Aumentar o uso de carros",
      "Diminuir o acesso a medicamentos",
      "Reduzir o número de médicos"
    ],
    correctAnswer: 0,
    explanation: "O ODS 3 visa reduzir a mortalidade infantil para pelo menos 25 por 1.000 nascidos vivos até 2030."
  },
  {
    ods: 4,
    difficulty: 'fácil',
    text: "Até que ano os ODS devem ser alcançados?",
    options: [
      "2025",
      "2030",
      "2040",
      "2050"
    ],
    correctAnswer: 1,
    explanation: "Os Objetivos de Desenvolvimento Sustentável têm como meta o ano de 2030."
  },
  {
    ods: 5,
    difficulty: 'fácil',
    text: "Qual ODS trata da igualdade de gênero?",
    options: [
      "ODS 4",
      "ODS 5",
      "ODS 6",
      "ODS 7"
    ],
    correctAnswer: 1,
    explanation: "O ODS 5 visa alcançar a igualdade de gênero e empoderar todas as mulheres e meninas."
  },
  {
    ods: 6,
    difficulty: 'fácil',
    text: "Qual destes é um objetivo do ODS 6?",
    options: [
      "Água potável para todos",
      "Aumentar o consumo de plástico",
      "Reduzir o saneamento básico",
      "Privatizar todas as fontes de água"
    ],
    correctAnswer: 0,
    explanation: "O ODS 6 busca assegurar a disponibilidade e gestão sustentável da água e saneamento para todos."
  },
  {
    ods: 7,
    difficulty: 'fácil',
    text: "Qual ODS trata de energia limpa?",
    options: [
      "ODS 5",
      "ODS 7",
      "ODS 9",
      "ODS 11"
    ],
    correctAnswer: 1,
    explanation: "O ODS 7 visa assegurar o acesso a fontes de energia acessíveis, confiáveis, sustentáveis e modernas."
  },
  {
    ods: 8,
    difficulty: 'fácil',
    text: "Qual destes é foco do ODS 8?",
    options: [
      "Trabalho decente e crescimento econômico",
      "Reduzir empregos",
      "Aumentar a jornada de trabalho",
      "Eliminar direitos trabalhistas"
    ],
    correctAnswer: 0,
    explanation: "O ODS 8 promove o crescimento econômico sustentado, inclusivo e sustentável, emprego pleno e produtivo e trabalho decente para todos."
  },
  {
    ods: 9,
    difficulty: 'fácil',
    text: "Qual ODS trata de indústria, inovação e infraestrutura?",
    options: [
      "ODS 7",
      "ODS 8",
      "ODS 9",
      "ODS 10"
    ],
    correctAnswer: 2,
    explanation: "O ODS 9 busca construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação."
  },
  {
    ods: 10,
    difficulty: 'fácil',
    text: "Reduzir as desigualdades é o objetivo de qual ODS?",
    options: [
      "ODS 8",
      "ODS 9",
      "ODS 10",
      "ODS 11"
    ],
    correctAnswer: 2,
    explanation: "O ODS 10 visa reduzir a desigualdade dentro dos países e entre eles."
  },
  {
    ods: 11,
    difficulty: 'fácil',
    text: "Cidades e comunidades sustentáveis são foco de qual ODS?",
    options: [
      "ODS 9",
      "ODS 10",
      "ODS 11",
      "ODS 12"
    ],
    correctAnswer: 2,
    explanation: "O ODS 11 busca tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis."

  // Nível Normal (12-22)
  },
  {
    ods: 12,
    difficulty: 'normal',
    text: "Qual percentual de alimentos produzidos é desperdiçado globalmente?",
    options: [
      "Cerca de 10%",
      "Cerca de 33%",
      "Cerca de 50%",
      "Cerca de 75%"
    ],
    correctAnswer: 1,
    explanation: "Cerca de 1/3 de todos os alimentos produzidos no mundo são perdidos ou desperdiçados anualmente."
  },
  {
    ods: 13,
    difficulty: 'normal',
    text: "Qual foi o aumento médio da temperatura global desde a era pré-industrial?",
    options: [
      "0,5°C",
      "1,1°C",
      "2,0°C",
      "3,5°C"
    ],
    correctAnswer: 1,
    explanation: "A temperatura global já aumentou cerca de 1,1°C desde o período pré-industrial (dados até 2023)."
  },
  {
    ods: 14,
    difficulty: 'normal',
    text: "Quantas toneladas de plástico chegam aos oceanos anualmente?",
    options: [
      "1 milhão",
      "8 milhões",
      "15 milhões",
      "25 milhões"
    ],
    correctAnswer: 1,
    explanation: "Cerca de 8 milhões de toneladas de plástico acabam nos oceanos a cada ano."
  },
  {
    ods: 15,
    difficulty: 'normal',
    text: "Qual porcentagem das espécies terrestres pode estar ameaçada de extinção?",
    options: [
      "5%",
      "15%",
      "25%",
      "40%"
    ],
    correctAnswer: 2,
    explanation: "Cerca de 1 milhão de espécies (25% do total) estão ameaçadas de extinção atualmente."
  },
  {
    ods: 16,
    difficulty: 'normal',
    text: "Quantas pessoas no mundo vivem em contextos frágeis afetados por conflitos?",
    options: [
      "50 milhões",
      "200 milhões",
      "500 milhões",
      "1 bilhão"
    ],
    correctAnswer: 1,
    explanation: "Cerca de 200 milhões de pessoas vivem em áreas afetadas por conflitos ou alta criminalidade."
  },
  {
    ods: 17,
    difficulty: 'normal',
    text: "Qual porcentagem do PIB dos países desenvolvidos deveria ser destinada à AOD?",
    options: [
      "0,1%",
      "0,7%",
      "1,5%",
      "2,0%"
    ],
    correctAnswer: 1,
    explanation: "A meta é que países desenvolvidos destinem 0,7% de seu PIB para Ajuda Oficial ao Desenvolvimento (AOD)."
  },
  {
    ods: 1,
    difficulty: 'normal',
    text: "Qual é a linha de pobreza extrema definida pelo Banco Mundial?",
    options: [
      "US$ 1,00 por dia",
      "US$ 1,90 por dia",
      "US$ 3,20 por dia",
      "US$ 5,50 por dia"
    ],
    correctAnswer: 1,
    explanation: "A linha de pobreza extrema é definida como viver com menos de US$1,90 por dia (em paridade de poder de compra de 2011)."
  },
  {
    ods: 2,
    difficulty: 'normal',
    text: "Quantas pessoas sofrem de insegurança alimentar moderada ou grave?",
    options: [
      "500 milhões",
      "1 bilhão",
      "2 bilhões",
      "3 bilhões"
    ],
    correctAnswer: 2,
    explanation: "Cerca de 2 bilhões de pessoas enfrentam insegurança alimentar moderada ou grave no mundo."
  },
  {
    ods: 3,
    difficulty: 'normal',
    text: "Qual a principal causa de morte entre adolescentes?",
    options: [
      "Doenças infecciosas",
      "Acidentes de trânsito",
      "Suicídio",
      "Violência interpessoal"
    ],
    correctAnswer: 1,
    explanation: "Acidentes de trânsito são a principal causa de morte entre adolescentes de 15-19 anos."
  },
  {
    ods: 4,
    difficulty: 'normal',
    text: "Quantas crianças e adolescentes estão fora da escola no mundo?",
    options: [
      "50 milhões",
      "120 milhões",
      "260 milhões",
      "400 milhões"
    ],
    correctAnswer: 2,
    explanation: "Cerca de 260 milhões de crianças e adolescentes estavam fora da escola em 2023."
  },
  {
    ods: 5,
    difficulty: 'normal',
    text: "Qual a porcentagem de mulheres em parlamentos nacionais?",
    options: [
      "15%",
      "26%",
      "37%",
      "48%"
    ],
    correctAnswer: 1,
    explanation: "A representação feminina em parlamentos nacionais era de cerca de 26% em 2023."

  // Nível Difícil (23-33)
  },
  {
    ods: 6,
    difficulty: 'difícil',
    text: "Quantas pessoas não têm acesso a água potável gerenciada com segurança?",
    options: [
      "500 milhões",
      "1,2 bilhões",
      "2 bilhões",
      "3,5 bilhões"
    ],
    correctAnswer: 2,
    explanation: "Cerca de 2 bilhões de pessoas carecem de acesso a água potável gerenciada com segurança."
  },
  {
    ods: 7,
    difficulty: 'difícil',
    text: "Qual porcentagem da energia global é renovável?",
    options: [
      "8%",
      "18%",
      "29%",
      "42%"
    ],
    correctAnswer: 2,
    explanation: "Cerca de 29% da eletricidade global vem de fontes renováveis (dados de 2023)."
  },
  {
    ods: 8,
    difficulty: 'difícil',
    text: "Qual é a taxa de desemprego juvenil global?",
    options: [
      "8%",
      "13%",
      "19%",
      "24%"
    ],
    correctAnswer: 2,
    explanation: "A taxa de desemprego juvenil global é cerca de 3 vezes maior que a dos adultos, atingindo aproximadamente 19%."
  },
  {
    ods: 9,
    difficulty: 'difícil',
    text: "Qual porcentagem da população africana tem acesso à internet?",
    options: [
      "18%",
      "33%",
      "47%",
      "62%"
    ],
    correctAnswer: 1,
    explanation: "Apenas cerca de 33% da população africana tinha acesso à internet em 2023."
  },
  {
    ods: 10,
    difficulty: 'difícil',
    text: "Quantas pessoas vivem com menos de 10% da renda global?",
    options: [
      "10% da população",
      "25% da população",
      "40% da população",
      "55% da população"
    ],
    correctAnswer: 3,
    explanation: "Os 55% mais pobres da população global vivem com menos de 10% da renda mundial."
  },
  {
    ods: 11,
    difficulty: 'difícil',
    text: "Qual porcentagem da população urbana respira ar poluído?",
    options: [
      "30%",
      "55%",
      "75%",
      "90%"
    ],
    correctAnswer: 3,
    explanation: "Cerca de 90% dos moradores urbanos respiram ar que não atinge os padrões de qualidade da OMS."
  },
  {
    ods: 12,
    difficulty: 'difícil',
    text: "Quantas toneladas de resíduos eletrônicos são geradas anualmente?",
    options: [
      "10 milhões",
      "25 milhões",
      "50 milhões",
      "75 milhões"
    ],
    correctAnswer: 2,
    explanation: "Cerca de 50 milhões de toneladas de lixo eletrônico são geradas anualmente."
  },
  {
    ods: 13,
    difficulty: 'difícil',
    text: "Qual o aumento projetado do nível do mar até 2100 no cenário atual?",
    options: [
      "0,3-0,6 metros",
      "0,6-1,1 metros",
      "1,1-1,8 metros",
      "2,0-2,5 metros"
    ],
    correctAnswer: 1,
    explanation: "Projeta-se um aumento de 0,6-1,1 metros no nível do mar até 2100 se mantivermos as atuais emissões."
  },
  {
    ods: 14,
    difficulty: 'difícil',
    text: "Qual porcentagem dos recifes de coral foi perdida desde 1870?",
    options: [
      "20%",
      "40%",
      "60%",
      "80%"
    ],
    correctAnswer: 2,
    explanation: "Cerca de 50% dos recifes de coral foram perdidos desde 1870, com projeção de 90% até 2050."
  },
  {
    ods: 15,
    difficulty: 'difícil',
    text: "Quantas espécies de árvores estão ameaçadas de extinção?",
    options: [
      "1.000",
      "5.000",
      "10.000",
      "17.500"
    ],
    correctAnswer: 3,
    explanation: "Cerca de 17.500 espécies de árvores estão ameaçadas - 30% de todas as espécies de árvores."
  },
  {
    ods: 16,
    difficulty: 'difícil',
    text: "Quantos países não têm leis contra violência doméstica?",
    options: [
      "12",
      "27",
      "49",
      "73"
    ],
    correctAnswer: 2,
    explanation: "49 países ainda não possuem leis específicas que protejam as mulheres da violência doméstica."
  },
  {
    ods: 17,
    difficulty: 'difícil',
    text: "Qual porcentagem dos países em desenvolvimento recebeu ajuda para comércio?",
    options: [
      "35%",
      "55%",
      "75%",
      "90%"
    ],
    correctAnswer: 2,
    explanation: "Apenas 55% dos países em desenvolvimento receberam ajuda para comércio em 2022."
  }
];

export default questions;
