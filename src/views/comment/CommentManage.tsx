
import { Avatar, Checkbox, Table } from "flowbite-react";
import { DATA_USER } from "src/helper/CustomData";

const CommentManage = () => {
  return (
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
        </Table.Head>
        <Table.Body className="divide-y">
          {
            DATA_USER.map((item) => (
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
              </Table.Row>
            ))
          }


        </Table.Body>
      </Table>
    </div>
  );
}


export default CommentManage