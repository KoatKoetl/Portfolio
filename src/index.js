import './CSS/style.css';
// Load all assets
// eslint-disable-next-line no-undef
require.context('../src/assets', true);
import enableApp from './JS/App.js';

enableApp();
