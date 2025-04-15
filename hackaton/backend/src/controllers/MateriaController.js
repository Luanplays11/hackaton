const { PrismaClient } = require('@prisma/client');
const prisma = require('../lib/prisma');

class MateriaController {
  async index(req, res) {
    try {
      const materias = await prisma.materia.findMany();
      return res.json(materias);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async show(req, res) {
    const { id } = req.params;
    try {
      const materia = await prisma.materia.findUnique({
        where: { id: Number(id) },
      });
      
      if (!materia) {
        return res.status(404).json({ error: 'Materia não encontrada' });
      }
      
      return res.json(materia);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async store(req, res) {
    const { nome, descricao } = req.body;
    
    try {
      const materia = await prisma.materia.create({
        data: { nome, descricao },
      });
      
      return res.status(201).json(materia);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new MateriaController();