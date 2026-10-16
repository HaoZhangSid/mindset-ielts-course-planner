export const courseUnits = [
  { id: "01", title: "Relationships", status: "Đã có" },
  { id: "02", title: "Places and Buildings", status: "Đã có" },
  { id: "03", title: "Education and Employment", status: "Đã có" },
  { id: "04", title: "Food and Drink", status: "Đã có" },
  { id: "05", title: "Consumerism", status: "Đã có" },
  { id: "06", title: "Leisure Time", status: "Nội dung sắp có" },
  { id: "07", title: "Fame and the Media", status: "Nội dung sắp có" },
  { id: "08", title: "Natural World", status: "Nội dung sắp có" },
];

const t = (label, headers, rows, extra = {}) => ({ type: "table", label, headers, rows, ...extra });
const c = (label, lines, tone = "yellow", extra = {}) => ({ type: "callout", label, lines, tone, ...extra });
const p = (html) => ({ type: "text", html });
const teacher = (label, lines) => ({ type: "teacher", label, lines, teacherOnly: true });
const checklist = (label, items, note = "Teacher check") => ({ type: "checklist", label, items, note });

export const unit03 = {
  id: "03",
  title: "Education and Employment",
  subtitle: "Giáo án tiếng Việt tổng hợp | Reading 01-09 · Writing 01-15 · Listening 01-16 · Speaking 01-20",
  source: "Student's Book Unit 03 pp. 44-64 · Teacher's Book Unit 03 pp. 30-38",
  metadata: [
    ["Loại lớp", "IELTS Level 1 1-1 online"],
    ["Trình độ học viên", "Khoảng IELTS 4.0-4.5; mục tiêu Band 5.0-5.5"],
    ["Phạm vi bài học", "Reading 01-09 · Writing 01-15 · Listening 01-16 · Speaking 01-20"],
    ["Nguyên tắc online", "Teacher-student Q&A, guided planning, timed speaking, transcript repair và feedback theo từng kỹ năng."],
    ["Trọng tâm unit", "Multiple choice, topic sentences, present perfect, charts and numbers, sentence completion, distractors, Speaking Part 1 và Part 2."],
  ],
  processOverview: [
    ["Lesson 1 · Reading", "Exercises 01-09", "Globalised education; key words; scanning; main ideas; multiple choice; present perfect; work-based learning."],
    ["Lesson 2 · Writing", "Exercises 01-15", "Line/bar/pie/table; change verbs; number prepositions; selecting salient data; literacy bar chart Task 1."],
    ["Lesson 3 · Listening", "Exercises 01-16", "Jobs and courses; sentence completion; word limits; grammar traps; synonym order; Food Photography course."],
    ["Lesson 4 · Speaking", "Exercises 01-20", "Work/study vocabulary; -ed/-ing adjectives; Part 1; consonant clusters; Part 2 notes and two-minute talk."],
    ["Grammar & Vocabulary", "Trong 4 lessons", "Present perfect; trend language; countable answer forms; suffix clues; -ed/-ing adjectives; future planning language."],
  ],
  coreLanguage: [
    ["Multiple choice", "key words; sentence stem; option; main idea; supporting idea", "Find the paragraph before comparing the options."],
    ["Education and work", "blended learning; lifelong learning; qualification; apprenticeship", "Blended learning combines classroom and online study."],
    ["Present perfect", "has/have + past participle; past-to-present result", "Globalisation has affected most aspects of our lives."],
    ["Chart language", "rise; fall; increase; decrease; from ... to ...; by ...", "The percentage rose from 17% to 38%."],
    ["Sentence completion", "predict answer type; respect word limit; check singular/plural", "The course takes place on the 19th of September."],
    ["Speaking", "I feel fascinated; it is fascinating; I am going to ...; I will ...", "I am going to learn new software because it will help my designs."],
  ],
  colourLegend: [
    ["Vàng", "Quy trình, Teacher talk và hướng dẫn có thể dùng trực tiếp."],
    ["Xanh lá", "Câu trả lời, bài nói và bài viết mẫu."],
    ["Cam nhạt", "Đáp án, chiến lược và lưu ý ngôn ngữ."],
    ["Đỏ", "Lỗi học viên dễ mắc và cách sửa."],
  ],
  lessons: [
    {
      id: "reading", number: "01", shortTitle: "Reading", icon: "BookOpen", exerciseRange: "Exercises 01-09", duration: "105-115 min",
      title: "Main ideas, multiple choice and present perfect", description: "Move from globalised education vocabulary to a controlled multiple-choice reading route.",
      focus: "Globalised education; scanning; main ideas; multiple choice; paraphrase; present perfect; work-based learning",
      objectives: "Học viên xác định main idea, tìm đúng paragraph, xử lý paraphrase trong multiple choice và dùng tense clues để đọc hiểu.",
      sections: [
        { id: "reading-warmup", label: "Lead-in", title: "Sort the vocabulary before reading", duration: "12 min", blocks: [
          c("Teacher talk", ["<strong>Today we start Unit 03: Education and Employment.</strong>", "We will read about globalised education and practise multiple-choice questions.", "First, sort the words into work and studies. Then tell me which word is most useful for your experience."], "yellow"),
          t("Exercise 01: work or studies", ["Work", "Studies"], [["business; employers; job; office; retirement", "academic; blended learning; degree; lifelong learning; primary education; qualification; seminars"], ["Teacher note", "All the words except <em>office</em> appear in the passage; use this as a scanning race.", ""]]),
          c("Opening prompts", ["Are you working, studying or doing both?", "What qualification would you like to get?", "Have you ever attended an online seminar?"], "yellow"),
          c("Model answer", ["I am currently studying and I would like to get a professional qualification in information technology.", "I have attended online classes, but I still prefer face-to-face lessons for difficult topics."], "green"),
          c("Common errors", ["<strong>I am study at college.</strong> → <strong>I am studying at college.</strong>", "<strong>I want get a qualification.</strong> → <strong>I want to get a qualification.</strong>", "Remind the learner that <em>education</em> and <em>qualification</em> are not interchangeable."], "red"),
        ] },
        { id: "mcq-strategy", label: "Exercises 02-04", title: "Find the paragraph before reading every option", duration: "22 min", blocks: [
          c("Reading strategy", ["<strong>Step 1:</strong> skim the passage quickly for the topic and overall attitude.", "<strong>Step 2:</strong> read the sentence stem, not all four options first.", "<strong>Step 3:</strong> underline key words and scan for the same words or paraphrases.", "<strong>Step 4:</strong> read the relevant lines carefully, answer, then reject the distractors."], "yellow"),
          t("Exercise 02: gist", ["Question", "Answer", "Evidence"], [["Is the text positive or negative about globalisation in education?", "More positive than negative", "It describes access, international degrees and shared knowledge, while acknowledging inequality."]], { fill: "peach" }),
          t("Exercise 03: locate the answer", ["Question", "Answer", "Paragraph / reason"], [["1 Blended learning means ...", "C · mixing traditional and modern methods", "Paragraph A: classroom plus online/email study."], ["2 Advantages of globalised education except ...", "D · the elite get most of the opportunities", "Paragraph C says this is not good news; it is a disadvantage, not an advantage."]], { fill: "peach" }),
          c("Teacher move", ["Không cho học viên đọc toàn bộ passage quá chậm. Đặt timer 1 phút cho gist, sau đó thêm 2 phút để locate.", "Hỏi <em>Which paragraph contains the answer?</em> trước khi hỏi <em>Which option?</em>.", "Nếu học viên không biết một từ trong option, hướng về câu paraphrase trong passage thay vì dịch từng từ."], "yellow"),
        ] },
        { id: "paraphrase", label: "Exercise 05", title: "Predict the words that may be paraphrased", duration: "15 min", blocks: [
          t("Exercise 05: synonym map", ["Question word", "Likely text word"], [["abroad", "overseas"], ["benefits", "advantages"], ["disturbing", "disrupting"], ["going to", "attending"], ["make better", "enrich"], ["useful", "valuable"], ["workplaces", "offices"]], { fill: "peach" }),
          t("Technical terms likely to stay the same", ["Question term", "Teaching point"], [["blended learning", "A technical term may be repeated exactly."], ["globalisation", "Scan for the exact word before searching for a synonym."], ["lifelong learning", "A fixed concept; recognise it quickly."], ["westernisation", "The text explains the meaning rather than replacing the term."]]),
          c("Paraphrase clinic", ["Yêu cầu học viên tạo một câu mới với <strong>valuable</strong> và <strong>enrich</strong>.", "Đối chiếu <em>attending a college</em> với <em>going to a college</em>.", "Ghi riêng một vocabulary page gồm question word → passage word → own example."], "yellow"),
        ] },
        { id: "main-ideas", label: "Exercises 06-07", title: "Sample the passage and answer without the options", duration: "20 min", blocks: [
          t("Exercise 06: main ideas", ["Sentence", "Main idea?"], [["1 There are both advantages and disadvantages to globalised education.", "Yes"], ["2 Many people study after retirement.", "No - supporting detail"], ["3 Globalisation should not be westernisation.", "Yes"], ["4 Universities have become more business-focused.", "Yes"], ["5 University fees rose dramatically in the UK.", "No - not in the passage"], ["6 Many poorer people do not benefit.", "Yes"], ["7 Most lecturers work part-time.", "No - not in the passage"]], { fill: "peach" }),
          t("Exercise 07: answer first, then match", ["Question", "Answer", "Reason"], [["1 Who benefits in developing countries?", "B · mainly well-off people in big towns", "The elite in large cities have access; rural areas may lack internet and computers."], ["2 Meaning of westernisation?", "A · learning only about the West", "The text says education should include different cultures and approaches."], ["3 How has institutional focus changed?", "C · focused on attracting students", "Universities compete for overseas students and create publicity." ]], { fill: "peach" }),
          c("Sampling in four moves", ["1. Đọc toàn bộ paragraph đầu và cuối.", "2. Đọc câu đầu của các paragraph ở giữa.", "3. Gạch chân câu thể hiện broad idea, không phải ví dụ nhỏ.", "4. Tự trả lời trước rồi mới so sánh với A-D."], "yellow"),
        ] },
        { id: "present-perfect", label: "Exercise 08", title: "Read the past-to-present connection", duration: "18 min", blocks: [
          t("Present perfect in the passage", ["Sentence", "Past + present link"], [["Globalisation has affected most aspects of our lives.", "The change began in the past and the effect continues now."], ["Different countries have benefitted ...", "Past developments still give benefits today."], ["Many people have not even had a primary education.", "Past lack of education affects their present opportunities."], ["Educational institutions have changed their focus.", "The change happened before now and the new focus remains."]]),
          t("Exercise 08 answers", ["Question", "Answer"], [["1 Do the sentences relate to past and present?", "Yes; each describes a past change with a present result."], ["2 Which tense is used most?", "B · simple present"], ["3 Why?", "A · the situation affects people now"]], { fill: "peach" }),
          c("Grammar checkpoint", ["Present perfect = <strong>has/have + past participle</strong>; do not use a finished past time marker such as <em>in 2010</em>.", "Contrast: <em>Universities changed their focus</em> (finished past event) and <em>Universities have changed their focus</em> (past-to-present result).", "Ask the learner to create one sentence about a qualification or skill they have gained."], "yellow"),
        ] },
        { id: "reading-exam", label: "Exercise 09", title: "Exam practice: work-based learning", duration: "25 min", blocks: [
          p("Set the full task under a time limit. The learner must skim first, identify the question key words, locate the relevant paragraph, answer without the options where possible and then check every distractor."),
          t("Answer key with evidence", ["Question", "Answer", "Evidence"], [["1 Apprenticeships ...", "B · were common in the past", "Paragraph A: apprenticeships were a common way of learning in the past."], ["2 The 1944 education system ...", "C · was not a great success", "It divided students early and changed to a more equal system in the 1970s."], ["3 Blended learning ...", "D · is convenient for working people", "Online delivery means people do not have to miss work to attend classes."], ["4 Challenges include ...", "A · practical issues like when classes are held", "It may be difficult to find teachers who can teach in different places and times."]], { fill: "peach" }),
          t("Evidence locator", ["Question", "Paragraph to scan", "Key paraphrase"], [["1", "A", "common in the past = were common in the past"], ["2", "B", "did not produce good results = was not a great success"], ["3", "E", "do not have to miss work = convenient for working people"], ["4", "F", "different places and times = practical scheduling issues"]]),
          c("Exit ticket", ["Explain <strong>topic sentence</strong> and <strong>supporting idea</strong>.", "Give one example of present perfect with a current result.", "Answer: <em>Who benefits from blended learning?</em> → people who need to study without missing work."], "yellow"),
          c("Homework", ["Write four new multiple-choice questions about the work-based learning passage.", "Record 60 seconds: <em>What qualification or skill have you gained?</em> Use one present perfect sentence and one reason."], "peach"),
        ] },
      ],
    },
    {
      id: "writing", number: "02", shortTitle: "Writing", icon: "FileText", exerciseRange: "Exercises 01-15", duration: "115-125 min",
      title: "Describe charts, trends and comparisons", description: "Build a clear Task 1 response from chart types and trend vocabulary to a literacy-rate report.",
      focus: "Line, bar, pie and table data; trend verbs; salient features; number prepositions; literacy-rate Task 1",
      objectives: "Học viên nhận diện dạng biểu đồ, chọn thông tin nổi bật, dùng trend language và viết Task 1 có introduction, overview và comparisons.",
      sections: [
        { id: "writing-warmup", label: "Exercises 01-02", title: "Name the chart and the kind of change", duration: "15 min", blocks: [
          c("Teacher talk", ["Today we will describe data, not give opinions about it.", "First name the chart type. Then tell me whether it shows change over time or a snapshot of categories.", "In Task 1, select the main features and support them with a few figures."], "yellow"),
          t("Exercise 01: chart types", ["Diagram", "Name", "Change over time?"], [["1", "line graph", "Yes"], ["2", "pie chart", "No - proportion at one point"], ["3", "bar chart", "Usually a comparison; may be one year"], ["4", "table", "Yes in this example; the years are listed"]], { fill: "peach" }),
          t("Exercise 02: trend words", ["Word", "Part of speech"], [["decline", "verb / noun"], ["decrease", "verb / noun"], ["drop", "verb / noun"], ["fall", "verb / noun"], ["growth", "noun"], ["increase", "verb / noun"], ["rise", "verb / noun"]]),
          c("Vocabulary strategy", ["Lập hai cột <strong>trend verb</strong> và <strong>trend noun</strong>.", "Nhắc spelling: <strong>dropped</strong> có double p; <strong>growth</strong> là noun, verb là <strong>grow</strong>.", "Đọc to <em>rise/rose/risen</em> và <em>fall/fell/fallen</em>."], "yellow"),
        ] },
        { id: "trend-grammar", label: "Exercises 03-04", title: "Use the correct trend form and tense", duration: "18 min", blocks: [
          t("Exercise 03: irregular and regular forms", ["Infinitive", "Past simple", "Past participle"], [["fall", "fell", "fallen"], ["increase", "increased", "increased"], ["drop", "dropped", "dropped"], ["decrease", "decreased", "decreased"], ["decline", "declined", "declined"], ["rise", "rose", "risen"], ["grow", "grew", "grown"]], { fill: "peach" }),
          t("Exercise 04: table completion", ["No.", "Answer", "Form"], [["1 The number ... ___ during the period.", "rose / increased", "verb"], ["2 There was a ___ from 2007/08 to 2009/10.", "fall / drop / decline / decrease", "noun"], ["3 There was a steady ___ in numbers.", "rise / growth / increase", "noun"], ["4 The numbers ___ again this year.", "declined / decreased / fell / dropped", "verb"]]),
          c("Common errors", ["<strong>There was a rose</strong> → <strong>There was a rise</strong>.", "<strong>It increased of 4%</strong> → <strong>It increased by 4%</strong>.", "Teach noun/verb frames together: <em>a rise</em> but <em>rose</em>."], "red"),
        ] },
        { id: "salient-data", label: "Exercises 05-07", title: "Select salient data and use prepositions", duration: "22 min", blocks: [
          t("Exercise 05: choose the better description", ["Option", "Evaluation"], [["A", "Not best: lists every figure with no overview."], ["B", "Better: identifies an upward trend and supports it with one example."]], { fill: "peach" }),
          t("Exercise 06: important or irrelevant", ["Sentence", "Include?", "Reason"], [["1 About 330,000 were in full-time education.", "Yes", "High / salient figure."], ["2 Work-based learning is useful.", "No", "Opinion, not data."], ["3 60,000 were in employer-funded training.", "Optional", "A supporting category."], ["4 Around 70,000 were in work-based learning.", "Optional", "A supporting category."], ["5 Only about 50,000 were in other education.", "Optional", "A low category."], ["6 Three times more were in full-time education than employment.", "Yes", "Clear comparison."], ["7 The situation is different in my country.", "No", "Outside information."], ["8 About 90,000 were not in education or training.", "Yes", "Important low-side feature."], ["9 More were in employment than not in employment.", "Yes", "Direct comparison."]], { fill: "peach" }),
          t("Exercise 07: prepositions with numbers", ["No.", "Answer"], [["1 17% ___ the population", "of"], ["2 The number ___ graduates", "of"], ["3 It rose ___ 21% ___ 29%", "from / to"], ["4 It increased ___ about 4%", "by"], ["5 ___ 1992 and 1996", "Between"], ["6 a rise ___ graduate numbers", "in"]]),
          c("Teacher move", ["Cho học viên nói difference giữa <strong>increased to 100</strong> và <strong>increased by 100</strong>.", "Yêu cầu học viên giải thích vì sao sentence 2 và 7 không phù hợp với Task 1.", "Chỉ chọn số liệu giúp làm rõ trend; không biến bài viết thành danh sách số."], "yellow"),
        ] },
        { id: "writing-model", label: "Exercises 08-10", title: "Analyse a model and describe a pie chart", duration: "22 min", blocks: [
          t("Exercise 08: model answer features", ["Feature", "Example"], [["Introduction", "The line graph shows the number of unemployed recent graduates and non-graduates aged 21 to 30 between 1990 and 2015."], ["Overview", "Overall, the numbers have not changed much: a fall followed by a rise; non-graduates are higher throughout."], ["Description + data", "The fall was small from 1990 to 1995 but greater between 1995 and 2000."], ["Past simple", "was; dropped; grew; returned"], ["Present perfect", "have not changed much"]], { fill: "peach" }),
          t("Exercise 09: pie-chart phrases", ["Phrase", "Country"], [["1 over a third", "USA"], ["2 a little under a third", "UK"], ["3 the lowest number", "New Zealand"], ["4 about 1 in 10", "Canada"], ["5 just under a sixth", "Australia"], ["6 the most popular", "USA"], ["7 second place", "UK"], ["8 least popular", "New Zealand"]]),
          c("Writing architecture", ["Paragraph 1: identify both visuals and the time/category focus.", "Paragraph 2: overview with the biggest trend or comparison.", "Body: group related details, use a few exact figures plus approximate/fraction language.", "Conclusion is optional for Task 1, but a concise overall sentence can reinforce the main comparison."], "yellow"),
        ] },
        { id: "literacy-task", label: "Exercises 11-15", title: "Exam task: literacy rates by region and gender", duration: "38 min", blocks: [
          t("Exercise 14 planning answers", ["Question", "Answer"], [["1 What are the two groups?", "Male and female literacy rates."], ["2 What do the axes show?", "Vertical: percentage of people who are literate; horizontal: world region."], ["3 Highest regions?", "Central Asia and Central/Eastern Europe."], ["4 Different male/female rates?", "Five regions."], ["5 Biggest difference?", "South and West Asia."], ["6 Least literate region rates?", "Male about 70%; female about 59% in Sub-Saharan Africa."], ["7 Difference between most and least literate?", "About 30% for men and just over 40% for women."]], { fill: "peach" }),
          c("Model answer", ["<strong>The data shows the literacy rate for both males and females in seven different regions of the world. The horizontal axis lists the regions and the vertical axis shows percentage.</strong>", "In all regions except two, there is a difference in the literacy rates of men and women. Central Asia and Central/Eastern Europe have the highest percentage of citizens who can read and write. Almost 100% of men and women are literate in those regions. The lowest literacy rates are in Sub-Saharan Africa.", "In five out of the seven regions, there are different literacy rates for men and women. The greatest difference is found in South and West Asia: about 80% of men are able to read and write, but only about 60% of women. Overall, the difference between the most and least literate area is about 30% for men and just over 40% for women. In conclusion, literacy rates vary between regions, with males having higher levels than females in most regions."], "green"),
          checklist("150-word writing checklist", ["The introduction describes the bar chart and both groups.", "The overview identifies highest, lowest and gender comparison.", "The report includes selected data, not every bar.", "Prepositions with numbers are accurate.", "Past simple is used for the 2011 data description.", "The report is at least 150 words and has clear paragraphs."], "Teacher check"),
          t("Feedback codes", ["Code", "Focus"], [["Sp", "spelling"], ["Gr", "grammar"], ["T", "tense"], ["P", "punctuation"], ["L", "linking / paragraph logic"], ["D", "data selection / inaccurate figure"]], { fill: "peach", compact: true }),
          c("Homework", ["Rewrite the literacy-rate report after correcting one organisation issue, one data issue and one language issue.", "Underline the introduction, box the overview and circle every preposition in a number phrase."], "peach"),
        ] },
      ],
    },
    {
      id: "listening", number: "03", shortTitle: "Listening", icon: "Lightbulb", exerciseRange: "Exercises 01-16", duration: "105-115 min",
      title: "Sentence completion, word limits and paraphrase", description: "Train Section 1 accuracy through jobs, courses, dates, places and a detailed course enquiry.",
      focus: "Jobs and courses; suffix clues; sentence completion; singular/plural; dates; synonyms; Food Photography course",
      objectives: "Học viên dự đoán dạng đáp án, theo dõi conversation order, tránh extra words và nhận ra synonym/paraphrase trong Listening.",
      sections: [
        { id: "listening-vocabulary", label: "Exercises 01-05", title: "Separate jobs from courses", duration: "20 min", blocks: [
          c("Teacher talk", ["In Listening Section 1, the words around a gap help you predict the answer.", "Words ending in <em>-er</em> often name a person or job; words ending in <em>-ology</em> or <em>-tion</em> often name a subject or course.", "Listen for the situation first, then the exact noun."], "yellow"),
          t("Exercise 01: work/study areas", ["Letter", "Area"], [["A", "construction"], ["B", "sports and leisure"], ["C", "retail"], ["D", "hotel and catering"], ["E", "health"], ["F", "art and design"], ["G", "information technology"]]),
          t("Exercises 02-03: job or course", ["Word", "J/C"], [["architect", "J"], ["computing", "C"], ["graphic designer", "J"], ["web designer", "J"], ["chef", "J"], ["doctor", "J"], ["medicine", "C"], ["textiles", "C"], ["building engineering", "C"], ["fitness training", "C"], ["shop management", "C"], ["badminton coach", "J"], ["food technology", "C"], ["store assistant", "J"]]),
          t("Exercise 03: classify by area", ["Area", "Job", "Course"], [["Art and design", "graphic designer", "textiles"], ["Construction", "architect", "building engineering"], ["Health", "doctor", "medicine"], ["Hotel and catering", "chef", "food technology"], ["Information technology", "web designer", "computing"], ["Retail", "store assistant", "shop management"], ["Sports and leisure", "badminton coach", "fitness training"]], { fill: "peach" }),
          t("Exercise 04: two correct endings", ["Sentence", "Answers"], [["1 course in ...", "computing; food technology"], ["2 worked on a cruise ship as ...", "chef; doctor"], ["3 had a job as a(n) ...", "architect; store assistant"], ["4 keen on ...", "fitness training; textiles"]]),
          t("Exercise 05: identify the situation", ["Conversation", "Answer", "Clue"], [["1", "J · job", "Manager welcomes Anna as a store assistant."], ["2", "C · course", "Student books the Food Photography course."]], { fill: "peach" }),
          c("Common errors", ["<strong>medicine</strong> is a field/course, not normally a person in this exercise.", "<strong>store assistant</strong> is a job; <strong>shop management</strong> is a course/area of study.", "Trong 1-1, yêu cầu học viên giải thích suffix clue bằng English, không chỉ nhớ đáp án."], "red"),
        ] },
        { id: "sentence-completion", label: "Exercises 06-08", title: "Predict the answer type before the recording", duration: "20 min", blocks: [
          t("Exercise 06: key words around each gap", ["No.", "Prediction"], [["1 Anna has got a job as a ...", "type of job / noun after <em>a</em>"], ["2 completed a course in ...", "area of study"], ["3 new name of department ...", "name of a place/department"], ["4 takes place on the ___ September", "date; number or ordinal"], ["5 total of ___ places", "number only"]]),
          t("Exercise 07: answer type", ["Information", "Question"], [["an area of study", "2"], ["a type of job", "1"], ["a number only", "5"], ["a name of a place", "3"], ["a date", "4"]], { fill: "peach" }),
          t("Exercise 08: answer key", ["Question", "Answer", "Evidence"], [["1", "store assistant", "Anna is joining as a store assistant."], ["2", "information technology", "She has just finished a course in Information Technology."], ["3", "Moving Images", "The department will be known as Moving Images."]], { fill: "peach" }),
          c("Listening strategy", ["Underline words before and after the gap: article <strong>a</strong>, preposition <strong>in</strong>, fixed phrase <strong>on the ___ September</strong>.", "Predict grammar and meaning before listening; this makes the correct answer easier to notice.", "Do not write a word already printed in the sentence."], "yellow"),
        ] },
        { id: "grammar-traps", label: "Exercises 09-11", title: "Check articles, uncountable nouns and dates", duration: "18 min", blocks: [
          t("Exercise 09: correct grammar", ["Item", "Correct answer", "Why"], [["1 Anna has got a ...", "store assistant", "<em>a assistant</em> is impossible; the answer starts with a consonant sound."], ["2 course in ...", "information technology", "<em>information</em> is uncountable; do not write informations."], ["3 new name ...", "Moving Images", "Plural noun and no extra article; <em>The Moving Images</em> is three words."]], { fill: "peach" }),
          t("Exercise 10: one word and/or a number", ["Question", "Answer"], [["1 The course takes place on the ___ September.", "19th / 19 / nineteenth of"], ["2 There are a total of ___ places.", "12 / twelve"]]),
          t("Exercise 11: candidate answers", ["Candidate answer", "Correct?", "Reason"], [["19", "Yes", "Number fits before printed <em>September</em>."], ["19th", "Yes", "Ordinal fits after <em>the</em>."], ["the 19", "No", "<em>the</em> is already printed."], ["nineteenth of", "Yes", "Fits the sentence exactly."], ["19th of", "No", "<em>of</em> is extra because September is printed."], ["19 Sept", "No", "Two words and extra abbreviation; violates the gap instruction."]], { fill: "peach" }),
          c("Common errors", ["<strong>19th of September</strong> is natural in a full sentence, but the gap already contains <strong>September</strong>.", "Choose a figure when speed matters; spelling <strong>nineteenth</strong> is easy to misspell.", "After correction, ask the learner to read the complete sentence aloud."], "red"),
        ] },
        { id: "conversation-order", label: "Exercises 12-13", title: "Follow the conversation order and paraphrase", duration: "18 min", blocks: [
          t("Exercise 12: order of information", ["Topic", "Question number"], [["a price of the course", "6"], ["b location of the course", "5"], ["c name of the course", "1"], ["d starting time", "2"], ["e purpose", "4"], ["f duration", "3"]]),
          t("Exercise 13: synonym map", ["Question phrase", "Recording phrase"], [["price", "h · cost"], ["name", "i · title"], ["duration", "f · length"], ["starts", "e · begins"], ["takes place", "d · is held"], ["purpose", "c · reason for"], ["ends", "b · finishes"], ["location", "a · place"], ["practical", "g · hands-on"]], { fill: "peach" }),
          c("Teacher move", ["Nhắc học viên: answers follow the conversation order, nên câu 1 sẽ xuất hiện trước câu 2.", "Cho học viên dự đoán synonym trước khi nghe: <em>full fee</em> = total cost; <em>goes on</em> = lasts.", "Chỉ mở transcript sau lần nghe đầu và yêu cầu highlight question phrase / recording phrase bằng hai màu."], "yellow"),
        ] },
        { id: "listening-exam", label: "Exercises 14-16", title: "Exam practice: Food Photography", duration: "29 min", blocks: [
          t("Exercise 14: recording paraphrases", ["Question wording", "Recording wording"], [["title", "it's called"], ["starts", "begins"], ["lasts", "goes on"], ["teach", "train"], ["part", "some"], ["nearby", "local"], ["total cost", "full fee"]]),
          t("Exercise 15 answer key", ["Question", "Answer", "Evidence"], [["1 Course title", "Food Photography", "It's called Food Photography."], ["2 Start time", "9.30 / nine thirty", "It begins at half past nine."], ["3 Duration", "7 / seven", "It goes on until 4.30; seven hours in total."], ["4 What the course teaches", "camera angles", "Close-up, wide angle and shots from above."], ["5 Nearby location", "hotel", "Some of the day is on location at the Lincoln Hotel."], ["6 Total cost", "$55 / fifty-five dollars", "The full fee is $55, including lunch and refreshments."]], { fill: "peach" }),
          t("Transcript cues", ["Stage", "Key exchange"], [["Course title/time", "Food Photography; begins at 9.30 and goes on until 4.30."], ["Purpose", "Students learn to take good photos using a range of camera angles; editing pictures is not the focus."], ["Location", "Some of the day is held at the local Lincoln Hotel."], ["Cost", "The full fee is $55 and includes a light lunch and refreshments."]]),
          checklist("Listening self-check", ["I answered every question.", "I used the exact word limit.", "I wrote numbers as figures where useful.", "I checked spelling and singular/plural form.", "I matched paraphrase, not only repeated words."], "Learner check"),
          c("Exit ticket", ["Predict the answer type for <em>The course starts at ...</em>.", "Explain why <strong>information technology</strong> has no plural <em>-s</em>.", "Paraphrase <strong>full fee</strong>, <strong>goes on</strong> and <strong>hands-on</strong>."], "yellow"),
          c("Homework", ["Listen to the Unit 03 scripts and make a table of question phrase → recording phrase.", "Record the numbers 19, 19th, 9.30, 7 and $55, then check pronunciation and spelling."], "peach"),
        ] },
      ],
    },
    {
      id: "speaking", number: "04", shortTitle: "Speaking", icon: "GraduationCap", exerciseRange: "Exercises 01-20", duration: "110-120 min",
      title: "Talk about work, study and learning", description: "Develop full Speaking answers for work and study topics, then organise a two-minute Part 2 talk.",
      focus: "Work/study areas; -ed/-ing adjectives; Speaking Part 1; consonant clusters; Part 2 preparation and delivery",
      objectives: "Học viên trả lời Part 1 đầy đủ, dùng đúng -ed/-ing adjectives, phát âm consonant clusters và chuẩn bị bài nói Part 2 trong một phút.",
      sections: [
        { id: "speaking-vocabulary", label: "Exercises 01-05", title: "Describe areas of work and study", duration: "22 min", blocks: [
          c("Teacher talk", ["Today we will talk about work, studies and future learning.", "Use a full answer: say what you do, add a detail, then explain how you feel or what you plan to do.", "Be careful: <em>-ed</em> describes a person's feeling; <em>-ing</em> describes the experience or thing."], "yellow"),
          t("Exercise 01: areas", ["Letter", "Area"], [["A", "emergency services"], ["B", "travel and transport"], ["C", "farming"], ["D", "education"], ["E", "tourism"], ["F", "science research and development"], ["G", "entertainment"]]),
          t("Exercise 02: negative words", ["Negative words", "Positive / neutral words"], [["tired; boring; embarrassed; not very exciting", "great; thrilled; challenging; interesting; fascinated; amazed"]]),
          t("Exercise 03: feeling or experience", ["Word", "F/E"], [["amazed", "F"], ["embarrassed", "F"], ["interesting", "E"], ["boring", "E"], ["challenging", "E"], ["fascinated", "F"], ["great", "F and E"], ["not very exciting", "E"], ["thrilled", "F"], ["tired", "F"]], { fill: "peach" }),
          t("Exercise 04: adjective pairs", ["I feel / felt ...", "It is / was ..."], [["amazed", "amazing"], ["thrilled", "thrilling"], ["bored", "boring"], ["challenged", "challenging"], ["fascinated", "fascinating"], ["not very excited", "not very exciting"], ["tired", "tiring"], ["embarrassed", "embarrassing"], ["interested", "interesting"], ["great", "great"]]),
          t("Exercise 05: choose the correct word", ["No.", "Answer"], [["1", "thrilled"], ["2", "interesting"], ["3", "embarrassed"], ["4", "bored"], ["5", "tiring"], ["6", "amazing"]], { fill: "peach" }),
          c("Common errors", ["<strong>I felt embarrassing.</strong> → <strong>I felt embarrassed.</strong>", "<strong>The job is interested.</strong> → <strong>The job is interesting.</strong>", "Ask: Is this the person who feels it, or the thing that causes the feeling?"], "red"),
        ] },
        { id: "part1", label: "Exercises 06-11", title: "Build a full Speaking Part 1 answer", duration: "25 min", blocks: [
          c("Teacher prompts", ["Which of these jobs or activities have you done before?", "How did you feel about it?", "Which would you like to try? Why?", "Do not answer only <em>Yes</em> or <em>No</em>; invent a plausible idea if necessary."], "yellow"),
          t("Miriam recording: answer map", ["Information", "Answer", "Order"], [["What she does", "part-time fashion and textiles student", "1"], ["Where", "Milton College, centre of the city", "2"], ["Hours", "twelve hours a week", "3"], ["Opinion", "great; likes working with wool and leather", "4"], ["Future learning", "computer software for new designs", "5"], ["Future job", "fashion photographer", "6"]], { fill: "peach" }),
          t("Exercise 09: talk about the student", ["Heading", "Useful sentence frame"], [["What do you do?", "She is a student on a part-time fashion and textiles course."], ["Where?", "She studies at Milton College in the city centre."], ["How many hours?", "She studies twelve hours a week."], ["Enjoyment", "She thinks it is great and enjoys working with materials."], ["Future learning", "She would like to learn computer software."], ["Future job", "She would like to become a fashion photographer."]]),
          t("Exercises 10-11: own answer planner", ["Prompt", "Planning cue"], [["What do you do?", "Job/course + place"], ["Are you enjoying it?", "Feeling + specific reason"], ["Would you like to learn anything?", "Skill + future purpose"], ["Future job?", "Job + plan / condition"]]),
          c("Model answer", ["<strong>I am a student on a part-time information technology course. I study at a college near the centre of my city and I have classes about twelve hours a week. I enjoy it because the lessons are challenging but practical. In the future, I would like to learn more about web design, and I would love to become a user-experience designer.</strong>"], "green"),
        ] },
        { id: "consonants", label: "Exercise 12", title: "Pronounce words beginning with two consonants", duration: "12 min", blocks: [
          t("Consonant-cluster practice", ["Word", "Sentence"], [["student", "I'm a student."], ["scarf", "I've just made a beautiful scarf."], ["plastic", "It's made out of plastic."], ["great", "It looks strange, but I think it's great."], ["close-up shots", "I've learnt how to take some great close-up shots."]], { fill: "peach" }),
          c("Pronunciation focus", ["Tách onset: <strong>st-</strong>, <strong>sk-</strong>, <strong>pl-</strong>, <strong>gr-</strong>.", "Không thêm vowel trước cluster: tránh <em>is-student</em> hoặc <em>pəlastic</em>.", "Đọc chậm → nối vào câu → nói ở tốc độ tự nhiên; ghi lại lỗi nhưng không ngắt fluency liên tục."], "yellow"),
        ] },
        { id: "part2", label: "Exercises 13-18", title: "Plan a Part 2 talk in one minute", duration: "24 min", blocks: [
          t("Exercise 13: possible Part 2 topics", ["Topic", "Possible?"], [["1 education system changes", "No - too broad for this stage"], ["2 a time you learnt something new", "Yes"], ["3 your first day at school", "Yes"], ["4 your ideal place to study", "Yes"], ["5 travel to work in your city", "Part 1-style topic"], ["6 jobs in your home town", "Part 1-style topic"]], { fill: "peach" }),
          t("Exercise 14: test stages", ["Stage", "Order"], [["E examiner gives the card and one minute to prepare", "1"], ["C read the card", "2"], ["D make notes for the separate points", "3"], ["A talk about all four points", "4"], ["B stop when examiner tells you", "5"], ["F answer follow-up questions", "6"]]),
          t("Exercises 15-16: model card notes", ["Card point", "Possible note"], [["What did you learn?", "learned to fly a small plane"], ["How did you learn?", "lessons at a flying club"], ["What was the result?", "got my pilot's licence"], ["How did you feel?", "thrilled and proud of myself"]], { fill: "peach" }),
          t("Exercise 17: opening phrases", ["Topic", "Possible opening"], [["learned something new", "I'm going to talk about a time when I learnt something new."], ["first day at school", "I'd like to tell you about my very first day at school."], ["ideal place to study", "I want to talk about my ideal place to study."]]),
          c("Teacher move", ["Cho học viên ghi note bằng từ khóa, không viết full sentences.", "Trong 1 phút chuẩn bị, bắt buộc phải chạm đủ bốn bullet points.", "Teach signposting: <em>First of all, then, as a result, finally, what I remember most is ...</em>"], "yellow"),
        ] },
        { id: "part2-model", label: "Exercises 18-20", title: "Expand notes into a two-minute talk", duration: "27 min", blocks: [
          t("Exercise 18: Nina's notes", ["Gap", "Answer"], [["1 What did she learn?", "d · she loves snow and being active"], ["2 How did she learn?", "a · she was in a group"], ["3 What was the result?", "c · she won a competition"], ["4 How did she feel?", "b · really thrilled"]], { fill: "peach" }),
          c("Model answer structure", ["<strong>Introduction:</strong> I'm going to tell you about a time when I learned something new.", "<strong>What/how:</strong> I decided to learn to ski because I love winter and sport. I learned with an instructor in a group.", "<strong>Result:</strong> I later entered a skiing competition and won a silver cup.", "<strong>Feeling:</strong> I was thrilled and proud when I reached the bottom of the slope."], "green"),
          t("Nina transcript cues", ["Point", "Language to notice"], [["Reason", "active and sporty; love cold weather; winter, sport and snow"], ["Learning", "instructor; group; chair lift; nursery slope; keep my balance"], ["Result", "skiing competition; won a silver cup"], ["Feeling", "thrilling; exciting; proud of myself; great feeling"]]),
          checklist("Two-minute speaking checklist", ["I introduced the topic clearly.", "I covered all four card points.", "I used notes, not a memorised script.", "I linked ideas with time and result phrases.", "I kept speaking for one to two minutes.", "I used at least two -ed/-ing adjectives accurately."], "Learner check"),
          c("Exit ticket", ["Give a complete Part 1 answer to <em>What do you do?</em>.", "Say one sentence with <strong>fascinated</strong> and one with <strong>fascinating</strong>.", "Give a Part 2 opening and one note for each of the four points."], "yellow"),
          c("Homework", ["Prepare a one-minute note card and record a two-minute talk: <em>Describe a time when you learnt something new.</em>", "Listen once for organisation and once for pronunciation. Mark one strength and two next targets."], "peach"),
        ] },
      ],
    },
  ],
  finalReview: {
    duration: "25 min",
    reviewRows: [
      ["Reading", "Locate the paragraph, identify the main idea, answer without options and use present perfect clues."],
      ["Writing", "Select salient data, describe trends with prepositions and organise a 150-word literacy report."],
      ["Listening", "Predict answer type, follow order, reject distractors and check grammar/word limits."],
      ["Speaking", "Give full work/study answers, distinguish -ed/-ing adjectives and deliver a two-minute Part 2 talk."],
    ],
    errorRows: [
      ["1", "Reading: main idea is broader than one example; check the paragraph before choosing the option."],
      ["2", "Writing: use rise/fall forms accurately; distinguish increased by from increased to."],
      ["3", "Listening: do not add printed words; check information, plural forms, dates and exact word limits."],
      ["4", "Speaking: feelings take -ed; experiences take -ing; answer with a reason and detail."],
      ["5", "Part 2: notes should cover all four points, but they should not become a memorised essay."],
    ],
    challenge: [
      "Explain one advantage and one disadvantage of globalised education using a present perfect sentence.",
      "Describe a line graph trend with from/to/by and one salient comparison.",
      "Speak for 30 seconds about a skill you are going to learn and why it will help you.",
    ],
    homework: [
      "Submit the 150-word literacy-rate Task 1 report after applying Sp / Gr / T / P / L / D feedback codes.",
      "Record the Part 2 learning experience talk with a one-minute note plan and a two-minute delivery.",
      "Create a Unit 03 vocabulary page with education terms, trend verbs, listening paraphrases and -ed/-ing pairs.",
    ],
    quickReference: [
      ["Student's Book", "Unit 03 pp. 44-64; mark globalised education, charts, Food Photography script and Part 2 card."],
      ["Teacher's Book", "Unit 03 pp. 30-38; check MCQ strategy, model essay, transcript cues, alternatives and feedback."],
      ["Board plan", "key words -> paragraph -> evidence; rise/fall; from/to/by; prediction -> listening order -> check; answer + reason + detail."],
      ["Listening prep", "Prepare store assistant, information technology, Moving Images, 19th/19, Food Photography, 9.30, 7 and $55."],
      ["Feedback record", "Keep one error log for main idea, data selection, word limit, tense, adjective ending and consonant cluster."],
    ],
  },
};
