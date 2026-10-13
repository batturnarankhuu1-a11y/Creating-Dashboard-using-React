export const Hi = () => {
  return (
    <div className="flex justify-center items-center pb-35">
      <div className="w-310 h-193.25 flex justify-end items-center border rounded-[14px] mx-25">
        <div children className="flex flex-col gap-8.75 px-25">
          <div className="flex gap-8.75">
            <div className="flex items-center gap-3.75">
              <div>
                <img src="/Radiobutton.png"></img>
              </div>
              <div>Say Hi</div>
            </div>
            <div className="flex items-center gap-3.75">
              <div>
                <img src="/Radiobutton1.png"></img>
              </div>
              <div>Get a Quote</div>
            </div>
          </div>
          <div>
            <div className="pb-3">Name</div>
            <div className="flex items-center border rounded-[10px] w-139 h-14.75 px-7.5 py-4.5">
              Name
            </div>
          </div>
          <div>
            <div className="pb-3">Email*</div>
            <div className="flex items-center border rounded-[10px] w-139 h-14.75 px-7.5 py-4.5">
              Email
            </div>
          </div>
          <div>
            <div className="pb-3">Message</div>
            <div className="flex items-center border rounded-[10px] w-139 h-14.75 px-7.5 py-4.5">
              Message
            </div>
          </div>
          <div className="px-8.75 py-5  flex justify-center items-center border rounded-[14px] bg-black text-white w-139 h-17">
            Send Message
          </div>
        </div>
        <div className="flex justify-end items-end relative left-56.5">
          <img src="/Illustration (4).png"></img>
        </div>
      </div>
    </div>
  );
};
