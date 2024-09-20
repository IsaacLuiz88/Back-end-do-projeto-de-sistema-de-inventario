-- DropIndex
DROP INDEX `Produtos_categoriaId_fkey` ON `produtos`;

-- AddForeignKey
ALTER TABLE `Produtos` ADD CONSTRAINT `Produtos_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `Categorias`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
