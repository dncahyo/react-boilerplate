import { fromJS } from 'immutable';
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from './constants';

const initialState = fromJS({
  sidebarSelected: '',
  sidebarCollapsed: true,
});

function mapReducer(state = initialState, action) {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return state.set('sidebarSelected', action.id).set('sidebarCollapsed', false);
    case SIDEBAR_CLOSE:
      return state.set('sidebarCollapsed', true);
    default:
      return state;
  }
}

export default mapReducer;
