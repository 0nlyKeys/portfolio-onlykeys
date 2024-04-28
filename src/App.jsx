import Draggable from "react-draggable";
import { AsideSection, NavbarSection } from "./components";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        scale={1}
        bounds="parent"
      >
        <div className="bg-gradient-to-b from-asideBg to-[#026c8c] max-w-7xl w-full h-[720px]">
          <div className="handle">
            <NavbarSection></NavbarSection>
          </div>
          <AsideSection></AsideSection>
        </div>
      </Draggable>
    </div>
  );
};

export default App;
