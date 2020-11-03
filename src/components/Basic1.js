import React, { useState } from 'react'

const Basic1 = () => {
    const [product, setProduct] = useState({ name: '', price: '' });

    return (
        <>
            <form>
                <input type='text'
                    value={product.name}
                    onChange={e => setProduct({ ...product, name: e.target.value })} ></input>

                <input type='text'
                    value={product.price}
                    onChange={e => setProduct({ ...product, price: e.target.value })} ></input>
            </form>
            <h3>Product name is {product.name}</h3>
            <h3>Product price is {product.price}</h3>
        </>
    )
}

export default Basic1
