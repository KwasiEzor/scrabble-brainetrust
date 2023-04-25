import fisfImage from "../../assets/images/fisf_logo.png";
import ffsfImage from "../../assets/images/ffsf-logo.png";
import fbsImage from "../../assets/images/fbs.png";
import ouistImage from "../../assets/images/logo-club-ouistreham.png";

const Partners = () => {
  return (
    <section className=" max-w-7xl max-h-full mx-auto place-content-center grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2">
      <div className="p-4">
        <img
          src={fisfImage}
          alt="partner image"
          className="max-w-[80%] max-h-[80%] w-full h-full object-contain grayscale-[50%] opacity-50"
        />
      </div>
      <div className="p-4">
        <img
          src={ffsfImage}
          alt="partner image"
          className="max-w-[80%] max-h-[80%] w-full h-full object-contain grayscale-[50%] opacity-50"
        />
      </div>
      <div className="p-4">
        <img
          src={fbsImage}
          alt="partner image"
          className="max-w-[80%] max-h-[80%] w-full h-full object-contain grayscale-[50%] opacity-50"
        />
      </div>
      <div className="p-4">
        <img
          src={ouistImage}
          alt="partner image"
          className="max-w-[80%] max-h-[80%] w-full h-full object-contain grayscale-[50%] opacity-50"
        />
      </div>
    </section>
  );
};

export default Partners;
