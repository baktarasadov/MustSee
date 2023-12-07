import Button from "./components/UI/button";
import Input from "./components/UI/input";
import Header from "./components/layout/header";
import MovieList from "./components/movie/movieList";

function App() {
  return (
    <>
      <Header />
      <main className="mt-8">
        <div className="w-10/12 mx-auto">
          <div>
            <Input
              type="text"
              id="search"
              placeholder="Search Movie..."
              className="h-8 w-[300px] mr-2"
            />
            <Button className=" w-[70px] bg-[green] text-white">Add</Button>
          </div>
          <div className="mt-10">
            <MovieList />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
