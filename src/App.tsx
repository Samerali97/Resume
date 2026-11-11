import Background from "./components/Background";
import HomeContainer from "./containers/HomeContainer";

const App = () => {
  return (
    <>
      <Background />

      <main className="relative z-10">
        <HomeContainer />
      </main>
    </>
  );
};

export default App;