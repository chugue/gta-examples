import Image from "next/image";

const ComingSoon = () => {
  return (
    <section className="coming-soon-section inset-0 flex-center opacity-0 absolute z-20 top-[-70]">
      <div className="flex flex-col justify-center gap-20">
        <div className="flex flex-center logo-wrapper">
          <Image
            src="/images/logo.png"
            alt="logo"
            className="w-auto h-47 object-contain"
            width={300}
            height={300}
          />
        </div>
        <h1 className="gradient-text text-mask uppercase text-center text-9xl tracking-tight">
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
