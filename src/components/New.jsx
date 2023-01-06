import { forNew } from "../lib/articles";

const New = () => {
  return (
    <div className="bg-very-dark-blue p-4">
      <header>
        <h1 className="text-soft-orange text-3xl font-bold">New</h1>
      </header>

      <div className="text-grayish-blue divide-y divide-grayish-blue">
        {forNew.map((item) => {
          return (
            <div className="py-6" key={item.id}>
              <h2 className="font-bold text-off-white text-xl hover:cursor-pointer hover:text-soft-orange transition-colors duraton-75">
                {item.header}
              </h2>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default New;
