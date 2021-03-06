import { configure } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import Vue from 'vue';
import Vuex from 'vuex';
import '../../src/scss/base.scss';

Vue.use(Vuex);

setOptions({
  hierarchyRootSeparator: / - /,
  name: 'Vue Boilerplate',
  url: '#'
});


// Require all the .stories.js files from all components
const req = require.context('components', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach((filePath) => {
    let componentName = filePath.replace(/^.+\/([^/]+)\/index.stories.js/, '$1');
    let component = req(filePath);
    Vue.component(componentName, component);
    return component;
  });
}

configure(loadStories, module);
