const TypeMegaMenuDivider = () => {
  return (
    <footer className="self-stretch bg-gray-200 flex flex-col items-start justify-start py-12 px-8 box-border gap-[32px] max-w-full text-left text-sm text-whitesmoke font-inter mq750:gap-[16px_32px]">
      <div className="w-full flex flex-row flex-wrap items-start justify-between max-w-[1200px] gap-[-2px] lg:max-w-full">
        <div className="flex flex-col items-start justify-start py-0 pr-[404px] pl-0 box-border gap-[24px] min-w-[248px] max-w-full mq450:pr-5 mq450:box-border mq750:pr-[202px] mq750:box-border">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <img
              className="h-8 w-8 relative"
              loading="lazy"
              alt=""
              src="/icon-3.svg"
            />
            <div className="relative leading-[150%] font-semibold inline-block min-w-[95px]">
              DashManager
            </div>
          </div>
          <div className="relative text-lg leading-[140%]">
            Simplified Data Control
          </div>
        </div>
        <div className="w-[600px] flex flex-row flex-wrap items-start justify-end py-0 pr-0 pl-1 box-border gap-[40px_38px] min-w-[280px] max-w-full text-white mq750:gap-[40px_19px]">
          <div className="flex-[0.8065] flex flex-col items-start justify-start py-0 pr-[73px] pl-0 box-border gap-[16px] min-w-[108px]">
            <div className="relative leading-[150%] font-semibold text-whitesmoke inline-block min-w-[65px]">
              Company
            </div>
            <div className="relative leading-[150%] inline-block min-w-[62px]">
              About Us
            </div>
            <div className="relative leading-[150%] inline-block min-w-[100px]">
              Open Positions
            </div>
            <div className="relative leading-[150%] inline-block min-w-[83px]">
              Latest News
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[49px] pl-0 box-border gap-[16px] min-w-[108px]">
            <div className="relative leading-[150%] font-semibold text-whitesmoke inline-block min-w-[54px]">
              Product
            </div>
            <div className="relative leading-[150%] inline-block min-w-[124px]">
              Real-time Updates
            </div>
            <div className="relative leading-[150%] inline-block min-w-[122px]">
              Integration Library
            </div>
            <div className="relative leading-[150%] inline-block min-w-[100px]">
              Press Releases
            </div>
          </div>
          <div className="flex-[0.8387] flex flex-col items-start justify-start py-0 pr-[69px] pl-0 box-border gap-[16px] min-w-[108px]">
            <div className="relative leading-[150%] font-semibold text-whitesmoke inline-block min-w-[58px]">
              Connect
            </div>
            <div className="relative leading-[150%] inline-block min-w-[104px]">
              @dashmanager
            </div>
            <div className="relative leading-[150%] inline-block min-w-[104px]">
              @dashmanager
            </div>
            <div className="relative leading-[150%] inline-block min-w-[82px]">
              User Stories
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-px relative bg-gray-100" />
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-xs text-white mq450:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="relative leading-[160%]">© DashManager Inc. 2024</div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[16px] text-sm text-whitesmoke">
          <div className="relative leading-[150%] inline-block min-w-[88px]">
            Terms of Use
          </div>
          <div className="relative leading-[150%] inline-block min-w-[92px]">
            Privacy Policy
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TypeMegaMenuDivider;
