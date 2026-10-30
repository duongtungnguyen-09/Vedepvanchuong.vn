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

const compositionContexts = {
  "text-xuan-toc-do": {
    text: "Số đỏ được đăng nhiều kì trên Hà Nội báo năm 1936. Tiểu thuyết trào phúng ra đời giữa đời sống đô thị thuộc địa đang biến đổi, nơi một bộ phận xã hội chạy theo lối “Âu hóa”, danh vọng và những mốt tân thời. Vũ Trọng Phụng khai thác chính sự va chạm ấy để phơi bày thói háo danh, giả dối và các giá trị bị đảo lộn. “Xuân Tóc Đỏ cứu quốc” là tên đoạn học trong thư viện này; dữ liệu hiện có chưa xác định số chương, trang hay bản in SGK cụ thể, nên không thể gán riêng cho đoạn một ngày sáng tác.",
    citations: [
      { label: "Số đỏ — thông tin xuất bản và tác phẩm", url: "https://vi.wikipedia.org/wiki/S%E1%BB%91_%C4%91%E1%BB%8F" }
    ]
  },
  "text-noi-buon-chien-tranh": {
    text: "Tiểu thuyết được Bảo Ninh viết sau chiến tranh; nguồn tham khảo thường ghi tác phẩm hình thành năm 1987 và xuất bản lần đầu năm 1990 với nhan đề Thân phận của tình yêu, trước khi được biết rộng rãi dưới tên Nỗi buồn chiến tranh. Tác phẩm thuộc dòng văn học hậu chiến, nhìn chiến tranh từ ký ức và những mất mát dai dẳng của người sống sót thay vì chỉ thuật lại chiến công. Trang hiện chưa ghi rõ đoạn trích SGK cụ thể, vì vậy các chi tiết về mạch truyện cần đối chiếu văn bản đang học.",
    citations: [
      { label: "Nỗi buồn chiến tranh — thông tin xuất bản và nhan đề", url: "https://vi.wikipedia.org/wiki/N%E1%BB%97i_bu%E1%BB%93n_chi%E1%BA%BFn_tranh" }
    ]
  },
  "text-cam-hoai": {
    text: "Chưa xác định chắc chắn năm sáng tác. Bài thơ gắn với thời Hậu Trần đầu thế kỉ XV và cuộc kháng chiến chống quân Minh; nỗi day dứt vì việc nước dang dở thường được đọc trong liên hệ với hoàn cảnh thất thế của người kẻ sĩ. Nhan đề cũng lưu truyền dưới tên Thuật hoài. Do văn bản có dị bản và bản dịch khác nhau, cần đối chiếu phiên âm, chú giải và bản dịch được dùng trong SGK.",
    citations: [
      { label: "Cảm hoài (Thuật hoài) — Thi Viện", url: "https://www.thivien.net/%C4%90%E1%BA%B7ng-Dung/C%E1%BA%A3m-ho%C3%A0i-Thu%E1%BA%ADt-ho%C3%A0i/poem-RFpndssQwGhRpDQ55TfQQw" },
      { label: "Thuật hoài (Đặng Dung) — thông tin khái quát", url: "https://vi.wikipedia.org/wiki/Thu%E1%BA%ADt_ho%C3%A0i_(%C4%90%E1%BA%B7ng_Dung)" }
    ]
  },
  "text-tay-tien": {
    text: "Quang Dũng sáng tác bài thơ năm 1948 tại Phù Lưu Chanh, sau khi rời đơn vị Tây Tiến. Bài ban đầu mang tên Nhớ Tây Tiến, sau đổi thành Tây Tiến; nguồn Thi Viện ghi nhận các lần đăng trên Quân Bạch Đằng (1948) và Văn nghệ Việt Bắc (1949). Đoàn quân hoạt động ở vùng biên giới Việt–Lào trong kháng chiến chống Pháp; trải nghiệm của người lính và nỗi nhớ đồng đội, miền Tây là nền trực tiếp cho bức tranh vừa khắc nghiệt vừa thơ mộng của bài.",
    citations: [
      { label: "Tây Tiến — văn bản và thông tin tác phẩm trên Thi Viện", url: "https://www.thivien.net/Quang-D%C5%A9ng/T%C3%A2y-Ti%E1%BA%BFn/poem-xTFdqZUSfE3riX2yNfcavA" }
    ]
  },
  "text-dan-ghi-ta-lorca": {
    text: "Thanh Thảo sáng tác bài thơ năm 1979; tác phẩm được in trong tập Khối vuông ru-bích (1985). Bài tưởng niệm Federico García Lorca, nhà thơ và nghệ sĩ Tây Ban Nha bị lực lượng của Franco sát hại năm 1936. Hình tượng Lorca gợi suy tư về bạo lực áp chế, khát vọng tự do và số phận của nghệ thuật cách tân. Đây là liên tưởng lịch sử làm nền cho bài thơ, không nên biến mỗi biểu tượng thành một nghĩa duy nhất.",
    citations: [
      { label: "Đàn ghi ta của Lorca — thông tin tác phẩm", url: "https://vi.wikipedia.org/wiki/%C4%90%C3%A0n_ghi_ta_c%E1%BB%A7a_Lorca" },
      { label: "Bài thơ Đàn ghi ta của Lorca tròn 45 tuổi — Báo Thanh Niên", url: "https://thanhnien.vn/bai-tho-dan-ghi-ta-cua-lorca-tron-45-tuoi-185240311140810058.htm" }
    ]
  },
  "text-bai-tho-so-28": {
    text: "Bài số 28 thuộc tập thơ trữ tình The Gardener (Người làm vườn) của Rabindranath Tagore. Bản tiếng Anh của tập được xuất bản năm 1915; các bài thơ trong tập có lịch sử sáng tác trước đó, nhưng chưa xác định được năm viết riêng của bài số 28. Thư viện cũng chưa ghi bản dịch tiếng Việt và ấn bản SGK đang sử dụng, vì vậy khi phân tích sắc thái từ ngữ cần dựa đúng bản dịch trong sách.",
    citations: [
      { label: "The Gardener — Project Gutenberg", url: "https://www.gutenberg.org/files/6686/6686-h/6686-h.htm" }
    ]
  },
  "text-nhin-ve-von-van-hoa": {
    text: "“Nhìn về vốn văn hóa dân tộc” là nhan đề đoạn trích trong SGK, trích phần II bài Về vấn đề tìm đặc sắc văn hóa dân tộc của nhà nghiên cứu Trần Đình Hượu, in trong Đến hiện đại từ truyền thống. Nhan đề đoạn do người biên soạn đặt; ngày viết hoặc công bố đầu tiên của bài gốc chưa được xác nhận ở đây. Văn bản thuộc mạch nghiên cứu, đối thoại về đặc điểm văn hóa dân tộc và con đường hiện đại hóa, nên cần đọc các nhận định trong lập luận cụ thể thay vì xem chúng như kết luận bất biến.",
    citations: [
      { label: "Nhìn về vốn văn hóa dân tộc — tác giả, tác phẩm và xuất xứ", url: "https://vietjack.com/ngu-van-12/nhin-ve-von-van-hoa-dan-toc.jsp" }
    ]
  },
  "text-may-y-nghi-ve-tho": {
    text: "Đây là tiểu luận của Nguyễn Đình Thi bàn về thơ, cảm xúc, hình ảnh và sức gợi của ngôn từ. Dữ liệu hiện có trong thư viện chưa cho biết đoạn trích lấy từ ấn phẩm nào, thời điểm viết hay lần công bố đầu tiên; vì thế không gán bài viết cho một sự kiện hoặc cảm hứng tiểu sử cụ thể. Khi học, cần theo dõi các luận điểm và ví dụ trong đúng văn bản SGK.",
    citations: [
      { label: "Nguyễn Đình Thi — thông tin tác giả", url: "https://vi.wikipedia.org/wiki/Nguy%E1%BB%85n_%C4%90%C3%ACnh_Thi" }
    ]
  },
  "text-muoi-cua-rung": {
    text: "Muối của rừng là truyện ngắn của Nguyễn Huy Thiệp, xoay quanh chuyến đi săn và sự đổi thay trong cách nhân vật nhìn các sinh vật, khu rừng. Truyện thường được đọc trong mối quan tâm của văn xuôi đương đại đối với con người, tự nhiên và giới hạn đạo đức. Nguồn tham khảo hiện có chưa xác nhận chắc năm sáng tác hoặc lần đăng đầu, nên không ghi một mốc xuất bản cụ thể hay khẳng định một sự kiện duy nhất là cảm hứng sáng tác.",
    citations: [
      { label: "Muối của rừng — truyện ngắn Nguyễn Huy Thiệp, Văn nghệ", url: "https://vanvn.vn/muoi-cua-rung-truyen-ngan-cua-nguyen-huy-thiep/" }
    ]
  },
  "text-tuyen-ngon-doc-lap": {
    text: "Hồ Chí Minh soạn Tuyên ngôn Độc lập tại Hà Nội vào cuối tháng 8 năm 1945; văn kiện được công bố tại quảng trường Ba Đình ngày 2/9/1945. Bối cảnh là thắng lợi của Cách mạng tháng Tám và sự ra đời của nước Việt Nam Dân chủ Cộng hòa, đồng thời nhân dân Việt Nam phải khẳng định nền độc lập trước các thế lực muốn tái lập ách thuộc địa. Vì vậy, văn bản vừa tuyên bố quyền tự do, độc lập vừa lập luận và đưa chứng cứ để bác bỏ những luận điệu thực dân.",
    citations: [
      { label: "Tuyên ngôn Độc lập Việt Nam — văn bản trên Wikisource", url: "https://vi.wikisource.org/wiki/Tuy%C3%AAn_ng%C3%B4n_%C4%90%E1%BB%99c_l%E1%BA%ADp_Vi%E1%BB%87t_Nam" },
      { label: "Tuyên ngôn Độc lập — tư liệu về lễ công bố", url: "https://vi.wikipedia.org/wiki/Tuy%C3%AAn_ng%C3%B4n_%C4%91%E1%BB%99c_l%E1%BA%ADp_(Vi%E1%BB%87t_Nam_D%C3%A2n_ch%E1%BB%A7_C%E1%BB%99ng_h%C3%B2a)" }
    ]
  },
  "text-mo": {
    text: "Mộ (Chiều tối) là bài thơ chữ Hán thuộc Ngục trung nhật ký (Nhật ký trong tù), tập thơ Hồ Chí Minh viết trong thời gian bị giam giữ ở Trung Quốc, từ năm 1942 đến 1943. Chưa xác định được ngày sáng tác riêng của bài. Hoàn cảnh người tù bị áp giải qua miền núi tạo nền cho hành trình điểm nhìn từ cánh chim, chòm mây đến con người và ánh lửa; khi phân tích câu chữ tiếng Việt, cần ghi rõ đó là lựa chọn của bản dịch.",
    citations: [
      { label: "Nhật ký trong tù — thông tin về tập thơ", url: "https://vi.wikipedia.org/wiki/Nh%E1%BA%ADt_k%C3%BD_trong_t%C3%B9" },
      { label: "Mộ — văn bản và các bản dịch trên Thi Viện", url: "https://www.thivien.net/H%E1%BB%93-Ch%C3%AD-Minh/M%E1%BB%99/poem-H8jB1oJC4mUIKcExmWHoAw" }
    ]
  },
  "text-nguyen-tieu": {
    text: "Bài thơ chữ Hán Nguyên tiêu được ghi sáng tác vào tháng 2 năm 1948, trong kháng chiến chống Pháp tại chiến khu Việt Bắc. Đêm rằm mùa xuân và cuộc bàn việc quân trên sông là hai nét gắn cảnh thiên nhiên với công việc kháng chiến. Khi so sánh nguyên tác với bản dịch thơ, cần phân biệt hình ảnh, nhịp và lựa chọn từ ngữ của từng văn bản.",
    citations: [
      { label: "Nguyên tiêu — văn bản, thời điểm và bản dịch trên Thi Viện", url: "https://www.thivien.net/H%E1%BB%93-Ch%C3%AD-Minh/Nguy%C3%AAn-ti%C3%AAu/poem-9nGoTWzYHnMiK0mDAEFGOA" }
    ]
  },
  "text-tro-lo-va-ren-phan-boi-chau": {
    text: "Nguyễn Ái Quốc viết truyện bằng tiếng Pháp; tác phẩm được đăng nối tiếp trên báo Le Paria, số 36 (tháng 9/1925) và số 37 (tháng 10/1925). Tác phẩm xuất hiện sau vụ Phan Bội Châu bị bắt cóc và giam tại Hỏa Lò. Cách dựng cuộc gặp giữa Va-ren và nhà chí sĩ tạo thế đối lập giữa lời hứa chính trị với thực tế cai trị thuộc địa; tiếng cười trào phúng vì thế đồng thời là phương tiện tố cáo.",
    citations: [
      { label: "Những trò lố hay là Va-ren và Phan Bội Châu — xuất xứ", url: "https://vi.wikipedia.org/wiki/Nh%E1%BB%AFng_tr%C3%B2_l%E1%BB%91_hay_l%C3%A0_Va-ren_v%C3%A0_Phan_B%E1%BB%99i_Ch%C3%A2u" },
      { label: "Le Paria — số báo lưu trữ tại Thư viện Quốc gia Pháp (Gallica)", url: "https://gallica.bnf.fr/ark:/12148/bpt6k7009365k" }
    ]
  },
  "text-vong-nguyet": {
    text: "Vọng nguyệt (Ngắm trăng) thuộc tập thơ chữ Hán Ngục trung nhật ký, được Hồ Chí Minh viết trong thời gian bị giam tại Trung Quốc (1942–1943). Ngày sáng tác riêng chưa được xác định. Hoàn cảnh tù đày làm nổi bật thế tương phản giữa điều kiện vật chất thiếu thốn với sự chủ động hướng ra thiên nhiên và giao cảm với vầng trăng. Nên đối chiếu nguyên tác, phiên âm và bản dịch SGK khi bình giảng từ ngữ.",
    citations: [
      { label: "Vọng nguyệt — văn bản và thông tin trên Thi Viện", url: "https://www.thivien.net/H%E1%BB%93-Ch%C3%AD-Minh/V%E1%BB%8Dng-nguy%E1%BB%87t/poem-5rhhpzHYKx4bI46F3xhIQA" },
      { label: "Nhật ký trong tù — thông tin về tập thơ", url: "https://vi.wikipedia.org/wiki/Nh%E1%BA%ADt_k%C3%BD_trong_t%C3%B9" }
    ]
  },
  "text-canh-khuya": {
    text: "Cảnh khuya được sáng tác năm 1947 tại chiến khu Việt Bắc, trong những năm đầu của cuộc kháng chiến chống Pháp. Tiếng suối, ánh trăng và bóng cây tạo nên cảnh đêm; nỗi lo việc nước ở câu kết đặt cảnh thiên nhiên trong đời sống của người lãnh đạo kháng chiến. Bối cảnh này giúp đọc sự thao thức như điểm gặp giữa rung động thẩm mĩ và trách nhiệm, không chỉ như tâm trạng ngắm cảnh.",
    citations: [
      { label: "Cảnh khuya — văn bản, năm sáng tác và giới thiệu trên Thi Viện", url: "https://www.thivien.net/H%E1%BB%93-Ch%C3%AD-Minh/C%E1%BA%A3nh-khuya/poem-B5-sSkpPOQF-1juwlpUd4g" }
    ]
  },
  "text-voi-vang": {
    text: "Vội vàng được in trong tập Thơ thơ (1938), một dấu mốc của Xuân Diệu trong phong trào Thơ mới. Chưa xác định được ngày viết riêng của bài. Cái tôi cá nhân hiện đại, tình yêu trần thế và ý thức về tuổi trẻ hữu hạn được đặt trong không khí đổi mới thi ca đầu thế kỉ XX; do đó khát vọng tận hưởng trong bài không tách rời nỗi lo thời gian trôi qua.",
    citations: [
      { label: "Vội vàng — văn bản và thông tin trên Thi Viện", url: "https://www.thivien.net/Xu%C3%A2n-Di%E1%BB%87u/V%E1%BB%99i-v%C3%A0ng/poem-IyS6PGZk72z5lfRoUlCUtg" }
    ]
  },
  "text-hon-truong-ba": {
    text: "Lưu Quang Vũ viết vở kịch năm 1981; tác phẩm được dàn dựng và ra mắt công chúng năm 1984. Vở kịch phát triển từ truyện dân gian Hồn Trương Ba, da hàng thịt nhưng đặt lại tình huống quen thuộc để chất vấn sự sống vay mượn, sự lệch pha giữa bên trong và hình thức tồn tại. Bối cảnh đổi mới sân khấu và nhu cầu đối thoại trực diện với các vấn đề đời sống góp phần làm nên sức vang của kịch; cần phân biệt mốc viết với mốc công diễn.",
    citations: [
      { label: "Hồn Trương Ba, da hàng thịt — hoàn cảnh ra đời", url: "https://vietjack.com/ngu-van-12/hon-truong-ba-da-hang-thit.jsp" }
    ]
  }
};

