import React from 'react';
import PropTypes from 'prop-types';
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet';
import 'leaflet';
import styles from './Map.css';

const Map = ({ points, onMarkerClick }) => (
  <LeafletMap id="tripMap" className={styles.map} bounds={points && points.length > 0 ? points.map(point => point.location) : [[45.5066927, -122.6890254]]} maxZoom={17} scrollWheelZoom={false}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {points.map(point => (
      <Marker draggable id={point.id} key={point.id} position={point.location} onClick={() => { onMarkerClick(point.id); }} />
    ))}
  </LeafletMap>
);

Map.propTypes = {
  points: PropTypes.arrayOf(PropTypes.object).isRequired,
  onMarkerClick: PropTypes.func,
};

Map.defaultProps = {
  onMarkerClick: null,
};

export default Map;
