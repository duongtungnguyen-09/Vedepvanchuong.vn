const lessons = [
  {
    id: "tieu-thuyet", term: 1, category: "Bài 1", title: "Khả năng lớn lao của tiểu thuyết", author: "Xuân Tóc Đỏ cứu quốc · Nỗi buồn chiến tranh", format: "Đọc hiểu · tiểu thuyết",
    intro: "Chủ đề khám phá khả năng bao quát hiện thực, tổ chức nhiều tuyến nhân vật và thể hiện chiều sâu số phận con người của tiểu thuyết.",
    context: "Hai văn bản cho thấy tiểu thuyết có thể tạo tiếng cười trào phúng trước xã hội lố lăng hoặc đi sâu vào kí ức, mất mát và những dư chấn của chiến tranh. Đọc thêm: Trên xuồng cứu nạn.",
    ideas: ["Trong Xuân Tóc Đỏ cứu quốc, chú ý nghịch lí, tình huống trào phúng, cách nhân vật cơ hội được tung hô và sự phơi bày những giá trị đảo lộn.", "Với Nỗi buồn chiến tranh, theo dõi dòng hồi ức phi tuyến tính, sự đan xen hiện tại–quá khứ và ảnh hưởng dai dẳng của chiến tranh lên con người.", "Khi đọc tiểu thuyết, nhận diện người kể chuyện, điểm nhìn, cốt truyện, không gian, thời gian và cách tổ chức các tuyến sự kiện."],
    craft: "Không đồng nhất tác giả với người kể chuyện. Dùng chi tiết cụ thể để giải thích tác dụng của điểm nhìn, giọng kể và kết cấu; so sánh hai tác phẩm trên tiêu chí chung.",
    prompt: "So sánh cách hai văn bản lựa chọn điểm nhìn và tổ chức sự kiện để khắc họa hiện thực."
  },
  {
    id: "the-gioi-tho", term: 1, category: "Bài 2", title: "Những thế giới thơ", author: "Cảm hoài · Tây Tiến · Đàn ghi ta của Lor-ca", format: "Đọc hiểu · thơ",
    intro: "Ba tác phẩm mở ra những thế giới thơ khác nhau: hoài bão trước thời cuộc, kí ức người lính và bi kịch–sức sống của người nghệ sĩ.",
    context: "Cảm hoài của Đặng Dung gắn với nỗi lòng trước thời thế; Tây Tiến của Quang Dũng khắc họa đoàn quân và miền Tây; Đàn ghi ta của Lor-ca của Thanh Thảo tưởng niệm người nghệ sĩ cách tân. Đọc thêm: Bài thơ số 28.",
    ideas: ["Đọc thơ trung đại: chú ý thể thơ, hình ảnh ước lệ, tâm sự và hoàn cảnh lịch sử.", "Đọc Tây Tiến: lần theo mạch nhớ, sắc thái vừa dữ dội vừa mộng mơ và vẻ đẹp bi tráng của người lính.", "Đọc thơ hiện đại giàu biểu tượng: lí giải hình ảnh trong mối liên hệ toàn bài, để ngỏ nhiều tầng liên tưởng có căn cứ."],
    craft: "Phân tích từ ngữ, nhịp, vần, hình ảnh, giọng điệu và chủ thể trữ tình. Với thơ tượng trưng, không gán một nghĩa cố định cho mọi biểu tượng.",
    prompt: "Chọn hai bài thơ trong chủ đề, so sánh hình tượng trung tâm và cách ngôn ngữ tạo nên sắc thái riêng."
  },
  {
    id: "lap-luan", term: 1, category: "Bài 3", title: "Lập luận trong văn bản nghị luận", author: "Nhìn về vốn văn hóa dân tộc · Năng lực sáng tạo · Mấy ý nghĩ về thơ", format: "Đọc hiểu · nghị luận",
    intro: "Đọc văn bản nghị luận bằng cách nhận diện vấn đề, luận điểm, lí lẽ, bằng chứng và mối quan hệ giữa các phần của lập luận.",
    context: "Các văn bản bàn về bản sắc văn hóa, sức sáng tạo và thơ ca. Thực hành đọc: Cảm hứng và sáng tạo; thực hành tiếng Việt tập trung vào cách dùng phương tiện ngôn ngữ để biểu đạt thái độ, quan hệ lập luận và sắc thái nghĩa.",
    ideas: ["Tóm lược luận đề bằng một câu; phân biệt luận điểm chính với ý giải thích, minh họa hoặc phản biện.", "Đánh giá độ phù hợp, tin cậy và sức thuyết phục của lí lẽ, bằng chứng.", "Nhận xét cách người viết tổ chức lập luận, lựa chọn giọng điệu và tạo kết nối giữa các ý."],
    craft: "Dùng sơ đồ luận đề → luận điểm → lí lẽ/bằng chứng. Khi nhận xét, trích đúng chi tiết và giải thích nó hỗ trợ kết luận như thế nào.",
    prompt: "Lập sơ đồ lập luận cho một văn bản trong chủ đề, sau đó đánh giá một luận điểm cùng bằng chứng đi kèm."
  },
  {
    id: "ki-ao", term: 1, category: "Bài 4", title: "Yếu tố kì ảo trong truyện kể", author: "Hải khẩu linh từ · Muối của rừng", format: "Đọc hiểu · truyện kể",
    intro: "Yếu tố kì ảo có thể mở rộng thế giới nghệ thuật, thể hiện quan niệm về con người và tự nhiên, hoặc làm nổi bật những vấn đề hiện thực.",
    context: "Hải khẩu linh từ gợi cách truyện truyền kì kiến tạo thế giới linh thiêng, còn Muối của rừng của Nguyễn Huy Thiệp đặt con người trước thiên nhiên và giới hạn đạo đức. Đọc thêm: Bến trần gian.",
    ideas: ["Phân biệt chi tiết kì ảo với chi tiết hiện thực; xem xét cách chúng tương tác trong cốt truyện.", "Tìm hiểu vai trò của yếu tố linh thiêng, niềm tin và dấu ấn văn hóa trong truyện truyền kì.", "Ở truyện hiện đại, phân tích cách cái khác thường làm nhân vật thay đổi nhận thức, bộc lộ quan niệm về tự nhiên và sự sống."],
    craft: "Không chỉ gọi tên chi tiết kì ảo: cần nêu vị trí trong tình huống, ảnh hưởng tới diễn biến và ý nghĩa chủ đề.",
    prompt: "Phân tích một chi tiết khác thường trong truyện và giải thích vai trò của nó đối với chủ đề."
  },
  {
    id: "hai-kich", term: 1, category: "Bài 5", title: "Tiếng cười của hài kịch", author: "Nhân vật quan trọng · Giấu của", format: "Đọc hiểu · hài kịch",
    intro: "Hài kịch tạo tiếng cười qua xung đột, hành động và lời thoại, từ đó phơi bày thói xấu hoặc những nghịch lí trong cách ứng xử.",
    context: "Khi đọc kịch, văn bản được tổ chức thành hành động sân khấu: nhân vật đối đáp, che giấu, nhầm lẫn và bộc lộ tính cách qua từng lượt lời. Đọc thêm: Cẩn thận hão.",
    ideas: ["Xác định tình huống gây cười và mâu thuẫn tạo nên xung đột kịch.", "Phân tích lời thoại, hành động, chỉ dẫn sân khấu và nhịp tăng tiến của màn kịch.", "Nhận diện đối tượng bị châm biếm, thái độ của tác giả và suy ngẫm xã hội phía sau tiếng cười."],
    craft: "Phân biệt tiếng cười chỉ gây vui với tiếng cười trào phúng có đối tượng và ý nghĩa phê phán; luôn gắn nhận xét với lời thoại hoặc hành động cụ thể.",
    prompt: "Chọn một màn đối thoại hài hước, chỉ ra thủ pháp gây cười và đối tượng mà tiếng cười hướng tới."
  },
  {
    id: "so-sanh-truyen", term: 1, category: "Viết", title: "So sánh, đánh giá hai tác phẩm truyện", author: "Viết · trình bày kết quả so sánh", format: "Nghị luận văn học",
    intro: "Bài viết cần có tiêu chí so sánh rõ ràng, phân tích đủ từng tác phẩm và đưa ra nhận xét có căn cứ về điểm gặp gỡ lẫn khác biệt.",
    context: "Chọn tác phẩm truyện đã học hoặc ngữ liệu phù hợp với yêu cầu đề. Xác định trước phương diện so sánh: nhân vật, tình huống, điểm nhìn, chủ đề hay bút pháp.",
    ideas: ["Đọc kĩ đề, xác định đối tượng, phạm vi và tiêu chí; tránh lần lượt tóm tắt hai truyện.", "Lập luận theo từng phương diện, dùng dẫn chứng tương ứng từ cả hai văn bản.", "Giải thích nguyên nhân của tương đồng/khác biệt và đánh giá đóng góp riêng của mỗi tác phẩm."],
    craft: "Bố cục gợi ý: mở vấn đề → giới thiệu tiêu chí → phân tích đối chiếu → lí giải và đánh giá → kết luận. Khi trình bày miệng, dùng bảng hoặc sơ đồ để người nghe theo dõi.",
    prompt: "Viết dàn ý so sánh hai nhân vật hoặc tình huống truyện theo ít nhất hai tiêu chí thống nhất."
  },
  {
    id: "tho-va-tuoi-tre", term: 1, category: "Viết · Nói", title: "So sánh thơ & trao đổi về tuổi trẻ", author: "Nghị luận thơ · thuyết trình · sáng tạo", format: "Viết · nói và nghe",
    intro: "Chuyên đề kết hợp bài nghị luận so sánh hai tác phẩm thơ với hoạt động viết và thuyết trình về vấn đề liên quan đến tuổi trẻ.",
    context: "Khi so sánh thơ, chú ý chủ thể trữ tình, hình tượng, cảm hứng, ngôn ngữ và hình thức. Các hoạt động về tuổi trẻ yêu cầu nêu vấn đề có ý nghĩa, xác định quan điểm và trao đổi dựa trên lí lẽ.",
    ideas: ["Đặt hai bài thơ trong cùng một tiêu chí, phân tích bằng chứng ngắn và lí giải hiệu quả biểu đạt.", "Với vấn đề tuổi trẻ, phân biệt ý kiến cá nhân với dữ kiện; xem xét nhiều góc nhìn trước khi kết luận.", "Khi vay mượn, cải biến, sáng tạo, ghi nhận nguồn và tạo đóng góp riêng thay vì sao chép."],
    craft: "Bài nói nên có luận điểm rõ, dẫn chứng vừa đủ và phần kết luận; dự kiến câu hỏi, lắng nghe và phản hồi đúng trọng tâm.",
    prompt: "Chuẩn bị bài nói 3 phút về một vấn đề tuổi trẻ quan tâm, nêu quan điểm, hai lí lẽ và nguồn dẫn chứng."
  },
  {
    id: "nghien-cuu-hk1", term: 1, category: "Thực hành", title: "Báo cáo nghiên cứu & ôn tập học kì 1", author: "Nghiên cứu · hệ thống kiến thức · vận dụng", format: "Viết · tổng ôn",
    intro: "Từ câu hỏi nghiên cứu đến báo cáo có cấu trúc, người học luyện cách chọn nguồn, ghi chép dữ liệu, trích dẫn và trình bày kết quả.",
    context: "Bài tập nghiên cứu hướng tới một vấn đề tự nhiên hoặc xã hội. Phần ôn tập học kì hệ thống kiến thức đọc, thực hành tiếng Việt, viết và nói-nghe của Bài 1 đến Bài 5.",
    ideas: ["Thu hẹp đề tài thành câu hỏi có thể khảo sát; phân biệt nguồn sơ cấp/thứ cấp và đánh giá độ tin cậy.", "Sắp xếp báo cáo thành vấn đề, phương pháp, kết quả, nhận xét và tài liệu tham khảo; không trình bày dữ liệu ngoài ngữ cảnh.", "Ôn đặc trưng tiểu thuyết, thơ, nghị luận, truyện kì ảo, hài kịch và thao tác so sánh."],
    craft: "Ghi rõ nguồn cho số liệu và ý kiến tham khảo. Khi tự ôn, dùng câu hỏi gợi nhớ, bảng so sánh thể loại và bài luyện có bấm giờ.",
    prompt: "Viết đề cương báo cáo nghiên cứu gồm câu hỏi, cách thu thập thông tin, dự kiến các mục và danh sách nguồn."
  },
  {
    id: "ho-chi-minh", term: 2, category: "Bài 6", title: "Hồ Chí Minh: “Văn hóa phải soi đường cho quốc dân đi”", author: "Tuyên ngôn Độc lập · Mộ · Nguyên tiêu · Những trò lố hay là Va-ren và Phan Bội Châu", format: "Đọc hiểu · chính luận · thơ · truyện",
    intro: "Chủ đề khám phá tư tưởng, phong cách và đóng góp văn học của Hồ Chí Minh, đồng thời thực hành đọc các thể loại gắn với thời đại.",
    context: "Tuyên ngôn Độc lập là văn kiện chính luận có lập luận chặt chẽ; Mộ và Nguyên tiêu là những bài thơ giàu chất cổ điển và tinh thần hiện đại. Chủ đề còn mở rộng với Những trò lố hay là Va-ren và Phan Bội Châu, cùng phần đọc thêm Vọng nguyệt, Cảnh khuya.",
    ideas: ["Tìm hiểu khái quát về cuộc đời, sự nghiệp và quan niệm văn hóa của Hồ Chí Minh.", "Ở Tuyên ngôn Độc lập, phân tích cơ sở pháp lí, chứng cứ lịch sử, lập trường và cấu trúc lập luận.", "Đọc thơ chữ Hán qua bản dịch: chú ý hình ảnh, bút pháp cổ điển, tâm thế chủ thể trữ tình và hoàn cảnh sáng tác."],
    craft: "Với văn bản chính luận, đánh giá quan hệ giữa luận điểm, lí lẽ, bằng chứng và giọng điệu; với thơ, phân biệt nguyên tác và bản dịch khi nhận xét nghệ thuật.",
    prompt: "Phân tích cách lập luận và lựa chọn dẫn chứng góp phần tạo sức thuyết phục cho Tuyên ngôn Độc lập."
  },
  {
    id: "tac-pham-ki", term: 2, category: "Bài 7", title: "Sự thật trong tác phẩm kí", author: "Nghệ thuật băm thịt gà · Bước vào đời · Vĩ tuyến 17", format: "Đọc hiểu · kí",
    intro: "Tác phẩm kí kết hợp chất liệu người thật, việc thật với lựa chọn, tổ chức và giọng điệu của người viết để tạo nên ý nghĩa nghệ thuật.",
    context: "Chủ đề yêu cầu suy nghĩ về quan hệ giữa sự thật và cách kể, dấu ấn chủ quan của người viết, cũng như trách nhiệm khi phản ánh con người và đời sống.",
    ideas: ["Xác định người viết, đối tượng được ghi chép, sự kiện và dấu hiệu xác thực trong văn bản.", "Phân tích cách chọn chi tiết, điểm nhìn, giọng kể và bình luận làm nổi bật ý nghĩa của sự thật.", "Phân biệt sự kiện được kể với cách người viết đánh giá; xem xét vị trí của trải nghiệm cá nhân."],
    craft: "Tránh xem kí là bản ghi chép hoàn toàn trung tính; dùng chi tiết văn bản để nhận ra sự tương tác giữa tư liệu và nghệ thuật kể.",
    prompt: "Chỉ ra một chi tiết có tính xác thực và phân tích cách người viết tổ chức chi tiết ấy thành ý nghĩa."
  },
  {
    id: "du-lieu-thong-tin", term: 2, category: "Bài 8", title: "Dữ liệu trong văn bản thông tin", author: "Pa-ra-na · Giáo dục khai phóng ở Việt Nam nhìn từ Đông Kinh Nghĩa Thục · Đời muối", format: "Đọc hiểu · thông tin",
    intro: "Dữ liệu giúp văn bản thông tin làm rõ vấn đề, nhưng chỉ thuyết phục khi được chọn lọc, kiểm chứng, đặt đúng ngữ cảnh và diễn giải minh bạch.",
    context: "Đọc văn bản thông tin cần kết hợp nội dung chữ với số liệu, biểu đồ, chú thích, nguồn trích và cấu trúc trình bày. Đọc thêm: Sách thay đổi lịch sử loài người.",
    ideas: ["Xác định câu hỏi trung tâm, luận điểm và loại dữ liệu được sử dụng.", "Kiểm tra nguồn, thời điểm, phạm vi và đơn vị đo; không rút kết luận rộng hơn mức dữ liệu cho phép.", "Phân tích cách văn bản kết hợp chữ viết, bảng biểu, hình ảnh và lời bình để định hướng người đọc."],
    craft: "Khi sử dụng số liệu trong bài viết, nêu nguồn và thời gian, giải thích ý nghĩa của số liệu; không chép con số mà thiếu phân tích.",
    prompt: "Chọn một biểu đồ hoặc bảng số liệu đáng tin cậy, viết đoạn giải thích xu hướng và giới hạn của kết luận."
  },
  {
    id: "van-hoc-cuoc-doi", term: 2, category: "Bài 9", title: "Văn học và cuộc đời", author: "Vội vàng · Trở về · Hồn Trương Ba, da hàng thịt", format: "Đọc hiểu · thơ · truyện · kịch",
    intro: "Chủ đề đặt văn học trong quan hệ với đời sống: tác phẩm vừa bắt nguồn từ trải nghiệm con người, vừa giúp người đọc nhận thức và đối thoại với cuộc đời.",
    context: "Vội vàng của Xuân Diệu thể hiện tình yêu cuộc sống và ý thức về thời gian; Trở về mở ra một hành trình nhìn lại; Hồn Trương Ba, da hàng thịt của Lưu Quang Vũ đặt vấn đề về một đời sống chân thực, hài hòa. Đọc thêm: Khúc đồng quê.",
    ideas: ["Phân tích cảm hứng, hình tượng và quan niệm sống trong Vội vàng; chú ý nhịp thơ gấp gáp và khát vọng tận hưởng.", "Đọc Trở về qua hành trình, điểm nhìn và những thay đổi trong nhận thức của nhân vật.", "Trong kịch Lưu Quang Vũ, theo dõi xung đột giữa hồn và xác, lời thoại, hành động và lựa chọn cuối cùng."],
    craft: "Liên hệ văn học với đời sống cần bắt đầu từ bằng chứng trong tác phẩm; tránh áp đặt một bài học đạo đức chung chung.",
    prompt: "Từ một tác phẩm trong chủ đề, trình bày điều tác phẩm giúp em nhận thức sâu hơn về một lựa chọn trong đời sống."
  },
  {
    id: "bao-cao-du-an", term: 2, category: "Viết", title: "Báo cáo kết quả bài tập dự án", author: "Thu thập thông tin · trình bày kết quả", format: "Viết · nghiên cứu",
    intro: "Báo cáo dự án ghi lại mục tiêu, quá trình thực hiện, kết quả và điều rút ra; thông tin phải có nguồn, cấu trúc và phương tiện minh họa phù hợp.",
    context: "Một báo cáo rõ ràng giúp người đọc hiểu nhóm đã làm gì, dựa trên dữ liệu nào, đạt kết quả ra sao và còn giới hạn nào.",
    ideas: ["Nêu câu hỏi/mục tiêu, phạm vi, phương pháp và phân công công việc.", "Trình bày kết quả theo thứ tự hợp lí; dùng bảng, ảnh hoặc biểu đồ có chú thích khi cần.", "Nêu kết luận, hạn chế, kiến nghị và tài liệu tham khảo; phân biệt dữ liệu với suy luận."],
    craft: "Kiểm tra tính thống nhất giữa mục tiêu, dữ liệu, kết luận; xin phép khi sử dụng hình ảnh hoặc thông tin cá nhân.",
    prompt: "Lập dàn ý báo cáo dự án đã thực hiện, ghi rõ tối thiểu ba nguồn thông tin và cách kiểm chứng."
  },
  {
    id: "viet-thu", term: 2, category: "Viết", title: "Viết thư trao đổi về vấn đề đáng quan tâm", author: "Trao đổi về công việc hoặc vấn đề xã hội", format: "Viết · giao tiếp",
    intro: "Thư trao đổi cần xác định người nhận, mục đích, hoàn cảnh giao tiếp và lựa chọn giọng điệu phù hợp, đồng thời trình bày đề xuất mạch lạc.",
    context: "Bức thư có thể trao đổi về công việc hoặc một vấn đề thiết thực. Người viết cần thể hiện quan điểm nhưng vẫn tôn trọng người nhận và sẵn sàng đối thoại.",
    ideas: ["Nêu lí do viết và vấn đề cần trao đổi ngay từ đầu.", "Trình bày thông tin, quan điểm và đề xuất theo trình tự; giải thích căn cứ của ý kiến.", "Kết thư lịch sự, mở ra hướng phản hồi; rà soát xưng hô, chính tả và thông tin liên hệ."],
    craft: "Điều chỉnh hình thức và mức độ trang trọng theo người nhận; tránh dùng công thức thư cá nhân cho mọi tình huống.",
    prompt: "Viết thư gửi một người có trách nhiệm để đề xuất giải pháp cho một vấn đề học đường cụ thể."
  },
  {
    id: "tranh-bien", term: 2, category: "Nói · Nghe", title: "Tranh biện & thuyết trình", author: "Vấn đề đời sống · cơ hội và thách thức của đất nước", format: "Nói và nghe",
    intro: "Tranh biện văn minh dựa trên luận điểm rõ, chứng cứ kiểm tra được, khả năng lắng nghe và phản hồi đúng ý kiến của phía đối thoại.",
    context: "Chủ đề thực hành tranh biện về một vấn đề đời sống, thuyết trình về cơ hội và thách thức đối với đất nước; người học cũng luyện phản hồi trước quan điểm khác.",
    ideas: ["Xác định vấn đề, phạm vi và luận điểm; phân biệt dữ kiện, suy luận và đánh giá.", "Dự kiến phản biện, trả lời bằng lí lẽ và nguồn đáng tin, không công kích cá nhân.", "Tóm tắt trung thực ý kiến đối phương trước khi phản hồi; điều chỉnh kết luận khi có bằng chứng mới."],
    craft: "Dùng cấu trúc luận điểm–lí do–bằng chứng. Quản lí thời gian nói, giao tiếp bằng mắt và ghi nhận câu hỏi trước khi trả lời.",
    prompt: "Chuẩn bị một ý kiến ủng hộ và một ý kiến phản biện về cùng một vấn đề để luyện tranh biện."
  },
  {
    id: "on-tap-hk2", term: 2, category: "Ôn tập", title: "Hệ thống kiến thức & luyện tập cuối năm", author: "Tổng kết Bài 6–9 · vận dụng đọc, viết, nói và nghe", format: "Ôn tập · tự đánh giá",
    intro: "Ôn tập học kì hai kết nối tri thức về văn bản chính luận, kí, văn bản thông tin, văn học và các hoạt động tạo lập văn bản.",
    context: "Dùng các bài đã học làm khung tự hệ thống; kế hoạch kiểm tra và yêu cầu cụ thể có thể được nhà trường điều chỉnh.",
    ideas: ["So sánh mục đích, cấu trúc và cách tạo sức thuyết phục của văn bản chính luận, kí và văn bản thông tin.", "Ôn cách đọc dữ liệu, phân tích bằng chứng, nhận biết điểm nhìn và xung đột thể loại.", "Luyện viết báo cáo, thư trao đổi; chuẩn bị lập luận cho thuyết trình và tranh biện."],
    craft: "Mỗi lượt luyện cần có mục tiêu cụ thể, giới hạn thời gian và bước tự sửa. Ghi lại lỗi về đọc đề, bằng chứng, lập luận, diễn đạt và chính tả.",
    prompt: "Tự tạo bảng ôn tập gồm: đặc trưng thể loại, thao tác đọc, dạng bài viết và lỗi cần tránh."
  }
];

