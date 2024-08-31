import Image from "next/image";

const TopLeftImage = () => {
  return (
    <div className="fixed user-drag-none left-0 top-0 mix-blend-color-dodge z-40 w-[200px] xl:w-[400px] opacity-50">
      <Image
        src="/top-left-img.png"
        width={400}
        style={{
          height: "auto",
          width: "auto",
        }}
        className="user-drag-none pointer-events-none select-none"
        height={400}
        alt="top-left-image"
        draggable={false}
        priority
      />
    </div>
  );
};

export default TopLeftImage;
