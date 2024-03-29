import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import TypeIt from 'typeit-react';
import { GlobalContext } from '../global/GlobalContetxt';
import { useContext, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Section = () => {
  const { setShowCv } = useContext(GlobalContext);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="relative" id="about">
      <div className="bg-neutral-900 pt-[18px] sm:pt-[84px]">
        <div className="flex flex-col sm:flex-row opacity-90  w-full px-[20px] md:px-[30px] lg:px-[60px]">
          <div className="sm:w-1/2" data-aos="fade-right">
            <img className="scale-75 mx-auto" src="./img/Picture.svg" />
            <div className="hidden sm:flex justify-center -translate-x-10 -translate-y-14 items-center gap-4 pb-5">
              <p className=" text-white text-sm font-semibold">Find Me On</p>
              <div className="flex gap-3">
                <div>
                  <a href="https://www.linkedin.com/in/ahmad-surya-alam-syah-5017451b3/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-125 duration-300" size="xl" icon={faLinkedin} style={{ color: '#22c55e' }} />
                  </a>
                </div>
                <div>
                  <a href="https://www.instagram.com/1_1alamsyah/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-125 duration-300" icon={faInstagram} size="xl" style={{ color: '#22c55e' }} />
                  </a>
                </div>
                <div>
                  <a href="https://github.com/ahmadsuryaalamsyah" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-125 duration-300" icon={faGithub} size="xl" style={{ color: '#22c55e' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white flex flex-col justify-center sm:w-1/2  font-medium  -translate-y-10 sm:-translate-y-0" data-aos="fade-up">
            <p className="text-2xl sm:text-3xl"> Hallooo </p>
            <p className="text-2xl sm:text-3xl">
              I am <span className="text-green-500 font-bold"> Ahmad Surya Alam Syah</span>
            </p>
            <TypeIt className="text-xl sm:text-2xl" options={{ strings: ['Software Developer'], loop: true, speed: 100 }} />

            <div className="border-2 border-green-500 w-[80px] my-2 sm:w-[93px] lg:w-[100px]" />
            <p className="font-normal text-base ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, deleniti laudantium necessitatibus similique aliquam autem maiores est quis quod. Ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              distinctio quisquam error.
            </p>
            <div className="flex gap-3 my-4 ">
              <div className="bg-green-500 w-[140px] hover:scale-95 duration-300 hover:bg-green-700 text-white py-2 px-2 rounded-lg flex items-center justify-center gap-1">
                <FontAwesomeIcon icon={faFile} style={{ color: '#ffffff' }} />
                <a href="https://drive.google.com/file/d/1PbZoizpB7S5TqODeRs1IA2Q1ZAfmh99n/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </div>
              <button className="border-2 w-[140px] hover:scale-95 hover:bg-slate-100 hover:text-green-500 duration-300 border-green-500 py-2 px-2 rounded-lg" onClick={() => setShowCv(true)}>
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section;
