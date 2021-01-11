import React, { Component } from 'react'
import Info from '../info/Info'
import EstimateForm from './EstimateForm';


export default class Estimate extends Component {


    state = {
        showForm: true,
    }

    handleShowEstimateForm = evt => {
        // console.log(evt);
        this.setState({
            // passer à l'opposé de showForm à chaque click 
            showForm : !this.state.showForm
        })
    };


    render() {
        return (
            <div>
                <Info onHandleShowEstimateForm = {this.handleShowEstimateForm} />
                {this.state.showForm && <EstimateForm />}
            </div>
        )
    }
}
