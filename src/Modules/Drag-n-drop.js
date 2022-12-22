import Sortable from 'sortablejs';
import { listElement } from './Add html.js';

export default () => new Sortable(listElement, {
  handle: 'i',
  animation: 350,
});
