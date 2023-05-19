import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
//URL API
import { URL} from '../../utils/constantes/urls.js'

function Panier(){
    const [burger, setBurger] = useState([]);
    const [accompagnement, setAccompagnement] = useState([]);
    const [boisson, setBoisson] = useState([]);
    const [dessert, setDessert] = useState([]);
    const storage = {... localStorage};

    useEffect(() => {

            setBurger(JSON.parse(storage.burger))
            setAccompagnement(JSON.parse(storage.accompagnement))
            setBoisson(JSON.parse(storage.boisson))
            setDessert(JSON.parse(storage.dessert))
    },[])
  
    return(
        <>
            <div className="burger">
                <div className="burger__position">
                    <img className="burger__img" src={burger.image} alt={burger.name} />
                </div>  
                <h2 className="burger__title">{burger.name}</h2>
                <p className="price">{burger.price?.$numberDecimal}€</p>
            </div>
            <div className="burger">
                <div className="burger__position">
                    <img className="burger__img" src={accompagnement.image} alt={accompagnement.name}/>
                </div>
                <h2 className="burger__title">{accompagnement.name}</h2>
                <p className="price">{accompagnement.price?.$numberDecimal}€</p>
            </div>
            <div className="burger">
                <div className="burger__position">
                    <img className="burger__img" src={boisson.image} alt={boisson.name} />
                </div>
                <h2 className="burger__title">{boisson.name}</h2>
                <p className="price">{boisson.price?.$numberDecimal}€</p>
            </div>
            <div className="burger">
                <div className="burger__position">
                    <img className="burger__img" src={dessert.image} alt={dessert.name} />
                </div>
                <h2 className="burger__title">{dessert.name}</h2>
                <p className="price">{dessert.price?.$numberDecimal}€</p>
            </div>
            <p className="price">{parseFloat(burger.price?.$numberDecimal||0) + parseFloat(accompagnement.price?.$numberDecimal||0) + parseFloat(boisson.price?.$numberDecimal||0) + parseFloat(dessert.price?.$numberDecimal||0)}€</p>
            <section className="cta cta__burgers">
                <Link to="/paiement">
                    <button className="cta__button cta__burgers-button cta__accompagnements">Payer</button> 
                </Link>
               
            </section>  
        </>
    )
}
export default Panier;