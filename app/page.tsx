"use client";
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

// import SnakeGame from './snake'; 
const SnakeGame = dynamic(() => import('./snake'), { ssr: false }); 

const Home: NextPage = () => {
  return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen mx-auto max-w-xl px-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 xanh-mono-font">A Perfect Snake AI</h1>
        <SnakeGame />
      </div>
    </main>
  );
};

export default Home;
