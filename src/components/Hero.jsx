import Image from 'next/image';
import field from '../../public/field1.webp';

function Hero() {
  return <Image src={field} alt='wheat field' fill cover='true' />;
}

export default Hero;
