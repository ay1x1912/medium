-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMPTZ(6);

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMPTZ(6);