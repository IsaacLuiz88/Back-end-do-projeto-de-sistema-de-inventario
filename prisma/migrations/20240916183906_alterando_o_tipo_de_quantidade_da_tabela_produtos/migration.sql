/*
  Warnings:

  - You are about to alter the column `quantidade` on the `produtos` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `produtos` MODIFY `quantidade` DOUBLE NOT NULL;
