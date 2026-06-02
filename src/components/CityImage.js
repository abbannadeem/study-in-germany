import Photo from "./Photo";

// Shows the city's landmark photo from /public/cities/<slug>.jpg, falling back
// to a gradient if the image is missing.
export default function CityImage({ city, className = "" }) {
  return (
    <Photo
      src={`/cities/${city.slug}.jpg`}
      name={city.name}
      emoji="🏙️"
      className={className}
    />
  );
}
