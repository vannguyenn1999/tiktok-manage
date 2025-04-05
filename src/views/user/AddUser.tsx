
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { FC, useState } from "react";
import { Icon } from "@iconify/react";
import { FaTiktok } from "react-icons/fa";


import { RANDOM_DATA_USER } from "src/helper/CustomData";


const AddUser: FC<any> = ({ handleAddUser }) => {
    const [openModal, setOpenModal] = useState(false);

    const handelUpload = () => {
        const randomItem = RANDOM_DATA_USER[Math.floor(Math.random() * RANDOM_DATA_USER.length)];
        handleAddUser(randomItem)
        setOpenModal(false)
    }

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>
                <Icon icon='solar:user-plus-bold' height={18} />
                Thêm tài khoản
            </Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <ModalHeader>Đăng nhập tài khoản Tik Tok</ModalHeader>
                <ModalBody>
                    <div className="flex justify-center items-center">
                        <Button onClick={handelUpload} className="w-80 mb-2 border-2 focus:border-none py-1.5" color="dark">
                            <FaTiktok />
                            Đăng nhập bằng tài khoản Tik Tok
                        </Button>
                    </div>
                </ModalBody>
                <ModalFooter>
                    {/* <Button onClick={handelUpload}>I accept</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Decline
                    </Button> */}
                </ModalFooter>
            </Modal>
        </>
    );
}


export default AddUser