const passageAnalyses = {
  "text-cam-hoai": [
    { label: "Câu 1 · Thế sự và tuổi tác", focus: "Câu hỏi trước việc đời rộng lớn đặt hoài bão cá nhân vào giới hạn của tuổi tác.", analysis: "Cụm từ chỉ thế sự mở rộng nỗi niềm từ đời riêng sang thời cuộc; câu hỏi tu từ không chờ một lời đáp mà bộc lộ cảm giác bối rối trước việc lớn còn dang dở. Chú ý thế đối lập giữa không gian lịch sử mênh mang và thân phận đang già đi: đó là điểm khởi đầu của bi kịch, đồng thời cho thấy nhân vật trữ tình tự ý thức rất rõ về trách nhiệm của mình." },
    { label: "Câu 2 · Trời đất và tiếng ca", focus: "Không gian vũ trụ rộng mở tương phản với tâm thế nặng lòng của người anh hùng.", analysis: "Hình ảnh trời đất vô cùng kéo nỗi buồn vượt khỏi cảm xúc cá nhân, còn tiếng ca gợi một cách tự nâng đỡ trước nghịch cảnh. Đọc câu này trong quan hệ với câu mở đầu: sự khoáng đạt không xóa được bế tắc, mà làm nổi rõ khoảng cách giữa tầm vóc hoài bão và khả năng thực hiện. Âm hưởng vì thế vừa có chất ngâm vịnh cổ điển vừa phảng phất nỗi cô độc." },
    { label: "Câu 3 · Thời vận đổi thay", focus: "Điển cố và cách nhìn về thời vận lí giải vì sao người tài có lúc không thể lập công.", analysis: "Câu thơ gợi những nhân vật từng làm nên sự nghiệp trong hoàn cảnh thuận lợi để đặt cạnh tình thế của người nói. Trọng tâm không phải phủ nhận tài năng, mà là nhận ra thời thế có thể mở hoặc khép con đường hành động. Cách nhìn ấy khiến lời thơ có chiều sâu lịch sử, song không biến thành sự đổ lỗi đơn giản: người nói vẫn đau vì biết mình còn khát vọng mà chưa gặp được cơ hội." },
    { label: "Câu 4 · Người anh hùng lỡ vận", focus: "Sự tương phản giữa phẩm chất anh hùng và vận hội bất lợi kết tinh nỗi uất hận.", analysis: "Câu thơ đặt khả năng lập công bên cạnh cảnh thất thế, tạo thế đối lập gay gắt giữa điều con người có thể làm và hoàn cảnh không cho phép. Nhịp ý cân xứng làm giọng điệu thêm nén chặt; nỗi buồn không chỉ là tiếc danh vọng mà là đau vì việc nước chưa thành. Đây là bước chuyển từ câu chuyện thời vận nói chung sang lời tự bộc bạch trực tiếp của chủ thể trữ tình." },
    { label: "Câu 5 · Hoài bão phò giúp", focus: "Ước vọng nâng đỡ cơ đồ đất nước được diễn tả bằng hình ảnh có tầm vóc lớn.", analysis: "Ý niệm phò giúp người đứng đầu và chống đỡ giang sơn cho thấy khát vọng chính trị hướng đến cộng đồng, không thu hẹp thành công danh riêng. Hình ảnh mang sắc thái kì vĩ làm hoài bão vượt lên quy mô đời thường. Cần đọc đây như lời tự xác nhận lí tưởng của người kẻ sĩ, đồng thời chuẩn bị cho sự đối lập với con đường hành động đang bị bế tắc." },
    { label: "Câu 6 · Mong ước hòa bình không thành", focus: "Khát vọng dẹp binh đao, trả lại yên ổn đối diện với cảm giác không có lối thực hiện.", analysis: "Hình ảnh kéo nước trời xuống để rửa sạch binh đao gợi một hành động phi thường, qua đó diễn tả ước muốn chấm dứt chiến tranh. Nhưng ý thơ cũng nhận ra mong ước ấy chưa tìm được lối đi trong thực tại. Hai câu luận vì vậy vừa hào sảng ở tầm vóc lí tưởng, vừa đau xót ở khoảng cách giữa lí tưởng và khả năng. Chính nghịch thế ấy tạo nên sắc thái bi tráng của bài thơ." },
    { label: "Câu 7 · Nợ nước còn dang dở", focus: "Việc nước chưa xong được đặt cạnh dấu hiệu tuổi già, gọi lại bi kịch đã mở đầu.", analysis: "Câu thơ nén mối lo lớn vào một tương phản cụ thể: trách nhiệm với non sông vẫn còn, trong khi thời gian của đời người đang cạn. Đây không đơn thuần là than thở về tuổi tác; nó là nỗi day dứt của người tự xem mình còn mắc nợ đất nước. Sự trở lại của ý thơ mở đầu tạo kết cấu vòng tròn, khiến nỗi niềm càng lúc càng khắc sâu." },
    { label: "Câu 8 · Thanh kiếm dưới trăng", focus: "Hình ảnh mài kiếm giữ lại tư thế hành động dù thời thế chưa cho phép hoàn thành chí nguyện.", analysis: "Thanh kiếm gợi ý chí chiến đấu vẫn được nuôi dưỡng, còn ánh trăng mở rộng cảnh đêm thành không gian suy tưởng. Động tác lặp lại hàm ý thời gian đã trôi qua nhiều lần mà việc lớn chưa xong; bởi vậy hình ảnh vừa có vẻ đẹp cổ điển vừa phảng phất bất lực. Kết thúc không khép lại bằng sự buông xuôi: ý chí còn đó, nhưng được bao phủ bởi nỗi tiếc nuối sâu nặng." }
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
    { label: "Đoạn 1 · Tình huống và vị thế nhân vật", focus: "Đặt nhân vật vào hoàn cảnh có khả năng bị diễn giải thành một sự kiện lớn lao.", analysis: "Trước hết xác định việc Xuân thực sự làm, mục đích của nhân vật và những người đang quan sát sự việc. Sự chênh lệch giữa động cơ cá nhân với ý nghĩa lớn lao mà đám đông gán cho nó tạo tiền đề trào phúng. Khi viết, phân biệt điều đoạn trích kể trực tiếp với điều người đọc suy ra; không bổ sung diễn biến ngoài phần văn bản được học." },
    { label: "Đoạn 2 · Sự việc bị phóng đại", focus: "Hành động và lời bình của những người xung quanh khiến một việc bình thường mang dáng vẻ phi thường.", analysis: "Đặt lời tung hô cạnh hành động thực tế để nhận ra nghịch lí: ngôn ngữ trang trọng không làm thay đổi bản chất sự việc, nhưng lại thay đổi cách công chúng nhìn nhân vật. Cách kể mỉa mai khiến người đọc thấy khoảng cách giữa sự kiện với màn trình diễn xã hội. Tiếng cười hướng vào cả kẻ cơ hội lẫn những người sẵn sàng tin vào hào quang được dựng lên." },
    { label: "Đoạn 3 · Hào quang và tiếng cười", focus: "Nhân vật được ca tụng như người hùng; sự đảo lộn giá trị trở thành đỉnh điểm của tình huống.", analysis: "Ở phần kết của đoạn trích, theo dõi ai được lợi từ cách diễn giải sự việc và những chuẩn mực nào bị đảo lộn. Danh tiếng không đến từ phẩm chất hay đóng góp tương xứng mà từ khả năng tận dụng cơ hội cùng sự tung hô của đám đông. Vì chưa có nguồn chuyên biệt xác nhận ranh giới đoạn trích trên trang, hãy gắn nhận xét về kết thúc với đúng văn bản SGK, không suy rộng từ toàn bộ tiểu thuyết." }
  ],
  "text-noi-buon-chien-tranh": [
    { label: "Mạch 1 · Hiện tại và dấu tích chiến tranh", focus: "Hiện tại của nhân vật vẫn bị bao vây bởi ký ức và những dấu vết hậu chiến.", analysis: "Đọc các chi tiết hiện tại cạnh những hồi ức bất chợt trở lại để nhận ra quá khứ không khép lại theo mốc lịch sử. Nó tiếp tục chi phối cảm xúc, quan hệ và khả năng sống bình thường của người sống sót. Khi phân tích, dẫn dấu hiệu cụ thể về thời gian hoặc điểm nhìn trong đoạn được học; không gọi mọi hồi tưởng là chấn thương nếu văn bản chưa cho căn cứ." },
    { label: "Mạch 2 · Ký ức chiến trường", focus: "Những mảnh hồi ức mở ra tình đồng đội, nỗi sợ, mất mát và những trải nghiệm khắc nghiệt.", analysis: "Kết cấu phân mảnh khiến thông tin đến theo dòng liên tưởng hơn là theo thứ tự niên biểu, giúp hình thức kể gần với trạng thái ký ức của nhân vật. Người đọc cần nhận diện dấu mốc chuyển thời gian, người đang cảm nhận và khoảng cách giữa ký ức với hiện tại. Cách đọc này tránh biến tiểu thuyết thành bản tường thuật trận đánh đơn tuyến." },
    { label: "Mạch 3 · Tình yêu và mất mát", focus: "Đời sống riêng và những tình cảm bị chiến tranh chia cắt đan vào dòng hồi ức.", analysis: "Đặt những mối quan hệ riêng bên cạnh bối cảnh chiến tranh để thấy tổn thất không chỉ được đo bằng con số hay chiến thắng. Tình yêu, tuổi trẻ và những lựa chọn dang dở làm hiện lên cái giá con người phải mang theo sau chiến tranh. Nên phân tích biến đổi tâm lí qua chi tiết và điểm nhìn, thay vì chỉ tóm tắt số phận nhân vật." },
    { label: "Mạch 4 · Viết để đối diện quá khứ", focus: "Hành động viết và việc lần tìm ký ức trở thành cách nhân vật đối diện với điều không thể quên.", analysis: "Hành động viết đặt ra câu hỏi liệu một trải nghiệm đứt gãy có thể được kể lại trọn vẹn hay không. Sự chồng lớp giữa hồi ức, tưởng tượng và hiện tại khiến người đọc phải chú ý ai đang kể, ai đang nhớ và mức độ chắc chắn của từng lớp thông tin. Đây là hướng đọc kết cấu chứ không phải khẳng định mọi chi tiết đều là hồi ký nguyên trạng." }
  ],
  "text-muoi-cua-rung": [
    { label: "Đoạn 1 · Chuyến đi săn", focus: "Nhân vật bước vào rừng với mục đích săn bắn và tâm thế làm chủ thiên nhiên.", analysis: "Xác định mục đích chuyến đi và cách nhân vật nhìn khu rừng ở đầu truyện. Những chi tiết về việc chuẩn bị, công cụ hoặc dự tính (nếu có trong bản trích) giúp nhận ra quan niệm ban đầu về quyền chinh phục tự nhiên. Đây là điểm xuất phát để so sánh với lựa chọn ở cuối, không nên vội xem nhân vật đã thay đổi ngay từ đầu." },
    { label: "Đoạn 2 · Cuộc gặp bất ngờ", focus: "Các con vật và sự cố trong cuộc săn làm phá vỡ cái nhìn đơn giản về con mồi.", analysis: "Khi tình huống xảy ra, chú ý cách miêu tả sự sống của con vật và phản ứng của người đi săn. Mâu thuẫn chỉ thực sự có ý nghĩa khi được chứng minh bằng hành động hoặc lời nghĩ trong văn bản, chẳng hạn sự do dự hay đổi hướng lựa chọn. Đối chiếu những chi tiết ấy với mục tiêu săn bắn ban đầu để thấy sức ép của trải nghiệm." },
    { label: "Đoạn 3 · Thay đổi trong cách nhìn", focus: "Trải nghiệm trực tiếp khiến nhân vật do dự và lựa chọn khác với mục đích lúc đầu.", analysis: "Nếu nhân vật thay đổi hành động, hãy xác định tác nhân cụ thể làm thay đổi quyết định và hệ quả của lựa chọn đó. Sự chuyển biến thuyết phục không chỉ nằm ở lời tự nhủ mà ở cách nhân vật ứng xử với sinh vật khác. Đọc thiên nhiên như môi trường thử thách nhận thức, đồng thời tránh khái quát lòng trắc ẩn thành một kết luận đạo đức chung nếu đoạn trích chưa hỗ trợ." },
    { label: "Đoạn 4 · Dư âm của khu rừng", focus: "Cuộc trở về gắn với những dấu hiệu hồi sinh và ý nghĩa biểu tượng của nhan đề.", analysis: "Đối chiếu cảnh kết thúc với không gian và tâm thế mở đầu để xác định điều gì đã thay đổi, điều gì vẫn còn bỏ ngỏ. Nhan đề có thể gợi giá trị hiếm hoi của tự nhiên, nhưng cần giải thích bằng hình ảnh kết truyện thực sự có trong bản SGK. Do chưa xác minh độc lập đúng đoạn trích, hãy xem hướng đọc người–rừng này là giả thuyết cần kiểm tra bằng văn bản." }
  ],
  "text-tuyen-ngon-doc-lap": [
    { label: "Phần 1 · Cơ sở pháp lí", focus: "Khẳng định nguyên lí về quyền con người và quyền bình đẳng, độc lập của các dân tộc.", analysis: "Lập luận đi từ những giá trị phổ quát để tạo cơ sở cho quyền dân tộc. Cách viện dẫn khiến tuyên bố độc lập vừa có tính chính nghĩa, vừa hướng tới đối thoại quốc tế." },
    { label: "Phần 2 · Tố cáo và bác bỏ", focus: "Đối chiếu lời lẽ tự nhận với những hành động thực tế trong lịch sử.", analysis: "Các chứng cứ được tổ chức để bác bỏ tuyên bố của thực dân và làm rõ thực trạng áp bức. Phép đối chiếu tăng sức nặng cho lập luận và tạo giọng điệu đanh thép." },
    { label: "Phần 3 · Khẳng định sự thật lịch sử", focus: "Nêu những sự kiện chứng minh nhân dân Việt Nam đã tự giành chính quyền và đứng về phía Đồng minh.", analysis: "Dòng sự kiện chuyển lập luận từ phản bác sang khẳng định tư cách chủ thể của dân tộc. Bằng chứng lịch sử đặt nền cho tuyên bố tiếp theo." },
    { label: "Phần 4 · Tuyên bố và cam kết", focus: "Khẳng định nền độc lập và ý chí bảo vệ quyền tự do của dân tộc.", analysis: "Câu văn chuyển từ lập luận sang lời tuyên bố có sức hiệu triệu. Giọng điệu kết thúc kết hợp sự dứt khoát với trách nhiệm trước nhân dân và thế giới." }
  ],
  "text-mo": [
    { label: "Câu 1 · Cánh chim cuối ngày", focus: "Cánh chim hướng về rừng, mở ra chuyển động trở về trong buổi chiều muộn.", analysis: "Cảnh vật được nhìn bằng cảm quan tinh tế trong hoàn cảnh đi đường vất vả. Hình ảnh có chuyển động và trạng thái mỏi, khiến thiên nhiên mang dấu hiệu của sự sống." },
    { label: "Câu 2 · Chòm mây lững lờ", focus: "Một nét chấm phá trên cao kéo dài cảm giác thời gian và mở rộng không gian.", analysis: "Đám mây trôi chậm tạo nhịp đối lập với hành trình của người tù. Bút pháp cổ điển dùng ít nét mà gợi chiều sâu, trong khi điểm nhìn vẫn gần gũi, giàu cảm thông." },
    { label: "Câu 3 · Cô gái xóm núi", focus: "Điểm nhìn chuyển từ thiên nhiên sang con người đang lao động.", analysis: "Cảnh sinh hoạt đưa hơi ấm đời thường vào buổi chiều. Hình ảnh con người không bị nhìn như một nét trang trí mà trở thành trung tâm của sự chú ý và đồng cảm." },
    { label: "Câu 4 · Lò than rực hồng", focus: "Ánh lửa khép lại bài thơ bằng sự chuyển động từ tối sang sáng, từ xa vắng sang gần gũi.", analysis: "Tứ thơ đi từ thiên nhiên đến đời sống và từ bóng tối đến ánh sáng. Cách kết thúc làm ấm toàn cảnh mà không xóa gian khó, thể hiện cái nhìn luôn hướng về sự sống." }
  ],
  "text-nguyen-tieu": [
    { label: "Câu 1 · Trăng rằm", focus: "Vầng trăng tròn mở đầu bài thơ bằng một hình ảnh sáng rõ, viên mãn.", analysis: "Câu thơ xác lập thời điểm đêm rằm và âm hưởng trang trọng. Đọc nguyên tác cùng bản dịch để nhận ra sắc thái mà nhịp và lựa chọn từ ngữ tạo nên." },
    { label: "Câu 2 · Sông, nước và trời xuân", focus: "Không gian được mở rộng qua các lớp cảnh vật cùng mang sắc xuân.", analysis: "Điệp từ xuân liên kết sông, nước và trời thành một chỉnh thể khoáng đạt. Thiên nhiên cổ điển nhưng không xa cách: nó là không gian sống động của những con người đang làm việc." },
    { label: "Câu 3 · Bàn việc quân", focus: "Công việc kháng chiến xuất hiện giữa khung cảnh đêm xuân.", analysis: "Câu thơ làm rõ người chiến sĩ không đứng ngoài vẻ đẹp thiên nhiên nhưng cũng không quên trách nhiệm. Sự chuyển mạch ngắn gọn dung hòa chất trữ tình với nhịp công việc." },
    { label: "Câu 4 · Con thuyền đầy trăng", focus: "Cuộc trở về khép lại trong hình ảnh ánh trăng phủ đầy con thuyền.", analysis: "Hình ảnh cuối kết tinh cảnh vật và cảm xúc vào một nét gợi. Kết cấu từ cảnh trăng đến việc nước rồi trở lại với trăng tạo cảm giác tròn đầy và phong thái ung dung." }
  ],
  "text-vong-nguyet": [
    { label: "Câu 1 · Thiếu thốn trong tù", focus: "Câu mở đầu nêu hoàn cảnh vật chất hạn hẹp bằng giọng kể bình tĩnh.", analysis: "Cách liệt kê cái không có đặt nền cho tình huống ngắm trăng. Giọng thơ tiết chế khiến thiếu thốn không trở thành lời than, mà làm rõ phong thái chủ động của người tù." },
    { label: "Câu 2 · Cảnh đẹp khó làm ngơ", focus: "Vẻ đẹp của đêm trăng đánh thức sự rung động bất chấp hoàn cảnh.", analysis: "Cảm xúc thẩm mĩ xuất hiện như một nhu cầu tinh thần tự nhiên. Từ ngữ biểu thị sự khó hững hờ cho thấy cái đẹp có sức gọi mời, nhưng người thơ vẫn giữ giọng điệu kín đáo." },
    { label: "Câu 3 · Người hướng về trăng", focus: "Ánh nhìn của con người vượt qua song cửa để tìm đến thiên nhiên.", analysis: "Cấu trúc hướng nhìn tạo chuyển động từ không gian giam hãm ra ngoài. Chủ thể trữ tình hiện lên chủ động, có khả năng lựa chọn nơi hướng tới dù thân thể bị giới hạn." },
    { label: "Câu 4 · Trăng hướng về người", focus: "Vầng trăng được nhân hóa, đáp lại ánh nhìn của thi nhân.", analysis: "Phép đối ứng biến cuộc ngắm nhìn thành giao cảm hai chiều. Song sắt không còn chỉ là ranh giới mà trở thành khung nối hai tâm hồn, làm nổi bật tự do tinh thần." }
  ],
  "text-canh-khuya": [
    { label: "Câu 1 · Âm thanh tiếng suối", focus: "Tiếng suối được cảm nhận bằng một liên tưởng gần với âm nhạc và tiếng người.", analysis: "So sánh khiến cảnh rừng có hồn, đưa âm thanh thiên nhiên đến gần đời sống con người. Từ chỉ độ trong vừa gợi âm sắc vừa bộc lộ tâm thế lắng nghe." },
    { label: "Câu 2 · Trăng và bóng cây", focus: "Ánh trăng, cổ thụ và bóng hoa đan cài thành nhiều lớp không gian.", analysis: "Điệp cấu trúc lồng tạo cảm giác cảnh vật thấm vào nhau, vừa có chiều sâu vừa có chuyển động. Hình ảnh được tổ chức bằng ánh sáng và bóng tối thay vì miêu tả tách rời." },
    { label: "Câu 3 · Người chưa ngủ", focus: "Chủ thể trữ tình xuất hiện, chuyển mạch từ cảnh thiên nhiên sang trạng thái con người.", analysis: "Câu thơ là bản lề của bài: người đọc bắt đầu hỏi vì sao nhân vật thao thức. Điệp ý về giấc ngủ giữ liên kết giữa rung động trước cảnh đẹp với nỗi niềm sâu hơn." },
    { label: "Câu 4 · Nỗi lo việc nước", focus: "Lời kết hé lộ trách nhiệm chính trị phía sau vẻ đẹp trăng rừng.", analysis: "Tình yêu thiên nhiên và nỗi lo đất nước cùng tồn tại, không triệt tiêu nhau. Sự trở lại của ý chưa ngủ làm rõ nguyên nhân thao thức và khắc họa chân dung thi sĩ–chiến sĩ." }
  ],
  "text-voi-vang": [
    { label: "Chặng 1 · Ước muốn níu giữ vẻ đẹp", focus: "Chủ thể trữ tình mở đầu bằng một ước muốn khác thường, bộc lộ tình yêu cuộc sống đến mức muốn giữ lại hương sắc đang trôi qua.", analysis: "Đây không phải ý định phủ nhận tự nhiên mà là cách nói phóng đại để diễn tả khát vọng sống mãnh liệt. Cái tôi trữ tình hiện ra chủ động, muốn can dự vào thế giới vì cảm nhận vẻ đẹp của đời sống bằng sự nâng niu và say mê." },
    { label: "Chặng 2 · Bức tranh trần thế đầy xuân sắc", focus: "Thiên nhiên được cảm nhận như một khu vườn tình yêu, nơi sự sống căng tràn qua màu sắc, hương thơm, ánh sáng và chuyển động.", analysis: "Cảnh vật không tĩnh tại mà có sức quyến rũ, gần gũi với con người; những hình ảnh được nối tiếp khiến niềm vui sống lan rộng thành một bức tranh nhiều giác quan. Cách nhìn ấy làm mùa xuân trở nên hữu hạn và đáng quý ngay trong khoảnh khắc hiện tại." },
    { label: "Chặng 3 · Nhận ra thời gian một chiều", focus: "Từ vẻ đẹp đang có, mạch thơ chuyển sang nỗi lo tuổi trẻ và mùa xuân không thể trở lại nguyên vẹn.", analysis: "Lối lập luận xoay quanh sự đến và đi khiến quy luật thời gian hiện lên vừa tự nhiên vừa đáng tiếc. Khi lấy tuổi trẻ làm thước đo, chủ thể trữ tình cảm nhận sự phai tàn không phải bằng suy tưởng xa xôi mà như một mất mát chạm tới chính mình; vì thế niềm vui trước cảnh đẹp chuyển thành băn khoăn, thôi thúc." },
    { label: "Chặng 4 · Sống hết mình với hiện tại", focus: "Nhận thức về thời gian hữu hạn dẫn tới lời giục giã tận hưởng và hòa nhập trọn vẹn với cuộc đời.", analysis: "Nhịp thơ trở nên dồn dập cùng chuỗi động từ và cảm giác được đẩy lên cao, tạo ấn tượng như chủ thể muốn ôm lấy mọi vẻ đẹp trước khi chúng qua đi. Sự vội vàng vì vậy không đồng nghĩa với hưởng thụ hời hợt: đó là lựa chọn sống tỉnh táo, yêu tha thiết và không trì hoãn những gì có ý nghĩa." }
  ],
  "text-tro-lo-va-ren-phan-boi-chau": [
    { label: "Đoạn 1 · Dựng tình huống cuộc gặp", focus: "Người kể giới thiệu chuyến thăm được dự định của Va-ren và đặt hai nhân vật vào một cuộc gặp đầy chênh lệch.", analysis: "Tình huống đặt người đại diện quyền lực thuộc địa bên cạnh nhà chí sĩ đang bị giam, vì thế mỗi lời nói và cử chỉ đều mang ý nghĩa chính trị. Nhan đề gọi chuyến đi là “trò lố”, báo trước cách kể sẽ làm lộ khoảng cách giữa tuyên bố công khai và động cơ thực. Khi phân tích, hãy tách giọng người kể khỏi phát ngôn của nhân vật để thấy tiếng cười được tổ chức như thế nào." },
    { label: "Đoạn 2 · Lời lẽ và hành vi của Va-ren", focus: "Những lời thuyết phục phô bày sự tự mãn, cơ hội và khoảng cách giữa tuyên bố với bản chất.", analysis: "Theo dõi cách Va-ren nói về bản thân, về quyền lực và về người đối diện; sự dài dòng hoặc tự mãn (nếu có trong bản trích) có thể khiến nhân vật tự bộc lộ. Giọng kể giả nghiêm trang tạo hiệu quả mỉa mai khi đặt lời hứa cạnh vị thế và hành động của người nói. Tiếng cười không chỉ nhắm vào tính cách cá nhân mà còn chất vấn thứ quyền lực dùng lời lẽ để che giấu lợi ích." },
    { label: "Đoạn 3 · Sự im lặng của Phan Bội Châu", focus: "Thái độ không hưởng ứng của nhà chí sĩ trở thành đối trọng với màn độc thoại của Va-ren.", analysis: "Đặt sự im lặng bên cạnh lượng lời nói của Va-ren để nhận ra tương phản về tư thế và mục đích. Im lặng có thể được đọc như sự khước từ tham gia vào cuộc đối thoại bị áp đặt, nhưng cần chỉ rõ chi tiết văn bản hỗ trợ cách hiểu ấy. Tương phản khiến màn diễn thuyết của kẻ có quyền trở nên lố bịch, đồng thời làm nổi bật phẩm giá của người bị giam." }
  ],
  "text-hon-truong-ba": [
    { label: "Cảnh đối thoại · Hồn và xác", focus: "Trương Ba phải đối diện với sự lệ thuộc giữa ý thức bên trong và thân xác đang chi phối hành động.", analysis: "Xung đột không chỉ là tranh luận triết lí mà được cụ thể hóa bằng nhu cầu, thói quen và cảm giác. Lời đối thoại cho thấy bi kịch không thể giải quyết bằng việc phủ nhận một nửa con người." },
    { label: "Mạch gia đình · Hệ quả của cách sống", focus: "Những người thân phản ánh sự thay đổi trong Trương Ba và nỗi đau do lối sống chắp vá gây ra.", analysis: "Bi kịch cá nhân lan vào các quan hệ gần gũi. Mỗi lời thoại là một bằng chứng giúp nhân vật nhận ra sự tồn tại của mình ảnh hưởng đến người khác." },
    { label: "Đối thoại với Đế Thích · Từ chối giải pháp dễ dàng", focus: "Nhân vật cân nhắc khả năng tiếp tục sống trong một hình thức không còn phù hợp với mình.", analysis: "Xung đột chuyển từ mong muốn sống sang câu hỏi sống như thế nào. Tác phẩm phản biện sự đánh đổi nhân phẩm để kéo dài tồn tại." },
    { label: "Kết thúc · Lựa chọn sống chân thực", focus: "Quyết định cuối cùng khẳng định nhu cầu được sống thống nhất, có phẩm giá và không làm khổ người thân.", analysis: "Kết thúc nhấn mạnh sự hài hòa giữa đời sống cá nhân với những giá trị còn lại trong ký ức, tình yêu và hành động. Đọc kết thúc như kết quả của toàn bộ xung đột." }
  ]
};

