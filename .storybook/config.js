import { configure } from '@storybook/react';
// import '@blueprintjs/core/dist/blueprint.css';
// import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/wizard.css';
import '../src/assets/themify-icons.css';

const req = require.context('../src/stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
