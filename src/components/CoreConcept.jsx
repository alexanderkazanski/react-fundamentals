export default function CoreConcept({ title, description, image, altText }) {
  return (
    <li>
      <img src={image} alt={altText} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}