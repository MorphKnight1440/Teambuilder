
import Layout from './layout';
import './globals.css';
import Navbar from  './components/Navbar'
import SignIn from './sign-in/page';
import Link from 'next/link'

// dont know where to put this yet
import { Login } from "./Login";
import { Register } from "./Register";

import styles from './page.module.css'

export default function Home() {

  return (

    <main className={styles.main}>
      <SignIn/>
    </main>
  );
}