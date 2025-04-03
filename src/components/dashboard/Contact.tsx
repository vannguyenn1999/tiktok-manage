import { Button } from "flowbite-react"
import { Icon } from "@iconify/react";

const Contact = () => {
    return (
        <div className="grid grid-cols-3 gap-2">
            <div className="bg-white rounded-xl p-5 hidden">
                <img src='https://phanmemtiktok.com/img/logo.png' alt="" className="w-20 object-contain  py-5 rounded-xl" />
                <div className="grid grid-rows-1">
                    <span className="text-gray-900 font-bold pb-2">CÔNG TY CP ĐẦU TƯ VÀ CÔNG NGHỆ NINJA</span>
                    <span className="text-gray-900 pb-2">VP. Hà Nội: Tầng 4, Tòa nhà Mỹ Sơn, 62 Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội VP.</span>
                    <span className="text-gray-900 pb-2">HCM: Tòa nhà GMA Building, 307/6 Nguyễn Văn Trỗi, Phường 1, Quận Tân Bình, TP.HCM.</span>
                    <div className="flex">
                        <div className="border-2 border-gray-600 rounded-full me-2 p-0.5">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                            </svg>
                        </div>

                        <div className="border-2 border-gray-600 rounded-full me-2 p-0.5">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd" />
                            </svg>
                        </div>

                    </div>
                </div>

            </div>
            <div className="bg-white rounded-xl p-5">
                <div className="grid grid-rows-1">
                    <span className="text-gray-900 font-bold pb-2">HỖ TRỢ</span>
                    <span className="text-gray-900 pb-2">Chúng tôi ở đây để hỗ trợ bất cứ câu hỏi nào của bạn!</span>
                    <Button color="info">Nhắn tin</Button>
                    <div className="flex justify-start items-center pt-2 text-gray-950">
                        <Icon icon='solar:phone-bold' height={18} className="me-2" />
                        <span> Hotline : <strong>0934.568.123</strong> </span>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-xl p-5">
                <div className="grid grid-rows-1">
                    <span className="text-gray-900 font-bold pb-2 text-xl">Điều khoản chính sách</span>
                    <span className="text-gray-900 pb-2">Điều khoản sử dụng</span>
                    <span className="text-gray-900 pb-2">Điều khoản bảo hành</span>
                    <span className="text-gray-900 pb-2">Điều khoản bảo mật</span>
                    <span className="text-gray-900 pb-2">Chính sách cài đặt phần mềm</span>
                </div>
            </div>
            <div className="bg-white rounded-xl p-5">
                <div className="grid grid-rows-1">
                    <span className="text-gray-900 font-bold pb-2 text-xl">Công cụ Marketing hay</span>
                    <span className="text-gray-900 pb-2">Phần mềm nuôi nick Facebook</span>
                    <span className="text-gray-900 pb-2">Phần mềm đăng bài tự động</span>
                    <span className="text-gray-900 pb-2">Phần mềm quét UID Facebook</span>
                    <span className="text-gray-900 pb-2">Phần mềm bán hàng Zalo</span>
                    <span className="text-gray-900 pb-2">Tool gửi tin nhắn telegram</span>
                </div>
            </div>


        </div>
    )
}

export default Contact