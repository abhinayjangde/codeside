# CODESIDE

## Frontend Contribution Guide

1. Go to **/apps/web** directory.
2. Create **.env** file similar to **.env.example** and replace with your credentials

3. Install Dependencies
```bash
pnpm install
```
4. Start Dev 
```bash
pnpm run dev
```
---
NOTE:- Make sure you have PostgreSQL Database running.

## UI Parameters

1. Here are the **theme** and **color** which used in this project.

```bash
dark: "#262626" # page bg
editor: "hsl(0deg 0% 14.9%)" #code editor bg
slate: "hsl(0deg 0% 20%)" #editor top bar
```
---
## Local Development Setup

NOTE: Do not update any of the ENV files for this particular configuration. ( Except the mount path for problems )
1. Update the ``##YOUR_LOCAL_PATH_TO_PROBLEMS_DIR##`` in the docker-compose file
2. Start the services
```bash
docker-compose up -d
```
3. Install dependencies
```bash
pnpm install
```
4. Copy env files
```bash
cp apps/web/.env.example apps/web/.env
cp packages/db/.env.example packages/db/.env
```
5. Update the mount path in the ``apps/web/.env``
6. Migrate Database and install local package
```bash
pnpm dlx turbo db:migrate && pnpm install
```
7. Start Dev
```bash
pnpm dev
```
---
> Pull requests are always welcome😘
