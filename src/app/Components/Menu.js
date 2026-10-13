export const Menu = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center border rounded-[14px] bg-black mx-48 my-10 w-308.5 h-81.5">
        <div className="flex flex-col px-17.5 py-15 gap-5">
          <div className="text-white gap-5">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </div>
          <div className="flex gap-3.75">
            <div className="text-lime-300 flex justify-center items-center">
              Learn more
            </div>
            <div>
              <img src="/Icon2.png"></img>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-17.5 py-15 gap-5">
          <div className="text-white gap-5">
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </div>
          <div className="flex gap-3.75">
            <div className="text-lime-300 flex justify-center items-center">
              Learn more
            </div>
            <div>
              <img src="/Icon2.png"></img>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-17.5 py-15 gap-5">
          <div className="text-white gap-5">
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </div>
          <div className="flex gap-3.75">
            <div className="text-lime-300 flex justify-center items-center">
              Learn more
            </div>
            <div>
              <img src="/Icon2.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
