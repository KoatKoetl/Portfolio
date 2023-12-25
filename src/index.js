import './CSS/style.css';
// Load all assets
require.context('../src/assets', true);

import { onScreenActivate } from './burger-menu';
onScreenActivate();
