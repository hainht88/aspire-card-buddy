import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';

const excludes = ['src/main.js', 'src/components/icons'];

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**', ...excludes],
      root: fileURLToPath(new URL('./tests', import.meta.url)),
      setupFiles: './unit/setup.js',
      outputFile: './unit/report/report.html',
      coverage: {
        provider: 'v8',
        reportsDirectory: './tests/unit/coverage',
        reporter: ['text', 'json', 'html'],
        all: true,
        exclude: [...(configDefaults.coverage.exclude as string[]), ...excludes],
        include: ['src/**'],
      },
    },
  }),
);
