# NextJS minimalist starter

Minimalist starter template for NextJS app with TypeScript and emotion.

⚠️ To use typed theme from emotion, import styled from `./theme/index.tsx` instead of `@emotion/styled` as seen [here](https://emotion.sh/docs/typescript#define-a-theme)

## What's in the box

- [NextJS 9.4](https://nextjs.org/blog/next-9-4)
- TypeScript
- [emotion](https://github.com/emotion-js/emotion) with global styles and theme
- PWA ready with `next-offline`
- AppHead component to handle `<head>` config
- [husky](https://github.com/typicode/husky) with pre-commit running [prettier](https://github.com/prettier/prettier) and tsc
- `.prettierrc` ready to be overwritten

## How to

1. Clone this repo / use as template
2. `npm i`
3. Follow the todo section

## Todo

- update \_document.tsx with own favicons and meta description
- update manifest.json with own params
- update `./public/assets/favicons` with own favicons
