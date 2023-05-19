import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
//URL API
import { URL} from '../../utils/constantes/urls.js'

function Dessert(){
    const [dessert, setDessert] = useState([]);
    const [choosedProduct, setChoosedProduct] = useState();
    const navigate = useNavigate();


    useEffect(() => {
        //requete api
        const fetchDessert = async () => {
            try{
                const {data} = await axios.get(URL.fetchDessert)
           
                setDessert (data) 
            }catch(error){
                console.log(error)

            }
            
        }
        fetchDessert()
      
    },[])

    function handleChange(event) {
        setChoosedProduct(event.target.value);
    }

    function formSubmit(event) {
        event.preventDefault();
        if(choosedProduct === undefined){
            return;
        } else{
            fetch(URL.fetchProduct + choosedProduct).then(res => res.json()).then((data) => {
                localStorage.setItem('dessert', JSON.stringify(data));
                navigate('/panier')
            })
        }
    }

    return(
        <>
        
            <h1 className="burger__capture">Nos Dessert 🥯 </h1>
            <form onSubmit={formSubmit}>
                {dessert.map((item, index) => {
                return(
                    <div className="burger"
                        key={index}>
                        <input className="burger__input" type="radio" name="burger" value={item._id} onChange={handleChange}></input>
                        <p className="burger__title">{item.name}</p>
                        <div className="burger__position">
                          <img className="burger__img" src={item.image} alt={item.name}/>
                        </div>
                        <p className="price">{item.price.$numberDecimal}€</p>
                        <p className="burger__text">{item.description}</p>
                    </div> 
                    )
                })}
            <section className="cta cta__burgers">
                <button className="cta__button cta__burgers-button cta__accompagnements">Suivant</button> 
            </section>  
            </form>
        </>
    )
}
export default Dessert