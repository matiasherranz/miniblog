# Next.js MiniBlog (using reddit as source!)

## Tech stach used

### NodeJS

The node version used id 12 (12.9.1 to be precise). To set it, I use `nvm` like this:

```bash
$ nvm use 12.9.1
```

You can take a look [here](https://github.com/nvm-sh/nvm) to learn more about `nvm`, including setup intruction and full documentation.

One required config to make sure Typescript plays along well with our particular NodeJS version is documented [here](https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping) and implemented on the project [here](https://github.com/matiasherranz/miniblog/blob/master/tsconfig.json#L3).

### NextJS

The frontend and SSR I chose for the project is [NextJS](https://nextjs.org/).

The main reasons being:

- Very active project: 6160 commits | 825 releases | 1103 contributors as of June/2020,
- Supported by Vercel (formerly Zeit) + 8 main developers (including people from Vercel and also a Mozilla Core Developer) + a very large community,
- Official (and officially maintained) examples for right about stack any setup: official examples,
- Easy to extend configurations for NodeJS, Babel, Webpack, etc. without ejecting,
- Out of the box support for server side rendering (SSR),
- Excellent support for server-side state hydration, consuming (rest or graphql) APIs,
- Out of the box support for amp pages,
- Easy severless deployments,
- Excellent integration with Apollo,
- Excellent performance benchmarks ([reference](https://blog.logrocket.com/next-js-vs-create-react-app))
- And last but not least: Awesome developer experience!

### Client State Management

As the store for the client-side state, I used [ReduxJS](https://redux.js.org/).

To interact with the Redux store, I used [Redux Toolkit](https://redux-toolkit.js.org/). The main reasons being:

- Developed and maintained by the same team behind Redux itself, as well as react-redux,
- Enables use of the Redux DevTools Extension,
- Integrated Reselect out of the box,
- It includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more,
- Provides good defaults for store setup out of the box, and includes the most commonly used Redux addons built-in,
- Avoiding boilerplate! it lets you focus on the core logic your app needs, so you can do more work with less code,
- And I haven't really used it before, but had to work with all sorts of redundant and vorbose boilerplate code around Redux store/reducers/actions/etc.

To persist and rehydrate the redux store between page reloads, I used [redux-persist](https://github.com/rt2zz/redux-persist). Haven't used it before, but seemed well maintained and documented, and found a lot of hits when Googling "redux persist state", so I decided to give it a try.

**Noteworthy options left outside:**

I took a look at the [SWR library](https://swr.now.sh/), officially supported (developed and maintained) by the nice folks behind NextJS, but it does not play naturally with Redux, so I left it out. Perhaps on the _next_ (pun intended!) project!

Other option left outside was [Apollo Client Cache](https://www.apollographql.com/docs/react/data/local-state/), which provided client-side persistence and a great overall set of features, but does not look like a good side-kick for Redux. More nice tools and tricks for the another project!

### Typescript

- Has a free IDE, that is created and maintained by the same company/people than the language itself (VS Code),
- In 2020, TS is more well-maintained and has more people working on it: In January 2020 TypeScript had 29 contributors, Flow had 14 contributors, and there were 156 pull requests merged compared to no Flow pull requests merged
- more third-party types are available (estimated to roughly 8X),
- more libraries are written in TypeScript (naturally improving the quality of the interface types compared to reverse engineering the types)
- installing types using npm / DefinitelyTyped makes a lot of sense compared to flow-typed where type definitions are checked into your repository (and you’ll most likely forget to update them).

### UI Layout and Styles

For this project, I decided to go with Material UI, that I've been meaning to try for a while.

It is one of the best looking UI frameworks I've seen, and provides great mobile support.
It also provides a great set of components and styles, palettes, and a rather extensive set of tools that integrate perfectly with ReactJS and Typescript.

Reference on material-ui I used:

- https://github.com/mui-org/material-ui/
- https://material-ui.com/

Theming and colors:

- https://material-ui.com/customization/palette/

An interesting thing I learned while working on this project is to automatically set the dark mode on the application's theme based on the user's preference on the browser. To accomplish this I used the `useMediaQuery` hook provided by MaterialUI library in conjunction with the `useMemo` hook from react.

- You can see the project's code for this [here](https://github.com/matiasherranz/miniblog/blob/master/pages/_app.tsx#L23)
- And the references on this feature [here](https://material-ui.com/customization/palette/#user-preference).

For the infinite scroll, I went with [react-infinite-scroller](https://www.npmjs.com/package/react-infinite-scroller), that I've used before and liked it, and it continues to be an active and well maintained project.

### Development environment setup and code style considerations

The main pieces of the code styling and standard-compliance setup I used are the following:

- Editor config: ([link](https://editorconfig.org/)) EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.
- .gitignore: I used a standard .gitignore file from the [GitHub gitignore project](https://github.com/github/gitignore/blob/master/Node.gitignore),
- prettier: ([link](https://prettier.io/)) A great code formatter that smothly integrates with both editors and commit/push hooks,
- eslint: ([link](https://eslint.org/)) ESLint statically analyzes your code to quickly find problems. Many problems ESLint finds can be automatically fixed. I set it up to work side-by-side with prettier.
- husky: ([here](https://github.com/typicode/husky)) Precommit and prepush hooks integrated with ESLint and prettier:

![husky in action](./husky.png)

## Development approach used

For this project I decided to try this idea: make a daily release to depict the progress I made each day on the project.

This way, the 1-day-long iterations can be seen here, listed making use of the **releases** feature from GitHub: https://github.com/matiasherranz/miniblog/releases

![daily releases](./daily-releases.png)

### Daily releases:

Click on the linkd to see the incremental changelogs and screenshots of how the app looked by the end of each day.

- [Day #1](https://github.com/matiasherranz/miniblog/releases/tag/day1)
- [Day #2](https://github.com/matiasherranz/miniblog/releases/tag/day2)
- [Day #3](https://github.com/matiasherranz/miniblog/releases/tag/day3)
- [Day #4](https://github.com/matiasherranz/miniblog/releases/tag/day4)

## Interacting with the project

### Run the project

Clone the repo:

```sh
git clone git@github.com:matiasherranz/miniblog.git
cd miniblog
```

Install the project dependencies it and run it!

```sh
npm install
npm run dev
```

Then go to [localhost:3000](localhost:3000) on your browser to see the project in action!

You can also see the project live [here](https://reddit-miniblog.vercel.app/).

### Run the project in production mode

Create a production build of the project:

```bash
npm run build
```

Then you can either run a production-like instance locally:

```bash
npm start
```

Or deploy it to a Vercel's Now server right from GitHub following [this steps](https://nextjs.org/docs/deployment).

### Running the tests

To run the tests, use the following command:

```bash
npm run jest
```

This will run all tests, which includes:

- **Snapshot tests:** Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly,
- **Unit tests**
- Coverage tests.

#### The tools/libraries used for testing were:

- **Jest** [link](https://jestjs.io/): Jest is the main JavaScript testing framework I used, as it provides a complete and simple to use set of tools, including snapshot testing, coverage testing and easy mocking.
- **Enzyme** [link](https://enzymejs.github.io/enzyme/): Alongside Jest, I used Enzyme for rendering components, query and interact with the virtual DOM. Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.
- **redux-mock-store:** [link](https://github.com/reduxjs/redux-mock-store) A mock store for testing Redux async action creators and middleware.
