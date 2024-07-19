import image from "../../public/image.png";
import Login from "../components/authentication/Login";
import LoginImage from "../components/LoginImage";

const LoginPage = () => {
  return (
    <div className="md:flex items-center h-screen">
      <div className="flex-1 flex justify-center">
        <LoginImage />
      </div>
      <div className="h-full w-0.5 bg-gray-300 hidden md:block" />
      {/* Divider */}
      <div className="flex-1">
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
