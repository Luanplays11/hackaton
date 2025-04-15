const { PrismaClient } = require('@prisma/client');
const prisma = require('../lib/prisma');

class AulaController {
  async index(req, res) {
    try {
      const aulas = await prisma.aula.findMany({
        include: {
          materia: true,
          professor: true,
          roadmap: true
        }
      });
      return res.json(aulas);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async store(req, res) {
    const { titulo, data, descricao, materiaId, professorId, roadmapId } = req.body;
    
    try {
      const aula = await prisma.aula.create({
        data: {
          titulo,
          data: new Date(data),
          descricao,
          materia: { connect: { id: Number(materiaId) } },
          professor: { connect: { id: Number(professorId) } },
          ...(roadmapId && { roadmap: { connect: { id: Number(roadmapId) } } })
        }
      });
      
      return res.status(201).json(aula);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async avaliar(req, res) {
    const { id } = req.params;
    const { nota, alunoId } = req.body;
    
    try {
      const avaliacao = await prisma.avaliacao.upsert({
        where: {
          aulaId_alunoId: {
            aulaId: Number(id),
            alunoId: Number(alunoId)
          }
        },
        update: { nota: Number(nota) },
        create: {
          nota: Number(nota),
          aula: { connect: { id: Number(id) } },
          aluno: { connect: { id: Number(alunoId) } }
        }
      });
      
      return res.json(avaliacao);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getByMateria(req, res) {
    const { materiaId } = req.params;
    
    try {
      const aulas = await prisma.aula.findMany({
        where: { materiaId: Number(materiaId) },
        include: {
          materia: true,
          professor: true,
          roadmap: true,
          avaliacoes: true // Isto estava faltando
        }
      });
      return res.json(aulas);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new AulaController();