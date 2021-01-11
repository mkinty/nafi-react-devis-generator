import React, { Component } from 'react'
import Item from '../inputItem/Item';
import { renderPDFInDom } from '../pdf/PdfMaker';
import InputText from '../inputItem/InputText';

export default class EstimateForm extends Component {

    state = {
        id: '',
        title: '',
        customerFirstName: '',
        customerLastName: '',
        items: {}
    };

    handleSubmite = e => {
        // Eviter le confortement par defaut avec preventDefault (eviter de rafraichir toute la page)
        e.preventDefault();
        // console.log('générer forme');
    }

    // mis à jour l'état de la form
    handleChange = (evt, name) => {
        const value = evt.currentTarget.value;
        // avec les [name] on récupère la valeur name mis à jour
        // console.log(JSON.stringify({name: value}));
        // console.log(JSON.stringify({[name]: value}));
        this.setState({
            [name] : value,
        })
    }

    addItem = () => {
        const id = Date.now().toString();
        const items = {...this.state.items};
        items[id] = {
            id: id,
            description: "description",
            quantity: "1",
            taxe: 0.2,
            amount: 0
        };

        this.setState({
            items: items
        })
    }

    handleItemChange = (evt, item, field) => {
        console.log(evt.currentTarget.value, item, field);
        const value = evt.currentTarget.value;
        const clonedItem = {...item}
        clonedItem[field] = value;
        const cloneItems = {...this.state.items};
        cloneItems[clonedItem.id] = clonedItem
        this.setState({
            items: cloneItems
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>Nouveau devis</div>
                <form onSubmit={this.handleSubmite}>
                    <InputText 
                        label = "ID" 
                        name= "id"
                        value = {this.state.id}
                        onChange = {this.handleChange}
                    />
                    <InputText 
                        label = "title" 
                        name= "title"
                        value = {this.state.title}
                        onChange = {this.handleChange}
                    />
                    <InputText 
                        label = "Prénom du client" 
                        name= "customerFirstName"
                        value = {this.state.customerFirstName}
                        onChange = {this.handleChange}
                    />
                    <InputText 
                        label = "Nom du client" 
                        name= "customerLastName"
                        value = {this.state.customerLastName}
                        onChange = {this.handleChange}
                    />
                    <button onClick={this.addItem}>Ajouter un ligne</button>
                    {/* recuperer les keys des objet items et mapper */}
                    {Object.keys(this.state.items).map((itemId, index) => (
                        <Item 
                            key = {index}  
                            item = {this.state.items[itemId]} 
                            onItemChange = {this.handleItemChange} 
                        />
                    ))}
                    <button onClick={() => renderPDFInDom(this.state)} >générer le devis</button>
                </form>
            </React.Fragment>
        )
    }
}
