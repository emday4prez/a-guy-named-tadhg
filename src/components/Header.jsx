import Link from 'next/link';

function Header() {
  return (
    <div className='flex flex-col bg-black text-center text-white justify-center items-center'>
      <h1 className='text-7xl font-extrabold tracking-tighter'>MAX SCHWARTZ</h1>
      <div className='flex flex-row min-w-full items-center justify-evenly px-6 text-2xl tracking-tight'>
        <Link href='/'>
          <h3>home</h3>
        </Link>
        <Link href='/'>
          <h3>about</h3>
        </Link>
        <Link href='/'>
          <h3>contact</h3>
        </Link>
      </div>
    </div>
  );
}

export default Header;
