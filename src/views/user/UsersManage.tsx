
import { Avatar, Table } from "flowbite-react";
import { Icon } from "@iconify/react";
import { useState } from "react";

import { DATA_USER } from "src/helper/CustomData";
import AddUser from "./AddUser";
import { TYPE_USER } from "src/helper/type";

const UsersManage = () => {
  const [dataUser, setDataUser] = useState(DATA_USER)

  const handeleDeleteUser = (id: string) => {
    try {
      const result = dataUser.filter((item) => item.id != id)
      setDataUser(result)
    } catch (error) {
    }
  }

  const handleAddUser = (data: TYPE_USER) => {
    try {
      setDataUser([data, ...dataUser])
    } catch (error) {
    }
  }

  return (
    <div className="bg-white p-5 rounded-xl">
      <div className="flex py-2 items-center justify-end">
        <AddUser handleAddUser={handleAddUser} />

      </div>
      <div className="overflow-x-auto">
        <Table hoverable className="border rounded-lg">
          <Table.Head>
            <Table.HeadCell>Kênh</Table.HeadCell>
            <Table.HeadCell className="text-center">Lượt xem video</Table.HeadCell>
            <Table.HeadCell className="text-center">Bình luận</Table.HeadCell>
            <Table.HeadCell className="text-center">Lượt thích</Table.HeadCell>
            <Table.HeadCell className="text-center">Lượt xem trang cá nhân</Table.HeadCell>
            <Table.HeadCell className="text-center">Người theo dõi</Table.HeadCell>
            <Table.HeadCell className="text-center">Chia sẻ</Table.HeadCell>
            <Table.HeadCell className="text-center"></Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {
              dataUser.map((item) => (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={item.id}>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                    <a href={item.user.link_tiktok} target="_blank" rel="noopener noreferrer" className="flex items-center justify-start">
                      <Avatar img={item.user.avatar} alt="avatar of Jese" className="me-2" rounded />
                      {`${item.user.tiktok_name} (@${item.user.tiktok_id})`}
                    </a>
                  </Table.Cell>
                  <Table.Cell className="text-center">{item.statistical.count_view_video}</Table.Cell>
                  <Table.Cell className="text-center">{item.statistical.count_comment}</Table.Cell>
                  <Table.Cell className="text-center">{item.statistical.count_like}</Table.Cell>
                  <Table.Cell className="text-center">{item.statistical.count_view_profile}</Table.Cell>
                  <Table.Cell className="text-center">{item.statistical.count_following}</Table.Cell>
                  <Table.Cell className="text-center">{item.statistical.count_share}</Table.Cell>
                  <Table.Cell className="text-center" onClick={() => handeleDeleteUser(item.id)}><Icon icon='solar:trash-bin-trash-bold-duotone' height={18} /></Table.Cell>
                </Table.Row>
              ))
            }


          </Table.Body>
        </Table>
      </div>
    </div>
  );
}


export default UsersManage