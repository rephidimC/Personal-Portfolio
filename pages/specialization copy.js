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
            <h1 className="font-bold tracking-wider text-2xl underline">
              Frontend Mentor
            </h1>
            <div className="flex flex-col mt-8">
              {/* flex-row whitespace-nowrap overflow-x-auto */}
              <SpecialCard
                image={"/images/fem/1.jpg"}
                alt={"Frontend mentor article preview component"}
                title="Article preview component"
                note="I practiced my layout skills with this article preview component. I had loads of fun playing around with the animations for the sharing icons as well."
              >
                <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">
                  HTML
                </button>
                <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                  CSS
                </button>
                <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                  JavaScript
                </button>
              </SpecialCard>

              {/* <SpecialCard
                image={"/images/fem/2.jpg"}
                alt={"Frontend mentor Fylo data component"}
                title="Fylo data component"
                note="I practiced my layout skills with this article preview component. I had loads of fun playing around with the animations for the sharing icons as well."
              >
                <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">
                  HTML
                </button>
                <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                  CSS
                </button>
              </SpecialCard>

              <SpecialCard
                image={"/images/fem/3.jpg"}
                alt={"coding bootcamp testimonials slider"}
                title="coding bootcamp testimonials slider"
                note="This challenge will be a nice test if you're new to JavaScript. It's also a great opportunity to play around with content animations and transitions"
              >
                <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">
                  HTML
                </button>
                <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                  CSS
                </button>
                <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                  JavaScript
                </button>
              </SpecialCard>
            </div>

            <SpecialCard
              image={"/images/fem/4.jpg"}
              alt={"Four card feature"}
              title="Four card feature"
              note="This challenge will be a nice test if you're new to JavaScript. It's also a great opportunity to play around with content animations and transitions"
            >
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">
                HTML
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                CSS
              </button>
            </SpecialCard>

            <SpecialCard
              image={"/images/fem/5.jpg"}
              alt={"Base Apparel coming soon"}
              title="Base Apparel coming soon"
              note="This layout looks simple enough, but there are some interesting details to it that will test your CSS skills. You'll also get to practice basic form validation."
            >
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">
                HTML
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                CSS
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                JavaScript
              </button>
            </SpecialCard>

            <SpecialCard
              image={"/images/fem/6.jpg"}
              alt={"Intro component with sign-up form"}
              title="Intro component with sign-up form"
              note="Practice building out a sign-up form complete with client-side validation using JavaScript."
            >
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">
                HTML
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                CSS
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                JavaScript
              </button>
            </SpecialCard>

            <SpecialCard
              image={"/images/fem/7.jpg"}
              alt={"Single price grid component"}
              title="Single price grid component"
              note="In this challenge, you will build out the pricing component to the designs provided. This is perfect for beginners and people who want to complete a smaller challenge."
            >
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">
                HTML
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                CSS
              </button>
            </SpecialCard>

            <SpecialCard
              image={"/images/fem/8.jpg"}
              alt={"Ping coming soon page"}
              title="Ping coming soon page"
              note="This challenge is great for beginners and offers a chance to practice basic client-side form validation."
            >
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">
                HTML
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                CSS
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                JavaScript
              </button>
            </SpecialCard>

            <SpecialCard
              image={"/images/fem/9.jpg"}
              alt={"Huddle landing page with alternating feature blocks"}
              title="Huddle landing page with alternating feature blocks"
              note="This challenge is perfect if you're wanting to practice your layout skills. If you're starting to get a bit more confident laying out a web page, give this project a go."
            >
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">
                HTML
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                CSS
              </button>
            </SpecialCard>
            <SpecialCard
              image={"/images/fem/10.jpg"}
              alt={"Huddle landing page with a single introductory section"}
              title="Huddle landing page with a single introductory section"
              note="This challenge is perfect if you're wanting to practice your layout skills. If you're starting to get a bit more confident laying out a web page, give this project a go."
            >
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">
                HTML
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                CSS
              </button>
            </SpecialCard>
            <SpecialCard
              image={"/images/fem/11.jpg"}
              alt={"Fylo landing page with two column layout"}
              title="Fylo landing page with two column layout"
              note="This challenge is perfect if you're wanting to practice your layout skills. If you're starting to get a bit more confident laying out a web page, give this project a go."
            >
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">
                HTML
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                CSS
              </button>
            </SpecialCard>
            <SpecialCard
              image={"/images/fem/12.jpg"}
              alt={"Social media dashboard with theme switcher"}
              title="Social media dashboard with theme switcher"
              note="This challenge will be a perfect chance to practice your Grid skills. The color theme switcher also adds a nice additional test."
            >
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">
                HTML
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                CSS
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                JavaScript
              </button>
            </SpecialCard>
          </div>

          <div className="flex flex-col text-white text-center">
            <h1 className="font-bold tracking-wider text-2xl underline">
              Udemy
            </h1>
            <div
              className="flex flex-col mt-8"
            >
              <SpecialCard
                image={"/images/fem/1.jpg"}
                alt={"Frontend mentor article preview component"}
                title="Article preview component"
                note="I practiced my layout skills with this article preview component. I had loads of fun playing around with the animations for the sharing icons as well."
              >
                <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">
                  HTML
                </button>
                <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                  CSS
                </button>
                <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                  JavaScript
                </button>
              </SpecialCard>

              <SpecialCard
                image={"/images/fem/2.jpg"}
                alt={"Frontend mentor Fylo data component"}
                title="Fylo data component"
                note="I practiced my layout skills with this article preview component. I had loads of fun playing around with the animations for the sharing icons as well."
              >
                <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">
                  HTML
                </button>
                <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                  CSS
                </button>
              </SpecialCard>

              <SpecialCard
                image={"/images/fem/3.jpg"}
                alt={"coding bootcamp testimonials slider"}
                title="coding bootcamp testimonials slider"
                note="This challenge will be a nice test if you're new to JavaScript. It's also a great opportunity to play around with content animations and transitions"
              >
                <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">
                  HTML
                </button>
                <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                  CSS
                </button>
                <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                  JavaScript
                </button>
              </SpecialCard>
            </div>

            <SpecialCard
              image={"/images/fem/4.jpg"}
              alt={"Four card feature"}
              title="Four card feature"
              note="This challenge will be a nice test if you're new to JavaScript. It's also a great opportunity to play around with content animations and transitions"
            >
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">
                HTML
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                CSS
              </button>
            </SpecialCard>

            <SpecialCard
              image={"/images/fem/5.jpg"}
              alt={"Base Apparel coming soon"}
              title="Base Apparel coming soon"
              note="This layout looks simple enough, but there are some interesting details to it that will test your CSS skills. You'll also get to practice basic form validation."
            >
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">
                HTML
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                CSS
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                JavaScript
              </button>
            </SpecialCard>

            <SpecialCard
              image={"/images/fem/6.jpg"}
              alt={"Intro component with sign-up form"}
              title="Intro component with sign-up form"
              note="Practice building out a sign-up form complete with client-side validation using JavaScript."
            >
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">
                HTML
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                CSS
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                JavaScript
              </button>
            </SpecialCard>

            <SpecialCard
              image={"/images/fem/7.jpg"}
              alt={"Single price grid component"}
              title="Single price grid component"
              note="In this challenge, you will build out the pricing component to the designs provided. This is perfect for beginners and people who want to complete a smaller challenge."
            >
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">
                HTML
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                CSS
              </button>
            </SpecialCard>

            <SpecialCard
              image={"/images/fem/8.jpg"}
              alt={"Ping coming soon page"}
              title="Ping coming soon page"
              note="This challenge is great for beginners and offers a chance to practice basic client-side form validation."
            >
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">
                HTML
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                CSS
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                JavaScript
              </button>
            </SpecialCard>

            <SpecialCard
              image={"/images/fem/9.jpg"}
              alt={"Huddle landing page with alternating feature blocks"}
              title="Huddle landing page with alternating feature blocks"
              note="This challenge is perfect if you're wanting to practice your layout skills. If you're starting to get a bit more confident laying out a web page, give this project a go."
            >
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">
                HTML
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                CSS
              </button>
            </SpecialCard>
            <SpecialCard
              image={"/images/fem/10.jpg"}
              alt={"Huddle landing page with a single introductory section"}
              title="Huddle landing page with a single introductory section"
              note="This challenge is perfect if you're wanting to practice your layout skills. If you're starting to get a bit more confident laying out a web page, give this project a go."
            >
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">
                HTML
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                CSS
              </button>
            </SpecialCard>
            <SpecialCard
              image={"/images/fem/10.jpg"}
              alt={"Fylo landing page with two column layout"}
              title="Fylo landing page with two column layout"
              note="This challenge is perfect if you're wanting to practice your layout skills. If you're starting to get a bit more confident laying out a web page, give this project a go."
            >
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">
                HTML
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                CSS
              </button>
            </SpecialCard>
            <SpecialCard
              image={"/images/fem/11.jpg"}
              alt={"Social media dashboard with theme switcher"}
              title="Social media dashboard with theme switcher"
              note="This challenge will be a perfect chance to practice your Grid skills. The color theme switcher also adds a nice additional test."
            >
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110">
                HTML
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                CSS
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded motion-safe:hover:scale-110">
                JavaScript
              </button>
            </SpecialCard> */}
          </div>
        </div>
      </div>
    </div>
  );
}
