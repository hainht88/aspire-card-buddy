import { config } from '@vue/test-utils';
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';

installQuasarPlugin();

const windowMock = {
  scrollTo: vi.fn(),
};

Object.assign(global, global, windowMock);

afterAll(() => {
  vi.clearAllMocks();
});
