const { PrismaClient } = require('@prisma/client');

// Inicialize o cliente uma única vez e exporte
const prisma = new PrismaClient();

module.exports = prisma;