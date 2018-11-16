# Create React App <3 TypeScript

## TypeScript support has [landed](https://github.com/facebook/create-react-app/pull/4837#discussion-diff-209813518R919) in CRAv2
This repo is a throwaway experiment to check out Babel-based TypeScript support, as made available in CRAv2.

## How do I use it?
Add a file with .tsx at the end and import it just like any other component.

### Hot
 - Both TS and JS files can live in the same project. Take as much TS or as little as you like.
 - It's cool that the CRA team is 'officially' supporting this, especially with previous attempts suffering from [neglect](https://github.com/Microsoft/TypeScript-React-Starter/issues/168#issuecomment-406774564) and confusion around [stewardship](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html).
 - Local dev env startup seems a lot faster. I suppose it's either Babel 7.1, or Webpack v4, or both. Noticeable speed up.

### Not
 - TSLint/ESLint support is not included [by default](https://github.com/facebook/create-react-app/pull/4837#discussion_r222292618)
 - `yarn start` aka webpack seems to require a restart when you rename files from '.js' to '.tsx' or vice versa
 - Cosmetic/minor (observed in VSCode): there are a few cases where red squiggle highlighting seems spurious.
   - CSS Module import syntax as documented [here](https://github.com/facebook/create-react-app/pull/2285)
   - General syntax highlighting seems to depend on ending your filename in `.tsx` -- I noticed `.ts` doesn't cut it. Please note that this is cosmetic only -- Webpack will happily compile .tsx and .ts.

### What's with the repo name?
The name Odin is derived from the Norse/Germanic god [Wotan](https://en.wikipedia.org/wiki/Wotan_(disambiguation)). Thought it sounded cool.
