import React, { useState } from "react";
import { Link, Outlet} from "react-router-dom";


function Template(){
    const [isActive, setActive] = useState(false)

    const handleToggle = () => {
        setActive(!isActive);
    }

    return(
        <>
            <header className="flex header">
        <div className="logo">
            <Link to="/" >
            <img src='/images/logoBurgerDark.jpg' alt="Logo" />
            </Link>
        </div>
        <div className="button-mobil">
                <Link to="clicAndCollect" className="callToAction" >Click & Collect</Link>
                <Link className="callToAction" href="">Livraison</Link>
        </div>
        <div className={"mobil-menu " + (isActive ? 'is-open' : '')} id="mobil-menu" data-menu>
            <ul className="mobil-menu__nav">
                 <li className="mobil-menu__item" >
                   <Link className="mobil-menu__link mobil-menu__link--current "  href="index.html">La Carte</Link>
                  </li>
                 <li className="mobil-menu__item">
                   <Link className="mobil-menu__link " href="portfolio.html">Titi Stori</Link>
                 </li>
                 <li className="mobil-menu__item">
                   <Link className="mobil-menu__link" href="#">Le resto</Link>
                 </li>
                 <li className="mobil-menu__item">
                    <Link className="mobil-menu__link" href="#">Actus</Link>
                  </li>
                  <li className="mobil-menu__item">
                    <Link className="mobil-menu__link">Réserver</Link>
                  </li>
            </ul>
            
            <ul className="mobil-social">
                 <li className="mobil-social__item">
                   <Link className="mobil-social__link">Instagram</Link>
                 </li>
                 <li className="mobil-social__item">
                   <Link className="mobil-social__link">Facebook</Link>
                 </li>
                 <li className="mobil-social__item">
                   <Link className="mobil-social__link">TikTok</Link>
                 </li>
            </ul>
        </div>
        <div className="mobil-header">
             <button onClick={handleToggle} className={"menu-button " + (isActive ? 'is-open' : '')}>
               <svg width="40" height="40" aria-label="Переключатель мобильного меню">
                   <use className="menu-button__icon-close" href="images/icos.svg#icon-close_40px"></use>
                   <use className="menu-button__icon-menu" href="images/icos.svg#icon-menu"></use>
               </svg>
               </button>
        </div>
        <div className="navigation">
            <nav>
                <div className="button">
                    <Link className="callToAction" to="clicAndCollect">Click & Collect</Link>
                    <Link className="callToAction" href="">Livraison</Link>
                </div>
                <ul>
                    <li className="navigation_list">
                        <Link href="">La Carte</Link>
                    </li>
                    <li className="navigation_list">
                        <Link href="">Titi Stori</Link>
                    </li>
                    <li className="navigation_list">
                        <Link href="">Le resto</Link>
                    </li>
                    <li className="navigation_list">
                        <Link href="">Actus</Link>
                    </li>
                    <li className="navigation_list">
                        <Link href="">Réserver</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
            <section><Outlet /></section>
            <footer>
        <section className="footer">
            <h2 className="hidden">ff</h2>
            <div className="footer_list">
                <ul>
                    <li className="footer_list__title">Mention Légales</li>
                    <li>CGU</li>
                    <li>CGV</li>
                </ul>
            </div>
            <div className="footer_list">
                <ul>
                    <li className="footer_list__title">Plan du Site</li>
                    <li>La Carte</li>
                    <li>Titi Story</li>
                    <li>Le resto</li>
                    <li>Actus</li>
                </ul>
            </div>
            <div className="footer_list">
               <span className="footer_list__text footer_list__title">Où nous trouver ?</span> 
               <iframe title="Google Maps" width="300" height="170" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
            </div>
            <div className="footer_list">
                <ul>
                    <li>Contact</li>
                    <li>Où nous trouver ?</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className="footer_list">
                <ul className="social">
                    <li className="social__item">
                        <Link href="#" className="social__link">
                            <svg width="40" height="40" className="social__icon">
                                <use href="images/icons.svg#icon-facebook">
                                </use>
                            </svg>
                        </Link>
                    </li>
                    <li className="social__item">
                        <Link href="#" className="social__link">
                            <svg width="40" height="40" className="social__icon">
                                <use href="images/icons.svg#icon-instagram">
                                </use>
                            </svg>
                        </Link>
                    </li>
                    <li className="social__item">
                        <Link href="#" className="social__link">
                            <svg width="40" height="40" className="social__icon">
                                <use href="images/icons.svg#icon-tiktok">
                                </use>
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    </footer>
        </>

    )
}
export default Template