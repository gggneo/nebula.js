module.exports = {
  verbose: true,
  clearMocks: true,
  testEnvironment: 'jest-environment-jsdom',
  testRegex: [
    'commands/.+\\.(spec|test|inspect)\\.jsx?$',
    'apis/conversion/.+\\.inspect\\.jsx?$',
    'apis/enigma-mocker/.+\\.inspect\\.jsx?$',
    'apis/locale/.+\\.inspect\\.jsx?$',
    'apis/nucleus/.+\\.inspect\\.jsx?$',
    'apis/snapshooter/.+\\.inspect\\.jsx?$',
    'apis/supernova/.+\\.inspect\\.jsx?$',
    'apis/test-utils/.+\\.inspect\\.jsx?$',
    'apis/theme/.+\\.inspect\\.jsx?$',
    'packages/ui/.+\\.inspect\\.jsx?$',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: [
    'apis/conversion/**/*.{js,jsx}',
    'apis/enigma-mocker/**/*.{js,jsx}',
    'apis/locale/**/*.{js,jsx}',
    'apis/nucleus/**/*.{js,jsx}',
    'apis/snapshooter/**/*.{js,jsx}',
    'apis/supernova/**/*.{js,jsx}',
    'apis/test-utils/**/*.{js,jsx}',
    'apis/theme/**/*.{js,jsx}',
    'commands/**/*.{js,jsx}',
    'packages/ui/**/*.{js,jsx}',

    '!apis/enigma-mocker/examples/**',
    '!apis/enigma-mocker/index.js',
    '!apis/snapshooter/client.js',
    '!apis/nucleus/src/flags/*',
    '!apis/nucleus/src/contexts/*',
    '!apis/nucleus/src/hooks/__tests__/*',
    '!apis/test-utils/index.js',
    '!apis/nucleus/src/components/selections/__stories__/**',
    '!commands/create/**/*.{js,jsx}',
    '!commands/build/command.js',
    '!commands/cli/**',
    '!commands/sense/command.js',
    '!commands/serve/command.js',
    '!commands/serve/web/components/Root.jsx',
    '!commands/serve/web/components/Visualize/**',
    '!commands/serve/web/contexts/**',
    '!commands/sense/src/ext.js',
    '!commands/sense/src/empty-ext.js',

    '!**/lib/**',
    '!**/dist/**',
    '!**/node_modules/**',
    '!**/*.config.js',
    '!**/*.conf.js',
  ],
  coverageReporters: ['json', 'lcov', 'text-summary', 'clover'],
  reporters: ['default', ['jest-junit', { outputDirectory: 'coverage/junit/' }]],
  transformIgnorePatterns: ['/node_modules/(?!@qlik/sdk)'],
  moduleNameMapper: {
    'd3-color': '<rootDir>/node_modules/d3-color/dist/d3-color.min.js',
  },
};
