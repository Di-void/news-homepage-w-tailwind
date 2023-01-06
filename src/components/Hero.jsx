import heroImgMobile from "../assets/images/image-web-3-mobile.jpg";
import heroImgDesktop from "../assets/images/image-web-3-desktop.jpg";
import New from "./New";
import Footer from "./Footer";

const Hero = () => {
  return (
    <section className="p-4 grid gap-y-8">
      {/* HERO */}
      <section className="grid gap-y-6">
        {/* HERO IMG */}
        <div className="">
          <img
            src={heroImgMobile}
            alt="hero-img-mobile"
            className="h-full w-full"
          />
        </div>
        {/* END HERO IMG */}

        {/* INFO */}
        <div className="grid gap-y-4">
          <header>
            <h1 className="text-5xl font-extrabold">
              The Bright Future of Web 3.0?
            </h1>
          </header>
          {/* END HEADER */}

          <div className="">
            <p className="text-dark-grayish-blue">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>

            <button className="bg-soft-red text-off-white text-center py-2 px-6 uppercase tracking-widest mt-7 hover:bg-very-dark-blue duration-75">
              read more
            </button>
          </div>
        </div>
        {/* END INFO */}

        {/*  */}
      </section>
      {/* END HERO */}

      <New />
      <Footer />
    </section>
  );
};

export default Hero;
