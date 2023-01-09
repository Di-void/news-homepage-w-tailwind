import { New, Footer, Hero } from "../components";

const HomePage = () => {
  return (
    <section className="p-4 grid gap-y-8 lg:gap-y-10 lg:grid-cols-3 lg:gap-x-6">
      <Hero />
      <New />
      <Footer />
    </section>
  );
};

export default HomePage;
