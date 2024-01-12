import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
type Props = {};

const Map = ({}: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h3>
        Location longitude - {lng} lattitude - {lng}
      </h3>
    </div>
  );
};

export default Map;
