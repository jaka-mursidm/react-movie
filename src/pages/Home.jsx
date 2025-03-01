import { useState } from "react";
import Search from "../components/Search";
import TrendMovies from "../api/TrendMovies";
import AllMovies from "../api/AllMovies";
const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <header className="text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold font-api-primary">
          Explore <span className="text-gradient"> Endless</span> Cinematic
          Stories
        </h1>
      </header>
      <main className="mb-12">
        <section id="trending">
          <h2 className="text-2xl md:text-3xl text-center md:text-left text-white font-api-primary font-bold mb-5">
            <span className="text-gradient">Trending</span> Movies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4">
            <TrendMovies display={"trend"} />
          </div>
        </section>
        <section id="all" className="mt-14">
          <div className="flex justify-between items-center gap-5 mb-6">
            <div className="grow">
              <h2 className="text-2xl md:text-3xl text-white text-center md:text-left font-api-primary font-bold">
                <span className="text-gradient">All</span> Movies
              </h2>
            </div>
            <div className="grow-2">
              <Search
                searchInput={searchInput}
                setSearchInput={setSearchInput}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
            <AllMovies query={searchInput} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