function makeLiteraryWork(id, term, title, author, category, format, intro, ideas, craft, prompt) {
  return {
    id,
    term,
    category,
    title,
    author,
    format,
    intro,
    context: `${author}. Văn bản thuộc ${term === 1 ? "tập một, học kì một" : "tập hai, học kì hai"} Ngữ văn 12, bộ Kết nối tri thức${category === "Đọc thêm" ? " (phần thực hành đọc)" : ""}.`,
    ideas,
    craft,
    prompt
  };
}

const literaryWorks = [
  makeLiteraryWork("text-xuan-toc-do", 1, "Xuân Tóc Đỏ cứu quốc", "Vũ Trọng Phụng · trích Số đỏ", "Truyện", "Tiểu thuyết trào phúng",
    "Một kẻ cơ hội được tung hô như người hùng, phơi bày xã hội chạy theo danh vọng và những giá trị đảo lộn.",
    ["Theo dõi hành trình Xuân Tóc Đỏ từ kẻ ngoài lề thành nhân vật được đám đông ca tụng.", "Phân tích nghịch lí giữa sự thật và cách xã hội trình diễn, tuyên truyền về nhân vật.", "Tiếng cười hướng vào thói háo danh, sự giả dối và cơ chế tạo dựng hào quang."],
    "Chú ý giọng kể mỉa mai, tình huống phóng đại và sự tương phản giữa việc nhân vật làm với lời người khác gán cho hắn.",
    "Phân tích tình huống trào phúng trong nhan đề và sự kiện 'cứu quốc'."),
  makeLiteraryWork("text-noi-buon-chien-tranh", 1, "Nỗi buồn chiến tranh", "Bảo Ninh", "Truyện", "Tiểu thuyết",
    "Tiểu thuyết nhìn chiến tranh qua kí ức đứt nối của người lính, khắc họa mất mát, chấn thương và nỗ lực tìm lại ý nghĩa sống.",
    ["Theo dõi cách kí ức của Kiên đan xen hiện tại và quá khứ, không tuân theo trình tự thời gian tuyến tính.", "Nhận xét chiến tranh từ trải nghiệm cá nhân: những mất mát không khép lại cùng ngày chiến thắng.", "Phân biệt người kể chuyện với nhân vật, đồng thời lưu ý độ phức tạp của điểm nhìn."],
    "Đọc kết cấu hồi ức như một phần ý nghĩa tác phẩm; chọn chi tiết tiêu biểu thay vì kể lại cốt truyện.",
    "Kết cấu phi tuyến tính góp phần thể hiện trải nghiệm hậu chiến như thế nào?"),
  makeLiteraryWork("text-tren-xuong-cuu-nan", 1, "Trên xuồng cứu nạn", "Văn bản thực hành đọc · SGK", "Đọc thêm", "Văn xuôi · thực hành đọc",
    "Văn bản thực hành đọc mở rộng chủ đề tiểu thuyết và cách kể chuyện; khi làm bài, căn cứ vào tình tiết, nhân vật và điểm nhìn trong ngữ liệu.",
    ["Xác định tình huống thử thách và mối quan hệ giữa các nhân vật trên xuồng.", "Theo dõi những lựa chọn, phản ứng và thay đổi tâm lí trước hiểm nguy.", "Dùng chi tiết trực tiếp trong văn bản để giải thích chủ đề, không suy diễn ngoài ngữ liệu."],
    "Đọc kĩ lời kể và hành động; phân biệt chi tiết quan sát được với nhận định của người kể.",
    "Chọn một quyết định của nhân vật và giải thích điều quyết định ấy bộc lộ."),
  makeLiteraryWork("text-cam-hoai", 1, "Cảm hoài", "Đặng Dung", "Thơ", "Thơ trung đại",
    "Bài thơ bộc lộ hoài bão cứu đời, nỗi day dứt trước thời thế và tâm trạng của một con người không nguôi trách nhiệm với non sông.",
    ["Giải thích tâm thế chủ thể trữ tình trước biến động lịch sử và việc lớn còn dang dở.", "Tìm các hình ảnh, từ ngữ thể hiện chí khí, nỗi đau và sự tự ý thức về thời gian.", "Liên hệ sắc thái hào hùng với nỗi ngậm ngùi để thấy tính bi tráng của bài thơ."],
    "Chú ý thể thơ và từ ngữ cô đọng; trích bản dịch phù hợp, tránh xem một hình ảnh ước lệ chỉ có một nghĩa.",
    "Phân tích sự đan xen giữa chí lớn và nỗi bất lực trước thời cuộc."),
  makeLiteraryWork("text-tay-tien", 1, "Tây Tiến", "Quang Dũng", "Thơ", "Thơ hiện đại",
    "Nỗi nhớ về miền Tây và đồng đội làm hiện lên người lính Tây Tiến hào hoa, can trường trong không gian vừa dữ dội vừa thơ mộng.",
    ["Theo dõi mạch cảm xúc của nỗi nhớ qua cảnh núi rừng, chặng đường hành quân và chân dung người lính.", "Phân tích sự kết hợp giữa hiện thực gian khổ với cảm hứng lãng mạn.", "Nhận xét vẻ đẹp bi tráng: mất mát được nhìn thẳng nhưng không làm mất đi khí phách."],
    "Dùng chi tiết thơ để phân tích tương phản, nhịp điệu, từ ngữ giàu tạo hình và sắc thái giọng điệu.",
    "Làm rõ chất bi tráng trong hình tượng người lính Tây Tiến."),
  makeLiteraryWork("text-dan-ghi-ta-lorca", 1, "Đàn ghi ta của Lor-ca", "Thanh Thảo", "Thơ", "Thơ hiện đại · tượng trưng",
    "Khúc tưởng niệm người nghệ sĩ Lor-ca đặt bi kịch của cái đẹp bên cạnh sức sống lâu bền của nghệ thuật và khát vọng cách tân.",
    ["Tìm hiểu những gợi dẫn văn hóa Tây Ban Nha và hình ảnh biểu tượng làm nên không gian bài thơ.", "Theo dõi sự chuyển biến từ chân dung nghệ sĩ đến bi kịch và dư âm sau cái chết.", "Lí giải tiếng đàn trong quan hệ với tự do sáng tạo và sức sống nghệ thuật."],
    "Các biểu tượng có thể gợi nhiều tầng nghĩa; giải thích bằng mạch thơ và ngữ cảnh, không áp đặt một cách giải duy nhất.",
    "Phân tích sự biến đổi ý nghĩa của hình tượng tiếng đàn trong bài thơ."),
  makeLiteraryWork("text-bai-tho-so-28", 1, "Bài thơ số 28", "Rabindranath Tagore · Người làm vườn", "Thơ", "Thơ nước ngoài",
    "Bài thơ gợi suy tưởng trữ tình về tình yêu, khát vọng thấu hiểu và khoảng cách giữa vẻ đẹp bên ngoài với chiều sâu tâm hồn.",
    ["Xác định tiếng nói trữ tình và mối quan hệ giữa người nói với người được hướng tới.", "Đọc các hình ảnh so sánh, ẩn dụ như lời mời khám phá thế giới nội tâm.", "Nhận xét sự hòa quyện giữa tình cảm riêng tư với suy tưởng về tình yêu và tự do."],
    "Theo dõi lời thơ và các cặp hình ảnh; đối chiếu cách dịch khi cần để tránh suy luận chỉ từ một từ ngữ.",
    "Giải thích một hình ảnh giàu tính biểu tượng và cách hình ảnh ấy thể hiện quan niệm về tình yêu."),
  makeLiteraryWork("text-nhin-ve-von-van-hoa", 1, "Nhìn về vốn văn hóa dân tộc", "Trần Đình Hượu", "Nghị luận", "Văn bản nghị luận",
    "Văn bản suy ngẫm về những đặc điểm, giá trị và giới hạn của vốn văn hóa dân tộc bằng cái nhìn phân tích, thận trọng.",
    ["Nêu luận đề và sơ đồ các luận điểm chính của văn bản.", "Phân tích cách tác giả dùng nhận xét, so sánh và lí lẽ để làm sáng tỏ đặc điểm văn hóa.", "Phân biệt mô tả, đánh giá và khái quát; đặt ý kiến trong lập luận tổng thể."],
    "Khi bình luận một nhận định, trích dẫn đúng căn cứ trong văn bản và tránh biến ý kiến của tác giả thành kết luận tuyệt đối.",
    "Chọn một luận điểm và đánh giá sự phù hợp giữa lí lẽ, bằng chứng với kết luận."),
  makeLiteraryWork("text-nang-luc-sang-tao", 1, "Năng lực sáng tạo", "Văn bản nghị luận · SGK", "Nghị luận", "Văn bản nghị luận",
    "Bài đọc đặt vấn đề về khả năng sáng tạo, các điều kiện nuôi dưỡng sáng tạo và trách nhiệm của người học khi tiếp nhận tri thức.",
    ["Xác định quan niệm về sáng tạo được trình bày trong văn bản.", "Tìm lí lẽ và ví dụ được dùng để giải thích hoặc bảo vệ quan niệm đó.", "Liên hệ việc học, đọc và thực hành của bản thân bằng ví dụ cụ thể."],
    "Phân tích cấu trúc lập luận trước khi đồng tình hoặc phản biện; nêu rõ đâu là căn cứ từ văn bản, đâu là suy nghĩ cá nhân.",
    "Theo em, điều kiện nào giúp học sinh phát huy sáng tạo? Trình bày một lí lẽ và một ví dụ."),
  makeLiteraryWork("text-may-y-nghi-ve-tho", 1, "Mấy ý nghĩ về thơ", "Nguyễn Đình Thi", "Nghị luận", "Tiểu luận về thơ",
    "Tiểu luận trình bày suy nghĩ về thơ, cảm xúc, hình ảnh và sức gợi của ngôn từ trong quá trình sáng tạo và tiếp nhận.",
    ["Tóm tắt các ý kiến chính của tác giả về bản chất và cách đọc thơ.", "Phân tích ví dụ và lập luận được sử dụng để làm rõ nhận định.", "Liên hệ với bài thơ đã học để kiểm chứng, bổ sung hoặc đối thoại với quan điểm."],
    "Đọc văn bản như một chuỗi lập luận, không chỉ trích riêng một câu đẹp; giải thích mối nối giữa ví dụ và nhận định.",
    "Chọn một ý kiến về thơ và minh họa bằng chi tiết từ tác phẩm cụ thể."),
  makeLiteraryWork("text-cam-hung-sang-tao", 1, "Cảm hứng và sáng tạo", "Văn bản thực hành đọc · SGK", "Đọc thêm", "Văn bản thực hành đọc",
    "Văn bản thực hành đọc mở rộng chủ đề thơ và hoạt động sáng tạo; câu trả lời cần dựa trên luận điểm và chi tiết của ngữ liệu.",
    ["Xác định vấn đề mà văn bản đặt ra về cảm hứng hoặc quá trình sáng tạo.", "Nhận diện luận điểm, lí lẽ và ví dụ minh họa.", "Phân biệt điều văn bản khẳng định với cách người đọc vận dụng vào trải nghiệm riêng."],
    "Ghi lại từ khóa cho từng luận điểm rồi dùng dẫn chứng ngắn để trả lời câu hỏi đọc hiểu.",
    "Tóm tắt luận điểm trung tâm trong một câu và chọn một bằng chứng hỗ trợ."),
  makeLiteraryWork("text-hai-khau-linh-tu", 1, "Hải khẩu linh từ", "Văn bản truyện · SGK", "Truyện", "Truyện truyền kì",
    "Văn bản gợi thế giới truyền kì, nơi yếu tố linh thiêng và sự kiện khác thường góp phần soi chiếu niềm tin, đạo lí và đời sống con người.",
    ["Nhận diện ranh giới đan xen giữa sự kiện đời thường và yếu tố kì ảo.", "Theo dõi vai trò của nhân vật, không gian linh thiêng và cách truyện tạo không khí.", "Lí giải thông điệp văn hóa, đạo lí từ chi tiết và kết thúc truyện."],
    "Không xem yếu tố kì ảo chỉ là trang trí; chỉ ra nó làm thay đổi cốt truyện hoặc cách nhìn nhân vật ra sao.",
    "Phân tích chức năng của một chi tiết kì ảo đối với ý nghĩa câu chuyện."),
  makeLiteraryWork("text-muoi-cua-rung", 1, "Muối của rừng", "Nguyễn Huy Thiệp", "Truyện", "Truyện ngắn",
    "Một chuyến đi săn đưa nhân vật đối diện với thiên nhiên và những lựa chọn đạo đức, mở ra suy ngẫm về khả năng đổi thay trong con người.",
    ["Theo dõi diễn biến tâm lí nhân vật qua các cuộc gặp với gia đình khỉ và cảnh rừng.", "Phân tích sự chuyển biến từ ham muốn săn bắt đến cảm giác gắn bó, xót thương.", "Lí giải ý nghĩa nhan đề và những hình ảnh gắn với chu kì, sinh sôi của tự nhiên."],
    "Gắn phân tích chi tiết thiên nhiên với thay đổi tâm lí; tránh giản lược truyện thành một thông điệp bảo vệ môi trường chung chung.",
    "Phân tích bước ngoặt làm thay đổi cách nhân vật nhìn con mồi và khu rừng."),
  makeLiteraryWork("text-ben-tran-gian", 1, "Bến trần gian", "Văn bản thực hành đọc · SGK", "Đọc thêm", "Truyện · thực hành đọc",
    "Văn bản thực hành đọc giúp vận dụng kiến thức về truyện và các yếu tố khác thường để đọc một ngữ liệu mới.",
    ["Xác định tình huống truyện, người kể chuyện và chi tiết tạo nên màu sắc riêng.", "Phân tích quan hệ giữa sự kiện thực, tưởng tượng và trải nghiệm nhân vật.", "Dùng bằng chứng trong văn bản để giải thích chủ đề, không áp sẵn kết luận từ truyện khác."],
    "Khi gặp yếu tố huyền ảo, xác định trước tác dụng trong mạch truyện rồi mới khái quát ý nghĩa.",
    "Chọn một chi tiết giàu sức gợi và nêu cách chi tiết ấy kết nối hiện thực với yếu tố kì ảo."),
  makeLiteraryWork("text-nhan-vat-quan-trong", 1, "Nhân vật quan trọng", "Văn bản kịch · SGK", "Kịch", "Hài kịch",
    "Tác phẩm khai thác vị thế và cách ứng xử của nhân vật để tạo xung đột, tiếng cười và ý nghĩa phê phán.",
    ["Xác định điều nhân vật muốn đạt được và cách nhân vật thể hiện vị thế.", "Theo dõi lượt lời, phản ứng của các nhân vật khác và sự tăng tiến của tình huống.", "Nhận xét đối tượng bị châm biếm cũng như quan niệm xã hội được bộc lộ."],
    "Đọc lời thoại như hành động: một câu nói có thể che giấu, gây hiểu lầm hoặc đẩy xung đột tiến lên.",
    "Chỉ ra một lượt lời tạo tiếng cười và giải thích vì sao nó làm lộ tính cách nhân vật."),
  makeLiteraryWork("text-giau-cua", 1, "Giấu của", "Văn bản hài kịch · SGK", "Kịch", "Hài kịch · thực hành đọc",
    "Câu chuyện và hành động sân khấu khai thác sự che giấu, nghi ngờ hoặc tính toán để tạo ra tiếng cười và xung đột.",
    ["Tóm tắt mâu thuẫn kịch mà không kể lại từng câu thoại.", "Phân tích hành động, lời thoại và thông tin nhân vật biết hoặc không biết.", "Làm rõ tiếng cười hướng vào tính cách hay thói quen ứng xử nào."],
    "Chú ý sự khác biệt giữa điều khán giả biết với điều nhân vật biết; khoảng cách ấy thường tạo nên hài kịch.",
    "Giải thích cách một sự hiểu nhầm hoặc hành động che giấu góp phần tạo tiếng cười."),
  makeLiteraryWork("text-can-than-hao", 1, "Cẩn thận hão", "Văn bản thực hành đọc · SGK", "Đọc thêm", "Kịch · thực hành đọc",
    "Văn bản đọc thêm giúp luyện nhận diện tình huống hài, hành động kịch và ý nghĩa phê phán ẩn sau tiếng cười.",
    ["Xác định tính cách hoặc thói quen bị đưa ra làm đối tượng gây cười.", "Tìm chi tiết trong đối thoại và hành động khiến tình huống trở nên trớ trêu.", "Đánh giá tiếng cười có ý nghĩa gì đối với nhân vật và người xem."],
    "Dẫn chứng lời thoại ngắn, giải thích thủ pháp và đối tượng châm biếm thay vì chỉ kết luận 'tạo tiếng cười'.",
    "Từ một tình huống trong văn bản, nêu điều đáng suy nghĩ sau tiếng cười."),
  makeLiteraryWork("text-tuyen-ngon-doc-lap", 2, "Tuyên ngôn Độc lập", "Hồ Chí Minh", "Nghị luận", "Văn bản chính luận",
    "Văn kiện khẳng định quyền độc lập của dân tộc bằng lập luận chặt chẽ, chứng cứ lịch sử và lời tuyên bố có sức lay động.",
    ["Phân tích cách mở đầu từ quyền con người và quyền các dân tộc.", "Đối chiếu những lời lẽ của thực dân với chứng cứ về thực tế lịch sử.", "Làm rõ ý nghĩa phần tuyên bố độc lập và lời cam kết bảo vệ nền tự do."],
    "Đi theo cấu trúc lập luận của toàn văn bản; đánh giá quan hệ giữa lí lẽ, bằng chứng và giọng điệu.",
    "Phân tích sức thuyết phục của một phần lập luận trong Tuyên ngôn Độc lập."),
  makeLiteraryWork("text-mo", 2, "Mộ (Chiều tối)", "Hồ Chí Minh", "Thơ", "Thơ chữ Hán · Nhật kí trong tù",
    "Bài thơ chuyển từ bức tranh chiều nơi núi rừng đến cảnh sinh hoạt ấm áp, thể hiện cái nhìn hướng về sự sống của người tù cách mạng.",
    ["Phân tích sự vận động của hình ảnh từ thiên nhiên rộng vắng đến con người và ánh lửa.", "Nhận xét cách chuyển đổi điểm nhìn, thời gian và sắc thái cảm xúc trong bài.", "Làm rõ vẻ đẹp tâm hồn thể hiện qua khả năng cảm nhận sự sống trong hoàn cảnh gian khổ."],
    "Đối chiếu bản dịch với nguyên tác khi phân tích chữ và nhịp; dùng trình tự hình ảnh để làm rõ tứ thơ.",
    "Làm rõ sự vận động của tứ thơ từ cảnh chiều đến ánh sáng và hơi ấm đời thường."),
  makeLiteraryWork("text-nguyen-tieu", 2, "Nguyên tiêu (Rằm tháng giêng)", "Hồ Chí Minh", "Thơ", "Thơ chữ Hán",
    "Bức tranh đêm rằm mùa xuân hòa quyện vẻ đẹp thiên nhiên với hình ảnh người chiến sĩ đang lo việc nước.",
    ["Phân tích không gian, ánh trăng, dòng sông và sắc xuân trong bài thơ.", "Nhận ra sự chuyển từ thưởng ngoạn thiên nhiên đến công việc kháng chiến.", "Làm rõ mối hòa hợp giữa chất thi sĩ và trách nhiệm cách mạng."],
    "Chú ý sự khác biệt giữa bản dịch thơ và nguyên tác; phân tích sự hòa quyện chứ không tách thiên nhiên khỏi con người.",
    "Chứng minh sự thống nhất giữa tâm hồn thi sĩ và phong thái người chiến sĩ."),
  makeLiteraryWork("text-tro-lo-va-ren-phan-boi-chau", 2, "Những trò lố hay là Va-ren và Phan Bội Châu", "Nguyễn Ái Quốc", "Truyện", "Truyện ngắn trào phúng",
    "Tác phẩm dùng đối lập nhân vật, giọng kể và nghệ thuật dựng cảnh để vạch trần sự giả dối của Va-ren, đồng thời tôn vinh khí phách Phan Bội Châu.",
    ["Phân tích sự tương phản giữa lời nói của Va-ren và thái độ của Phan Bội Châu.", "Theo dõi giọng kể mỉa mai, tình huống giả định và những lời bình có tính châm biếm.", "Lí giải tác dụng của kết thúc và thái độ im lặng của người chí sĩ."],
    "Nhận diện nghịch lí giữa lời tự nhận và hành động; phân tích tiếng cười như một phương thức tố cáo chính trị.",
    "Phân tích cách sự im lặng của Phan Bội Châu làm nổi bật tính cách hai nhân vật."),
  makeLiteraryWork("text-vong-nguyet", 2, "Vọng nguyệt (Ngắm trăng)", "Hồ Chí Minh · Nhật kí trong tù", "Thơ", "Thơ chữ Hán",
    "Bài thơ cho thấy cuộc giao cảm giữa người tù với vầng trăng, khẳng định tự do tinh thần và tình yêu thiên nhiên.",
    ["Chú ý hoàn cảnh ngắm trăng trong nhà tù và những thiếu thốn vật chất.", "Phân tích cấu trúc giao cảm giữa người và trăng trong hai câu cuối.", "Làm rõ vẻ đẹp ung dung, chủ động của chủ thể trữ tình."],
    "Đọc cả tứ thơ và sự chuyển đổi hướng nhìn; không tách hình ảnh trăng khỏi hoàn cảnh sáng tác.",
    "Phân tích cuộc giao cảm giữa thi nhân và trăng trong bài thơ."),
  makeLiteraryWork("text-canh-khuya", 2, "Cảnh khuya", "Hồ Chí Minh", "Thơ", "Thơ hiện đại",
    "Bài thơ vừa khắc họa cảnh đêm trăng giàu nhạc tính vừa bộc lộ nỗi thao thức vì việc nước của người chiến sĩ.",
    ["Phân tích âm thanh và hình ảnh tạo nên cảnh rừng đêm.", "Làm rõ sự chuyển từ cảm nhận thiên nhiên đến tâm trạng không ngủ.", "Nhận xét quan hệ giữa tình yêu thiên nhiên và trách nhiệm với đất nước."],
    "Chú ý điệp từ, so sánh và sự chuyển ý ở câu kết; giải thích tác dụng theo cả cảnh lẫn tình.",
    "Phân tích hai nguyên nhân của nỗi 'chưa ngủ' trong bài thơ."),
  makeLiteraryWork("text-nghe-thuat-bam-thit-ga", 2, "Nghệ thuật băm thịt gà", "Ngữ liệu phóng sự · SGK", "Kí", "Văn xuôi hiện thực",
    "Văn bản khắc họa một sinh hoạt làng quê và những quan hệ xã hội qua chi tiết cụ thể, giọng kể giàu sắc thái quan sát.",
    ["Xác định sự việc, nhân vật và những chi tiết làm nổi bật tập tục hoặc quan hệ trong cộng đồng.", "Phân tích cách lựa chọn chi tiết, quan sát và giọng điệu của người kể.", "Suy ngẫm về ý nghĩa xã hội của sự việc được ghi lại."],
    "Tách dữ kiện được kể với lời bình, sắc thái mỉa mai của người viết; không gán tác giả nếu bản SGK không ghi rõ xuất xứ.",
    "Chọn một chi tiết tiêu biểu và phân tích cách chi tiết ấy gợi ra bức tranh xã hội."),
  makeLiteraryWork("text-buoc-vao-doi", 2, "Bước vào đời", "Văn bản kí · SGK", "Kí", "Văn bản kí",
    "Văn bản gợi trải nghiệm bước vào đời sống thực tế và cách người viết ghi nhận con người, sự việc bằng góc nhìn cá nhân.",
    ["Xác định hoàn cảnh trải nghiệm và đối tượng được quan sát.", "Tìm dấu ấn chủ quan trong cách kể, lựa chọn chi tiết và bình luận.", "Phân tích sự đan xen giữa thông tin thực tế với suy nghĩ của người viết."],
    "Khi văn bản đặt vấn đề xã hội, nêu căn cứ cụ thể trước khi nhận xét tính xác thực hay quan điểm.",
    "Chỉ ra một chi tiết cho thấy dấu ấn người viết và giải thích hiệu quả của nó."),
  makeLiteraryWork("text-vi-tuyen-17", 2, "Vĩ tuyến 17", "Văn bản kí · SGK", "Kí", "Kí · thực hành đọc",
    "Văn bản gắn với địa danh và dấu mốc lịch sử, giúp người đọc kết nối tư liệu, ký ức và trải nghiệm được kể.",
    ["Xác định mốc thời gian, địa điểm và sự kiện chính được ghi lại.", "Phân tích cách chi tiết lịch sử được tổ chức thành câu chuyện có ý nghĩa.", "Nhận xét cảm xúc và lập trường thể hiện qua giọng kể."],
    "Phân biệt thông tin có thể kiểm chứng với hồi ức hoặc bình luận; xem xét cách các yếu tố bổ sung cho nhau.",
    "Phân tích một chi tiết lịch sử và vai trò của nó trong cảm xúc, thông điệp của văn bản."),
  makeLiteraryWork("text-pa-ra-na", 2, "Pa-ra-na", "Văn bản kí · SGK", "Kí", "Văn bản kí · đọc hiểu",
    "Văn bản mở rộng góc nhìn về trải nghiệm và không gian đời sống qua lối ghi chép kết hợp quan sát với cảm nhận.",
    ["Xác định không gian, đối tượng và hành trình được tái hiện.", "Tìm chi tiết giúp người đọc hình dung sự việc hoặc cảnh quan.", "Phân tích giọng điệu và cách người viết bộc lộ thái độ."],
    "Giữ đúng tên riêng theo văn bản và dựa vào ngữ liệu để giải thích, không suy đoán bối cảnh ngoài sách.",
    "Chọn một chi tiết tạo ấn tượng về không gian trong văn bản và phân tích tác dụng."),
  makeLiteraryWork("text-giao-duc-khai-phong", 2, "Giáo dục khai phóng ở Việt Nam nhìn từ Đông Kinh Nghĩa Thục", "Văn bản nghị luận · SGK", "Nghị luận", "Văn bản nghị luận thông tin",
    "Văn bản nhìn lại một dấu mốc giáo dục để gợi suy nghĩ về tinh thần khai phóng, mục tiêu học tập và trách nhiệm của người học.",
    ["Xác định luận đề và cách văn bản sử dụng bối cảnh lịch sử.", "Phân tích bằng chứng và cách người viết nối sự kiện quá khứ với vấn đề hiện tại.", "Nhận xét mức độ thuyết phục của lập luận và phạm vi kết luận."],
    "Phân biệt dữ kiện lịch sử với diễn giải; khi đánh giá, nêu rõ phần nào được văn bản chứng minh.",
    "Nêu một giá trị giáo dục được gợi ra từ văn bản và dẫn chứng làm cơ sở."),
  makeLiteraryWork("text-doi-muoi", 2, "Đời muối", "Văn bản thông tin · SGK", "Thông tin", "Văn bản thông tin",
    "Văn bản khai thác lịch sử và vai trò của muối, kết hợp thông tin, dữ liệu và cách kể để giúp người đọc nhìn vật dụng quen thuộc trong bối cảnh rộng hơn.",
    ["Xác định chủ đề, nguồn dữ liệu và cách văn bản tổ chức thông tin.", "Theo dõi quan hệ giữa ví dụ lịch sử, dữ kiện và kết luận.", "Đánh giá cách nhan đề và chi tiết cụ thể giúp người đọc hình dung chủ đề."],
    "Kiểm tra phạm vi, nguồn và ngữ cảnh của dữ liệu; phân biệt thông tin xác thực với cách diễn giải của tác giả.",
    "Chọn một dữ kiện trong văn bản và giải thích nó góp phần làm sáng tỏ chủ đề ra sao."),
  makeLiteraryWork("text-sach-thay-doi-lich-su", 2, "Sách thay đổi lịch sử loài người", "Văn bản thực hành đọc · SGK", "Đọc thêm", "Văn bản thông tin",
    "Văn bản thực hành đọc đặt sách trong mối quan hệ với tri thức, xã hội và những biến đổi lịch sử của đời sống con người.",
    ["Tìm luận đề và các giai đoạn hoặc ví dụ được lựa chọn để trình bày.", "Phân tích cách dữ kiện lịch sử hỗ trợ nhận định về vai trò của sách.", "Đánh giá phạm vi khái quát và quan điểm của người viết."],
    "Khi trả lời câu hỏi về tác dụng dữ liệu, nêu dữ liệu cụ thể, vai trò của nó và nội dung được hỗ trợ.",
    "Nêu vai trò của sách được văn bản nhấn mạnh và dùng một dữ liệu làm bằng chứng."),
  makeLiteraryWork("text-voi-vang", 2, "Vội vàng", "Xuân Diệu", "Thơ", "Thơ mới",
    "Bài thơ thể hiện tình yêu tha thiết với trần thế, ý thức về bước đi của thời gian và khát vọng sống mãnh liệt.",
    ["Theo dõi sự chuyển từ ước muốn níu giữ vẻ đẹp đến nhận thức về thời gian hữu hạn.", "Phân tích bức tranh mùa xuân và cách các giác quan làm thế giới trở nên sống động.", "Làm rõ nhịp điệu gấp gáp như một lựa chọn sống tích cực, không chỉ là sự hấp tấp."],
    "Phân tích hệ thống hình ảnh, phép điệp, nhịp thơ và giọng điệu; liên kết hình thức với quan niệm sống.",
    "Phân tích khát vọng sống của chủ thể trữ tình qua mạch cảm xúc bài thơ."),
  makeLiteraryWork("text-tro-ve", 2, "Trở về", "Văn bản văn học · SGK", "Truyện", "Văn xuôi · thực hành đọc",
    "Văn bản khơi gợi ý nghĩa của sự trở về qua hành trình, ký ức và những thay đổi trong cách nhân vật nhìn lại con người, nơi chốn.",
    ["Xác định người trở về, nơi chốn và hoàn cảnh của cuộc trở về.", "Tìm những chi tiết cho thấy sự khác biệt giữa quá khứ và hiện tại.", "Lí giải chuyển biến cảm xúc, nhận thức và ý nghĩa nhan đề."],
    "Bám vào chi tiết của ngữ liệu cụ thể; nếu văn bản có nhiều lớp thời gian, lập mốc trước khi phân tích.",
    "Giải thích ý nghĩa nhan đề dựa trên một chuyển biến của nhân vật."),
  makeLiteraryWork("text-hon-truong-ba", 2, "Hồn Trương Ba, da hàng thịt", "Lưu Quang Vũ", "Kịch", "Kịch nói",
    "Bi kịch sống nhờ trong thân xác không phù hợp đặt ra khát vọng được sống chân thực, hài hòa và đúng với phẩm giá của mình.",
    ["Phân tích xung đột giữa hồn và xác như mâu thuẫn giữa bản thể, nhu cầu và hoàn cảnh.", "Theo dõi các cuộc đối thoại với người thân để nhận ra ảnh hưởng của bi kịch tới gia đình.", "Lí giải lựa chọn cuối cùng và quan niệm về một đời sống có ý nghĩa."],
    "Xem lời thoại như hành động kịch, theo dõi xung đột tăng tiến qua từng màn và không tách triết lí khỏi tình huống cụ thể.",
    "Phân tích một cuộc đối thoại làm thay đổi nhận thức của Trương Ba."),
  makeLiteraryWork("text-khuc-dong-que", 2, "Khúc đồng quê", "Văn bản thực hành đọc · SGK", "Đọc thêm", "Văn xuôi · thực hành đọc",
    "Văn bản khép lại chủ đề bằng một góc nhìn giàu cảm xúc về đời sống, không gian quen thuộc và mối quan hệ giữa con người với quê hương.",
    ["Xác định hình ảnh, không gian hoặc ký ức làm trục liên kết văn bản.", "Phân tích giọng điệu và chi tiết tạo nên cảm nhận về đồng quê.", "Nêu ý nghĩa của sự gắn bó với nơi chốn bằng bằng chứng từ ngữ liệu."],
    "Tránh đồng nhất cảm xúc người kể với trải nghiệm của chính tác giả; chứng minh mỗi nhận xét bằng chi tiết.",
    "Phân tích một hình ảnh gợi không gian đồng quê và cảm xúc mà hình ảnh khơi dậy.")
];

