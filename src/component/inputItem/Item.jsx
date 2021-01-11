import React from 'react'

export default function Item(props) {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <input 
                            type="text" 
                            name="description" 
                            value={props.item.description} 
                            onChange = {evt => props.onItemChange(evt, props.item, 'description')} 
                        />
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <input 
                            type="number" 
                            name="quantité" 
                            value={props.item.quantity} 
                            onChange = {evt => props.onItemChange(evt, props.item, 'quantity')} 
                        />
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <input 
                            type="text" 
                            name="taxe" 
                            value={props.item.taxe} 
                            onChange = {evt => props.onItemChange(evt, props.item, 'taxe')} 
                        />
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <input 
                            type="text" 
                            name="amount" 
                            value={props.item.amount} 
                            onChange = {evt => props.onItemChange(evt, props.item, 'amount')} 
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
