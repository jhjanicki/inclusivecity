import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './OrganizationMap.scss';

mapboxgl.accessToken =
  'pk.eyJ1IjoiamhqYW5pY2tpIiwiYSI6Il9vb1ZlWnMifQ.zJie3Sr8zh3h5rR8IBMB2A';

export const OrganizationMap = () => {
  const ref = useRef();
  const mapRef = useRef();


  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: ref.current,
      style: 'mapbox://styles/jhjanicki/ckrukpn7t13zy18o82tq8o7wp',
      center: [4.3272, 51.929], // initial map center in [lon, lat]
      zoom: 10,
      minZoom: 1,
    });
    },[]);


  return <div className="organization-map" ref={ref} />;
};
