## Problem statement boilerplate generator

1. docker build -t antlr4-typescript .
2. docker run --rm -v $(pwd)/src/outputs:/usr/src/app antlr4-typescript
3. npm run build
4. GENERATOR_FILE_PATH=../../problems/addition node dist/index.js


## How to generate the boilerplate code for a problem statement

```
pnpm run build
pnpm run boiler:generate
```