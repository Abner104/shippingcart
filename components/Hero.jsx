import Image from 'next/image';
import css from '../styles/Hero.module.css';
import Cherry from '../assets/Cherry.png';
import HeroImage from '../assets/HeroImage.png';
import { UilPhone } from '@iconscout/react-unicons';
import Pizza1 from '../assets/p1.jpg';
export default function Hero() {
  return (
    <div className={css.container}>
      <div className={css.left}>
        <div className={css.cherryDiv}>
          <span>Mas rapida</span>
          <Image src={Cherry} alt="" width={40} height={25} />
        </div>

        <div className={css.heroText}>
          <span>Ser la mas rapida</span>
          <span>En la entrega</span>
          <span>
            Tu <span style={{ color: 'red' }}>pizza</span>
          </span>
        </div>

        <span className={css.miniText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magni
          architecto aut quibusdam? Ullam exercitationem amet delectus harum
          alias laboriosam.
        </span>

        <button className={`btn ${css.btn}`}>Empezar</button>
      </div>

      <div className={css.right}>
        <div className={css.imageContainer}>
          <Image src={HeroImage} alt="" layout="intrinsic" />
        </div>

        <div className={css.ContactUs}>
          <span>Contacto</span>
          <div>
            <UilPhone color="white" />
          </div>
        </div>

        <div className={css.Pizza}>
          <div>
            <Image src={Pizza1} alt="" objectFit="cover" layout="intrinsic" />
          </div>
          <div className={css.details}>
            <span>Italian Pizza</span>
            <span>$7.400</span>
          </div>
        </div>
      </div>
    </div>
  );
}
