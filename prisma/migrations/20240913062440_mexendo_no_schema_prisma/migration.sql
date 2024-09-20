/*
  Warnings:

  - You are about to drop the column `produtoId` on the `historicoproduto` table. All the data in the column will be lost.
  - You are about to drop the column `produtoId` on the `vendas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `historicoproduto` DROP COLUMN `produtoId`;

-- AlterTable
ALTER TABLE `vendas` DROP COLUMN `produtoId`;
