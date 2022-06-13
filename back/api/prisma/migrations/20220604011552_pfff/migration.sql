-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "on" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "private" BOOLEAN NOT NULL DEFAULT true,
    "title" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "print_nb" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);
