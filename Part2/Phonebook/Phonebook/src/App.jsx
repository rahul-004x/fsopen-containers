import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle changes in the name input field
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  // Function to handle changes in the number input field
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  // Function to handle changes in the search input field
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle form submission
  const addPerson = (event) => {
    event.preventDefault();

    // Check if the name already exists in the persons array
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    // Add the new person to the persons array with name and number
    const newPerson = { name: newName, number: newNumber };
    setPersons(persons.concat(newPerson));

    // Clear the input fields
    setNewName('');
    setNewNumber('');
  };

  // Filter persons based on the search term
  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter shown with <input value={searchTerm} onChange={handleSearchChange} />
      </div>

      <form onSubmit={addPerson}>
        <div>
          <h1>add a new</h1>
          name: <input value={newName} onChange={handleNameChange} required/><br/>
          number: <input value={newNumber} onChange={handleNumberChange} type='texy' required/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person => 
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        )}
      </ul>
    </div>
  );
};

export default App;
