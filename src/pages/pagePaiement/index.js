import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Banniere from "../../assets/modele-banniere-medias-sociaux-delicieux-menu-burger-nourriture_106176-354.jpg"
import { URL} from '../../utils/constantes/urls.js'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
function Paiement(){
    const navigate = useNavigate();

    const [total, setTotal] = useState(0);
    const storage = {... localStorage};

    useEffect(() => {

            setTotal(parseFloat(JSON.parse(storage.burger).price?.$numberDecimal||0) + parseFloat(JSON.parse(storage.accompagnement).price?.$numberDecimal||0) + parseFloat(JSON.parse(storage.boisson).price?.$numberDecimal||0) + parseFloat(JSON.parse(storage.dessert).price?.$numberDecimal||0))
    },[])
     
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
            <div className="paiement">
                <div className="commande" id="paiement">
                    <form action="/action_page.php">
                        <div className="choise-paiement">
                            <p className="text-left">Paiement</p>
                            <PayPalScriptProvider options={{"client-id" : 'AWYIF76W1ToMO8jzvEAArqYAQceS7Jr4dMx0bPlX0wiV0sN0qYjtCBne592v41M7CZCwwZ8ExOaskUt-'}}>
                                <PayPalButtons  createOrder={(data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [
                                            {
                                                amount: {
                                                    value:total,
                                                },
                                            },
                                        ],
                                    });
                                }}
                                onApprove={(data, actions) => {
                                    return actions.order.capture().then((details) => {
                                        fetch(URL.fetchPaiement, {
                                            method: 'POST',
                                            body: JSON.stringify(details),
                                            headers: {
                                                'Content-type': 'application/json; charset=UTF-8',
                                            }
                                        })
                                        .then(response => {
                                            console.log(response);
                                            // redirection
                                            navigate('/final')
                                        })
                                        .catch(error => {
                                            console.log(error)
                                        });
                                    });
                                }}>
                                </PayPalButtons>
                            </PayPalScriptProvider>
                        </div>
                    </form>
                    <div className="right-image">
                        <p className="right-image__text">Promo pour votre prochaine commande</p>
                        <img src={Banniere} alt="super delicious burger"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Paiement;