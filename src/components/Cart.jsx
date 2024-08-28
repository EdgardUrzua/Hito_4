import { useState } from 'react';
import { pizzaCart } from '../utils/pizzas';
import formatCurrency from '../utils/formatcurrency';

function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const handleIncrease = (id) => {
    const updatedCart = cart.map(pizza => 
      pizza.id === id ? { ...pizza, cantidad: pizza.cantidad + 1 } : pizza
    );
    setCart(updatedCart);
  };

  const handleDecrease = (id) => {
    const updatedCart = cart
      .map(pizza => pizza.id === id ? { ...pizza, cantidad: pizza.cantidad - 1 } : pizza)
      .filter(pizza => pizza.cantidad > 0);
    setCart(updatedCart);
  };

  const total = cart.reduce((sum, pizza) => sum + pizza.precio * pizza.cantidad, 0);

  return (
    <div className="container mt-4">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map(pizza => (
            <div key={pizza.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={pizza.imagen} className="img-fluid rounded-start" alt={pizza.nombre} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{pizza.nombre}</h5>
                    <p className="card-text">Precio: {formatCurrency(pizza.precio)}</p>
                    <p className="card-text">Cantidad: {pizza.cantidad}</p>
                    <button className="btn btn-secondary me-2" onClick={() => handleDecrease(pizza.id)}>-</button>
                    <button className="btn btn-primary" onClick={() => handleIncrease(pizza.id)}>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <h3>Total: {formatCurrency(total)}</h3>
          <button className="btn btn-success">Pagar</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
