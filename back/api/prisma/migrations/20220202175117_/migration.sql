-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "on" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "text" JSONB NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);
