import React, { useState } from 'react';
function ObjectStateVariable() {
  const [person, setPerson] = useState({ name: 'Peter', age: 24 });
  return (
    <div>
      <h2>Object State Variables</h2>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <input
        value={person.name}
        onChange={e => setPerson({ ...person, name: e.target.value })}
      />
      <input
        value={person.age}
        onChange={e => {
          const value = parseInt(e.target.value);

          if (isNaN(value)) {
            return setPerson({ ...person, age: 0 });
          }

          return setPerson({ ...person, age: value });
        }}
      />
    </div>
  );
}
export default ObjectStateVariable;
