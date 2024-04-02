import Property1ButtonHover from "./Property1ButtonHover";

const ButtonPrimary = () => {
  return (
    <div className="w-[250px] rounded-[5px] box-border h-[154px] overflow-hidden border-[1px] border-dashed border-blueviolet">
      <Property1ButtonHover
        propTop="16px"
        propBackgroundColor="#00aeb6"
        property1ButtonHoverPosition="absolute"
        property1ButtonHoverLeft="16px"
        property1ButtonHoverWidth="unset"
        cTA={`See Plans & Pricing`}
        cTAFontSize="14px"
        cTALineHeight="150%"
      />
      <Property1ButtonHover cTA={`See Plans & Pricing`} />
    </div>
  );
};

export default ButtonPrimary;
