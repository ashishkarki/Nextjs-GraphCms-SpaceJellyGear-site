import { useEffect } from "react";
// import L from "leaflet";
import * as ReactLeaflet from "react-leaflet";
import "leaflet/dist/leaflet.css";

import styles from "./AppMap.module.scss";

import iconMarker2x from "leaflet/dist/images/marker-icon-2x.png";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconMarkerShadow from "leaflet/dist/images/marker-shadow.png";

const { MapConsumer, MapContainer } = ReactLeaflet;

const position = [51.505, -0.09];

const AppMap = ({ className, children }) => {
  let mapClassName = styles.appMap;

  if (className) {
    mapClassName += ` ${className}`;
  }

  useEffect(() => {
    delete L.Icon.Default.prototype["_getIconUrl"];

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: iconMarker2x.src,
      iconUrl: iconMarker.src,
      shadowUrl: iconMarkerShadow.src,
    });
  }, []);

  return (
    <MapContainer
      className={mapClassName}
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <MapConsumer>{(map) => children(ReactLeaflet, map)}</MapConsumer>
    </MapContainer>
  );
};

export default AppMap;
