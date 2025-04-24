import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex max-w-none pointer-events-none select-none ps-10">
      <Image
        src="/profile.png"
        alt="avatar"
        width={737}
        height={678}
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
