# CODESIDE

## Local Development Setup

NOTE: Do not update any of the ENV files for this particular configuration. ( Except the mount path for problems )

1. Update the ``##YOUR_LOCAL_PATH_TO_PROBLEMS_DIR##`` in the `.env` file which is resides in same level of your `docker-compose.yml` file

2. Copy env files
```bash
cp .env.example .env
cp apps/web/.env.example apps/web/.env
cp packages/db/.env.example packages/db/.env
cp apps/boilerplate-generator/.env.example apps/boilerplate-generator/.env
```

2. Start the services
```bash
docker-compose up -d
```
3. Install dependencies
```bash
pnpm install
```
5. Update the mount path in the ``apps/web/.env``
6. Migrate Database and install local package
```bash
pnpm run db:migrate
```
7. Start Dev
```bash
pnpm dev
```

## UI Parameters

1. Here are the **theme** and **color** which used in this project.

```bash
dark: "#262626" # page bg
editor: "hsl(0deg 0% 14.9%)" #code editor bg
slate: "hsl(0deg 0% 20%)" #editor top bar
```
## How to Generate Boilerplate code

First add some problems and then you can run this command.

```bash
cd /apps/boilerplate-generator
pnpm run build
pnpm run boiler:generate
```

Now to we have to add that problem into database for that

```bash
cd /packages/db
pnpm run db:seed
```


## Contributors

Thanks to these wonderful people for contributing to the project:

- [Ankitkumar341](https://github.com/Ankitkumar341)
- [bhavani1024](https://github.com/bhavani1024)

Feel free to contribute by submitting a pull request.
