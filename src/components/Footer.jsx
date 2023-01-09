import { forFooter } from "../lib/articles";

const Footer = () => {
  return (
    <footer className="grid justify-items-center gap-y-6 md:grid-cols-2 md:gap-x-4 lg:gap-x-14 xl:grid-cols-3 lg:col-span-3">
      {forFooter.map((item, index) => {
        const itemNum = index + 1;
        return (
          <div key={item.id} className="flex gap-x-6 max-w-[500px]">
            {/* IMG */}
            <div className="basis-1/4">
              <img
                src={item.img}
                alt="article image"
                className="w-full h-full object-center md:object-none lg:object-fill"
              />
            </div>
            {/* END IMG */}

            <div className="basis-3/4 flex flex-col gap-y-2">
              <h1 className="text-grayish-blue text-3xl font-bold">{`0${itemNum}`}</h1>
              <h3 className="text-very-dark-blue font-extrabold text-xl hover:cursor-pointer hover:text-soft-orange transition-colors duraton-75">
                {item.header}
              </h3>
              <p className="text-dark-grayish-blue">{item.text}</p>
            </div>
          </div>
        );
      })}
    </footer>
  );
};

export default Footer;
