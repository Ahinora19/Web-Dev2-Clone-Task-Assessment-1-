
import "./App.css";

const movies = [
  {
    title: "Who Framed Roger Rabbit",
    image: "who-framed-roger-rabbit.jpg",
    description: "In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery."
  },
  {
    title: "Hook",
    image: "hook.jpg",
    description: "Rediscover Neverland in this thrilling twist on Peter Pan, where a grown-up Peter must rescue his children."
  },
  {
    title: "La La Land",
    image: "la-la-land.jpg",
    description: "Love, dreams, and the magic of Los Angeles take centre stage in this musical romance."
  },
  {
    title: "Barbie",
    image: "barbie.jpg",
    description: "Barbie sets off on an extraordinary adventure beyond the familiar world of Barbie Land."
  },
  {
    title: "Hidden Figures",
    image: "hidden-figures.jpg",
    description: "The inspiring story of three brilliant women whose work helped transform NASA's space programme."
  },
  {
    title: "Palm Springs",
    image: "palm-springs.jpg",
    description: "An unexpected romance unfolds when two wedding guests find themselves caught in a time loop."
  }
];

function App() {
  return (
    <>
      <header className="site-header">
        <h1>watch.it</h1>

        <nav>
          <a href="#action">Action</a>
          <a href="#comedy">Comedy</a>
          <a href="#romance">Romance</a>
          <a href="#drama">Drama</a>
        </nav>

        <button className="search-button">SEARCH</button>
      </header>

      <main className="movie-grid">
        {movies.map((movie, index) => (
          <article className={`movie-card movie-${index + 1}`} key={movie.title}>
            <img
              src={`/assets/${movie.image}`}
              alt={`${movie.title} movie poster`}
            />

            <div className="movie-content">
              <p>{movie.description}</p>
              <button className="watch-button">WATCH NOW</button>
            </div>
          </article>
        ))}
      </main>
    </>
  );
}

export default App;
