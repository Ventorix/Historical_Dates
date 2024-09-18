import type { Config } from 'jest';
import path from 'path';

const config: Config = {
	globals: {
		__IS__DEV__: true,
	},
	clearMocks: true,
	coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
	moduleDirectories: ['node_modules'],
	moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
	rootDir: '../../',
	setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
	modulePaths: ['<rootDir>src'],
	moduleNameMapper: {
		'\\.(css|scss)$': '<rootDir>config/jest/identity-obj-proxy-esm.ts',
		'\\.svg': path.resolve(__dirname, 'StyledComponent.tsx'),
	},
	testEnvironment: 'jsdom',
	testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
};

export default config;
