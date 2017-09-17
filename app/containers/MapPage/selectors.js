/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectMap = (state) => state.get('map');

const slcSidebarCollapsed = () => createSelector(
  selectMap,
  (mapState) => mapState.get('sidebarCollapsed')
);

const slcSidebarSelected = () => createSelector(
  selectMap,
  (mapState) => mapState.get('sidebarSelected')
);

export {
  selectMap,
  slcSidebarCollapsed,
  slcSidebarSelected,
};
