import { useMemo } from "react";

const Plan = ({
  iconIcon,
  title,
  shortDescription,
  prop,
  listItem,
  listItem1,
  listItem2,
  listItem3,
  cTA,
  propMinWidth,
  propMinWidth1,
}) => {
  const bStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const cTAStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="flex-[0.9653] rounded-2xl bg-darkslategray overflow-hidden flex flex-col items-start justify-center p-8 box-border gap-[24px] min-w-[256px] max-w-full text-left text-19xl text-whitesmoke font-inter mq450:pt-[21px] mq450:pb-[21px] mq450:box-border">
      <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
        <img
          className="w-8 h-8 relative"
          loading="lazy"
          alt=""
          src={iconIcon}
        />
        <b className="self-stretch relative tracking-[-0.02em] leading-[45px] mq450:text-4xl mq450:leading-[27px] mq1050:text-11xl mq1050:leading-[36px]">
          {title}
        </b>
        <div className="self-stretch relative text-sm leading-[150%] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
          {shortDescription}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[155px] pl-0 gap-[8px] mq450:flex-wrap mq450:pr-5 mq450:box-border">
        <b
          className="relative tracking-[-0.02em] leading-[45px] inline-block min-w-[66px] whitespace-nowrap mq450:text-4xl mq450:leading-[27px] mq1050:text-11xl mq1050:leading-[36px]"
          style={bStyle}
        >
          {prop}
        </b>
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
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-sm text-white">
        <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/checkcircle--icon.svg"
          />
          <div className="flex-1 relative leading-[150%]">{listItem}</div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/checkcircle--icon.svg"
          />
          <div className="flex-1 relative leading-[150%]">{listItem1}</div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/checkcircle--icon.svg"
          />
          <div className="flex-1 relative leading-[150%]">{listItem2}</div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/checkcircle--icon.svg"
          />
          <div className="flex-1 relative leading-[150%]">{listItem3}</div>
        </div>
      </div>
      <div className="self-stretch rounded flex flex-row items-center justify-center py-4 px-5 text-center text-sm border-[1px] border-solid border-slategray">
        <div className="flex flex-row items-center justify-center py-0 px-1">
          <div
            className="w-[127px] relative leading-[150%] font-semibold flex items-center justify-center min-w-[127px]"
            style={cTAStyle}
          >
            {cTA}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
