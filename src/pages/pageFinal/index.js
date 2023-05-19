import React, { useState, useEffect } from "react"

function Final(){
   
  
    return(
        <>
             <div className="container">
            <div className="commande">
                <div className="percent33">
                    <p className="commande__text">commande TITI03FTP092201</p>
                </div>
                <div className="percent66">
                    <h2>Click & Collect</h2>
                    <h3>commander et déguster</h3>
                </div>
            </div>
            <section>
                <div className="dashed">
                <div className="commande__text commande__text--width">
                    <p >Merci pour votre commande</p>
                </div>
                
                <p>Vous pouvez venir la chercher à</p>
                <p className="clock">12h45</p>
            </div>
            </section>
        </div>
        </>
    )
}
export default Final;