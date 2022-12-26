import css from '../styles/Cart.module.css';
import Layout from '../components/Layout';
import { useStore } from '../store/store';
import { urlFor } from '../lib/client';
import { useState } from 'react';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import OrderModal from '../components/OrderModal';
import { useRouter } from 'next/router';

export default function Cart() {
  const CartData = useStore((state) => state.cart);
  const removePizza = useStore((state) => state.removePizza);
  const [PaymetMethod, setPaymentMethod] = useState(null);
  const [Order, setOrder] = useState(
    typeof window !== 'undefined' && localStorage.getItem('order')
  );
  const handleRemove = (i) => {
    removePizza(1);
    toast.error('Producto eleminado');
  };
  const router = useRouter();

  const total = () =>
    CartData.pizzas.reduce((a, b) => a + b.quantity * b.price, 0);

  const handleOnDelivery = () => {
    setPaymentMethod(0);
    typeof window !== 'undefined' && localStorage.setItem('total', total());
  };

  const handleCheckout = async () => {
    typeof window !== 'undefined' && localStorage.setItem('total', total());
    setPaymentMethod(1);
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(CartData.pizzas),
    });
    if (response.status === 500) return;

    const data = await response.json();
    toast.loading('Redirecting...');
    router.push(data.url);
  };

  return (
    <Layout>
      <div className={css.container}>
        <div className={css.details}>
          <table className={css.table}>
            <thead>
              <th>Pizza</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th></th>
            </thead>
            <tbody className={css.tbody}>
              {CartData.pizzas.length > 0 &&
                CartData.pizzas.map((pizza, i) => {
                  const src = urlFor(pizza.image).url();
                  return (
                    <tr key={i}>
                      <td className={css.imageTd}>
                        <Image
                          loader={() => src}
                          src={src}
                          alt=""
                          objectFit="cover"
                          width={85}
                          height={85}
                        />
                      </td>
                      <td>{pizza.name}</td>
                      <td>{pizza.price}</td>
                      <td>{pizza.quantity}</td>
                      <td>{pizza.price * pizza.quantity}</td>
                      <td
                        style={{ color: 'red', cursor: 'pointer' }}
                        onClick={() => handleRemove(i)}
                      >
                        X
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className={css.cart}>
          <span>Carrito</span>
          <div className={css.CartDetails}>
            <div>
              <span>Productos</span>
              <span>{CartData.pizzas.length}</span>
            </div>
            <div>
              <span>Total</span>
              <span>${total()}</span>
            </div>
          </div>

          {!Order && CartData.pizzas.length > 0 ? (
            <div className={css.buttons}>
              <button className="btn" onClick={handleOnDelivery}>
                Pagar con delivery
              </button>
              <button className="btn" onClick={handleCheckout}>
                Pagar Ahora
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <Toaster />
      <OrderModal
        opened={PaymetMethod === 0}
        setOpened={setPaymentMethod}
        PaymetMethod={PaymetMethod}
      />
    </Layout>
  );
}
