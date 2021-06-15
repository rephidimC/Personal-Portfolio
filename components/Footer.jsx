import { CgMail as Email, CgTwitter as Twitter } from "react-icons/cg";
import {
  AiFillLinkedin as LinkedIn,
  AiFillGithub as Github,
} from "react-icons/ai";

function Footer () {
    return(
    <footer className="w-full">
        <p className="flex justify-center text-white underline mb-2">
          Contact me
        </p>

        <div className="flex justify-center text-white py-2">
          <div className="mr-4">
            <Email />
          </div>
          <div className="mx-4">
            <Github />
          </div>
          <div className="mx-4">
            <Twitter />
          </div>
          <div className="ml-4">
            <LinkedIn />
          </div>
        </div>
    </footer>
    )
}

export default Footer
