# Steps

- docker compose up -d (only first time)
- pnpm prisma init (only first time)
- pnpm dlx prisma migrate dev --name init (only first time)
- pnpm run db:seed
- pnpm run db:migrate
- pnpm run db:generate