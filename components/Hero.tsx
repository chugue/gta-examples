"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ComingSoon from "./ComingSoon";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    gsap.set(".mask-wrapper", {
      maskPosition: "center 20%",
      maskSize: "3600% 3600%",
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

    tl.to(".scale-out ", { scale: 1, ease: "power1.inOut" })
      .to(".fade-out", { scale: 1, ease: "power1.inOut" }, "<")
      .to(".overlay", { opacity: 1, ease: "power1.inOut" }, "<")
      .to(
        ".mask-wrapper",
        {
          maskPosition: "center 20%",
          maskSize: "18% 18%",
        },
        "<"
      )
      .to(".coming-soon-section", {
        duration: 2,
        maskImage:
          "radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)",
        ease: "power1.inOut",
      })
      .to(".coming-soon-section, .mask-wrapper", {
        opacity: 0,
        duration: 2,
        ease: "power1.inOut",
      });
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
          width={100}
          height={100}
        />
        <div className="overlay size-full absolute bg-white opacity-0 z-10" />
      </div>
      <ComingSoon />
    </section>
  );
};

export default Hero;
