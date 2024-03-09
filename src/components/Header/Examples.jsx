import React, { useState } from 'react';
import { EXAMPLES } from '../../data';
import TabButton from '../TabButton';
import Section from './Section';
import Tabs from './Tabs';


export default function Examples() {
  const [tabContent, setTabContent] = useState(null);

  function newSeller(value) {
    return value
  }

  function passOutValue(value) {
    return newSeller(value);
  }
  function handelClick(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setTabContent(passOutValue(selectedButton));
  }
  return (
    <Section title={"Examples"} id="examples">
      <Tabs ButtonsContainer="menu" buttons={<><TabButton isSelected={tabContent === 'components'} onClick={() => handelClick('components')}>Components</TabButton>
        <TabButton isSelected={tabContent === 'jsx'} onClick={() => handelClick('jsx')}>JSX</TabButton>
        <TabButton isSelected={tabContent === 'props'} onClick={() => handelClick('props')}>Props</TabButton>
        <TabButton isSelected={tabContent === 'state'} onClick={() => handelClick('state')}>State</TabButton>
      </>}>
        {tabContent && <div id="tab-content">
          <h3>{EXAMPLES[tabContent].title}</h3>
          <p>{EXAMPLES[tabContent].description}</p>
          <pre>
            <code>{EXAMPLES[tabContent].code}</code>
          </pre>
        </div>}
      </Tabs>
      {!tabContent && <p>Please select a topic.</p>}

    </Section>
  )
}