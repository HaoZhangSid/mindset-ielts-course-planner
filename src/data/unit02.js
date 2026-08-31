export const courseUnits = [
  { id: "01", title: "Relationships", status: "Đã có" },
  { id: "02", title: "Places and Buildings", status: "Đang soạn" },
  { id: "03", title: "Education and Employment", status: "Nội dung sắp có" },
  { id: "04", title: "Food and Drink", status: "Nội dung sắp có" },
  { id: "05", title: "Consumerism", status: "Nội dung sắp có" },
  { id: "06", title: "Leisure Time", status: "Nội dung sắp có" },
  { id: "07", title: "Fame and the Media", status: "Nội dung sắp có" },
  { id: "08", title: "Natural World", status: "Nội dung sắp có" },
];

const t = (label, headers, rows, extra = {}) => ({ type: "table", label, headers, rows, ...extra });
const c = (label, lines, tone = "yellow", extra = {}) => ({ type: "callout", label, lines, tone, ...extra });
const p = (html) => ({ type: "text", html });
const teacher = (label, lines) => ({ type: "teacher", label, lines, teacherOnly: true });
const checklist = (label, items, note = "Teacher check") => ({ type: "checklist", label, items, note });

export const unit02 = {
  id: "02",
  title: "Places and Buildings",
  subtitle: "Giáo án tiếng Việt tổng hợp | Reading 01-13 · Writing 01-15 · Listening 01-15 · Speaking 01-15",
  source: "Student's Book Unit 02 pp. 24-43 · Teacher's Book Unit 02 pp. 21-29",
  metadata: [
    ["Loại lớp", "IELTS Level 1 1-1 online"],
    ["Trình độ học viên", "Khoảng IELTS 4.0-4.5; mục tiêu Band 5.0-5.5"],
    ["Phạm vi bài học", "Reading 01-13 · Writing 01-15 · Listening 01-15 · Speaking 01-15"],
    ["Nguyên tắc online", "Teacher-student Q&A, role-play, map description và oral retelling; writing task chính thức làm trên lớp hoặc sau giờ học."],
    ["Trọng tâm unit", "Skimming/scanning, paraphrase, map language, past simple active/passive, short answers, spelling và Speaking Part 1."],
  ],
  processOverview: [
    ["Lesson 1 · Reading", "Exercises 01-13", "Skimming, scanning, paraphrase, sentence completion, present simple và past simple qua bài Amazing Homes."],
    ["Lesson 2 · Writing", "Exercises 01-15", "Mô tả thay đổi trên bản đồ, prepositions of place, past simple active/passive và bài Colwick Arts Centre."],
    ["Lesson 3 · Listening", "Exercises 01-15", "Everyday places, spelling names, short answers, numbers, distractors và note-completion exam practice."],
    ["Lesson 4 · Speaking", "Exercises 01-15", "Mô tả hometown, prepositions, adjectives, tense choice, past endings và câu trả lời Part 1."],
    ["Grammar & Vocabulary", "Trong 4 lessons", "Present/past simple, present perfect, passive voice, location phrases, number language và collocations."],
  ],
  coreLanguage: [
    ["Skim và scan", "skim the passage; scan for key words; read around the key word", "Read the passage quickly to get the main idea."],
    ["Paraphrase", "houseboats = homes on the water; permanently = forever", "The question uses different words from the passage."],
    ["Sentence completion", "NO MORE THAN TWO/THREE WORDS; copy from the passage", "The designer hopes to draw attention to the housing shortage."],
    ["Map location", "between; opposite; next to; in front of; behind; to the north of", "The art gallery is between the cinema and the shopping mall."],
    ["Change over time", "was relocated; was built; were demolished; expanded", "The library was relocated to the right of the Founder's Building."],
    ["Speaking tenses", "present simple; past simple; present perfect; used to", "Has your home town changed since you were a child?"],
  ],
  colourLegend: [
    ["Vàng", "Quy trình, Teacher talk và hướng dẫn có thể dùng trực tiếp."],
    ["Xanh lá", "Câu trả lời, bài nói và bài viết mẫu."],
    ["Cam nhạt", "Đáp án, chiến lược và lưu ý ngôn ngữ."],
    ["Đỏ", "Lỗi học viên dễ mắc và cách sửa."],
  ],
  lessons: [
    {
      id: "reading", number: "01", shortTitle: "Reading", icon: "BookOpen", exerciseRange: "Exercises 01-13", duration: "105-115 min",
      title: "Skimming, scanning and sentence completion", description: "Build a fast reading route from unusual homes to an IELTS sentence-completion task.",
      focus: "Amazing Homes; skimming; scanning; paraphrase; sentence completion; present simple and past simple",
      objectives: "Học viên xác định gist, tìm evidence nhanh, nhận ra paraphrase và hoàn thành câu bằng đúng số từ trong bài đọc.",
      sections: [
        { id: "reading-warmup", label: "Lead-in", title: "Activate the topic: where people live", duration: "8 min", blocks: [
          c("Teacher talk", ["<strong>Today we start Unit 02: Places and Buildings.</strong>", "We will read about unusual homes and practise two important Reading skills: skimming and scanning.", "Tell me about the house or apartment you live in. Is it big, small, old or modern?"], "yellow"),
          c("Opening prompts", ["What kind of home do you live in?", "What kind of house would you like to live in?", "Would you prefer a city or a rural area? Explain why."], "yellow"),
          c("Model answer", ["I live in a small apartment in the city. It is modern and close to shops and public transport.", "I would like to live in a house in the country because it would be quieter and closer to nature."], "green"),
          c("Common errors", ["<strong>I live in apartment.</strong> → <strong>I live in an apartment.</strong>", "<strong>It has three rooms big.</strong> → <strong>It has three big rooms.</strong>", "Ask for one reason, not a list of isolated adjectives."], "red"),
        ] },
        { id: "reading-vocabulary", label: "Exercises 01-03", title: "Name unusual homes and set the reading purpose", duration: "15 min", blocks: [
          t("Accommodation vocabulary", ["Word", "Meaning / teaching prompt"], [
            ["treehouse", "a home or room built among trees"], ["houseboat", "a home on the water"], ["shipping-container home", "a home made from one or more large containers"], ["igloo", "a house made of ice"], ["see-through house", "a house with glass walls"], ["one-metre-square house", "a very small house with a one-metre side"],
          ]),
          teacher("Teacher move", ["Cho học viên ghép từ với hình trong Student's Book, sau đó hỏi <em>Which one would you like to live in?</em>.", "Không giải thích mọi từ mới trước khi đọc. Mục tiêu là để học viên đoán nghĩa qua caption và ngữ cảnh." ]),
          t("Exercise 03 choices", ["Option", "Answer / reason"], [["a", "Life in different cities around the world"], ["b", "Unusual places to live or stay around the world"], ["c", "The type of houses and flats most people live in"]], { fill: "peach" }),
        ] },
        { id: "skim-scan", label: "Exercises 04-06", title: "Skim first, then scan for exact words", duration: "18 min", blocks: [
          c("Reading strategy", ["<strong>Skimming</strong> = read quickly for the main idea; do not stop at every word.", "<strong>Scanning</strong> = move your eyes quickly to locate a name, place or key word.", "Give exactly one minute for the gist task. Ask the learner to explain which content words they noticed."], "yellow"),
          t("Exercise 04: gist", ["Question", "Answer"], [["What is the passage about?", "b · Unusual places to live or stay around the world"]], { fill: "peach" }),
          t("Exercise 05: scanning targets", ["Target", "Where it appears"], [["treehouse", "Paragraph F"], ["shipping containers", "Paragraph D"], ["houseboat", "Paragraph B"], ["igloo", "Paragraph E"], ["see-through house", "Paragraph C"], ["House NA", "Paragraph D"]]),
          t("Exercise 06: skill check", ["Activity", "Skill"], [["Read in one minute and choose the topic", "Skimming"], ["Find the words from the box quickly", "Scanning"]], { fill: "peach" }),
        ] },
        { id: "paraphrase", label: "Exercises 07-08", title: "Recognise paraphrase before choosing an answer", duration: "18 min", blocks: [
          t("Exercise 07 matching", ["Text phrase", "Paraphrase"], [["houseboats", "c · homes on the water"], ["permanently", "e · forever, always"], ["privacy", "a · not being watched by others"], ["surrounded by the natural world", "f · having nature all around"], ["uncomfortable", "b · not feeling pleasant"], ["Sweden, Norway and Finland", "d · Nordic countries"]], { fill: "peach" }),
          t("Exercise 08 multiple choice", ["Sentence from text", "Answer", "Why"], [["The treehouse had everything we needed.", "B", "very well equipped = had everything needed"], ["Some houseboats can be moved to other parts of the river.", "A", "not all are permanently fixed"], ["One house in Chile was built from 12 containers.", "B", "12 containers made one house"]]),
          c("Teacher prompts", ["Which words in the question are not repeated exactly in the passage?", "What is the closest meaning of <em>well equipped</em>?", "Ask the learner to paraphrase one sentence orally before revealing the key."], "yellow"),
        ] },
        { id: "sentence-completion", label: "Exercise 09", title: "Complete sentences within the word limit", duration: "18 min", blocks: [
          p("Explain that the missing words must come from the passage. The learner first underlines the sentence key words, predicts the part of speech, scans for a matching idea and then checks grammar and word count."),
          t("Sentence-completion answers", ["Question", "Answer", "Evidence / paraphrase"], [["1", "suit everyone", "It wouldn't suit everyone."], ["2", "draw attention", "He built it to draw attention to the world housing shortage."], ["3", "reindeer skins", "They used reindeer skins to keep warm."], ["4", "busy lives", "It was a place to get away from their busy lives."]], { fill: "peach" }),
          c("Answer diagnosis", ["<strong>transparent house</strong> is a paraphrase of <strong>see-through house</strong>.", "The answer must fit the sentence grammar after <em>wouldn't</em>.", "Do not write a full sentence when the instruction asks for no more than two words."], "red"),
        ] },
        { id: "reading-grammar", label: "Exercises 10-12", title: "Use tense clues while reading", duration: "16 min", blocks: [
          t("Exercise 10: tense map", ["Question", "Answer"], [["Which tenses does the passage use?", "c · both present and past"], ["Describe the houses", "present simple"], ["Describe habits or things always true", "present simple"], ["Describe holiday experiences", "past simple"], ["Talk about designing/building", "past simple"]], { fill: "peach" }),
          t("Exercise 11: choose the tense", ["No.", "Answer"], [["1", "live"], ["2", "have"], ["3", "moved"], ["4", "spends"], ["5", "preferred"]]),
          t("Exercise 12: complete the verbs", ["No.", "Answer"], [["1", "shares"], ["2", "lived"], ["3", "stayed"], ["4", "has"], ["5", "moved"]], { fill: "peach" }),
          c("Grammar checkpoint", ["Present simple describes current facts: <em>Most people live in a house or a flat.</em>", "Past simple describes a completed event: <em>Franz spent the night in one.</em>", "Ask the learner to underline time markers such as <em>nowadays, in the past, in 2010</em>."], "yellow"),
        ] },
        { id: "reading-exam", label: "Exercise 13", title: "Exam practice: A warm welcome", duration: "22 min", blocks: [
          p("Set a timed first attempt. The learner should skim the passage, underline key words in each sentence, scan for the relevant paragraph and quote only the required words."),
          t("Answer key with evidence", ["Question", "Answer", "Evidence"], [["1 The writer's mother often cooks ...", "roast chicken", "my mum's roast chicken in the oven"], ["2 She thought the visit to Germany would make her feel ...", "homesick and sad", "I knew I would spend three weeks, homesick and sad"], ["3 Brigitte came to pick up the girl with ...", "her parents", "Behind her stood her parents"], ["4 The Schmitt family's pets' names are ...", "Ping and Pong", "They had two cats, Ping and Pong"], ["5 From her bedroom the girl could see a ...", "forest", "looked out onto a forest"], ["6 The girl and her family tried hard to make Brigitte ...", "feel at home / feel welcome", "help Brigitte feel at home with us"]], { fill: "peach" }),
          c("Exit ticket", ["Define <strong>skimming</strong> and <strong>scanning</strong> in English.", "Give two paraphrases from <em>Amazing Homes</em>.", "Complete: <em>People who stay in igloos use ... to keep warm.</em> → <strong>reindeer skins</strong>."], "yellow"),
          c("Homework", ["Write five sentence-completion questions about <em>Amazing Homes</em>; use a different word limit for at least two.", "Record 60 seconds: <em>Describe an unusual place you would like to stay.</em> Use one present and one past sentence."], "peach"),
        ] },
      ],
    },
    {
      id: "writing", number: "02", shortTitle: "Writing", icon: "FileText", exerciseRange: "Exercises 01-15", duration: "110-120 min",
      title: "Describe changes on a map", description: "Turn two campus maps into a clear Task 1 response with precise location and change language.",
      focus: "Sunnyhills University maps; prepositions of place; past simple; active/passive; introduction and overview; Colwick Arts Centre",
      objectives: "Học viên mô tả vị trí, chọn thay đổi nổi bật và viết bài Task 1 khoảng 150 từ bằng past simple active/passive.",
      sections: [
        { id: "writing-warmup", label: "Lead-in", title: "Read a map as a set of facilities", duration: "10 min", blocks: [
          c("Teacher talk", ["Today we will describe how a place changed over time.", "Look at the Sunnyhills University maps. First name the facilities; then tell me what moved, what was added and what disappeared.", "Use short location phrases such as <em>next to, opposite, in the top right-hand corner</em>."], "yellow"),
          t("Exercise 01: campus facilities", ["Facilities in the box", "Online handling"], [["bank; gym; cafes; bus stop; library; post office", "Ask the learner to classify each facility and say whether it appears on the map."], ["car park; laboratories; tennis courts; halls of residence", "Learner points to or names the location."], ["lecture theatres; recreation area", "Ask for one imagined extra facility and its location."]]),
          t("Exercise 02: shown on the maps", ["Facility", "Present on the maps"], [["bus stop", "Yes"], ["recreation area", "Yes"], ["cafes", "Yes"], ["car parks", "Yes"], ["library / laboratories", "Yes"], ["Students' Union", "Yes"], ["squash courts / gym", "Yes"], ["halls of residence / tennis courts", "Yes"]], { fill: "peach" }),
        ] },
        { id: "prepositions", label: "Exercises 03-05", title: "Locate facilities accurately", duration: "22 min", blocks: [
          t("Exercise 03: true statements", ["No.", "Answer", "Map evidence"], [["1", "True", "Founder's Building is between Watson Building and Scott Library."], ["2", "True", "Bus stop is in the upper right-hand corner."], ["3", "False", "Halls of residence are not opposite Students' Union."], ["4", "False", "There is one car park today."], ["5", "True", "There are two places to eat."], ["6", "False", "Main reception is at the top left."], ["7", "True", "Students' Union moved buildings."], ["8", "False", "The car park was not moved towards the bottom."]], { fill: "peach" }),
          t("Exercise 04: prepositions", ["No.", "Answer"], [["1", "next to"], ["2", "of"], ["3", "between"], ["4", "opposite"], ["5", "on"], ["6", "in"], ["7", "to / on"], ["8", "of"]]),
          t("Exercise 05: possible answers", ["Prompt", "Answer"], [["1", "The halls of residence are on the left side of the campus."], ["2", "The laboratories are opposite the Founder's Building."], ["3", "The bus stop is in the top right-hand corner."], ["4", "The recreation area is next to the laboratories and the Scott Library."], ["5", "The table tennis tables are in front of / next to the Scott Library."], ["6", "The Students' Union is between the gym and the bus stop."]], { fill: "peach" }),
          c("Common errors", ["<strong>in the left</strong> → <strong>on the left</strong>.", "<strong>opposite to the library</strong> is possible in some varieties, but use <strong>opposite the library</strong> consistently here.", "<strong>between A to B</strong> → <strong>between A and B</strong>."], "red"),
        ] },
        { id: "writing-model", label: "Exercises 06-10", title: "Build introduction, overview and change vocabulary", duration: "22 min", blocks: [
          t("Exercise 06: model answer features", ["Feature", "Example"], [["Verbs of change", "was relocated; increased; were moved; was built; were demolished; created; developed; expanded"], ["Location expressions", "in front of; to the right; in the top left-hand corner; the far left; opposite"], ["Addition / contrast", "in addition; what is more; whereas; however"], ["Time / visual reference", "in 1995; during this period; we can see; it is clear"]], { fill: "peach" }),
          t("Exercise 07: essay architecture", ["Item", "Answer"], [["1 introductory sentence", "b · a description of what the data shows"], ["2 concluding sentence", "c · writing the most important points again"], ["3 overview", "a · a summary of the main points"]]),
          t("Exercise 08: useful vocabulary", ["Meaning", "Answer"], [["moved to a different place", "relocated"], ["made", "created / developed"], ["knocked down", "demolished"], ["got bigger", "expanded / increased in size"]]),
          t("Exercise 09: past forms", ["Infinitive", "Past simple", "Type"], [["make", "made", "irregular"], ["be", "was/were", "irregular"], ["build", "built", "irregular"], ["increase", "increased", "regular"], ["move", "moved", "regular"]]),
          c("Writing architecture", ["Paragraph 1: paraphrase the task and give an overview.", "Body paragraphs: group related changes, for example buildings, recreation and transport.", "Use a mixture of active and passive forms; do not list every map label without comparison."], "yellow"),
        ] },
        { id: "writing-grammar", label: "Exercises 11-14", title: "Past simple active and passive", duration: "20 min", blocks: [
          t("Exercise 11: complete the past forms", ["No.", "Answer"], [["1 They ___ trees.", "cut"], ["2 The old cafe ___ the new library.", "became"], ["3 Students ___ the bus.", "caught"], ["4 The university ___ laboratories.", "needed"], ["5 They ___ tables.", "put"], ["6 There ___ not enough halls.", "were"], ["7 They ___ a pond.", "dug"], ["8 They ___ new trees.", "planted"]], { fill: "peach" }),
          t("Exercise 12: regular or irregular", ["Regular verbs", "Irregular verbs"], [["needed; planted", "became; caught; put; were; dug"]]),
          t("Exercise 13: voice", ["Sentence", "Answer"], [["The library was relocated.", "Passive"], ["They also built two new cafes.", "Active"], ["The university created a recreation area.", "Active"], ["The old gym and tennis courts were demolished.", "Passive"]]),
          t("Exercise 14: change active to passive", ["Active", "Passive"], [["The university expanded the campus.", "The campus was expanded."], ["They planted trees in the recreation area.", "Trees were planted in the recreation area."], ["The authorities moved the bus stop.", "The bus stop was moved."], ["They built a new main reception.", "A new main reception was built."]], { fill: "peach" }),
          c("Grammar checkpoint", ["Passive = <strong>was/were + past participle</strong>.", "Active foregrounds the doer: <em>The university created ...</em>.", "Passive foregrounds the changed place or facility: <em>The library was relocated ...</em>."], "yellow"),
        ] },
        { id: "colwick", label: "Exercise 15", title: "Exam task: Colwick Arts Centre", duration: "28 min", blocks: [
          p("Give the learner the full 150-word task. Before writing, ask them to identify the biggest changes: outdoor area developed, cafe moved, galleries changed, drama studio added, concert hall and cinema separated, meeting room constructed."),
          t("Planning grid", ["Area", "2005", "Today / change"], [["Outside", "wasteland", "trees and outdoor exhibition/performance area"], ["Front", "cafe", "cafe moved; tables added"], ["Inside", "two galleries", "one gallery; drama studio built; central exhibition area"], ["Facilities", "concert hall and cinema together", "separate spaces; meeting room added; toilets moved"]]),
          c("Model answer", ["<strong>The maps show the changes to Colwick Arts Centre between 2005 and the present day. We can see that the Centre expanded and new facilities were added during this period.</strong>", "One major change is that the outside area was developed. Trees were planted there and an outdoor exhibition area was made. The cafe was moved to the front and tables were added outside. Inside, a central exhibition area was created and the information desk was moved. In the past there were two galleries but now there is only one; however, a drama studio was built. The concert hall and cinema are now separate, and an extra meeting room was constructed. The toilets moved to the opposite side.", "<strong>So, it is clear that Colwick Arts Centre is more attractive today and has better facilities than in 2005.</strong>"], "green"),
          checklist("150-word writing checklist", ["The introduction names both maps and the time period.", "The overview summarises the main change, not minor labels.", "Prepositions describe where facilities are/were.", "Past simple active and passive forms are accurate.", "The essay selects and compares rather than listing every detail."], "Teacher check"),
          t("Feedback codes", ["Code", "Focus"], [["Sp", "spelling"], ["Gr", "grammar"], ["T", "tense"], ["P", "punctuation"], ["L", "linking / sequencing"]], { fill: "peach", compact: true }),
          c("Homework", ["Rewrite the Colwick Arts Centre essay after correcting three priority errors.", "Highlight the introduction, overview, every past passive form and every location phrase."], "peach"),
        ] },
      ],
    },
    {
      id: "listening", number: "03", shortTitle: "Listening", icon: "Lightbulb", exerciseRange: "Exercises 01-15", duration: "100-110 min",
      title: "Short answers, spelling and numbers", description: "Train Section 1 listening accuracy through places, names, prices, times and corrections.",
      focus: "Everyday situations; spelling names and websites; short answers; numbers; distractors; note completion",
      objectives: "Học viên nhận diện bối cảnh, ghi chính xác tên và số, theo dõi correction và kiểm tra spelling/word limit.",
      sections: [
        { id: "listening-warmup", label: "Exercises 01-03", title: "Identify places and everyday situations", duration: "15 min", blocks: [
          c("Teacher talk", ["In Listening Section 1, the situation is familiar, but the answer may be hidden among extra details.", "First identify the place and the speakers. Then listen for the exact answer.", "Today we will practise a sports centre conversation and a bank conversation."], "yellow"),
          t("Exercise 01: picture labels", ["Letter", "Place"], [["A", "sports centre"], ["B", "museum"], ["C", "bank"], ["D", "railway station"], ["E", "bus stop"], ["F", "restaurant"], ["G", "harbour"]]),
          t("Exercise 02: categories", ["Category", "Words"], [["Travel and transport", "harbour; railway station; bus stop"], ["Sports and leisure", "sports centre; restaurant"], ["Arts and culture", "museum"], ["Money", "bank"]], { fill: "peach" }),
          t("Exercise 03: where are the speakers?", ["Conversation", "Answer", "Clue"], [["1", "sports centre", "swimming pool, squash courts, gym, tennis courts"], ["2", "bank", "open a savings account and complete an application"]], { fill: "peach" }),
          c("Listening strategy", ["Yêu cầu học viên nói rõ <em>clue</em> nghe được, không chỉ đọc đáp án.", "Với lớp 1-1, giáo viên có thể đọc lại một câu chứa clue, sau đó hỏi <em>What place is this?</em>.", "Cho nghe lần đầu không có transcript; chỉ mở transcript khi chữa lỗi hoặc phân tích spelling."], "yellow"),
        ] },
        { id: "spelling", label: "Exercises 04-05", title: "Spell names, addresses and websites", duration: "18 min", blocks: [
          t("Exercise 04 answers", ["Question", "Answer"], [["1 website", "www.getactive.com"], ["2 man's first name", "James"], ["3 surname", "Clarke"], ["4 address", "22 Waddington Road"]], { fill: "peach" }),
          t("Exercise 05 spelling language", ["Prompt", "Answer"], [["Is that all one word?", "all one word"], ["with an 'e' or without?", "with"], ["Where is the letter?", "at the end"], ["Double letter?", "double D"]]),
          c("Pronunciation focus", ["Luyện alphabet, đặc biệt <strong>e / i</strong> và cách nói <strong>double D</strong>.", "Teacher đọc một tên/email tự tạo; học viên ghi lại, sau đó đổi vai.", "Nhắc học viên: spelling sai thì Listening mark vẫn sai dù hiểu đúng bối cảnh."], "yellow"),
          c("Common errors", ["<strong>getaktive.com</strong> → <strong>getactive.com</strong>.", "<strong>Wadington</strong> → <strong>Waddington</strong> (double D).", "Không bỏ số nhà trong <strong>22 Waddington Road</strong>."], "red"),
        ] },
        { id: "short-answer-prep", label: "Exercises 06-08", title: "Read the question type before listening", duration: "15 min", blocks: [
          t("Exercise 06: underline key words", ["No.", "Key words"], [["1", "what; speakers order; restaurant"], ["2", "how much; each person; meal"], ["3", "what time; bus due"], ["4", "where; bus stop"], ["5", "how long; course"], ["6", "TWO things; speaker did; course"], ["7", "date; next course"], ["8", "who; lead; course"]]),
          t("Exercise 07: answer type", ["Information needed", "Question"], [["a date", "7"], ["a price", "2"], ["a period of time", "5"], ["a time", "3"], ["a meal / food", "1"], ["a person's name", "8"], ["activities / skills", "6"], ["a place", "4"]], { fill: "peach" }),
          t("Exercise 08: number only", ["Question numbers", "Answer"], [["Which questions need a number?", "2, 3, 5 and 7"]]),
          c("Teacher move", ["Trước khi nghe, yêu cầu học viên dự đoán dạng đáp án: number, place, food, name hay activity.", "Nhấn mạnh instruction: <strong>NO MORE THAN ONE WORD AND/OR A NUMBER</strong> khác với <strong>NO MORE THAN TWO WORDS</strong>."], "yellow"),
        ] },
        { id: "number-distractors", label: "Exercises 09-12", title: "Follow the correction, not the first number", duration: "25 min", blocks: [
          t("Exercise 09: restaurant", ["Question", "Answer", "Evidence"], [["1 What did both speakers order?", "steak", "They enjoyed the steak."], ["2 How much did each person pay?", "20", "The bill was £40, so it was £20 per person."]], { fill: "peach" }),
          t("Exercise 10: shopping mall", ["Question", "Answer", "Why"], [["What did the boy buy?", "shoes", "The instruction allows one word; do not write 'he bought shoes'."]]),
          t("Exercise 11: bus", ["Question", "Answer", "Distractor"], [["1 What time is the bus due?", "7.50 / seven fifty", "7.15 is an earlier possibility; 'seven fiftty' is misspelled."], ["2 Where is the bus stop?", "Blythe Road", "Blyth / Blith / Blithe without the final e are wrong."]], { fill: "peach" }),
          t("Exercise 12: sailing course", ["Question", "Answer"], [["1 How long?", "two days / 2 days"], ["2 First thing learnt", "safety rules"], ["3 Date of next course", "1st of September / 1 September"], ["4 Who will lead it?", "Jon Galloway"]]),
          c("Distractor clinic", ["Nghe thấy nhiều numbers không có nghĩa tất cả đều là đáp án.", "Tìm correction markers: <em>No, no</em>; <em>the day after</em>; <em>fifteen, not fifty</em>.", "Sau khi chữa, yêu cầu học viên giải thích bằng English vì sao đáp án còn lại sai."], "yellow"),
        ] },
        { id: "listening-exam", label: "Exercises 13-15", title: "Exam skills: city bike tour", duration: "25 min", blocks: [
          t("Exercise 13: number-only check", ["Question", "Number only?"], [["3 How many people were on the tour?", "Yes"], ["5 How much did each student pay?", "Yes"], ["Other questions", "No; they need words, a name, a place or a website"]]),
          t("Exercise 14: key words", ["No.", "Key words"], [["1", "kind of tour"], ["2", "how found out"], ["3", "how many people"], ["4", "address of hire shop"], ["5", "how much each student"], ["6-7", "TWO items included"], ["8", "website address"]]),
          t("Exercise 15 answer key", ["Question", "Answer", "Evidence"], [["1", "bike / cycle / cycling tour", "I did a bike tour."], ["2", "by email", "I was sent an email."], ["3", "eight / 8", "There were only eight places."], ["4", "22 Barkway Street", "Number 22 Barkway Street."], ["5", "fifteen / 15 dollars", "The cost was fifteen dollars per person."], ["6-7", "helmet and lock", "Both were included."], ["8", "tradelectric.com", "Spelled T-R-A-D-E-L-E-C-T-R-I-C all one word."]], { fill: "peach" }),
          c("Exit ticket", ["Spell <strong>Barkway</strong>, <strong>Galloway</strong> and <strong>Blythe</strong> aloud.", "Explain why <strong>fifty dollars</strong> is not the answer in the bike-tour conversation.", "Answer one short-answer question with the exact word limit."], "yellow"),
          c("Homework", ["Listen to the Unit 02 scripts and record every number, correction phrase and spelling item.", "Create a personal number drill: 15/50, 19/90, 7.15/7.50 and 318/380."], "peach"),
        ] },
      ],
    },
    {
      id: "speaking", number: "04", shortTitle: "Speaking", icon: "GraduationCap", exerciseRange: "Exercises 01-15", duration: "105-115 min",
      title: "Describe your home town with accurate tenses", description: "Build a flexible Speaking Part 1 answer using map language, paired adjectives and tense control.",
      focus: "Home town; prepositions; descriptive adjectives; present simple, past simple, present perfect; past endings",
      objectives: "Học viên mô tả hometown rõ vị trí, dùng adjective pairs, chọn tense theo câu hỏi và nói khoảng 20 giây mỗi câu.",
      sections: [
        { id: "speaking-warmup", label: "Exercises 01-02", title: "Choose the tense, then answer", duration: "12 min", blocks: [
          c("Teacher talk", ["Part 1 questions are about familiar places and experiences.", "Listen to the time reference in the question. It tells you whether to use the present simple, past simple or present perfect.", "Answer first, then add a reason and one detail."], "yellow"),
          t("Exercise 01: tense choice", ["Question", "Correct tense", "Example"], [["Is there much for young people to do in your home town?", "Present simple", "There are lots of things to do."], ["What was your home town like in the past?", "Past simple", "There were more factories."], ["Has your home town changed since you were a child?", "Present perfect", "Many things have changed."]], { fill: "peach" }),
          c("Opening prompts", ["Where do you live now?", "What is the best place in your town?", "What has changed in your town recently?"], "yellow"),
        ] },
        { id: "town-map", label: "Exercises 03-04", title: "Use prepositions to describe a town map", duration: "20 min", blocks: [
          t("Exercise 03 map key", ["Place", "Map label"], [["town hall", "H"], ["library", "G"], ["art gallery", "B"], ["cinema", "A"], ["shopping mall", "C"], ["harbour", "D"], ["stadium", "E"], ["swimming pool", "F"]], { fill: "peach" }),
          t("Exercise 04 location phrases", ["Place", "Description from the script"], [["town hall", "in the centre, on the north side of the square"], ["fountain", "in front of the town hall"], ["library", "opposite the town hall"], ["art gallery", "over the bridge; between the cinema and shopping mall"], ["harbour", "to the south of the town"], ["stadium", "next to the harbour"], ["swimming pool", "just behind the stadium"]]),
          c("Teacher move", ["Cho học viên nghe và điền map trước; chỉ dùng transcript để kiểm tra sau lần nghe thứ hai.", "Sau đó che transcript và yêu cầu học viên nói lại vị trí bằng ít nhất năm prepositions.", "Trong 1-1, giáo viên có thể vẽ một map đơn giản và yêu cầu học viên chỉ đường bằng lời."], "yellow"),
        ] },
        { id: "town-vocabulary", label: "Exercises 05-08", title: "Build natural adjective pairs", duration: "22 min", blocks: [
          t("Exercise 05: headings", ["Heading", "Words"], [["Location", "on the coast; in the north-east; in the centre; inland"], ["Opinion", "busy; crowded; dirty; exciting; lively; quiet"], ["Climate", "hot; humid; mild; cool"], ["Areas", "outdoor; financial; business; tourist"], ["Buildings", "tall; historic; modern; old; high-rise"]]),
          t("Exercise 06: classify extra words", ["Heading", "Words"], [["Opinion", "colourful; incredible; magnificent; polluted"], ["Climate", "cool"], ["Location", "in the south; indoor"], ["Areas", "tourist"], ["Buildings", "ancient; narrow; enormous; high-rise; huge"]], { fill: "peach" }),
          t("Exercise 07: adjective pairs", ["No.", "Answer"], [["1", "tall and high-rise"], ["2", "hot and humid"], ["3", "cool and mild"], ["4", "dirty and polluted"], ["5", "lively and exciting"]]),
          t("Exercise 08: possible photo language", ["Photo / place", "Possible adjectives"], [["1", "huge; incredible; magnificent; busy; crowded; exciting"], ["2", "ancient; flat; outdoor; narrow; historic; quiet"], ["3", "hot; humid; crowded; colourful; lively; exciting"]]),
          c("Vocabulary strategy", ["Khuyến khích học viên học theo cụm: <em>busy and crowded</em>, <em>hot and humid</em>, <em>lively and exciting</em>.", "Hỏi: <em>Which pair describes your town? Which pair does not?</em>", "Không sửa từng từ khi học viên đang fluency; ghi lỗi và sửa sau lượt nói."], "yellow"),
        ] },
        { id: "speaking-tenses", label: "Exercises 09-11", title: "Echo the question and control the tense", duration: "20 min", blocks: [
          t("Exercise 09: examiner questions", ["Question", "Tense"], [["Where did you grow up?", "Past simple"], ["Is it a good place to live?", "Present simple"], ["Do you think it has changed a lot?", "Present perfect"]]),
          t("Exercise 10: dialogue answers", ["Gap", "Answer"], [["1", "was"], ["2", "is"], ["3", "was"], ["4", "grew up"], ["5", "is"], ["6", "has changed"], ["7", "didn't have"], ["8", "wasn't"], ["9", "is"], ["10", "used to"], ["11", "was"], ["12", "went"]], { fill: "peach" }),
          t("Exercise 11: own ideas", ["Prompt", "Answer frame"], [["Where were you born?", "I was born in ..."], ["Where did you grow up?", "I grew up in ..."], ["Has your town changed?", "In the last ... it has changed ..."], ["What did you use to do?", "I used to ... but now ..."]]),
          c("Teacher prompts", ["<em>Echo</em> the question once to gain thinking time, but do not repeat every question mechanically.", "Ask the learner to underline the time phrase before answering.", "Contrast <strong>I used to go</strong> (past habit) with <strong>I went</strong> (one completed event)."], "yellow"),
        ] },
        { id: "past-pronunciation", label: "Exercises 12-13", title: "Pronounce past simple endings", duration: "15 min", blocks: [
          t("Exercise 12 pronunciation", ["/t/", "/d/", "/ɪd/"], [["bought; built; developed; used to", "called; changed; designed; discovered; said", "situated; located; started"]], { fill: "peach" }),
          t("Exercise 13 sentence frames", ["No.", "Model"], [["1", "Our family bought an apartment in the middle of town."], ["2", "The statue was built in 1985."], ["3", "Our town is situated on the Yangtze River."], ["4", "The shopping mall is called the Galleria."], ["5", "The library is located across from the swimming pool."], ["6", "Many things have changed over the years in my home town."], ["7", "A number of new apartments were developed by the harbour."]]),
          c("Pronunciation focus", ["<strong>/t/</strong>: bought, built; <strong>/d/</strong>: called, changed; <strong>/ɪd/</strong>: situated, located.", "Yêu cầu học viên nghe, lặp lại, sau đó đặt mỗi verb trong một câu về hometown.", "Chỉ sửa âm cuối có ảnh hưởng đến hiểu; giữ confidence cho lượt nói dài."], "yellow"),
        ] },
        { id: "speaking-exam", label: "Exercises 14-15", title: "Answer Part 1 questions for 20 seconds", duration: "20 min", blocks: [
          t("Exercise 14 listening match", ["Speaker", "Main idea", "Answer"], [["1", "Things to do", "b · parks, cinema and ice skating"], ["2", "Sport facilities", "a · one swimming pool"], ["3", "Historic place", "c · an ancient castle"], ["4", "Transport", "d · traffic jams but modern underground"]], { fill: "peach" }),
          t("Exercise 15 exam prompts", ["Question", "Answer structure"], [["Is there much for young people to do?", "Place/activity + frequency + reason"], ["What was your town like in the past?", "Past description + comparison with now"], ["Has it changed since childhood?", "Present perfect + two examples"], ["What is the best place to visit?", "Place + location + personal opinion"], ["What do you dislike about it?", "Problem + effect + possible solution"]]),
          checklist("Speaking self-check", ["I answered the exact tense in the question.", "I used at least two prepositions of place.", "I used an adjective pair such as busy and crowded.", "I added a reason and a concrete detail.", "I spoke for about 20 seconds without reading."], "Learner check"),
          c("Model answer", ["<strong>I live in a small town in the north of my country. It is quite busy and crowded in the centre, but there are quiet parks near the river. The best place to visit is the old market because it is colourful and full of local food.</strong>"], "green"),
          c("Exit ticket", ["Describe your hometown using <strong>between, opposite, next to</strong>.", "Answer one present simple, one past simple and one present perfect question.", "Say <strong>located, called, started</strong> and identify the ending sound."], "yellow"),
          c("Homework", ["Record a 90-second hometown answer with five location phrases, four adjective pairs and three tenses.", "Listen to the recording once and mark one grammar error, one vocabulary improvement and one pronunciation target."], "peach"),
        ] },
      ],
    },
  ],
  finalReview: {
    duration: "25 min",
    reviewRows: [
      ["Reading", "Skim for gist, scan for evidence, recognise paraphrase and keep sentence-completion answers inside the word limit."],
      ["Writing", "Describe a map with prepositions, an overview and past simple active/passive verbs."],
      ["Listening", "Predict answer type, spell names, distinguish numbers and follow final corrections."],
      ["Speaking", "Describe a hometown with paired adjectives, accurate tense choice and clear past endings."],
    ],
    errorRows: [
      ["1", "Reading: do not translate every word; locate the relevant paragraph and copy exact words."],
      ["2", "Writing: use between A and B; passive = was/were + past participle."],
      ["3", "Listening: 7.50 is not 7.15; Blythe includes a final e; write the requested number of words."],
      ["4", "Speaking: match present, past and present perfect to the examiner's question."],
      ["5", "Pronunciation: distinguish /t/, /d/ and /ɪd/ in past forms."],
    ],
    challenge: [
      "Explain an unusual home using one paraphrase and two present simple sentences.",
      "Describe one map change with a preposition, a past active verb and a past passive verb.",
      "Answer a hometown question for 20 seconds using an adjective pair and a reason.",
    ],
    homework: [
      "Submit the 150-word Colwick Arts Centre map report after using the Sp / Gr / T / P / L codes.",
      "Record the hometown Speaking task and self-check five location phrases and three tenses.",
      "Create a Unit 02 vocabulary page with unusual homes, map phrases, change verbs and number contrasts.",
    ],
    quickReference: [
      ["Student's Book", "Unit 02 pp. 24-43; mark Amazing Homes, Sunnyhills maps, Listening scripts and hometown map."],
      ["Teacher's Book", "Unit 02 pp. 21-29; check answer keys, transcript guidance, alternatives and feedback notes."],
      ["Board plan", "skim -> scan -> paraphrase -> evidence; between/opposite/next to; past active/passive; answer + reason + detail."],
      ["Listening prep", "Prepare spelling pairs, 15/50, 19/90, 7.15/7.50 and 318/380."],
      ["Feedback record", "Keep one error log for word limit, prepositions, tense, spelling and pronunciation."],
    ],
  },
};
