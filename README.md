**KODA Reusable UI Package**

_Welcome to Koda Reusable UI Package,_
a comprehensive collection of reusable UI components built with React. This package aims to simplify and speed up the process of building elegant and consistent user interfaces for your React applications. It adheres to best practices and follows the latest trends in web development to ensure the highest quality and performance.

_Detail guide to create new package_

1. npm init -y
   1a. Describe your new package
2. npm install --save-dev react react-dom typescript @types/react
   2a. Move react and react-dom to peerDependencies
   2b. Create tsconfig.json
   2c. Copy and paste the content from the example
3. npm install --save-dev tslib
4. npm install --save-dev rollup @rollup/plugin-node-resolve @rollup/plugin-typescript @rollup/plugin-commonjs rollup-plugin-dts
   4a. Create rollup.config.mjs
   4b. Copy and paste the content from the example
5. npm install --save-dev postcss rollup-plugin-postcss
6. npm install --save-dev @rollup/plugin-terser rollup-plugin-peer-deps-external
7. npm install --save-dev jest ts-jest @types/jest @testing-library/react jest-environment-jsdom identity-obj-proxy
   7a. Create jest.config.js
   7b. Copy and paste the content from the example
8. npm install --save-dev eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser
   8a. Create .eslintrc and .eslintignore
   8b. Copy and paste the content from the example
9. npm install --save-dev eslint-config-prettier eslint-plugin-prettier prettier
   9a. Create .prettierrc.json
   9b. Copy and paste the content from the example
10. Update the package.json like an example
11. Create src folder also LICENSE, .nvmrc, README.md and follow the template structure from the example