const passageAnalyses = {
  "text-cam-hoai": [
    { label: "Cặp câu 1", focus: "Mở ra nỗi niềm trước thời thế và sự hữu hạn của đời người; giọng thơ trầm, suy tư.", analysis: "Cái nhìn hướng ra việc đời tạo nên tầm vóc của chủ thể trữ tình, trong khi dấu ấn tuổi tác khiến hoài bão mang màu sắc day dứt. Phân tích sự đan xen giữa chí hướng lớn và ý thức về giới hạn cá nhân." },
    { label: "Cặp câu 2", focus: "Đối chiếu thời vận thuận lợi với lúc vận nước, vận người đổi thay.", analysis: "Cặp đối làm nổi bật tính bất định của thời cuộc. Thành công hay thất bại không chỉ được nhìn như kết quả của tài năng mà còn gắn với hoàn cảnh; giọng thơ vì thế vừa mạnh mẽ vừa ngậm ngùi." },
    { label: "Cặp câu 3", focus: "Bộc lộ khát vọng giúp đời và nỗi trăn trở vì chưa tìm được con đường thực hiện.", analysis: "Hình ảnh mang tầm vóc lớn gợi ý thức trách nhiệm của kẻ sĩ. Nên đọc cái tôi trữ tình trong quan hệ với vận mệnh cộng đồng, không thu hẹp thành nỗi buồn riêng." },
    { label: "Cặp câu 4", focus: "Khép lại bằng nỗi tiếc nuối việc nước chưa xong, dù nhiệt huyết và ý chí vẫn còn.", analysis: "Sự tương phản giữa mái tóc bạc và thanh kiếm được mài nhiều lần cô đọng bi kịch tuổi tác đối lập với khát vọng hành động. Âm hưởng hào sảng không xóa đi nỗi đau, mà làm rõ chất bi tráng." }
  ],
  "text-tay-tien": [
    { label: "Đoạn 1 · Nỗi nhớ miền Tây", focus: "Mạch nhớ đưa người đọc vào không gian núi rừng hiểm trở, những chặng hành quân và bản làng xa.", analysis: "Những nét dữ dội của địa hình và khí hậu được đặt cạnh âm thanh, hình ảnh thơ mộng. Sự tương phản khiến thiên nhiên vừa là thử thách, vừa là miền kí ức có sức quyến rũ." },
    { label: "Đoạn 2 · Đêm liên hoan và sông nước", focus: "Kí ức chuyển từ gian khổ sang vẻ đẹp văn hóa, tình quân dân và cảnh sông nước huyền ảo.", analysis: "Ánh sáng, âm thanh và đường nét mềm mại làm dịu bớt cái khắc nghiệt. Người lính hiện lên trong mối giao hòa với đời sống địa phương; giọng thơ giàu nhạc tính tạo cảm giác bồng bềnh." },
    { label: "Đoạn 3 · Chân dung người lính", focus: "Người lính hiện lên vừa chịu nhiều mất mát, thiếu thốn vừa giữ phong thái hào hoa và lí tưởng.", analysis: "Bút pháp lãng mạn không né tránh hiện thực hi sinh mà chuyển hóa nỗi đau thành vẻ đẹp bi tráng. Chất mộng mơ và khí phách cùng tồn tại trong một chân dung nhiều chiều." },
    { label: "Đoạn 4 · Lời thề và nỗi nhớ", focus: "Lời kết trở về với đoàn quân, miền đất và những người đồng đội đã gắn bó.", analysis: "Giọng thơ lắng lại như một lời khẳng định về sự thủy chung với quá khứ. Hình tượng người lính vượt khỏi một cuộc hành quân cụ thể để trở thành kí ức không phai." }
  ],
  "text-dan-ghi-ta-lorca": [
    { label: "Khổ mở đầu · Không gian Tây Ban Nha", focus: "Âm thanh và hình ảnh giàu sắc thái văn hóa dựng lên chân dung Lor-ca trong một không gian vừa tự do vừa bất an.", analysis: "Các tín hiệu nghệ thuật gợi tiếng đàn, con người nghệ sĩ và sức ép của bạo lực. Cách viết giàu liên tưởng đưa người đọc vào một thế giới biểu tượng thay vì kể tiểu sử theo lối tuyến tính." },
    { label: "Mạch tiếp theo · Người nghệ sĩ và cuộc truy đuổi", focus: "Những hình ảnh chuyển động gợi người nghệ sĩ tiến về phía trước giữa hiểm nguy.", analysis: "Sự đối lập giữa khát vọng sáng tạo và thế lực đàn áp làm rõ bi kịch lịch sử. Nhịp thơ và các hình ảnh lặp tạo cảm giác cuộc đuổi bắt đang tiến đến bước ngoặt." },
    { label: "Mạch trung tâm · Bi kịch Lor-ca", focus: "Cái chết được cảm nhận qua những hình ảnh phân mảnh, âm thanh đứt đoạn và nỗi đau lan rộng.", analysis: "Thay vì tái hiện bạo lực trực diện, nhà thơ dùng biểu tượng và nhạc tính để diễn tả chấn động tinh thần. Tiếng đàn vừa mang dấu ấn cá nhân vừa đại diện cho tự do nghệ thuật bị vùi dập." },
    { label: "Mạch kết · Tiếng đàn còn lại", focus: "Hình tượng Lor-ca đi vào một không gian siêu thực; sự sống cá nhân khép lại nhưng nghệ thuật tiếp tục ngân vang.", analysis: "Những hình ảnh tan biến không đồng nghĩa với sự xóa bỏ di sản. Âm hưởng cuối bài gợi nỗi tiếc thương, đồng thời mở ra suy tưởng về sức sống bền bỉ của sáng tạo." }
  ],
  "text-bai-tho-so-28": [
    { label: "Mạch 1 · Lời ngỏ về trái tim", focus: "Chủ thể trữ tình nói về điều khó nắm bắt khi con người muốn trao gửi tình cảm.", analysis: "Cách diễn đạt giàu hình ảnh làm hiện lên nghịch lí của tình yêu: càng muốn sở hữu trọn vẹn càng nhận ra thế giới bên trong không thể chiếm hữu." },
    { label: "Mạch 2 · Điều có thể trao và điều không thể trao", focus: "Bài thơ phân biệt vẻ ngoài có thể nhận biết với chiều sâu tinh thần không thể trao đi như một vật sở hữu.", analysis: "Sự đối chiếu giúp chuyển suy tư riêng thành một nhận thức về tự do cá nhân. Yêu thương chân thành cần tôn trọng phần riêng tư và quyền tự chủ của người khác." },
    { label: "Mạch 3 · Lời mời thấu hiểu", focus: "Người nói mở ra con đường gần gũi bằng sự lắng nghe, kiên nhẫn và sẻ chia.", analysis: "Tình yêu không được trình bày như sự áp đặt hay đòi hỏi; sự thấu hiểu trở thành một quá trình hai phía." },
    { label: "Mạch 4 · Dư âm suy tưởng", focus: "Giọng thơ lắng lại, để câu hỏi về tình yêu tiếp tục vang trong suy nghĩ người đọc.", analysis: "Hình ảnh giàu tính biểu tượng giữ cho bài thơ vừa là lời tình tự vừa là suy niệm. Khi phân tích bản dịch, cần dựa trên đúng văn bản trong sách." }
  ],
  "text-xuan-toc-do": [
    { label: "Đoạn 1 · Tình huống và vị thế nhân vật", focus: "Đặt nhân vật vào hoàn cảnh có khả năng bị diễn giải thành một sự kiện lớn lao.", analysis: "Khoảng cách giữa thân phận, động cơ thực và cách sự việc được nhìn nhận đặt nền cho tiếng cười. Hãy xác định ai nắm quyền kể và ai tạo ra ý nghĩa của sự kiện." },
    { label: "Đoạn 2 · Sự việc bị phóng đại", focus: "Hành động và lời bình của những người xung quanh khiến một việc bình thường mang dáng vẻ phi thường.", analysis: "Nghịch lí được tạo nên bởi sự chênh lệch giữa bản chất sự việc với ngôn ngữ tung hô. Giọng trào phúng vạch ra thói háo danh và khả năng thao túng dư luận." },
    { label: "Đoạn 3 · Hào quang và tiếng cười", focus: "Nhân vật được ca tụng như người hùng; sự đảo lộn giá trị trở thành đỉnh điểm của tình huống.", analysis: "Kết thúc phơi bày một xã hội có thể biến cơ hội thành danh vọng. Tiếng cười không chỉ nhằm vào cá nhân mà còn hướng vào đám đông và cơ chế tạo dựng hào quang." }
  ],
  "text-noi-buon-chien-tranh": [
    { label: "Mạch 1 · Hiện tại và dấu tích chiến tranh", focus: "Hiện tại của nhân vật vẫn bị bao vây bởi ký ức và những dấu vết hậu chiến.", analysis: "Quá khứ không nằm yên phía sau mà liên tục xâm nhập đời sống hiện thời. Đọc những chi tiết trở về này như biểu hiện của chấn thương, không chỉ là hồi tưởng lịch sử." },
    { label: "Mạch 2 · Ký ức chiến trường", focus: "Những mảnh hồi ức mở ra tình đồng đội, nỗi sợ, mất mát và những trải nghiệm khắc nghiệt.", analysis: "Cách kể phân mảnh đưa người đọc gần với trạng thái tâm lí của người sống sót. Cần dựa vào dấu hiệu thời gian và điểm nhìn để phân biệt các lớp ký ức." },
    { label: "Mạch 3 · Tình yêu và mất mát", focus: "Đời sống riêng và những tình cảm bị chiến tranh chia cắt đan vào dòng hồi ức.", analysis: "Chiến tranh được nhìn qua số phận cá nhân, không chỉ qua thắng bại hay mốc sự kiện. Những đổ vỡ riêng làm rõ cái giá lâu dài mà con người phải gánh chịu." },
    { label: "Mạch 4 · Viết để đối diện quá khứ", focus: "Hành động viết và việc lần tìm ký ức trở thành cách nhân vật đối diện với điều không thể quên.", analysis: "Kết cấu tiểu thuyết gợi câu hỏi về khả năng kể lại một trải nghiệm tan vỡ. Hãy phân tích vai trò của người kể và sự chồng lớp giữa ký ức, tưởng tượng, hiện tại." }
  ],
  "text-muoi-cua-rung": [
    { label: "Đoạn 1 · Chuyến đi săn", focus: "Nhân vật bước vào rừng với mục đích săn bắn và tâm thế làm chủ thiên nhiên.", analysis: "Không gian rừng ban đầu gắn với ham muốn chinh phục. Những chi tiết chuẩn bị cho chuyến đi báo trước cuộc thử thách về nhận thức và lựa chọn." },
    { label: "Đoạn 2 · Cuộc gặp bất ngờ", focus: "Các con vật và sự cố trong cuộc săn làm phá vỡ cái nhìn đơn giản về con mồi.", analysis: "Nhân vật buộc phải chứng kiến sự sống cụ thể, có quan hệ và khả năng chống trả. Tình huống làm nảy sinh mâu thuẫn giữa bản năng săn bắt với lòng trắc ẩn." },
    { label: "Đoạn 3 · Thay đổi trong cách nhìn", focus: "Trải nghiệm trực tiếp khiến nhân vật do dự và lựa chọn khác với mục đích lúc đầu.", analysis: "Sự chuyển biến được thể hiện qua hành động, không chỉ bằng lời tự nhủ. Thiên nhiên trở thành môi trường thử thách nhân cách và mở rộng sự đồng cảm." },
    { label: "Đoạn 4 · Dư âm của khu rừng", focus: "Cuộc trở về gắn với những dấu hiệu hồi sinh và ý nghĩa biểu tượng của nhan đề.", analysis: "Nhan đề gợi một phần thưởng hiếm hoi, mong manh của tự nhiên và cũng là khả năng đổi thay trong con người. Kết thúc mở rộng câu chuyện từ chuyến săn sang suy ngẫm về quan hệ người–rừng." }
  ],
  "text-tuyen-ngon-doc-lap": [
    { label: "Phần 1 · Cơ sở pháp lí", focus: "Khẳng định nguyên lí về quyền con người và quyền bình đẳng, độc lập của các dân tộc.", analysis: "Lập luận đi từ những giá trị phổ quát để tạo cơ sở cho quyền dân tộc. Cách viện dẫn khiến tuyên bố độc lập vừa có tính chính nghĩa, vừa hướng tới đối thoại quốc tế." },
    { label: "Phần 2 · Tố cáo và bác bỏ", focus: "Đối chiếu lời lẽ tự nhận với những hành động thực tế trong lịch sử.", analysis: "Các chứng cứ được tổ chức để bác bỏ tuyên bố của thực dân và làm rõ thực trạng áp bức. Phép đối chiếu tăng sức nặng cho lập luận và tạo giọng điệu đanh thép." },
    { label: "Phần 3 · Khẳng định sự thật lịch sử", focus: "Nêu những sự kiện chứng minh nhân dân Việt Nam đã tự giành chính quyền và đứng về phía Đồng minh.", analysis: "Dòng sự kiện chuyển lập luận từ phản bác sang khẳng định tư cách chủ thể của dân tộc. Bằng chứng lịch sử đặt nền cho tuyên bố tiếp theo." },
    { label: "Phần 4 · Tuyên bố và cam kết", focus: "Khẳng định nền độc lập và ý chí bảo vệ quyền tự do của dân tộc.", analysis: "Câu văn chuyển từ lập luận sang lời tuyên bố có sức hiệu triệu. Giọng điệu kết thúc kết hợp sự dứt khoát với trách nhiệm trước nhân dân và thế giới." }
  ],
  "text-mo": [
    { label: "Cặp câu đầu · Cảnh chiều nơi núi rừng", focus: "Không gian chiều muộn hiện lên qua cánh chim và đám mây, gợi nhịp vận động từ rộng xa đến gần gũi.", analysis: "Cảnh vật được nhìn bằng cảm quan tinh tế trong hoàn cảnh đi đường vất vả. Hình ảnh chuyển động khiến bức tranh không tĩnh lặng tuyệt đối mà có nhịp sống." },
    { label: "Cặp câu cuối · Ánh lửa và con người", focus: "Cảnh sinh hoạt của con người xuất hiện, ánh lửa làm không gian ấm lên và mở ra hướng vận động của bài thơ.", analysis: "Tứ thơ đi từ thiên nhiên đến đời sống, từ bóng tối đến ánh sáng. Hình ảnh con người lao động ở trung tâm câu cuối tạo điểm kết ấm áp, thể hiện cái nhìn hướng về sự sống." }
  ],
  "text-nguyen-tieu": [
    { label: "Câu 1–2 · Bức tranh đêm rằm", focus: "Trăng xuân, dòng sông và bầu trời tạo nên không gian rộng, trong trẻo và giàu ánh sáng.", analysis: "Cảnh thiên nhiên mang vẻ cổ điển nhưng không xa cách; con người đang sống và làm việc trong không gian ấy. Chú ý nhạc điệu và hình ảnh trong bản dịch đang học." },
    { label: "Câu 3–4 · Công việc và cuộc trở về", focus: "Không gian thơ chuyển từ cảnh đẹp sang cuộc bàn việc nước, rồi trở lại với ánh trăng trên dòng sông.", analysis: "Tứ thơ không tách thi sĩ khỏi người chiến sĩ: việc nước hiện diện ngay giữa cảnh xuân. Kết cấu vòng khép lại trong ánh trăng, tạo vẻ ung dung và niềm tin." }
  ],
  "text-vong-nguyet": [
    { label: "Câu 1–2 · Hoàn cảnh và khát vọng thưởng trăng", focus: "Hoàn cảnh thiếu thốn nơi nhà tù đối lập với tâm hồn hướng ra thiên nhiên.", analysis: "Cặp câu đầu đặt trở ngại vật chất cạnh mong muốn giao cảm với trăng. Sự tương phản khắc họa phong thái tự do trong đời sống tinh thần." },
    { label: "Câu 3–4 · Cuộc giao cảm hai chiều", focus: "Người và trăng hướng về nhau qua song sắt, làm không gian giam hãm trở thành cuộc gặp gỡ.", analysis: "Phép nhân hóa và cấu trúc đối xứng khiến trăng như một chủ thể tri âm. Hình ảnh kết thúc chuyển song sắt từ ranh giới ngăn cách thành khung nối hai tâm hồn." }
  ],
  "text-canh-khuya": [
    { label: "Câu 1–2 · Âm thanh và cảnh trăng", focus: "Tiếng suối, bóng cây và ánh trăng được cảm nhận qua những liên tưởng giàu nhạc tính.", analysis: "Thiên nhiên vừa có âm thanh, vừa có đường nét và ánh sáng. Cách cảm nhận tinh tế gợi tâm hồn thi sĩ giữa không gian núi rừng." },
    { label: "Câu 3–4 · Nỗi thao thức việc nước", focus: "Từ người chưa ngủ, bài thơ hé lộ nỗi lo cho vận mệnh đất nước.", analysis: "Điệp ý về giấc ngủ tạo bước chuyển từ cảnh sang tình. Tình yêu thiên nhiên không tách khỏi trách nhiệm của người chiến sĩ." }
  ],
  "text-voi-vang": [
    { label: "Đoạn 1 · Ước muốn níu giữ vẻ đẹp", focus: "Cái tôi trữ tình bộc lộ khát vọng giữ lại ánh sáng, hương sắc và vẻ tươi non của cuộc đời.", analysis: "Những ước muốn khác thường cho thấy tình yêu sự sống mãnh liệt. Các hình ảnh giàu cảm giác biến thiên nhiên thành một khu vườn đầy sức sống." },
    { label: "Đoạn 2 · Bức tranh mùa xuân và niềm say mê", focus: "Thế giới trần thế hiện ra phong phú, gợi cảm; cảm xúc say mê dần chuyển thành nhận thức về thời gian.", analysis: "Phép điệp, liệt kê và nhịp thơ dồn dập tạo cảm giác sự sống đang trôi nhanh. Bức tranh mùa xuân gắn với tuổi trẻ, tình yêu và ý thức về sự hữu hạn." },
    { label: "Đoạn 3 · Nhận thức về thời gian", focus: "Cảm thức chia lìa và phai tàn làm cho vẻ đẹp hiện tại trở nên quý giá.", analysis: "Thời gian trong bài thơ là trải nghiệm chủ quan của con người đang yêu đời. Nỗi lo mất mát trở thành động lực sống sâu sắc chứ không chỉ là bi quan." },
    { label: "Đoạn 4 · Lời giục giã sống hết mình", focus: "Cảm xúc được đẩy lên thành khát vọng tận hưởng và hòa nhập trọn vẹn với cuộc đời.", analysis: "Nhịp điệu, động từ mạnh và cách xưng hô trực tiếp thể hiện cái tôi cá nhân táo bạo của Thơ mới. Lời giục giã hướng người đọc đến sự sống chủ động, có ý thức." }
  ],
  "text-tro-lo-va-ren-phan-boi-chau": [
    { label: "Đoạn 1 · Dựng tình huống cuộc gặp", focus: "Người kể giới thiệu chuyến thăm được dự định của Va-ren và đặt hai nhân vật vào một cuộc gặp đầy chênh lệch.", analysis: "Cách dựng tình huống tạo sẵn thế đối lập giữa kẻ cầm quyền thực dân với người chiến sĩ bị giam. Nhan đề đã gợi thái độ nghi ngờ đối với lời hứa của Va-ren." },
    { label: "Đoạn 2 · Lời lẽ và hành vi của Va-ren", focus: "Những lời thuyết phục phô bày sự tự mãn, cơ hội và khoảng cách giữa tuyên bố với bản chất.", analysis: "Giọng kể giả nghiêm trang, mỉa mai và cách dựng lời thoại khiến nhân vật tự bộc lộ. Tiếng cười đến từ nghịch lí giữa điều Va-ren nói và điều người đọc nhận ra." },
    { label: "Đoạn 3 · Sự im lặng của Phan Bội Châu", focus: "Thái độ không hưởng ứng của nhà chí sĩ trở thành đối trọng với màn độc thoại của Va-ren.", analysis: "Sự im lặng không phải thiếu tiếng nói mà là cách giữ vững khí tiết, từ chối tham gia vào cuộc diễn trò. Tương phản ấy làm nổi bật phẩm giá và cô lập sự giả dối." }
  ],
  "text-hon-truong-ba": [
    { label: "Cảnh đối thoại · Hồn và xác", focus: "Trương Ba phải đối diện với sự lệ thuộc giữa ý thức bên trong và thân xác đang chi phối hành động.", analysis: "Xung đột không chỉ là tranh luận triết lí mà được cụ thể hóa bằng nhu cầu, thói quen và cảm giác. Lời đối thoại cho thấy bi kịch không thể giải quyết bằng việc phủ nhận một nửa con người." },
    { label: "Mạch gia đình · Hệ quả của cách sống", focus: "Những người thân phản ánh sự thay đổi trong Trương Ba và nỗi đau do lối sống chắp vá gây ra.", analysis: "Bi kịch cá nhân lan vào các quan hệ gần gũi. Mỗi lời thoại là một bằng chứng giúp nhân vật nhận ra sự tồn tại của mình ảnh hưởng đến người khác." },
    { label: "Đối thoại với Đế Thích · Từ chối giải pháp dễ dàng", focus: "Nhân vật cân nhắc khả năng tiếp tục sống trong một hình thức không còn phù hợp với mình.", analysis: "Xung đột chuyển từ mong muốn sống sang câu hỏi sống như thế nào. Tác phẩm phản biện sự đánh đổi nhân phẩm để kéo dài tồn tại." },
    { label: "Kết thúc · Lựa chọn sống chân thực", focus: "Quyết định cuối cùng khẳng định nhu cầu được sống thống nhất, có phẩm giá và không làm khổ người thân.", analysis: "Kết thúc nhấn mạnh sự hài hòa giữa đời sống cá nhân với những giá trị còn lại trong ký ức, tình yêu và hành động. Đọc kết thúc như kết quả của toàn bộ xung đột." }
  ]
};

