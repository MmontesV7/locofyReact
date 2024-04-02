const TypeFloatingBox = () => {
  return (
    <section className="self-stretch bg-gray-200 flex flex-row items-center justify-center py-24 px-5 box-border max-w-full text-center text-32xl text-gray-200 font-inter mq450:pt-[62px] mq450:pb-[62px] mq450:box-border mq750:gap-[48px_24px]">
      <div className="w-[1024px] rounded-3xl bg-whitesmoke flex flex-col items-center justify-center py-16 px-5 box-border max-w-[1024px] mq450:gap-[20px_40px] mq1050:max-w-full">
        <div className="w-[800px] flex flex-col items-center justify-center gap-[12px] max-w-[800px] mq1050:max-w-full">
          <b className="self-stretch relative tracking-[-0.02em] leading-[120%] mq450:text-12xl mq450:leading-[37px] mq1050:text-22xl mq1050:leading-[49px]">
            Streamline Your Analytics
          </b>
          <div className="self-stretch relative text-3xl leading-[29px] mq450:text-lg mq450:leading-[23px]">
            All metrics in one place
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypeFloatingBox;
