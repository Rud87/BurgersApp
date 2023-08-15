import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <>
      <Head>
        <title>Fat burgers | home</title>
        <meta name="title" content="Fat burgers"/>
      </Head>
      <div className={styles.container}>
        <h1 className={`${styles.title} font-effect-fire-animation`}>The Fattest Burger!</h1>
        <div className={styles.mainImage}>
          <Image src="/fatburger.png" alt="fat burger" width={400} height={300} />
        </div>
        <p className={styles.text}>What is the perfect burger? Fresh lettuce, soft buns, juicy meat. You can argue about other components of the filling, because this is a matter of taste.</p>
        <p className={styles.text}>There are a couple of other factors that affect appetite: prices, quality of service, the right atmosphere of the establishment.</p>
        <Link href="/burgers/">
          <a className={styles.btn}>All burgers</a>
        </Link>
      </div>
    </>
  );
}

export default Home;