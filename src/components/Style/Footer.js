import ImagesRoutes from "../../assets/ImagesRoutes";

const Footer = () => {
  return (
    <section
      className="bg-fixed-option text-white UDDigiKyokashoProR w-[100vw] h-[100lvh] flex flex-col justify-end items-center"
      style={{
        backgroundImage: `url(${ImagesRoutes.IMG_2883})`,
      }}
    >
      <p className="string-sm w-full py-[20px] text-center">
        Copyright 2024 - Dawn. All Rights Reserved.
      </p>
    </section>
  );
};

export default Footer;
