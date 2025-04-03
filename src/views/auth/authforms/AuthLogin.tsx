import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router";
import { HiUser, HiLockClosed } from "react-icons/hi";



const AuthLogin = () => {
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    navigate("/home");
  }
  return (
    <>
      <form onSubmit={handleSubmit} >
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="Username" value="Tài khoản" />
          </div>
          <TextInput
            icon={HiUser}
            id="Username"
            type="text"
            sizing="md"
            required
            className="form-control form-rounded-xl"
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="userpwd" value="Mật khẩu" />
          </div>
          <TextInput
            icon={HiLockClosed}
            id="userpwd"
            type="password"
            sizing="md"
            required
            className="form-control form-rounded-xl"
          />
        </div>
        <div className="flex justify-between my-5">
          <div className="flex items-center gap-2">
            <Checkbox id="accept" className="checkbox" />
            <Label
              htmlFor="accept"
              className="opacity-90 font-normal cursor-pointer"
            >
              Ghi nhớ mật khẩu
            </Label>
          </div>
          <Link to={"/"} className="text-primary text-sm font-medium">
            Quên mật khẩu ?
          </Link>
        </div>
        <Button type="submit" color={"primary"} className="w-full bg-primary text-white rounded-xl">
          Đăng nhập
        </Button>
      </form>
    </>
  );
};

export default AuthLogin;
