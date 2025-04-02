
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { FC, useState } from "react";
import { Icon } from "@iconify/react";
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
                <ModalHeader>Terms of Service</ModalHeader>
                <ModalBody>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                            companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                            to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                            soon as possible of high-risk data breaches that could personally affect them.
                        </p>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handelUpload}>I accept</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Decline
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}


export default AddUser


