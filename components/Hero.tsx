"use client";

import useLenisScroll from "@/lib/hooks/use-lenis-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ComingSoon from "./ComingSoon";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useLenisScroll();
  useGSAP(() => {
    gsap.set(".mask-wrapper", {
      maskPosition: "center 20%",
      maskSize: "4000% 4000%",
      maskRepeat: "no-repeat",
      maskImage: 'url("/images/big-hero-text.svg")',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=200%",
        scrub: 2.5,
        pin: true,
      },
    });

    tl.to(".scale-out ", { scale: 1, duration: 2, ease: "power1.inOut" })
      .to(".fade-out", { scale: 1, duration: 2, ease: "power1.inOut" }, "<")
      .to(
        ".mask-wrapper",
        {
          maskPosition: "center 20%",
          maskSize: "20% 20%",
          duration: 2,
        },
        "<"
      )
      .to(".overlay", { opacity: 1, duration: 2, ease: "power1.inOut" }, "<")
      .fromTo(
        ".coming-soon-section",
        {
          opacity: 0,
          scale: 2,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          backgroundPosition: "50% 0%",
          ease: "power1.inOut",
        },
        "-=100%"
      )
      .fromTo(
        ".logo-wrapper",
        {
          opacity: 0,
          scale: 1.1,
          maskPosition: "50% 100%",
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          maskPosition: "50% 0%",
          ease: "power1.inOut",
        }
      );
    // .to(
    //   ".coming-soon-section",
    //   {
    //     backgroundPosition: "50% 50%",
    //     scale: 0.9,
    //   },
    //   ">"
    // )
    // .to(
    //   ".mask-wrapper",
    //   {
    //     maskPosition: "center 20%",
    //     maskSize: "18% 18%",
    //   },
    //   "<"
    // );
  });

  return (
    <section className="hero-section">
      <div className="size-full mask-wrapper">
        <Image
          src="/images/hero-bg.webp"
          alt="hero-image"
          className="size-full object-cover md:scale-110 h-full scale-out"
          fill
        />
        <Image
          src="/images/hero-text.webp"
          alt="hero-text"
          className="absolute h-full top-0 object-cover md:scale-110 fade-out"
          fill
        />
        <Image
          src="/images/watch-trailer.png"
          alt="watch-trailer"
          className="absolute w-48 bottom-5 left-1/2 -translate-x-1/2 "
          width={300}
          height={300}
        />
        <div className="overlay size-full absolute bg-white opacity-0" />
      </div>
      <ComingSoon />
    </section>
  );
};

export default Hero;
