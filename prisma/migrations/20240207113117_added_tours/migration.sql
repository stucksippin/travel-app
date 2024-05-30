-- CreateTable
CREATE TABLE "tours" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "nutrition" BOOLEAN NOT NULL,
    "guide" BOOLEAN NOT NULL
);
