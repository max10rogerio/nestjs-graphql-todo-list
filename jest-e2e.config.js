const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  moduleFileExtensions: [
    "js",
    "json",
    "ts"
  ],
  rootDir: ".",
  testRegex: ".e2e-spec.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  coverageDirectory: "./coverage",
  testEnvironment: "node",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths , { prefix: '<rootDir>/src/' } )
}
