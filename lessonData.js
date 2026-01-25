const lessonData = [

/* =======================
   🍚 ĂN UỐNG – N5
======================= */
{ id: 1, lvl:'N5', category:'food', kanji:'水', furigana:'みず', mean:'Nước', example:'水をください。', ex_mean:'Cho tôi xin nước.' },
{ id: 2, lvl:'N5', category:'food', kanji:'ご飯', furigana:'ごはん', mean:'Cơm', example:'ご飯を食べます。', ex_mean:'Tôi ăn cơm.' },
{ id: 3, lvl:'N5', category:'food', kanji:'食べる', furigana:'たべる', mean:'Ăn', example:'一緒に食べませんか？', ex_mean:'Ăn cùng nhé?' },
{ id: 4, lvl:'N5', category:'food', kanji:'飲む', furigana:'のむ', mean:'Uống', example:'お茶を飲みます。', ex_mean:'Tôi uống trà.' },
{ id: 5, lvl:'N5', category:'food', kanji:'おいしい', furigana:'おいしい', mean:'Ngon', example:'この料理はおいしいです。', ex_mean:'Món này ngon.' },
{ id: 6, lvl:'N5', category:'food', kanji:'店', furigana:'みせ', mean:'Cửa hàng', example:'あの店に行きます。', ex_mean:'Tôi đi cửa hàng kia.' },
{ id: 7, lvl:'N5', category:'food', kanji:'朝ご飯', furigana:'あさごはん', mean:'Bữa sáng', example:'朝ご飯を食べましたか。', ex_mean:'Bạn ăn sáng chưa?' },
{ id: 8, lvl:'N5', category:'food', kanji:'昼ご飯', furigana:'ひるごはん', mean:'Bữa trưa', example:'昼ご飯は何ですか。', ex_mean:'Bữa trưa ăn gì?' },
{ id: 9, lvl:'N5', category:'food', kanji:'晩ご飯', furigana:'ばんごはん', mean:'Bữa tối', example:'晩ご飯を作ります。', ex_mean:'Tôi nấu bữa tối.' },

/* =======================
   🍚 ĂN UỐNG – N4
======================= */
{ id:10, lvl:'N4', category:'food', kanji:'料理', furigana:'りょうり', mean:'Món ăn / nấu ăn', example:'料理が好きです。', ex_mean:'Tôi thích nấu ăn.' },
{ id:11, lvl:'N4', category:'food', kanji:'注文', furigana:'ちゅうもん', mean:'Gọi món', example:'料理を注文します。', ex_mean:'Tôi gọi món.' },
{ id:12, lvl:'N4', category:'food', kanji:'味', furigana:'あじ', mean:'Hương vị', example:'味が少し濃いです。', ex_mean:'Vị hơi đậm.' },
{ id:13, lvl:'N4', category:'food', kanji:'甘い', furigana:'あまい', mean:'Ngọt', example:'このケーキは甘いです。', ex_mean:'Bánh này ngọt.' },
{ id:14, lvl:'N4', category:'food', kanji:'辛い', furigana:'からい', mean:'Cay', example:'このラーメンは辛いです。', ex_mean:'Mì này cay.' },
{ id:15, lvl:'N4', category:'food', kanji:'会計', furigana:'かいけい', mean:'Thanh toán', example:'会計をお願いします。', ex_mean:'Tính tiền giúp tôi.' },

/* =======================
   🍚 ĂN UỐNG – N3
======================= */
{ id:16, lvl:'N3', category:'food', kanji:'外食', furigana:'がいしょく', mean:'Ăn ngoài', example:'週末は外食します。', ex_mean:'Cuối tuần tôi ăn ngoài.' },
{ id:17, lvl:'N3', category:'food', kanji:'食事', furigana:'しょくじ', mean:'Bữa ăn', example:'食事の時間です。', ex_mean:'Đến giờ ăn.' },
{ id:18, lvl:'N3', category:'food', kanji:'満腹', furigana:'まんぷく', mean:'No bụng', example:'もう満腹です。', ex_mean:'Tôi no rồi.' },
{ id:19, lvl:'N3', category:'food', kanji:'健康', furigana:'けんこう', mean:'Sức khỏe', example:'健康に気をつけます。', ex_mean:'Tôi chú ý sức khỏe.' },

/* =======================
   🍚 ĂN UỐNG – N2
======================= */
{ id:20, lvl:'N2', category:'food', kanji:'食生活', furigana:'しょくせいかつ', mean:'Chế độ ăn uống', example:'食生活を改善します。', ex_mean:'Tôi cải thiện chế độ ăn.' },
{ id:21, lvl:'N2', category:'food', kanji:'栄養', furigana:'えいよう', mean:'Dinh dưỡng', example:'栄養のバランスが大切です。', ex_mean:'Cân bằng dinh dưỡng rất quan trọng.' },
{ id:22, lvl:'N2', category:'food', kanji:'過食', furigana:'かしょく', mean:'Ăn quá nhiều', example:'過食に注意してください。', ex_mean:'Hãy chú ý ăn quá mức.' },

/* =======================
   🗣️ GIAO TIẾP – N5
======================= */
{ id:23, lvl:'N5', category:'communication', kanji:'話す', furigana:'はなす', mean:'Nói chuyện', example:'日本語で話します。', ex_mean:'Tôi nói tiếng Nhật.' },
{ id:24, lvl:'N5', category:'communication', kanji:'聞く', furigana:'きく', mean:'Nghe / hỏi', example:'先生の話を聞きます。', ex_mean:'Tôi nghe thầy nói.' },
{ id:25, lvl:'N5', category:'communication', kanji:'分かる', furigana:'わかる', mean:'Hiểu', example:'少し分かります。', ex_mean:'Tôi hiểu một chút.' },
{ id:26, lvl:'N5', category:'communication', kanji:'言う', furigana:'いう', mean:'Nói', example:'意見を言います。', ex_mean:'Tôi nói ý kiến.' },

/* =======================
   🗣️ GIAO TIẾP – N4
======================= */
{ id:27, lvl:'N4', category:'communication', kanji:'説明', furigana:'せつめい', mean:'Giải thích', example:'説明してください。', ex_mean:'Hãy giải thích.' },
{ id:28, lvl:'N4', category:'communication', kanji:'意見', furigana:'いけん', mean:'Ý kiến', example:'意見があります。', ex_mean:'Tôi có ý kiến.' },
{ id:29, lvl:'N4', category:'communication', kanji:'連絡', furigana:'れんらく', mean:'Liên lạc', example:'後で連絡します。', ex_mean:'Tôi sẽ liên lạc sau.' },

/* =======================
   🗣️ GIAO TIẾP – N3
======================= */
{ id:30, lvl:'N3', category:'communication', kanji:'相談', furigana:'そうだん', mean:'Trao đổi / bàn bạc', example:'先生に相談します。', ex_mean:'Tôi trao đổi với giáo viên.' },
{ id:31, lvl:'N3', category:'communication', kanji:'会話', furigana:'かいわ', mean:'Hội thoại', example:'会話の練習をします。', ex_mean:'Luyện hội thoại.' },

/* =======================
   🗣️ GIAO TIẾP – N2
======================= */
{ id:32, lvl:'N2', category:'communication', kanji:'意思疎通', furigana:'いしそつう', mean:'Giao tiếp hiểu nhau', example:'意思疎通が大切です。', ex_mean:'Giao tiếp hiểu nhau rất quan trọng.' },
{ id:33, lvl:'N2', category:'communication', kanji:'表現', furigana:'ひょうげん', mean:'Diễn đạt', example:'表現力を高めたいです。', ex_mean:'Tôi muốn nâng cao khả năng diễn đạt.' },
/* =======================
   🍚 ĂN UỐNG – N3 (FULL)
======================= */
{ id:101, lvl:'N3', category:'food', kanji:'食堂', furigana:'しょくどう', mean:'Nhà ăn', example:'会社の食堂で昼ご飯を食べます。', ex_mean:'Tôi ăn trưa ở nhà ăn công ty.' },
{ id:102, lvl:'N3', category:'food', kanji:'弁当', furigana:'べんとう', mean:'Cơm hộp', example:'毎日弁当を持って行きます。', ex_mean:'Ngày nào tôi cũng mang cơm hộp.' },
{ id:103, lvl:'N3', category:'food', kanji:'食欲', furigana:'しょくよく', mean:'Cảm giác thèm ăn', example:'最近、食欲がありません。', ex_mean:'Gần đây tôi không có cảm giác thèm ăn.' },
{ id:104, lvl:'N3', category:'food', kanji:'量', furigana:'りょう', mean:'Lượng', example:'ご飯の量を減らします。', ex_mean:'Tôi giảm lượng cơm.' },
{ id:105, lvl:'N3', category:'food', kanji:'不足', furigana:'ふそく', mean:'Thiếu', example:'野菜が不足しています。', ex_mean:'Tôi đang thiếu rau.' },
{ id:106, lvl:'N3', category:'food', kanji:'残す', furigana:'のこす', mean:'Để thừa', example:'料理を残してはいけません。', ex_mean:'Không được để thừa đồ ăn.' },
{ id:107, lvl:'N3', category:'food', kanji:'温かい', furigana:'あたたかい', mean:'Ấm, nóng', example:'温かいスープを飲みたいです。', ex_mean:'Tôi muốn uống súp nóng.' },
{ id:108, lvl:'N3', category:'food', kanji:'冷たい', furigana:'つめたい', mean:'Lạnh', example:'冷たい飲み物をください。', ex_mean:'Cho tôi đồ uống lạnh.' },
{ id:109, lvl:'N3', category:'food', kanji:'健康的', furigana:'けんこうてき', mean:'Lành mạnh', example:'健康的な食事を心がけます。', ex_mean:'Tôi cố gắng ăn uống lành mạnh.' },
{ id:110, lvl:'N3', category:'food', kanji:'太る', furigana:'ふとる', mean:'Béo lên', example:'食べすぎると太ります。', ex_mean:'Ăn quá nhiều sẽ béo.' },

/* =======================
   🗣️ GIAO TIẾP – N3 (FULL)
======================= */
{ id:111, lvl:'N3', category:'communication', kanji:'伝える', furigana:'つたえる', mean:'Truyền đạt', example:'気持ちを伝えます。', ex_mean:'Tôi truyền đạt cảm xúc.' },
{ id:112, lvl:'N3', category:'communication', kanji:'誤解', furigana:'ごかい', mean:'Hiểu lầm', example:'誤解しないでください。', ex_mean:'Xin đừng hiểu lầm.' },
{ id:113, lvl:'N3', category:'communication', kanji:'確認', furigana:'かくにん', mean:'Xác nhận', example:'予定を確認します。', ex_mean:'Tôi xác nhận lịch.' },
{ id:114, lvl:'N3', category:'communication', kanji:'約束', furigana:'やくそく', mean:'Lời hứa', example:'約束を守ります。', ex_mean:'Tôi giữ lời hứa.' },
{ id:115, lvl:'N3', category:'communication', kanji:'理由', furigana:'りゆう', mean:'Lý do', example:'理由を説明してください。', ex_mean:'Hãy giải thích lý do.' },
{ id:116, lvl:'N3', category:'communication', kanji:'状況', furigana:'じょうきょう', mean:'Tình huống', example:'状況が変わりました。', ex_mean:'Tình huống đã thay đổi.' },
{ id:117, lvl:'N3', category:'communication', kanji:'理解', furigana:'りかい', mean:'Hiểu rõ', example:'理解できました。', ex_mean:'Tôi đã hiểu.' },
{ id:118, lvl:'N3', category:'communication', kanji:'意識', furigana:'いしき', mean:'Ý thức', example:'時間を意識します。', ex_mean:'Tôi ý thức về thời gian.' },
{ id:119, lvl:'N3', category:'communication', kanji:'対応', furigana:'たいおう', mean:'Ứng phó', example:'問題に対応します。', ex_mean:'Tôi xử lý vấn đề.' },
{ id:120, lvl:'N3', category:'communication', kanji:'態度', furigana:'たいど', mean:'Thái độ', example:'態度が大切です。', ex_mean:'Thái độ rất quan trọng.' },

/* =======================
   🧠 ĐỜI SỐNG – N3 (BONUS)
======================= */
{ id:121, lvl:'N3', category:'life', kanji:'生活', furigana:'せいかつ', mean:'Cuộc sống', example:'日本の生活に慣れました。', ex_mean:'Tôi đã quen với cuộc sống ở Nhật.' },
{ id:122, lvl:'N3', category:'life', kanji:'習慣', furigana:'しゅうかん', mean:'Thói quen', example:'早起きは良い習慣です。', ex_mean:'Dậy sớm là thói quen tốt.' },
{ id:123, lvl:'N3', category:'life', kanji:'無理', furigana:'むり', mean:'Quá sức', example:'無理しないでください。', ex_mean:'Đừng quá sức.' },
{ id:124, lvl:'N3', category:'life', kanji:'調子', furigana:'ちょうし', mean:'Tình trạng', example:'今日は調子がいいです。', ex_mean:'Hôm nay tôi khỏe.' },
{ id:125, lvl:'N3', category:'life', kanji:'安心', furigana:'あんしん', mean:'Yên tâm', example:'それを聞いて安心しました。', ex_mean:'Nghe vậy tôi yên tâm.' },
// ===== N1 – FOOD =====
{ id: 3001, lvl:'N1', category:'food', kanji:'食習慣', furigana:'しょくしゅうかん', mean:'Thói quen ăn uống',
example:'食習慣は健康に大きく影響する。', ex_mean:'Thói quen ăn uống ảnh hưởng lớn đến sức khỏe.' },

{ id: 3002, lvl:'N1', category:'food', kanji:'過剰摂取', furigana:'かじょうせっしゅ', mean:'Tiêu thụ quá mức',
example:'塩分の過剰摂取に注意。', ex_mean:'Chú ý tiêu thụ muối quá mức.' },

{ id: 3003, lvl:'N1', category:'food', kanji:'嗜好', furigana:'しこう', mean:'Sở thích (ăn uống)',
example:'食の嗜好は人それぞれだ。', ex_mean:'Sở thích ăn uống tùy mỗi người.' },

// ===== N1 – COMMUNICATION =====
{ id: 3010, lvl:'N1', category:'communication', kanji:'円滑', furigana:'えんかつ', mean:'Trôi chảy',
example:'円滑なコミュニケーションを図る。', ex_mean:'Hướng tới giao tiếp trôi chảy.' },

{ id: 3011, lvl:'N1', category:'communication', kanji:'暗黙', furigana:'あんもく', mean:'Ngầm hiểu',
example:'暗黙の了解がある。', ex_mean:'Có sự hiểu ngầm.' },

{ id: 3012, lvl:'N1', category:'communication', kanji:'本音', furigana:'ほんね', mean:'Suy nghĩ thật',
example:'本音を言わない人も多い。', ex_mean:'Nhiều người không nói suy nghĩ thật.' },

{ id: 3013, lvl:'N1', category:'communication', kanji:'建前', furigana:'たてまえ', mean:'Lời nói xã giao',
example:'建前と本音は違う。', ex_mean:'Lời xã giao và suy nghĩ thật khác nhau.' },
// ===== N2 – FOOD =====
{ id: 2001, lvl:'N2', category:'food', kanji:'食生活', furigana:'しょくせいかつ', mean:'Chế độ ăn uống',
example:'食生活を見直す必要があります。', ex_mean:'Cần xem lại chế độ ăn uống.' },

{ id: 2002, lvl:'N2', category:'food', kanji:'栄養', furigana:'えいよう', mean:'Dinh dưỡng',
example:'栄養のバランスが大切です。', ex_mean:'Cân bằng dinh dưỡng rất quan trọng.' },

{ id: 2003, lvl:'N2', category:'food', kanji:'摂取', furigana:'せっしゅ', mean:'Tiêu thụ / hấp thụ',
example:'野菜を十分に摂取してください。', ex_mean:'Hãy ăn đủ rau.' },

{ id: 2004, lvl:'N2', category:'food', kanji:'控える', furigana:'ひかえる', mean:'Hạn chế',
example:'甘い物は控えています。', ex_mean:'Tôi đang hạn chế đồ ngọt.' },

// ===== N2 – COMMUNICATION =====
{ id: 2010, lvl:'N2', category:'communication', kanji:'意思疎通', furigana:'いしそつう', mean:'Giao tiếp hiểu nhau',
example:'意思疎通がうまくいかない。', ex_mean:'Giao tiếp không suôn sẻ.' },

{ id: 2011, lvl:'N2', category:'communication', kanji:'誤解', furigana:'ごかい', mean:'Hiểu lầm',
example:'誤解が生じました。', ex_mean:'Đã xảy ra hiểu lầm.' },

{ id: 2012, lvl:'N2', category:'communication', kanji:'配慮', furigana:'はいりょ', mean:'Quan tâm, để ý',
example:'相手への配慮が必要です。', ex_mean:'Cần để ý đến đối phương.' },

{ id: 2013, lvl:'N2', category:'communication', kanji:'主張', furigana:'しゅちょう', mean:'Khẳng định quan điểm',
example:'自分の意見を主張する。', ex_mean:'Nêu rõ quan điểm của mình.' },
// ===== N2 – FOOD =====
{ id: 2101, lvl:'N2', category:'food', kanji:'食欲', furigana:'しょくよく', mean:'Cảm giác thèm ăn',
example:'最近、食欲がありません。', ex_mean:'Gần đây tôi không có cảm giác thèm ăn.' },

{ id: 2102, lvl:'N2', category:'food', kanji:'満腹', furigana:'まんぷく', mean:'No bụng',
example:'もう満腹です。', ex_mean:'Tôi no rồi.' },

{ id: 2103, lvl:'N2', category:'food', kanji:'消化', furigana:'しょうか', mean:'Tiêu hóa',
example:'この料理は消化がいい。', ex_mean:'Món này dễ tiêu.' },

{ id: 2104, lvl:'N2', category:'food', kanji:'保存', furigana:'ほぞん', mean:'Bảo quản',
example:'冷蔵庫で保存してください。', ex_mean:'Hãy bảo quản trong tủ lạnh.' },

{ id: 2105, lvl:'N2', category:'food', kanji:'新鮮', furigana:'しんせん', mean:'Tươi',
example:'新鮮な野菜を使っています。', ex_mean:'Sử dụng rau tươi.' },

// ===== N2 – COMMUNICATION =====
{ id: 2110, lvl:'N2', category:'communication', kanji:'伝達', furigana:'でんたつ', mean:'Truyền đạt',
example:'正確に伝達してください。', ex_mean:'Hãy truyền đạt chính xác.' },

{ id: 2111, lvl:'N2', category:'communication', kanji:'理解', furigana:'りかい', mean:'Hiểu',
example:'ご理解いただけますか。', ex_mean:'Anh/chị có thể hiểu cho không?' },

{ id: 2112, lvl:'N2', category:'communication', kanji:'対応', furigana:'たいおう', mean:'Ứng phó',
example:'柔軟に対応します。', ex_mean:'Chúng tôi sẽ ứng phó linh hoạt.' },

{ id: 2113, lvl:'N2', category:'communication', kanji:'調整', furigana:'ちょうせい', mean:'Điều chỉnh',
example:'日程を調整します。', ex_mean:'Tôi sẽ điều chỉnh lịch.' },

{ id: 2114, lvl:'N2', category:'communication', kanji:'要望', furigana:'ようぼう', mean:'Yêu cầu, nguyện vọng',
example:'お客様の要望に応える。', ex_mean:'Đáp ứng yêu cầu của khách.' },

// ===== N1 – FOOD =====
{ id: 3101, lvl:'N1', category:'food', kanji:'食文化', furigana:'しょくぶんか', mean:'Văn hóa ẩm thực',
example:'日本の食文化に興味があります。', ex_mean:'Tôi quan tâm đến văn hóa ẩm thực Nhật.' },

{ id: 3102, lvl:'N1', category:'food', kanji:'嗜好品', furigana:'しこうひん', mean:'Thực phẩm mang tính sở thích',
example:'嗜好品の摂りすぎに注意。', ex_mean:'Chú ý dùng quá nhiều đồ kích thích.' },

{ id: 3103, lvl:'N1', category:'food', kanji:'摂生', furigana:'せっせい', mean:'Ăn uống điều độ',
example:'体のために摂生しています。', ex_mean:'Tôi ăn uống điều độ vì sức khỏe.' },

{ id: 3104, lvl:'N1', category:'food', kanji:'風味', furigana:'ふうみ', mean:'Hương vị',
example:'独特の風味がある。', ex_mean:'Có hương vị đặc trưng.' },

// ===== N1 – COMMUNICATION =====
{ id: 3110, lvl:'N1', category:'communication', kanji:'円滑', furigana:'えんかつ', mean:'Trôi chảy',
example:'円滑な意思疎通が必要だ。', ex_mean:'Cần giao tiếp trôi chảy.' },

{ id: 3111, lvl:'N1', category:'communication', kanji:'暗示', furigana:'あんじ', mean:'Hàm ý',
example:'言葉に暗示が含まれている。', ex_mean:'Lời nói có hàm ý.' },

{ id: 3112, lvl:'N1', category:'communication', kanji:'配慮', furigana:'はいりょ', mean:'Tinh ý, quan tâm',
example:'相手への配慮を忘れない。', ex_mean:'Đừng quên quan tâm đối phương.' },

{ id: 3113, lvl:'N1', category:'communication', kanji:'打ち明ける', furigana:'うちあける', mean:'Tâm sự thẳng thắn',
example:'本音を打ち明ける。', ex_mean:'Thổ lộ suy nghĩ thật.' },
// ===== N2 – COMMUNICATION =====
{ id: 2120, lvl:'N2', category:'communication', kanji:'意思表示', furigana:'いしひょうじ', mean:'Thể hiện ý định',
example:'自分の意思をはっきり表示する。', ex_mean:'Thể hiện rõ ý định của mình.' },

{ id: 2121, lvl:'N2', category:'communication', kanji:'発言', furigana:'はつげん', mean:'Phát biểu',
example:'会議で発言する。', ex_mean:'Phát biểu trong cuộc họp.' },

{ id: 2122, lvl:'N2', category:'communication', kanji:'沈黙', furigana:'ちんもく', mean:'Im lặng',
example:'沈黙が続いた。', ex_mean:'Sự im lặng kéo dài.' },

{ id: 2123, lvl:'N2', category:'communication', kanji:'言い換える', furigana:'いいかえる', mean:'Nói cách khác',
example:'別の言葉で言い換えます。', ex_mean:'Tôi sẽ nói lại bằng cách khác.' },

{ id: 2124, lvl:'N2', category:'communication', kanji:'伝わる', furigana:'つたわる', mean:'Được truyền đạt',
example:'気持ちが伝わりました。', ex_mean:'Cảm xúc đã được truyền đạt.' },

{ id: 2125, lvl:'N2', category:'communication', kanji:'誤解する', furigana:'ごかいする', mean:'Hiểu lầm',
example:'誤解しないでください。', ex_mean:'Xin đừng hiểu lầm.' },

{ id: 2126, lvl:'N2', category:'communication', kanji:'主旨', furigana:'しゅし', mean:'Ý chính',
example:'話の主旨を理解する。', ex_mean:'Hiểu ý chính của câu chuyện.' },

{ id: 2127, lvl:'N2', category:'communication', kanji:'省略', furigana:'しょうりゃく', mean:'Lược bỏ',
example:'説明を省略します。', ex_mean:'Tôi xin lược bớt phần giải thích.' },

{ id: 2128, lvl:'N2', category:'communication', kanji:'前提', furigana:'ぜんてい', mean:'Tiền đề',
example:'その前提で話します。', ex_mean:'Tôi nói chuyện dựa trên tiền đề đó.' },

{ id: 2129, lvl:'N2', category:'communication', kanji:'配慮', furigana:'はいりょ', mean:'Quan tâm, để ý',
example:'相手への配慮が必要だ。', ex_mean:'Cần quan tâm đến đối phương.' },

// ===== N1 – COMMUNICATION =====
{ id: 3120, lvl:'N1', category:'communication', kanji:'言動', furigana:'げんどう', mean:'Lời nói và hành động',
example:'言動に注意する。', ex_mean:'Chú ý lời nói và hành động.' },

{ id: 3121, lvl:'N1', category:'communication', kanji:'真意', furigana:'しんい', mean:'Ý định thật sự',
example:'真意が分からない。', ex_mean:'Không hiểu được ý định thật.' },

{ id: 3122, lvl:'N1', category:'communication', kanji:'含み', furigana:'ふくみ', mean:'Ẩn ý',
example:'含みのある言い方。', ex_mean:'Cách nói có ẩn ý.' },

{ id: 3123, lvl:'N1', category:'communication', kanji:'示唆', furigana:'しさ', mean:'Gợi ý, hàm ý',
example:'将来を示唆する発言。', ex_mean:'Phát biểu gợi ý về tương lai.' },

{ id: 3124, lvl:'N1', category:'communication', kanji:'見解', furigana:'けんかい', mean:'Quan điểm',
example:'私の見解を述べます。', ex_mean:'Tôi xin trình bày quan điểm.' },

{ id: 3125, lvl:'N1', category:'communication', kanji:'折衝', furigana:'せっしょう', mean:'Thương lượng',
example:'取引先と折衝する。', ex_mean:'Thương lượng với đối tác.' },

{ id: 3126, lvl:'N1', category:'communication', kanji:'同調', furigana:'どうちょう', mean:'Đồng tình',
example:'意見に同調する。', ex_mean:'Đồng tình với ý kiến.' },

{ id: 3127, lvl:'N1', category:'communication', kanji:'反論', furigana:'はんろん', mean:'Phản biện',
example:'冷静に反論する。', ex_mean:'Phản biện một cách bình tĩnh.' },

{ id: 3128, lvl:'N1', category:'communication', kanji:'婉曲', furigana:'えんきょく', mean:'Nói vòng',
example:'婉曲な表現を使う。', ex_mean:'Dùng cách diễn đạt nói vòng.' },

{ id: 3129, lvl:'N1', category:'communication', kanji:'率直', furigana:'そっちょく', mean:'Thẳng thắn',
example:'率直な意見を言う。', ex_mean:'Nói ý kiến thẳng thắn.' },
// ===== COMMUNICATION – N2 =====
{ id: 101, lvl: 'N2', category: 'communication', kanji: 'やり取り', furigana: 'やりとり', mean: 'Trao đổi (hai chiều)', example: 'メールでやり取りしています。', ex_mean: 'Tôi đang trao đổi qua email.' },
{ id: 102, lvl: 'N2', category: 'communication', kanji: '誤解', furigana: 'ごかい', mean: 'Hiểu lầm', example: '誤解を招く表現は避けてください。', ex_mean: 'Hãy tránh cách nói dễ gây hiểu lầm.' },
{ id: 103, lvl: 'N2', category: 'communication', kanji: '伝える', furigana: 'つたえる', mean: 'Truyền đạt', example: '正確に伝えることが大切です。', ex_mean: 'Việc truyền đạt chính xác rất quan trọng.' },
{ id: 104, lvl: 'N2', category: 'communication', kanji: '要点', furigana: 'ようてん', mean: 'Ý chính', example: '要点を簡潔に話してください。', ex_mean: 'Hãy nói ngắn gọn ý chính.' },
{ id: 105, lvl: 'N2', category: 'communication', kanji: '意図', furigana: 'いと', mean: 'Ý định', example: 'あなたの意図がよく分かりません。', ex_mean: 'Tôi chưa hiểu rõ ý định của bạn.' },

{ id: 106, lvl: 'N2', category: 'communication', kanji: '確認', furigana: 'かくにん', mean: 'Xác nhận', example: '念のため確認させてください。', ex_mean: 'Cho tôi xác nhận lại cho chắc.' },
{ id: 107, lvl: 'N2', category: 'communication', kanji: '共有', furigana: 'きょうゆう', mean: 'Chia sẻ', example: '情報をチームで共有します。', ex_mean: 'Chia sẻ thông tin trong nhóm.' },
{ id: 108, lvl: 'N2', category: 'communication', kanji: '説明不足', furigana: 'せつめいぶそく', mean: 'Thiếu giải thích', example: '説明不足で申し訳ありません。', ex_mean: 'Xin lỗi vì giải thích chưa đủ.' },
{ id: 109, lvl: 'N2', category: 'communication', kanji: '話を進める', furigana: 'はなしをすすめる', mean: 'Tiếp tục câu chuyện', example: 'では、話を進めましょう。', ex_mean: 'Vậy ta tiếp tục nói nhé.' },
{ id: 110, lvl: 'N2', category: 'communication', kanji: '結論', furigana: 'けつろん', mean: 'Kết luận', example: '結論から言います。', ex_mean: 'Tôi nói kết luận trước.' },

{ id: 111, lvl: 'N2', category: 'communication', kanji: '本題', furigana: 'ほんだい', mean: 'Vấn đề chính', example: '本題に入りましょう。', ex_mean: 'Vào vấn đề chính nhé.' },
{ id: 112, lvl: 'N2', category: 'communication', kanji: '理解度', furigana: 'りかいど', mean: 'Mức độ hiểu', example: '理解度に差があります。', ex_mean: 'Mức độ hiểu có sự khác nhau.' },
{ id: 113, lvl: 'N2', category: 'communication', kanji: '聞き返す', furigana: 'ききかえす', mean: 'Hỏi lại', example: 'すみません、もう一度聞き返しました。', ex_mean: 'Xin lỗi, tôi hỏi lại lần nữa.' },
{ id: 114, lvl: 'N2', category: 'communication', kanji: '曖昧', furigana: 'あいまい', mean: 'Mơ hồ', example: '表現が少し曖昧です。', ex_mean: 'Cách diễn đạt hơi mơ hồ.' },
{ id: 115, lvl: 'N2', category: 'communication', kanji: '補足', furigana: 'ほそく', mean: 'Bổ sung', example: '補足説明します。', ex_mean: 'Tôi sẽ giải thích bổ sung.' },

{ id: 116, lvl: 'N2', category: 'communication', kanji: '相手', furigana: 'あいて', mean: 'Đối phương', example: '相手の立場を考えます。', ex_mean: 'Tôi nghĩ đến lập trường của đối phương.' },
{ id: 117, lvl: 'N2', category: 'communication', kanji: '伝わる', furigana: 'つたわる', mean: 'Được truyền đạt', example: 'うまく伝わりましたか？', ex_mean: 'Tôi nói đã dễ hiểu chưa?' },
{ id: 118, lvl: 'N2', category: 'communication', kanji: '言い換える', furigana: 'いいかえる', mean: 'Nói cách khác', example: '別の言い方に言い換えます。', ex_mean: 'Tôi nói lại theo cách khác.' },
{ id: 119, lvl: 'N2', category: 'communication', kanji: '納得', furigana: 'なっとく', mean: 'Hiểu và chấp nhận', example: '説明を聞いて納得しました。', ex_mean: 'Nghe giải thích xong tôi thấy hợp lý.' },
{ id: 120, lvl: 'N2', category: 'communication', kanji: '意識', furigana: 'いしき', mean: 'Ý thức', example: '相手を意識して話します。', ex_mean: 'Tôi nói chuyện có để ý người nghe.' },
// ===== COMMUNICATION – N1 =====
{ id: 201, lvl: 'N1', category: 'communication', kanji: '意思表示', furigana: 'いしひょうじ', mean: 'Bày tỏ ý chí', example: '自分の意思をはっきり表示してください。', ex_mean: 'Hãy thể hiện rõ ý chí của mình.' },
{ id: 202, lvl: 'N1', category: 'communication', kanji: '意向', furigana: 'いこう', mean: 'Ý định (trang trọng)', example: '上司の意向を確認します。', ex_mean: 'Tôi xác nhận ý định của cấp trên.' },
{ id: 203, lvl: 'N1', category: 'communication', kanji: '見解', furigana: 'けんかい', mean: 'Quan điểm', example: '会社としての見解を示しました。', ex_mean: 'Công ty đã nêu quan điểm.' },
{ id: 204, lvl: 'N1', category: 'communication', kanji: '発言権', furigana: 'はつげんけん', mean: 'Quyền phát biểu', example: '誰に発言権があるのか。', ex_mean: 'Ai có quyền phát biểu?' },
{ id: 205, lvl: 'N1', category: 'communication', kanji: '配慮', furigana: 'はいりょ', mean: 'Sự để ý, cân nhắc', example: '相手への配慮が欠けています。', ex_mean: 'Thiếu sự cân nhắc cho đối phương.' },

{ id: 206, lvl: 'N1', category: 'communication', kanji: '言い分', furigana: 'いいぶん', mean: 'Lý lẽ của mình', example: '彼にも言い分があります。', ex_mean: 'Anh ta cũng có lý lẽ riêng.' },
{ id: 207, lvl: 'N1', category: 'communication', kanji: '主張', furigana: 'しゅちょう', mean: 'Chủ trương, khẳng định', example: '自分の意見を強く主張しました。', ex_mean: 'Anh ấy khẳng định mạnh ý kiến của mình.' },
{ id: 208, lvl: 'N1', category: 'communication', kanji: '譲歩', furigana: 'じょうほ', mean: 'Nhượng bộ', example: '今回は譲歩するしかありません。', ex_mean: 'Lần này chỉ còn cách nhượng bộ.' },
{ id: 209, lvl: 'N1', category: 'communication', kanji: '歩み寄る', furigana: 'あゆみよる', mean: 'Tiến gần để thỏa hiệp', example: 'お互い歩み寄る必要があります。', ex_mean: 'Hai bên cần nhượng bộ lẫn nhau.' },
{ id: 210, lvl: 'N1', category: 'communication', kanji: '合意', furigana: 'ごうい', mean: 'Đồng thuận', example: '最終的に合意に至りました。', ex_mean: 'Cuối cùng đã đạt được đồng thuận.' },

{ id: 211, lvl: 'N1', category: 'communication', kanji: '認識', furigana: 'にんしき', mean: 'Nhận thức', example: '問題に対する認識が違います。', ex_mean: 'Nhận thức về vấn đề khác nhau.' },
{ id: 212, lvl: 'N1', category: 'communication', kanji: 'すれ違い', furigana: 'すれちがい', mean: 'Lệch nhau trong giao tiếp', example: '認識のすれ違いが原因です。', ex_mean: 'Nguyên nhân là lệch nhận thức.' },
{ id: 213, lvl: 'N1', category: 'communication', kanji: '見落とす', furigana: 'みおとす', mean: 'Bỏ sót', example: '重要な点を見落としました。', ex_mean: 'Tôi đã bỏ sót điểm quan trọng.' },
{ id: 214, lvl: 'N1', category: 'communication', kanji: '言及', furigana: 'げんきゅう', mean: 'Đề cập', example: 'その点には言及しませんでした。', ex_mean: 'Tôi đã không đề cập đến điểm đó.' },
{ id: 215, lvl: 'N1', category: 'communication', kanji: '前提', furigana: 'ぜんてい', mean: 'Tiền đề', example: '前提条件が違います。', ex_mean: 'Điều kiện tiền đề khác nhau.' },

{ id: 216, lvl: 'N1', category: 'communication', kanji: '暗黙', furigana: 'あんもく', mean: 'Ngầm hiểu', example: '暗黙の了解でした。', ex_mean: 'Đó là sự hiểu ngầm.' },
{ id: 217, lvl: 'N1', category: 'communication', kanji: '了承', furigana: 'りょうしょう', mean: 'Chấp thuận (lịch sự)', example: 'ご了承いただけますでしょうか。', ex_mean: 'Xin vui lòng chấp thuận.' },
{ id: 218, lvl: 'N1', category: 'communication', kanji: '見通し', furigana: 'みとおし', mean: 'Triển vọng, dự đoán', example: '今後の見通しを共有します。', ex_mean: 'Chia sẻ triển vọng sắp tới.' },
{ id: 219, lvl: 'N1', category: 'communication', kanji: '打ち合わせ', furigana: 'うちあわせ', mean: 'Buổi trao đổi công việc', example: '事前に打ち合わせを行います。', ex_mean: 'Tiến hành trao đổi trước.' },
{ id: 220, lvl: 'N1', category: 'communication', kanji: '折り合い', furigana: 'おりあい', mean: 'Đi đến thỏa hiệp', example: '意見の折り合いをつける。', ex_mean: 'Đi đến thỏa hiệp ý kiến.' },

{ id: 221, lvl: 'N1', category: 'communication', kanji: '言葉を濁す', furigana: 'ことばをにごす', mean: 'Nói vòng vo', example: '質問に対して言葉を濁しました。', ex_mean: 'Anh ta trả lời vòng vo.' },
{ id: 222, lvl: 'N1', category: 'communication', kanji: '核心', furigana: 'かくしん', mean: 'Trọng tâm', example: '核心に迫る質問です。', ex_mean: 'Câu hỏi đi thẳng trọng tâm.' },
{ id: 223, lvl: 'N1', category: 'communication', kanji: '真意', furigana: 'しんい', mean: 'Ý đồ thực sự', example: '彼の真意が読めません。', ex_mean: 'Tôi không đoán được ý đồ thật.' },
{ id: 224, lvl: 'N1', category: 'communication', kanji: '率直', furigana: 'そっちょく', mean: 'Thẳng thắn', example: '率直に意見を述べました。', ex_mean: 'Tôi nói thẳng ý kiến.' },
{ id: 225, lvl: 'N1', category: 'communication', kanji: '建前', furigana: 'たてまえ', mean: 'Lý do bề ngoài', example: '建前と本音が違います。', ex_mean: 'Bề ngoài và suy nghĩ thật khác nhau.' },
// ===== COMMUNICATION – N1 (tiếp) =====
{ id: 226, lvl: 'N1', category: 'communication', kanji: '本音', furigana: 'ほんね', mean: 'Suy nghĩ thật', example: '本音を言えば、反対です。', ex_mean: 'Nói thật thì tôi phản đối.' },
{ id: 227, lvl: 'N1', category: 'communication', kanji: '言い換える', furigana: 'いいかえる', mean: 'Nói cách khác', example: '言い換えると、失敗です。', ex_mean: 'Nói cách khác là thất bại.' },
{ id: 228, lvl: 'N1', category: 'communication', kanji: '食い違い', furigana: 'くいちがい', mean: 'Mâu thuẫn (ý kiến)', example: '認識に食い違いがあります。', ex_mean: 'Có sự mâu thuẫn trong nhận thức.' },
{ id: 229, lvl: 'N1', category: 'communication', kanji: '一方的', furigana: 'いっぽうてき', mean: 'Một chiều', example: '一方的な説明でした。', ex_mean: 'Đó là giải thích một chiều.' },
{ id: 230, lvl: 'N1', category: 'communication', kanji: '説得', furigana: 'せっとく', mean: 'Thuyết phục', example: '時間をかけて説得しました。', ex_mean: 'Tôi đã thuyết phục mất nhiều thời gian.' },

{ id: 231, lvl: 'N1', category: 'communication', kanji: '妥協', furigana: 'だきょう', mean: 'Thỏa hiệp', example: 'どこかで妥協が必要です。', ex_mean: 'Cần thỏa hiệp ở điểm nào đó.' },
{ id: 232, lvl: 'N1', category: 'communication', kanji: '前向き', furigana: 'まえむき', mean: 'Tích cực', example: '前向きに検討します。', ex_mean: 'Chúng tôi sẽ xem xét tích cực.' },
{ id: 233, lvl: 'N1', category: 'communication', kanji: '後回し', furigana: 'あとまわし', mean: 'Để sau', example: '判断を後回しにします。', ex_mean: 'Tạm hoãn quyết định.' },
{ id: 234, lvl: 'N1', category: 'communication', kanji: '見送る', furigana: 'みおくる', mean: 'Tạm dừng / hoãn', example: '今回は導入を見送ります。', ex_mean: 'Lần này tạm hoãn việc triển khai.' },
{ id: 235, lvl: 'N1', category: 'communication', kanji: '踏み切る', furigana: 'ふみきる', mean: 'Quyết định dứt khoát', example: '最終的に実施に踏み切りました。', ex_mean: 'Cuối cùng đã quyết định thực hiện.' },

{ id: 236, lvl: 'N1', category: 'communication', kanji: '見解の相違', furigana: 'けんかいのそうい', mean: 'Khác biệt quan điểm', example: '見解の相違が明らかになりました。', ex_mean: 'Sự khác biệt quan điểm đã rõ ràng.' },
{ id: 237, lvl: 'N1', category: 'communication', kanji: '結論づける', furigana: 'けつろんづける', mean: 'Đi đến kết luận', example: 'まだ結論づけるのは早いです。', ex_mean: 'Kết luận lúc này còn sớm.' },
{ id: 238, lvl: 'N1', category: 'communication', kanji: '方向性', furigana: 'ほうこうせい', mean: 'Định hướng', example: '今後の方向性を決めます。', ex_mean: 'Xác định định hướng sắp tới.' },
{ id: 239, lvl: 'N1', category: 'communication', kanji: '共通認識', furigana: 'きょうつうにんしき', mean: 'Nhận thức chung', example: '共通認識を持つことが重要です。', ex_mean: 'Có nhận thức chung là quan trọng.' },
{ id: 240, lvl: 'N1', category: 'communication', kanji: '切り出す', furigana: 'きりだす', mean: 'Mở lời (chủ đề khó)', example: '本題を切り出しました。', ex_mean: 'Tôi đã mở lời vào chủ đề chính.' },

{ id: 241, lvl: 'N1', category: 'communication', kanji: '含みを持たせる', furigana: 'ふくみをもたせる', mean: 'Nói nước đôi', example: '発言に含みを持たせました。', ex_mean: 'Anh ấy nói nước đôi.' },
{ id: 242, lvl: 'N1', category: 'communication', kanji: '言葉足らず', furigana: 'ことばたらず', mean: 'Nói chưa đủ ý', example: '私の説明が言葉足らずでした。', ex_mean: 'Giải thích của tôi chưa đủ.' },
{ id: 243, lvl: 'N1', category: 'communication', kanji: '意図的', furigana: 'いとてき', mean: 'Cố ý', example: '意図的な発言でした。', ex_mean: 'Đó là phát biểu có chủ ý.' },
{ id: 244, lvl: 'N1', category: 'communication', kanji: '無意識', furigana: 'むいしき', mean: 'Vô thức', example: '無意識に失礼なことを言いました。', ex_mean: 'Tôi vô thức nói điều thất lễ.' },
{ id: 245, lvl: 'N1', category: 'communication', kanji: '配慮不足', furigana: 'はいりょぶそく', mean: 'Thiếu tinh tế', example: '配慮不足でした。申し訳ありません。', ex_mean: 'Thiếu tinh tế, xin lỗi.' },


];
