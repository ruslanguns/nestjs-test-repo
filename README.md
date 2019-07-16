# BUG: Library on NestJS

## Introduction

This is a started project of nestjs with a library created from schematics. 
The issue occurs when you are trying to start the project with `yarn start:dev` it creates a dist folder with libs and src separated and that is why that command does not work.



Was created with the following commands:
* `➜ nest new my-nest-app`
* `➜ nest g lib utils`

## Environment:
```bash
➜ nest --version
6.6.0
```

## Installation
```bash
➜ https://github.com/ruslanguns/nestjs-test-repo.git
...
➜ cd nestjs-test-repo
➜ npm install
➜ yarn start:dev // or npm run start:dev
```

## Notes:
Please note that if you run `yarn start` it will work but it's because you are running the src/main.ts and not the built dist.

