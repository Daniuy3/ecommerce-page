/* eslint-disable react/prop-types */
import "./Meta.css"
function Meta({cartQuantity, setCartQuantity, setEmpty}) {

    function decreaseCart(){
        if(cartQuantity > 0){
            setCartQuantity(cartQuantity-1);
        }
    }

    function increaseCart(){
        if(cartQuantity < 20){
            setCartQuantity(cartQuantity+1);
        }
    }
  return (
    <div className="meta">
        <p className="slogan">Sneaker Company</p>
        <h1 className="meta__heading">Fall Limited Edition Sneakers</h1>
        <p className="meta__text">These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className="meta__price-container">
            <p className="meta__price">$125.00</p>
            <p className="meta__discount">50%</p>
        </div>
        <p className="meta__last-price">$250.00</p>
        <div className="meta__buttons">
            <div className="button__increase">
                <div className="button decrease" onClick={decreaseCart}>
                    <img src="/icon-minus.svg" alt="-" />
                </div>

                <p>{cartQuantity}</p>

                <div className="button increase" onClick={increaseCart}>
                    <img src="/icon-plus.svg" alt="+" />
                </div>
            </div>
            <div className="meta__cart" onClick={() => cartQuantity > 0? setEmpty(false) : setEmpty(true)}>
                <div className="cart__svg">
                    <img src="/icon-cart.svg" alt="" />
                </div>
                <p>Add to cart</p>
            </div>
        </div>
    </div>
  )
}

export default Meta