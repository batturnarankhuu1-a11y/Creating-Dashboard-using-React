const navs = ["About Us", "Services", "Use Cases", "Pricing", "Blog"];

export const Header = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-360 h-17 px-25 flex justify-between items-center mt-15 mb-15 ">
        <div>
          <img src="/Logo.png"></img>
        </div>
        <div className="flex justify-center items-center gap-10">
          {navs.map((item) => {
            return <div key={item}>{item}</div>;
          })}

          <div className="px-8.75 py-5 border rounded-[14px]">
            Request a quote
          </div>
        </div>
      </div>
    </div>
  );
};
