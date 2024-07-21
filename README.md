# aspire-card-buddy

This is Aspire challenge

## Demo link

```sh
https://aspire-card-buddy.vercel.app/
```

## Project structure

All codes is in /src folder:
  - /assets - contains resources likes images (eg: svg)
  - /components - all components here
    - /icons - component to display image, come in handy when you need to style for image
  - /helpers - all helper utils here
  - /interfaces - all types, interfaces here
  - /router - router stuffs
  - /stores - pinia store
  - /styles - css styles for Project and from Quasar
  - /views - main components
  - /tests - contains all UTs 
   - /factory - utils
   - /mocks - all data that need to mock
   - /specs - all UTs here

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
