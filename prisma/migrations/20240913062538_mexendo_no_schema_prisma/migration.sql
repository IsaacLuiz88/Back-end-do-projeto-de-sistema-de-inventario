/*
  Warnings:

  - Added the required column `nomeDoProduto` to the `Vendas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `vendas` ADD COLUMN `nomeDoProduto` VARCHAR(191) NOT NULL;
