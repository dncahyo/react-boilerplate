import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Sidebar, Tab } from 'react-leaflet-sidebarv2';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';

import reducer from './reducer';
import { sidebarOpen, sidebarClose } from './actions';
import { slcSidebarSelected, slcSidebarCollapsed  } from './selectors';

const position = [51.505, -0.09];

export class MapPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ height: 'calc(100vh - 53px)', width: '100%', position: 'relative' }}>
        <Helmet
          title="Map Page"
          meta={[
            { name: 'description', content: 'Map Page' },
          ]}
        />
        <Sidebar
          id="sidebar"
          closeIcon="fa fa-times"
          collapsed={this.props.sidebarCollapsed}
          selected={this.props.sidebarSelected}
          onOpen={this.props.sidebarOnOpen}
          onClose={this.props.sidebarOnClose}
        >
          <Tab id="home" header="Home" icon="fa fa-home">
            <p>No place like home!</p>
          </Tab>
          <Tab id="settings" header="Settings" icon="fa fa-cog" anchor="bottom">
            <p>Settings dialogue.</p>
          </Tab>
        </Sidebar>
        <Map className="sidebar-map" center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
          />
          <Marker position={position}>
            <Popup>
              <span>A pretty CSS3 popup.<br />Easily customizable.</span>
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

MapPage.propTypes = {
  sidebarCollapsed: PropTypes.bool,
  sidebarSelected: PropTypes.string,
  sidebarOnOpen: PropTypes.func,
  sidebarOnClose: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    sidebarOnClose: (evt) => dispatch(sidebarClose(evt)),
    sidebarOnOpen: (evt) => dispatch(sidebarOpen(evt)),
  };
}

const mapStateToProps = createStructuredSelector({
  sidebarCollapsed: slcSidebarCollapsed(),
  sidebarSelected: slcSidebarSelected(),
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'map', reducer });

export default compose(
  withReducer,
  withConnect,
)(MapPage);
