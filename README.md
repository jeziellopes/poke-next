# Poke-Next

Poke-Next is a __Next.js__ app to list and view __pokémon's__ information.

This project uses __TypeScript, Styled-Components, ESLint, Prettier, Husky, Jest, React Testing Library, Docker, PostgreSQL and Prisma ORM__.

|         Mobile Layout           |       Desktop Layout       |
:--------------------------------:|:---------------------------:
![Screen](./poke-next-mobile.gif) | ![Screen](./poke-next.gif) |
 
## Setup Docker Environment (production)
```bash
# One time run
docker-compose up -d --build

# Force containers recreation on every run with orphans cleanup
docker-compose up -d --build --force-recreate --remove-orphans

# App will run on http://localhost:3000
```
## Setup Prisma Environment (development)

```bash
# Generate Prisma Client 
yarn prisma generate

# Migrate Prisma Database 
yarn prisma migrate dev --name init

# Reset Prisma Migrations
yarn prisma migrate reset
```

## Run Tests (development)

```bash
# install dependencies
yarn

# run tests once
yarn test

# run tests coverage
yarn test:coverage
```

## Run App Locally (development)

```bash
# start db container
docker-compose up -d --build postgres

# install dependencies
yarn

# run in development
yarn dev
```
