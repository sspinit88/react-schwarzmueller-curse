import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton/TabButton';

import { coreConcepts } from './constants/core-concepts.constant';
import { TAB } from './constants/tab.constant';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {
              coreConcepts.map((concept, index) => (
                // <CoreConcept {...concept}/> // This is the same as below

                <CoreConcept key={index}
                             title={concept.title}
                             description={concept.description}
                             imgSrc={concept.imgSrc}/>
              ))
            }
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {
              TAB.map((tab, index) => (
                <TabButton key={index}>
                  {tab.name}
                </TabButton>
              ))
            }
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
