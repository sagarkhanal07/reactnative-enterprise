# 🚧 Work In Progress

This project is highly inspired by [next-enterprise](https://github.com/Blazity/next-enterprise). But for Expo/React-Native.

## 📚 Features (TODO)

- [x] Expo - Built with Expo for cross-platform support
- [x] 🎯 Absolute imports - For better imports and code organization
- [x] 📝 Conventional commits git hook - For enforcing conventional commits
- [x] 🤖 Renovate BOT - For keeping dependencies up to date
- [x] 🛠️ Improved TypeScript - With ts-reset library for ultimate type safety
- [x] 🩹 Patch-package - For patching dependencies
- [x] 💻 T3 Env - For environment variables management
- [x] 📊 Bundle analyzer plugin - For analyzing bundle size
- [ ] 🧪 Jest and React Testing Library - For testing components and features
- [x] 📕 Storybook - For isolating and testing UI components
- [x] 📈 Components coupling and cohesion graph - For analyzing components relations
- [x] 🤖🧠 Automated ChatGPT Code Reviews - For improving code quality and AI assistance code reviews
- [ ] 🚢 Semantic Release - For automated versioning and CHANGELOG generation
- [x] 🗄️ Auto Sort Imports - Automatic organizing of imports on file saves.

## 🚦 Roadmap (Updated as implemented)

### Expo

Project Initiated with

```sh
npx create-expo-app --template
```

### Absolute Imports

Clean code and code writing easier.
Preconfigured by default.

### Conventional Commits

Configured with [commitlint](https://github.com/conventional-changelog/commitlint) to automatically validate commit messages following the [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.

### TS-Reset | Extremely Strict Typescript

TypeScript's default type declarations may have imperfections, but [ts-reset](https://github.com/total-typescript/ts-reset) enhances them.

### Automated ChatGPT Code Reviews

Configured with [chatgpt-codereview](https://github.com/anc95/ChatGPT-CodeReview) action workflow.

### Patch Package

Configured with [patch-package](https://github.com/ds300/patch-package) to patch dependencies as needed.
For eg: `npx patch-package package-name`

### Bundle Analyzer

Configured with [react-native-bundle-analyzer](https://github.com/IjzerenHein/react-native-bundle-visualizer)</br>
Run `npm run analzye:bundle` which generates bundle map and show you what's inside of your react-native bundle

### Coupling Graph

Configured with [skott](https://github.com/antoine-coulon/skott)</br>
Run `npm run coupling-graph` to get graph of your components and how they are coupled. This helps identify components that are too tightly coupled and should be refactored.

### Auto Sort Imports

Automatically organize imports on file saves. Be sure to enable on your user settings for better experience.

```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
```

### Renovate Bot

Configured with [renovate-bot](https://github.com/renovatebot/renovate) to keep dependencies up to date.

### T3 Env

Configured with [t3-oss/env-core](https://github.com/t3-oss/t3-env).
Typesafe environment variables management integrated along with [zod](https://github.com/colinhacks/zod).

### Storybook

Configured with [storybook-react-native](https://github.com/storybookjs/react-native) to isolate and test UI components. Configured with global decorators and easy to write storybook under each components.
