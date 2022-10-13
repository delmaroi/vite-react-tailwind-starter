import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/layout/Header';

const Home = () => {
  return (
    <>
      <Header title="Home" />
      <main>
        <div className="py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-center p-2 font-medium text-center">
            <span>Welcome, add some first campaign</span>
            <div className="flex items-baseline ml-10">
              <Link key="Campaign" to="/campaign" className="px-3 py-2 text-blue-400 rounded-md">
                Campaign Page
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
