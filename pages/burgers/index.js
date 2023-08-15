import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Burgers.module.css';

export const getStaticProps = async () => {
  try {
    const res = await fetch(' http://localhost:5000/items');
    const text = await res.text(); 
    console.log('Raw Response:', text);

    const data = JSON.parse(text);
    return {
      props: { burgers: data }
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { burgers: [] } 
    };
  }
};

const Burgers = ({ burgers}) => {
  return (
    <div>
      <h1>Our Burgers</h1>
      {burgers.map(burger => (
        <Link href={`/burgers/${burger.id}`} key={burger.id}>
          <a className={styles.burgerCard}>
            <div className={styles.imageContainer}>
              <Image 
                src={`${burger.image}`} 
                alt={`${burger.name}`} 
                width="100%" 
                height="100%" 
                layout="responsive" 
                objectFit="cover"
              />
            </div>
            <div>
              <h3>{ burger.name }</h3>
              <p>{ burger.desc }</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Burgers;