const literaryQuotes = {
  "text-tay-tien": {
    excerpt: "Sông Mã xa rồi Tây Tiến ơi!\nNhớ về rừng núi, nhớ chơi vơi.",
    source: "Quang Dũng, Tây Tiến",
    note: "Tiếng gọi và từ láy mở đầu dòng hồi tưởng da diết về miền Tây, đồng đội."
  },
  "text-cam-hoai": {
    excerpt: "Quốc thù vị báo đầu tiên bạch",
    source: "Đặng Dung, Cảm hoài",
    note: "Câu thơ dồn nỗi day dứt vì việc nước chưa xong vào ý thức về tuổi tác."
  },
  "text-dan-ghi-ta-lorca": {
    excerpt: "những tiếng đàn bọt nước\nTây Ban Nha áo choàng đỏ gắt",
    source: "Thanh Thảo, Đàn ghi ta của Lor-ca",
    note: "Hình ảnh gợi âm thanh mong manh và mở ra không gian văn hóa Tây Ban Nha."
  },
  "text-mo": {
    excerpt: "Chim mỏi về rừng tìm chốn ngủ\nCô em xóm núi xay ngô tối",
    source: "Hồ Chí Minh, Mộ (bản dịch thơ Nam Trân)",
    note: "Mạch thơ chuyển từ cánh chim cuối ngày sang con người và nhịp sống lao động."
  },
  "text-nguyen-tieu": {
    excerpt: "Kim dạ nguyên tiêu nguyệt chính viên\nRằm xuân lồng lộng trăng soi",
    source: "Hồ Chí Minh, Nguyên tiêu (nguyên tác và bản dịch thơ Xuân Thủy)",
    note: "Hai cách diễn đạt cùng gợi vầng trăng rằm và không gian xuân khoáng đạt."
  },
  "text-vong-nguyet": {
    excerpt: "Ngục trung vô tửu diệc vô hoa\nNhân hướng song tiền khán minh nguyệt",
    source: "Hồ Chí Minh, Vọng nguyệt (nguyên tác chữ Hán)",
    note: "Hai câu đặt hoàn cảnh thiếu thốn bên cạnh tâm thế hướng ra cửa sổ ngắm trăng."
  },
  "text-canh-khuya": {
    excerpt: "Tiếng suối trong như tiếng hát xa\nTrăng lồng cổ thụ bóng lồng hoa",
    source: "Hồ Chí Minh, Cảnh khuya",
    note: "Âm thanh, ánh trăng và bóng cây hòa thành bức tranh đêm rừng có nhạc tính."
  },
  "text-voi-vang": {
    excerpt: "Tôi muốn tắt nắng đi\nTôi muốn buộc gió lại",
    source: "Xuân Diệu, Vội vàng",
    note: "Cặp ước muốn táo bạo mở ra khát vọng níu giữ hương sắc của cuộc sống."
  },
  "text-tuyen-ngon-doc-lap": {
    excerpt: "Nước Việt Nam có quyền hưởng tự do và độc lập",
    source: "Hồ Chí Minh, Tuyên ngôn Độc lập",
    note: "Lời khẳng định cô đọng nêu quyền dân tộc và lập trường không thể lay chuyển."
  },
  "text-hon-truong-ba": {
    excerpt: "Không thể bên trong một đằng, bên ngoài một nẻo được.",
    source: "Lưu Quang Vũ, Hồn Trương Ba, da hàng thịt",
    note: "Lời thoại kết tinh bi kịch sống không thống nhất với chính mình."
  }
};

