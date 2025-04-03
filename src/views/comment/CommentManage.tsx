import ScrollToTop from "src/components/shared/ScrollToTop";
import MenuComment from "./menu/MenuComment";
import { useState } from "react";
import { CommentItem } from "src/helper/type";
import { MenuItemComment } from "./menu/MenuItemComment";



const CommentManage = () => {
  const [dataCommentItem, setDataCommentItem] = useState<CommentItem | null>(null)

  const handleChooseCommentItem = (data: CommentItem) => {
    try {
      setDataCommentItem(data)
    } catch (error) {

    }
  }

  return (
    <>
      <div className="flex w-full min-h-screen dark:bg-darkgray bg-white rounded-xl">
        <div className="flex w-full  ">
          {/* Header/sidebar */}
          <MenuComment handleChooseItem={handleChooseCommentItem} dataCommentItem={dataCommentItem} />
          <div className="page-wrapper-sub flex flex-col w-full dark:bg-darkgray ms-3">
            <div>
              {/* Body Content  */}
              <div
                className={`w-full`}
              >
                <ScrollToTop>
                  <div className="">
                    {/* <Outlet /> */}
                    {
                      dataCommentItem !== null && (<MenuItemComment CommentItem={dataCommentItem} />)
                    }
                  </div>
                </ScrollToTop>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}


export default CommentManage