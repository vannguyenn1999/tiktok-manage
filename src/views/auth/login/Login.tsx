
import FullLogo from "src/layouts/full/shared/logo/FullLogo";
import AuthLogin from "../authforms/AuthLogin";
import { Link } from "react-router";

const gradientStyle = {
  background: "linear-gradient(45deg, rgb(238, 119, 82,0.2), rgb(231, 60, 126,0.2), rgb(35, 166, 213,0.2), rgb(35, 213, 171,0.2))",
  backgroundSize: "400% 400%",
  animation: "gradient 15s ease infinite",
  height: "100vh",
};

const Login = () => {
  return (
    <div style={gradientStyle} className="relative overflow-hidden h-screen">
      <div className="flex h-full justify-center items-center px-4">
        <div className="rounded-xl shadow-md bg-white dark:bg-darkgray p-6 w-full md:w-96 border-none">
          <div className="flex flex-col gap-2 p-0 w-full">
            <div className="mx-auto">
              <FullLogo />
            </div>
            <p className="text-2xl font-bold text-center text-dark my-3 text-gray-900 dark:text-gray-100">Đăng nhập</p>
            <AuthLogin />
            <div className="flex gap-2 text-base text-ld font-medium mt-6 items-center justify-center">
              <p>Bạn đã có tài khoản chưa ?</p>
              <Link to="/auth/register" className="text-primary text-sm font-medium">
                Đăng ký
              </Link>
            </div>

            <div className="flex mt-6 items-center justify-center">
              <Link to="/auth/privacy" className="text-primary text-sm font-medium">
                Chính sách bảo mật
              </Link>
              <span className="mx-1">và</span>
              <Link to="/auth/clause" className="text-primary text-sm font-medium">
                Điều khoản
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