for (const lesson of literaryWorks) {
  lesson.segments = passageAnalyses[lesson.id] ?? [];
  lesson.quotes = literaryQuotes[lesson.id] ? [literaryQuotes[lesson.id]] : [];
}

lessons.push(...literaryWorks);

const lessonGrid = document.querySelector("#lesson-grid");
const searchInput = document.querySelector("#search-input");
const emptyState = document.querySelector("#empty-state");
const libraryPrompt = document.querySelector("#library-prompt");
const libraryViewButtons = [...document.querySelectorAll("[data-library-view]")];
const dialog = document.querySelector("#lesson-dialog");
const dialogContent = document.querySelector("#dialog-content");
const poetryCategories = new Set(["Thơ", "Truyện", "Kịch", "Kí", "Đọc thêm"]);
let activeLibraryView = null;

function matchesLibraryView(lesson, view) {
  if (view === "term1") return lesson.term === 1;
  if (view === "term2") return lesson.term === 2;
  if (view === "literature") return literaryWorks.includes(lesson);
  if (view === "poetry") return literaryWorks.includes(lesson) && poetryCategories.has(lesson.category);
  return false;
}

function selectLibraryView(view) {
  activeLibraryView = view;
  document.querySelector('.nav-link[href="#home"]')?.classList.remove("active");
  libraryViewButtons.forEach((button) => {
    const selected = button.dataset.libraryView === view;
    if (button.classList.contains("filter-button")) button.classList.toggle("selected", selected);
    else button.classList.toggle("active", selected);
  });
  libraryPrompt.hidden = true;
  renderLessons();
}

