-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "on" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "private" BOOLEAN NOT NULL DEFAULT true,
    "data" JSONB NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);
