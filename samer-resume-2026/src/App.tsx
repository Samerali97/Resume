import Background from "./components/Background";

const App = () => {
  return (
    <>
      <Background />
      <main className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-text text-4xl font-bold md:text-6xl">
            Hi, I'm Samer.
          </h1>

          <p className="text-muted mt-4">
            Software Engineer | React | TypeScript
          </p>

          <button className="bg-primary hover:bg-primary-hover mt-8 rounded-xl px-6 py-3 font-semibold text-white transition">
            Explore My Experience
          </button>
        </div>
      </main>
    </>
  );
};

export default App;
