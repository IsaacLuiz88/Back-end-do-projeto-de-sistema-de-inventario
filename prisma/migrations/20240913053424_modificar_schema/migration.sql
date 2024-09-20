/*
  Warnings:

  - Added the required column `produtos` to the `Fornecedores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `fornecedores` ADD COLUMN `produtos` VARCHAR(191) NOT NULL;
