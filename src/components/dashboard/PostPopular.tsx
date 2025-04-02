import { Avatar, Label } from "flowbite-react"
import { Icon } from "@iconify/react";

import { DATA_POST } from "src/helper/CustomData"

const PostPopular = () => {
    return (
        <div className="mb-10 bg-white dark:bg-gray-200 p-5">
            <Label className="text-xl">Bài đăng nổi bật</Label>
            <div className="grid grid-cols-5 gap-2 mt-2">
                {
                    DATA_POST.map((item) => (
                        <div className='bg-gray-200 dark:bg-white rounded-xl p-4 transition-transform duration-200 ease-in-out hover:scale-105 cursor-pointer' key={item.id}>
                            <div className="flex items-center justify-start">
                                <Avatar img={item.user.avatar} alt="avatar of Jese" className="me-2" />
                                <div className="grid grid-rows-1 text-gray-900 dark:text-white">
                                    <span>{`${item.user.tiktok_name} (@${item.user.tiktok_id})`}</span>
                                    <span>{`${item.post.time.hour} ${item.post.time.day}`}</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center rounded-xl">
                                <img src={item.post.img_thum} alt="" className="w-40 object-contain  py-5 rounded-xl" />
                            </div>

                            <div className="flex justify-between text-gray-950">
                                <div className="flex justify-start items-center">
                                    <Icon icon='solar:like-bold' height={18} />
                                    <span> : {item.post.like}</span>
                                </div>

                                <div className="flex justify-start items-center">
                                    <Icon icon='solar:chat-line-bold' height={18} />
                                    <span> : {item.post.comment}</span>

                                </div>

                                <div className="flex justify-start items-center">
                                    <Icon icon='solar:eye-linear' height={18} />
                                    <span> : {item.post.view}</span>

                                </div>

                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default PostPopular