If you want to build on your own then follow these below steps. If you want to use this project only see below.

Create a empty directory `banking-system`.

Run `cd banking-system`, run below commands on terminal. Make sure you are inside `banking-system` directory.

`npm init -y`

`npm install typescript @types/node --save-dev`
`npm i uuid`

`npx tsc --init` -> this will create a `tsconfig.json` file

Changes to be made in `tsconfig.json`
`"outDir": "./dist"`
`"target": "es6"`

Change script property in `package.json`

```json
"scripts": {
    "start": "node dist/index.js",
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
}
```

Build using `npx tsc` or `npm run build`

Run using `npm start`

<hr/>

Run directly this project.

Run `npm install`

Build using `npm run build`

Run using `npm start`
