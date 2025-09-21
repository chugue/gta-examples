import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="size-full mask-wrapper">
        <Image
          src="/images/hero-bg.webp"
          alt="hero-image"
          className="size-full object-cover md:scale-110 h-full"
          fill
        />
        <Image
          src="/images/hero-text.webp"
          alt="hero-text"
          className="absolute h-full top-0 object-cover md:scale-110"
          fill
        />
        <Image
          src="/images/watch-trailer.png"
          alt="watch-trailer"
          className="absolute w-48 bottom-5 left-1/2 -translate-x-1/2"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};

export default Hero;
