﻿# e-commerce-website-app-ass3

# Package Install Process below....

PS C:\Projects2\e-commerce-website-app-ass3> npm init -y
Wrote to C:\Projects2\e-commerce-website-app-ass3\package.json:

{
"name": "e-commerce-website-app-ass3",
"description": "",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"keywords": [],
"author": "",
}

PS C:\Projects2\e-commerce-website-app-ass3> npm install express --no-save

added 64 packages, and audited 65 packages in 18s

run `npm fund` for details

found 0 vulnerabilities

Link: https://mongoosejs.com/docs/
PS C:\Projects2\e-commerce-website-app-ass3> npm install mongoose --save

added 20 packages, removed 64 packages, and audited 21 packages in 25s

run `npm fund` for details

found 0 vulnerabilities
PS C:\Projects2\e-commerce-website-app-ass3> npm install typescript --save-dev

> > up to date, audited 26 packages in 2s

2 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities

PS C:\Projects2\e-commerce-website-app-ass3> npm i dotenv

added 1 package, and audited 26 packages in 7s

2 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities

PS C:\Projects2\e-commerce-website-app-ass3> npx tsc --init

Created a new tsconfig.json with:
TS
target: es2016
module: commonjs
strict: true
esModuleInterop: true
skipLibCheck: true
forceConsistentCasingInFileNames: true

You can learn more at https://aka.ms/tsconfig

PS C:\Projects2\e-commerce-website-app-ass3> npm run build

install- to remove error require:

npm i --save-dev @types/node
npm i --save-dev @types/express
npm i --save-dev @types/cors

npm install mongodb

# Eslint and ptter setup

Going this blog to setup
link: https://blog.logrocket.com/linting-typescript-eslint-prettier/

put this into tsconfig.json file---
"include": ["src"], // which files to compile
"exclude": ["node_modules"], // which files to skip

intall:
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev

install:
npx eslint --init
stp1: to check syntex and find problem
stp2: JavaScript modules (import/export)
stp3: None of these
stp4: Does your project use TypeScript? ...

> Yes
> stp5: Where does your code run?
> √ Node
> Would you like to install them now? » / Yes
> Which package manager do you want to use? ...
> npm
> done...
> copy past in eslintignore file--

node_modules
dist

// package.json past below code into there
{
// ...
"scripts": {
"lint": "eslint --ignore-path .eslintignore --ext .js,.ts"
},
// ...
}

install:

npm install --save-dev prettier

npx prettier --write src/app.ts

install:
npm install --save-dev eslint-config-prettier

go--
https://www.npmjs.com/package/ts-node-devhttps://www.npmjs.com/package/ts-node-dev

https://github.com/wclr/ts-node-dev#readme

install:
npm i ts-node-dev --save-dev

install:
ts-node-dev --respawn --transpile-only server.ts

---



