import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
//URL API
import { URL} from '../../utils/constantes/urls.js'

function Boisson(){
    const [boisson, setBoisson] = useState([]);
    const [choosedProduct, setChoosedProduct] = useState();
    const navigate = useNavigate();

    useEffect(() => {
//requete api
        const fetchBoisson = async () => {
            try{
                const {data} = await axios.get(URL.fetchBoisson)
           
                setBoisson (data) 
            }catch(error){
                console.log(error)

            }
            
        }
        fetchBoisson()
      
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
                localStorage.setItem('boisson', JSON.stringify(data));
                navigate('/dessert')
            })
        }
    }
    return(
        <>
            <h1 className="burger__capture">Nos Boisson 🍹</h1>
            <form onSubmit={formSubmit}>
                {boisson.map((item, index) => {
                return(
                    <div className="burger"
                        key={index}>
                        <input className="burger__input" type="radio" name="burger"  value={item._id} onChange={handleChange}></input>
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
export default Boisson;