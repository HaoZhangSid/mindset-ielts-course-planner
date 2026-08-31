import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import {
  ArrowUpRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Download,
  FileText,
  GraduationCap,
  Layers3,
  Lightbulb,
  Menu,
  PanelLeft,
  Search,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import { unit02, courseUnits } from "./data/unit02.js";
import "./styles.css";

const currentUnit = unit02;
const activeUnitId = currentUnit.id;

const iconMap = { BookOpen, FileText, Lightbulb, Target, Sparkles, GraduationCap };

const labelMap = {
  "Opening prompts": "Câu hỏi khởi động",
  "Common starting errors": "Lỗi học viên dễ nói / viết",
  "Homework": "Bài tập sau buổi học",
  "Speaking self-check": "Tự kiểm tra Speaking",
  "Model answer": "Câu trả lời mẫu",
  "Common errors": "Lỗi học viên dễ nói / viết",
  "Teacher prompts": "Teacher prompts",
  "Exit ticket": "Exit ticket",
  "Listening answer key": "Đáp án Listening",
  "Practice answers": "Đáp án luyện tập",
  "Teacher move": "Cách xử lý",
  "Scanning in four moves": "Quy trình",
  "Number drill": "Quy trình",
  "Listening strategy": "Chiến lược",
  "Feedback questions": "Câu hỏi feedback",
  "Short-answer practice": "Đáp án luyện tập",
  "Answer key with evidence": "Đáp án",
  "Answer diagnosis": "Cách xử lý",
  "Extension practice": "Bài nói mẫu",
  "Listen and repeat": "Bài nói mẫu",
  "Keep it natural": "Teacher prompts",
  "Follow-up questions": "Teacher prompts",
  "Personalise the grammar": "Teacher prompts",
  "Typical exam errors": "Lỗi học viên dễ nói / viết",
  "Distractor clinic": "Cách xử lý",
  "Scanning targets": "Từ / Cụm từ",
  "Key words in each question": "Key words cần gạch chân",
  "Pronunciation focus": "Lưu ý phát âm",
  "Grammar checkpoint": "Lưu ý ngôn ngữ",
  "Extension": "Cách xử lý",
  "Writing architecture": "Quy trình",
  "Sequencing check": "Lưu ý ngôn ngữ",
  "Answer frame": "Cách xử lý",
  "Vocabulary bank": "Từ / Cụm từ",
  "Description vocabulary": "Từ / Cụm từ mô tả",
  "Feedback codes": "Mã feedback",
  "150-word writing checklist": "Checklist bài viết 150 từ",
  "Speaking self-check": "Tự kiểm tra Speaking",
};

const localizeLabel = (label) => labelMap[label] || label;
const viDuration = (value) => String(value || "").replace(/\bmin\b/gi, "phút");
const colourClass = { Vàng: "vang", "Xanh lá": "xanh-la", "Cam nhạt": "cam-nhat", "Đỏ": "do" };

function MetaPill({ icon: Icon, label, value }) {
  return (
    <div className="meta-pill">
      <Icon size={16} strokeWidth={1.8} />
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

function CourseRail({ activeLesson, setActiveLesson, mobileOpen, setMobileOpen }) {
  return (
    <aside className={`course-rail ${mobileOpen ? "is-open" : ""}`}>
      <div className="rail-topline">
        <div className="brand-mark"><BookOpen size={17} /></div>
        <span>Mindset for IELTS</span>
        <button className="icon-button rail-close" onClick={() => setMobileOpen(false)} aria-label="Đóng điều hướng khóa học">
          <X size={18} />
        </button>
      </div>
      <div className="rail-heading">
        <span className="eyebrow">Thư viện khóa học</span>
        <h2>Level 1</h2>
        <p>Không gian soạn giáo án</p>
      </div>
      <nav className="unit-list" aria-label="Các unit trong khóa học">
        {courseUnits.map((courseUnit) => (
          <button
            key={courseUnit.id}
            className={`unit-link ${courseUnit.id === activeUnitId ? "is-active" : "is-muted"}`}
            onClick={() => courseUnit.id === activeUnitId && setMobileOpen(false)}
            disabled={courseUnit.id !== activeUnitId}
          >
            <span className="unit-number">{courseUnit.id}</span>
            <span className="unit-name">
              <strong>{courseUnit.title}</strong>
              <small>{courseUnit.status}</small>
            </span>
            {courseUnit.id === activeUnitId ? <CheckCircle2 size={16} /> : <span className="coming-soon">Sắp có</span>}
          </button>
        ))}
      </nav>
      <div className="rail-footer">
        <div className="rail-footer-icon"><Layers3 size={16} /></div>
        <div><strong>8 units cốt lõi</strong><span>Có thể mở rộng theo khóa học</span></div>
      </div>
    </aside>
  );
}

function Topbar({ showNotes, setShowNotes, setMobileOpen, onExport, exporting }) {
  return (
    <header className="topbar">
      <div className="breadcrumbs">
        <button className="icon-button mobile-menu" onClick={() => setMobileOpen(true)} aria-label="Mở điều hướng khóa học"><Menu size={19} /></button>
        <span>Level 1</span><ChevronRight size={14} /><span>Unit {currentUnit.id}</span><ChevronRight size={14} /><strong>{currentUnit.title}</strong>
      </div>
      <div className="top-actions">
        <button className={`quiet-button ${showNotes ? "is-selected" : ""}`} onClick={() => setShowNotes((value) => !value)} aria-pressed={showNotes}>
          <PanelLeft size={16} /> <span>Ghi chú giáo viên</span>
        </button>
        <button className="export-button" onClick={onExport} disabled={exporting}>
          <Download size={16} /> <span>{exporting ? "Đang tạo PDF" : "Tải PDF"}</span>
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="unit-hero">
      <div className="hero-copy">
        <div className="hero-kicker"><span className="kicker-dot" /> Unit {currentUnit.id} <span className="slash">/</span> Core topic</div>
        <h1>{currentUnit.title}</h1>
        <p>{currentUnit.subtitle}</p>
        <div className="hero-tags"><span>IELTS Level 1</span><span>Target Band 5.0-5.5</span><span>Teacher-ready</span></div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
        <div className="family-node node-main"><span>R</span><small>relationships</small></div>
        <div className="family-node node-a"><span>F</span><small>family</small></div>
        <div className="family-node node-b"><span>W</span><small>wellbeing</small></div>
        <div className="family-node node-c"><span>C</span><small>community</small></div>
        <div className="connection connection-a" /><div className="connection connection-b" /><div className="connection connection-c" />
      </div>
    </section>
  );
}

function UnitSnapshot() {
  return (
    <section className="snapshot-grid" aria-label="Unit snapshot">
      <MetaPill icon={Clock3} label="Teaching route" value="4 lessons · 60-90 min each" />
      <MetaPill icon={Target} label="Outcomes" value="Reading, writing, listening, speaking" />
      <MetaPill icon={FileText} label="Source pages" value="Student's Book pp. 8-23" />
      <MetaPill icon={GraduationCap} label="Class profile" value="IELTS 4.0-4.5 · Level 1" />
    </section>
  );
}

function UnitOpening() {
  const metaRows = currentUnit.metadata || [];
  const processRows = currentUnit.processOverview || [];
  const languageRows = currentUnit.coreLanguage || [];
  const colourRows = currentUnit.colourLegend || [];
  return (
    <section className="unit-opening" aria-labelledby="unit-title">
      <div className="opening-brand">Mindset for IELTS Level 1</div>
      <h1 id="unit-title">Unit {currentUnit.id}: {currentUnit.title}</h1>
      <p className="opening-subtitle">{currentUnit.subtitle}</p>
      <div className="opening-rule" />
      <div className="opening-source">{currentUnit.source}</div>
      <div className="teacher-banner"><strong>Dành cho giáo viên Việt Nam | 1-1 online</strong><span>Teacher talk dùng trực tiếp bằng English; phần Cách xử lý, Quy trình và feedback là ghi chú dành cho giáo viên.</span></div>
      <DataTable block={{ label: "", headers: ["Mục", "Sắp xếp"], rows: metaRows, className: "meta-table", fill: "blue", hideHeader: true }} />
      <div className="opening-sections">
        <div className="opening-section-title">Tổng quy trình tài liệu</div>
        <DataTable block={{ label: "", headers: ["Phần", "Nội dung", "Trọng tâm"], rows: processRows }} />
      </div>
      <div className="opening-sections">
        <div className="opening-section-title">Ngôn ngữ cốt lõi toàn unit</div>
        <DataTable block={{ label: "", headers: ["Chức năng", "Cấu trúc", "Ví dụ"], rows: languageRows }} />
      </div>
      <div className="opening-sections">
        <div className="opening-section-title">Mã màu sử dụng trong giáo án</div>
        <div className="colour-legend">
          {colourRows.map(([name, description]) => <p className={`legend-line legend-${colourClass[name] || "default"}`} key={name}><strong>{name}:</strong> {description}</p>)}
        </div>
      </div>
    </section>
  );
}

function LessonTabs({ activeLesson, onSelect, isVisible }) {
  return (
    <div className={`lesson-tabs ${isVisible ? "is-scroll-visible" : "is-scroll-hidden"}`} role="tablist" aria-label="Unit lessons">
      {currentUnit.lessons.map((lesson) => {
        const Icon = iconMap[lesson.icon] || BookOpen;
        return (
          <a key={lesson.id} id={`lesson-tab-${lesson.id}`} role="tab" aria-selected={activeLesson === lesson.id} aria-controls={`lesson-${lesson.id}`} className={`lesson-tab ${activeLesson === lesson.id ? "is-active" : ""}`} href={`#lesson-${lesson.id}`} onClick={() => onSelect(lesson.id)}>
            <span className="lesson-tab-icon"><Icon size={17} /></span>
            <span><strong>{lesson.shortTitle}</strong><small>{lesson.exerciseRange}</small></span>
            <ChevronRight className="tab-arrow" size={15} />
          </a>
        );
      })}
    </div>
  );
}

function LessonHeader({ lesson }) {
  return (
    <div className="lesson-header">
      <div>
        <div className="lesson-code">LESSON {Number(lesson.number)} | {lesson.exerciseRange.toUpperCase()}</div>
        <h2>{lesson.title}</h2>
        <p>{lesson.description}</p>
      </div>
      <DataTable block={{ label: "", headers: ["Mục", "Sắp xếp"], rows: [["Thời lượng đề xuất", viDuration(lesson.duration)], ["Trọng tâm", lesson.focus], ["Mục tiêu", lesson.objectives]], className: "lesson-meta-table", fill: "blue", hideHeader: true }} />
    </div>
  );
}

function Callout({ block, showNotes }) {
  const Icon = iconMap[block.icon] || Lightbulb;
  const isTeacherOnly = block.teacherOnly || /Teacher talk|Teacher move|Teacher prompts/i.test(block.label || "");
  if (isTeacherOnly && !showNotes) return null;
  const inferredTone = /model/i.test(block.label || "") ? "green" : /error/i.test(block.label || "") ? "red" : (block.tone || "yellow");
  return (
    <aside className={`callout callout-${inferredTone} ${isTeacherOnly ? "teacher-only" : ""}`}>
      <div className="callout-icon"><Icon size={17} /></div>
      <div className="callout-content">
        <div className="callout-label">{localizeLabel(block.label)}</div>
        {block.title && <h4>{block.title}</h4>}
        {block.lines?.map((line, index) => <p key={index} dangerouslySetInnerHTML={{ __html: line }} />)}
      </div>
    </aside>
  );
}

function DataTable({ block }) {
  return (
    <div className={`data-table-wrap ${block.compact ? "is-compact" : ""} ${block.fill ? `fill-${block.fill}` : ""} ${block.className || ""}`}>
      {(block.caption || block.label) && <div className="table-caption"><span>{localizeLabel(block.caption || block.label)}</span>{block.note && <small>{block.note}</small>}</div>}
      <table className={`data-table ${block.hideHeader ? "hide-header" : ""}`}>
        {!block.hideHeader && <thead><tr>{block.headers.map((header, index) => <th key={index}>{header}</th>)}</tr></thead>}
        <tbody>{block.rows.map((row, index) => <tr key={index}>{row.map((cell, cellIndex) => <td key={cellIndex} dangerouslySetInnerHTML={{ __html: cell }} />)}</tr>)}</tbody>
      </table>
    </div>
  );
}

function Checklist({ block }) {
  return (
    <div className="checklist-block">
      <div className="table-caption"><span>{localizeLabel(block.label)}</span><small>{block.note}</small></div>
      <div className="checklist-grid">{block.items.map((item, index) => <div key={index} className="check-item"><span className="check-box"><Check size={13} /></span><span dangerouslySetInnerHTML={{ __html: item }} /></div>)}</div>
    </div>
  );
}

function LessonBlock({ block, showNotes }) {
  if (block.type === "callout") return <Callout block={block} showNotes={showNotes} />;
  if (block.type === "table") return <DataTable block={block} />;
  if (block.type === "checklist") return <Checklist block={block} />;
  if (block.type === "teacher") return showNotes ? <Callout block={{ ...block, type: "callout", tone: "yellow", teacherOnly: true, icon: "Lightbulb" }} showNotes /> : null;
  if (block.type === "text") return <div className="prose-block" dangerouslySetInnerHTML={{ __html: block.html }} />;
  return null;
}

function LessonContent({ lesson, showNotes }) {
  return (
    <article className="lesson-content">
      {lesson.sections.map((section, index) => (
        <section className="lesson-section" key={section.id}>
          <div className="section-heading">
            <div className="section-index">{index === 0 ? "" : String(index).padStart(2, "0")}</div>
            <div><div className="section-meta"><span>{index === 0 ? `MỞ BÀI | ${viDuration(section.duration).toUpperCase()}` : `${section.label.toUpperCase()} | ${section.title.toUpperCase()} | ${viDuration(section.duration).toUpperCase()}`}</span></div><h3>{section.title}</h3></div>
          </div>
          <div className="section-body">
            {section.blocks.map((block, blockIndex) => <LessonBlock block={block} showNotes={showNotes} key={blockIndex} />)}
          </div>
        </section>
      ))}
    </article>
  );
}

function LessonRail({ activeLesson, onSelect }) {
  return (
    <div className="lesson-rail">
      <span className="rail-label">Chuyển đến lesson</span>
      <div className="rail-buttons">
        {currentUnit.lessons.map((lesson) => <a key={lesson.id} className={activeLesson === lesson.id ? "is-active" : ""} href={`#lesson-${lesson.id}`} onClick={() => onSelect(lesson.id)}>{lesson.shortTitle}</a>)}
      </div>
    </div>
  );
}

function IntegratedReview() {
  const review = currentUnit.finalReview;
  if (!review) return null;
  return (
    <section className="integrated-review" aria-labelledby="integrated-review-title">
      <div className="review-heading">
        <div className="lesson-code">UNIT {currentUnit.id} / CONSOLIDATION</div>
        <h2 id="integrated-review-title">INTEGRATED REVIEW</h2>
        <span>{viDuration(review.duration)}</span>
      </div>
      <div className="review-section">
        <div className="opening-section-title">Tổng ôn tích hợp</div>
        <DataTable block={{ label: "", headers: ["Module", "Nhiệm vụ ôn tập"], rows: review.reviewRows, fill: "peach" }} />
      </div>
      <div className="review-section">
        <div className="opening-section-title">FINAL ERROR CLINIC + EXIT TICKET</div>
        <DataTable block={{ label: "", headers: ["Ưu tiên", "Điểm cần sửa"], rows: review.errorRows, fill: "red" }} />
        <Callout block={{ label: "Exit ticket", lines: review.challenge, tone: "yellow" }} showNotes />
        <Callout block={{ label: "Bài tập sau buổi học", lines: review.homework, tone: "peach" }} showNotes />
      </div>
      <div className="review-section">
        <div className="opening-section-title">TEACHER QUICK REFERENCE | BEFORE CLASS</div>
        <DataTable block={{ label: "", headers: ["Tài liệu", "Chuẩn bị"], rows: review.quickReference, fill: "blue" }} />
      </div>
    </section>
  );
}

function ExportDocument({ exportRef }) {
  return (
    <div className="pdf-export-root" ref={exportRef}>
      <UnitOpening />
      {currentUnit.lessons.map((lesson) => <div className="pdf-lesson" key={lesson.id}><LessonHeader lesson={lesson} /><LessonContent lesson={lesson} showNotes={true} /></div>)}
      <IntegratedReview />
    </div>
  );
}

function App() {
  const [activeLesson, setActiveLesson] = useState("reading");
  const [lessonTabsVisible, setLessonTabsVisible] = useState(true);
  const [showNotes, setShowNotes] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [exporting, setExporting] = useState(false);
  const exportRef = React.useRef(null);
  const lastScrollY = React.useRef(0);
  const scrollFrame = React.useRef(null);

  const selectLesson = (lessonId) => {
    setActiveLesson(lessonId);
    setLessonTabsVisible(true);
  };

  useEffect(() => {
    lastScrollY.current = Math.max(0, window.scrollY);
    const handleScroll = () => {
      if (scrollFrame.current !== null) return;
      scrollFrame.current = window.requestAnimationFrame(() => {
        const currentScrollY = Math.max(0, window.scrollY);
        const scrollDelta = currentScrollY - lastScrollY.current;
        if (currentScrollY <= 24) {
          setLessonTabsVisible(true);
        } else if (scrollDelta > 3) {
          setLessonTabsVisible(false);
        } else if (scrollDelta < -3) {
          setLessonTabsVisible(true);
        }
        lastScrollY.current = currentScrollY;
        scrollFrame.current = null;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollFrame.current !== null) window.cancelAnimationFrame(scrollFrame.current);
      scrollFrame.current = null;
    };
  }, []);

  useEffect(() => {
    const lessonSections = currentUnit.lessons
      .map((item) => document.getElementById(`lesson-${item.id}`))
      .filter(Boolean);
    if (!lessonSections.length || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((left, right) => left.boundingClientRect.top - right.boundingClientRect.top);
      const current = visible[0]?.target?.id?.replace("lesson-", "");
      if (current) setActiveLesson(current);
    }, { rootMargin: "-104px 0px -56% 0px", threshold: 0 });
    lessonSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const exportPdf = async () => {
    if (!exportRef.current || exporting) return;
    setExporting(true);
    const exportNode = exportRef.current.cloneNode(true);
    exportNode.classList.add("pdf-export-active");
    document.body.appendChild(exportNode);
    const filename = `Mindset_for_IELTS_Level_1_Unit_${currentUnit.id}_${currentUnit.title.replace(/\s+/g, "_")}.pdf`;
    try {
      // Keep the capture surface in the viewport. html2canvas can return a blank
      // canvas when a fixed/off-screen source is rendered directly.
      exportNode.style.position = "absolute";
      exportNode.style.left = "0px";
      exportNode.style.top = "0px";
      exportNode.style.zIndex = "9999";
      exportNode.style.width = "794px";
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

      const canvas = await html2canvas(exportNode, {
        scale: 1.25,
        useCORS: true,
        backgroundColor: "#fbfaf7",
        logging: false,
        windowWidth: 794,
        width: 794,
        onclone: (clonedDocument) => {
          const clonedRoot = clonedDocument.querySelector(".pdf-export-active");
          if (!clonedRoot) return;
          clonedRoot.style.position = "static";
          clonedRoot.style.left = "auto";
          clonedRoot.style.top = "auto";
          clonedRoot.style.width = "794px";
          clonedRoot.style.zIndex = "auto";
        },
      });

      if (!canvas.width || !canvas.height) throw new Error("PDF capture returned an empty canvas");

      const pdf = new jsPDF({ unit: "in", format: "a4", orientation: "portrait", compress: true });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margins = { top: 0.38, right: 0.38, bottom: 0.46, left: 0.38 };
      const contentWidth = pageWidth - margins.left - margins.right;
      const contentHeight = pageHeight - margins.top - margins.bottom;
      const pixelsPerPdfInch = canvas.width / contentWidth;
      const sliceHeight = Math.max(1, Math.floor(contentHeight * pixelsPerPdfInch));
      const rootRect = exportNode.getBoundingClientRect();
      const captureScale = canvas.width / Math.max(1, rootRect.width);
      const avoidRects = [...exportNode.querySelectorAll(".pdf-lesson, .lesson-section, .data-table-wrap, .callout, .checklist-block, .integrated-review")]
        .map((element) => {
          const rect = element.getBoundingClientRect();
          return {
            top: Math.max(0, Math.round((rect.top - rootRect.top) * captureScale)),
            bottom: Math.min(canvas.height, Math.round((rect.bottom - rootRect.top) * captureScale)),
          };
        })
        .filter((rect) => rect.bottom - rect.top > 8);
      const safeBreaks = [0, canvas.height, ...avoidRects.flatMap((rect) => [rect.top, rect.bottom])]
        .filter((point) => point >= 0 && point <= canvas.height)
        .sort((left, right) => left - right)
        .filter((point, index, points) => index === 0 || point !== points[index - 1]);
      const choosePageEnd = (start, target) => {
        if (target >= canvas.height) return canvas.height;
        const spanning = avoidRects
          .filter((rect) => rect.top < target && rect.bottom > target && rect.top > start + sliceHeight * 0.28)
          .map((rect) => rect.top);
        if (spanning.length) return Math.max(...spanning);
        const previousSafeBreak = safeBreaks.filter((point) => point <= target - 2 && point > start + sliceHeight * 0.35).pop();
        return previousSafeBreak || target;
      };
      const pageCanvas = document.createElement("canvas");
      pageCanvas.width = canvas.width;
      const pageContext = pageCanvas.getContext("2d", { alpha: false });
      if (!pageContext) throw new Error("Unable to prepare PDF page canvas");
      pageContext.fillStyle = "#fbfaf7";

      let offset = 0;
      let pageNumber = 0;
      while (offset < canvas.height) {
        const target = Math.min(canvas.height, offset + sliceHeight);
        let end = choosePageEnd(offset, target);
        if (end <= offset + 4) end = target;
        if (canvas.height - end < sliceHeight * 0.12) end = canvas.height;
        const sourceHeight = Math.max(1, end - offset);
        pageCanvas.height = sourceHeight;
        pageContext.fillStyle = "#fbfaf7";
        pageContext.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
        pageContext.drawImage(canvas, 0, offset, canvas.width, sourceHeight, 0, 0, pageCanvas.width, pageCanvas.height);
        if (pageNumber > 0) pdf.addPage();
        const displayHeight = Math.min(contentHeight, sourceHeight / pixelsPerPdfInch);
        pdf.addImage(pageCanvas.toDataURL("image/jpeg", 0.94), "JPEG", margins.left, margins.top, contentWidth, displayHeight);
        offset = end;
        pageNumber += 1;
      }

      const pdfBlob = pdf.output("blob");
      const downloadUrl = URL.createObjectURL(pdfBlob);
      const downloadLink = document.createElement("a");
      downloadLink.href = downloadUrl;
      downloadLink.download = filename;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      window.setTimeout(() => {
        downloadLink.remove();
        URL.revokeObjectURL(downloadUrl);
      }, 1500);
    } catch (error) {
      console.error("PDF export failed", error);
    } finally {
      exportNode.remove();
      setExporting(false);
    }
  };

  return (
    <div className="app-shell">
      <div className={`mobile-scrim ${mobileOpen ? "is-visible" : ""}`} onClick={() => setMobileOpen(false)} />
      <CourseRail activeLesson={activeLesson} setActiveLesson={setActiveLesson} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <div className="workspace">
        <Topbar showNotes={showNotes} setShowNotes={setShowNotes} setMobileOpen={setMobileOpen} onExport={exportPdf} exporting={exporting} />
        <main className="page-content" id="print-root">
          <div className="page-intro"><span className="page-overline">SOẠN GIÁO ÁN / LEVEL 1</span><span className="last-edited"><span className="live-dot" /> Không gian dạy học</span></div>
          <UnitOpening />
          <LessonTabs activeLesson={activeLesson} onSelect={selectLesson} isVisible={lessonTabsVisible} />
          <LessonRail activeLesson={activeLesson} onSelect={selectLesson} />
          <div className="lesson-panels">
            {currentUnit.lessons.map((unitLesson) => (
              <section className={`lesson-panel lesson-panel-${unitLesson.id}`} id={`lesson-${unitLesson.id}`} key={unitLesson.id}>
                <LessonHeader lesson={unitLesson} />
                <LessonContent lesson={unitLesson} showNotes={showNotes} />
              </section>
            ))}
          </div>
          <IntegratedReview />
          <footer className="page-footer"><span>Mindset for IELTS · Level 1 · Unit {currentUnit.id}</span><span>{currentUnit.title} / teacher planning workspace</span></footer>
        </main>
      </div>
      <ExportDocument exportRef={exportRef} />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
