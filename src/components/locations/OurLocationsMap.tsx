"use client";

import { useMemo } from "react";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { PRIMARY_SERVICE_HUBS } from "@/data/serviceAreas";

/** SW → NE corners framing Hertfordshire cluster + London */
const LOCATIONS_BOUNDS: [[number, number], [number, number]] = [
  [51.465, -0.42],
  [51.835, -0.11],
];

export default function OurLocationsMap() {
  const markerIcon = useMemo(
    () =>
      L.divIcon({
        className: "locations-marker-wrap",
        html: `<div class="locations-marker-pin" aria-hidden="true"></div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      }),
    [],
  );

  return (
    <div className="locations-map-shell relative z-0 h-full min-h-0 w-full overflow-hidden rounded-xl border border-border bg-muted/40 shadow-card">
      <MapContainer
        bounds={LOCATIONS_BOUNDS}
        boundsOptions={{ padding: [44, 44], maxZoom: 11 }}
        scrollWheelZoom={false}
        className="locations-leaflet-map locations-map-themed z-0 h-full min-h-[inherit] w-full rounded-xl"
        attributionControl
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
          maxZoom={19}
        />
        {PRIMARY_SERVICE_HUBS.map((loc) => (
          <Marker key={loc.name} position={loc.position} icon={markerIcon}>
            <Tooltip direction="top" offset={[0, -10]} opacity={1} sticky className="locations-tooltip">
              {loc.name}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
