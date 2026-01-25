const lessonData = [
    // --- CẤP ĐỘ N5 (CƠ BẢN ĐỜI SỐNG) ---
    { id: 1, lvl: 'N5', kanji: '入口', furigana: 'いりぐち', mean: 'Lối vào', example: '入口はあちらです。', ex_mean: 'Lối vào ở phía kia.' },
    { id: 2, lvl: 'N5', kanji: '出口', furigana: 'でぐち', mean: 'Lối ra', example: '出口はどこですか？', ex_mean: 'Lối ra ở đâu vậy?' },
    { id: 3, lvl: 'N5', kanji: 'いくら', furigana: 'いくら', mean: 'Bao nhiêu tiền', example: 'これはいくらですか？', ex_mean: 'Cái này bao nhiêu tiền?' },
    { id: 4, lvl: 'N5', kanji: '手洗い', furigana: 'てあらい', mean: 'Nhà vệ sinh', example: 'お手洗いを貸してください。', ex_mean: 'Cho tôi mượn nhà vệ sinh một chút.' },
    { id: 5, lvl: 'N5', kanji: '地下鉄', furigana: 'ちかてつ', mean: 'Tàu điện ngầm', example: '地下鉄で行きましょう。', ex_mean: 'Chúng ta đi bằng tàu điện ngầm nhé.' },
    { id: 6, lvl: 'N5', kanji: '切符', furigana: 'きっぷ', mean: 'Vé (tàu, xe)', example: '切符をなくしました。', ex_mean: 'Tôi làm mất vé rồi.' },
    { id: 7, lvl: 'N5', kanji: '飲み物', furigana: 'のみもの', mean: 'Đồ uống', example: '飲み物は何がいいですか？', ex_mean: 'Bạn uống đồ uống gì thì được?' },
    { id: 8, lvl: 'N5', kanji: '食べる', furigana: 'たべる', mean: 'Ăn', example: '一緒に食べませんか？', ex_mean: 'Cùng ăn với tôi không?' },
    { id: 9, lvl: 'N5', kanji: '名前', furigana: 'なまえ', mean: 'Tên', example: 'お名前は何ですか？', ex_mean: 'Tên bạn là gì?' },
    { id: 10, lvl: 'N5', kanji: '時間', furigana: 'じかん', mean: 'Thời gian', example: '時間がありません。', ex_mean: 'Tôi không có thời gian.' },

    // --- CẤP ĐỘ N4 (GIAO TIẾP HẰNG NGÀY) ---
    { id: 11, lvl: 'N4', kanji: '会計', furigana: 'かいけい', mean: 'Thanh toán', example: '別々に会計してください。', ex_mean: 'Vui lòng thanh toán riêng giúp tôi.' },
    { id: 12, lvl: 'N4', kanji: '両替', furigana: 'りょうがえ', mean: 'Đổi tiền', example: '両替機はありますか？', ex_mean: 'Có máy đổi tiền không?' },
    { id: 13, lvl: 'N4', kanji: '駐車場', furigana: 'ちゅうしゃじょう', mean: 'Bãi đỗ xe', example: '駐車場は無料ですか？', ex_mean: 'Bãi đỗ xe có miễn phí không?' },
    { id: 14, lvl: 'N4', kanji: '予約', furigana: 'よやく', mean: 'Đặt chỗ', example: '７時に予約しています。', ex_mean: 'Tôi có hẹn đặt chỗ lúc 7 giờ.' },
    { id: 15, lvl: 'N4', kanji: '案内', furigana: 'あんない', mean: 'Hướng dẫn', example: '街を案内しましょう。', ex_mean: 'Để tôi dẫn bạn đi tham quan thành phố.' },
    { id: 16, lvl: 'N4', kanji: '準備', furigana: 'じゅんび', mean: 'Chuẩn bị', example: '旅行の準備ができました。', ex_mean: 'Việc chuẩn bị cho chuyến đi đã xong.' },
    { id: 17, lvl: 'N4', kanji: '連絡', furigana: 'れんらく', mean: 'Liên lạc', example: '後で連絡します。', ex_mean: 'Tôi sẽ liên lạc sau.' },
    { id: 18, lvl: 'N4', kanji: '故障', furigana: 'こしょう', mean: 'Hỏng hóc', example: 'エレベーターが故障しています。', ex_mean: 'Thang máy đang bị hỏng.' },
    { id: 19, lvl: 'N4', kanji: '財布', furigana: 'さいふ', mean: 'Ví tiền', example: '財布を盗まれました。', ex_mean: 'Tôi bị trộm mất ví rồi.' },
    { id: 20, lvl: 'N4', kanji: '便利', furigana: 'べんり', mean: 'Tiện lợi', example: 'コンビニはとても便利です。', ex_mean: 'Cửa hàng tiện lợi rất tiện lợi.' },

    // --- CẤP ĐỘ N3 (CÔNG SỞ & GIAO TIẾP NÂNG CAO) ---
    { id: 21, lvl: 'N3', kanji: 'お疲れ様', furigana: 'おつかれさま', mean: 'Anh/chị đã vất vả rồi', example: '今日もお疲れ様でした。', ex_mean: 'Hôm nay anh cũng đã vất vả rồi.' },
    { id: 22, lvl: 'N3', kanji: '承知', furigana: 'しょうち', mean: 'Hiểu rõ/Đồng ý', example: '件の件、承知いたしました。', ex_mean: 'Về việc đó, tôi đã hiểu rõ rồi.' },
    { id: 23, lvl: 'N3', kanji: '担当', furigana: 'たんとう', mean: 'Phụ trách', example: '私が担当させていただきます。', ex_mean: 'Tôi xin phép được phụ trách việc này.' },
    { id: 24, lvl: 'N3', kanji: '確認', furigana: 'かくにん', mean: 'Xác nhận', example: 'もう一度確認してください。', ex_mean: 'Hãy xác nhận lại một lần nữa.' },
    { id: 25, lvl: 'N3', kanji: '相談', furigana: 'そうだん', mean: 'Thảo luận/Bàn bạc', example: '先生に相談してみます。', ex_mean: 'Tôi sẽ thử bàn bạc với thầy giáo.' },
    { id: 26, lvl: 'N3', kanji: '遠慮', furigana: 'えんりょ', mean: 'Ngại ngần/Khách sáo', example: '遠慮しないで食べてください。', ex_mean: 'Đừng ngại, hãy ăn đi nhé.' },
    { id: 27, lvl: 'N3', kanji: '注意', furigana: 'ちゅうい', mean: 'Chú ý/Cảnh báo', example: '足元に注意してください。', ex_mean: 'Hãy chú ý dưới chân.' },
    { id: 28, lvl: 'N3', kanji: '反対', furigana: 'はんたい', mean: 'Phản đối/Ngược lại', example: 'その意見には反対です。', ex_mean: 'Tôi phản đối ý kiến đó.' },
    { id: 29, lvl: 'N3', kanji: '準備', furigana: 'じゅんび', mean: 'Chuẩn bị', example: '会議の準備をします。', ex_mean: 'Tôi chuẩn bị cho cuộc họp.' },
    { id: 30, lvl: 'N3', kanji: '冗談', furigana: 'じょうだん', mean: 'Nói đùa', example: '冗談を言わないでください。', ex_mean: 'Đừng có nói đùa như thế.' },

    // --- CẤP ĐỘ N2 (TÌNH HUỐNG PHỨC TẠP) ---
    { id: 31, lvl: 'N2', kanji: '恐れ入る', furigana: 'おそれいる', mean: 'Xin lỗi (lịch sự)', example: '恐れ入りますが、少々お待ちを。', ex_mean: 'Xin lỗi, phiền quý khách đợi một chút.' },
    { id: 32, lvl: 'N2', kanji: '至急', furigana: 'しきゅう', mean: 'Khẩn cấp', example: '至急、お返事をお願いします。', ex_mean: 'Vui lòng phản hồi gấp giúp tôi.' },
    { id: 33, lvl: 'N2', kanji: '考慮', furigana: 'こうりょ', mean: 'Xem xét', example: '環境を考慮に入れる。', ex_mean: 'Đưa yếu tố môi trường vào xem xét.' },
    { id: 34, lvl: 'N2', kanji: '慎重', furigana: 'しんちょう', mean: 'Thận trọng', example: '慎重に検討します。', ex_mean: 'Chúng tôi sẽ xem xét thận trọng.' },
    { id: 35, lvl: 'N2', kanji: '責任', furigana: 'せきにん', mean: 'Trách nhiệm', example: '責任を持って仕事をする。', ex_mean: 'Làm việc một cách có trách nhiệm.' },
    { id: 36, lvl: 'N2', kanji: '納得', furigana: 'なっとく', mean: 'Thuyết phục/Lý giải', example: '説明を聞いて納得しました。', ex_mean: 'Nghe giải thích xong tôi đã thấy thỏa đáng.' },
    { id: 37, lvl: 'N2', kanji: '普及', furigana: 'ふきゅう', mean: 'Phổ biến', example: 'スマホが急速に普及した。', ex_mean: 'Điện thoại thông minh đã phổ biến nhanh chóng.' },
    { id: 38, lvl: 'N2', kanji: '応募', furigana: 'おうぼ', mean: 'Ứng tuyển', example: '求人に応募しました。', ex_mean: 'Tôi đã ứng tuyển vào vị trí tuyển dụng.' },
    { id: 39, lvl: 'N2', kanji: '延期', furigana: 'えんき', mean: 'Trì hoãn', example: '試合は来週に延期された。', ex_mean: 'Trận đấu đã bị hoãn sang tuần sau.' },
    { id: 40, lvl: 'N2', kanji: '改善', furigana: 'かいぜん', mean: 'Cải thiện', example: 'サービスを改善します。', ex_mean: 'Chúng tôi sẽ cải thiện dịch vụ.' },
        // --- ĂN UỐNG & GIAO TIẾP – N5 ---
    { id: 41, lvl: 'N5', kanji: '飲む', furigana: 'のむ', mean: 'Uống', example: '水を飲みます。', ex_mean: 'Tôi uống nước.' },
    { id: 42, lvl: 'N5', kanji: '注文', furigana: 'ちゅうもん', mean: 'Gọi món', example: '料理を注文します。', ex_mean: 'Tôi gọi món.' },
    { id: 43, lvl: 'N5', kanji: 'おいしい', furigana: 'おいしい', mean: 'Ngon', example: 'このラーメンはおいしいです。', ex_mean: 'Món ramen này rất ngon.' },
    { id: 44, lvl: 'N5', kanji: '話す', furigana: 'はなす', mean: 'Nói chuyện', example: '日本語で話します。', ex_mean: 'Tôi nói chuyện bằng tiếng Nhật.' },
    { id: 45, lvl: 'N5', kanji: '聞く', furigana: 'きく', mean: 'Nghe / hỏi', example: '先生の話を聞きます。', ex_mean: 'Tôi nghe thầy giáo nói.' },

    // --- ĂN UỐNG & GIAO TIẾP – N4 ---
    { id: 46, lvl: 'N4', kanji: '料理', furigana: 'りょうり', mean: 'Món ăn / nấu ăn', example: '日本料理を作ります。', ex_mean: 'Tôi nấu món Nhật.' },
    { id: 47, lvl: 'N4', kanji: '味', furigana: 'あじ', mean: 'Hương vị', example: 'この料理は味がいいです。', ex_mean: 'Món này có hương vị ngon.' },
    { id: 48, lvl: 'N4', kanji: '説明', furigana: 'せつめい', mean: 'Giải thích', example: '店員が説明してくれました。', ex_mean: 'Nhân viên đã giải thích cho tôi.' },
    { id: 49, lvl: 'N4', kanji: '意見', furigana: 'いけん', mean: 'Ý kiến', example: '意見を聞かせてください。', ex_mean: 'Hãy cho tôi biết ý kiến của bạn.' },
    { id: 50, lvl: 'N4', kanji: '連絡', furigana: 'れんらく', mean: 'Liên lạc', example: '後で連絡します。', ex_mean: 'Tôi sẽ liên lạc sau.' },

    // --- ĂN UỐNG & GIAO TIẾP – N3 ---
    { id: 51, lvl: 'N3', kanji: '外食', furigana: 'がいしょく', mean: 'Ăn ngoài', example: '今日は外食します。', ex_mean: 'Hôm nay tôi ăn ngoài.' },
    { id: 52, lvl: 'N3', kanji: '食事', furigana: 'しょくじ', mean: 'Bữa ăn', example: '食事の時間です。', ex_mean: 'Đến giờ ăn rồi.' },
    { id: 53, lvl: 'N3', kanji: '会話', furigana: 'かいわ', mean: 'Hội thoại', example: '会話の練習をします。', ex_mean: 'Tôi luyện hội thoại.' },
    { id: 54, lvl: 'N3', kanji: '誤解', furigana: 'ごかい', mean: 'Hiểu lầm', example: '誤解しないでください。', ex_mean: 'Xin đừng hiểu lầm.' },
    { id: 55, lvl: 'N3', kanji: '提案', furigana: 'ていあん', mean: 'Đề xuất', example: '新しい案を提案します。', ex_mean: 'Tôi đề xuất phương án mới.' },

    // --- ĂN UỐNG & GIAO TIẾP – N2 ---
    { id: 56, lvl: 'N2', kanji: '食生活', furigana: 'しょくせいかつ', mean: 'Chế độ ăn uống', example: '食生活を見直します。', ex_mean: 'Tôi xem lại chế độ ăn uống.' },
    { id: 57, lvl: 'N2', kanji: '栄養', furigana: 'えいよう', mean: 'Dinh dưỡng', example: '栄養のバランスが大切です。', ex_mean: 'Cân bằng dinh dưỡng rất quan trọng.' },
    { id: 58, lvl: 'N2', kanji: '意思疎通', furigana: 'いしそつう', mean: 'Giao tiếp (hiểu nhau)', example: '意思疎通が難しいです。', ex_mean: 'Việc giao tiếp hiểu nhau khá khó.' },
    { id: 59, lvl: 'N2', kanji: '表現', furigana: 'ひょうげん', mean: 'Cách diễn đạt', example: '日本語の表現を学びます。', ex_mean: 'Tôi học cách diễn đạt tiếng Nhật.' },
    { id: 60, lvl: 'N2', kanji: '交渉', furigana: 'こうしょう', mean: 'Thương lượng', example: '条件について交渉します。', ex_mean: 'Tôi thương lượng về điều kiện.' },
    


    // ... (Tương tự cho các câu tiếp theo đến 100)
];