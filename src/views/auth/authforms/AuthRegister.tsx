import { Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router";
import { HiUser, HiLockClosed, HiMail } from "react-icons/hi";


const AuthRegister = () => {
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    navigate("/");
  }
  return (
    <>
      <form onSubmit={handleSubmit} >
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="name" value="Tài khoản" />
          </div>
          <TextInput
            icon={HiUser}
            id="name"
            type="text"
            sizing="md"
            required
            className="form-control form-rounded-xl"
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="emadd" value="Email" />
          </div>
          <TextInput
            icon={HiMail}
            id="emadd"
            type="email"
            sizing="md"
            required
            className="form-control form-rounded-xl"
          />
        </div>
        <div className="mb-6">
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
        <Button color={'primary'} type="submit" className="w-full">Đăng ký</Button>

      </form>
    </>
  )
}

export default AuthRegister
