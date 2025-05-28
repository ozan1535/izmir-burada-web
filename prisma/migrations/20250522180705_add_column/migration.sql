/*
  Warnings:

  - Added the required column `isBlogPage` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isBlogPage` to the `BlogCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "isBlogPage" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "BlogCategory" ADD COLUMN     "isBlogPage" BOOLEAN NOT NULL;
