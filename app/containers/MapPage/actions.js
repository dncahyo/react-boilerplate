import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from './constants';

export function sidebarOpen(id) {
  return {
    type: SIDEBAR_OPEN,
    id,
  };
}

export function sidebarClose() {
  return {
    type: SIDEBAR_CLOSE,
  };
}
