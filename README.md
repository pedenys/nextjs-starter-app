# Next.js minimalist starter

Minimalist starter template for `Next.js` with `TypeScript` and `emotion` that just works.

## How to

1. Use repo as template
2. `npm i`
3. Follow the todo section

## Todo

- rename `.env.example` in `.env` and update values
- update `manifest.json` with own params
- update `./public/icons/favicons` with own favicons

## What's in the box

- [NextJS 9.5](https://nextjs.org/blog/next-9-5)
- TypeScript
- [emotion](https://github.com/emotion-js/emotion) with global styles and theme
- PWA ready with `next-offline`
- AppHead component to handle `<head>` config
- [husky](https://github.com/typicode/husky) with pre-commit running [prettier](https://github.com/prettier/prettier) and tsc
- `.prettierrc` ready to be overwritten

## Typed emotion theme

To use typed theme from emotion, overide `@emotion/styled`'s `styled` as explained [here](https://emotion.sh/docs/typescript#define-a-theme)
