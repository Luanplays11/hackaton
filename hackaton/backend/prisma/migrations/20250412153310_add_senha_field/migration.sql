-- AlterTable
ALTER TABLE "Aluno" ADD COLUMN "senha" TEXT;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Professor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT,
    "materiaId" INTEGER,
    CONSTRAINT "Professor_materiaId_fkey" FOREIGN KEY ("materiaId") REFERENCES "Materia" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Professor" ("email", "id", "nome") SELECT "email", "id", "nome" FROM "Professor";
DROP TABLE "Professor";
ALTER TABLE "new_Professor" RENAME TO "Professor";
CREATE UNIQUE INDEX "Professor_email_key" ON "Professor"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
