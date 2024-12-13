"use client"
import type { NextPage } from 'next';
//import SnakeGame from './snake';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
const SnakeGame = dynamic(() => import('./snake'), {
  ssr: false // This ensures the component is not SSR'd
});


const Home: NextPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
        try {
            // Any initialization code can go here
            console.log("Home component mounted");
        } catch (error) {
            console.error("Error during Home component initialization:", error);
        }
    }
}, []);
    return (
      <main>
        <div className="flex flex-col items-center justify-center h-screen mx-auto max-w-xl px-6">  
          <h1 className="text-4xl font-bold mb-8 xanh-mono-font">A Perfect Snake AI</h1>
          <SnakeGame /> 
        </div> 
      </main>
    );
};

export default Home;