Object.assign(passageAnalyses, {
  "text-tren-xuong-cuu-nan": [
    { label: "Mạch 1 · Tình huống trên xuồng", focus: "Không gian chật hẹp và tình thế nguy cấp đặt các nhân vật vào một phép thử về sinh tồn.", analysis: "Xác định từ chính đoạn trích đâu là nguy cơ, những gì nhân vật có thể sử dụng và giới hạn của không gian. Sự cô lập có thể làm xung đột trở nên tập trung, nhưng chỉ nên nêu điều kiện sinh tồn cụ thể nếu văn bản thật sự mô tả chúng. Hãy xem tình huống vừa thúc đẩy cốt truyện vừa thử thách cách nhân vật nhìn bản thân và người khác." },
    { label: "Mạch 2 · Những lựa chọn trước hiểm nguy", focus: "Hành động, lời nói và cách phân chia nguồn lực bộc lộ quan hệ giữa các nhân vật.", analysis: "Đặt lời nói cạnh hành động để nhận ra sự thống nhất hoặc mâu thuẫn giữa điều nhân vật tuyên bố với điều họ làm. Ghi rõ lựa chọn nào gây hệ quả và ai chịu ảnh hưởng; từ đó mới suy ra quan hệ quyền lực, lòng tin hay ích kỉ. Nếu động cơ không được kể trực tiếp, trình bày như một khả năng có căn cứ thay vì khẳng định chắc chắn." },
    { label: "Mạch 3 · Dư âm của cuộc thử thách", focus: "Kết quả và phản ứng sau biến cố giúp nhận ra điều câu chuyện muốn người đọc suy ngẫm.", analysis: "So sánh trạng thái ban đầu với phản ứng sau biến cố để đánh giá điều gì thay đổi trong nhận thức hoặc quan hệ. Cách kết thúc có thể khiến người đọc xem lại lựa chọn trước đó, nhưng chủ đề phải được chứng minh bằng chi tiết kết thúc và điểm nhìn kể chuyện. Nhan đề hiện chưa đủ để xác định tác phẩm gốc; hãy đối chiếu xuất xứ SGK trước khi nhận xét về toàn bộ câu chuyện." }
  ],
  "text-nhin-ve-von-van-hoa": [
    { label: "Luận đề · Nhìn nhận vốn văn hóa", focus: "Tác giả đặt vấn đề về đặc điểm và giá trị của văn hóa dân tộc bằng một cái nhìn phân tích, không đơn giản hóa.", analysis: "Xác định phạm vi khái niệm mà văn bản bàn tới trước khi đánh giá từng nhận định. Luận đề cần được đọc trong toàn bộ lập luận, không tách thành một câu khẩu hiệu." },
    { label: "Các luận điểm · Lí giải đặc điểm", focus: "Những nhận xét, so sánh và dẫn giải được tổ chức thành các bước để làm rõ vấn đề.", analysis: "Lập sơ đồ luận điểm, ghi lại lí lẽ và dẫn chứng đi kèm, rồi kiểm tra mỗi phần đang mô tả, giải thích hay đánh giá. Cách phân biệt này giúp tránh hiểu một nhận xét khái quát thành kết luận tuyệt đối." },
    { label: "Kết luận · Giá trị và giới hạn", focus: "Quan điểm của người viết mời gọi người đọc suy nghĩ về cách bảo tồn và tiếp biến văn hóa.", analysis: "Đánh giá sức thuyết phục dựa trên căn cứ thực sự có trong văn bản và giới hạn của phạm vi khảo luận. Khi liên hệ hiện tại, cần phân biệt ý kiến của tác giả với nhận định của bản thân." }
  ],
  "text-nang-luc-sang-tao": [
    { label: "Nêu vấn đề · Hiểu về sáng tạo", focus: "Văn bản đặt ra cách hiểu về năng lực sáng tạo và điều kiện để năng lực ấy được hình thành.", analysis: "Tìm câu nêu vấn đề, sau đó xác định các từ khóa được giải thích hoặc nhấn mạnh. Không đồng nhất sáng tạo với sự mới lạ bằng mọi giá; cần căn cứ vào định nghĩa và ví dụ của văn bản." },
    { label: "Triển khai · Lí lẽ và ví dụ", focus: "Các luận điểm, lí lẽ và ví dụ cho thấy người viết bảo vệ quan niệm của mình như thế nào.", analysis: "Với mỗi luận điểm, chỉ ra bằng chứng hỗ trợ và đánh giá mức độ phù hợp giữa ví dụ với kết luận. Nếu văn bản có ý kiến đối lập, xem cách người viết tiếp nhận hoặc bác bỏ ý kiến ấy." },
    { label: "Vận dụng · Sáng tạo trong học tập", focus: "Ý nghĩa của lập luận được thử lại qua việc học, đọc và giải quyết vấn đề của người học.", analysis: "Liên hệ bằng một tình huống cụ thể, nêu rõ điều kiện giúp hình thành ý tưởng và cách kiểm chứng kết quả. Tách phần văn bản khẳng định khỏi quan điểm cá nhân để giữ lập luận chính xác." }
  ],
  "text-may-y-nghi-ve-tho": [
    { label: "Mạch 1 · Cảm xúc và tiếng nói thơ", focus: "Tiểu luận suy nghĩ về nguồn cảm xúc và cách cảm xúc được chuyển thành tiếng nói nghệ thuật.", analysis: "Xác định nhận định trung tâm của Nguyễn Đình Thi rồi theo dõi các ý giải thích. Khi phân tích, phân biệt cảm xúc của người viết tiểu luận với chủ thể trữ tình trong một bài thơ được dẫn ra." },
    { label: "Mạch 2 · Hình ảnh và ngôn từ", focus: "Những suy tưởng về hình ảnh thơ giúp lí giải sức gợi vượt khỏi nghĩa thông thường của từ ngữ.", analysis: "Đọc các ví dụ trong văn bản như bằng chứng cho quan niệm, chú ý cách hình ảnh khơi liên tưởng chứ không chỉ trang trí câu thơ. Mỗi nhận xét về nghệ thuật cần gắn với ví dụ mà tác giả lựa chọn." },
    { label: "Mạch 3 · Cách tiếp nhận thơ", focus: "Người đọc được gợi ý tham gia giải mã và đối thoại với tác phẩm bằng trải nghiệm có căn cứ.", analysis: "Tóm lược chuỗi lập luận trước khi đánh giá một ý kiến. Có thể vận dụng vào thơ đã học, nhưng cần chỉ rõ chi tiết nào kiểm chứng hoặc khiến mình bổ sung cho nhận định." }
  ],
  "text-cam-hung-sang-tao": [
    { label: "Vấn đề trung tâm · Cảm hứng và sáng tạo", focus: "Văn bản thực hành đọc mở rộng suy nghĩ về vai trò của cảm hứng trong quá trình tạo ra tác phẩm.", analysis: "Dùng câu chủ đề và các từ khóa lặp lại để xác định vấn đề; không suy đoán quan niệm của người viết chỉ từ nhan đề. Ghi rõ luận điểm nào được văn bản nêu trực tiếp." },
    { label: "Lập luận · Cách giải thích và minh họa", focus: "Ví dụ và lí lẽ cho thấy mối liên hệ giữa cảm hứng với lao động, trải nghiệm hoặc năng lực sáng tạo.", analysis: "Kiểm tra ví dụ đang minh họa, giải thích hay làm bằng chứng cho kết luận. Nếu ngữ liệu không nêu rõ một yếu tố, hãy đặt câu hỏi mở thay vì tự bổ sung như một dữ kiện." },
    { label: "Đọc mở rộng · Từ văn bản đến trải nghiệm", focus: "Người đọc vận dụng lập luận vào trải nghiệm sáng tạo nhưng vẫn giữ ranh giới giữa hai nguồn ý kiến.", analysis: "Nêu một trải nghiệm cụ thể rồi đối chiếu với luận điểm trong văn bản: điểm nào tương đồng, điểm nào cần điều chỉnh. Cách đối thoại này giúp phần liên hệ không biến thành kể chuyện riêng." }
  ],
  "text-hai-khau-linh-tu": [
    { label: "Mạch 1 · Thiết lập thế giới truyện", focus: "Không gian, nhân vật và sự việc ban đầu tạo nền cho ranh giới giữa đời thường với điều linh thiêng.", analysis: "Đọc phần mở đầu để xác định thời gian, địa điểm, người kể và sự việc làm phát sinh câu chuyện. Chỉ gọi một chi tiết là kì ảo khi chính văn bản cho thấy nó vượt khỏi quy luật đời thường trong thế giới truyện; không suy ra thể loại hoặc xuất xứ chỉ từ nhan đề. Những dữ kiện đầu tiên tạo chuẩn để nhận biết điều gì là quen thuộc, điều gì gây bất thường." },
    { label: "Mạch 2 · Sự kiện khác thường", focus: "Yếu tố truyền kì tham gia vào diễn biến và làm thay đổi cách nhân vật hoặc cộng đồng nhìn sự việc.", analysis: "Xác định chi tiết lạ xuất hiện ở bước nào, tác động đến hành động ra sao và nhân vật tin nhận hay nghi ngờ nó. Nếu chi tiết làm thay đổi kết quả, hãy chỉ rõ quan hệ nhân quả thay vì chỉ gắn nhãn “kì ảo”. Cách đọc này giúp thấy yếu tố khác thường tham gia cấu tạo cốt truyện, đồng thời có thể mở ra suy nghĩ về niềm tin hoặc nỗi lo của cộng đồng." },
    { label: "Mạch 3 · Ý nghĩa và dấu ấn văn hóa", focus: "Kết thúc truyện gợi cách cộng đồng hình dung về niềm tin, đạo lí và trật tự đời sống.", analysis: "Đối chiếu kết cục với sự việc ban đầu để xem trật tự nào được khẳng định, chất vấn hoặc để ngỏ. Phân biệt thông điệp có căn cứ trong hành động và lời kể với cách người đọc hôm nay liên hệ thêm. Chưa xác minh được chính xác bản văn và xuất xứ của đoạn trích này, nên mọi nhận xét về dấu ấn văn hóa cần được kiểm tra bằng chú thích và sự kiện trong SGK." }
  ],
  "text-ben-tran-gian": [
    { label: "Mạch 1 · Tình huống và điểm nhìn", focus: "Tình huống truyện cùng cách lựa chọn người kể quyết định điều người đọc được biết và cảm nhận.", analysis: "Đọc phần mở đầu để xác định thời điểm, vị trí quan sát và nhân vật mà người đọc theo dõi. Ghi lại thông tin nào được kể ngay, thông tin nào bị giữ lại; cách phân phối này có thể tạo tò mò hoặc bất định. Vì chưa xác định được nguồn văn bản từ nhan đề, không nên tự gán người kể hay sự kiện cụ thể khi chưa đối chiếu đoạn trích." },
    { label: "Mạch 2 · Hiện thực và yếu tố khác thường", focus: "Các chi tiết thực và tưởng tượng cần được đọc trong quan hệ, không tách thành hai lớp rời nhau.", analysis: "Chọn một chi tiết nổi bật trong bản SGK, nêu hoàn cảnh nó xuất hiện và ảnh hưởng đến quyết định hoặc cảm xúc của nhân vật. Nếu chi tiết có sắc thái huyền ảo, chứng minh bằng dấu hiệu trong văn bản rồi mới giải thích hiệu quả. Không suy ra một biểu tượng chung từ nhan đề khi chưa xác nhận nội dung." },
    { label: "Mạch 3 · Chủ đề mở", focus: "Dư âm câu chuyện được hình thành từ trải nghiệm nhân vật và cách kết thúc để lại câu hỏi.", analysis: "Tổng hợp bằng chứng về nhân vật, điểm nhìn và kết thúc rồi mới đề xuất chủ đề; nếu kết thúc bỏ ngỏ, nêu câu hỏi mà nó để lại thay vì ép thành một bài học. Tách rõ sự kiện văn bản kể với liên hệ cá nhân để giữ lập luận có căn cứ. Cần xác minh tên tác giả, tác phẩm gốc và phạm vi đoạn trích từ chú thích SGK trước khi hoàn thiện bài phân tích." }
  ],
  "text-nhan-vat-quan-trong": [
    { label: "Mạch 1 · Mục tiêu và vị thế nhân vật", focus: "Điều nhân vật muốn đạt được tạo hướng vận động ban đầu cho xung đột sân khấu.", analysis: "Đọc lời thoại như hành động: nhân vật có thể tìm cách thuyết phục, che giấu, khoe khoang hoặc áp đặt. Đối chiếu mục tiêu với phản ứng của người đối thoại để nhận ra vị thế thực của nhân vật." },
    { label: "Mạch 2 · Xung đột tăng tiến", focus: "Các lượt lời và sự kiện liên tiếp làm mâu thuẫn trở nên trớ trêu hoặc khó che đậy.", analysis: "Theo dõi ai biết điều gì ở từng thời điểm và điều gì khán giả biết nhiều hơn nhân vật. Khoảng cách thông tin, nếu có trong văn bản, là căn cứ giải thích nhịp gây cười và bất ngờ." },
    { label: "Mạch 3 · Tiếng cười và đối tượng phê phán", focus: "Cách kết thúc cảnh kịch giúp nhận ra thói ứng xử hoặc quan niệm bị đưa ra chất vấn.", analysis: "Gọi đúng đối tượng của tiếng cười bằng bằng chứng từ lời nói và hành động; không quy kết tính cách ngoài phần trích. Phân biệt tiếng cười do hiểu nhầm với tiếng cười có ý nghĩa châm biếm." }
  ],
  "text-giau-cua": [
    { label: "Mạch 1 · Bí mật và động cơ", focus: "Ý định che giấu tạo tiền đề cho mâu thuẫn giữa điều nhân vật biết, nói và làm.", analysis: "Lập bảng ngắn về thông tin của từng nhân vật nếu văn bản có nhiều lớp hiểu biết. Cách làm này giúp giải thích tình huống mà không nhầm lẫn giữa sự thật và lời đồn trong màn kịch." },
    { label: "Mạch 2 · Hành động và hiểu lầm", focus: "Lời thoại, động tác và phản ứng nối tiếp nhau khiến việc giấu giếm ngày càng khó kiểm soát.", analysis: "Tìm điểm mà một hành động làm tình thế đổi hướng; phân tích nhịp đối đáp và sự lặp lại nếu có. Tiếng cười thường hình thành từ khoảng cách giữa tính toán của nhân vật với kết quả họ nhận được." },
    { label: "Mạch 3 · Hóa giải và ý nghĩa", focus: "Kết quả của sự việc bộc lộ tính cách hoặc thói quen ứng xử mà vở hài kịch muốn phê phán.", analysis: "Dựa vào kết cục thực tế của văn bản để xác định ai bị lật tẩy và vì sao. Tránh áp đặt một bài học đạo đức duy nhất nếu đoạn trích không đủ căn cứ." }
  ],
  "text-can-than-hao": [
    { label: "Mạch 1 · Tính cách và tình huống", focus: "Tình huống thực hành đọc cho thấy thói quen hoặc nỗi lo của nhân vật qua một sự việc cụ thể.", analysis: "Ghi lại điều nhân vật tin là nguy hiểm và bằng chứng văn bản cho thấy mức độ hợp lí của nỗi lo ấy. Cách đối chiếu này giúp phân biệt cẩn trọng thực chất với sự lo lắng vô căn cứ." },
    { label: "Mạch 2 · Lời thoại tạo trớ trêu", focus: "Phản ứng của nhân vật và cách người khác đáp lại tạo nhịp hài hước trên sân khấu.", analysis: "Chọn một lượt thoại tiêu biểu, chỉ ra thông tin bị hiểu sai hoặc cách nói làm lộ tính cách. Không trích dài; giải thích cụ thể vì sao lời thoại ấy tạo tiếng cười." },
    { label: "Mạch 3 · Ý nghĩa phê phán", focus: "Tiếng cười hướng người đọc nhìn lại thói quen ứng xử thay vì chỉ cười một cá nhân.", analysis: "Nêu đối tượng bị phê phán trong phạm vi đoạn trích và thái độ của người viết thể hiện qua cách dựng cảnh. Nếu chưa đủ dữ liệu về toàn vở, giới hạn nhận xét ở phần văn bản được học." }
  ],
  "text-nghe-thuat-bam-thit-ga": [
    { label: "Mạch 1 · Sự việc và bối cảnh cộng đồng", focus: "Một sinh hoạt cụ thể được đặt trong môi trường làng quê với những quy ước và quan hệ xã hội nhất định.", analysis: "Tóm lược ai tham gia, việc gì diễn ra và chi tiết nào cho thấy tính chất tập thể của sự việc. Không gọi tên phong tục hoặc địa phương nếu ngữ liệu không ghi rõ." },
    { label: "Mạch 2 · Chi tiết quan sát và giọng kể", focus: "Cách lựa chọn động tác, con số, lời nói hoặc trình tự thao tác tạo nên sức gợi của văn bản kí.", analysis: "Phân biệt phần ghi nhận sự việc với sắc thái bình luận. Nếu giọng kể có nét hài hước hay mỉa mai, chứng minh bằng cách dùng từ và cách đặt các chi tiết cạnh nhau." },
    { label: "Mạch 3 · Bức tranh xã hội", focus: "Ý nghĩa của sự việc vượt khỏi thao tác thường ngày để gợi suy nghĩ về quan hệ và nếp sống.", analysis: "Khái quát từ chi tiết đã phân tích, không suy rộng thành nhận xét về mọi cộng đồng. Ghi rõ xuất xứ theo sách giáo khoa nếu văn bản không nêu tên tác giả." }
  ],
  "text-buoc-vao-doi": [
    { label: "Mạch 1 · Hoàn cảnh trải nghiệm", focus: "Người viết ghi lại một lần tiếp xúc với đời sống thực tế và xác lập vị trí quan sát của mình.", analysis: "Xác định thời gian, địa điểm và đối tượng được kể nếu văn bản cung cấp. Các dữ kiện này giúp người đọc hiểu giới hạn của trải nghiệm và mức độ trực tiếp của lời kể." },
    { label: "Mạch 2 · Chi tiết và dấu ấn cá nhân", focus: "Những điều được chọn để kể cho thấy cách người viết chú ý, cảm nhận và đánh giá sự việc.", analysis: "Tìm sự đan xen giữa miêu tả, thông tin và suy nghĩ; không xem mọi lời bình là dữ kiện khách quan. Một chi tiết nhỏ có thể biểu hiện thái độ nếu được đặt đúng ngữ cảnh." },
    { label: "Mạch 3 · Nhận thức sau trải nghiệm", focus: "Cách kết thúc hoặc lời bình cuối cho thấy trải nghiệm làm thay đổi hiểu biết của người viết ra sao.", analysis: "Đối chiếu cảm nhận ban đầu với nhận xét sau cùng bằng chi tiết trong văn bản. Khi bình luận độ tin cậy, phân biệt điều có thể kiểm chứng với suy nghĩ chủ quan." }
  ],
  "text-vi-tuyen-17": [
    { label: "Mạch 1 · Địa danh và dấu mốc", focus: "Địa điểm cùng mốc lịch sử tạo nền để người đọc định vị sự kiện được ghi lại.", analysis: "Gạch chân tên riêng, thời gian và dữ kiện lịch sử có trong văn bản; kiểm tra cách chúng được giới thiệu. Không tự bổ sung sự kiện ngoài sách nếu đề chỉ yêu cầu phân tích ngữ liệu." },
    { label: "Mạch 2 · Tư liệu và ký ức", focus: "Thông tin, trải nghiệm và hồi ức được tổ chức thành một câu chuyện có điểm nhìn.", analysis: "Phân biệt dữ liệu có thể kiểm chứng với lời kể hoặc cảm nhận cá nhân. Sau đó chỉ ra chúng bổ sung cho nhau như thế nào để người đọc vừa hiểu sự kiện vừa cảm nhận ý nghĩa của nó." },
    { label: "Mạch 3 · Giọng kể và thông điệp", focus: "Thái độ của người viết bộc lộ qua chi tiết được lựa chọn và cách câu chuyện khép lại.", analysis: "Dựa vào giọng điệu và những đoạn bình luận để nêu lập trường; tránh đồng nhất người kể với mọi nhân chứng được nhắc đến. Kết luận cần kết nối ý nghĩa lịch sử với trải nghiệm con người." }
  ],
  "text-pa-ra-na": [
    { label: "Mạch 1 · Không gian và hành trình", focus: "Tên gọi, địa điểm và trình tự quan sát giúp dựng nên không gian trải nghiệm của văn bản.", analysis: "Giữ nguyên cách viết tên riêng trong sách, xác định người viết đang ở đâu và di chuyển hoặc quan sát điều gì. Chỉ mô tả đặc điểm địa lí khi có chi tiết trực tiếp làm căn cứ." },
    { label: "Mạch 2 · Chi tiết tạo hình dung", focus: "Những ghi chép cụ thể biến trải nghiệm thành hình ảnh và thông tin cho người đọc.", analysis: "Chọn một chi tiết cảm giác hoặc sự việc, giải thích nó giúp hình dung không gian ra sao và có bổ sung dữ kiện nào. Tránh suy đoán ý nghĩa văn hóa vượt quá phần ngữ liệu." },
    { label: "Mạch 3 · Cảm nhận và giọng điệu", focus: "Cách người viết chọn từ và bình luận cho thấy thái độ trước cảnh vật hoặc con người.", analysis: "Đối chiếu chi tiết quan sát với lời nhận xét để thấy ranh giới giữa ghi chép và cảm nhận. Từ đó đánh giá giọng điệu bằng bằng chứng thay vì chỉ gọi tên cảm xúc." }
  ],
  "text-giao-duc-khai-phong": [
    { label: "Luận đề · Nhìn lại Đông Kinh Nghĩa Thục", focus: "Văn bản dùng một dấu mốc giáo dục trong lịch sử để mở ra vấn đề về tinh thần khai phóng.", analysis: "Xác định luận đề và phạm vi thời gian được bàn tới. Tách dữ kiện lịch sử khỏi nhận định hiện đại để hiểu cách tác giả kết nối quá khứ với câu hỏi hôm nay." },
    { label: "Lí lẽ và dữ kiện · Nối quá khứ với hiện tại", focus: "Bằng chứng lịch sử được lựa chọn để giải thích mục tiêu, phương pháp hoặc ảnh hưởng của phong trào.", analysis: "Đánh giá từng dữ kiện đang minh họa hay trực tiếp chứng minh luận điểm. Một kết luận chỉ thuyết phục khi mức độ khái quát tương xứng với bằng chứng được nêu." },
    { label: "Ý nghĩa · Quan niệm về học tập", focus: "Văn bản gợi người đọc suy nghĩ về tri thức, tự chủ và trách nhiệm của người học.", analysis: "Liên hệ với giáo dục hiện nay nhưng nói rõ đó là phần vận dụng của mình. Trở lại văn bản để kiểm tra liệu liên hệ có tiếp nối đúng luận đề hay đã chuyển sang một vấn đề khác." }
  ],
  "text-doi-muoi": [
    { label: "Mạch 1 · Từ vật dụng quen thuộc đến chủ đề", focus: "Nhan đề đặt muối trong một lịch sử và đời sống rộng hơn việc sử dụng hằng ngày.", analysis: "Xác định các câu chủ đề và phạm vi thông tin mà văn bản lựa chọn. Cách mở rộng từ điều quen thuộc sang bối cảnh lớn giúp người đọc nhận ra giá trị của đối tượng được khảo sát." },
    { label: "Mạch 2 · Dữ liệu và cách tổ chức", focus: "Mốc thời gian, sự kiện hoặc số liệu liên kết thành dòng thông tin về vai trò của muối.", analysis: "Kiểm tra mỗi dữ liệu có nguồn hoặc ngữ cảnh rõ không, rồi chỉ ra nó hỗ trợ ý nào. Phân biệt thông tin được nêu với cách người viết diễn giải quan hệ nhân quả." },
    { label: "Mạch 3 · Kết luận và hiệu quả thông tin", focus: "Cách khép lại giúp kết nối lịch sử của muối với nhận thức của người đọc về đời sống.", analysis: "Đánh giá nhan đề, ví dụ và trình tự trình bày có làm chủ đề dễ nhớ, dễ hiểu hơn không. Dẫn một dữ kiện chính xác để chứng minh hiệu quả, không chỉ nhận xét chung rằng văn bản hấp dẫn." }
  ],
  "text-sach-thay-doi-lich-su": [
    { label: "Luận đề · Vai trò của sách", focus: "Văn bản thực hành đọc xem sách như một phương tiện gắn với biến đổi tri thức và xã hội.", analysis: "Tóm lược luận đề trong một câu rồi xác định những giai đoạn hoặc ví dụ được chọn. Không khái quát tác động của sách vượt ra ngoài phạm vi mà các dữ kiện cho phép." },
    { label: "Dữ liệu · Những bước ngoặt lịch sử", focus: "Các thông tin lịch sử minh họa cách việc lưu giữ và truyền bá tri thức tạo ảnh hưởng.", analysis: "Với mỗi ví dụ, nêu rõ dữ kiện nói gì và nó chứng minh khía cạnh nào của luận đề. Kiểm tra trình tự thời gian và quan hệ giữa ví dụ với kết luận." },
    { label: "Đánh giá · Sức thuyết phục", focus: "Cách lựa chọn dữ kiện và tổ chức văn bản định hình quan điểm về tầm quan trọng của sách.", analysis: "Đánh giá độ bao quát của ví dụ và những giới hạn có thể có; phân biệt dữ liệu với bình luận. Khi liên hệ hiện tại, dùng một ví dụ cụ thể và không xem công nghệ mới là đối lập tuyệt đối với sách." }
  ],
  "text-tro-ve": [
    { label: "Mạch 1 · Người trở về và nơi chốn", focus: "Hoàn cảnh trở về tạo điểm tựa để nhận ra sự thay đổi của nhân vật và không gian.", analysis: "Trước tiên xác định nhân vật, điểm xuất phát, nơi trở về và khoảng thời gian vắng mặt nếu văn bản có nêu. So sánh hình dung của nhân vật với những gì đang hiện ra để nhận diện khoảng cách giữa kí ức và thực tại. Vì nhan đề chưa đủ để định danh tác phẩm, không tự điền hoàn cảnh cụ thể ngoài thông tin của đoạn trích." },
    { label: "Mạch 2 · Ký ức đối diện hiện tại", focus: "Các chi tiết quá khứ và hiện tại giúp soi chiếu những đổi thay trong quan hệ hoặc cảm xúc.", analysis: "Lập các mốc thời gian khi văn bản đan xen hồi tưởng, sau đó đối chiếu điều nhân vật nhớ với điều đang diễn ra trước mắt. Một chi tiết quen thuộc có thể cho thấy biến đổi trong quan hệ hoặc cảm xúc nếu được đặt đúng ngữ cảnh. Dựa vào lời nói, hành động và điểm nhìn để nhận diện chuyển biến tâm lí; không bổ sung tiểu sử nhân vật ngoài đoạn trích." },
    { label: "Mạch 3 · Ý nghĩa nhan đề và kết thúc", focus: "Sự trở về có thể mang ý nghĩa vật lí, tình cảm hoặc nhận thức tùy theo kết quả hành trình.", analysis: "Đối chiếu nhan đề với sự kiện mở đầu và kết thúc để xem cuộc trở về mang ý nghĩa địa lí, tình cảm hay nhận thức. Chỉ chọn cách diễn giải được nâng đỡ bởi hành động và chi tiết trong văn bản; nếu còn nhiều khả năng, trình bày chúng như những cách đọc thay vì kết luận tuyệt đối. Cần bổ sung xuất xứ SGK để xác định đúng tác phẩm." }
  ],
  "text-khuc-dong-que": [
    { label: "Mạch 1 · Hình ảnh làm trục liên kết", focus: "Một hình ảnh, không gian hoặc ký ức đồng quê tạo nên điểm quy tụ cho văn bản.", analysis: "Ghi lại những lần hình ảnh hoặc không gian ấy xuất hiện và xem sắc thái có biến đổi theo mạch kể không. Tách việc miêu tả cảnh vật khỏi cảm xúc người kể, rồi giải thích cách chi tiết nối các phần của văn bản. Chưa xác định được tác giả và văn bản gốc từ nhan đề, nên cần dùng đúng chi tiết trong bản SGK thay vì suy luận theo tên gọi." },
    { label: "Mạch 2 · Chi tiết và giọng điệu", focus: "Cách quan sát và lựa chọn từ ngữ gợi cảm nhận riêng về quê hương, đời sống thường ngày.", analysis: "Chọn một chi tiết cụ thể và phân tích cách nó được nhìn, kể hoặc nhắc lại. Giọng điệu có thể tạo cảm giác thân thuộc, hoài niệm hay xa cách, nhưng phải chỉ ra từ ngữ và vị trí của chi tiết làm căn cứ. Tránh đồng nhất người kể với tác giả hoặc tự gán trải nghiệm tiểu sử khi nguồn chưa xác nhận." },
    { label: "Mạch 3 · Dư âm về quê hương", focus: "Kết thúc kết nối nơi chốn quen thuộc với ký ức, bản sắc hoặc sự gắn bó của con người.", analysis: "Đọc câu hoặc hình ảnh kết thúc cùng những chi tiết đã xuất hiện trước đó để xem văn bản khép lại, mở rộng hay để ngỏ cảm xúc. Nêu ý nghĩa từ bằng chứng cụ thể và giới hạn khái quát theo đoạn trích. Một liên hệ cá nhân sẽ thuyết phục hơn nếu giải thích văn bản đã gợi liên hệ ấy bằng cách nào, thay vì chỉ dựa vào nhan đề." }
  ]
});

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

