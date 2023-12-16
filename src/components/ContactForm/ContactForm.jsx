import { Component } from "react";
import { FormStyled } from "./ContactForm.styled";
import  {LabelStyled}  from "./LabelForm.styled";
import  {BtnForm } from "./BtnForm.styled";

class ContactForm extends Component {
state = {
name: '',
number: '',
}
handleChange = name => ({ target }) => { 
 this.setState(() => ({
    [name]: target.value,
  }));
};

handleSubmit = e => {
  e.preventDefault();

 const { onSubmit } = this.props;
    onSubmit(this.state);
    this.resetForm();
};

resetForm = () => {
  this.setState(() => ({
    name: '',
    number: '',
  }));
};


    render() {
        return (
          <FormStyled onSubmit={this.handleSubmit}>

            <LabelStyled>
            Name
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange('name')}
                required
              />
            </LabelStyled>

            <LabelStyled>
              Number
              <input
                type="text"
                name="number"
                value={this.state.number}
                onChange={this.handleChange('number')}
                required
              />
            </LabelStyled>
    
            <BtnForm type="submit">
              Add contact
            </BtnForm>

          </FormStyled>
        ); 
          }
}
export default ContactForm;