import Image from "next/image";

const ComingSoon = () => {
  return (
    <section className="coming-soon-section">
      <div className="flex-col flex  gap-20 ">
        <Image
          src="/images/logo.webp"
          alt="logo"
          className="entrance-logo"
          width={300}
          height={300}
        />
        <div className="text-wrapper">
          <h3 className="gradient-text">
            Coming <br /> May 26 <br /> 2026
          </h3>
        </div>

        <div className="flex-center gap-10 ">
          <Image
            src="/images/ps-logo.svg"
            className="w-20 "
            alt=""
            width={300}
            height={300}
          />
          <Image
            src="/images/x-logo.svg"
            className="w-40 "
            alt=""
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
