import { Avatar, Button, Textarea } from "flowbite-react"
import { FC, useEffect, useRef, useState } from "react"
import { IoIosSend } from "react-icons/io";


type MenuItemCommentProps = {
    CommentItem: {
        id: string
        user: {
            avatar: string,
            tiktok_id: string,
            tiktok_name: string,
            link_tiktok: string,
        },
        statistical: {
            count_view_video: number,
            count_like: number,
            count_comment: number,
            count_view_profile: number,
            count_following: number,
            count_follower: number,
            count_share: number,
        },
        post: {
            id: string,
            img_thum: string,
            time: {
                day: string,
                hour: string,
            },
            title: string,

            like: number,
            comment: number,
            view: number,
        },
        comment: {
            text: string,
            time: {
                day: string,
                time: string,
            },
        },
    }

}


const MenuItemComment: FC<MenuItemCommentProps> = ({ CommentItem }) => {
    const textCommentInputRef = useRef<HTMLTextAreaElement>(null)
    const [textComment, setTextComment] = useState('')

    useEffect(() => {
        setTextComment('')
        if (textCommentInputRef.current) {
            textCommentInputRef.current.value = '';
        }
    }, [CommentItem]);


    const handleSubmitComment = () => {
        try {
            console.log("textCommentInputRef", textCommentInputRef.current?.value);
            setTextComment(String(textCommentInputRef.current?.value))
            if (textCommentInputRef.current) {
                textCommentInputRef.current.value = '';
            }
        } catch (error) {

        }
    }

    return (
        <div className="rounded-r-xl">
            <div className="flex justify-start items-center p-5">
                <Avatar img={CommentItem.user.avatar} alt="avatar of Jese" rounded />
                <div className="grid grid-rows-1 ms-2 text-sm">
                    <span className="font-bold text-gray-900">{CommentItem.user.tiktok_name}</span>
                </div>
            </div>
            <div className="bg-orange-200 min-h-96">
                <div className="gird grid-rows-1 p-2 border-b-2 border-dashed border-gray-400">
                    <span className="pb-4 text-gray-900">{CommentItem.post.title}</span>
                    <div className="flex items-center justify-start rounded-xl">
                        <img src={CommentItem.post.img_thum} alt="" className="w-32 object-contain rounded-xl" />
                    </div>
                </div>

                <div className="pt-5">
                    <div className="flex justify-start items-center p-5 cursor-pointer">
                        <Avatar img={CommentItem.user.avatar} alt="avatar of Jese" rounded />

                        {/* Thẻ chứa nội dung */}
                        <div className="group relative grid grid-rows-1 ms-2 text-sm bg-slate-500 p-3 rounded-xl">
                            <span className="font-bold text-gray-100">{CommentItem.comment.text}</span>

                            {/* Thẻ chứa thời gian - đặt bên trong thẻ nội dung để luôn gần nhau */}
                            <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-gray-700 text-white p-2 rounded-xl whitespace-nowrap min-w-max">
                                <span>{CommentItem.comment.time.time} -- {CommentItem.comment.time.day}</span>
                            </div>
                        </div>
                    </div>
                    {
                        textComment !== "" && (
                            <div className="flex justify-end items-center p-5 cursor-pointer">
                                <div className="grid grid-rows-1 ms-2 text-sm bg-slate-500 p-3 rounded-xl">
                                    <span className="font-bold text-gray-100">{textComment}</span>
                                </div>
                            </div>
                        )
                    }

                </div>

            </div>
            <div className="mt-1">
                <Textarea ref={textCommentInputRef} id="comment" placeholder="Trả lời bình luận ..." required rows={4} />
            </div>
            <div className="flex justify-end m-1">
                <Button onClick={handleSubmitComment}>
                    <IoIosSend /> Gửi
                </Button>
            </div>


        </div>
    )
}

export { MenuItemComment }