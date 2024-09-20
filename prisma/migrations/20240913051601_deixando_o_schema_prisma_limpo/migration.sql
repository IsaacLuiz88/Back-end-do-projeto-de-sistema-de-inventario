-- DropForeignKey
ALTER TABLE `historicoproduto` DROP FOREIGN KEY `HistoricoProduto_produtoId_fkey`;

-- DropForeignKey
ALTER TABLE `produtos` DROP FOREIGN KEY `Produtos_categoriaId_fkey`;

-- DropForeignKey
ALTER TABLE `vendas` DROP FOREIGN KEY `Vendas_produtoId_fkey`;

-- DropIndex
DROP INDEX `Produtos_fornecedorId_fkey` ON `produtos`;
