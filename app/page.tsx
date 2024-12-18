"use client";
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

// import SnakeGame from '../components/snake';
const SnakeGame = dynamic(() => import('../components/snake'), { ssr: false });

const Home: NextPage = () => {
  return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen mx-auto max-w-2xl px-6">
        <h1 className="text-3xl sm:text-4xl font-bold xanh-mono-font mb-8">A Perfect Snake AI</h1>
        <SnakeGame />
        <p className="geist-mono-font text-center text-sm sm:text-base mt-8 mb-4">
          Uses A* pathfinding and a Hamiltonian cycle for flawless play.
        </p>
        <a
          href="https://github.com/Kongesque/perfect-snakeAI"
          className="inline-block hover:text-accent transition-colors geist-mono-font underline text-sm sm:text-base"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source
        </a>
      </div>
    </main>
  );
};

export default Home;
