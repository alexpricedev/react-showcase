# NextJS Showcase 💜

This repository contains a NextJS application that showcases an ever-evolving ideal way that to use 13.4+.

It uses the new app directory for routing, a modern component and util structure. It showcases how we should handle client-side submission and error handling using services, and also a server-side component-level data fetching example.

## Application Structure

The application uses an `app` directory for routing, with a corresponding component and util structure. This means that each route is defined in a `page.tsx` file inside the `app` directory alongside its component, utils and services files.

This style of application structure allows all related logic to be colocated. Inside the `app` directory we use an underscore to prefix and supporting files (files that are not typical Next routing files like `error.tsx`).

Global components, utils, services and types are stored at the root of the project in the `src` directory.

### Files of interest

- [Error utils](https://github.com/remotealex/react-showcase/blob/main/utils/error.utils.ts) and a [simple example](https://github.com/remotealex/react-showcase/blob/main/services/random-number.service.ts)
- The [products page](https://github.com/remotealex/react-showcase/blob/main/app/products/_components/ProductsPageFeed/component.tsx) uses server component data fetching
- The [Home page](https://github.com/remotealex/react-showcase/blob/main/app/_components/HomePageFeed/component.tsx) shows a client-initiated sever action (fetch in this case but could be submit etc) with nice error handling

Note that the [/product](https://github.com/remotealex/react-showcase/blob/main/app/products/page.tsx#L10) page needs an awkward server-component work-around for now as `ProductsPageFeed` is an async export. This is documented [on the Next docs website](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#async-and-await-in-server-components).

### Patterns still to build

- [ ] Form submission and error handling
- [ ] Complex state management (using [Zustand](https://github.com/pmndrs/zustand))
- [ ] Authentication and authorisation
- [ ] SWR (and if we even need it)
- [ ] Testing
- [ ] Storybook

## Getting Started

Follow these steps to run the application in your local environment:

### Clone The Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/remotealex/react-showcase
cd react-showcase
```

### Install Dependencies

After cloning the repo, use npm to install the necessary dependencies:

```bash
npm install
```

### Running The Application

Once all dependencies are installed, you can run the application using:

```bash
npm run dev
```

Now, open your web browser and navigate to `http://localhost:3000` to see your application running.

Have a click around and press the buttons and refreshing the page to see the random errors and how they're handled.
