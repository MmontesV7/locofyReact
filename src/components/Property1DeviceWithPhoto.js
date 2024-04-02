const Property1DeviceWithPhoto = () => {
  return (
    <section className="self-stretch bg-gray-200 flex flex-row flex-wrap items-start justify-start py-0 pr-0.5 pl-0 box-border max-w-full text-left text-lg text-white font-inter">
      <div className="flex-1 flex flex-col items-start justify-start pt-[194.9px] px-0 pb-0 box-border min-w-[373px] max-w-full mq450:pt-[127px] mq450:box-border">
        <div className="self-stretch flex flex-col items-center justify-center py-8 px-20 box-border min-w-[280px] max-w-full mq750:pl-10 mq750:pr-10 mq750:box-border">
          <div className="w-full flex flex-col items-start justify-center gap-[16px] max-w-[480px] mq750:max-w-full">
            <b className="self-stretch relative text-19xl tracking-[-0.02em] leading-[45px] text-whitesmoke mq450:text-4xl mq450:leading-[27px] mq1050:text-11xl mq1050:leading-[36px]">
              Easy Integration Steps
            </b>
            <div className="w-full flex flex-row items-center justify-start gap-[8px] min-w-[88px] max-w-[400px] mq450:flex-wrap mq450:max-w-full">
              <img
                className="h-8 w-8 relative"
                loading="lazy"
                alt=""
                src="/icon--icon-2.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start min-w-[234px] max-w-full">
                <div className="self-stretch relative leading-[140%] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                  Connect your data sources easily
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-start gap-[8px] min-w-[88px] max-w-[400px] mq450:flex-wrap mq450:max-w-full">
              <img
                className="h-8 w-8 relative"
                loading="lazy"
                alt=""
                src="/icon--icon-3.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start min-w-[234px] max-w-full">
                <div className="self-stretch relative leading-[140%] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                  Customize your dashboard view
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-start gap-[8px] min-w-[88px] max-w-[400px] mq450:flex-wrap mq450:max-w-full">
              <img
                className="h-8 w-8 relative"
                alt=""
                src="/icon--icon-4.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start min-w-[234px] max-w-full">
                <div className="self-stretch relative leading-[140%] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                  Analyze your data with insights
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-darkslategray flex flex-col items-start justify-start pt-0 px-0 pb-12 box-border min-w-[280px] min-h-[640px] max-w-full ml-[-2px] mq750:pb-[31px] mq750:box-border">
        <div className="self-stretch h-[551.8px] relative">
          <img
            className="absolute top-[0px] left-[0px] w-[640px] h-[440px] overflow-hidden object-cover mix-blend-overlay"
            alt=""
            src="/image-background--lummi@2x.png"
          />
          <div className="absolute top-[48px] left-[190px] w-[260px] h-[503.8px] flex flex-row items-start justify-start z-[1]">
            <div className="h-[518px] w-[271.6px] absolute !m-[0] right-[-5.8px] bottom-[-7.4px]">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                alt=""
                src="/iphone-14--starlight-1@2x.png"
              />
              <img
                className="absolute top-[28.8px] left-[31.1px] w-[210.9px] h-[456px] object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/screen-content--lummi@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <button className="cursor-pointer [border:none] py-3 pr-6 pl-7 bg-gray-200 w-[174px] rounded flex flex-row items-start justify-start box-border gap-[8px]">
            <div className="flex-1 relative text-xs leading-[160%] font-semibold font-inter text-whitesmoke text-center inline-block min-w-[98px]">
              Explore Features
            </div>
            <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
              <img className="w-4 h-4 relative" alt="" src="/icon-2.svg" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Property1DeviceWithPhoto;
