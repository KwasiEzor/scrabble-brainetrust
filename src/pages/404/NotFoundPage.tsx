import NotFoundImg from "../../assets/images/404-gif.gif";

const NotFoundPage = () => {
  return (
    <div className="grid place-content-center min-h-screen">
      <img
        src={NotFoundImg}
        className="w-full max-w-fit"
        alt="404 Page Not Found"
      />
    </div>
  );
};

export default NotFoundPage;
