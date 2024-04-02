const Property1Simple = () => {
  return (
    <section className="self-stretch bg-lightseagreen-300 flex flex-row flex-wrap items-start justify-start max-w-full text-center text-19xl text-white font-inter">
      <div className="flex-1 flex flex-row items-start justify-center py-[127px] px-5 box-border min-w-[322px] max-w-full mq450:pt-[54px] mq450:pb-[54px] mq450:box-border mq1050:pt-[83px] mq1050:pb-[83px] mq1050:box-border">
        <div className="w-[480px] rounded-2xl bg-gray-200 flex flex-col items-start justify-start p-8 box-border gap-[16px] max-w-[480px] mq750:pt-[21px] mq750:pb-[21px] mq750:box-border mq750:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start pt-[104px] px-0 pb-0 box-border relative gap-[8px] max-w-full">
            <img
              className="w-24 h-24 absolute !m-[0] top-[0px] left-[calc(50%_-_48px)] rounded-181xl overflow-hidden shrink-0 object-contain"
              loading="lazy"
              alt=""
              src="/image--lummi-1@2x.png"
            />
            <b className="self-stretch relative tracking-[-0.02em] leading-[45px] text-whitesmoke mq450:text-4xl mq450:leading-[27px] mq1050:text-11xl mq1050:leading-[36px]">
              Create Account
            </b>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full text-lg">
              <div className="flex-1 relative leading-[140%] inline-block max-w-full">
                Join Our Platform!
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
              <button className="cursor-pointer py-4 px-5 bg-darkslategray flex-1 rounded box-border flex flex-row items-start justify-center gap-[12px] max-w-full border-[1px] border-solid border-dimgray">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/google-icon.svg"
                />
                <div className="w-[132px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
                  <div className="self-stretch relative text-sm leading-[150%] font-semibold font-inter text-whitesmoke text-center">
                    Signup with Google
                  </div>
                </div>
              </button>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[24px] text-xs mq450:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[115px]">
                <div className="self-stretch h-px relative bg-dimgray overflow-hidden shrink-0" />
              </div>
              <div className="w-[13px] relative leading-[160%] font-semibold flex items-center justify-center min-w-[13px] mq450:w-full mq450:h-[13px]">
                or
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[115px]">
                <div className="self-stretch h-px relative bg-dimgray overflow-hidden shrink-0" />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[8px] max-w-full text-left text-sm text-whitesmoke">
            <div className="self-stretch rounded flex flex-col items-start justify-center gap-[4px] max-w-full">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Enter Email Address
              </div>
              <div className="self-stretch rounded bg-gray-200 box-border flex flex-row items-center justify-start py-4 px-[15px] max-w-full text-white border-[1px] border-solid border-dimgray">
                <div className="flex-1 flex flex-row items-center justify-start py-0 px-1 box-border max-w-full">
                  <div className="w-[179px] relative leading-[150%] flex items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    Choose a Strong Password
                  </div>
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-4 px-5 bg-darkcyan-200 self-stretch rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-lightseagreen-100">
              <div className="w-[167px] relative text-lg leading-[150%] font-semibold font-inter text-white text-center flex items-center justify-center">{`See Plans & Pricing`}</div>
            </button>
          </div>
          <div className="self-stretch relative text-xs leading-[160%]">
            Accept Terms and Privacy Policy
          </div>
        </div>
      </div>
    </section>
  );
};

export default Property1Simple;