function renderLessons() {
  const query = searchInput.value.trim().toLocaleLowerCase("vi");
  for (const count of document.querySelectorAll("[data-count-term]")) {
    const term = count.dataset.countTerm;
    count.textContent = String(term === "all" ? lessons.length : lessons.filter((lesson) => String(lesson.term) === term).length);
  }
  for (const count of document.querySelectorAll("[data-count-view]")) {
    count.textContent = String(lessons.filter((lesson) => matchesLibraryView(lesson, count.dataset.countView)).length);
  }
  lessonGrid.hidden = activeLibraryView === null;
  if (activeLibraryView === null) {
    emptyState.hidden = true;
    return;
  }
  const filtered = lessons.filter((lesson) => {
    const haystack = `${lesson.title} ${lesson.author} ${lesson.category} ${lesson.format} ${lesson.intro} ${lesson.context}`.toLocaleLowerCase("vi");
    return matchesLibraryView(lesson, activeLibraryView) && haystack.includes(query);
  });

  lessonGrid.innerHTML = filtered.map((lesson) => `
    <button class="lesson-card" type="button" data-lesson-id="${lesson.id}" aria-label="Mở bài ${lesson.title}">
      <span class="lesson-card-top"><span class="lesson-tag">${lesson.category}</span><span class="lesson-term">HK${lesson.term}</span></span>
      <span class="lesson-card-heading">${lesson.title}</span>
      <span class="lesson-author">${lesson.author}</span>
      <span class="lesson-card-bottom"><span>${lesson.format}</span><span aria-hidden="true">↗</span></span>
    </button>
  `).join("");

  for (const card of lessonGrid.querySelectorAll(".lesson-card")) {
    const lesson = lessons.find((item) => item.id === card.dataset.lessonId);
    card.addEventListener("click", () => openLesson(lesson));
  }
  emptyState.hidden = filtered.length !== 0;
}

