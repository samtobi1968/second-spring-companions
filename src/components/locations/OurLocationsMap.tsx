"use client";

import { useMemo } from "react";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LOCATIONS = [
  { name: "St Albans", position: [51.752, -0.3362] as [number, number] },
  { name: "Harpenden", position: [51.8168, -0.3574] as [number, number] },
  { name: "Hatfield", position: [51.7634, -0.2259] as [number, number] },
  { name: "Radlett", position: [51.6776, -0.3176] as [number, number] },
  { name: "Wheathampstead", position: [51.8116, -0.2948] as [number, number] },
  { name: "Redbourn", position: [51.7995, -0.3937] as [number, number] },
  { name: "Sandridge", position: [51.7668, -0.3028] as [number, number] },
  { name: "Cambridge", position: [52.2053, 0.1192] as [number, number] },
  { name: "London", position: [51.5074, -0.1278] as [number, number] },
];

/** SE / East bias while keeping most of Great Britain in frame */
const MAP_CENTER: [number, number] = [52.12, 0.08];
const MAP_ZOOM = 7;

export default function OurLocationsMap() {
  const markerIcon = useMemo(
    () =>
      L.divIcon({
        className: "locations-marker-wrap",
        html: `<div class="locations-marker-pin" aria-hidden="true"></div>`,
        iconSize: [26, 26],
        iconAnchor: [13, 13],
      }),
    [],
  );

  return (
    <div className="relative z-0 h-[500px] w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-[0_28px_90px_-30px_rgba(30,27,75,0.42)] lg:h-[calc(100vh-10rem)] lg:min-h-[560px]">
      <MapContainer
        center={MAP_CENTER}
        zoom={MAP_ZOOM}
        scrollWheelZoom={false}
        className="locations-leaflet-map z-0 h-full w-full rounded-2xl"
        attributionControl
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
          maxZoom={19}
        />
        {LOCATIONS.map((loc) => (
          <Marker key={loc.name} position={loc.position} icon={markerIcon}>
            <Tooltip
              direction="top"
              offset={[0, -10]}
              opacity={1}
              sticky
              className="locations-tooltip !rounded-lg !border !border-indigo-400/35 !bg-slate-900 !px-3 !py-2 !text-xs !font-medium !tracking-wide !text-slate-100 !shadow-xl"
            >
              {loc.name}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
