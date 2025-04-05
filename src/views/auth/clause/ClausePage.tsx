import { Button, List, ListItem } from "flowbite-react";
import { useState } from "react";

const SECTIONS = [
    { id: 'intro', title: '1 : Định nghĩa' },
    { id: 'part1', title: '2 : Kích hoạt tài khoản' },
    { id: 'part2', title: '3 : Phí dịch vụ' },
    { id: 'part3', title: '4 : Thanh toán' },
    { id: 'part4', title: '5 : Tạm dừng dịch vụ' },
    { id: 'part5', title: '6 : Hủy dịch vụ' },
    { id: 'part6', title: '7 : Dùng thử dịch vụ' },
    { id: 'part7', title: '8 : Quyền và Nghĩa vụ của MatDash' },
    { id: 'part8', title: '9 : Quyền và Nghĩa vụ của khách hàng' },
    { id: 'part9', title: '10 : Tư vấn và hỗ trợ khách hàng' },
    { id: 'part10', title: '11 : Bảo hành và bảo trì' },
    { id: 'part11', title: '12 : Trách nhiệm xử lý sự cố an ninh' },
    { id: 'part12', title: '13 : Giới hạn trách nhiệm pháp lý' },
    { id: 'part13', title: '14 : Dịch vụ được cung cấp bởi Đối tác' },
    { id: 'part14', title: '15 : Quyền sở hữu trí tuệ' },
    { id: 'part15', title: '16 : Bảo mật thông tin' },
    { id: 'part16', title: '17 : Thông báo' },
    { id: 'part17', title: '18 : Trường hợp bất khả kháng' },
    { id: 'part18', title: '19 : Ủy quyền xử lý dữ liệu' },
    { id: 'part19', title: '20 : Hiệu lực và chấm dứt thỏa thuận' },
    { id: 'conclusion', title: 'Điều khoản chung' },
];




