/** Display name (matches invitation wording). */
export const VENUE_NAME = "KNT Kalyana Mantapa";

/** Primary address lines for guests + Google Maps search. */
export const VENUE_STREET = "Teachers Colony, Chandapura Main Road";
export const VENUE_CITY_LINE = "Bengaluru, Karnataka 562107, India";

/** Single string for calendar / email / map destination accuracy. */
export const VENUE_FULL_ADDRESS = `${VENUE_NAME}, ${VENUE_STREET}, ${VENUE_CITY_LINE}`;

export function getVenueLine(): string {
  return `${VENUE_NAME}, Chandapura Main Road, Bengaluru`;
}

export function getVenueAddressLines(): string[] {
  return [VENUE_NAME, VENUE_STREET, VENUE_CITY_LINE];
}

export function getMapsDirectionsUrl(): string {
  const q = encodeURIComponent(VENUE_FULL_ADDRESS);
  return `https://www.google.com/maps/dir/?api=1&destination=${q}`;
}

/** Opens the place in the Google Maps app / web (full place page). */
export function getMapsPlaceUrl(): string {
  const q = encodeURIComponent(VENUE_FULL_ADDRESS);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

/** Embedded map (no Maps API key). Uses the same query as the live Maps search. */
export function getMapsEmbedUrl(): string {
  const q = encodeURIComponent(VENUE_FULL_ADDRESS);
  return `https://www.google.com/maps?q=${q}&output=embed`;
}
