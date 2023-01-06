import { forFooter } from "../lib/articles";

const Footer = () => {
  return (
    <footer className="grid gap-y-6">
      {forFooter.map((item, index) => {
        const itemNum = index + 1;
        return (
          <div key={item.id} className="flex gap-x-6">
            {/* IMG */}
            <div className="basis-1/4">
              <img
                src={item.img}
                alt="article image"
                className="w-full h-full"
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