const poemPassageDetails = {
  "text-cam-hoai": [
    { excerpt: "Thế sự du du", closeReading: "Cụm từ chỉ thế sự mở rộng nỗi niềm từ đời riêng sang thời cuộc; câu hỏi tu từ không chờ một lời đáp mà bộc lộ cảm giác bối rối trước việc lớn còn dang dở. Không gian lịch sử mênh mang được đặt cạnh thân phận đang già đi, tạo điểm khởi đầu cho bi kịch. Cái tôi trữ tình không than thân đơn thuần mà tự ý thức về trách nhiệm của mình trước vận nước." },
    { excerpt: "vô cùng thiên địa", closeReading: "Hình ảnh trời đất vô cùng kéo nỗi buồn vượt khỏi cảm xúc cá nhân, còn tiếng ca gợi một cách tự nâng đỡ trước nghịch cảnh. Đọc câu này trong quan hệ với câu mở đầu: sự khoáng đạt không xóa được bế tắc, mà làm rõ khoảng cách giữa tầm vóc hoài bão và khả năng thực hiện. Âm hưởng vừa có chất ngâm vịnh cổ điển vừa phảng phất nỗi cô độc." },
    { excerpt: "thời lai", closeReading: "Câu thơ gợi những nhân vật từng làm nên sự nghiệp trong hoàn cảnh thuận lợi để đặt cạnh tình thế của người nói. Trọng tâm không phải phủ nhận tài năng, mà là nhận ra thời thế có thể mở hoặc khép con đường hành động. Cách nhìn ấy khiến lời thơ có chiều sâu lịch sử, song không biến thành sự đổ lỗi đơn giản: người nói vẫn đau vì biết mình còn khát vọng mà chưa gặp được cơ hội." },
    { excerpt: "vận khứ anh hùng", closeReading: "Câu thơ đặt khả năng lập công bên cạnh cảnh thất thế, tạo thế đối lập giữa điều con người muốn làm và hoàn cảnh không cho phép. Nhịp ý cân xứng làm giọng điệu thêm nén chặt; nỗi buồn không chỉ là tiếc danh vọng mà là đau vì việc nước chưa thành. Đây là bước chuyển từ chuyện thời vận nói chung sang lời tự bộc bạch trực tiếp của chủ thể trữ tình." },
    { excerpt: "trí chủ hữu hoài", closeReading: "Ý niệm phò giúp và chống đỡ giang sơn cho thấy khát vọng chính trị hướng đến cộng đồng, không thu hẹp thành công danh riêng. Hình ảnh mang sắc thái kì vĩ làm hoài bão vượt lên quy mô đời thường. Câu thơ cũng chuẩn bị cho sự đối lập với con đường hành động đang bế tắc, khiến lí tưởng càng lớn thì cảm giác bất lực càng đau." },
    { excerpt: "tẩy binh vô lộ", closeReading: "Hình ảnh rửa sạch binh đao gợi ước muốn chấm dứt chiến tranh và trả lại bình yên. Tuy nhiên, ý thơ đồng thời nhận ra mong ước ấy chưa tìm được lối đi trong thực tại. Hai câu luận vì vậy vừa hào sảng ở tầm vóc lí tưởng, vừa xót xa trước khoảng cách giữa lí tưởng và khả năng; chính nghịch thế đó tạo nên âm hưởng bi tráng." },
    { excerpt: "quốc thù vị báo", closeReading: "Việc nước chưa xong được đặt cạnh dấu hiệu tuổi già, gọi lại bi kịch đã mở đầu. Đây không đơn thuần là than thở về tuổi tác; đó là nỗi day dứt của người tự xem mình còn mắc nợ non sông. Sự trở lại của ý thơ mở đầu tạo kết cấu vòng tròn, khiến mối lo trách nhiệm càng lúc càng khắc sâu." },
    { excerpt: "Long Tuyền đới nguyệt", closeReading: "Thanh kiếm gợi ý chí chiến đấu vẫn được nuôi dưỡng, còn ánh trăng mở rộng cảnh đêm thành không gian suy tưởng. Động tác mài kiếm lặp lại hàm ý thời gian đã trôi qua nhiều lần mà việc lớn chưa xong; bởi vậy hình ảnh vừa có vẻ đẹp cổ điển vừa phảng phất bất lực. Kết thúc không khép lại bằng sự buông xuôi: ý chí còn đó, nhưng được bao phủ bởi nỗi tiếc nuối sâu nặng." }
  ],
  "text-tay-tien": [
    { excerpt: "Sông Mã xa rồi", closeReading: "Tiếng gọi hướng về dòng sông lập tức tạo điểm tựa cho nỗi nhớ, còn điệp từ “nhớ” khiến cảm xúc lan từ địa danh sang núi rừng và đồng đội. Từ láy ở câu thơ tiếp theo diễn tả một nỗi nhớ không có hình dáng cố định: vừa mênh mang vừa chông chênh. Cách xưng hô thân mật biến miền đất thành một phần đời sống tinh thần của người lính. Khi đọc đoạn mở đầu, hãy chú ý âm hưởng ngân dài và sự chuyển từ xa cách hiện tại về gần gũi của hồi ức." },
    { excerpt: "hoa đong đưa", closeReading: "Mạch thơ chuyển khỏi dốc núi và sương lạnh để bước vào đêm liên hoan, rồi mở ra cảnh sông nước mềm mại. Động từ gợi chuyển động chậm làm cảnh vật như trôi theo nhịp chèo, trong khi ánh sáng, âm thanh và đường nét tạo sắc thái huyền ảo. Sự lãng mạn ở đây không xóa gian khổ của hành quân; nó cho thấy ký ức người lính còn lưu giữ vẻ đẹp văn hóa và hơi ấm tình quân dân." },
    { excerpt: "đoàn binh không mọc tóc", closeReading: "Cách nói trực diện đưa dấu vết bệnh tật, thiếu thốn vào chân dung người lính thay vì che giấu hiện thực. Ngay sau đó, tư thế và khí phách được nâng lên bằng những hình ảnh mạnh, tạo tương phản giữa thân thể chịu tổn thương với tâm hồn hào hoa, giàu lí tưởng. Vì thế, chất lãng mạn của đoạn thơ không phải tô hồng chiến tranh: nó giúp người đọc nhìn thấy cách con người giữ phẩm giá và ý chí giữa mất mát." },
    { excerpt: "không hẹn ước", closeReading: "Giọng thơ lắng xuống trong cảm thức ra đi không biết ngày trở lại. Những lời thề và hình ảnh gắn với miền Tây nối sự hi sinh riêng của từng người với tình cảm bền chặt dành cho đồng đội, đơn vị và nơi đã đi qua. Âm hưởng sử thi không làm mất nỗi riêng tư; trái lại, nỗi nhớ cá nhân khiến lời kết có sức nặng. Khi khép bài, quá khứ chiến trận được lưu giữ như một lời hẹn thủy chung." }
  ],
  "text-dan-ghi-ta-lorca": [
    { excerpt: "bọt nước", closeReading: "Hình ảnh làm âm thanh trở thành một vật thể có thể nhìn thấy, vừa lung linh vừa mong manh. Cách chuyển đổi cảm giác này khiến tiếng đàn hiện ra như dấu hiệu của cái đẹp đang tồn tại nhưng luôn có nguy cơ tan vỡ. Khổ thơ không kể tiểu sử theo trình tự; nó đặt Lor-ca vào trường liên tưởng văn hóa và âm nhạc để người đọc cảm nhận khí chất nghệ sĩ trước khi hiểu đầy đủ sự kiện." },
    { excerpt: "áo choàng đỏ gắt", closeReading: "Màu sắc và trang phục gợi không gian văn hóa Tây Ban Nha, đồng thời đẩy sắc thái câu thơ về phía dữ dội, bất an. Khi kết hợp với hình ảnh tiếng đàn và người nghệ sĩ, nó mở ra liên tưởng về một cuộc đối đầu giữa khát vọng tự do với bạo lực. Không nên biến từng biểu tượng thành một nghĩa duy nhất; hãy kiểm tra chúng trong mạch chuyển động và nhạc tính của toàn bài." },
    { excerpt: "áo bào", closeReading: "Hình ảnh nghi lễ hóa cái chết thành một cuộc tiễn biệt giàu tính biểu tượng. Vẻ trang trọng của “áo bào” tương phản với sự tàn khốc của cái chết, khiến nỗi đau vừa có tính riêng tư vừa mang tầm vóc tưởng niệm. Nhịp thơ và những hình ảnh phân mảnh không thuật lại bạo lực theo lối tả thực, mà tái hiện chấn động tinh thần của người chứng kiến và người ở lại." },
    { excerpt: "li-la li-la", closeReading: "Âm thanh mô phỏng tiếng đàn khép bài thơ bằng dư âm hơn là một kết luận đóng kín. Sau bi kịch, sự trở lại của nhạc điệu khiến nghệ thuật được cảm nhận như một dòng sáng tạo có thể tiếp tục vượt qua cái chết của cá nhân. Kết thúc vừa tưởng niệm Lor-ca vừa gợi vấn đề về di sản: người đi sau cần tiếp nhận cảm hứng nhưng cũng phải tìm tiếng nói độc lập." }
  ],
  "text-bai-tho-so-28": [
    { excerpt: "mắt em băn khoăn", closeReading: "Ánh nhìn là điểm khởi đầu của cuộc đối thoại: người được yêu muốn hiểu một nội tâm mà mình chưa thể nhìn thấu. Từ nét băn khoăn, bài thơ tạo giọng điệu dịu dàng nhưng có chiều sâu tự vấn. Câu hỏi về việc hiểu nhau không chỉ là lời tình tự; nó đặt ra giới hạn của tri thức giữa hai cá thể, ngay cả khi họ muốn gần gũi." },
    { excerpt: "trái tim em", closeReading: "Trái tim tượng trưng cho phần sâu kín không thể trao đi như một món đồ thuộc quyền sở hữu của người khác. Cách phân biệt giữa điều có thể bày tỏ và bản thể riêng giúp bài thơ nói về tự do cá nhân trong tình yêu. Sự bí ẩn ấy không phải dấu hiệu của lạnh nhạt; nó nhắc người yêu rằng gần gũi cần đi cùng tôn trọng ranh giới." },
    { excerpt: "nụ cười em", closeReading: "Nụ cười là biểu hiện bên ngoài mà người khác có thể nhìn thấy, nhưng không bảo đảm rằng họ đã hiểu hết cảm xúc phía sau. Cặp đối chiếu giữa dấu hiệu hữu hình và nội tâm không thể đo đếm mở rộng suy tư từ một quan hệ riêng sang bản chất phức tạp của con người. Vì vậy, tình yêu trong bài thơ đòi hỏi lắng nghe và kiên nhẫn hơn là kết luận thay cho người mình yêu." },
    { excerpt: "giọt lệ em", closeReading: "Giọt lệ gợi trạng thái mong manh mà người nói có thể nhận ra nhưng không thể sống thay trải nghiệm của người kia. Hình ảnh làm rõ giới hạn của sự đồng cảm: yêu thương không đồng nghĩa với việc xóa bỏ khác biệt giữa hai con người. Dư âm suy tưởng hướng tình yêu về chia sẻ chân thành, đồng thời giữ lại khoảng tự do để mỗi người tiếp tục là chính mình." }
  ],
  "text-mo": [
    { excerpt: "chim mỏi về rừng", closeReading: "Cánh chim có hướng trở về và trạng thái mỏi, vì thế cảnh chiều hiện lên bằng cả chuyển động lẫn cảm giác thời gian đang khép lại. Cái nhìn không lạnh lùng ghi chép thiên nhiên mà nhận ra sự sống trong dấu hiệu nhỏ bé ấy. Đặt hình ảnh này bên hoàn cảnh người tù đang chuyển lao, người đọc cảm nhận sự cộng hưởng kín đáo giữa cảnh vật và thân phận, nhưng không nên đồng nhất hoàn toàn hai hình ảnh." },
    { excerpt: "chòm mây trôi nhẹ", closeReading: "Nét mây lẻ loi mở rộng tầm nhìn từ mặt đất lên bầu trời, trong khi nhịp trôi chậm kéo dài khoảnh khắc hoàng hôn. Sự khoan thai của cảnh tương phản với cuộc đi đường nhọc nhằn, gợi cảm giác tự do mà con người chưa có được về thể xác. Bút pháp cổ điển chọn vài nét chấm phá nhưng vẫn tạo ra không gian sâu, thoáng và có nhịp điệu." },
    { excerpt: "cô em xóm núi", closeReading: "Điểm nhìn chuyển từ thiên nhiên vắng rộng sang một con người đang lao động. Hình ảnh thiếu nữ gắn với động tác xay ngô cụ thể, khiến cảnh không chỉ đẹp mà còn có nhịp sống thường ngày. Cách gọi mộc mạc giữ khoảng cách quan sát vừa phải, đồng thời bộc lộ sự chú ý và trân trọng đối với con người lao động. Đây là bước ngoặt đưa bài thơ từ lạnh vắng sang ấm áp." },
    { excerpt: "lò than đã rực hồng", closeReading: "Ánh lửa làm đổi sắc độ toàn bài: từ chiều muộn, mây trôi và không gian xa đến hơi ấm gần gũi của căn nhà. Chữ chỉ trạng thái đỏ rực vừa tả ánh sáng vừa tạo cảm giác sự sống đang lan tỏa. Kết thúc hướng về ánh sáng nhưng không phủ nhận cảnh tù đày hay nhọc nhằn; nó cho thấy cái nhìn vẫn tìm thấy con người, lao động và hi vọng trong hoàn cảnh khắc nghiệt." }
  ],
  "text-nguyen-tieu": [
    { excerpt: "nguyệt chính viên", closeReading: "Vầng trăng tròn xác định thời điểm đêm rằm và mở bài bằng một hình ảnh sáng rõ, cân xứng. Trong nguyên tác, nhịp câu ngắn gọn tạo âm hưởng trang trọng; bản dịch có thể thay đổi cách cảm nhận độ rộng hoặc độ sáng của cảnh. Khi phân tích, hãy nêu rõ bản nào đang dùng và tránh xem các bản dịch khác nhau như thể chúng có cùng một lựa chọn từ ngữ." },
    { excerpt: "xuân giang, xuân thủy", closeReading: "Sự lặp lại của từ chỉ mùa xuân kết nối sông, nước và trời, khiến không gian như mở rộng theo cả chiều ngang lẫn chiều cao. Cảnh vật không được miêu tả thành nhiều mảnh rời mà hòa vào một chỉnh thể giàu ánh sáng và sức sống. Bút pháp cô đọng gợi phong vị cổ điển, còn cảm giác khoáng đạt tạo nền cho tư thế ung dung của những con người đang làm việc." },
    { excerpt: "đàm quân sự", closeReading: "Việc bàn bạc công việc kháng chiến xuất hiện ngay giữa cảnh đêm xuân, đưa hành động thực tế vào bức tranh trữ tình. Hai phương diện không triệt tiêu nhau: thiên nhiên vẫn được cảm nhận tinh tế, còn trách nhiệm vẫn giữ vị trí trung tâm trong đời sống người chiến sĩ. Câu thơ ngắn gọn tạo một chuyển mạch tự nhiên từ thưởng ngoạn sang công việc." },
    { excerpt: "nguyệt mãn thuyền", closeReading: "Hình ảnh ánh trăng đầy thuyền kết thúc bài bằng một liên tưởng vừa cụ thể vừa giàu dư âm. Con thuyền trở về sau công việc, còn trăng như theo cùng, khiến hành trình thực và cảnh giới thơ hòa vào nhau. Kết cấu quay từ trăng đầu bài đến trăng cuối bài tạo cảm giác viên mãn; vẻ đẹp ấy gắn với phong thái bình tĩnh, lạc quan chứ không tách khỏi bối cảnh kháng chiến." }
  ],
  "text-vong-nguyet": [
    { excerpt: "không rượu cũng không hoa", closeReading: "Câu mở đầu liệt kê những điều thường gắn với cuộc thưởng nguyệt nhưng đều vắng mặt, đặt việc ngắm trăng trong hoàn cảnh thiếu thốn của nhà tù. Giọng thơ bình thản, không sa vào kể khổ, khiến cái thiếu trở thành nền để nhận ra sức chủ động của tâm hồn. Cách mở đầu giản dị cũng tạo thế tương phản cho sự giao cảm đẹp đẽ ở hai câu sau." },
    { excerpt: "khó hững hờ", closeReading: "Cảnh đẹp khiến người tù không thể dửng dưng, cho thấy nhu cầu hướng tới cái đẹp vẫn bền bỉ trong hoàn cảnh khắc nghiệt. Cách nói tiết chế không phủ nhận nhà tù mà khẳng định năng lực tinh thần vượt khỏi sự giam hãm. Câu thơ vì vậy là cầu nối: từ thiếu thốn vật chất ở đầu bài sang hành động tìm đến thiên nhiên." },
    { excerpt: "người ngắm trăng", closeReading: "Ánh nhìn của con người hướng qua song cửa, tạo chuyển động từ không gian chật hẹp ra bầu trời tự do. Khung cửa vừa nhắc đến giới hạn thể xác vừa trở thành điểm gặp giữa người và trăng. Sự sắp đặt của câu thơ khiến chủ thể hiện lên chủ động: dù không thể thay đổi hoàn cảnh, người vẫn có thể lựa chọn cách mình đáp lại thế giới." },
    { excerpt: "trăng nhòm khe cửa", closeReading: "Ở câu kết, trăng được nhân hóa và chủ động nhìn lại con người, biến cuộc ngắm nhìn một chiều thành cuộc giao cảm hai chiều. Cấu trúc đối ứng giữa người và trăng làm thiên nhiên như có tình cảm, còn nhà thơ được đón nhận như một người bạn. Song sắt vẫn hiện diện nhưng không còn là ranh giới tuyệt đối; bài thơ khép lại bằng tự do tinh thần và sự đồng điệu." }
  ],
  "text-canh-khuya": [
    { excerpt: "tiếng suối trong", closeReading: "So sánh tiếng suối với tiếng hát đưa âm thanh thiên nhiên đến gần đời sống con người, khiến cảnh rừng có nhạc tính và sắc thái thân thuộc. Từ gợi độ trong vừa miêu tả âm sắc vừa bộc lộ tâm thế lắng nghe chăm chú. Câu thơ mở ra không gian đêm bằng thính giác trước khi ánh trăng xuất hiện, giúp bức tranh có nhiều lớp cảm giác." },
    { excerpt: "trăng lồng cổ thụ", closeReading: "Điệp cấu trúc “lồng” làm ánh trăng, tán cây và bóng hoa đan vào nhau, tạo chiều sâu thay vì những hình ảnh đứng riêng. Ánh sáng và bóng tối cùng tham gia kiến tạo vẻ đẹp, nên cảnh vừa tĩnh vừa có chuyển động nhẹ. Cách tổ chức hình ảnh cho thấy cái nhìn tinh tế, biết phát hiện sự hòa hợp trong thiên nhiên." },
    { excerpt: "người chưa ngủ", closeReading: "Con người xuất hiện sau hai câu tả cảnh, chuyển trọng tâm từ vẻ đẹp bên ngoài sang trạng thái nội tâm. Cụm từ chỉ sự thao thức trở thành bản lề và được nhắc lại ở câu cuối, khiến người đọc chờ lời giải thích. Không nên vội quy việc thức chỉ cho một nguyên nhân; trình tự bài thơ cho phép cảm nhận cả sự rung động trước cảnh đẹp lẫn nỗi niềm trách nhiệm." },
    { excerpt: "lo nỗi nước nhà", closeReading: "Lời kết làm rõ một nguyên nhân sâu xa của sự thao thức: mối lo dành cho đất nước. Ý thơ nối tình yêu thiên nhiên với trách nhiệm công dân, không đặt chúng thành hai lựa chọn loại trừ nhau. Việc lặp lại trạng thái chưa ngủ tạo kết cấu khép vòng và khắc họa chủ thể vừa là thi sĩ nhạy cảm trước cảnh đêm, vừa là người lãnh đạo luôn nghĩ đến vận mệnh chung." }
  ],
  "text-voi-vang": [
    { excerpt: "Tôi muốn buộc gió lại", closeReading: "Điệp cấu trúc “tôi muốn” đặt cái tôi cá nhân ở vị trí chủ động phát ngôn, còn các động từ mạnh diễn tả ước vọng gần như không tưởng. Chủ thể không thật sự tin có thể đảo ngược tự nhiên; cường điệu cho thấy tình yêu tha thiết với những gì đang sống và nỗi sợ vẻ đẹp phai tàn. Hai ước muốn mở đầu vì thế vừa táo bạo vừa báo trước mâu thuẫn giữa khát vọng níu giữ và quy luật thời gian." },
    { excerpt: "của ong bướm này đây", closeReading: "Cách chỉ trỏ lặp lại đưa mùa xuân từ khái niệm xa xôi thành một thế giới đang hiện diện trước mắt. Hình ảnh, âm thanh và màu sắc được xếp nối như một cuộc khám phá bằng nhiều giác quan; thiên nhiên mang dáng vẻ trẻ trung, tình tứ và tràn sinh lực. Nhịp liệt kê nhanh tạo cảm giác cái đẹp phong phú đến mức người nói muốn gọi tên, giữ lấy từng phần." },
    { excerpt: "Tháng giêng ngon", closeReading: "Ẩn dụ chuyển đổi cảm giác khiến thời gian có thể được nếm, đưa vẻ đẹp mùa xuân gần với thân thể và tình yêu. Cách cảm nhận táo bạo đặt kinh nghiệm cá nhân vào trung tâm bài thơ, khác với lối nhìn thiên nhiên chỉ như một quy luật tuần hoàn. Nhưng chính khoảnh khắc đẹp nhất cũng đánh thức lo âu: nếu tuổi trẻ hữu hạn, tận hưởng cần đi cùng ý thức về mất mát." },
    { excerpt: "Ta muốn ôm", closeReading: "Đại từ chuyển từ cái tôi riêng sang một chủ thể có sức cuốn theo người đọc; chuỗi động từ mạnh đẩy cảm xúc từ ngắm nhìn sang mong muốn ôm trọn sự sống. Nhịp thơ dồn dập mô phỏng cảm giác thời gian không chờ đợi. Khát vọng ấy không chỉ là hưởng thụ tức thời: nó là lời mời sống tỉnh thức, biết trân trọng vẻ đẹp mong manh và hiện tại đang có." }
  ]
};

