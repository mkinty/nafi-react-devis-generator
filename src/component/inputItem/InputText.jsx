import React from 'react'

export default function InputText(props) {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <label htmlFor="{props.name}">{props.label} </label>
                    </div>
                    <div className="col">
                        <input 
                            type="text" 
                            name = {props.name} 
                            value= {props.value}
                            onChange = {evt => props.onChange(evt, props.name)}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
