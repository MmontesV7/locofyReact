import { useMemo } from "react";

const Property1ButtonHover = ({
  propTop,
  propBackgroundColor,
  property1ButtonHoverPosition,
  property1ButtonHoverLeft,
  property1ButtonHoverWidth,
  cTA,
  cTAFontSize,
  cTALineHeight,
}) => {
  const property1ButtonHoverStyle = useMemo(() => {
    return {
      top: propTop,
      backgroundColor: propBackgroundColor,
      position: property1ButtonHoverPosition,
      left: property1ButtonHoverLeft,
      width: property1ButtonHoverWidth,
    };
  }, [
    propTop,
    propBackgroundColor,
    property1ButtonHoverPosition,
    property1ButtonHoverLeft,
    property1ButtonHoverWidth,
  ]);

  const cTA1Style = useMemo(() => {
    return {
      fontSize: cTAFontSize,
      lineHeight: cTALineHeight,
    };
  }, [cTAFontSize, cTALineHeight]);

  return (
    <div
      className="absolute top-[85px] left-[16px] rounded bg-darkcyan-100 flex flex-row items-center justify-center py-4 px-10 text-center text-sm text-white font-inter"
      style={property1ButtonHoverStyle}
    >
      <div className="flex flex-row items-center justify-center py-0 px-1">
        <div
          className="relative leading-[150%] font-semibold"
          style={cTA1Style}
        >
          {cTA}
        </div>
      </div>
    </div>
  );
};

export default Property1ButtonHover;
