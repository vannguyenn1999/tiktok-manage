import { Avatar } from "flowbite-react";
import { FaShare } from "react-icons/fa";
import { List, ListItem } from "flowbite-react";

import { DATA_COMMENT } from "src/helper/CustomData";
import { FC } from "react";


const MenuComment: FC<any> = ({ handleChooseItem, dataCommentItem }) => {
    return (
        <List className="w-96 list-none">
            {
                DATA_COMMENT.map((item) => (
                    <ListItem key={item.id} onClick={() => handleChooseItem(item)}>
                        <div className={`border-solid border-2 border-sky-500 p-3 flex justify-between cursor-pointer ${item.id === dataCommentItem?.id ? "bg-green-600 dark:bg-yellow-600 text-gray-200" : "hover:bg-slate-200 dark:hover:bg-gray-400 dark:hover:text-gray-100"}`}>
                            <div className="flex justify-start items-center">
                                <Avatar img={item.user.avatar} alt="avatar of Jese" rounded />
                                <div className="grid grid-rows-1 ms-1 text-xs">
                                    <span>{item.user.tiktok_name}</span>
                                    <span className="flex items-center justify-start"><FaShare className="scale-x-[-1] me-1" />{item.comment.text.length > 15 ? `${item.comment.text.slice(0, 12)}...` : item.comment.text}</span>
                                </div>
                            </div>

                            <div className="grid grid-rows-1 ms-1 text-xs">
                                <span>{item.comment.time.day}</span>
                                <span>{item.comment.time.time}</span>
                            </div>
                        </div>
                    </ListItem>
                ))
            }
        </List>
    )
}

export default MenuComment