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
        <section id="tab-content">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleClick("Components")}>
              Components
            </TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
