import { Header } from "./components/Header/Header.jsx";
import { CORE_CONCEPTS } from "./data";
import { Core_concepts } from "./components/Core_Concepts";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please click a button");

  function handleClick(buttonName) {
    setSelectedTopic(buttonName);
    console.log(selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <Core_concepts {...CORE_CONCEPTS[0]} />
            <Core_concepts {...CORE_CONCEPTS[1]} />
            <Core_concepts {...CORE_CONCEPTS[2]} />
            <Core_concepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleClick("Components")}>
              Components
            </TabButton>
            <TabButton onClick={() => handleClick("JSX")}>JSX</TabButton>
            <TabButton onClick={() => handleClick("Props")}>Props</TabButton>
            <TabButton onClick={() => handleClick("State")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
