import Photo from "./Photo";

// Shows the city's landmark photo from /public/cities/<slug>.jpg, falling back
// to a gradient if the image is missing.
export default function CityImage({ city, className = "", alt, imgClassName = "" }) {
  return (
    <Photo
      src={`/cities/${city.slug}.jpg`}
      name={city.name}
      alt={alt || `${city.name}, Germany`}
      emoji="🏙️"
      className={className}
      imgClassName={imgClassName}
    />
  );
}