for (const [lessonId, details] of Object.entries(poemPassageDetails)) {
  const segments = passageAnalyses[lessonId];
  if (!segments || segments.length !== details.length) {
    throw new Error(`Passage analysis count does not match for ${lessonId}`);
  }
  segments.forEach((segment, index) => {
    segment.excerpt = details[index].excerpt;
    segment.closeReading = details[index].closeReading;
  });
}

const analysisReferences = {
  "text-cam-hoai": {
    note: "Đối chiếu thể thơ, bố cục bốn cặp câu và sắc thái bi tráng với tài liệu tham khảo; các chi tiết tiểu sử có khác biệt giữa nguồn nên phần phân tích không dựa vào mốc tiểu sử chưa kiểm chứng.",
    sources: [
      { label: "Lời Giải Hay · Cảm hoài", url: "https://loigiaihay.com/cam-hoai-dang-dung-a167390.html" },
      { label: "Thi Viện · văn bản và giới thiệu", url: "https://www.thivien.net/%C4%90%E1%BA%B7ng-Dung/C%E1%BA%A3m-ho%C3%A0i-Thu%E1%BA%ADt-ho%C3%A0i/poem-RFpndssQwGhRpDQ55TfQQw" }
    ]
  },
  "text-tay-tien": {
    note: "Nguồn tham khảo là bài viết giáo dục, không phải công trình nghiên cứu học thuật. Phần đọc gần được viết lại theo mạch bốn đoạn, không thay thế văn bản và chú giải trong sách giáo khoa.",
    sources: [
      { label: "Thích Văn Học · phân tích Tây Tiến", url: "https://thichvanhoc.com.vn/phan-tich-bai-tho-tay-tien-quang-dung/" }
    ]
  },
  "text-dan-ghi-ta-lorca": {
    note: "Tài liệu tham khảo gợi bố cục ba phần và các lớp hình tượng; các biểu tượng trong bài có thể có nhiều cách đọc, nên cần giải thích trong mạch văn bản thay vì gán nghĩa cố định.",
    sources: [
      { label: "Lời Giải Hay · Đàn ghi-ta của Lor-ca", url: "https://loigiaihay.com/dan-ghita-cua-lorca-thanh-thao-c360a51398.html" }
    ]
  },
  "text-bai-tho-so-28": {
    note: "Nguồn tham khảo xác nhận mạch suy tưởng về mong muốn thấu hiểu, dâng hiến và chiều sâu không thể đo hết của tình yêu. Bản dịch trong SGK có thể khác lựa chọn từ ngữ ở các bản dịch khác.",
    sources: [
      { label: "Lời Giải Hay · Bài thơ số 28", url: "https://loigiaihay.com/bai-tho-so-28-rta-go-c359a51476.html" }
    ]
  },
  "text-nguyen-tieu": {
    note: "Đối chiếu nguyên tác, phiên âm và nhiều bản dịch trước khi bình giảng từ ngữ. Nội dung phân tích tách ý thơ khỏi lựa chọn riêng của một bản dịch.",
    sources: [
      { label: "Thi Viện · Nguyên tiêu", url: "https://www.thivien.net/H%E1%BB%93-Ch%C3%AD-Minh/Nguy%C3%AAn-ti%C3%AAu/poem-9nGoTWzYHnMiK0mDAEFGOA" }
    ]
  },
  "text-voi-vang": {
    note: "Nguồn tham khảo gợi bố cục ba chặng cảm xúc; phần phân tích diễn giải lại bằng lời riêng và chỉ trích những cụm ngắn cần thiết.",
    sources: [
      { label: "Lời Giải Hay · Vội vàng", url: "https://loigiaihay.com/voi-vang-xuan-dieu-c359a51613.html" }
    ]
  },
  "text-mo": {
    note: "Chưa xác minh độc lập được đúng bản dịch và cách chia văn bản của SGK. Hãy đối chiếu bản dịch Nam Trân trong sách trước khi nhận xét sắc thái từ ngữ."
  },
  "text-vong-nguyet": {
    note: "Phần đọc gần dựa trên bản dịch Nam Trân đang lưu trên trang; cần đối chiếu với bản in SGK nếu sách sử dụng văn bản hoặc chú giải khác."
  },
  "text-canh-khuya": {
    note: "Phần đọc gần dựa trên văn bản hiện lưu trên trang. Đối chiếu dấu câu và chú giải của sách giáo khoa trước khi trích dẫn."
  },
  "text-xuan-toc-do": {
    note: "Chưa xác minh được nguồn chuyên biệt cho đúng đoạn trích “Xuân Tóc Đỏ cứu quốc”. Hãy kiểm tra vị trí chương, lời kể và phần trích trong SGK; các ý dưới đây là khung đọc tình huống trào phúng, không thay thế việc đọc đoạn gốc."
  },
  "text-noi-buon-chien-tranh": {
    note: "Các mạch ký ức, hậu chấn thương và hành động viết là định hướng đọc tiểu thuyết, chưa được đối chiếu với đúng đoạn trích của SGK trong lần tra cứu này. Hãy xác định điểm nhìn và dấu mốc thời gian ngay trên văn bản được học."
  },
  "text-tren-xuong-cuu-nan": {
    note: "Chưa xác minh chắc chắn tác giả, bản dịch và ranh giới đoạn trích chỉ từ nhan đề. Cần kiểm tra chú thích xuất xứ của SGK trước khi gán văn bản cho một tác phẩm hoặc tác giả."
  },
  "text-hai-khau-linh-tu": {
    note: "Chưa xác minh được bản văn, tác giả và xuất xứ chính xác của đoạn trích trên nguồn chuyên biệt. Các ý hiện có chỉ là phương pháp đọc truyện truyền kì; cần căn cứ chú thích SGK và sự kiện cụ thể."
  },
  "text-muoi-cua-rung": {
    note: "Chưa xác minh được nguồn phê bình chuyên biệt cho đúng văn bản SGK. Hãy kiểm tra các hành động và kết thúc trong đoạn được học trước khi dùng những gợi ý về thay đổi nhận thức hoặc biểu tượng thiên nhiên."
  },
  "text-ben-tran-gian": {
    note: "Chưa xác định được tác giả, tác phẩm gốc và đoạn trích đáng tin cậy từ nhan đề. Phần hiện tại chỉ là câu hỏi định hướng đọc, không khẳng định cốt truyện hay chủ đề."
  },
  "text-tro-lo-va-ren-phan-boi-chau": {
    note: "Chưa đối chiếu được chính xác bản trích và bản dịch của SGK. Hãy kiểm tra người kể, đoạn kết và lời thoại trong văn bản đang học trước khi mở rộng nhận xét."
  },
  "text-tro-ve": {
    note: "Nhan đề “Trở về” chưa đủ để xác định tác giả hoặc văn bản gốc. Các gợi ý chỉ có thể áp dụng sau khi đối chiếu nhân vật, tình huống và xuất xứ trong SGK."
  },
  "text-khuc-dong-que": {
    note: "Chưa xác minh được tác giả, bản in và đoạn trích chính xác. Không suy ra chủ đề chỉ từ nhan đề; hãy đối chiếu chú thích xuất xứ và chi tiết của văn bản."
  }
};

