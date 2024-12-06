import Header from "./components/Header/Header";
import Core_concepts from "./components/Core/Core_concepts";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton/TabButton";
import { useState } from "react";

function App() {
  const [state, setState] = useState("Please select one");

  function handleClick(prop) {
    setState(prop);
  }

  return (
    <div>
      <main>
        <Header />
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
          {state}
        </section>
      </main>
    </div>
  );
}

export default App;