const ClausePage = () => {
    const [chooseId, setChooseId] = useState<string>('intro')
    const scrollToSection = (id: string) => {
        try {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                setChooseId(id)
            }
        } catch (error) {
            console.log("scrollToSection Error", error);

        }
    };

    return (
        <div className="contain-content p-10">
            <div className="bg-gray-100 rounded-xl mb-5">
                <h1 className="flex justify-center items-center p-16 text-3xl pb-0">Thoả thuận sử dụng Dịch vụ MatDash</h1>
                <h1 className="flex justify-center items-center p-16 text-xl font-base pt-5">Cập nhật cuối: 03/04/2025</h1>
            </div>
            <div className="flex h-screen relative">
                {/* Sidebar */}
                <aside className="absolute top-0 left-0 h-full w-80 bg-gray-100 p-4 overflow-y-auto border-r">
                    <h2 className="text-xl font-bold mb-4">Mục lục</h2>
                    <ul className="space-y-2">
                        {SECTIONS.map((section) => (
                            <li key={section.id}>
                                <Button
                                    type="button"
                                    onClick={() => scrollToSection(section.id)}
                                    className={`w-full text-gray-700 rounded-md flex justify-start hover:text-white hover:bg-blue-400" ${chooseId === section.id && "bg-lime-500 text-white "}`}
                                    color="gray"
                                    outline={false}

                                >
                                    <span className="text-sm">
                                        {section.title}
                                    </span>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Nội dung */}
                <main className="flex-1 ps-96 space-y-10 overflow-y-auto">
                    <p className="font-normal  text-gray-900">
                        Đây là thỏa thuận pháp lý giữa Khách hàng với Công ty TNHH Chuyển đổi số , quy định các điều khoản trong việc Khách hàng sử dụng Phần mềm ("Thỏa thuận").
                    </p>
                    <p className="font-normal  text-gray-900">
                        Thỏa thuận này là Hợp đồng dịch vụ thể hiện sự đồng ý tiến hành giao dịch dưới hình thức giao dịch điện tử giữa hai Bên của Thỏa thuận. Bằng cách tích chọn vào ô "Tôi đồng ý với Thỏa Thuận sử dụng dịch vụ phần mềm", Khách hàng đồng ý rằng các điều khoản này sẽ được áp dụng nếu Khách hàng lựa chọn truy cập hoặc sử dụng dịch vụ phần mềm và thao tác tích chọn này có nghĩa là hai Bên đã đồng ý với mọi điều khoản của Thỏa thuận và được xem như hai Bên đã ký kết Thỏa thuận.
                    </p>

                    <div id='intro' className="scroll-mt-24 text-sm">
                        <h2 className="text-3xl font-bold mb-4">Điều 1 : Định nghĩa</h2>
                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">1.1 Phần mềm MatDash</strong> : Là phần mềm mang tên MatDash do công ty Cổ Phần cung cấp. Phần mềm được MatDash phát triển đáp ứng các tính năng được mô tả tại website <a href="https://matdash.vn" target="_blank" rel="noopener noreferrer" className="text-blue-700">https://matdash.vn</a>.
                        </p>
                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">1.2 Quyền sử dụng dịch vụ Phần mềm</strong> : Có nghĩa là quyền truy cập và khai thác các tính năng của Phần mềm cho mục đích phù hợp với các quy định của pháp luật Việt Nam (không bao gồm việc được chuyển giao, chuyển nhượng cho bên thứ ba bất kỳ).
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">1.3 Dịch vụ Phần mềm (gọi tắt là Dịch vụ)</strong> : Có nghĩa là một loại hàng hóa đặc biệt trong đó Khách hàng được Quyền sử dụng Phần mềm trong một khoảng thời gian nhất định thường được tính theo đơn vị là tháng hoặc năm.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">1.4 Khách hàng</strong> : Là cá nhân hoặc tổ chức sử dụng Phần mềm theo các điều khoản và điều kiện của Thỏa thuận này.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">1.5 Tài khoản quản trị hệ thống</strong> : Có nghĩa là tài khoản hợp pháp truy cập vào Dịch vụ và có thẩm quyền cao nhất để toàn quyền sử dụng các tính năng của Phần mềm theo điều khoản của Thỏa thuận này, kể cả việc cho phép hay hạn chế quyền sử dụng của một tài khoản truy cập khác.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">1.6 Kích hoạt Dịch vụ</strong> : Có nghĩa là thời điểm mà Công ty đã bàn giao toàn bộ Tài khoản quản trị Hệ thống cho Khách hàng và Khách hàng có thể truy cập vào Dịch vụ để sử dụng Phần mềm theo điều khoản của Thỏa thuận này.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">1.7 Thời gian Dịch vụ</strong> : Có nghĩa là khoảng thời gian bắt đầu được tính từ thời điểm Kích hoạt Dịch vụ cho đến thời điểm Khách hàng đề nghị Huỷ Dịch vụ hoặc Công ty đơn phương Huỷ Dịch vụ vì lý do Khách hàng vi phạm điều khoản của Thỏa thuận này hoặc thời điểm Khách hàng không còn quyền sử dụng Dịch vụ theo điều khoản của Thỏa thuận này tùy điều kiện nào đến trước.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">1.8 Tạm dừng Dịch vụ</strong> : Có nghĩa là việc tạm thời hạn chế một phần hoặc toàn bộ quyền sử dụng Dịch vụ. Việc hạn chế này có thể không cho phép Khách hàng được truy cập vào Dịch vụ hoặc có thể truy cập được Dịch vụ nhưng không thể sử dụng một số tính năng nào đó của Phần mềm.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">1.9 Huỷ Dịch vụ</strong> : Có nghĩa là việc xóa hoàn toàn Dịch vụ và các dữ liệu phát sinh từ hoặc có liên quan đến Dịch vụ. Khách hàng sẽ không thể truy cập được vào Dịch vụ để sử dụng hay lấy lại bất kể dữ liệu có liên quan đến Dịch vụ đã được khởi tạo hoặc lưu giữ trước đó.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">1.10 Phí Dịch vụ</strong> : Có nghĩa là số tiền mà Khách hàng phải trả cho Công ty để sử dụng và duy trì Dịch vụ trong một khoảng thời gian, thường được tính theo đơn vị là tháng hoặc năm theo các điều khoản của Thỏa thuận này.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">1.11 Tính phí Dịch vụ</strong> : Có nghĩa là việc tính toán tổng số tiền mà Khách hàng phải trả cho Công ty sau khi Kích hoạt Dịch vụ. Khách hàng phải trả Phí Dịch vụ cho Công ty bất kể việc Khách hàng có sử dụng hay không sử dụng Dịch vụ Phần mềm.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">1.12 Quyền sở hữu trí tuệ</strong> : Có nghĩa là quyền sở hữu, quyền tác giả đối với các sáng chế, nhãn hiệu, nhãn hiệu dịch vụ, logo, tên thương mại, tên miền internet, bản quyền (bao gồm các quyền đối với Phần mềm) và các quyền nhân thân đối với mã nguồn Phần mềm, quyền đối với cơ sở dữ liệu, quyền đối với thiết kế bố trí mạch tích hợp bán dẫn, giải pháp hữu ích, quyền trong thiết kế, kiểu dáng, phát minh, bí mật kinh doanh và quyền sở hữu trí tuệ khác trong mỗi trường hợp cụ thể dù được đăng ký hay không, và tất cả các quyền và hình thức bảo hộ có hiệu lực tương tự hoặc tương đương tại bất kỳ địa điểm nào trên thế giới, bao gồm cả các đăng ký và đơn đăng ký.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">1.13 Bản quyền Phần mềm</strong> : Có nghĩa là bất kỳ quyền nào trong các Quyền sở hữu trí tuệ của Phần mềm  được quy định tại Điều 15 của thoả thuận này.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">1.14 Hệ thống</strong> : Bao gồm hệ thống (các) máy chủ đặt tại Trung tâm dữ liệu của Công ty hoặc Trung tâm dữ liệu của bên thứ ba bất kỳ theo chỉ định của Công ty, được cài đặt các Phần mềm hệ thống và Phần mềm.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">1.15 Đối tác thứ ba</strong> : Có nghĩa là bất kỳ tổ chức, cá nhân có hợp tác với Công ty để cung cấp các dịch vụ, tiện ích trên Phần mềm như: ngân hàng, ví điện tử, dịch vụ SMS.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">1.16 Thông tin phái sinh</strong> : Có nghĩa là các thông tin được tổng hợp, suy luận từ các thông tin gốc do Khách hàng tạo ra trong Phần mềm. Ví dụ: Thông Tin Phái Sinh từ Phần mềm có thể là Báo cáo về tình hình áp dụng thanh toán không tiền mặt của ngành...
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">1.17 Ngày làm việc</strong> :  Có nghĩa là bất kỳ ngày nào ngoại trừ ngày Thứ bảy, Chủ nhật hoặc ngày nghỉ lễ, tết ở Việt Nam theo quy định của pháp luật Việt Nam.
                        </p>


                    </div>

                    <div id='part1' className="scroll-mt-24 text-sm">
                        <h2 className="text-3xl font-bold mb-4">Điều 2 : Dịch vụ và Kích hoạt Dịch vụ</h2>
                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">2.1 Phần mềm : Dịch vụ </strong>
                        </p>
                        <List ordered nested className="mb-2">
                            <ListItem>MatDash chịu trách nhiệm cung cấp cho Khách hàng Dịch vụ phần mềm  đáp ứng các yêu cầu được mô tả trên website <a href="https://matdash.vn" target="_blank" rel="noopener noreferrer" className="text-blue-700">https://matdash.vn</a>, phù hợp với quy định pháp luật Việt Nam tại từng thời điểm và tuân theo các điều khoản của Thỏa thuận này;</ListItem>
                            <ListItem>Khách hàng sẽ có được Quyền sử dụng Phần mềm khi Khách hàng đã thanh toán đầy đủ phí Dịch vụ và chi phí Kích hoạt Dịch vụ theo quy định tại Thỏa thuận này.</ListItem>
                        </List>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">2.2 Phần mềm : Kích hoạt Dịch vụ</strong>
                        </p>
                        <List ordered nested className="mb-2">
                            <ListItem>Thời điểm Công ty bàn giao Tài khoản quản trị Hệ thống Dịch vụ phần mềm cho Khách hàng hoặc/và người dùng của Khách hàng chính là thời điểm Kích hoạt Dịch vụ;</ListItem>
                            <ListItem>Sau khi đã tiếp nhận Tài khoản quản trị Hệ thống Dịch vụ phần mềm thì Khách hàng hoặc/và người dùng của Khách hàng phải chịu trách nhiệm thay đổi mật khẩu truy cập Dịch vụ và chịu hoàn toàn trách nhiệm về việc bảo mật Tài khoản truy cập hệ thống;</ListItem>
                            <ListItem>Thời điểm Kích hoạt Dịch vụ được xem như là thời điểm Công ty đã hoàn thành nghĩa vụ bàn giao Phần mềm cho Khách hàng.</ListItem>
                        </List>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">2.3 Phần mềm : Tài khoản truy cập Dịch vụ</strong>
                        </p>
                        <List ordered nested className="mb-2">
                            <ListItem>Việc bàn giao và xác thực Tài khoản quản trị Hệ thống và Tài khoản truy cập Dịch vụ sẽ được tiến hành thông qua email và số điện thoại của người sử dụng của Khách hàng;</ListItem>
                            <ListItem>Khách hàng có trách nhiệm khai báo đầy đủ và chính xác thông tin của người dùng vào Dịch vụ;</ListItem>
                            <ListItem>Khách hàng và người dùng của Khách hàng phải chịu trách nhiệm bảo mật tài khoản và mật khẩu truy cập Dịch vụ. Khách hàng tự chịu trách nhiệm về mọi thiệt hại do người của Khách hàng vô tình hoặc cố ý tiết lộ tài khoản và mật khẩu truy cập dẫn đến thất thoát, mất mát hoặc phá hủy thông tin gây thiệt hại cho hai Bên liên quan.</ListItem>
                        </List>
                    </div>

                    <div id='part2' className="scroll-mt-24 text-sm">
                        <h2 className="text-3xl font-bold mb-4">Điều 3: Phần mềm : Dịch vụ và chi phí Kích hoạt Dịch vụ</h2>
                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">3.1</strong> : Chi phí Kích hoạt Dịch vụ phần mềm được công bố trực tiếp trên trên website <a href="https://matdash.vn" target="_blank" rel="noopener noreferrer" className="text-blue-700">https://matdash.vn</a> Chi phí này chỉ tính một lần tại thời điểm tiến hành Kích hoạt Dịch vụ.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">3.2</strong> : Phí Dịch vụ phần mềm được tính theo tháng hoặc theo năm và được công bố trực tiếp trên trên website <a href="https://matdash.vn" target="_blank" rel="noopener noreferrer" className="text-blue-700">https://matdash.vn</a> việc tính sẽ bắt đầu tính từ thời điểm Kích hoạt Dịch vụ và chỉ ngừng khi Khách hàng thông báo Huỷ Dịch vụ bằng email hoặc văn bản cho Công ty hoặc Công ty đơn phương Huỷ Dịch vụ vì Khách hàng không thực hiện việc thanh toán phí hoặc Khách hàng vi phạm điều khoản của Thỏa thuận này buộc Công ty phải đơn phương huỷ Dịch vụ.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">3.3 Phí Dịch vụ phần mềm bao gồm</strong>
                        </p>
                        <List ordered nested className="mb-2">
                            <ListItem><strong>Phí Dịch vụ sử dụng Phần mềm SO9</strong> : Là khoản phí mà Khách hàng thanh toán cho Công ty để sử dụng Phần mềm đã mua theo điều khoản nêu tại Thỏa thuận này;</ListItem>
                            <ListItem><strong>Phí phát sinh do dùng quá hạn mức</strong> : Là khoản phí mà Khách hàng thanh toán cho Công ty do sử dụng quá hạn mức cho phép của gói dịch vụ đã đăng ký;</ListItem>
                        </List>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">3.4</strong> : Phí Dịch vụ phần mềm KHÔNG bao gồm phí cho bên thứ ba như ngân hàng, ứng dụng mà Công ty kết nối tới.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">3.5</strong> : Cong ty có trách nhiệm hoàn lại phí Dịch vụ mà Khách hàng đã thanh toán cho Công ty trong vòng 15 ngày kể từ khi khách hàng thanh toán nếu khách hàng không hài lòng về dịch vụ.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">3.6</strong> : Hàng năm, Công ty có quyền điều chỉnh mức phí Kích hoạt Dịch vụ hoặc/và phí Dịch vụ Công ty theo giá thị trường và công bố trực tiếp trên website <a href="https://matdash.vn" target="_blank" rel="noopener noreferrer" className="text-blue-700">https://matdash.vn</a>
                        </p>

                        <p className="text-gray-700 mb-3">
                            Trường hợp Khách hàng đã thanh toán trước phí Dịch vụ Công ty cho nhiều năm thì phí Dịch vụ Công ty hàng năm sẽ không thay đổi trong suốt thời hạn Dịch vụ mà Khách hàng đã thanh toán.
                        </p>

                    </div>

                    <div id='part3' className="scroll-mt-24 text-sm">
                        <h2 className="text-3xl font-bold mb-4">Điều 4: Phương Thức và thời hạn thanh toán</h2>
                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">4.1 Phương thức thanh toán</strong> :  Khách hàng chịu trách nhiệm thanh toán cho Công ty bằng chuyển khoản hoặc thanh toán trực tuyến thông qua ngân hàng hoặc Đối tác.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">4.2 Thời hạn thanh toán :</strong>
                        </p>
                        <List ordered nested className="mb-2">
                            <ListItem>Khách hàng chịu trách nhiệm thanh toán toàn bộ chi phí Kích hoạt Dịch vụ và phí Dịch vụ theo chu kỳ thanh toán đã chọn cho SO9 ngay sau khi đặt hàng thành công.</ListItem>
                            <ListItem>Khách hàng chịu trách nhiệm thanh toán cho Công ty phí Dịch vụ của các chu kỳ tiếp theo chậm nhất là 7 ngày kể từ ngày Khách hàng nhận được thông báo của SO9 về việc đóng phí và mức phí Dịch vụ cần đóng cho chu kỳ tiếp theo. Thông báo này được gửi qua email, điện thoại hoặc các hình thức liên lạc khác.</ListItem>
                        </List>
                    </div>

                    <div id='part4' className="scroll-mt-24 text-sm">
                        <h2 className="text-3xl font-bold mb-4">Điều 5: Tạm dừng Dịch vụ</h2>
                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">5.1</strong> : Trong trường hợp Khách hàng muốn tạm dừng Dịch vụ thì Khách hàng phải thông báo cho công ty bằng văn bản, hoặc qua email hoặc gửi yêu cầu cho Công ty bằng cách sử dụng tính gửi yêu cầu hỗ trợ tại Phần mềm. Sau khi nhận được yêu cầu của Khách hàng, Công ty có trách nhiệm tiến hành các thủ tục cần thiết để tạm dừng Dịch vụ.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">5.2 Công ty có quyền tạm dừng Dịch vụ trong trường hợp sau :</strong>
                        </p>
                        <List ordered nested className="mb-2">
                            <ListItem>Công ty thực hiện lệnh tạm dừng Dịch vụ theo yêu cầu của Cơ quan có thẩm quyền của Nhà nước</ListItem>
                            <ListItem>Hoặc Khách hàng quá hạn thanh toán phí Dịch vụ</ListItem>
                            <ListItem>Hoặc Khách hàng vi phạm nghĩa vụ của Thỏa thuận này</ListItem>
                            <ListItem>Hoặc trong quá trình bảo trì, nâng cấp, sửa lỗi hoặc để khắc phục, phòng ngừa các sự cố về an ninh thông tin hoặc theo yêu cầu kỹ thuật</ListItem>
                        </List>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">5.3</strong> : Trừ trường hợp tạm dừng Dịch vụ theo quy định tại Điểm a và d Khoản 2 Điều này, Công ty có trách nhiệm thông báo trước 01 ngày làm việc cho Khách hàng bằng văn bản hoặc email hoặc điện thoại hoặc trên chính Phần mềm khi tạm dừng Dịch vụ theo Điểm 2 và 3 Khoản 2 Điều này.
                        </p>
                    </div>

                    <div id='part5' className="scroll-mt-24 text-sm">
                        <h2 className="text-3xl font-bold mb-4">Điều 6: Huỷ Dịch vụ</h2>
                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">6.1</strong> : Trong trường hợp Khách hàng muốn đơn phương Huỷ Dịch vụ thì Khách hàng phải thông báo cho Công ty bằng văn bản hoặc gửi yêu cầu cho Công ty. Sau khi nhận được yêu cầu của Khách hàng, Công ty có trách nhiệm tiến hành các thủ tục cần thiết để Huỷ Dịch vụ.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">6.2 Công ty có quyền đơn phương Huỷ Dịch vụ trong trường hợp sau :</strong>
                        </p>
                        <List ordered nested className="mb-2">
                            <ListItem>Công ty thực hiện lệnh Huỷ Dịch vụ theo yêu cầu của Cơ quan có thẩm quyền của Nhà nước;</ListItem>
                            <ListItem>Hoặc Khách hàng quá hạn thanh toán phí Dịch vụ 15 ngày</ListItem>
                            <ListItem>Hoặc Khách hàng vi phạm nghĩa vụ của Thỏa thuận này</ListItem>
                        </List>
                    </div>

                    <div id='part6' className="scroll-mt-24 text-sm">
                        <h2 className="text-3xl font-bold mb-4">Điều 7: Dùng thử dịch vụ</h2>
                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">7.1</strong> : Khách hàng liên hệ Công ty để được dùng thử dịch vụ. Công ty có thể cấp tài khoản dùng thử ( hoặc tài khoản Demo) để khách hàng trải nghiệm sản phẩm. Công ty có quyền từ chối yêu cầu dùng thử nếu khách hàng không đáp ứng các tiêu chí của Công ty
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">7.2</strong> : Công ty sẽ không chịu trách nhiệm về các sai sót, mất mát dữ liệu hay bất cứ quyền lợi nào của Khách hàng trong quá trình dùng thử. Khách hàng không nên nhập các số liệu thương mại quan trọng trong suốt thời gian dùng thử Dịch vụ công ty.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">7.3</strong> :  Công ty có quyền thu hồi tài khoản dùng thử. Lúc này khách hàng cần đăng ký và thanh toán để chuyển sang sử dụng dịch vụ chính thức
                        </p>


                    </div>

                    <div id='part7' className="scroll-mt-24 text-sm">
                        <h2 className="text-3xl font-bold mb-4">Điều 8: Quyền sử dụng Dịch vụ</h2>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">8.1 Quyền của Công ty :</strong>
                        </p>
                        <List ordered nested className="mb-2">
                            <ListItem>Thu phí Dịch vụ theo quy định của Thỏa thuận này</ListItem>
                            <ListItem>Đơn phương tạm dừng hoặc Huỷ Dịch vụ hoặc Chấm dứt Thỏa thuận nếu Khách hàng vi phạm các nghĩa vụ của Thỏa thuận này</ListItem>
                            <ListItem>Không chịu trách nhiệm duy trì việc lưu trữ dữ liệu của Khách hàng trên Trung tâm dữ liệu của Công ty và không chịu trách nhiệm với bất kỳ sai sót, mất mát về dữ liệu của Khách hàng kể từ thời điểm Huỷ Dịch vụ</ListItem>
                            <ListItem>Được quyền xử lý và truyền tải dữ liệu của Khách hàng trong suốt quá trình Khách hàng sử dụng Dịch vụ Công ty</ListItem>
                            <ListItem>Được quyền sử dụng Thông tin phái sinh từ một phần hoặc toàn bộ thông tin do Khách hàng tạo ra khi sử dụng sản phẩm của SO9 để phục vụ cho các mục đích nghiên cứu cải tiến sản phẩm, thị trường, thói quen tiêu dùng và các mục đích khác có thể mang lại lợi nhuận hoặc không mang lại lợi nhuận. Công ty cam kết các thông tin phái sinh này không chứa đựng bất kể thông tin cụ thể nào về liên hệ (tên, số điện thoại), các giao dịch cụ thể hoặc các bí mật sản xuất kinh doanh</ListItem>
                        </List>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">8.2 Nghĩa vụ của Công ty :</strong>
                        </p>
                        <List ordered nested className="mb-2">
                            <ListItem>Thu phí Dịch vụ theo quy định của Thỏa thuận này</ListItem>
                            <ListItem>Đơn phương tạm dừng hoặc Huỷ Dịch vụ hoặc Chấm dứt Thỏa thuận nếu Khách hàng vi phạm các nghĩa vụ của Thỏa thuận này</ListItem>
                            <ListItem>Không chịu trách nhiệm duy trì việc lưu trữ dữ liệu của Khách hàng trên Trung tâm dữ liệu của Công ty và không chịu trách nhiệm với bất kỳ sai sót, mất mát về dữ liệu của Khách hàng kể từ thời điểm Huỷ Dịch vụ</ListItem>
                            <ListItem>Được quyền xử lý và truyền tải dữ liệu của Khách hàng trong suốt quá trình Khách hàng sử dụng Dịch vụ Công ty</ListItem>
                            <ListItem>Được quyền sử dụng Thông tin phái sinh từ một phần hoặc toàn bộ thông tin do Khách hàng tạo ra khi sử dụng sản phẩm của SO9 để phục vụ cho các mục đích nghiên cứu cải tiến sản phẩm, thị trường, thói quen tiêu dùng và các mục đích khác có thể mang lại lợi nhuận hoặc không mang lại lợi nhuận. Công ty cam kết các thông tin phái sinh này không chứa đựng bất kể thông tin cụ thể nào về liên hệ (tên, số điện thoại), các giao dịch cụ thể hoặc các bí mật sản xuất kinh doanh</ListItem>
                        </List>
                    </div>

                    <div id='part8' className="scroll-mt-24 text-sm">
                        <h2 className="text-3xl font-bold mb-4">Điều 9: Quyền và nghĩa vụ của Khách hàng</h2>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">9.1 Quyền của Khách hàng :</strong>
                        </p>
                        <List ordered nested className="mb-2">
                            <ListItem>Khách hàng có quyền sử dụng Dịch vụ để tạo ra dữ liệu phục vụ công việc của mình và có quyền tải về dữ liệu suốt thời gian Dịch vụ được cho đến khi Công ty tạm dừng Dịch vụ hoặc Huỷ Dịch vụ.</ListItem>
                            <ListItem>Khách hàng có quyền yêu cầu tạm dừng hoặc Huỷ Dịch vụ theo quy định tại Thỏa thuận này</ListItem>
                            <ListItem>Yêu cầu Công ty thực hiện đúng, đầy đủ trách nhiệm việc bảo trì hệ thống theo quy định của Thỏa thuận</ListItem>

                        </List>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">9.2 Nghĩa vụ của Khách hàng :</strong>
                        </p>
                        <List ordered nested className="mb-2">
                            <ListItem>Thanh toán cho Công ty đầy đủ, đúng hạn phí Dịch vụ theo quy định của Thỏa thuận này</ListItem>
                            <ListItem>
                                Khách hàng không được phép sử dụng Dịch vụ Phần mềm SO9 với mục đích sau:
                                <List nested className="mb-2">
                                    <ListItem>Làm tổn hại, làm phiền cho người khác hoặc gây ra thương tổn đến con người và tài sản</ListItem>
                                    <ListItem>Liên quan đến việc lừa đảo, chiếm đoạt tài sản</ListItem>
                                    <ListItem>Xâm phạm các quyền riêng tư hoặc kì thị chủng tộc, tôn giáo, giới tính, người tàn tật</ListItem>
                                    <ListItem>Xâm phạm Quyền sở hữu trí tuệ hoặc các quyền sở hữu khác</ListItem>
                                    <ListItem>Cản trở hoặc phá hỏng Dịch vụ (bao gồm nhưng không giới hạn bởi việc truy cập Dịch vụ thông qua bất cứ phương tiện máy móc, Phần mềm)</ListItem>
                                    <ListItem>Phục vụ cho các tổ chức khủng bố Việt Nam hoặc khủng bố quốc tế hoặc cho các tổ chức thuộc các quốc gia bị nước Mỹ cấm vận</ListItem>
                                    <ListItem>Vi phạm quy định của pháp luật</ListItem>
                                </List>

                            </ListItem>
                            <ListItem>Khách hàng chịu trách nhiệm đăng nhập vào Phần mềm để kiểm tra thời hạn sử dụng theo thông tin truy cập do Công ty gửi thông báo qua email hoặc/và điện thoại</ListItem>
                            <ListItem>Khách hàng chịu trách nhiệm chuẩn bị đầy đủ thiết bị, nhân lực và đường truyền theo đúng khuyến cáo của Công ty ghi trong Phần mềm để tổ chức khai thác, vận hành hệ thống Phần mềm</ListItem>
                            <ListItem>Khách hàng chịu trách nhiệm tiếp nhận, sử dụng Phần mềm đúng theo hướng dẫn và khuyến cáo sử dụng của Công ty công bố trong Phần mềm</ListItem>
                            <ListItem>Thực hiện các quyền và nghĩa vụ khác theo quy định tại Thỏa thuận này</ListItem>

                        </List>

                    </div>

                    <div id='part9' className="scroll-mt-24 text-sm">
                        <h2 className="text-3xl font-bold mb-4">Điều 10: Tư vấn và hỗ trợ Khách hàng</h2>
                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">10.1</strong> : Công ty chịu trách nhiệm cung cấp dịch vụ tư vấn hỗ trợ cho Khách hàng trong suốt quá trình sử dụng thông qua các kênh hỗ trợ được công bố tại website <a href="https://matdash.vn" target="_blank" rel="noopener noreferrer" className="text-blue-700">https://matdash.vn</a>.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">10.2</strong> : Trường hợp có sự thay đổi các kênh hỗ trợ Khách hàng, Công ty sẽ thực hiện công bố trên website <a href="https://matdash.vn" target="_blank" rel="noopener noreferrer" className="text-blue-700">https://matdash.vn</a> và Khách hàng có trách nhiệm chủ động lên website <a href="https://matdash.vn" target="_blank" rel="noopener noreferrer" className="text-blue-700">https://matdash.vn</a> để cập nhật thông tin và sử dụng dịch vụ tư vấn hỗ trợ của Công ty.
                        </p>


                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">10.3</strong> : Các dịch vụ tư vấn hỗ trợ thông qua hình thức khác (như dịch vụ tư vấn hỗ trợ tại các địa điểm theo yêu cầu của Khách hàng, dịch vụ tái đào tạo hướng dẫn sử dụng cho Khách hàng) sẽ được các bên thống nhất về chi phí và phương thức cung cấp bằng văn bản bổ sung khi có phát sinh yêu cầu.
                        </p>
                    </div>

                    <div id='part10' className="scroll-mt-24 text-sm">
                        <h2 className="text-3xl font-bold mb-4">Điều 11: Bảo hành, Bảo trì</h2>
                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">11.1</strong> : Công ty chịu trách nhiệm đảm bảo điều kiện kỹ thuật để Khách hàng có thể sử dụng được Phần mềm 24 giờ/ngày và 7 ngày/tuần ngoại trừ thời gian bảo trì, nâng cấp, khắc phục sự cố cho hệ thống. Thời gian ngưng hệ thống để bảo trì hoặc nâng cấp hoặc sao lưu sẽ được Công ty báo trước lịch thực hiện cho Khách hàng theo hình thức thông báo trực tiếp trên Phần mềm hoặc email. Lịch bảo trì hoặc nâng cấp hoặc sao lưu sẽ thực hiện theo định kỳ hàng ngày hoặc hàng tuần hoặc hàng tháng hoặc hàng năm và ưu tiên vào buổi đêm khi hệ thống ít sử dụng nhất..
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">11.2</strong> : Công ty có trách nhiệm tiến hành khắc phục sự cố của hệ thống chậm nhất là 08 giờ làm việc kể từ khi tiếp nhận được yêu cầu từ người sử dụng của Khách hàng, trừ trường hợp sự cố không phải do lỗi của Công ty hoặc sự kiện Bất khả kháng.
                        </p>
                    </div>

                    <div id='part11' className="scroll-mt-24 text-sm">
                        <h2 className="text-3xl font-bold mb-4">Điều 12: Trách nhiệm xử lý sự cố an ninh</h2>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">12.1</strong> : Các sự cố an ninh bao gồm nhưng không giới hạn bởi các trường hợp sau:
                        </p>
                        <List ordered nested className="mb-2">
                            <ListItem>Bị mất hoặc thay đổi dữ liệu trên Phần mềm mà không biết nguyên nhân</ListItem>
                            <ListItem>Bị gián đoạn không sử dụng được sản phẩm</ListItem>
                            <ListItem>Nghi ngờ bị hacker tấn công</ListItem>
                        </List>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">12.2</strong> : Trường hợp Khách hàng phát hiện ra các sự cố an ninh được nêu tại Khoản 12.1 Điều này, bằng mọi cách Khách hàng có trách nhiệm thông báo ngay lập tức với Công ty theo thông tin liên hệ được đặt tại website <a href="https://matdash.vn" target="_blank" rel="noopener noreferrer" className="text-blue-700">https://matdash.vn</a> và đảm bảo thông tin đã được người có trách nhiệm của SO9 xác nhận là đã nhận được thông tin.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">12.3</strong> : Khi xảy ra sự cố an ninh thông tin liên quan đến sản phẩm Công ty cung cấp cho Khách hàng, SO9 sẽ có trách nhiệm tổ chức điều tra để xử lý sự cố và khôi phục hoạt động cho Khách hàng. Trong quá trình điều tra và khắc phục sự cố, Khách hàng có trách nhiệm tham gia nếu Công ty có thể yêu cầu.
                        </p>
                    </div>

                    <div id='part12' className="scroll-mt-24 text-sm">
                        <h2 className="text-3xl font-bold mb-4">Điều 13: Giới hạn trách nhiệm pháp lý và thực hiện Dịch vụ</h2>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">13.1</strong> : Công ty không cam đoan, tuyên bố, hoặc bảo đảm rằng việc Khách hàng sử dụng Phần mềm của Công ty sẽ không bị gián đoạn hoặc không bị lỗi, hoặc Phần mềm sẽ đáp ứng yêu cầu Khách hàng.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">13.2</strong> : Công ty không đảm bảo dưới bất kỳ hình thức nào, dù rõ ràng hay ngầm định về các điều kiện như sự thỏa mãn về chất lượng, phù hợp cho nhu cầu sử dụng đặc thù hoặc không xâm phạm các quyền của bên thứ ba. Phần mềm được cung cấp cho Khách hàng dưới dạng "theo hiện trạng" và "có sẵn" cho Khách hàng sử dụng. Khách hàng sẽ chịu toàn bộ trách nhiệm trong việc xác định xem Phần mềm hoặc thông tin được tạo ra từ Phần mềm là đúng đắn và đáp ứng đầy đủ cho mục đích sử dụng của Khách hàng. Trong trường hợp vì bất kỳ lý do gì mà thông tin được tạo ra từ Phần mềm SO9 dẫn đến việc Khách hàng bị xử phạt hành chính hoặc hình sự thì Khách hàng phải tự chịu trách nhiệm về việc vi phạm của mình.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">13.3</strong> : Trong bất cứ trường hợp nào Công ty đều không chịu trách nhiệm về bất kỳ các thiệt hại nào trực tiếp, gián tiếp, ngẫu nhiên, đặc biệt, hậu quả hoặc mang tính chất trừng phạt, bao gồm nhưng không giới hạn ở các thiệt hại do mất doanh thu, lợi nhuận, lợi thế kinh doanh, ngừng việc, mất mát dữ liệu do hậu quả của :
                        </p>
                        <List ordered nested className="mb-2">
                            <ListItem>Việc sử dụng hoặc không thể sử dụng Phần mềm</ListItem>
                            <ListItem>Bất kỳ các thay đổi nào được thực hiện đối với Phần mềm</ListItem>
                            <ListItem>Truy cập không được phép hoặc biến đổi các dữ liệu</ListItem>
                        </List>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">13.4</strong> : Trong trường hợp sản phẩm của Công ty có sử dụng dịch vụ của bên thứ ba như ngân hàng, ví, ..., Công ty không đảm bảo về tính đúng sai của các thông tin trong các ứng dụng/ dịch vụ hoặc nếu bên thứ ba có cập nhật hệ thống mà dẫn đến mất sự ổn định hoặc ngưng trệ dịch vụ.
                        </p>


                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">13.5</strong> : Công ty được miễn trách nhiệm thực hiện nghĩa vụ được nêu trong Thỏa thuận này đối với các trường hợp xảy ra sự kiện Bất khả kháng ghi trong Thỏa thuận này trong thời gian mà sự kiện Bất khả kháng cản trở việc thực hiện nghĩa vụ của mình
                        </p>
                    </div>

                    <div id='part13' className="scroll-mt-24 text-sm">
                        <h2 className="text-3xl font-bold mb-4">Điều 14: Dịch vụ được cung cấp bởi Đối tác thứ ba</h2>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">13.1</strong> : Khách hàng có quyền sử dụng các dịch vụ của Đối tác thứ ba mà Công ty đã kết nối trong Thời hạn Dịch vụ Công ty và thời gian sử dụng dịch vụ của Đối tác thứ ba (nếu có)
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">13.2</strong> : Khách hàng cần hiểu rằng, Công ty cung cấp các dịch vụ của Đối tác thứ ba chỉ nhằm mục đích tăng thêm các tiện ích cho Khách hàng khi sử dụng Phần mềm. Khách hàng có thể tùy chọn sử dụng hoặc không sử dụng các dịch vụ của Đối tác thứ ba. Hoặc chọn dịch vụ của đối tác thứ ba mà mình cho rằng ổn dịnh nhất
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">13.3</strong> :Trong suốt quá trình sử dụng các dịch vụ của Đối tác thứ ba, Khách hàng cần tuân thủ các điều kiện, quy định, hướng dẫn sử dụng của Đối tác thứ ba khi cung cấp dịch vụ cho Khách hàng; hướng dẫn của Công ty công bố trong Phần mềm và theo quy định của pháp luật hiện hành định hoặc ngưng trệ dịch vụ.
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">13.4</strong> : Khi có các vướng mắc liên quan đến các dịch vụ của Đối tác thứ ba như giao dịch thanh toán, tra cứu số dư, trạng thái giao dịch,… Khách hàng cần chủ động liên hệ với Đối tác thứ ba để được hỗ trợ
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">13.5</strong> : Khi có các vướng mắc liên quan đến thao tác sử dụng tính năng kết nối dịch vụ của Đối tác thứ ba trên Phần mềm như đã nêu trong tài liệu hướng dẫn sử dụng được công bố trên Phần mềm thì Khách hàng chủ động liên hệ với Công ty thông qua các kênh hỗ trợ Công ty đã công bố trên website <a href="https://matdash.vn" target="_blank" rel="noopener noreferrer" className="text-blue-700">https://matdash.vn</a>
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">13.6</strong> : Trong trường hợp vì bất kỳ lý do gì mà việc sử dụng các dịch vụ của Đối tác thứ ba dẫn đến việc vi phạm và gây hậu quả Khách hàng bị xử phạt hành chính hoặc hình sự thì Khách hàng phải tự chịu trách nhiệm về việc vi phạm của mình
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">13.7</strong> : Trong bất kỳ trường hợp nào Công ty đều không chịu trách nhiệm về bất kỳ thiệt hại trực tiếp, gián tiếp, ngẫu nhiên khi Khách hàng sử dụng dịch vụ do Đối tác thứ ba cung cấp trê
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">13.8</strong> : Đối với các sự cố, nâng cấp từ hệ thống của Đối tác thứ ba thì thời gian khắc phục, nâng cấp sẽ theo thông báo của Đối tác thứ ba
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">13.9</strong> : Tất các các chi phí phát sinh liên quan đến sử dụng dịch vụ của đối tác thứ ba như phí ngân hàng, phí API, phí SMS banking, phí thu hộ, chi hộ... và tất cả các loại phí khác thuộc về đối tác thứ ba, khách hàng phải chịu trách nhiệm chi trả
                        </p>
                    </div>

                    <div id='part14' className="scroll-mt-24 text-sm">
                        <h2 className="text-3xl font-bold mb-4">Điều 15: Quyền sở hữu trí tuệ</h2>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">15.1</strong> : Công ty là chủ sở hữu Bản quyền Phần mềm MatDash
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">15.2</strong> : Khách hàng đồng ý rằng Bản quyền Phần mềm thuộc sở hữu riêng của Công ty. Khách hàng cam kết không xâm phạm Bản quyền Phần mềm, Quyền sở hữu trí tuệ, bí mật kinh doanh của công ty để tạo ra các tác phẩm phái sinh hoặc tiết lộ hoặc cung cấp cho bất kỳ bên thứ ba nào khác với bất kể phương thức hay mục đích nào khác ngoại trừ được sự đồng ý rõ ràng bằng văn bản của Công ty
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">15.3</strong> : Khách hàng đồng ý rằng Phần mềm , bao gồm nhưng không giới hạn: Giao diện người sử dụng, đoạn âm thanh, đoạn video, nội dung hướng dẫn sử dụng và Phần mềm được sử dụng để thực hiện Phần mềm thuộc sở hữu riêng của Công ty được bảo hộ bởi pháp luật về sở hữu trí tuệ và quyền tác giả. Khách hàng đồng ý sẽ không sử dụng các thông tin hoặc tài liệu thuộc sở hữu riêng đó theo bất cứ cách thức nào ngoại trừ cho mục đích sử dụng Phần mềm theo Thỏa thuận này. Không có phần nào trong Phần mềm có thể được sao chép lại dưới bất kỳ hình thức nào hoặc bằng bất cứ phương tiện nào, trừ khi được cho phép một cách rõ ràng theo các điều khoản này.
                        </p>


                    </div>

                    <div id='part15' className="scroll-mt-24 text-sm">
                        <h2 className="text-3xl font-bold mb-4">Điều 16: Bảo mật Thông tin</h2>
                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">16.1</strong> : Công ty chịu trách nhiệm thực hiện và duy trì các biện pháp bảo vệ và kỹ thuật để bảo vệ cho tính bảo mật và toàn vẹn đối với dữ liệu Khách hàng. Công ty cam kết sẽ :
                        </p>
                        <List ordered nested className="mb-2">
                            <ListItem>Không sửa đổi dữ liệu Khách hàng mà không có sự đồng ý của Khách hàng hoặc không phải vì mục đích khắc phục lỗi hay sự cố</ListItem>
                            <ListItem>Không tiết lộ dữ liệu Khách hàng trừ trường hợp phải tuân theo quy định của pháp luật hoặc được Khách hàng ủy quyền/cho phép truyền tải dữ liệu cho bên thứ ba</ListItem>
                            <ListItem>Không thay đổi dữ liệu của Khách hàng trừ trường hợp khắc phục lỗi kỹ thuật hoặc theo yêu cầu của Khách hàng</ListItem>
                        </List>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">16.2</strong> : Công ty không chịu trách nhiệm về các thất thoát dữ liệu, bí mật thông tin của Khách hàng do Khách hàng hoặc nhà thầu, nhân viên, bên tư vấn của Khách hàng vô tình hoặc cố ý gây ra hoặc do Khách hàng tự chia sẻ cho bên thứ ba
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">16.3</strong> : Khách hàng chịu trách nhiệm đảm bảo bí mật thông tin tài khoản người dùng
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">16.4</strong> : Khách hàng chịu trách nhiệm đối với toàn bộ các hoạt động thực hiện bởi các tài khoản người dùng của Khách hàng và có trách nhiệm ngay lập tức thông báo với SO9 về các truy cập trái phép
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">16.5</strong> : Công ty sẽ không chịu bất cứ trách nhiệm nào liên quan đến các tổn hại gây ra bởi người dùng của Khách hàng, bao gồm các cá nhân không có quyền truy cập vào dịch vụ vẫn có thể lấy được quyền truy cập do lỗi máy tính/ Phần mềm hoặc hệ thống mạng nội bộ của Khách hàng
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">16.6</strong> : Trong phạm vi của Thỏa thuận này, "Thông tin bí mật" bao gồm: dữ liệu của Khách hàng, công nghệ độc quyền của mỗi bên trong Thỏa thuận này, quy trình nghiệp vụ và các thông tin kỹ thuật của sản phẩm, thiết kế, và toàn bộ quá trình trao đổi giữa hai Bên liên quan đến dịch vụ và/ hoặc Phần mềm. Bất kể những điều đã đề cập ở trên, Thông tin bí mật không bao gồm các thông tin mà :
                        </p>
                        <List ordered nested className="mb-2">
                            <ListItem>Được công chúng biết tới hoặc đã phổ biến trên phương tiện truyền thông</ListItem>
                            <ListItem>Được biết tới trong ngành trước khi tiết lộ</ListItem>
                            <ListItem>Được công chúng biết tới không phải do lỗi của bên nhận thông tin</ListItem>
                            <ListItem>Dữ liệu tổng hợp trong đó không chứa bất kỳ thông tin cá nhân hoặc thông tin nào cụ thể của Khách hàng</ListItem>
                        </List>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">16.7</strong> : Khách hàng và Coong ty cùng đồng ý rằng :
                        </p>
                        <List ordered nested className="mb-2">
                            <ListItem>Thực hiện các biện pháp cần thiết để giữ bí mật cho tất cả các Thông tin bí mật</ListItem>
                            <ListItem>Không sao chép, cung cấp, chuyển giao một phần hay toàn bộ "Thông tin bí mật" cho bất kỳ bên thứ ba khi chưa có sự chấp thuận của bên có quyền sở hữu đối với "Thông tin bí mật"</ListItem>
                            <ListItem>Không sử dụng Thông tin bí mật mà hai Bên đã cung cấp cho nhau phục vụ cho các mục đích khác ngoài mục đích thực hiện Thỏa thuận này</ListItem>
                        </List>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">16.8</strong> : Khách hàng chấp thuận và đồng ý rằng Khách hàng cho phép Công ty được phép thu thập, chuyển giao, xử lý và lưu trữ các dữ liệu Khách hàng và các dữ liệu cá nhân mà Khách hàng có để phục vụ cho việc thực hiện các điều khoản của Thỏa thuận này. Khách hàng cũng đảm bảo rằng các thông tin mà Khách hàng đăng ký với Công ty để truy cập Phần mềm là chính xác
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">16.9</strong> : Khách hàng đồng ý cho Công ty phân tích, thống kê các dữ liệu để đưa ra các thông tin dự báo về tình hình chung và công bố dữ liệu công khai cho cộng đồng hoặc cung cấp cho bên thứ ba bất kỳ. Các dữ liệu công bố này hoàn toàn không có thông tin chi tiết liên quan đến dữ liệu và Khách hàng hoặc có ảnh hưởng đến bí mật kinh doanh của Khách hàng
                        </p>

                    </div>

                    <div id='part16' className="scroll-mt-24 text-sm">
                        <h2 className="text-3xl font-bold mb-4">Điều 17: Thông báo</h2>

                        <p className="text-gray-700 mb-3">
                            Trong quá trình sử dụng, Khách hàng đồng ý nhận các thông tin/ thông báo do Công ty gửi với nội dung và phương thức như sau :
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">17.1</strong> : Nội dung các thông báo bao gồm nhưng không giới hạn bởi các loại thông tin như sau :
                        </p>
                        <List ordered nested className="mb-2">
                            <ListItem>Thông tin về các tính năng mới của phần mềm</ListItem>
                            <ListItem>Thông tin về các phiên bản mới của phần mềm</ListItem>
                            <ListItem>Thông tin về các sản phẩm/dịch vụ có liên quan</ListItem>
                            <ListItem>Thông tin về nội dung các bài báo hoặc bản tin mà SO9 cho rằng có thể hữu ích cho Khách hàng trong quá trình hoạt động</ListItem>
                        </List>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">17.2</strong> : Phương thức gửi thông báo bao gồm nhưng không giới hạn bởi các hình thức sau :
                        </p>
                        <List ordered nested className="mb-2">
                            <ListItem>Thông báo trực tiếp trên màn hình phần mềm</ListItem>
                            <ListItem>Thông báo qua email</ListItem>
                            <ListItem>Thông báo qua tin nhắn trên điện thoại di động</ListItem>
                            <ListItem>Thông báo qua điện thoại</ListItem>
                            <ListItem>Thông báo qua văn bản</ListItem>
                            <ListItem>Thông báo bằng cách gặp trao đổi trực tiếp</ListItem>
                            <ListItem>Các hình thức thông báo khác phù hợp theo quy định của pháp luật Việt Nam</ListItem>
                        </List>
                    </div>

                    <div id='part17' className="scroll-mt-24 text-sm">
                        <h2 className="text-3xl font-bold mb-4">Điều 18: Trường hợp Bất khả kháng</h2>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">18.1</strong> : Sự kiện Bất khả kháng bao gồm nhưng không hạn chế ở: Thiên tai, động đất, lũ lụt, bão lụt, hỏa hoạn, cháy nổ, gió lốc, chiến tranh, tin tặc tấn công, dịch bệnh, phong tỏa, cách ly xã hội, đình công, hành động của bất kỳ Cơ quan có thẩm quyền nào của Nhà nước, mất điện trên diện rộng hoặc bất kỳ nguyên nhân nào khác vượt ngoài khả năng kiểm soát hợp lý của các hoặc mỗi bên trong Thỏa thuận này, và các sự kiện khác theo quy định của pháp luật Việt Nam
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">18.2</strong> : Thông báo sự kiện Bất khả kháng :
                        </p>
                        <List ordered nested className="mb-2">
                            <ListItem>Nếu một trong hai Bên vì điều kiện bắt buộc không thể thực hiện một phần hoặc toàn bộ trách nhiệm, công việc của mình do sự kiện Bất khả kháng thì trong vòng 14 ngày sau khi sự cố xảy ra, bên chịu ảnh hưởng phải thông báo cho bên kia bằng văn bản chi tiết toàn bộ sự việc của sự kiện Bất khả kháng</ListItem>
                            <ListItem>Bên gặp phải sự cố sẽ được miễn cho việc thực hiện công việc thuộc nghĩa vụ trong thời gian mà sự kiện Bất khả kháng cản trở công việc thực hiện của mình</ListItem>
                        </List>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">18.3</strong> : Trách nhiệm của các bên khi có sự kiện Bất khả kháng :
                        </p>
                        <List ordered nested className="mb-2">
                            <ListItem>Việc một bên không hoàn thành nghĩa vụ của mình do sự kiện Bất khả kháng sẽ không phải là cơ sở để bên kia Chấm dứt Thỏa thuận, trừ khi pháp luật Việt Nam có quy định khác. Trong trường hợp xảy ra sự kiện Bất khả kháng, thời gian thực hiện Thỏa Thuận sẽ được kéo dài bằng thời gian diễn ra sự kiện Bất khả kháng</ListItem>
                            <ListItem>Các tình huống và hoàn cảnh khác có ảnh hưởng tới việc thực hiện Thỏa thuận này không coi là sự kiện Bất khả kháng ngoại trừ khi cả hai bên cùng bàn bạc và đồng thuận ký kết thành văn bản bổ sung trong đó ghi nhận tình huống và hoàn cảnh đó được coi như là Bất khả kháng</ListItem>
                            <ListItem>Việc một bên chấm dứt Thỏa thuận do sự kiện Bất khả kháng không miễn trừ nghĩa vụ của bên đó đã phát sinh trước thời điểm có sự kiện Bất khả kháng</ListItem>
                        </List>
                    </div>

                    <div id='part18' className="scroll-mt-24 text-sm">
                        <h2 className="text-3xl font-bold mb-4">Điều 19: Uỷ quyền xử lý dữ liệu</h2>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">19.1</strong> : Bằng việc cung cấp các thông tin để Công ty liên kết tài khoản của khách hàng tại các ngân hàng, các tổ chức tín dụng vào hệ thống , khách hàng đã đồng ý ủy quyền cho Công ty được thay mặt khách hàng truy cập và xử lý các dữ liệu cần thiết cho mục đích cung cấp sản phẩm dịch vụ phần mềm
                        </p>

                    </div>

                    <div id='part19' className="scroll-mt-24 text-sm">
                        <h2 className="text-3xl font-bold mb-4">Điều 20: Hiệu lực và Chấm dứt Thỏa thuận</h2>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">20.1</strong> : Thỏa thuận có hiệu lực kể từ khi Khách hàng tích chọn vào ô "Tôi đồng ý với Thỏa thuận sử dụng dịch vụ" cho đến khi Dịch vụ Công ty bị Huỷ Dịch vụ hoặc các bên Chấm dứt Thỏa thuận theo Khoản 20.2 Điều này
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">20.2</strong> : Chấm dứt Thỏa thuận khi xảy ra một trong các trường hợp sau :
                        </p>
                        <List ordered nested className="mb-2">
                            <ListItem>Khi các bên hoàn thành thủ tục Huỷ Dịch vụ và Khách hàng đã thanh toán đầy đủ phí Dịch vụ theo quy định cũng như hoàn thành đầy đủ các nghĩa vụ của mình trong Thỏa thuận này</ListItem>
                            <ListItem>Khi Công ty đơn phương Huỷ Dịch vụ do Khách hàng không thanh toán phí Dịch vụ đủ và đúng thời hạn hoặc khi Khách hàng vi phạm nghĩa vụ khác tại Thỏa thuận này</ListItem>
                            <ListItem>Xảy ra sự kiện Bất khả kháng và hai Bên đồng ý Chấm dứt Thỏa thuận bằng văn bản</ListItem>
                        </List>


                    </div>


                    <div id='conclusion' className="scroll-mt-24 text-sm">
                        <h2 className="text-3xl font-bold mb-4">Điều 21: Điều khoản chung</h2>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">21.1</strong> : Thỏa thuận này được điều chỉnh bởi pháp luật Việt Nam
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">21.2</strong> : Điều khoản sửa đổi, bổ sung Thỏa thuận :
                        </p>

                        <List ordered nested className="mb-2">
                            <ListItem>Công ty có quyền sửa đổi, bổ sung các điều khoản trong Thỏa thuận sử dụng dịch vụ và được công bố trên website <a href="https://matdash.vn" target="_blank" rel="noopener noreferrer" className="text-blue-700">https://matdash.vn</a> và trên Phần mềm tại <a href="https://matdash.vn" target="_blank" rel="noopener noreferrer" className="text-blue-700">https://matdash.vn</a> </ListItem>
                            <ListItem>Trường hợp Khách hàng không đồng ý với các điều khoản sửa đổi, bổ sung đó, Khách hàng có thể thực hiện các thủ tục tạm dừng Dịch vụ hoặc Huỷ Dịch vụ theo quy định của Thỏa thuận này</ListItem>
                        </List>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">21.3</strong> : Khách hàng không được phép chuyển nhượng quyền lợi và nghĩa vụ của Thỏa thuận này cho bất cứ bên thứ ba nào khác mà không có sự chấp thuận bằng văn bản của Công ty
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">21.4</strong> : Việc một trong các điều khoản thuộc Thỏa thuận này bị coi là vô hiệu hay không thể thực hiện được không làm ảnh hưởng đến hiệu lực và khả năng thực hiện của các điều khoản còn lại trong Thỏa thuận này
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">21.5</strong> : Các bên cam kết thực hiện đầy đủ các điều khoản đã thỏa thuận trong Thỏa thuận, trong quá trình thực hiện nếu có vướng mắc phát sinh hai Bên kịp thời thông báo cho nhau để cùng giải quyết
                        </p>

                        <p className="text-gray-700 mb-3">
                            <strong className="text-lg">21.6</strong> : Mọi tranh chấp phát sinh giữa hai Bên liên quan đến Thỏa thuận (nếu có) trước hết được giải quyết thông qua thương lượng. Nếu tranh chấp không thể giải quyết bằng thương lượng thì một trong hai Bên có quyền yêu cầu đưa việc tranh chấp ra Tòa án có thẩm quyền để yêu cầu giải quyết. Quyết định của tòa là quyết định cuối cùng
                        </p>

                    </div>
                </main>
            </div>
        </div>
    );
}

export default ClausePage;