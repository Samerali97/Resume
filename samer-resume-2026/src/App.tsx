import Background from "./components/Background";

const App = () => {
  return (
    <>
      <Background />
      <main className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text md:text-6xl">
            Hi, I'm Samer.
          </h1>

          <p className="mt-4 text-muted">
            Software Engineer | React | TypeScript
          </p>

          <button className="mt-8 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-hover">
            Explore My Experience
          </button>
        </div>
      </main>
    </>
  )
}

export default App
