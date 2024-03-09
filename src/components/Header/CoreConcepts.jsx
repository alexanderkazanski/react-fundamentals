import React from 'react';
import CoreConcept from '../CoreConcept';
import { CORE_CONCEPTS } from '../../data';

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
    <ul>
      {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
    </ul>
    </section>
  )
}