import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/Toolbar.module.css';

export const Toolbar = () => {
  const router = useRouter();

  return (
    <>
    <Head>
        <title>YAB America News</title>
      </Head>
    <div className={styles.main}>
      <div onClick={() => router.push('/')}>Home</div>
      <div onClick={() => router.push('/news/1')}>News</div>
	<div onClick={() => window.location.href = 'https://yab-news.vercel.app/' }>More News sources</div>
    </div>
    </>
  );
};