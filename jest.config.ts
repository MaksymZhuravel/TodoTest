import type {Config} from 'jest';

import {defaults} from 'jest-config';

const config: Config = {
  preset: 'react-native',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  fakeTimers: {enableGlobally: true},
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation|react-redux)',
  ],
  coverageReporters: [
    'text',
    [
      'text',
      {
        file: 'coverage.txt',
      },
    ],
    'json',
    'json-summary',
  ],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
  coveragePathIgnorePatterns: ['./src/test/*'],
};

export default config;
