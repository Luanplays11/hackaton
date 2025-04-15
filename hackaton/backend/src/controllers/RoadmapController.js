const prisma = require('../lib/prisma');

class RoadmapController {
  async index(req, res) {
    try {
      const roadmapItems = await prisma.roadmapItem.findMany({
        include: {
          materia: true,
          recursos: true,
          prerequisitosDe: {
            include: {
              prerequisito: true
            }
          }
        }
      });
      
      return res.json(roadmapItems);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async show(req, res) {
    const { id } = req.params;
    
    try {
      const roadmapItem = await prisma.roadmapItem.findUnique({
        where: { id: Number(id) },
        include: {
          materia: true,
          recursos: true,
          prerequisitosDe: {
            include: {
              prerequisito: true
            }
          }
        }
      });
      
      if (!roadmapItem) {
        return res.status(404).json({ error: 'Item de roadmap não encontrado' });
      }
      
      return res.json(roadmapItem);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async store(req, res) {
    const { titulo, nivel, descricao, materiaId, recursos, prerequisitos } = req.body;
    
    try {
      const roadmapItem = await prisma.roadmapItem.create({
        data: {
          titulo,
          nivel: Number(nivel),
          descricao,
          materia: { connect: { id: Number(materiaId) } },
          recursos: {
            create: recursos.map(recurso => ({
              titulo: recurso.titulo,
              url: recurso.url,
              tipo: recurso.tipo
            }))
          }
        },
        include: {
          recursos: true
        }
      });
      
      // Adicionar pré-requisitos se existirem
      if (prerequisitos && prerequisitos.length > 0) {
        await Promise.all(prerequisitos.map(prerequisitoId => 
          prisma.prerequisito.create({
            data: {
              item: { connect: { id: roadmapItem.id } },
              prerequisito: { connect: { id: Number(prerequisitoId) } }
            }
          })
        ));
      }
      
      return res.status(201).json(roadmapItem);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getByMateria(req, res) {
    const { materiaId } = req.params;
    
    try {
      const roadmapItems = await prisma.roadmapItem.findMany({
        where: { 
          materiaId: Number(materiaId) 
        },
        include: {
          materia: true,
          recursos: true,
          prerequisitosDe: {
            include: {
              prerequisito: true
            }
          },
          prerequisitosPara: {
            include: {
              item: true
            }
          }
        },
        orderBy: {
          nivel: 'asc'
        }
      });
      
      return res.json(roadmapItems);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new RoadmapController();