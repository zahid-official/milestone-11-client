import { Link } from "react-router-dom";
import { FaDiscord, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className="footer lg:justify-around py-20 text-base px-10 relative ">
        <aside>
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-bold">TrackBook.</h1>
          </div>
          <p>
            TrackBook Industries Ltd.
            <br />
            Providing reliable tech since 2014
          </p>
          <ul className="flex items-center gap-2 mt-2">
            <li>
              <Link to={"https://www.facebook.com/"}>
                <span className="hover:text-[#0866ff]">
                  <FaFacebookSquare size={30} />
                </span>
              </Link>
            </li>
            <li>
              <Link to={"https://www.linkedin.com/"}>
                
                <span className="hover:text-[#0a66c2]">
                  <FaLinkedin size={30} />
                </span>
              </Link>
            </li>
            <li>
              <Link to={"https://www.instagram.com/"}>
                <span className="hover:text-[#e0084b]">
                  <RiInstagramFill size={30} />
                </span>
              </Link>
            </li>
            <li>
              <Link to={"https://discord.com/"}>
                <span className="hover:text-[#5866f1]">
                  <FaDiscord size={30} />
                </span>
              </Link>
            </li>
          </ul>
        </aside>

        <nav>
          <h6 className="text-black dark:text-white font-bold text-xl">Quick Link</h6>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Top Author</a>
          <a className="link link-hover">Top Categories</a>
        </nav>
        <nav>
          <h6 className="text-black dark:text-white font-bold text-xl">Help Center</h6>
          <a className="link link-hover">Courses</a>
          <a className="link link-hover">Support</a>
          <a className="link link-hover">Get Help</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>
        <nav>
          <h6 className="text-black dark:text-white font-bold text-xl">Contact Info</h6>
          <a className="link link-hover"> Call Us: 1-885-665-2548</a>
          <a className="link link-hover">
            
            Address: +7811 Vermont Ave, <br /> Los Angeles, CA 90054
          </a>
          <a className="link link-hover">Mail Us: hello@TrackBook.com</a>
        </nav>
      </footer>

      <div className="py-7 px-5 text-lg font-semibold text-center border-t-2">
        <p>© TrackBook is Proudly Owned by Zahidul Islam</p>
      </div>
    </>
  );
};

export default Footer;
