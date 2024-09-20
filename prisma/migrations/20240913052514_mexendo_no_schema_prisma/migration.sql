/*
  Warnings:

  - You are about to drop the column `categoriaId` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `fornecedorId` on the `produtos` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `HistoricoProduto_produtoId_fkey` ON `historicoproduto`;

-- DropIndex
DROP INDEX `Produtos_categoriaId_fkey` ON `produtos`;

-- DropIndex
DROP INDEX `Vendas_produtoId_fkey` ON `vendas`;

-- AlterTable
ALTER TABLE `produtos` DROP COLUMN `categoriaId`,
    DROP COLUMN `fornecedorId`;
