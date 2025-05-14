import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";

export default function Carousel() {
  return (
    <div className="carousel w-full max-h-[400px] bg-cream">
      <div id="slide1" className="carousel-item relative w-full flex items-center justify-center">
        <img
          src="/img/prewed/DSC_6266.png"
          className="max-h-[300px] w-auto object-contain mx-auto"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide6">
            <RiArrowLeftSLine />
          </a>
          <a href="#slide2">
            <RiArrowRightSLine />
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full flex items-center justify-center">
        <img
          src="/img/prewed/DSC_6275.png"
          className="max-h-[300px] w-auto object-contain mx-auto"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1">
            <RiArrowLeftSLine />
          </a>
          <a href="#slide3">
            <RiArrowRightSLine />
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full flex items-center justify-center">
        <img
          src="/img/prewed/DSC_6291.png"
          className="max-h-[300px] w-auto object-contain mx-auto"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2">
            <RiArrowLeftSLine />
          </a>
          <a href="#slide4">
            <RiArrowRightSLine />
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full flex items-center justify-center">
        <img
          src="/img/prewed/DSC_6300.png"
          className="max-h-[300px] w-auto object-contain mx-auto"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3">
            <RiArrowLeftSLine />
          </a>
          <a href="#slide5">
            <RiArrowRightSLine />
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full flex items-center justify-center">
        <img
          src="/img/prewed/DSC_6309.png"
          className="max-h-[300px] w-auto object-contain mx-auto"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4">
            <RiArrowLeftSLine />
          </a>
          <a href="#slide6">
            <RiArrowRightSLine />
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full flex items-center justify-center">
        <img
          src="/img/prewed/DSC_6321.png"
          className="max-h-[300px] w-auto object-contain mx-auto"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide5">
            <RiArrowLeftSLine />
          </a>
          <a href="#slide1">
            <RiArrowRightSLine />
          </a>
        </div>
      </div>
    </div>
  );
}
