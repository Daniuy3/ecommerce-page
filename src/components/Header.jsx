/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./Header.css";
import { useEffect } from "react";

function Header({cartQuantity, empty, setEmpty}) {
    
    /* State para identificar la posicion de la barra */
    const [navStep, setNavStep] = useState(1);
    const [cartActive, setCartActive] = useState(false)
    const [navActive, setNavActive] = useState(false)
    useEffect(() =>{
        const nav = document.querySelector(".nav");

        if(navActive){
            nav.classList.add("nav--active")
        }
        else{
            nav.classList.remove("nav--active")
        }
    },[navActive] )
    useEffect(() => {

      const barra = document.querySelector(".barra");
      const links = document.querySelectorAll(".nav__link");

      /* Me aseguro de remover todas las otras clases de la barra */
      for(let x=1 ; x<6 ; x++){
        barra.classList.remove(`barra${x}`);
      }

      links.forEach(link => {
        
        if(link.id === `nav${navStep}`){
            link.classList.add("nav__link--active");
        }
        else{
            link.classList.remove("nav__link--active");
        }
      })
      /* Agrego la clase de la barra correspondiente para que se mueva a donde debe */
      barra.classList.add(`barra${navStep}`)

    }, [navStep])
    
  return (
    <div className="header">
        <div className="header__container">
            <a className="menu" href="#" onClick={() => setNavActive(true)}>
                <img src="/icon-menu.svg" alt="" />
            </a>
            <a href="#">
                <img src="/logo.svg" alt="sneakers" />
            </a>
            <nav className="nav">
                <div className="close" onClick={() => setNavActive(false)}>
                    <img src="/icon-close.svg" alt="" />
                </div>
                <div className="nav__container">
                    <a 
                        id="nav1"
                        href="#" 
                        className="nav__link"
                        onClick={() => setNavStep(1)}    
                    >Collections</a>
                    <div className="barra"></div>
                </div>
                <div className="nav__container">
                    <a id="nav2" href="#" className="nav__link" onClick={() => setNavStep(2)}  >Men</a>
                </div>
                <div className="nav__container">
                    <a id="nav3" href="#" className="nav__link" onClick={() => setNavStep(3)}  >Women</a>
                </div>
                <div className="nav__container">
                    <a id="nav4" href="#" className="nav__link" onClick={() => setNavStep(4)}  >About</a>
                </div>
                <div className="nav__container">
                    <a id="nav5" href="#" className="nav__link" onClick={() => setNavStep(5)}  >Contact</a>
                </div>
                   
            </nav>
        </div>

        <div className="header__container">

            <div className="cart" onClick={ () => cartActive? (setCartActive(false)) : setCartActive(true)}>
                <img src="/icon-cart.svg" alt="Cart" />
            </div>

            <div className="avatar__container">
                <img src="/image-avatar.png" alt="Avatar" />
            </div>

        </div>

        <div className={cartActive? ("cart__items cart__items--active"): ("cart__items")}>
            <div className="cart__items__header">
                <h3 className="cart__items__heading">Cart</h3>
            </div>
           <div className="cart__cart-products">
           <div className={empty? ("item ") : ("item item--inactive")}>
                <p>Your cart is empty</p>
            </div>
            <div className={empty? ("item__grid item--inactive"): ("item__grid")}>
                <div className="item__product">
                    <div className="item__img">
                        <img src="/image-product-1-thumbnail.jpg" alt="Product" />
                    </div>
                    <div className="item__meta">
                        <p className="item__heading">Fall Limited Edition Sneakers</p>
                        <div className="item__quantity-grid">
                            <p className="item__quantity">$125.00 x {cartQuantity}</p>
                            <p className="item__price">${cartQuantity*125}.00</p>
                        </div>
                    </div>
                    <div className="item__erase" onClick={() => setEmpty(true)}>
                        <img src="/icon-delete.svg" alt="X" />
                    </div>
                </div>
            </div>
           </div>
           <div className={empty? ("cart__items-checkout item--inactive"): ("cart__items-checkout")}>
                <p>Checkout</p>
           </div>
        </div>
    </div>
  )
}

export default Header