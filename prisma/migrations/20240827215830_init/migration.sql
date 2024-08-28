-- CreateTable
CREATE TABLE "Posts" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "views" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersLikes" (
    "id" TEXT NOT NULL,
    "ip" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UsersLikes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Posts_slug_key" ON "Posts"("slug");
