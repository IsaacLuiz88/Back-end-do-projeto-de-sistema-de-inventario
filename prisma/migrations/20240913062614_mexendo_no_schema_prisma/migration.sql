/*
  Warnings:

  - Added the required column `nomeProduto` to the `HistoricoProduto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `historicoproduto` ADD COLUMN `nomeProduto` VARCHAR(191) NOT NULL;
