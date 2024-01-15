import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
  useMapEvents,
} from "react-leaflet";
import styles from "./Map.module.css";
import { useEffect, useState } from "react";
import { LatLngExpression } from "leaflet";
import { useCities } from "../context/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPosition";
type Props = {};

const Map = ({}: Props) => {
  const { cities } = useCities();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mapPosition, setMapPosition] = useState<LatLngExpression>([
    51.505, -0.09,
  ]);

  const {
    isLoading: isLoadingPosition,
    position: geoPosition,
    getPosition,
  } = useGeolocation();
  const [mapLat, mapLng] = useUrlPosition();

  // const positionType :LatLngExpression = [lng, lat]
  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([Number(mapLng), Number(mapLat)]);
    },
    [mapLat, mapLng]
  );

  return (
    <div className={`${styles.mapContainer} ${styles.map}`}>
      <Button type="position" onClick={getPosition}>
        {isLoadingPosition ? "loading..." : "Use Position"}
      </Button>
      <MapContainer
        className={`${styles.mapContainer} ${styles.map}`}
        center={mapPosition}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city: any) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <p>{city.cityName}</p>
              <span>{city.emoji}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
};

function ChangeCenter({ position }: any) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e: any) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
      console.log(e);
    },
  });

  return null;
}

export default Map;
