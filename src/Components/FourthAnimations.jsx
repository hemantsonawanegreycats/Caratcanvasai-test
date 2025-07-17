import { FaReact } from "react-icons/fa";


function FourthAnimations() {
  return (
    <>

    <div className="flex w-screen">
       <FaReact className="absolute left-40" size={90} />
       <FaReact className="absolute " size={90} />
       <FaReact className="absolute " size={90} />

    </div>
      <div className="w-screen h-[300vh] bg-green-50 flex justify-center">


        <div className="w-screen h-screen flex justify-center bg-white items-center">
            <div className="w-[50vw]  flex flex-col text-center ">
          <div>
            <span className="capitalize text-7xl leading-28">Jewels Don’t</span>
            <span className="capitalize text-7xl leading-28 ml-24">Just</span>
          </div>
          <div>
            <span className="capitalize text-7xl leading-28">Happen 
            </span>
            <span className="capitalize text-7xl leading-28 ml-24">They’re Dreamed,</span>
          </div>
          <div>
            <span className="capitalize text-7xl leading-28"> Then Designed </span>
            <span className="capitalize text-7xl leading-28 ml-24">by AI</span>
          </div>
        </div>
        </div>


      </div>
    </>
  );
}

export default FourthAnimations;
