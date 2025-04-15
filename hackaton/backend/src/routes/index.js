const { Router } = require('express');
const MateriaController = require('../controllers/MateriaController');
const AulaController = require('../controllers/AulaController');
const RoadmapController = require('../controllers/RoadmapController');
const AuthController = require('../controllers/logincontroller');

const routes = Router();

// Rotas de autenticação
routes.post('/login', AuthController.login);
routes.post('/registro/aluno', AuthController.registrarAluno);
routes.post('/registro/professor', AuthController.registrarProfessor);

// Rotas de matérias
routes.get('/materias', MateriaController.index);
routes.get('/materias/:id', MateriaController.show);
routes.post('/materias', MateriaController.store);

// Rotas de aulas
routes.get('/aulas', AulaController.index);
routes.post('/aulas', AulaController.store);
routes.post('/aulas/:id/avaliar', AulaController.avaliar);
routes.get('/aulas/materia/:materiaId', AulaController.getByMateria);

// Rotas de roadmap
routes.get('/roadmap', RoadmapController.index);
routes.get('/roadmap/:id', RoadmapController.show);
routes.post('/roadmap', RoadmapController.store);
routes.get('/roadmap/materia/:materiaId', RoadmapController.getByMateria);

module.exports = routes;