import Image from "next/image";
import logo from '../../public/logo.png';
import noggleLogo from '../../public/noggle-logo.png';
import scriptLogo from '../../public/script-logo.svg';
import Link from "next/link";

const NavBar = () => {

  return (
    <div className="flex items-center h-[10vh] pl-2 pr-2 md:pl-16 md:pr-16">
      <Image
        className=''
        src={scriptLogo}
        alt={'transmissions'}
        width={180}
        height={150}
        draggable={false}
      />
      <Link href="https://docs.transmissions.wtf" className={`border border-gray-800 bg-[#5856d6] bg-opacity-15 hover:bg-opacity-25 pt-[0.275rem] pb-[0.275rem] pl-4 pr-4 rounded-xl text-[#5856d6] ml-auto animate-fadeIn`}>
        Documentation
      </Link>
    </div>
  )
}

const Hero = () => {

  return (
    <div className="grid grid-cols-1 pt-20">
      <div className="relative m-auto">
        <Image
          className='relative w-full animate-nogglePhoto opacity-1'
          src={noggleLogo}
          alt={'transmissions'}
          width={400}
          height={400}
        />
        <Image
          className='absolute top-0 left-0 w-full animate-bigPhoto opacity-0'
          src={logo}
          alt={'transmissions'}
          width={400}
          height={400}
          priority
        />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <Hero />
    </div>
  );
}
