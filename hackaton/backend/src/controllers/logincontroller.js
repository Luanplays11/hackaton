const prisma = require('../lib/prisma');

class AuthController {
  // Login simplificado para alunos e professores
  async login(req, res) {
    const { email, senha } = req.body;

    try {
      // Verificar se é um aluno
      const aluno = await prisma.aluno.findUnique({ where: { email } });

      if (aluno) {
        // Verificação simples de senha sem criptografia
        if (senha === aluno.senha) {
          return res.json({ 
            nome: aluno.nome, 
            email: aluno.email, 
            tipo: 'aluno' 
          });
        }
      }

      // Verificar se é um professor
      const professor = await prisma.professor.findUnique({ where: { email } });

      if (professor) {
        // Verificação simples de senha sem criptografia
        if (senha === professor.senha) {
          return res.json({ 
            nome: professor.nome, 
            email: professor.email, 
            tipo: 'professor' 
          });
        }
      }

      // Se chegou aqui, é porque o login falhou
      return res.status(401).json({ error: 'Credenciais inválidas' });
    } catch (error) {
      console.error('Erro no login:', error);
      return res.status(500).json({ error: 'Erro no servidor' });
    }
  }

  // Registro simplificado de aluno
  async registrarAluno(req, res) {
    const { nome, email, senha } = req.body;

    try {
      // Verificar se já existe um usuário com este email
      const usuarioExistente = await prisma.$queryRaw`
        SELECT 'aluno' as tipo FROM Aluno WHERE email = ${email}
        UNION
        SELECT 'professor' as tipo FROM Professor WHERE email = ${email}
      `;

      if (usuarioExistente.length > 0) {
        return res.status(400).json({ error: 'Este email já está em uso' });
      }

      // Criar o aluno com senha em texto simples
      const aluno = await prisma.aluno.create({
        data: {
          nome,
          email,
          senha // Senha em texto simples
        }
      });

      return res.status(201).json({ 
        nome: aluno.nome, 
        email: aluno.email, 
        tipo: 'aluno' 
      });
    } catch (error) {
      console.error('Erro no registro de aluno:', error);
      return res.status(500).json({ error: 'Erro no servidor' });
    }
  }

  // Registro simplificado de professor
  async registrarProfessor(req, res) {
    const { nome, email, senha, materiaId } = req.body;

    try {
      // Verificar se já existe um usuário com este email
      const usuarioExistente = await prisma.$queryRaw`
        SELECT 'aluno' as tipo FROM Aluno WHERE email = ${email}
        UNION
        SELECT 'professor' as tipo FROM Professor WHERE email = ${email}
      `;

      if (usuarioExistente.length > 0) {
        return res.status(400).json({ error: 'Este email já está em uso' });
      }

      // Verificar se a matéria existe
      if (materiaId) {
        const materia = await prisma.materia.findUnique({ where: { id: Number(materiaId) } });
        if (!materia) {
          return res.status(400).json({ error: 'Matéria não encontrada' });
        }
      }

      // Criar o professor com senha em texto simples
      const professor = await prisma.professor.create({
        data: {
          nome,
          email,
          senha, // Senha em texto simples
          materiaId: materiaId ? Number(materiaId) : null
        }
      });

      return res.status(201).json({ 
        nome: professor.nome, 
        email: professor.email,
        tipo: 'professor' 
      });
    } catch (error) {
      console.error('Erro no registro de professor:', error);
      return res.status(500).json({ error: 'Erro no servidor' });
    }
  }
}

module.exports = new AuthController();