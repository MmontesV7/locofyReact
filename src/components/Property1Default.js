import Plan from "./Plan";

const Property1Default = () => {
  return (
    <section className="self-stretch bg-gray-200 flex flex-col items-center justify-center py-[120px] px-10 box-border gap-[40px] max-w-full text-center text-32xl text-whitesmoke font-inter mq450:pt-[51px] mq450:pb-[51px] mq450:box-border mq750:gap-[20px_40px] mq1050:pt-[78px] mq1050:pb-[78px] mq1050:box-border">
      <div className="w-full flex flex-col items-center justify-center min-w-[304px] max-w-[720px] mq750:gap-[20px_40px] mq750:max-w-full">
        <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] mq450:text-12xl mq450:leading-[37px] mq1050:text-22xl mq1050:leading-[49px]">
            Pricing Plans
          </h1>
          <h2 className="m-0 self-stretch relative text-3xl leading-[29px] font-normal font-inherit text-white mq450:text-lg mq450:leading-[23px]">
            Choose a plan that suits your needs
          </h2>
        </div>
      </div>
      <div className="w-full flex flex-row flex-wrap items-center justify-center gap-[16px_14px] max-w-[1200px] text-left text-19xl lg:max-w-full">
        <Plan
          iconIcon="/icon--icon.svg"
          title="Starter"
          shortDescription="Ideal for startups and SMBs"
          prop="$12"
          listItem="Essential Features"
          listItem1="10 GB of Storage"
          listItem2={`Email & Chat Support`}
          listItem3="Basic Analytics Suite"
          cTA="Select Starter Plan"
        />
        <div className="flex-1 rounded-2xl bg-gray-200 box-border flex flex-col items-start justify-center pt-4 pb-10 pr-[16.3px] pl-8 relative gap-[24px] min-w-[256px] min-h-[476px] max-w-full border-[2px] border-solid border-darkturquoise mq450:pt-5 mq450:pb-[26px] mq450:box-border">
          <div className="w-[325.3px] flex flex-col items-start justify-start gap-[4px] max-w-full">
            <img
              className="w-8 h-8 relative"
              loading="lazy"
              alt=""
              src="/icon--icon-1.svg"
            />
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[45px] font-bold font-inherit mq450:text-4xl mq450:leading-[27px] mq1050:text-11xl mq1050:leading-[36px]">
              Professional
            </h1>
            <div className="self-stretch relative text-sm leading-[150%] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
              For growing businesses scaling up
            </div>
          </div>
          <div className="flex flex-row items-center justify-start py-0 pr-[121.3px] pl-0 box-border gap-[8px] max-w-full mq450:flex-wrap mq450:pr-5 mq450:box-border">
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <b className="relative tracking-[-0.02em] leading-[45px] inline-block min-w-[73px] whitespace-nowrap mq450:text-4xl mq450:leading-[27px] mq1050:text-11xl mq1050:leading-[36px]">
                $24
              </b>
              <b className="relative text-lg leading-[28px] inline-block font-manrope min-w-[23px]">
                99
              </b>
            </div>
            <div className="flex flex-col items-start justify-center text-xs">
              <div className="relative leading-[160%] inline-block min-w-[80px]">
                billed monthly
              </div>
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <div className="relative leading-[160%] inline-block min-w-[62px]">
                  or annually
                </div>
                <div className="h-4 w-[26px] rounded-21xl bg-darkcyan-100 flex flex-row items-center justify-end py-0.5 pr-0.5 pl-3 box-border">
                  <div className="h-3 w-3 relative rounded-21xl bg-gray-200 overflow-hidden shrink-0" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[325.3px] flex flex-col items-start justify-start gap-[8px] max-w-full text-sm text-white">
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/checkcircle--icon-4.svg"
              />
              <div className="flex-1 relative leading-[150%]">
                Advanced Reporting
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/checkcircle--icon-4.svg"
              />
              <div className="flex-1 relative leading-[150%]">
                Unlimited Data Storage
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/checkcircle--icon-4.svg"
              />
              <div className="flex-1 relative leading-[150%]">
                Priority Customer Support
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/checkcircle--icon-4.svg"
              />
              <div className="flex-1 relative leading-[150%]">{`API & Integration Access`}</div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-2 bg-darkcyan-100 !m-[0] absolute top-[16px] right-[16px] rounded-lg flex flex-row items-center justify-center whitespace-nowrap z-[1] hover:bg-lightseagreen-100">
            <div className="relative text-xs leading-[160%] font-semibold font-inter text-white text-left inline-block min-w-[77px]">
              Most Popular
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-4 px-5 bg-darkcyan-200 w-[326px] rounded flex flex-row items-center justify-center box-border whitespace-nowrap max-w-full hover:bg-lightseagreen-100">
            <div className="w-[130px] relative text-sm leading-[150%] font-semibold font-inter text-white text-center flex items-center justify-center">{`See Plans & Pricing`}</div>
          </button>
        </div>
        <Plan
          iconIcon="/icon-1.svg"
          title="Corporate"
          shortDescription="For enterprise with large-scale needs"
          prop="$49"
          listItem="Customizable Dashboard"
          listItem1="Priority Data Pipelines"
          listItem2="Dedicated Account Manager"
          listItem3="Enterprise-grade Security"
          cTA="Get Corporate Plan"
          propMinWidth="75px"
          propMinWidth1="unset"
        />
      </div>
    </section>
  );
};

export default Property1Default;
