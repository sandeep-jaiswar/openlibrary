import type { Config } from "jest";

const config: Config = {
  automock: true,

  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: "coverage",

  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],

  coverageProvider: "v8",

  coverageReporters: ["json", "text", "lcov", "clover"],

  fakeTimers: {
    enableGlobally: true,
  },

  moduleDirectories: ["node_modules"],

  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],

  notify: true,

  resetMocks: true,

  resetModules: true,

  restoreMocks: true,

  roots: ["<rootDir>"],

  runner: "jest-runner",

  setupFiles: [],

  setupFilesAfterEnv: ["@testing-library/jest-dom"],

  slowTestThreshold: 5,

  testEnvironment: "jsdom",

  testEnvironmentOptions: {},

  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],

  testPathIgnorePatterns: ["\\\\node_modules\\\\"],

  testRegex: [],

  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  transformIgnorePatterns: ["\\\\node_modules\\\\", "\\.pnp\\.[^\\\\]+$"],

  watchman: true,
};

export default config;
