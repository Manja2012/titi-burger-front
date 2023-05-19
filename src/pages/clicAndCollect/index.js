import React from "react"
import { Link } from "react-router-dom";

function ClicAndCollect(){

    return(
       <>
         <main>
            <div className="container">
                <section className="main-clicAndCollect">
                <h1 className="main-clicAndCollect_caption">Clic & Collect</h1>
                <h2 className="main-clicAndCollect_title">commander et déguster</h2>
                <p className="main-clicAndCollect_text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
                    eum magnam, non mollitia dolores eligendi fugiat est, facilis quos,
                    sapiente alias tenetur aut eos nemo sint beatae facere voluptatum
                    nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                    mi at ultrices praesent posuere sit. Pulvinar
                </p>
                </section>
            </div>
            <section className="cta">
                <div className="cta__background cta__background__clicAndCollect">
                <Link to="/burger" className="cta__link" >
                    <button className="cta__button">Commencer</button>
                </Link>
                </div>
            </section>
    </main>
       </>
    )
}
export default ClicAndCollect