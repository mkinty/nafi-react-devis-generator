// Ici on a pas besoin des etats ni des lifecycle hook, 
// donc on utilise les react functional component

import React from 'react'

export default function Info(props) {
    return (
        <div>
            <h2>Bienvenue sur votre générateur de devis</h2>
                <div>
                    Créer un devis ? Rien de plus simple : cliquez sur  {" "}
                    <button onClick={props.onHandleShowEstimateForm}>nouveau devis</button>
                </div>
        </div>
    )
}
