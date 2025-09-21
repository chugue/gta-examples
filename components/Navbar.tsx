import Image from "next/image";
/* nav {
    @apply fixed top-0 left-0 w-full flex justify-between items-center md:p-16 p-5 z-[100];
  } */
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center fixed top-0 left-0 right-0 md:p-16 p-5 z-[100] ">
      <Image
        src="/images/nav-logo.svg"
        className="md:w-10 w-8"
        alt="nav-logo"
        width={100}
        height={100}
      />
      <Image
        src="/images/menu.svg"
        className="md:w-10 w-8"
        alt="menu"
        width={100}
        height={100}
      />
    </nav>
  );
};

export default Navbar;
