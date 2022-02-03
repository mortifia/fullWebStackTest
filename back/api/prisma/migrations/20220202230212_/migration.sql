/*
  Warnings:

  - You are about to drop the column `text` on the `Article` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Article" DROP COLUMN "text",
ADD COLUMN     "data" TEXT NOT NULL DEFAULT E'';
