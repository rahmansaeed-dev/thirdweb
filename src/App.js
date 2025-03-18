import "./App.css";
import Navbar from "./Components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Sliders from "./Components/Sliders";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Contact from "./Components/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: false,
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="container flex flex-wrap items-center justify-center text-white pt-8 opacity-90">
        {/* <div className="text-lg sm:text-7xl sm:text-center md:text-end font-medium w-full md:w-[45%] items-center justify-end sm:flex-col gap-2 pr-4 hidden sm:block">
          <h1>Design studio</h1>
          <h1 c>for the</h1>
          <h1>web3 world</h1>
        </div> */}
        {/* <div className="text-lg font-medium w-full sm:hidden">
          <h1 className="sm:text-end text-center mx-4 text-2xl font-bold">
            Design studio for the web3 world
          </h1>
        </div> */}

        <div className="w-full md:w-1/2 pt-8">
        <div data-aos="fade-up">
          <img
            src="/img/hero1.png"
            className="w-full h-auto object-cover"
            alt="hero"
          />
        </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto px-4 flex item-end justify-start gap-3 text-white text-sm font-normal">
        <img src="/img/arrow.png" alt="arrwo" className="sm:w-10 sm:h-10 w-7 h-7" />
        <div className="opacity-60 text-xs">
          <p>We help companies design their </p>
          <p>products to be ready for web3 world</p>
        </div>
      </div>
      <section>
        <div className="pt-6">
          <p className="w-11/12 mx-auto opacity-60 text-white px-4 text-sm">
            Our clients are backed by:
          </p>
          <div className="flex items-center justify-center swiper-bg mt-8">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 10 },
                640: { slidesPerView: 3, spaceBetween: 10 },
                768: { slidesPerView: 3, spaceBetween: 10 },
                1024: { slidesPerView: 3, spaceBetween: 50 },
              }}
            >
              <SwiperSlide>
                <img
                  src="/img/slide-1.png"
                  alt="slide"
                  className="w-[250px] h-auto object-cover mx-auto pt-3"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/img/slide-2.png"
                  alt="slide"
                  className="w-[250px] h-auto object-cover mx-auto pt-3"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/img/slide-3a.png"
                  alt="slide"
                  className="w-[250px] h-auto object-cover mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/img/slide-4.png"
                  alt="slide"
                  className="w-[250px] h-auto object-cover mx-auto"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="flex items-center sm:w-full md:items-center justify-between sm:mt-0 flex-wrap gap-6">
        <div className="w-full  sm:w-[48%] text-white sm:pl-16 px-5 mt-8" data-aos="zoom-in-down">
          <h3 className="sm:text-3xl font-bold  text-lg">
            What is Web3 studio?
          </h3>
          <p className="opacity-60 text-sm sm:text-xl text-justify pt-1">
            Things around crypto, NFTs and web3 as a whole are unbelievably
            interesting. Unfortunately, the overall usability as well as the
            quality of the UI is often still not up to the task. To achieve mass
            adoption, overcoming those hurdles will be key. And this is where
            our story begins.
          </p>
        </div>
        <div className="w-full sm:w-[48%] web3-img sm:mt-7 relative h-[40vh] sm:h-[80vh] flex items-center justify-center" data-aos="zoom-in-down">
          <img
            src="/img/frame-1.png"
            alt="frame"
            className="z-10 w-full h-auto object-contain"
          />
        </div>
      </section>
      <section className="project section" id="project">
        <div className="w-11/12 mx-auto mt-10">
          <h1 className="text-white text-2xl sm:text-5xl font-bold">
            Projects
          </h1>
          <div className="flex flex-col">
            <div className="flex items-start justify-between flex-wrap gap-3 mt-4">
              <img
                src="/img/casestudy-01.png"
                alt="casestudy"
                width={500}
                className="w-full h-auto sm:w-[48%] object-cover rounded-md" data-aos="fade-up"
              />
              <img
                src="/img/casestudy-03.png"
                alt="casestude"
                width={500}
                className="w-full h-auto sm:w-[48%] object-cover rounded-md" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
              />
              <div className="bg-[#1a1a1a] text-white sm:w-[48%] w-full px-6 py-7 rounded-md">
                <h3>How we design web3 products</h3>
                <button className="bg-black py-2  px-3 rounded-full mt-2 text-xs hover:bg-white hover:text-black border border-white hover:border-transparent">
                  Comming soon
                </button>
              </div>
            </div>
            <div className="flex items-start justify-between flex-wrap gap-3">
              <img
                src="/img/casestudy-02.png"
                alt="casestudy"
                width={500}
                className="w-full h-auto sm:w-[48%] object-cover rounded-md"  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
              />
              <img
                src="/img/casestudy-4.png"
                alt="casestude"
                width={500}
                className="w-full h-auto sm:w-[48%] object-cover rounded-md" data-aos="fade-right"
              />
              <img
                src="/img/casestudy-5.png"
                alt="casestude"
                width={500}
                className="w-full h-auto sm:w-[48%] object-cover rounded-md" data-aos="fade-left"
              />
              <div className="bg-[#1a1a1a] text-white sm:w-[48%] w-full px-6 py-7 rounded-md">
                <h3>How we design web3 products</h3>
                <button className="bg-black py-2  px-3 rounded-full mt-2 text-xs hover:bg-white hover:text-black border border-white hover:border-transparent">
                  Comming soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="project slider">
        <div className="sm:mt-20 mt-8">
          <h1 className="w-11/12 mx-auto text-white text-2xl sm:text-5xl font-bold">
            Other Projects
          </h1>
        </div>
        <div className="sm:mt-12 mt-5">
          <Sliders />
        </div>
        <section className="simple image">
          <div className="w-11/12 mx-auto pt-12">
            <img src="/img/only-img.png" alt="img" className="w-full h-1/2" />
          </div>
        </section>
      </section>
      <section>
        <div className="w-11/12 mx-auto flex sm:items-center justify-between flex-wrap items-center pt-16" >
          <div className="w-full sm:w-[32%] flex items-center justify-center sm:items-start sm:justify-start mt-5 sm:mt-0">
            <img
              src="/img/about-1.jpg"
              alt="about"
              width={240}
              height={344}
              className="w-full" data-aos="fade-right"
            />
          </div>
          <div className="w-full sm:w-[32%] flex flex-col gap-8 sm:items-start items-center pt-6 sm:pt-0 mt-5 sm:mt-0" id="about">
            <h1 className="text-white text-2xl sm:text-5xl font-bold" id="career">
              Other Projects
            </h1>
            <p className="text-white opacity-60 text-justify">
              Team of product and brand designers that are really passionate
              about blockchain technology and good design. We are not just UI
              freaks! We advocate users for better product experience and common
              sense.
            </p>
            <button className="text-white border-white border rounded-full px-4 py-2 hover:bg-white hover:text-black">
              More about us
              <i class="fa-solid fa-arrow-right pl-2"></i>
            </button>
            <img
              src="/img/about-2.jpg"
              alt="about"
              width={240}
              height={200}
              className="w-full" data-aos="fade-up"
            />
          </div>
          <div className="w-full sm:w-[32%] flex sm:items-end sm:justify-end items-center justify-center  mt-5 sm:mt-0">
            <img
              src="/img/about-3.jpeg"
              alt="about"
              width={240}
              height={344}
              className="w-full" data-aos="fade-down"
            />
          </div>
        </div>
      </section>
      <Contact />
      <footer className="pt-5" id="contact">
        <div className="mt-20">
          <div className="w-11/12 mx-auto h-full flex items-start justify-between flex-wrap">
            <div className="w-full sm:w-1/5">
              <Link href="/">
                <img
                  src="/img/logo.png"
                  alt="logo"
                  width={80}
                  height={80}
                  className="sm:w-16 w-auto h-auto object-cover"
                />
              </Link>
            </div>
            <div className="text-white flex flex-col sm:gap-9 gap-3 text-sm mt-8 sm:mt-0 w-full sm:w-1/5">
              <Link className="font-bold opacity-60">Product</Link>
              <Link className="text-xs sm:text-sm">Featurs</Link>
              <Link className="text-xs sm:text-sm">Pricing</Link>
              <Link className="text-xs sm:text-sm">Book a demo</Link>
            </div>
            <div className="text-white flex flex-col sm:gap-9 gap-3 text-sm mt-8 sm:mt-0 w-full sm:w-1/5">
              <Link className="font-bold opacity-60">Explore</Link>
              <Link className="text-xs sm:text-sm">Events</Link>
              <Link className="text-xs sm:text-sm">Blog</Link>
            </div>
            <div className="text-white flex flex-col sm:gap-9 gap-3 text-sm mt-8 sm:mt-0 w-full sm:w-1/5">
              <Link className="font-bold opacity-60">Company</Link>
              <Link className="text-xs sm:text-sm">About Us</Link>
              <Link className="text-xs sm:text-sm">Career</Link>
              <Link className="text-xs sm:text-sm">Contact Us</Link>
            </div>
          </div>
          <div className="bg-cyan-900 mt-10">
            <div className="w-11/12 mx-auto py-5 flex items-center justify-between flex-wrap">
              <div className="text-white flex sm:gap-3 gap-1 sm:w-4/5 w-full flex-col sm:flex-row">
                <p className="text-xs">© 2022 Welcome. All right reserved.</p>
                <p className="text-xs">Privacy Policy</p>
                <p className="text-xs">Terms of Service</p>
              </div>
              <div className="text-white sm:w-1/5 w-full flex gap-4 mt-4 sm:mt-0  items-center sm:justify-end">
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
