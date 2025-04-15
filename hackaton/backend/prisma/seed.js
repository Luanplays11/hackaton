const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando população do banco de dados...');

  // CRIAÇÃO DE MATÉRIAS
  console.log('Criando matérias...');
  const materias = await Promise.all([
    prisma.materia.create({ data: { nome: 'Matemática', descricao: 'Estudo dos números, quantidades, espaço, estruturas e variações' } }),
    prisma.materia.create({ data: { nome: 'História', descricao: 'Estudo do passado e os eventos que moldaram a humanidade' } }),
    prisma.materia.create({ data: { nome: 'Português', descricao: 'Estudo da língua portuguesa, literatura e comunicação' } }),
    prisma.materia.create({ data: { nome: 'Física', descricao: 'Estudo das leis fundamentais da natureza e funcionamento do universo' } }),
    prisma.materia.create({ data: { nome: 'Biologia', descricao: 'Estudo dos seres vivos e suas interações' } }),
    prisma.materia.create({ data: { nome: 'Geografia', descricao: 'Estudo do espaço geográfico e as relações humanas' } }),
  ]);

  const [matematica, historia, portugues, fisica, biologia, geografia] = materias;
  
  // CRIAÇÃO DE PROFESSORES - Adicionado campo senha
  console.log('Criando professores...');
  const professores = await Promise.all([
    prisma.professor.create({ data: { nome: 'Carlos Silva', email: 'carlos.silva@escola.com', senha: '123456' } }),
    prisma.professor.create({ data: { nome: 'Marcia Oliveira', email: 'marcia.oliveira@escola.com', senha: '123456' } }),
    prisma.professor.create({ data: { nome: 'Roberto Pereira', email: 'roberto.pereira@escola.com', senha: '123456' } }),
    prisma.professor.create({ data: { nome: 'Ana Castro', email: 'ana.castro@escola.com', senha: '123456' } }),
    prisma.professor.create({ data: { nome: 'Paulo Mendes', email: 'paulo.mendes@escola.com', senha: '123456' } }),
    prisma.professor.create({ data: { nome: 'Luiza Santos', email: 'luiza.santos@escola.com', senha: '123456' } }),
    prisma.professor.create({ data: { nome: 'Fernando Costa', email: 'fernando.costa@escola.com', senha: '123456' } }),
    prisma.professor.create({ data: { nome: 'Cristina Alves', email: 'cristina.alves@escola.com', senha: '123456' } }),
  ]);

  const [profMat1, profHist1, profPort1, profFis1, profBio1, profGeo1, profMat2, profHist2] = professores;
  
  // CRIAÇÃO DE ALUNOS - Adicionado campo senha
  console.log('Criando alunos...');
  const alunos = await Promise.all([
    prisma.aluno.create({ data: { nome: 'João Silva', email: 'joao@aluno.com', senha: '123456' } }),
    prisma.aluno.create({ data: { nome: 'Maria Oliveira', email: 'maria@aluno.com', senha: '123456' } }),
    prisma.aluno.create({ data: { nome: 'Pedro Santos', email: 'pedro@aluno.com', senha: '123456' } }),
    prisma.aluno.create({ data: { nome: 'Carla Sousa', email: 'carla@aluno.com', senha: '123456' } }),
    prisma.aluno.create({ data: { nome: 'André Ferreira', email: 'andre@aluno.com', senha: '123456' } }),
    prisma.aluno.create({ data: { nome: 'Juliana Lima', email: 'juliana@aluno.com', senha: '123456' } }),
    prisma.aluno.create({ data: { nome: 'Lucas Costa', email: 'lucas@aluno.com', senha: '123456' } }),
    prisma.aluno.create({ data: { nome: 'Mariana Almeida', email: 'mariana@aluno.com', senha: '123456' } }),
    prisma.aluno.create({ data: { nome: 'Rafael Gomes', email: 'rafael@aluno.com', senha: '123456' } }),
    prisma.aluno.create({ data: { nome: 'Camila Rodrigues', email: 'camila@aluno.com', senha: '123456' } }),
  ]);
  
  // CRIAÇÃO DE ITENS DE ROADMAP PARA MATEMÁTICA
  console.log('Criando roadmap de Matemática...');
  const roadmapMatematica = await Promise.all([
    prisma.roadmapItem.create({
      data: {
        titulo: 'Operações Básicas',
        nivel: 1,
        descricao: 'Adição, subtração, multiplicação e divisão',
        materiaId: matematica.id,
        recursos: {
          create: [
            { titulo: 'Videoaula sobre operações', url: 'https://www.youtube.com/watch?v=example1', tipo: 'video' },
            { titulo: 'Apostila de operações básicas', url: 'https://www.matematica.com.br/operacoes', tipo: 'apostila' }
          ]
        }
      }
    }),
    prisma.roadmapItem.create({
      data: {
        titulo: 'Números Negativos',
        nivel: 1,
        descricao: 'Operações com números negativos',
        materiaId: matematica.id,
        recursos: {
          create: [
            { titulo: 'Aprenda sobre números negativos', url: 'https://www.youtube.com/watch?v=example2', tipo: 'video' },
            { titulo: 'Exercícios com números negativos', url: 'https://www.matematica.com.br/negativos', tipo: 'exercicios' }
          ]
        }
      }
    }),
    prisma.roadmapItem.create({
      data: {
        titulo: 'Equações do 1º Grau',
        nivel: 2,
        descricao: 'Conceitos básicos de equações de primeiro grau',
        materiaId: matematica.id,
        recursos: {
          create: [
            { titulo: 'Vídeo aula completa', url: 'https://www.youtube.com/watch?v=QDHf0Vp7lnM', tipo: 'video' },
            { titulo: 'Teoria e exemplos', url: 'https://brasilescola.uol.com.br/matematica/equacao-1-grau.htm', tipo: 'artigo' }
          ]
        }
      }
    }),
    prisma.roadmapItem.create({
      data: {
        titulo: 'Funções do 1º Grau',
        nivel: 3,
        descricao: 'Estudo de funções de primeiro grau',
        materiaId: matematica.id,
        recursos: {
          create: [
            { titulo: 'Vídeo explicativo', url: 'https://www.youtube.com/watch?v=R8fC8Lk93x8', tipo: 'video' },
            { titulo: 'Artigo resumido', url: 'https://www.todamateria.com.br/funcao-do-1-grau/', tipo: 'artigo' }
          ]
        }
      }
    }),
    prisma.roadmapItem.create({
      data: {
        titulo: 'Equações do 2º Grau',
        nivel: 3,
        descricao: 'Resolução de equações quadráticas',
        materiaId: matematica.id,
        recursos: {
          create: [
            { titulo: 'Videoaula sobre Bhaskara', url: 'https://www.youtube.com/watch?v=example5', tipo: 'video' },
            { titulo: 'Fórmula de Bhaskara explicada', url: 'https://www.matematica.com.br/bhaskara', tipo: 'artigo' }
          ]
        }
      }
    }),
  ]);

  const [operacoesBasicas, numerosNegativos, equacoes1Grau, funcoes1Grau, equacoes2Grau] = roadmapMatematica;

  // CRIAÇÃO DE ITENS DE ROADMAP PARA HISTÓRIA
  console.log('Criando roadmap de História...');
  const roadmapHistoria = await Promise.all([
    prisma.roadmapItem.create({
      data: {
        titulo: 'Pré-História',
        nivel: 1,
        descricao: 'Períodos paleolítico e neolítico',
        materiaId: historia.id,
        recursos: {
          create: [
            { titulo: 'Videoaula sobre Pré-História', url: 'https://www.youtube.com/watch?v=historia1', tipo: 'video' },
            { titulo: 'Linha do tempo ilustrada', url: 'https://www.historia.com.br/preistoria', tipo: 'infografico' }
          ]
        }
      }
    }),
    prisma.roadmapItem.create({
      data: {
        titulo: 'Antiguidade Clássica',
        nivel: 2,
        descricao: 'Grécia e Roma Antigas',
        materiaId: historia.id,
        recursos: {
          create: [
            { titulo: 'Aula sobre Grécia Antiga', url: 'https://www.youtube.com/watch?v=historia2', tipo: 'video' },
            { titulo: 'Artigo sobre Roma Antiga', url: 'https://www.historia.com.br/roma', tipo: 'artigo' }
          ]
        }
      }
    }),
    prisma.roadmapItem.create({
      data: {
        titulo: 'Idade Média',
        nivel: 2,
        descricao: 'Feudalismo e sociedade medieval',
        materiaId: historia.id,
        recursos: {
          create: [
            { titulo: 'Feudalismo explicado', url: 'https://www.youtube.com/watch?v=historia3', tipo: 'video' },
            { titulo: 'A Igreja na Idade Média', url: 'https://www.historia.com.br/igreja-medieval', tipo: 'artigo' }
          ]
        }
      }
    }),
    prisma.roadmapItem.create({
      data: {
        titulo: 'Iluminismo',
        nivel: 3,
        descricao: 'Movimento intelectual do século XVIII',
        materiaId: historia.id,
        recursos: {
          create: [
            { titulo: 'Principais filósofos', url: 'https://www.youtube.com/watch?v=historia4', tipo: 'video' },
            { titulo: 'O século das luzes', url: 'https://www.historia.com.br/iluminismo', tipo: 'artigo' }
          ]
        }
      }
    }),
    prisma.roadmapItem.create({
      data: {
        titulo: 'Revolução Francesa',
        nivel: 4,
        descricao: 'Causas e consequências da Revolução Francesa',
        materiaId: historia.id,
        recursos: {
          create: [
            { titulo: 'Vídeo resumo', url: 'https://www.youtube.com/watch?v=zLZ1TLHDn9I', tipo: 'video' },
            { titulo: 'Resumo completo', url: 'https://www.todamateria.com.br/revolucao-francesa/', tipo: 'artigo' },
            { titulo: 'Exercícios', url: 'https://www.todamateria.com.br/exercicios-sobre-revolucao-francesa/', tipo: 'exercicios' }
          ]
        }
      }
    }),
  ]);

  const [preHistoria, antiguidadeClassica, idadeMedia, iluminismo, revolucaoFrancesa] = roadmapHistoria;

  // Adicionar mais roadmaps para outras matérias...
  console.log('Criando roadmaps para outras matérias...');
  
  // RELACIONAMENTOS DE PRÉ-REQUISITOS
  console.log('Configurando pré-requisitos...');
  await Promise.all([
    // Matemática
    prisma.prerequisito.create({ data: { itemId: equacoes1Grau.id, prerequisitoId: operacoesBasicas.id } }),
    prisma.prerequisito.create({ data: { itemId: equacoes1Grau.id, prerequisitoId: numerosNegativos.id } }),
    prisma.prerequisito.create({ data: { itemId: funcoes1Grau.id, prerequisitoId: equacoes1Grau.id } }),
    prisma.prerequisito.create({ data: { itemId: equacoes2Grau.id, prerequisitoId: equacoes1Grau.id } }),
    
    // História
    prisma.prerequisito.create({ data: { itemId: antiguidadeClassica.id, prerequisitoId: preHistoria.id } }),
    prisma.prerequisito.create({ data: { itemId: idadeMedia.id, prerequisitoId: antiguidadeClassica.id } }),
    prisma.prerequisito.create({ data: { itemId: iluminismo.id, prerequisitoId: idadeMedia.id } }),
    prisma.prerequisito.create({ data: { itemId: revolucaoFrancesa.id, prerequisitoId: iluminismo.id } }),
  ]);

  // CRIAÇÃO DE AULAS
  console.log('Criando aulas...');
  
  // Aulas de Matemática
  const aulasMat = await Promise.all([
    prisma.aula.create({
      data: {
        titulo: 'Introdução às Operações Básicas',
        data: new Date('2025-02-10'),
        descricao: 'Primeiros conceitos de adição e subtração',
        materiaId: matematica.id,
        professorId: profMat1.id,
        roadmapId: operacoesBasicas.id
      }
    }),
    prisma.aula.create({
      data: {
        titulo: 'Operações com Números Negativos',
        data: new Date('2025-02-17'),
        descricao: 'Como trabalhar com números negativos',
        materiaId: matematica.id,
        professorId: profMat1.id,
        roadmapId: numerosNegativos.id
      }
    }),
    prisma.aula.create({
      data: {
        titulo: 'Equações do 1º Grau - Conceitos',
        data: new Date('2025-03-03'),
        descricao: 'Introdução às equações lineares',
        materiaId: matematica.id,
        professorId: profMat1.id,
        roadmapId: equacoes1Grau.id
      }
    }),
    prisma.aula.create({
      data: {
        titulo: 'Equações do 1º Grau - Problemas',
        data: new Date('2025-03-10'),
        descricao: 'Resolução de problemas com equações lineares',
        materiaId: matematica.id,
        professorId: profMat1.id,
        roadmapId: equacoes1Grau.id
      }
    }),
    prisma.aula.create({
      data: {
        titulo: 'Funções do 1º Grau - Introdução',
        data: new Date('2025-03-24'),
        descricao: 'Conceitos básicos de funções lineares',
        materiaId: matematica.id,
        professorId: profMat2.id,
        roadmapId: funcoes1Grau.id
      }
    }),
    prisma.aula.create({
      data: {
        titulo: 'Equações do 2º Grau - Fórmula de Bhaskara',
        data: new Date('2025-04-07'),
        descricao: 'Aprendendo a usar a fórmula de Bhaskara',
        materiaId: matematica.id,
        professorId: profMat2.id,
        roadmapId: equacoes2Grau.id
      }
    }),
  ]);

  // Aulas de História
  const aulasHist = await Promise.all([
    prisma.aula.create({
      data: {
        titulo: 'Introdução à Pré-História',
        data: new Date('2025-02-12'),
        descricao: 'Primeiros humanos e suas ferramentas',
        materiaId: historia.id,
        professorId: profHist1.id,
        roadmapId: preHistoria.id
      }
    }),
    prisma.aula.create({
      data: {
        titulo: 'A Grécia Antiga',
        data: new Date('2025-02-19'),
        descricao: 'Principais aspectos da civilização grega',
        materiaId: historia.id,
        professorId: profHist1.id,
        roadmapId: antiguidadeClassica.id
      }
    }),
    prisma.aula.create({
      data: {
        titulo: 'O Império Romano',
        data: new Date('2025-02-26'),
        descricao: 'Ascensão e queda de Roma',
        materiaId: historia.id,
        professorId: profHist1.id,
        roadmapId: antiguidadeClassica.id
      }
    }),
    prisma.aula.create({
      data: {
        titulo: 'Feudalismo Medieval',
        data: new Date('2025-03-05'),
        descricao: 'Organização social na Idade Média',
        materiaId: historia.id,
        professorId: profHist2.id,
        roadmapId: idadeMedia.id
      }
    }),
    prisma.aula.create({
      data: {
        titulo: 'Filósofos Iluministas',
        data: new Date('2025-03-19'),
        descricao: 'Principais pensadores e suas ideias',
        materiaId: historia.id,
        professorId: profHist2.id,
        roadmapId: iluminismo.id
      }
    }),
    prisma.aula.create({
      data: {
        titulo: 'A Revolução Francesa e suas Fases',
        data: new Date('2025-04-02'),
        descricao: 'Da queda da Bastilha a Napoleão',
        materiaId: historia.id,
        professorId: profHist2.id,
        roadmapId: revolucaoFrancesa.id
      }
    }),
  ]);

  // Após o código existente para aulas de História, adicione:

  // CRIAÇÃO DE ROADMAPS E AULAS PARA PORTUGUÊS
  console.log('Criando roadmap de Português...');
  const roadmapPortugues = await Promise.all([
    prisma.roadmapItem.create({
      data: {
        titulo: 'Gramática Básica',
        nivel: 1,
        descricao: 'Fundamentos da gramática portuguesa',
        materiaId: portugues.id,
        recursos: {
          create: [
            { titulo: 'Videoaula de gramática', url: 'https://www.youtube.com/watch?v=port1', tipo: 'video' },
            { titulo: 'Guia completo de gramática', url: 'https://www.portugues.com.br/gramatica', tipo: 'artigo' }
          ]
        }
      }
    }),
    prisma.roadmapItem.create({
      data: {
        titulo: 'Interpretação de Texto',
        nivel: 2,
        descricao: 'Técnicas para compreensão textual',
        materiaId: portugues.id,
        recursos: {
          create: [
            { titulo: 'Como interpretar textos', url: 'https://www.youtube.com/watch?v=port2', tipo: 'video' },
            { titulo: 'Exercícios de interpretação', url: 'https://www.portugues.com.br/interpretacao', tipo: 'exercicios' }
          ]
        }
      }
    })
  ]);

  const [gramaticaBasica, interpretacaoTexto] = roadmapPortugues;
  
  console.log('Criando aulas de Português...');
  await Promise.all([
    prisma.aula.create({
      data: {
        titulo: 'Classes Gramaticais',
        data: new Date('2025-02-13'),
        descricao: 'Substantivos, adjetivos, verbos e outras classes',
        materiaId: portugues.id,
        professorId: profPort1.id,
        roadmapId: gramaticaBasica.id
      }
    }),
    prisma.aula.create({
      data: {
        titulo: 'Técnicas de Leitura',
        data: new Date('2025-02-20'),
        descricao: 'Como extrair informações de diferentes gêneros textuais',
        materiaId: portugues.id,
        professorId: profPort1.id,
        roadmapId: interpretacaoTexto.id
      }
    })
  ]);

  // CRIAÇÃO DE ROADMAPS E AULAS PARA FÍSICA
  console.log('Criando roadmap de Física...');
  const roadmapFisica = await Promise.all([
    prisma.roadmapItem.create({
      data: {
        titulo: 'Mecânica Clássica',
        nivel: 1,
        descricao: 'Estudo do movimento e forças',
        materiaId: fisica.id,
        recursos: {
          create: [
            { titulo: 'Leis de Newton explicadas', url: 'https://www.youtube.com/watch?v=fis1', tipo: 'video' },
            { titulo: 'Problemas de mecânica resolvidos', url: 'https://www.fisica.com.br/mecanica', tipo: 'exercicios' }
          ]
        }
      }
    }),
    prisma.roadmapItem.create({
      data: {
        titulo: 'Termodinâmica',
        nivel: 2,
        descricao: 'Estudo do calor e energia térmica',
        materiaId: fisica.id,
        recursos: {
          create: [
            { titulo: 'Introdução à termodinâmica', url: 'https://www.youtube.com/watch?v=fis2', tipo: 'video' },
            { titulo: 'As leis da termodinâmica', url: 'https://www.fisica.com.br/termo', tipo: 'artigo' }
          ]
        }
      }
    })
  ]);

  const [mecanica, termodinamica] = roadmapFisica;
  
  console.log('Criando aulas de Física...');
  await Promise.all([
    prisma.aula.create({
      data: {
        titulo: 'Leis de Newton',
        data: new Date('2025-02-14'),
        descricao: 'As três leis fundamentais do movimento',
        materiaId: fisica.id,
        professorId: profFis1.id,
        roadmapId: mecanica.id
      }
    }),
    prisma.aula.create({
      data: {
        titulo: 'Calorimetria',
        data: new Date('2025-02-21'),
        descricao: 'Cálculos de transferência de calor',
        materiaId: fisica.id,
        professorId: profFis1.id,
        roadmapId: termodinamica.id
      }
    })
  ]);

  // CRIAÇÃO DE ROADMAPS E AULAS PARA BIOLOGIA
  console.log('Criando roadmap de Biologia...');
  const roadmapBiologia = await Promise.all([
    prisma.roadmapItem.create({
      data: {
        titulo: 'Citologia',
        nivel: 1,
        descricao: 'Estudo das células e suas funções',
        materiaId: biologia.id,
        recursos: {
          create: [
            { titulo: 'A célula animal e vegetal', url: 'https://www.youtube.com/watch?v=bio1', tipo: 'video' },
            { titulo: 'Organelas celulares', url: 'https://www.biologia.com.br/citologia', tipo: 'artigo' }
          ]
        }
      }
    }),
    prisma.roadmapItem.create({
      data: {
        titulo: 'Genética',
        nivel: 2,
        descricao: 'Estudo da hereditariedade',
        materiaId: biologia.id,
        recursos: {
          create: [
            { titulo: 'Leis de Mendel', url: 'https://www.youtube.com/watch?v=bio2', tipo: 'video' },
            { titulo: 'Problemas de genética', url: 'https://www.biologia.com.br/genetica', tipo: 'exercicios' }
          ]
        }
      }
    })
  ]);

  const [citologia, genetica] = roadmapBiologia;
  
  console.log('Criando aulas de Biologia...');
  await Promise.all([
    prisma.aula.create({
      data: {
        titulo: 'Estrutura Celular',
        data: new Date('2025-02-15'),
        descricao: 'Componentes e organização das células',
        materiaId: biologia.id,
        professorId: profBio1.id,
        roadmapId: citologia.id
      }
    }),
    prisma.aula.create({
      data: {
        titulo: 'Primeira Lei de Mendel',
        data: new Date('2025-02-22'),
        descricao: 'Lei da segregação dos fatores',
        materiaId: biologia.id,
        professorId: profBio1.id,
        roadmapId: genetica.id
      }
    })
  ]);

  // CRIAÇÃO DE ROADMAPS E AULAS PARA GEOGRAFIA
  console.log('Criando roadmap de Geografia...');
  const roadmapGeografia = await Promise.all([
    prisma.roadmapItem.create({
      data: {
        titulo: 'Cartografia',
        nivel: 1,
        descricao: 'Estudo de mapas e representações',
        materiaId: geografia.id,
        recursos: {
          create: [
            { titulo: 'Tipos de mapas', url: 'https://www.youtube.com/watch?v=geo1', tipo: 'video' },
            { titulo: 'Escalas cartográficas', url: 'https://www.geografia.com.br/cartografia', tipo: 'artigo' }
          ]
        }
      }
    }),
    prisma.roadmapItem.create({
      data: {
        titulo: 'Geografia Política',
        nivel: 2,
        descricao: 'Organização política do espaço mundial',
        materiaId: geografia.id,
        recursos: {
          create: [
            { titulo: 'Geopolítica mundial', url: 'https://www.youtube.com/watch?v=geo2', tipo: 'video' },
            { titulo: 'Conflitos territoriais', url: 'https://www.geografia.com.br/politica', tipo: 'artigo' }
          ]
        }
      }
    })
  ]);

  const [cartografia, geopolitica] = roadmapGeografia;
  
  console.log('Criando aulas de Geografia...');
  await Promise.all([
    prisma.aula.create({
      data: {
        titulo: 'Coordenadas Geográficas',
        data: new Date('2025-02-16'),
        descricao: 'Latitude, longitude e sistemas de localização',
        materiaId: geografia.id,
        professorId: profGeo1.id,
        roadmapId: cartografia.id
      }
    }),
    prisma.aula.create({
      data: {
        titulo: 'Blocos Econômicos',
        data: new Date('2025-02-23'),
        descricao: 'Principais blocos e suas relações comerciais',
        materiaId: geografia.id,
        professorId: profGeo1.id,
        roadmapId: geopolitica.id
      }
    })
  ]);

  // Adicionar algumas avaliações de aulas
  console.log('Criando avaliações...');
  const avaliacoes = [];
  
  // Para cada aula, criar algumas avaliações de alunos aleatórios
  for (const aula of [...aulasMat, ...aulasHist]) {
    // Selecionar aleatoriamente 3-5 alunos para avaliar cada aula
    const numAvaliacoes = Math.floor(Math.random() * 3) + 3; // 3 a 5 avaliações
    const alunosAleatorios = [...alunos].sort(() => 0.5 - Math.random()).slice(0, numAvaliacoes);
    
    // Código correto
    for (const aluno of alunosAleatorios) {
      avaliacoes.push({
        nota: Math.floor(Math.random() * 5) + 6, // Notas de 6 a 10
        aulaId: aula.id,
        alunoId: aluno.id
      });
    }
  }
  
  await Promise.all(avaliacoes.map(avaliacao => 
    prisma.avaliacao.create({ data: avaliacao })
  ));

  // Adicionar após as avaliações existentes

  // Criar avaliações para outras matérias também
  console.log('Adicionando avaliações para aulas de Português, Física, Biologia e Geografia...');
  const todasOutrasAulas = [
    // Todas as aulas que não são de matemática ou história
    ...await prisma.aula.findMany({
      where: {
        NOT: {
          OR: [
            { materiaId: matematica.id },
            { materiaId: historia.id }
          ]
        }
      }
    })
  ];

  for (const aula of todasOutrasAulas) {
    // Selecionar 2-4 alunos para avaliar cada aula
    const numAvaliacoes = Math.floor(Math.random() * 3) + 2; // 2 a 4 avaliações
    const alunosAleatorios = [...alunos].sort(() => 0.5 - Math.random()).slice(0, numAvaliacoes);
    
    for (const aluno of alunosAleatorios) {
      await prisma.avaliacao.create({
        data: {
          nota: Math.floor(Math.random() * 5) + 6, // Notas de 6 a 10
          aulaId: aula.id,
          alunoId: aluno.id
        }
      });
    }
  }

  console.log('Dados iniciais inseridos com sucesso!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });