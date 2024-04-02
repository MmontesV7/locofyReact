import Header from "../components/Header";
import TypeVertical from "../components/TypeVertical";
import TypeFloatingBox from "../components/TypeFloatingBox";
import Property1Simple from "../components/Property1Simple";
import Property1Default from "../components/Property1Default";
import Property1DeviceWithPhoto from "../components/Property1DeviceWithPhoto";
import TypeMegaMenuDivider from "../components/TypeMegaMenuDivider";

const MushoControlRoom = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start tracking-[normal]">
      <Header />
      <TypeVertical />
      <TypeFloatingBox />
      <Property1Simple />
      <Property1Default />
      <Property1DeviceWithPhoto />
      <TypeMegaMenuDivider />
    </div>
  );
};

export default MushoControlRoom;
