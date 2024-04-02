const TypeVertical = () => {
  return (
    <section className="self-stretch bg-gray-200 flex flex-col items-center justify-center pt-[152px] px-4 pb-[120px] box-border gap-[32px] max-w-full z-[1] text-center text-48xl text-whitesmoke font-inter mq450:pt-16 mq450:pb-[51px] mq450:box-border mq750:gap-[16px_32px] mq1050:pt-[99px] mq1050:pb-[78px] mq1050:box-border">
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-0 px-5 box-border max-w-full">
        <img
          className="w-[604px] relative rounded-2xl max-h-full object-cover max-w-[604px] mq750:max-w-full"
          loading="lazy"
          alt=""
          src="/image--lummi@2x.png"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center py-0 px-5 box-border gap-[40px] max-w-[880px] mq450:gap-[20px_40px] mq1050:max-w-full">
        <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
          <b className="self-stretch relative tracking-[-0.02em] leading-[70px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] mq450:text-21xl mq450:leading-[42px] mq1050:text-35xl mq1050:leading-[56px]">
            Control Your Data
          </b>
          <div className="self-stretch relative text-3xl leading-[29px] text-white mq450:text-lg mq450:leading-[23px]">
            Unified Dashboard Access
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-4 px-5 bg-darkcyan-200 w-[360px] rounded flex flex-row items-center justify-center box-border whitespace-nowrap max-w-full hover:bg-lightseagreen-100">
          <div className="w-[167px] relative text-lg leading-[150%] font-semibold font-inter text-white text-center flex items-center justify-center">{`See Plans & Pricing`}</div>
        </button>
      </div>
    </section>
  );
};

export default TypeVertical;