const completePoems = {
  "text-cam-hoai": {
    text: "Thế sự du du nại lão hà,\nVô cùng thiên địa nhập hàm ca.\nThời lai đồ điếu thành công dị,\nVận khứ anh hùng ẩm hận đa.\nTrí chủ hữu hoài phù địa trục,\nTẩy binh vô lộ vãn thiên hà.\nQuốc thù vị báo đầu tiên bạch,\nKỷ độ Long Tuyền đới nguyệt ma.",
    source: "Đặng Dung, Cảm hoài · phiên âm Hán Việt"
  },
  "text-mo": {
    text: "Chim mỏi về rừng tìm chốn ngủ,\nChòm mây trôi nhẹ giữa tầng không;\nCô em xóm núi xay ngô tối,\nXay hết, lò than đã rực hồng.",
    source: "Hồ Chí Minh, Mộ (Chiều tối) · bản dịch thơ Nam Trân"
  },
  "text-nguyen-tieu": {
    text: "今夜元宵月正圓，\n春江春水接春天。\n煙波深處談軍事，\n夜半歸來月滿船。",
    translation: "Đêm nay rằm tháng giêng, trăng tròn sáng,\nSông xuân, nước xuân nối tiếp trời xuân.\nNơi khói sóng sâu, bàn việc quân,\nNửa đêm trở lại, thuyền đầy ánh trăng.",
    source: "Hồ Chí Minh, Nguyên tiêu · nguyên tác chữ Hán; bản dịch tham khảo biên soạn cho trang"
  },
  "text-vong-nguyet": {
    text: "Trong tù không rượu cũng không hoa,\nCảnh đẹp đêm nay, khó hững hờ;\nNgười ngắm trăng soi ngoài cửa sổ,\nTrăng nhòm khe cửa ngắm nhà thơ.",
    source: "Hồ Chí Minh, Vọng nguyệt (Ngắm trăng) · bản dịch thơ Nam Trân"
  },
  "text-canh-khuya": {
    text: "Tiếng suối trong như tiếng hát xa,\nTrăng lồng cổ thụ bóng lồng hoa.\nCảnh khuya như vẽ người chưa ngủ,\nChưa ngủ vì lo nỗi nước nhà.",
    source: "Hồ Chí Minh, Cảnh khuya"
  }
};

