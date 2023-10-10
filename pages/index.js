import styles from '../styles/Home.module.scss'
import Nav from '../components/Nav/Nav.jsx';
import Wallets from '../components/Wallets/Wallets.jsx';
import Works from '../components/Works/Works.jsx';
import { useEffect } from 'react';
import { useFlow } from '../context/FlowContext';
import Link from 'next/link';

function Home(props) {
  const { desautenticar } = useFlow();

  useEffect(() => {
    desautenticar();
  }, []);

  return (
    <div className={styles.app}>
      <main>
        <h1>Emerald <span style={{ color: '#fff' }}>ID</span></h1>
        <p>Vincule o seu <span style={{ color: '#5865F2' }}>Discord</span> a todas as suas carteiras <span style={{ color: '#16ff99' }}>Flow</span>, para que você só precise verificar a sua carteira uma vez.</p>
        <div className={styles.margin10}>
          <Link href="/me">
            <a style={{ color: '#37dabc', borderColor: '#37dabc' }}>Ver meus IDs</a>
          </Link>
          <Link href="/me">
            <a style={{ color: '#fff', borderColor: '#fff' }}>Criar um ID</a>
          </Link>
        </div>
      </main>
      <Wallets />
      <Works />
    </div>
  )
}

export default Home;
