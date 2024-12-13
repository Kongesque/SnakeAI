import type { NextPage } from 'next';
import SnakeGame from '../components/snake';


const Home: NextPage = () => {
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