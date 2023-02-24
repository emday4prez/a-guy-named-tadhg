import Head from 'next/head';
import Image from 'next/image';
import SocialBar from '../components/SocialBar';
import Header from '../components/Header';
import Hero from '../components/Hero';
export default function Home() {
  return (
    <>
      <Head>
        <title>A Guy Named Tadhg</title>
        <meta name='description' content='A book by Max Schwartz' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-col'>
        <header>
          <SocialBar />
          <Header />
        </header>
        <Hero />
      </main>
    </>
  );
}
