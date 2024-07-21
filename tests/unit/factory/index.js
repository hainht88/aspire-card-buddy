import { shallowMount, RouterLinkStub, mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';

export const shallow = (component, { props, settings, global }) =>
  shallowMount(component, {
    global: {
      ...global,
      plugins: [createTestingPinia(settings)],
      stubs: {
        RouterLink: RouterLinkStub,
        RouterView: 'router-view',
      },
    },
    mocks: {
      window: {},
    },
    props,
  });

export const mount = (component, { props, settings, global }) =>
  mount(component, {
    global: {
      ...global,
      plugins: [createTestingPinia(settings)],
      stubs: {
        RouterLink: RouterLinkStub,
        RouterView: 'router-view',
      },
    },
    mocks: {
      window: {},
    },
    props,
  });
