import { List, ListItem } from "flowbite-react";


const PrivacyPage = () => {
    return (
        <div className="container p-10 mx-auto mt-10">
            <div className="bg-gray-100 rounded-xl mb-5">
                <h1 className="flex justify-center items-center p-16 text-3xl">Chính sách bảo mật</h1>
            </div>
            <div className="mt-5 mb-5 bg-gray-100 p-5 rounded-xl text-gray-900">
                <p className="text-2xl font-bold mb-3">
                    Giới thiệu
                </p>
                <p className="mb-10">
                    Chính sách bảo mật mô tả cách thức SO9 thu thập và xử lý các thông tin cá nhân khi Người dùng SO9 sử dụng dịch vụ của Công ty. Người dùng đồng ý sử dụng dịch vụ của Công ty có nghĩa là Người dùng hoàn toàn đồng ý với các nội dung trong Chính sách bảo mật này. Công ty có thể sửa đổi nội dung của chính sách bằng cách đăng một bản sửa đổi lên hệ thống của Công ty, phiên bản sửa đổi có hiệu lực kể từ thời điểm đăng tải. Nếu Người dùng tiếp tục sử dụng Dịch vụ có nghĩa là Người dùng chấp nhận và chắc chắn đồng ý tuân theo Điều khoản sử dụng mới nhất được cập nhật.
                </p>

                <p className="text-xl font-bold mb-3">
                    1. Thông tin Công ty cần người dùng cung cấp
                </p>
                <p className="mb-3">
                    Để có thể sử dụng đầy đủ các tiện ích trên các sản phẩm phần mềm của Công ty, Người dùng cần phải đăng ký thành viên và cung cấp các thông tin cá nhân của mình. Các thông tin Công ty cần Người dùng cung cấp là các thông tin cơ bản bao gồm nhưng không giới hạn bởi các thông tin sau về Người dùng
                </p>

                <p className="mb-10">
                    Toàn bộ thông tin người dùng cung cấp cho SO9 sẽ được lưu giữ trên hệ thống của Công ty tại văn phòng của Công ty. Khi cần Người sử dụng có thể hỏi về hoạt động thu thập, xử lý thông tin liên quan đến cá nhân mình về bảo mật thông tin
                </p>

                <p className="text-xl font-bold mb-3">
                    2. Định nghĩa
                </p>

                <p className="mb-3">
                    Giải thích các định nghĩa :
                </p>
                <List>
                    <ListItem><strong>“Khách hàng”</strong> : Khách hàng của Công ty</ListItem>
                    <ListItem><strong>“Dữ liệu khách hàng”</strong> : Dữ liệu cá nhân, báo cáo, địa chỉ và các tệp, thư mục hoặc tài liệu khác ở dạng điện tử mà Người dùng Dịch vụ lưu trữ trong Dịch vụ</ListItem>
                    <ListItem><strong>“Dữ liệu cá nhân”</strong> : Thông tin liên quan đến một thể nhân được xác định hoặc nhận dạng</ListItem>
                    <ListItem><strong>“Khu vực công cộng”</strong> : Khu vực của Trang web chỉ có thể được truy cập bởi Người dùng và nơi truy cập yêu cầu đăng nhập</ListItem>
                    <ListItem><strong>“Người dùng”</strong> : Nhân viên, đại lý hoặc đại diện của Khách hàng, người chủ yếu sử dụng các khu vực hạn chế của Trang web cho mục đích truy cập Dịch vụ trong khả năng đó</ListItem>
                    <ListItem><strong>“Khách truy cập”</strong> : Cá nhân không phải là Người dùng, người sử dụng khu vực công cộng nhưng không có quyền truy cập vào các khu vực hạn chế của Trang web hoặc Dịch vụ</ListItem>
                </List>

                <p className="text-xl font-bold mb-3 mt-10">
                    3. Công ty bảo vệ và lưu trữ thông tin của người dùng như thế nào?
                </p>
                <p className="mb-10">
                    Công ty lưu giữ và xử lý thông tin cá nhân của Người dùng trên máy chủ, Công ty bảo vệ nó bằng các biện pháp bảo vệ vật lý, điện tử bao gồm: tường lửa, mã hóa dữ liệu và thủ tục áp dụng theo quy định của luật bảo mật thông tin. Công ty thực thi kiểm soát truy cập vật lý vào các thông tin và Công ty chỉ cho phép truy cập thông tin cá nhân đối với những nhân viên cần nó để hoàn thành trách nhiệm công việc của họ trong hệ thống Công ty.
                </p>

                {/* <p className="text-xl font-bold mb-3 mt-10">
                    4. Thông tin Công ty thu thập và kiểm soát
                </p> */}

                <p className="text-xl font-bold mb-3 mt-10">
                    4. Người dùng cần làm gì để bảo mật thông tin
                </p>

                <p className="mb-3">
                    Sau khi hoàn thành việc bàn giao dịch vụ, Người dùng là đơn vị duy nhất sở hữu và có trách nhiệm quản lý một cách an toàn các thông tin nhận biết, tài khoản, mật khẩu của mình. Người dùng có thể đăng nhập vào tài khoản của mình để chỉnh sửa thông tin, có quyền yêu cầu Công ty thực hiện việc kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ thông tin cá nhân của mình đã đăng ký với Công ty
                </p>

                <p className="mb-3">
                    Công ty sẽ kiểm tra, cập nhật, điều chỉnh, hủy bỏ thông tin cá nhân của Người dùng khi có yêu cầu, hoặc cung cấp cho chủ thể thông tin công cụ để tự kiểm tra, cập nhật, điều chỉnh thông tin cá nhân của mình. Công ty chỉ hỗ trợ Người dùng thông qua tài khoản được Người dùng chủ động cung cấp cho Công ty
                </p>

                <p className="mb-3">
                    Người dùng ngay lập tức thông báo cho Công ty khi phát hiện các hình thức truy cập trái phép bằng tài khoản của mình hoặc các sơ hở về bảo mật, bao gồm việc mất mát, bị đánh cắp, bị lộ các thông tin về mật khẩu và các thông tin bảo mật khác để được hỗ trợ
                </p>

                <p className="mb-3">
                    Người dùng phải tự chịu trách nhiệm về nội dung các email gửi đi từ hộp thư trong tài khoản của mình. Công ty khuyến cáo Người dùng nên đổi lại mật khẩu sau khi cung cấp mật khẩu cho các bên liên quan nhằm mục đích hỗ trợ sử dụng
                </p>

                <p className="mb-3">
                    Công ty không chịu trách nhiệm đối với sự xâm nhập trái phép của bên thứ ba do sự bất cẩn từ phía Người dùng
                </p>

                <p className="text-xl font-bold mb-3 mt-10">
                    5. Những người hoặc tổ chức nào được phép tiếp cận thông tin người dùng
                </p>

                <p className="mb-3">
                    Công ty cam kết không cung cấp thông tin cá nhân của Người dùng cho bất kỳ bên thứ ba nào. Tuy nhiên, các cá nhân, tổ chức khác có thể được tiếp cận thông tin của Người dùng trong một số trường hợp dưới đây :
                </p>

                <List nested ordered>
                    <ListItem>Thông tin đó Người dùng đã công khai</ListItem>
                    <ListItem>Công ty được Người dùng đồng ý tiết lộ những thông tin này</ListItem>
                    <ListItem>Bên thứ ba mà Người dùng ủy quyền, có văn bản được công chứng, chứng thực</ListItem>
                    <ListItem>Theo yêu cầu pháp lý hay từ một cơ quan nhà nước hoặc nếu Công ty tin rằng hành động đó là cần thiết nhằm tuân theo các yêu cầu pháp lý hoặc chiếu theo luật pháp</ListItem>
                    <ListItem>Bảo vệ quyền, lợi ích, tài sản, sự an toàn của một ai khác trên cơ sở cân bằng lợi ích của tất cả các bên</ListItem>
                    <ListItem>Cho các bên thứ ba khác mà Công ty có liên doanh, liên kết để cung cấp các dịch vụ trên Công ty hoặc các dịch vụ mới có liên quan đến Công ty mà Người dùng SO9 cũng đang sử dụng những dịch vụ liên kết đó</ListItem>
                </List>

                <p className="text-xl font-bold mb-3 mt-10">
                    6. Giải quyết khiếu nại
                </p>

                <p className="mb-3">
                    Mọi trường hợp đóng góp ý kiến, khiếu nại, người dùng vui lòng gửi về Công ty theo địa chỉ email: matdash@gmail.com hoặc gọi đến hotline của bộ phận chăm sóc khách hàng: 0987.654.321 hoặc liên hệ trực tiếp
                </p>
            </div>
            {/* Add your privacy policy content here */}
        </div>
    );
}
export default PrivacyPage;