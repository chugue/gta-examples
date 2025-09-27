import Image from "next/image";

const ComingSoon = () => {
  return (
    <section className="coming-soon-section inset-0 absolute opacity-0 flex-center">
      <div className="flex flex-col items-center justify-center gap-20">
        <Image
          src="/images/logo.webp"
          alt="logo"
          className="absolute w-auto h-59 top-49 "
          width={100}
          height={100}
        />
        <h1 className="gradient-text uppercase text-center text-9xl absolute left-1/2 -translate-x-1/2 tracking-tight">
          Coming
          <br />
          May 26
          <br />
          2026
        </h1>
      </div>
    </section>
  );
};

export default ComingSoon;
