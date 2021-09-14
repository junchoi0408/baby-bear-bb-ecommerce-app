import React, { useState, useEffect } from 'react'

const CartItem = ({ item, handleRemoveFromCart, handleUpdateCartQty }) => {

    const [quantity, setQuantity] = useState(item.quantity);
    const [variantData, setVariantData] = useState({});

    useEffect(()=>{
        item.selected_options.map(variant=> {
            variantData[variant.group_id] = variant.option_id;
        })
    }, [])

    const handleChange = (e) => {
        setQuantity(e.target.value)
    }

    return (
        <div className="cart">
            <div className="cart__product">
                <img src={item.variant.assets[0].url} alt={item.name} />
                <div className="cart__product__description">
                    <h4>{item.name}</h4>
                    <span>{item.selected_options[0].option_name} / {item.selected_options[1].option_name}</span>
                    <p style={{cursor: 'pointer'}} onClick={() => handleUpdateCartQty(item.id, quantity, variantData)}>Update</p>
                </div>

            </div>
            <div className="cart__item__price" >
                <form method="post" onSubmit={() => handleUpdateCartQty(item.id, quantity, variantData)} style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                    <input id="quantity" type="number" value={quantity} onChange={handleChange} style={{marginRight:'3em', width: '80px', height: '43px', textAlign: 'center', fontSize: '16px', fontWeight: 600}}/>
                    <span style={{marginLeft: '3em'}}>{item.line_total.formatted_with_symbol}</span>
                </form>
                
            </div>
        </div>
    )
}

export default CartItem;
