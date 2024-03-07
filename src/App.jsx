import { useState } from 'react';

import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcept';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js'

function App() {

  const [selectedTopic, setSelectedtopic] = useState()

  function handleClick(selectedButton) {
    setSelectedtopic(selectedButton);
    console.log(selectedTopic);
  }

let tebContent = <p>please select a button</p>

if(selectedTopic){
  tebContent =(
    <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
  );
}
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>

            {CORE_CONCEPTS.map((item) => <CoreConcepts  {...item} /> )}


          
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic==='components'} onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic==='jsx'} onSelect={() => handleClick('jsx')} >JSX</TabButton>
            <TabButton isSelected={selectedTopic==='props'} onSelect={() => handleClick('props')} >Props</TabButton>
            <TabButton isSelected={selectedTopic==='state'} onSelect={() => handleClick('state')}>State</TabButton>
          </menu>
            {tebContent}
        </section>
      </main>
    </div>
  );
}

export default App;
