import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import axios from 'axios';
import { GetServerSideProps } from 'next'

export default function Home(props: any) {
  console.log(props);
  
  return <div>hello guys</div>;
}


