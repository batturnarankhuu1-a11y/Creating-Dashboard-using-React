export const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center border bg-black w-310.25 h-128.25 rounded-t-[15px]">
          <div className="flex gap-38.75">
            <div>
              <img src="/Logo1.png"></img>
            </div>
            <div className="flex text-white gap-9.75">
              <div>About us</div>
              <div>Services</div>
              <div>Use Cases</div>
              <div>Pricing</div>
              <div>Blog</div>
            </div>
            <div className="flex gap-5">
              <div>
                <img src="/Social icon1.png"></img>
              </div>
              <div>
                <img src="/Social icon2.png"></img>
              </div>
              <div>
                <img src="/Social icon3.png"></img>
              </div>
            </div>
          </div>
          <div className="flex py-16.5">
            <div className="text-white px-30.75 gap-6.75">
              <div className="bg-lime-300 text-black flex justify-center items-center rounded-[7px] w-fit gap-6.75">
                Contact us:
              </div>
              <div className="py-3.75">Email: info@positivus.com</div>
              <div className="py-3.75">Phone: 555-567-8901</div>
              <div>
                <div>Address: 1234 Main St</div>
                <div>Moonstone City, Stardust State 12345</div>
              </div>
            </div>
            <div className="flex justify-center items-center border bg-gray-600 w-158.5 h-46 gap-5 rounded-[10px]">
              <div className="text-white flex items-center border w-71.25 h-16.25 rounded-[10px] pl-8.75">
                Email
              </div>
              <div className="bg-lime-300 flex justify-center items-center border w-71.25 h-16.25 rounded-[10px]">
                Subscribe to news
              </div>
            </div>
          </div>
          <div className="text-white flex justify-between items-center gap-10">
            <div>© 2023 Positivus. All Rights Reserved.</div>
            <div>Privacy Policy</div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
