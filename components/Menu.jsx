import css from '../styles/Menu.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../lib/client';
export default function Menu({ pizzas }) {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>Nuestro menu</span>
        <span>Menu que siempre</span>
        <span>Hace que te enamore</span>
      </div>

      <div className={css.menu}>
        {pizzas.map((pizza, id) => {
          const src = urlFor(pizza.image).url();

          return (
            <div className={css.pizza} key={id}>
              <Link href={`./pizza/${pizza.slug.current}`}>
                <div className={css.ImageWrapper}>
                  <Image
                    loader={() => src}
                    src={src}
                    alt=""
                    objectfit="cover"
                    layout="fill"
                  />
                </div>
              </Link>

              <span>{pizza.name}</span>
              <span>
                <span style={{ color: 'red' }}>$</span>
                {pizza.price[0]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
