const Header = () => {
  return (
    <header className="self-stretch hidden flex-row items-center justify-between p-2 box-border max-w-full gap-[0px] [row-gap:20px] z-[6] text-left text-xs text-whitesmoke font-inter">
      <div className="h-[43px] rounded-lg bg-gray-200 flex flex-row items-center justify-start py-0 pr-4 pl-2 box-border gap-[4px]">
        <img className="h-6 w-6 relative" alt="" src="/icon.svg" />
        <div className="relative leading-[160%] font-semibold inline-block min-w-[81px]">
          DashManager
        </div>
      </div>
      <div className="h-[43px] w-[1131px] flex flex-row items-center justify-end max-w-full">
        <div className="self-stretch rounded-lg flex flex-row items-center justify-end py-0 pr-0 pl-5 box-border gap-[12px] max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start py-0 px-4">
            <div className="relative leading-[160%] font-semibold inline-block min-w-[64px]">
              Dashboard
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-0 px-4">
            <div className="relative leading-[160%] font-semibold inline-block min-w-[51px]">
              Features
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-0 px-4">
            <div className="relative leading-[160%] font-semibold inline-block min-w-[71px]">
              Integrations
            </div>
          </div>
          <div className="rounded bg-gray-200 flex flex-row items-center justify-center py-3 px-[19px] text-center border-[1px] border-solid border-whitesmoke">
            <div className="flex flex-row items-center justify-center py-0 px-1">
              <div className="relative leading-[160%] font-semibold inline-block min-w-[33px]">
                Login
              </div>
            </div>
          </div>
          <div className="rounded bg-darkcyan-100 flex flex-row items-center justify-center py-3 px-5 text-center text-white">
            <div className="flex flex-row items-center justify-center py-0 px-1">
              <div className="relative leading-[160%] font-semibold inline-block min-w-[68px] whitespace-nowrap">
                Get Started
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
