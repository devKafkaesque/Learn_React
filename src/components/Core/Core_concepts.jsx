export default function Core_concepts(props) {
  return (
    <li>
      <img src={props.image} alt="oh no" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}
