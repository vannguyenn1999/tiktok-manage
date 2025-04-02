
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { FC, useState } from "react";
import { Icon } from "@iconify/react";
import { uniqueId } from "lodash";


const AddUser: FC<any> = ({ handleAddUser }) => {
    const [openModal, setOpenModal] = useState(false);

    const handelUpload = () => {

        const result = {
            id: uniqueId(),
            user: {
                avatar:
                    'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/a4962965642f59b2a5fefbf47a50eb63~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=5d1f9ec9&x-expires=1743757200&x-signature=fUnIGUQmOhuntKVKqF8fM02nWDM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my',
                tiktok_id: 'Satoru_Ueno',
                tiktok_name: 'satoru_ueno',
                link_tiktok: 'https://www.tiktok.com/@satoru_ueno',
            },
            statistical: {
                count_view_video: Math.floor(Math.random() * 100) + 1,
                count_like: Math.floor(Math.random() * 100) + 1,
                count_comment: Math.floor(Math.random() * 100) + 1,
                count_view_profile: Math.floor(Math.random() * 100) + 1,
                count_following: Math.floor(Math.random() * 100) + 1,
                count_follower: Math.floor(Math.random() * 100) + 1,
                count_share: Math.floor(Math.random() * 100) + 1,
            },
        }

        handleAddUser(result)
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


