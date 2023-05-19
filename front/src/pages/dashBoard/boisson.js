import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { URL } from '../../utils/constantes/urls';
import { Archive  } from 'react-bootstrap-icons';

const Boisson= () => {
    const [boissons, setBoissons ] = useState([]);
    
    useEffect(() => {
        const fetchBoisson = async () =>{
            try{
                const {data} = await axios.get(`${URL.fetchBoisson}`)
                // console.log(data)
                setBoissons(data)
            }
            catch(error){
                    console.log(error.message)
            }
        }
        fetchBoisson()
    },[])
    console.log(boissons)
    const deleteBoisson = () => {
        alert("ok?")
    }
    return (
        <>
         <h1> Boisson</h1>
         <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>name</th>
                    <th scope='col'>picture</th>
                    <th scope='col'>description</th>
                    <th scope='col'>prix</th>
                </tr>
            </thead>
            <tbody className='table-group-divider'>
                {boissons.map(boisson => (
                    <tr>
                    <th scope='row'></th>
                    <td>{boisson.name}</td>
                    <td><img src={boisson.image} alt='' width={100}/></td>
                    <td>{boisson.description}</td>
                    <td>{boisson.prix}</td>
                    <td><i onClick={deleteBoisson}><Archive/></i></td>
                </tr> 
                ))}
               
            </tbody>
         </table>
            <form method=''>
                <label htmlFor='name'>name</label>
                <input type="text" id='name' placeholder='name'></input>
                <label htmlFor='picture'>picture</label>
                <input type="text" id='picture' placeholder='picture'></input>
                <label htmlFor='description'></label>
                <input type="text"id='description' placeholder='description'></input>
                <label htmlFor='prix'></label>
                <input type="text" id='prix' placeholder='prix'></input>
                <button>Valide</button>
            </form>
        </>
       
    )
}

export default Boisson