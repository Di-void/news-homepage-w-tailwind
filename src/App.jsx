import { Navbar } from "./components";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <main className="md:py-6 md:px-8 lg:py-10 lg:px-12">
      <Navbar />
      <HomePage />
    </main>
  );
}

export default App;
