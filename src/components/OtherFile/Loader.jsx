import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="justify-center items-center flex h-screen" >
    <ThreeCircles
  height="100"
  width="100"
  color="#2563EB"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
    </div>
  )
}

export default Loader;





