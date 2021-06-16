import SpecialCard from "../components/Specialization-Cards";

export default function Specialization() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-items-start self-center w-80 mt-4">
        <h1 className="text-5xl text-white">
          I get busy but I am{" "}
          <span className="text-yellow-500">hungry for knowledge</span>
        </h1>

        <div className="flex flex-col my-20 font-sans">
          {/* this div is for all projects */}

          <div className="flex flex-col text-white text-center">
          {/* this div is for FEM projects */}
            <h1 className="font-bold tracking-wider text-2xl underline">Frontend Mentor</h1>
            <div className="flex flex-row flex-nowrap overflow-x-auto mt-8">
              <SpecialCard
                image={"/images/fem/1.jpg"}
                alt={"Frontend mentor article preview component"}
                title="Article preview component"
                note="I practiced my layout skills with this article preview component. I had loads of fun playing around with the animations for the sharing icons as well."
              >
                <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">HTML</button>
                {/*  text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110 */}
                <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">CSS</button>
                <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded motion-safe:hover:scale-110">JavaScript</button>
              </SpecialCard>
            </div>

            <div className="flex flex-row">
              {/* this div is for udemy projects */}
            </div>
          </div>

          <ol className="text-white mt-10 list-disc list-inside">
            {/* <lh className="underline">Tech stack</lh> */}
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
            <li>Node jS</li>
            <li>Express</li>
            <li>React jS</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
