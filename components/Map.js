import React, { useState, useEffect, useRef } from 'react'
import Map, { Marker } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
// NOTE: ReactMapGL will not work with ssr, to import use `next/dynamic` importer

export default function CareerMap() {
  // bounds
  // -180,-85.05,180,83.67

  // mapboxgl.accessToken = 'pk.eyJ1IjoiY29saW4tbmZhIiwiYSI6ImNrenNycWpzZTAwcWIycXA4NHB1ZGhobjgifQ.R0RwGLZWSNiwZqTDY7UQRQ';
  // const mapContainer = useRef(null);
  // const map = useRef(null);
  // const [lng, setLng] = useState(-70.9);
  // const [lat, setLat] = useState(42.35);
  // const [zoom, setZoom] = useState(9);

  // useEffect(() => {
  //   if (map.current) return; // initialize map only once
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: 'mapbox://styles/mapbox/dark-v9',
  //     center: [lng, lat],
  //     zoom: zoom
  //   });
  // });

  // return (
  //   <div>
  //     <div ref={mapContainer} className="map-container" />
  //   </div>
  // );


  const mapRef = React.useRef();

  const [mapViewPort, setMapViewPort] = useState({
    latitude: 40,
    longitude: -100,
    zoom: 1.5
  });

  const [settings, setSettings] = useState({
    dragRotate: false,
    scrollZoom: false,
    touchZoom: false,
    touchRotate: false,
    keyboard: false,
  })

  useEffect(() => {
    console.log('mapRef: ', mapRef);
    if (mapRef.current) {
      console.log('something missing: ', mapRef.current)
    }
  }, [])

  return (
    <Map
      ref={mapRef}
      {...settings}
      initialViewState={mapViewPort}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxAccessToken='pk.eyJ1IjoiY29saW4tbmZhIiwiYSI6ImNrenNycWpzZTAwcWIycXA4NHB1ZGhobjgifQ.R0RwGLZWSNiwZqTDY7UQRQ'
    >
    </Map>
  )
}