const copyrightedPoemNotes = {
  "text-tay-tien": "Bài thơ còn bản quyền. Trang chỉ hiển thị trích dẫn ngắn; xem toàn văn trong sách giáo khoa hoặc nguồn được cấp phép.",
  "text-dan-ghi-ta-lorca": "Bài thơ còn bản quyền. Trang chỉ hiển thị trích dẫn ngắn; xem toàn văn trong sách giáo khoa hoặc nguồn được cấp phép.",
  "text-bai-tho-so-28": "Bản dịch tiếng Việt có thể còn bản quyền. Trang chỉ hiển thị trích dẫn ngắn; xem toàn văn trong sách giáo khoa hoặc nguồn được cấp phép.",
  "text-voi-vang": "Bài thơ còn bản quyền. Trang chỉ hiển thị trích dẫn ngắn; xem toàn văn trong sách giáo khoa hoặc nguồn được cấp phép."
};

const fullTextSources = {
  "text-tren-xuong-cuu-nan": {
    url: "https://loigiaihay.com/van-ban-tren-xuong-cuu-nan-yann-martel-a166799.html",
    label: "Đọc trích đoạn trên Lời Giải Hay"
  },
  "text-cam-hoai": {
    url: "https://vi.wikisource.org/wiki/C%E1%BA%A3m_ho%C3%A0i_(%C4%90%E1%BA%B7ng_Dung)",
    label: "Đọc bài thơ trên Wikisource"
  },
  "text-tay-tien": {
    url: "https://www.thivien.net/Quang-D%C5%A9ng/T%C3%A2y-Ti%E1%BA%BFn/poem-xTFdqZUSfE3riX2yNfcavA",
    label: "Đọc bài thơ trên Thi Viện"
  },
  "text-hai-khau-linh-tu": {
    url: "https://loigiaihay.com/soan-bai-hai-khau-linh-tu-sgk-ngu-van-12-tap-1-ket-noi-tri-thuc-a159091.html",
    label: "Đọc trích đoạn trên Lời Giải Hay"
  },
  "text-ben-tran-gian": {
    url: "https://loigiaihay.com/van-ban-ben-tran-gian-luu-son-minh-a166812.html",
    label: "Đọc trích đoạn trên Lời Giải Hay"
  },
  "text-tuyen-ngon-doc-lap": {
    url: "https://vi.wikisource.org/wiki/Tuy%C3%AAn_ng%C3%B4n_%C4%90%E1%BB%99c_l%E1%BA%ADp_Vi%E1%BB%87t_Nam",
    label: "Đọc văn bản trên Wikisource"
  },
  "text-mo": {
    url: "https://www.thivien.net/H%E1%BB%93-Ch%C3%AD-Minh/M%E1%BB%99/poem-H8jB1oJC4mUIKcExmWHoAw",
    label: "Đọc bài thơ trên Thi Viện"
  },
  "text-nguyen-tieu": {
    url: "https://www.thivien.net/H%E1%BB%93-Ch%C3%AD-Minh/Nguy%C3%AAn-ti%C3%AAu/poem-9nGoTWzYHnMiK0mDAEFGOA",
    label: "Đọc bài thơ trên Thi Viện"
  },
  "text-vong-nguyet": {
    url: "https://www.thivien.net/H%E1%BB%93-Ch%C3%AD-Minh/V%E1%BB%8Dng-nguy%E1%BB%87t/poem-5rhhpzHYKx4bI46F3xhIQA",
    label: "Đọc bài thơ trên Thi Viện"
  },
  "text-canh-khuya": {
    url: "https://www.thivien.net/H%E1%BB%93-Ch%C3%AD-Minh/C%E1%BA%A3nh-khuya/poem-B5-sSkpPOQF-1juwlpUd4g",
    label: "Đọc bài thơ trên Thi Viện"
  },
  "text-nghe-thuat-bam-thit-ga": {
    url: "https://vi.wikisource.org/wiki/Vi%E1%BB%87c_l%C3%A0ng/Ngh%E1%BB%87_thu%E1%BA%ADt_b%C4%83m_th%E1%BB%8Bt_g%C3%A0",
    label: "Đọc văn bản trên Wikisource"
  },
  "text-voi-vang": {
    url: "https://www.thivien.net/Xu%C3%A2n-Di%E1%BB%87u/V%E1%BB%99i-v%C3%A0ng/poem-IyS6PGZk72z5lfRoUlCUtg",
    label: "Đọc bài thơ trên Thi Viện"
  }
};

