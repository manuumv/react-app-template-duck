import { StorybookConfig } from '@storybook/react/types';
import { Configuration } from 'webpack';
import { addons } from './config/addons';
import { storybookAlias } from './config/alias';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  logLevel: 'debug',
  addons,
  core: {
    builder: 'webpack5'
  },
  features: {
    postcss: false,
  },
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      tsconfigPath: '../tsconfig.json'
    }
  },
  webpackFinal: async (config: Configuration): Promise<Configuration> => (
    {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          ...storybookAlias,
        },
      },
    }
  )
};

module.exports = config;
