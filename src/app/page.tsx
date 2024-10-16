import Image from 'next/image';

const Home = () => {
  return (
    <div className='flex min-h-svh justify-center items-center'>
      <div className='w-1/2 text-center'>
        <Image
          className='dark:invert mb-8 mx-auto'
          src='https://nextjs.org/icons/next.svg'
          alt='Next.js logo'
          width={180}
          height={38}
          priority
        />
        <ol className='text-center font-[family-name:var(--font-geist-mono)]'>
          <li className='mb-2'>Get started by editing src/app/page.tsx</li>
          <li>Save and see your changes instantly.</li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
