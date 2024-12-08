import Header from "./components/Header/Header";
import Core_concepts from "./components/Core/Core_concepts";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {
  const [state, setState] = useState();

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
            {CORE_CONCEPTS.map((conceptItem) => (
              <Core_concepts {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton onClick={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton onClick={() => handleClick("props")}>Props</TabButton>
            <TabButton onClick={() => handleClick("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            {!state ? (
              <p>Please select a topic.</p>
            ) : (
              <>
                <h3>{EXAMPLES[state]?.title}</h3>
                <p>{EXAMPLES[state]?.description}</p>
                <pre>
                  <code>{EXAMPLES[state]?.code}</code>
                </pre>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
