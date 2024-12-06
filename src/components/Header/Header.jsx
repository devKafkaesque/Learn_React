import reactImg from "../../assets/images/react-core-concepts.png";
import "./Header.css";

const lenDescription = ["Fundamental", "Crucial", "Important"];
let length_decs = lenDescription.length;

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {lenDescription[genRandomInt(length_decs)]} React concepts you will need
        for almost any app you are going to build!
      </p>
    </header>
  );
}
