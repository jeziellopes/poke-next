# Poke-Next

Poke-Next is a __Next.js__ app to list and view __pokémon's__ information.

This project uses __ESLint, Prettier, Jest, React Testing Library, TypeScript, Husky__.

## Setup Docker Environment
```bash
# One time run
docker-compose up -d --build

# Force containers recreation on every run with orphans cleanup
docker-compose up -d --build --force-recreate --remove-orphans

# App will run on http://localhost:3000
```
## Setup Prisma Environment

```bash
# Generate Prisma Client 
yarn prisma generate

# Migrate Prism Database 
yarn prisma migrate dev --name init

# Reset Prisma Migrations
yarn prisma migrate reset
```

## Run Jest Tests

```bash
# install dependencies
yarn

# run tests once
yarn test

# run tests coverage
yarn test:coverage
```

## Run Locally (if needed)

```bash
# install dependencies
yarn

# run in development
yarn dev
```
