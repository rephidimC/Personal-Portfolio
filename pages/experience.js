import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import {
  SiUdemy as Udemy
} from "react-icons/si";

import Card from "../components/experience-cards"

export default function Experience() {
  return (
    <div className="flex flex-col min-h-100">
        <div className="flex flex-col justify-items-start self-center w-80 mt-4">
          <div className="flex flex-row mb-16">
            <h1 className="text-4xl text-white font-medium mr-8 tracking-wider">
              Experience
            </h1>
            <div className="flex flex-row text-gray-500">
              <FaChevronLeft className="h-12 w-12" />
              <FaChevronRight className="h-12 w-12" />
            </div>
          </div>

          <Card year={"2019-2021"}
            companyName={"Udemy"}
            personalNote={"Thank You Angela Yu for what you did for me. Truth is that I can't thank you enough. Incase you're interested, do find the course here."}
            >
            <div className="rounded-full bg-blue-600 h-20 w-20 flex items-center justify-center">
              <Udemy className="h-14 w-14" />
            </div>
          </Card>

          <div className="h-px w-full bg-gray-500 my-8"></div>

          <Card year={"2019-2021"}
            companyName={"Udemy"}
            personalNote={"Thank You Angela Yu for what you did for me. Truth is that I can't thank you enough. Incase you're interested, do find the course here."}
            >
            <div className="rounded-full bg-blue-600 h-20 w-20 flex items-center justify-center">
              <Udemy className="h-14 w-14" />
            </div>
          </Card>

          <div className="h-px w-full bg-gray-500 my-8"></div>

          <Card year={"2019-2021"}
            companyName={"Udemy"}
            personalNote={"Thank You Angela Yu for what you did for me. Truth is that I can't thank you enough. Incase you're interested, do find the course here."}
            >
            <div className="rounded-full bg-blue-600 h-20 w-20 flex items-center justify-center">
              <Udemy className="h-14 w-14" />
            </div>
          </Card>

          <div className="h-px w-80 bg-gray-500 mt-8 mb-16"></div>

        </div>
    </div>
  );
}
