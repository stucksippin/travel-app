-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tours" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "nutrition" BOOLEAN NOT NULL,
    "guide" BOOLEAN NOT NULL,
    "image" TEXT
);
INSERT INTO "new_tours" ("city", "data", "guide", "id", "image", "name", "nutrition", "price", "type") SELECT "city", "data", "guide", "id", "image", "name", "nutrition", "price", "type" FROM "tours";
DROP TABLE "tours";
ALTER TABLE "new_tours" RENAME TO "tours";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
