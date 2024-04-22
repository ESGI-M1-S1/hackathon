# hackathon

## Pre-requisites

Node.js 20.x

## Frontend

The Frontend is built with [Next.js](https://nextjs.org/), a React framework. It uses [Flowbite](https://flowbite.com/)
as the CSS framework.

### Setup

Go to the frontend directory and run the following commands:

```bash
cd frontend
```

```bash
npm i
npm dev
```

## Backend

The Backend is built with [Strapi](https://strapi.io/), a headless CMS. It uses SQLite as the database.

The default Strapi admin panel can be accessed at `http://localhost:1337/admin`.

The user credentials are:
```
Tim Cook
User: tim@cook.com
Password: Test1234@
```

### Setup

Go to the backend directory and run the following commands:

```bash
cd backend
```

```bash
npm i
npm develop
```


# Development

You can run the frontend and backend concurrently by running the following command in the root directory:

```bash
npm run dev
```


