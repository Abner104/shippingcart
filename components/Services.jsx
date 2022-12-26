import css from '../styles/Services.module.css';
import Image from 'next/image';
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';

export default function Services() {
  return (
    <>
      <div className={css.heading}>
        <span>LO QUE SERVIMOS</span>
        <span>tu comida favorita</span>
        <span>Socio de entrega</span>
      </div>

      <div className={css.services}>
        <div className={css.feature}>
          <div className={css.ImageWapper}>
            <Image src={s1} alt="" objetFit="cover" layout="intrinsic" />
          </div>
          <span>Facil de ordenar</span>
          <span>Orden rapida</span>
        </div>
        <div className={css.feature}>
          <div className={css.ImageWapper}>
            <Image src={s2} alt="" objetFit="cover" layout="intrinsic" />
          </div>
          <span>Facil de ordenar</span>
          <span>Orden rapida</span>
        </div>
        <div className={css.feature}>
          <div className={css.ImageWapper}>
            <Image src={s3} alt="" objetFit="cover" layout="intrinsic" />
          </div>
          <span>Facil de ordenar</span>
          <span>Orden rapida</span>
        </div>
      </div>
    </>
  );
}
