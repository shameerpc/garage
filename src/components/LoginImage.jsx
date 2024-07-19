import image from "/image.png";

const LoginImage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center md:w-[400px]">
        <img src={image} className="object-cover " />
        <section className="hidden md:my-12 md:block text-2xl w-auto">
          <h2>
            Streamline Your Garage <br /> Management Processes
          </h2>
          <h5 className="text-xs font-light text-center">
            Completely free from your traditional <br />
            methods of paper-based records
          </h5>
        </section>
      </div>
    </>
  );
};

export default LoginImage;
