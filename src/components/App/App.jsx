import { Component } from "react";
import data from "../data.json";

import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import { Container } from "./App.styled";
import { nanoid } from "nanoid";
import { Filter } from "components/Filter/Filter";


class App extends Component{
    state = {
      contacts: data,
      filter: ''
      };

      addContact = ({ name, number }) => {
        const normalizedName = name.toLowerCase();
    
        let isAdded = false;
        this.state.contacts.forEach(el => {
          if (el.name.toLowerCase() === normalizedName) {
            alert(`${name} is already in contacts`);
            isAdded = true;
          }
        });
    
        if (isAdded) {
          return;
        }
        const contact = {
          id: nanoid(),
          name: name,
          number: number,
        };
        this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
      };
    
      changeFilter = e => {
        this.setState({ filter: e.currentTarget.value });
      };
    
      getVisibleContacts = () => {
        const { filter, contacts } = this.state;
        const normalizedFilter = filter.toLowerCase();
    
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );
      };
    
      deleteContact = todoId => {
        this.setState(prevState => ({
          contacts: prevState.contacts.filter(contact => contact.id !== todoId),
        }));
      };
    

      render(){
          const visibleContacts = this.getVisibleContacts();
        return (
       
 <Container>
  <h1>Phonebook</h1>
  <ContactForm onSubmit = {this.addContact}/>

 <h2>Contacts</h2>
 <Filter value = {this.state.filter} onChange = {this.changeFilter} />
 <ContactList  
 contacts={visibleContacts}
 onDeleteContact={this.deleteContact}/>
 </Container>
        )
      }
}
export default App