const authorPortraits = {
  "Vũ Trọng Phụng": {
    role: "Nhà văn, nhà báo",
    wikipedia: "https://vi.wikipedia.org/wiki/V%C5%A9_Tr%E1%BB%8Dng_Ph%E1%BB%A5ng",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Vu_Trong_Phung.jpg"
  },
  "Bảo Ninh": {
    role: "Nhà văn",
    wikipedia: "https://vi.wikipedia.org/wiki/B%E1%BA%A3o_Ninh",
    image: null
  },
  "Đặng Dung": {
    role: "Tác giả thơ trung đại",
    wikipedia: "https://vi.wikipedia.org/wiki/%C4%90%E1%BA%B7ng_Dung",
    image: null
  },
  "Quang Dũng": {
    role: "Nhà thơ",
    wikipedia: "https://vi.wikipedia.org/wiki/Quang_D%C5%A9ng_(nh%C3%A0_th%C6%A1)",
    image: "https://upload.wikimedia.org/wikipedia/vi/thumb/4/42/Quangdung1.jpg/330px-Quangdung1.jpg"
  },
  "Thanh Thảo": {
    role: "Nhà thơ",
    wikipedia: "https://vi.wikipedia.org/wiki/Thanh_Th%E1%BA%A3o_(nh%C3%A0_th%C6%A1)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Poet_Thanh_Thao.JPG/330px-Poet_Thanh_Thao.JPG"
  },
  "Rabindranath Tagore": {
    role: "Nhà thơ, nhà văn Ấn Độ",
    wikipedia: "https://vi.wikipedia.org/wiki/Rabindranath_Tagore",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Rabindranath_Tagore_unknown_location.jpg/330px-Rabindranath_Tagore_unknown_location.jpg"
  },
  "Trần Đình Hượu": {
    role: "Nhà nghiên cứu văn học",
    wikipedia: "https://vi.wikipedia.org/wiki/Tr%E1%BA%A7n_%C4%90%C3%ACnh_H%C6%B0%E1%BB%9Du",
    image: null
  },
  "Nguyễn Đình Thi": {
    role: "Nhà văn, nhà thơ, nhạc sĩ",
    wikipedia: "https://vi.wikipedia.org/wiki/Nguy%E1%BB%85n_%C4%90%C3%ACnh_Thi",
    image: "https://upload.wikimedia.org/wikipedia/vi/a/ae/Nguyen_Dinh_Thi.jpg"
  },
  "Nguyễn Huy Thiệp": {
    role: "Nhà văn",
    wikipedia: "https://vi.wikipedia.org/wiki/Nguy%E1%BB%85n_Huy_Thi%E1%BB%87p",
    image: "https://upload.wikimedia.org/wikipedia/vi/1/15/Nh%C3%A0_v%C4%83n_Nguy%E1%BB%85n_Huy_Thi%E1%BB%87p.jpg"
  },
  "Hồ Chí Minh": {
    role: "Nhà cách mạng, nhà văn, nhà thơ",
    wikipedia: "https://vi.wikipedia.org/wiki/H%E1%BB%93_Ch%C3%AD_Minh",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Ho_Chi_Minh_-_1946_Portrait.jpg/330px-Ho_Chi_Minh_-_1946_Portrait.jpg"
  },
  "Xuân Diệu": {
    role: "Nhà thơ",
    wikipedia: "https://vi.wikipedia.org/wiki/Xu%C3%A2n_Di%E1%BB%87u",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Xuandieupoet.jpg"
  },
  "Lưu Quang Vũ": {
    role: "Nhà soạn kịch, nhà thơ",
    wikipedia: "https://vi.wikipedia.org/wiki/L%C6%B0u_Quang_V%C5%A9",
    image: "https://upload.wikimedia.org/wikipedia/vi/9/9c/Luu_Quang_Vu.jpg"
  }
};

const lessonAuthorOverrides = {
  "tieu-thuyet": ["Vũ Trọng Phụng", "Bảo Ninh"],
  "the-gioi-tho": ["Đặng Dung", "Quang Dũng", "Thanh Thảo"],
  "lap-luan": ["Trần Đình Hượu", "Nguyễn Đình Thi"],
  "ki-ao": ["Nguyễn Huy Thiệp"]
};

function getLessonAuthors(lesson) {
  const authorNames = lessonAuthorOverrides[lesson.id] ?? Object.keys(authorPortraits).filter((name) => {
    return lesson.author.includes(name) || (name === "Hồ Chí Minh" && lesson.author.includes("Nguyễn Ái Quốc"));
  });
  return authorNames.map((name) => ({ name, ...authorPortraits[name] }));
}

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
const surpriseDialog = document.querySelector("#surprise-dialog");
const surpriseVideoFrame = document.querySelector("#surprise-video-frame");
const surpriseReopenButton = document.querySelector("[data-open-surprise]");
const surpriseNote = surpriseDialog.querySelector(".surprise-note");
const poetryCategories = new Set(["Thơ", "Truyện", "Kịch", "Kí", "Đọc thêm"]);
let activeLibraryView = null;
let surpriseVideoUnlocked = false;

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
  const authors = getLessonAuthors(lesson);
  const completePoem = completePoems[lesson.id];
  const copyrightedPoemNote = copyrightedPoemNotes[lesson.id];
  const analysisReference = analysisReferences[lesson.id];
  const compositionContext = compositionContexts[lesson.id];
  const fullTextSource = fullTextSources[lesson.id];
  const fullTextUrl = fullTextSource?.url
    ?? `https://www.google.com/search?q=${encodeURIComponent(`"${lesson.title}" ${lesson.author} toàn văn`)}`;
  dialogContent.innerHTML = `
    <p class="dialog-kicker">HỌC KÌ ${lesson.term} · ${lesson.category} · ${lesson.format}</p>
    <h2 id="dialog-title">${lesson.title}</h2>
    <p class="dialog-author">${lesson.author}</p>
    ${authors.length ? `<section class="author-profiles" aria-label="Chân dung tác giả">
      <p class="author-profiles-heading">TÁC GIẢ</p>
      <div class="author-profile-list">${authors.map((author) => `
        <a class="author-profile" href="${author.wikipedia}" target="_blank" rel="noopener noreferrer" aria-label="Mở hồ sơ Wikipedia của ${author.name}">
          <span class="author-portrait">
            ${author.image
    ? `<img src="${author.image}" alt="Chân dung ${author.name}" loading="lazy">`
    : `<span class="portrait-placeholder">${author.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</span>`}
          </span>
          <span class="author-profile-copy"><strong>${author.name}</strong><small>${author.role}</small><small>${author.image ? "Ảnh: Wikipedia / Wikimedia · Xem hồ sơ ↗" : "Chưa có ảnh chân dung đáng tin cậy · Xem hồ sơ ↗"}</small></span>
        </a>
      `).join("")}</div>
    </section>` : ""}
    <p class="dialog-lead">${lesson.intro}</p>
    <section class="full-text-links" aria-label="Liên kết văn bản">
      <h3>Văn bản trực tuyến</h3>
      <a href="${fullTextUrl}" target="_blank" rel="noopener noreferrer">${fullTextSource?.label ?? "Tìm bản đọc trực tuyến"} <span aria-hidden="true">↗</span></a>
      <p>${fullTextSource ? "Nguồn có thể đăng toàn văn hoặc trích đoạn; hãy kiểm tra phạm vi văn bản và đối chiếu với sách giáo khoa." : "Chưa xác minh được đường dẫn trực tiếp tới toàn văn. Kết quả tìm kiếm có thể chỉ là trích đoạn; hãy đối chiếu với sách giáo khoa."}</p>
    </section>
    ${completePoem ? `<details class="lesson-section complete-poem" id="lesson-full-poem" open>
      <summary>Toàn văn bài thơ</summary>
      <div class="lesson-section-content">
        <p class="complete-poem-text">${completePoem.text}</p>
        ${completePoem.translation ? `<p class="complete-poem-text poem-translation">${completePoem.translation}</p>` : ""}
        <p class="analysis-note">${completePoem.source}</p>
      </div>
    </details>` : copyrightedPoemNote ? `<details class="lesson-section complete-poem" id="lesson-full-poem">
      <summary>Toàn văn bài thơ</summary>
      <div class="lesson-section-content"><p>${copyrightedPoemNote}</p></div>
    </details>` : ""}
    ${lesson.quotes?.length && !lesson.segments?.some((segment) => segment.excerpt) ? `<details class="lesson-section quote-section" id="lesson-quotes">
      <summary>Trích dẫn ngắn trong sách</summary>
      <div class="lesson-section-content">
        <p class="analysis-note">Trích dẫn ngắn để nhận diện và phân tích; em có thể đối chiếu toàn văn trong sách giáo khoa.</p>
        ${lesson.quotes.map((quote) => `<figure class="literary-quote">
          <blockquote>${quote.excerpt.split("\n").map((line) => `<span>“${line}”</span>`).join("")}</blockquote>
          <figcaption><cite>${quote.source}</cite><span>${quote.note}</span></figcaption>
        </figure>`).join("")}
      </div>
    </details>` : ""}
    ${lesson.segments?.length ? `<details class="lesson-section passage-analysis" id="lesson-analysis" open>
      <summary>Phân tích theo từng câu / khổ / đoạn</summary>
      <div class="lesson-section-content">
        <p class="analysis-note">Thơ được đọc gần theo câu hoặc cụm câu; truyện được phân tích theo tình huống, diễn biến, nhân vật và kết thúc. Trích dẫn được giữ ngắn để tiện đối chiếu văn bản trong sách giáo khoa.</p>
        ${lesson.segments.map((segment, index) => `<article class="analysis-segment">
          <span class="analysis-index">${String(index + 1).padStart(2, "0")}</span>
          <div><h4>${segment.label}</h4>${segment.excerpt ? `<p class="passage-excerpt"><span>Trích dẫn ngắn</span> “${segment.excerpt}”</p>` : ""}<p class="analysis-focus">${segment.focus}</p><p>${segment.analysis}</p>${segment.closeReading ? `<p class="close-reading">${segment.closeReading}</p>` : ""}</div>
        </article>`).join("")}
      </div>
    </details>` : ""}
    ${analysisReference ? `<details class="lesson-section research-notes" id="lesson-sources">
      <summary>Nguồn tham khảo &amp; lưu ý đối chiếu</summary>
      <div class="lesson-section-content">
        <p>${analysisReference.note}</p>
        ${analysisReference.sources?.length ? `<ul class="analysis-reference-links">${analysisReference.sources.map((source) => `<li><a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.label} ↗</a></li>`).join("")}</ul>` : ""}
      </div>
    </details>` : ""}
    ${compositionContext ? `<details class="lesson-section lesson-notes" id="lesson-composition-context">
      <summary>Bối cảnh sáng tác / xuất xứ</summary>
      <div class="lesson-section-content">
        ${compositionContext.text ? `<p>${compositionContext.text}</p>` : ""}
        ${compositionContext.citations?.length ? `<ul class="analysis-reference-links">${compositionContext.citations.map((citation) => `<li>${citation.url ? `<a href="${citation.url}" target="_blank" rel="noopener noreferrer">${citation.label} ↗</a>` : citation.label}</li>`).join("")}</ul>` : ""}
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
  for (const image of dialogContent.querySelectorAll(".author-portrait img")) {
    image.addEventListener("error", () => {
      const placeholder = document.createElement("span");
      placeholder.className = "portrait-placeholder portrait-error";
      placeholder.textContent = "Ảnh không tải được";
      image.replaceWith(placeholder);
    }, { once: true });
  }
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
const surpriseDialogClose = surpriseDialog.querySelector(".dialog-close");
surpriseDialogClose.addEventListener("click", () => surpriseDialog.close());
surpriseDialog.addEventListener("click", (event) => {
  if (event.target === surpriseDialog) surpriseDialog.close();
});
surpriseDialog.addEventListener("close", () => {
  const video = surpriseVideoFrame.querySelector("video");
  if (video) {
    video.pause();
    video.removeAttribute("src");
    video.load();
  }
  surpriseVideoFrame.replaceChildren();
  surpriseNote.textContent = "Nhấn nút phát trong video để xem có tiếng. Bạn có thể đóng cửa sổ này bất cứ lúc nào.";
  surpriseReopenButton.hidden = !surpriseVideoUnlocked;
});
function openSurpriseVideo() {
  if (surpriseDialog.open) surpriseDialog.close();
  surpriseVideoUnlocked = true;
  surpriseReopenButton.hidden = true;
  const video = document.createElement("video");
  video.title = "Video bất ngờ dành tặng bạn";
  video.setAttribute("aria-label", "Video bất ngờ dành tặng bạn");
  video.autoplay = true;
  video.controls = true;
  video.playsInline = true;
  video.preload = "auto";
  video.src = "./1793378394476_839794773190160940_8418326425555417432.mp4";
  video.addEventListener("error", () => {
    surpriseNote.textContent = "Trình duyệt này không phát được video. Hãy tải tệp MP4 để mở bằng trình phát video trên thiết bị.";
  }, { once: true });
  surpriseVideoFrame.replaceChildren(video);
  surpriseDialog.showModal();
  video.play().catch(() => {
    surpriseNote.textContent = "Video chưa thể tự phát trong trình duyệt này. Hãy nhấn nút phát hoặc tải tệp MP4 để xem.";
  });
}

function openSurpriseVideoOnFirstLessonClick(event) {
  if (!(event.target instanceof Element) || !event.target.closest(".lesson-card")) return;
  document.removeEventListener("click", openSurpriseVideoOnFirstLessonClick);
  openSurpriseVideo();
}

document.addEventListener("click", openSurpriseVideoOnFirstLessonClick);
surpriseReopenButton.addEventListener("click", openSurpriseVideo);
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
});

renderLessons();
