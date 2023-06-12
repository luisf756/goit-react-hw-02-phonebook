// import { nanoid } from 'nanoid';
import React from 'react';

import ContactList from './phone/ContactList'
// import Filter from './phone/Filter';
import ContactForm from './phone/ContactForm'
// const section = {
//   width: '100vw',
//   height: '40vh',
//   margin: ' 0 auto',
//   marginBottom: '100px',
//   paddingRight: '100px',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
// };


export default class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
    rellenar = values => {
      //console.log(values);
    // const { id, name, number } = this.state;
    // console.log(
    //   `id: ${id}, neme: ${name}, num: ${number}`
    // );
    const contact = {
      id: values.id,
      name: values.name,
      number: values.number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = todoId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== todoId),
    }));
  };
  
  render() {
    return (
      <div
        style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
        
        }}
      >
        {/* <h1>Phone book</h1>
        <section style={section}>
          
        </section> */}
        <h1>Phonebook</h1>
  {/* <ContactForm  /> */}
  <ContactForm onSubmit={ values => this.rellenar(values)} />
  <h2>Contacts</h2>
   {/* <Filter value={filter} onChange={this.changeFilter} />  */}
  <ContactList state={this.state.contacts} 
    onDeleteContact={this.deleteContact}
  /> 
      </div>
    );
  }
}

// nanoid
// import { nanoid } from 'nanoid'
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"


// const Button = props => {
//   const { kind, ...other } = props;
//   const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
//   return <button className={className} {...other} />;
// };