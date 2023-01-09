import heroImgMobile from "../assets/images/image-web-3-mobile.jpg";
import heroImgDesktop from "../assets/images/image-web-3-desktop.jpg";

const Hero = () => {
  return (
    <section className="grid gap-y-6 lg:gap-y-2 lg:col-span-2 place-items-center lg:place-items-start">
      {/* HERO IMG */}
      <div className="max-w-md md:max-w-none md:w-[100%] md:h-[300px]">
        <img
          src={heroImgMobile}
          alt="hero-img-mobile"
          className="h-full w-full md:hidden"
        />
        <img
          src={heroImgDesktop}
          alt="hero-img-mobile"
          className="h-full w-full hidden md:block"
        />
      </div>
      {/* END HERO IMG */}

      {/* INFO */}
      <div className="grid gap-y-4 md:grid-cols-2 md:gap-x-14 place-items-start">
        <header>
          <h1 className="text-5xl font-extrabold">
            The Bright Future of Web 3.0?
          </h1>
        </header>
        {/* END HEADER */}

        <div>
          <p className="text-dark-grayish-blue">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>

          <button className="bg-soft-red text-off-white text-center py-2 px-6 uppercase tracking-widest mt-7 hover:bg-very-dark-blue duration-75 md:mx-auto">
            read more
          </button>
        </div>
      </div>
      {/* END INFO */}
    </section>
  );
};

export default Hero;
