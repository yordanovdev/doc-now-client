import { Typography } from "@/components/ui/typography";
import person1Image from "../../../assets/images/about-us/people/person1.png";
import person2Image from "../../../assets/images/about-us/people/person2.png";
import person3Image from "../../../assets/images/about-us/people/person3.png";
import person4Image from "../../../assets/images/about-us/people/person4.png";
import person5Image from "../../../assets/images/about-us/people/person5.png";

export const People = () => {
  const images = [
    { src: person1Image, alt: "Team member 1" },
    { src: person2Image, alt: "Team member 2" },
    { src: person3Image, alt: "Team member 3" },
    { src: person4Image, alt: "Team member 4" },
    { src: person5Image, alt: "Team member 5" },
  ];

  return (
    <div className="overflow-x-hidden">
      <div className="max-md:px-6">
        <div className="max-w-378 xl:px-10 max-md:max-w-md w-full relative overflow-x-hidden md:w-188 xl:w-full mx-auto pt-16">
          <div className="w-full md:w-120 space-y-2">
            <Typography variant={"h2"}>Хората зад DocNow</Typography>
            <Typography variant={"p"}>
              Зад платформата стои екип от медицински специалисти и
              професионалисти, обединени от една идея — медицинската грижа
              трябва да бъде спокойна, навременна и достъпна. Подбираме
              внимателно всеки специалист, с когото работим, защото доверието
              започва от хората.
            </Typography>
          </div>
        </div>
      </div>
      <div className="w-full  xl:mb-16 mt-10 md:mx-0 ">
        <div className="w-full md:mx-auto xl:w-full max-md:max-w-md md:overflow-x-hidden group relative">
          <div className="flex gap-3 md:gap-6 animate-scroll-left group-hover:animation-pause">
            {/* First set of images */}
            {images.map((image, index) => (
              <img
                key={`first-${index}`}
                src={image.src}
                alt={image.alt}
                className="rounded-3xl w-20 h-25 md:w-25 md:h-31.75 xl:w-45.75 xl:h-58 shrink-0"
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {images.map((image, index) => (
              <img
                key={`second-${index}`}
                src={image.src}
                alt={image.alt}
                className="rounded-3xl w-20 h-25 md:w-25 md:h-31.75 xl:w-45.75 xl:h-58 shrink-0"
              />
            ))}
            {/* Third set to ensure smooth infinite scroll */}
            {images.map((image, index) => (
              <img
                key={`third-${index}`}
                src={image.src}
                alt={image.alt}
                className="rounded-3xl w-20 h-25 md:w-25 md:h-31.75 xl:w-45.75 xl:h-58 shrink-0"
              />
            ))}
            {/* Fourth set */}
            {images.map((image, index) => (
              <img
                key={`fourth-${index}`}
                src={image.src}
                alt={image.alt}
                className="rounded-3xl w-20 h-25 md:w-25 md:h-31.75 xl:w-45.75 xl:h-58 shrink-0"
              />
            ))}
            {/* Fifth set */}
            {images.map((image, index) => (
              <img
                key={`fifth-${index}`}
                src={image.src}
                alt={image.alt}
                className="rounded-3xl w-20 h-25 md:w-25 md:h-31.75 xl:w-45.75 xl:h-58 shrink-0"
              />
            ))}
            {/* Sixth set */}
            {images.map((image, index) => (
              <img
                key={`sixth-${index}`}
                src={image.src}
                alt={image.alt}
                className="rounded-3xl w-20 h-25 md:w-25 md:h-31.75 xl:w-45.75 xl:h-58 shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