function openLesson(lesson) {
  dialogContent.innerHTML = `
    <p class="dialog-kicker">HỌC KÌ ${lesson.term} · ${lesson.category} · ${lesson.format}</p>
    <h2 id="dialog-title">${lesson.title}</h2>
    <p class="dialog-author">${lesson.author}</p>
    <p class="dialog-lead">${lesson.intro}</p>
    ${lesson.quotes?.length ? `<details class="lesson-section quote-section" id="lesson-quotes">
      <summary>Trích dẫn ngắn trong sách</summary>
      <div class="lesson-section-content">
        <p class="analysis-note">Trích dẫn ngắn để nhận diện và phân tích; em có thể đối chiếu toàn văn trong sách giáo khoa.</p>
        ${lesson.quotes.map((quote) => `<figure class="literary-quote">
          <blockquote>${quote.excerpt.split("\n").map((line) => `<span>“${line}”</span>`).join("")}</blockquote>
          <figcaption><cite>${quote.source}</cite><span>${quote.note}</span></figcaption>
        </figure>`).join("")}
      </div>
    </details>` : ""}
    ${lesson.segments?.length ? `<details class="lesson-section passage-analysis" id="lesson-analysis">
      <summary>Phân tích theo từng khổ / đoạn</summary>
      <div class="lesson-section-content">
        <p class="analysis-note">Phân tích theo mạch nội dung, không chép lại văn bản. Đối chiếu cách chia khổ hoặc đoạn trong sách giáo khoa.</p>
        ${lesson.segments.map((segment, index) => `<article class="analysis-segment">
          <span class="analysis-index">${String(index + 1).padStart(2, "0")}</span>
          <div><h4>${segment.label}</h4><p class="analysis-focus">${segment.focus}</p><p>${segment.analysis}</p></div>
        </article>`).join("")}
      </div>
    </details>` : ""}
    <details class="lesson-section lesson-notes" id="lesson-context">
      <summary>Bối cảnh tác phẩm</summary><div class="lesson-section-content"><p>${lesson.context}</p></div>
    </details>
    <details class="lesson-section lesson-notes" id="lesson-ideas">
      <summary>Những ý cần ghi nhớ</summary><div class="lesson-section-content"><ul>${lesson.ideas.map((idea) => `<li>${idea}</li>`).join("")}</ul></div>
    </details>
    <details class="lesson-section lesson-notes" id="lesson-craft">
      <summary>Cách đọc và thực hành</summary><div class="lesson-section-content"><p>${lesson.craft}</p></div>
    </details>
    <details class="lesson-section lesson-notes" id="lesson-prompt">
      <summary>Câu hỏi tự luyện</summary><div class="lesson-section-content"><p class="dialog-prompt">${lesson.prompt}</p></div>
    </details>
  `;
  dialog.showModal();
}

searchInput.addEventListener("input", renderLessons);
libraryViewButtons.forEach((button) => button.addEventListener("click", () => {
  selectLibraryView(button.dataset.libraryView);
}));

document.querySelectorAll("[data-term-filter]").forEach((link) => link.addEventListener("click", () => {
  selectLibraryView(link.dataset.termFilter === "1" ? "term1" : "term2");
}));

document.querySelector("[data-open-review]").addEventListener("click", () => {
  openLesson(lessons.find((lesson) => lesson.id === "on-tap-hk2"));
});
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
});

renderLessons();
