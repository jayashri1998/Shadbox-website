import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "../../utils/OptionsConfig";

const Cover = () => {

    const particlesInit = (engine) => {
        loadFull(engine);
      };
  return (
    <div>
        <Particles init={particlesInit} options={particlesOptions}/>
    </div>
  )
}

export default Cover;