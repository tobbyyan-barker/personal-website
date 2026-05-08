"use client";

import React, { useState } from "react";

type PageKey =
  | "home"
  | "cv-project"
  | "ei-yolo-project"
  | "music-project"
  | "website-project"
  | "experience"
  | "skills"
  | "achievements"
  | "contact";

type ProjectSection = {
  id: string;
  title: string;
  desc: string;
};

type SidebarProject = {
  title: string;
  subtitle: string;
  pageKey: PageKey;
};

const projectSections: ProjectSection[] = [
  {
    id: "overview",
    title: "Project Overview",
    desc: "项目背景、目标和主要挑战",
  },
  {
    id: "timeline",
    title: "Timeline",
    desc: "项目阶段、训练版本和推进过程",
  },
  {
    id: "progress",
    title: "Project Progress",
    desc: "当前完成度和后续计划",
  },
  {
    id: "data-cleaning",
    title: "Data Cleaning",
    desc: "数据筛选、标注统一和困难样本处理",
  },
  {
    id: "model-training",
    title: "Model Training",
    desc: "YOLO11 训练配置和实验结果",
  },
  {
    id: "result-analysis",
    title: "Result Analysis",
    desc: "误检、漏检和模型问题分析",
  },
  {
    id: "deployment-demo",
    title: "Deployment & Demo",
    desc: "模型部署方式和使用入口",
  },
  {
    id: "results-gallery",
    title: "Results Gallery",
    desc: "图片/视频检测结果展示",
  },
  {
    id: "reflection",
    title: "Reflection",
    desc: "项目总结和后续优化方向",
  },
];

const sidebarProjects: SidebarProject[] = [
  {
    title: "新国投 CV 项目",
    subtitle: "夜间灯杆检测",
    pageKey: "cv-project",
  },
  {
    title: "EI 论文 YOLO 项目",
    subtitle: "目标检测 / 实验分析",
    pageKey: "ei-yolo-project",
  },
  {
    title: "音乐流派识别项目",
    subtitle: "Audio Classification",
    pageKey: "music-project",
  },
  {
    title: "个人网站项目",
    subtitle: "Portfolio Website",
    pageKey: "website-project",
  },
];

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState<PageKey>("home");
  const [activeSection, setActiveSection] = useState<string | null>(null);

  function changePage(pageKey: PageKey) {
    setCurrentPage(pageKey);

    if (pageKey !== "cv-project") {
      setActiveSection(null);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function selectCvSection(sectionId: string) {
    setCurrentPage("cv-project");
    setActiveSection(sectionId);

    setTimeout(() => {
      const target = document.getElementById("cv-section-content");
      if (!target) return;

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  }

  return (
    <main className="page">
      <header className="topbar">
        <div className="brand">
          <span className="brand-dot" />
          <span>Yan Yishun</span>
        </div>

        <nav className="topnav">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
          <button type="button" onClick={() => changePage("contact")}>
            Contact
          </button>
        </nav>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <div className="sidebar-title">Portfolio</div>

          <nav className="sidebar-nav">
            <button
              className={
                currentPage === "home" ? "sidebar-link selected" : "sidebar-link"
              }
              type="button"
              onClick={() => changePage("home")}
            >
              Overview
              <span className="sidebar-link-desc">个人首页 / 方向概览</span>
            </button>

            <div className="sidebar-group">
              <div className="sidebar-group-title">Projects</div>

              <div className="sidebar-sublist">
                {sidebarProjects.map((project) => (
                  <div key={project.title} className="sidebar-project-block">
                    <button
                      className={
                        currentPage === project.pageKey
                          ? "sidebar-subitem selected"
                          : "sidebar-subitem"
                      }
                      type="button"
                      onClick={() => changePage(project.pageKey)}
                    >
                      <span className="sidebar-subitem-title">
                        {project.title}
                      </span>
                      <span className="sidebar-subitem-desc">
                        {project.subtitle}
                      </span>
                    </button>

                    {project.pageKey === "cv-project" &&
                      currentPage === "cv-project" && (
                        <div className="sidebar-section-sublist">
                          {projectSections.map((section) => (
                            <button
                              key={section.id}
                              type="button"
                              className={
                                activeSection === section.id
                                  ? "sidebar-section-link active"
                                  : "sidebar-section-link"
                              }
                              onClick={() => selectCvSection(section.id)}
                            >
                              {section.title}
                            </button>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </div>
            </div>

            <button
              className={
                currentPage === "experience"
                  ? "sidebar-link selected"
                  : "sidebar-link"
              }
              type="button"
              onClick={() => changePage("experience")}
            >
              Experience
              <span className="sidebar-link-desc">实习经历 / 公司职责</span>
            </button>

            <button
              className={
                currentPage === "skills"
                  ? "sidebar-link selected"
                  : "sidebar-link"
              }
              type="button"
              onClick={() => changePage("skills")}
            >
              Skills
              <span className="sidebar-link-desc">技术栈 / 工具链</span>
            </button>

            <button
              className={
                currentPage === "achievements"
                  ? "sidebar-link selected"
                  : "sidebar-link"
              }
              type="button"
              onClick={() => changePage("achievements")}
            >
              Achievements
              <span className="sidebar-link-desc">论文 / 竞赛 / 证书</span>
            </button>

            <button
              className={
                currentPage === "contact"
                  ? "sidebar-link selected"
                  : "sidebar-link"
              }
              type="button"
              onClick={() => changePage("contact")}
            >
              Contact
              <span className="sidebar-link-desc">邮箱 / 电话 / 微信 / QQ</span>
            </button>
          </nav>
        </aside>

        <section className="content">
          {currentPage === "home" && <HomeOverview />}

          {currentPage === "cv-project" && (
            <CvProjectPage
              activeSection={activeSection}
              onSelectSection={selectCvSection}
            />
          )}

          {currentPage === "ei-yolo-project" && <EiYoloProjectPage />}
          {currentPage === "music-project" && <MusicProjectPage />}
          {currentPage === "website-project" && <WebsiteProjectPage />}
          {currentPage === "experience" && <ExperiencePage />}
          {currentPage === "skills" && <SkillsPage />}
          {currentPage === "achievements" && <AchievementsPage />}
          {currentPage === "contact" && <ContactPage />}
        </section>
      </div>
    </main>
  );
}

function HomeOverview() {
  return (
    <>
      <section className="project-header">
        <div className="eyebrow">Personal Portfolio</div>

        <h1>Yan Yishun Portfolio</h1>

        <p className="project-desc">
          This portfolio presents my work in computer vision, deep learning,
          academic research, and web development. I focus on practical AI
          projects that connect data cleaning, model training, result analysis,
          and deployment.
        </p>

        <p className="project-desc">
          The website is designed in a Notion / Unity documentation style. The
          goal is not to create a flashy visual page, but to make each project
          easy to read, easy to navigate, and easy to understand.
        </p>

        <div className="tags">
          <span>Computer Vision</span>
          <span>Deep Learning</span>
          <span>YOLO</span>
          <span>Data Cleaning</span>
          <span>Model Training</span>
          <span>Result Analysis</span>
          <span>Model Deployment</span>
          <span>Web Development</span>
        </div>

        <div className="action-row">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
          <button type="button">Email</button>
        </div>
      </section>

      <section className="detail-section">
        <h2>About This Portfolio</h2>
        <p>
          This website is organized as a project documentation portfolio. Each
          project page focuses on four key questions: what problem I worked on,
          what methods I used, what results I obtained, and what I learned from
          the process.
        </p>
        <p>
          The main project is the nighttime street light detection project from
          my CV internship. Other projects, including the EI paper project,
          music genre recognition, and this portfolio website, will be expanded
          step by step.
        </p>
      </section>

      <section className="detail-section">
        <h2>Current Focus</h2>
        <div className="skill-grid">
          <span>Nighttime Object Detection</span>
          <span>YOLO Model Training</span>
          <span>Dataset Cleaning</span>
          <span>Annotation Standardization</span>
          <span>Error Case Analysis</span>
          <span>Model Demo</span>
          <span>Personal Website</span>
        </div>
      </section>
    </>
  );
}

function CvProjectPage({
  activeSection,
  onSelectSection,
}: {
  activeSection: string | null;
  onSelectSection: (sectionId: string) => void;
}) {
  return (
    <>
      <section className="project-header">
        <div className="eyebrow">新国投 CV 实习项目</div>

        <h1>Nighttime Street Light Detection Based on YOLO</h1>

        <p className="project-desc">
          本项目是一个面向复杂城市夜间道路场景的计算机视觉实习项目，主要完成夜间路灯目标检测任务。
          项目包含数据清洗、标注规范统一、YOLO11 模型训练、结果分析和模型部署规划等流程。
          Baseline 模型在测试集上取得了 P=0.854、R=0.750、mAP@0.5=0.839、mAP@0.5:0.95=0.621 的检测结果。
        </p>

        <div className="tags">
          <span>Computer Vision</span>
          <span>Object Detection</span>
          <span>YOLO11</span>
          <span>Data Cleaning</span>
          <span>Model Training</span>
          <span>Result Analysis</span>
          <span>Model Deployment</span>
        </div>

        <div className="action-row">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <button
            type="button"
            onClick={() => onSelectSection("deployment-demo")}
          >
            Demo
          </button>

          <button
            type="button"
            onClick={() => onSelectSection("results-gallery")}
          >
            Results
          </button>

          <a href="/report.pdf" target="_blank" rel="noreferrer">
            Report
          </a>
        </div>

        <ProjectSectionNav
          activeSection={activeSection}
          onSelectSection={onSelectSection}
        />
      </section>

      <section id="cv-section-content" className="detail-content">
        {!activeSection && (
          <div className="detail-section empty-section">
            <h2>Choose a Section</h2>
            <p>
              请先点击上方或左侧的项目章节入口。点击不同按钮后，这里会显示对应的详细内容。
            </p>
          </div>
        )}

        {activeSection && renderCvSectionContent(activeSection)}
      </section>
    </>
  );
}

function ProjectSectionNav({
  activeSection,
  onSelectSection,
}: {
  activeSection: string | null;
  onSelectSection: (sectionId: string) => void;
}) {
  return (
    <div className="project-section-nav">
      <div className="project-section-nav-header">
        <h2>Project Sections</h2>
        <p>下面 9 个入口属于当前项目内部目录，点击后显示对应部分内容。</p>
      </div>

      <div className="section-list">
        {projectSections.map((section) => (
          <button
            key={section.id}
            className={
              activeSection === section.id
                ? "section-card active"
                : "section-card"
            }
            type="button"
            onClick={() => onSelectSection(section.id)}
          >
            <span className="section-title">{section.title}</span>
            <span className="section-desc">{section.desc}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function renderCvSectionContent(sectionId: string) {
  switch (sectionId) {
    case "overview":
      return (
        <section className="detail-section">
          <h2>Project Overview</h2>
          <p>
            本项目面向复杂夜间道路场景下的路灯检测任务，旨在构建一个能够识别夜间灯光的检测模型，实际场景中存在光照不足、
            目标遮挡、过曝、小目标，以及树干、建筑立柱、车身边缘、装饰灯相似的问题，容易造成的漏检和误检。
          </p>
          <p>
            本项目主要围绕数据清洗、标注规范统一、困难样本补充和YOLO11模型训练和模型结果评估展开。通过多轮数据集调整与实验对比,
            分析模型在真实场景里的检测情况以及模型的主要错误来源，为后续模型优化和部署提供依据。
          </p>
        </section>
      );

    case "timeline":
      return (
        <section className="detail-section">
          <h2>Timeline</h2>
          <ul className="timeline-list">
            <li>
              <h3>阶段 1：数据整理与任务理解</h3>
              <p>
                明确夜间路灯检测任务目标，整理原始路灯数据集与ExDark夜间图像，
                初步划分训练集、验证集和测试集，为后续模型训练建立基础数据流程。
              </p>
            </li>

            <li>
              <h3>阶段 2：数据清洗与标注规范统一</h3>
              <p>
                对数据进行筛选、清洗和人工复核，处理遮挡、过曝、远距离小目标和多头灯杆等复杂场景，
                统一标注框风格，降低数据噪声对模型训练的影响。
              </p>
            </li>

            <li>
              <h3>阶段 3：YOLO11 模型训练与版本迭代</h3>
              <p>
                基于YOLO11n模型快速判断YOLO11系列是否适合这个任务,YOLO11s 进行 baseline 训练，并通过补充ExDark里面的夜间正样本、背景负样本和AI辅助标注数据，
                进行多版本实验对比，使训练数据逐步贴近真实业务场景。
              </p>
            </li>

            <li>
              <h3>阶段 4：结果分析与模型评估</h3>
              <p>
                结合 Precision、Recall、mAP50 和 mAP50-95 等指标评估模型表现，
                并重点分析遮挡场景、远距离小目标、重复检测框、复杂背景误检和漏检问题。
              </p>
            </li>

            <li>
              <h3>阶段 5：部署规划与成果展示</h3>
              <p>
                规划模型推理和成果展示方式，支持图片和视频输入，并输出带检测框的可视化结果。
                后续可进一步探索模型部署、无人机视角数据扩展和业务场景适配。
              </p>
            </li>
          </ul>
        </section>
      );

    case "progress":
      return (
        <section className="detail-section">
          <h2>Project Progress</h2>

          <div className="progress-list">
            <StatusItem label="数据清洗与样本筛选" status="已完成" />
            <StatusItem label="标注规范统一" status="已完成" />
            <StatusItem label="YOLO11 模型训练" status="已完成" />
            <StatusItem label="结果分析与误检复盘" status="已完成" />
            <StatusItem label="可视化成果展示" status="已完成" />
            <StatusItem label="模型部署与视频 Demo" status="进行中" />
            <StatusItem label="项目文档与作品集整理" status="进行中" />
          </div>
        </section>
      );

    case "data-cleaning":
      return (
        <section className="detail-section">
          <h2>Data Cleaning</h2>

          <h3>Data Sources</h3>
          <p>
            本项目的数据来源于三部分:公开网络资源中的路灯检测数据集,从ExDark数据集中
            筛选的夜间正样本图像,从ExDark数据集中筛选的、用于降低模型误检的背景负样本图像。
          </p>

          <h3>Sample Selection</h3>
          <p>
            在数据筛选阶段，本项目并未直接使用所有收集到的图像，而是优先保留夜间道路特征明显,含有目标(street light/lamp pole),且目标主体清晰可见的
            图片，最后用于后续模型训练。对于目标不清晰，有严重遮挡以及与本任务关联较弱，人工难以判断的图像，暂不纳入当前训练集。
          </p>

          <p>
            对于背景图的筛选，本项目根据每次训练后模型出现的主要误检问题，有针对性地从 ExDark
            数据集中挑选包含公交车边缘、车灯、建筑立柱、树干、广告灯和装饰灯等结构的图像，
            用于后续负样本补充。
          </p>

          <h3>Annotation Standardization</h3>
          <p>
            为了防止本项目的标注和公开网络资源的路灯检测数据集标注差异给模型训练带来影响，以及解决公开网络资源中的路灯检测数据集中部分样本存在的
            远处模糊目标过度标注,部分标注框偏大的问题，本项目结合原始标注的合理性，对人工新增样本和原始数据集进行标注规范统一,标注规范如下所示:
          </p>

          <ul>
            <li>清晰图：框灯头 + 灯臂 + 主要可见杆体。不强求框到底, 框主体即可。</li>
            <li>标注框不宜太宽：吃进大量背景就收。</li>
            <li>标注框不宜太细：只剩局部细杆就放。</li>
            <li>遮挡图：只框可见且确定的主体。</li>
            <li>复杂近邻目标：当原始标注逻辑合理时，优先保持一致。</li>
            <li>过曝图：保主体，不乱吃光晕，不强求全标远处小目标。</li>
            <li>增强图：沿用原图风格，不乱改框的大小。</li>
          </ul>

          <h3>Negative Samples</h3>
          <p>
            针对模型在公交车边缘，公交车的车灯，公交车内部的灯带，建筑立柱，广告灯，树干，
            装饰灯等竖直结构上发生误检的问题，本项目从ExDark数据集里选取了62张包含所有上述
            竖直结构的背景图像作为负样本。
          </p>

          <p>
            针对这些负样本，本项目创建了对应的空标签文件,使其能够正常参与YOLO11训练，旨在帮助模型学习: "哪些目标不该识别为路灯"
          </p>

          <h3>Dataset Iteration</h3>
          <p>
            在数据集构建过程中，本项目进行了多轮迭代。不同版本的数据调整与模型表现如下：
          </p>

          <ul>
            <li>
              <strong>Version 1:</strong> 基于公开网络资源中的路灯检测数据集建立baseline，
              模型具备较好的基础检测能力。
            </li>
            <li>
              <strong>Version 2:</strong> 去除第一版数据集中的所有增强图，并加入 20 张 ExDark 正样本。
              由于整体数据量不足，模型性能出现下降。
            </li>
            <li>
              <strong>Version 3:</strong> 重新引入增强数据，并补充 34 张背景样本和 19 张额外标注的
              ExDark 正样本。相比第二版，模型表现有明显提升，但仍存在公交车边缘、车灯和树干等误检问题。
            </li>
            <li>
              <strong>Version 4:</strong> 基于第三版模型的主要误检类型，额外补充 28 张背景样本。
              模型误检情况相较 baseline、第二版和第三版均有所下降。
            </li>
          </ul>
        </section>
      );

    case "model-training":
      return (
        <section className="detail-section">
          <h2>Model Training</h2>

          <h3>Model Selection</h3>
          <p>
            本项目采用 YOLO11 系列模型作为目标检测 baseline，主要训练 YOLO11n
            和 YOLO11s。其中,YOLO11n参数量较少，可以用于快速评估YOLO11系列模型是否适合这类任务以及部署评估。
            而YOLO11s参数量更大，特征提取能力更强，适合做本实验的baseline 模型
          </p>

          <h3>Training Configuration</h3>
          <p>
            本项目基于 Ultralytics YOLO 框架进行目标检测模型训练，训练环境主要由
            Python、PyTorch、CUDA-enabled GPU 和 Ultralytics YOLO 框架组成。实验过程中主要使用
            YOLO11s 作为 baseline 模型，同时使用 YOLO11n 进行快速实验。
          </p>

          <ul>
            <li><strong>Framework:</strong> Ultralytics YOLO</li>
            <li><strong>Deep Learning Backend:</strong> PyTorch</li>
            <li><strong>Hardware Acceleration:</strong> NVIDIA 4060</li>
            <li><strong>Task:</strong> Object Detection</li>
            <li><strong>Models:</strong> YOLO11n / YOLO11s</li>
            <li><strong>Image Size:</strong> 640 × 640</li>
            <li><strong>Epochs:</strong> 30</li>
            <li><strong>Batch Size:</strong> 8</li>
            <li><strong>Num Workers:</strong> 2</li>
            <li><strong>Device:</strong> GPU / device 0</li>
          </ul>

          <p>
            本实验的数据集通过<code>data.yaml</code>文件进行组织，该文件包含了训练集，验证集，测试集的路径以及类别信息，在训练前，本研究还会检查图片和标签是否一一对应，尽量确保图片与标签文件一一对应，避免因图片或标签缺失影响训练过程。
          </p>

          <pre>
            <code>{`yolo detect train \\
                    model=yolo11s.pt \\
                    data=/path/to/data.yaml \\
                    epochs=30 \\
                    imgsz=640 \\
                    batch=8 \\
                    device=0 \\
                    workers=2`
            }</code>
          </pre>

          <h3>Training Process</h3>
          <p>
            在训练前，本研究先检查了图片和标签是否一一对应，确保没有任何的图片/标签遗漏。本研究还检查了每个背景图片是否都有对应的空标签文件。
            随后运用了Ultralytics YOLO的命令行yolo detect train... 来进行模型训练。并新建了独立文件夹，把每次训练的最好结果和最后一轮结果保存到里面，
            便于后续评估和分析。
          </p>
          <p>
            在训练过程中，本研究主要关注box loss, classification loss, precision, recall, mAP50,mAP50@95等指标的变化，根据这些变化来判断模型训练是否有效。
          </p>
          <p>
            训练完成后，本研究会根据验证集和测试集的评价指标定量分析模型的训练效果,也会根据模型预测出来的图片情况来定性分析模型的问题(包括误检，漏检，小目标不敏感等这些问题)
          </p>

          <h3>Experiment Design</h3>
          <p>
            由于夜间灯杆检测任务中可直接使用的公开数据集较少，本项目没有一开始就追求大规模数据训练，
            而是采用了baseline基础识别能力 + AI 辅助标注 + 人工修正 + 数据回灌 + 迭代训练的方式逐步优化模型,
            使得模型直接服务于对应的业务场景。
          </p>

          <p>
            在第一阶段，本项目先使用已有的公开网络数据集训练 baseline 模型，使模型初步学习 street light / lamp pole
            的基本外观特征。随后将ExDark数据集中的夜间正样本输入 baseline 模型进行预测，
            利用模型生成初步检测结果，再由人工检查并修正明显错误的预测框，形成新的高质量标注样本。
          </p>

          <p>
            对于容易引发误检的复杂背景场景，本项目也从ExDark数据集中补充了背景负样本，并将其直接加入训练集，
            让模型逐步学习哪些竖直结构、亮光区域或不属于目标类别的城市元素，通过这种方式，
            数据集逐步从通用公开数据向实际业务场景靠近。
          </p>

          <p>
            整体来看，该流程可以理解为一种面向业务场景的迭代训练方法：先用 baseline 建立基础识别能力，
            再通过模型预测辅助标注，结合人工监管保证数据质量，最后将修正后的正样本和用于减少误检的背景负样本回灌到训练集中，
            持续推动模型向真实夜间道路场景适配。
          </p>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Version</th>
                  <th>Dataset Strategy</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Baseline</td>
                  <td>使用公开网络资源中的路灯检测数据集训练 YOLO11s</td>
                  <td>让模型初步学习夜间灯杆/路灯的基础特征</td>
                </tr>
                <tr>
                  <td>Version2</td>
                  <td>去除增强图像，并加入20张人工标注的ExDark夜间正样本</td>
                  <td>观察数据规模和夜间样本变化对模型性能的影响</td>
                </tr>
                <tr>
                  <td>Version3</td>
                  <td>重新引入增强图像，并额外补充19张人工标注的ExDark夜间正样本和34张背景负样本</td>
                  <td>提升模型对真实夜间场景的适应能力</td>
                </tr>
                <tr>
                  <td>Version4</td>
                  <td>根据第三版模型在复杂背景下的误检类型继续补充28张包含公交车边缘、建筑立柱、树干等相似结构背景负样本背景负样本,用于增强模型对非目标竖直结构的识别能力</td>
                  <td>减少公交车边缘、建筑立柱、树干等相似结构造成的误检</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            通过多版本实验可以看出，本项目的模型训练并不是一次性完成的，而是围绕真实夜间道路场景中的误检和漏检问题进行持续迭代。
            后续优化将继续从数据质量、困难样本补充、标注规范统一和推理阈值调整等方面展开。
          </p>
        </section>
      );

    case "result-analysis":
      return (
        <section className="detail-section">
          <h2>Result Analysis / 结果分析</h2>

          <h3>Model Performance Comparison</h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Version</th>
                  <th>Precision</th>
                  <th>Recall</th>
                  <th>mAP50</th>
                  <th>mAP50-95</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Baseline</td>
                  <td>0.854</td>
                  <td>0.750</td>
                  <td>0.839</td>
                  <td>0.621</td>
                </tr>
                <tr>
                  <td>Version2</td>
                  <td>0.737</td>
                  <td>0.561</td>
                  <td>0.619</td>
                  <td>0.404</td>
                </tr>
                <tr>
                  <td>Version3</td>
                  <td>0.894</td>
                  <td>0.702</td>
                  <td>0.822</td>
                  <td>0.612</td>
                </tr>
                <tr>
                  <td>Version4</td>
                  <td>0.870</td>
                  <td>0.711</td>
                  <td>0.826</td>
                  <td>0.616</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Version Comparison / 模型比较</h3>
          <p>
            从实验结果来看，Version2 的性能出现明显下降。主要原因是该版本去除了公开网络数据集中的增强图像，导致训练数据规模和多样性下降；同时新增的 ExDark 夜间正样本数量较少，模型尚未充分适应 ExDark 数据集中更复杂的夜间场景特征。因此，Version2 在 Precision、Recall、mAP50 和 mAP50-95 等指标上均低于 Baseline 模型。
          </p>
          <p>
            Version3 和Version4 在重新引入增强数据并继续补充ExDark数据集中合适的夜间正样本，背景负样本后，整体性能有所恢复。其中，Version3 的 Precision 达到 0.894，高于 Baseline，说明背景负样本的加入在一定程度上减少了模型误检。
            但是Version3 和Version4 的recall 和 mAP50 均低于baseline, 说明Version3 和Version4 的训练数据分布和baseline有所差异，且新增训练数据和原始的验证集，测试集之间仍存在一定的分布差异。模型对小目标、遮挡目标和复杂夜景场景的泛化能力仍需要进一步优化。
          </p>

          <h3>Error Analysis</h3>
          <p>
            从预测结果来看, 模型的主要问题集中在误检和漏检两个方面。误检主要出现在和路灯形态相似的竖直结构上,
            例如公交车边缘,公交车灯，车内灯带，建筑立柱，广告灯牌等等。这说明模型在局部场景中容易依赖局部亮度,
            竖直结构，形状特征来判断，没有很好的区分路灯和这些竖直结构的形态差异。
          </p>
          <p>
            漏检问题主要出现在远距离小目标，密集路灯场景，被树木遮挡场景中。这类目标在图像中要么占比较小,
            要么很密集(不好从中提取目标特征)，要么被背景遮挡。使得目标轮廓和背景之间的区分度较低, 模型难以准确定位
            完整的灯杆和灯头区域。
          </p>
          <p>
            此外，部分场景中也出现了重复检测框问题。该问题可能与目标边界模糊、标注粒度不完全统一以及 NMS 后处理阈值设置有关。单纯提高置信度阈值可以减少部分低置信度框，但对于置信度接近的重复框，仍需要结合 NMS IoU 阈值调整、标注规范优化和困难样本补充进一步解决。
          </p>
          <h4> Typical Error Cases / 典型错误案例</h4>

          <div className="case-grid">
            <figure className="case-card">
              <img
                src="/images/lamp-project/baseline-false-positive-bus-edge.png"
                alt="False positive caused by bus edge"
              />
              <figcaption>
                案例 1：公交车边缘、车内灯带等竖直结构容易被误检为路灯。
              </figcaption>
            </figure>

            <figure className="case-card">
              <img
                src="/images/lamp-project/baseline-false-positive-bus-structure.png"
                alt="Baseline false positive caused by bus structure"
              />
              <figcaption>
                案例 2：Baseline 模型在公交车和复杂夜间背景中产生多处误检，说明竖直结构和高亮区域会干扰目标判断。
              </figcaption>
            </figure>

            <figure className="case-card">
              <img
                src="/images/lamp-project/false-positive-building.jpg"
                alt="False positive caused by tree or building pillar"
              />
              <figcaption>
                案例 3：建筑立柱等与灯杆形态相似的背景结构可能造成Baseline 模型误检。
              </figcaption>
            </figure>

            <figure className="case-card">
              <img
                src="/images/lamp-project/missed-small-target.jpg"
                alt="Missed detection caused by small or occluded street light"
              />
              <figcaption>
                案例 4：Version4对部分路灯能够完成检测，但在远距离小目标、遮挡目标或弱光目标中，仍可能出现低置信度,定位不完整或漏检问题。
              </figcaption>
            </figure>
          </div>
          <h3> Optimization Direction / 后续优化方向</h3>
          <p>
            后续优化方向包括：继续补充公交车边缘、公交车灯带、建筑立柱、树干等复杂背景负样本；统一复杂样本里的灯杆、灯头和多头路灯的标注规范；针对遮挡和远距离小目标补充更多困难样本；在推理阶段尝试调整 confidence threshold (置信度阈值) 和 NMS IoU threshold（非极大值抑制的交并比阈值），以减少低置信度误检和重复检测框问题。
          </p>
        </section>
      );

    case "deployment-demo":
      return (
        <section className="detail-section">
          <h2>Deployment & Demo</h2>
          <p>
            后续计划支持常见图片格式和视频格式输入，包括 .jpg、.jpeg、.png 和 .mp4。
            输出结果为带有检测框、类别标签和置信度的图片或视频。
          </p>

          <div className="demo-box">
            <div>
              <h3>Supported Input</h3>
              <p>.jpg / .jpeg / .png / .mp4</p>
            </div>
            <div>
              <h3>Output</h3>
              <p>Detection results with bounding boxes and confidence scores.</p>
            </div>
          </div>
          <h3>Current Status</h3>

          <p>
            当前项目已经完成 YOLO11 模型的本地训练、测试集评估和典型预测结果分析。
            现阶段模型主要通过 Ultralytics YOLO 命令行进行推理验证，能够对输入图片生成带有检测框的预测结果。
            由于 Web 端模型部署涉及前端上传、后端推理接口、模型加载和预测结果返回等多个模块，
            因此该部分将作为项目下一阶段的工程化优化方向继续推进。
          </p>

          <h3>Planned Deployment Pipeline</h3>

          <p>
            后续计划采用前后端分离的方式搭建 Web Demo。前端页面负责提供图片上传入口、展示原始图片和检测结果；
            后端服务负责接收图片文件，加载训练好的 YOLO 模型进行推理，并将带有检测框的结果图片或 JSON 格式的检测结果返回给前端。
          </p>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Module</th>
                  <th>Function</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Frontend Upload</td>
                  <td>提供图片上传入口，并展示原图与预测结果</td>
                  <td>Planned</td>
                </tr>
                <tr>
                  <td>Backend API</td>
                  <td>接收图片文件，调用模型进行推理</td>
                  <td>Planned</td>
                </tr>
                <tr>
                  <td>Model Inference</td>
                  <td>加载 YOLO11 模型并输出检测框结果</td>
                  <td>Tested Locally</td>
                </tr>
                <tr>
                  <td>Result Visualization</td>
                  <td>返回带检测框的图片或结构化预测结果</td>
                  <td>Partially Completed</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Future Implementation</h3>

          <p>
            在后续实现中，可以优先使用 FastAPI 搭建轻量级后端接口，将训练好的 YOLO 权重文件加载到服务端，
            并通过 POST 接口接收前端上传的图片。模型完成推理后，后端可以返回预测框坐标、类别、置信度，
            或直接返回绘制好检测框的结果图片。当前阶段先保留本地预测结果展示，后续再逐步补充在线推理功能。
          </p>
        </section>
      );

    case "results-gallery":
      return (
        <section className="detail-section">
          <h2>Results Gallery</h2>
          <p>
            本模块用于展示夜间路灯检测模型的可视化结果，包括检测结果图片、视频demo、以及典型的误检案例和漏检案例。
            展示内容主要分为4类：普通夜间道路、遮挡场景、远距离小目标和复杂背景四类，用于直观呈现
            模型在不同场景下的检测效果
          </p>

          <div className="gallery-grid">
            <div className="gallery-card">
              <img
                src="/images/lamp-project/success-road-1.jpg"
                alt="普通夜间道路检测结果"
              />
              <h3>普通夜间道路检测</h3>
              <p>
                模型能够在普通夜间道路场景中较准确地识别路灯目标，说明模型已经具备基础检测能力。
              </p>
            </div>

            <div className="gallery-card">
              <img
                src="/images/lamp-project/success-road-2.jpg"
                alt="多路灯目标检测结果"
              />
              <h3>多路灯目标检测</h3>
              <p>
                在低照度场景下，模型能够同时检测出多个路灯目标，体现了对多目标场景的适应能力。
              </p>
            </div>

            <div className="gallery-card">
              <img
                src="/images/lamp-project/success-distance-1.jpg"
                alt="远距离小目标检测结果"
              />
              <h3>远距离小目标检测</h3>
              <p>
                模型能够识别道路远处的多个路灯目标，说明其对透视场景中的小目标具有一定检测能力。
              </p>
            </div>

            <div className="gallery-card">
              <img
                src="/images/lamp-project/success-occlusion-1.jpg"
                alt="遮挡场景下的路灯检测结果"
              />
              <h3>遮挡场景检测</h3>
              <p>
                在树枝、暗光等复杂条件下，模型仍能够检测出部分被遮挡的路灯目标，但置信度会有所下降。
              </p>
            </div>

            <div className="gallery-card">
              <img
                src="/images/lamp-project/success-complex-1.jpg"
                alt="复杂城市背景下的路灯检测结果"
              />
              <h3>复杂背景检测</h3>
              <p>
                在包含车辆、建筑物和复杂光照的城市夜间场景中，模型仍能对路灯目标进行有效识别。
              </p>
            </div>

            <div className="gallery-card">
              <img
                src="/images/lamp-project/success-overview-1.jpg"
                alt="整体检测效果展示"
              />
              <h3>整体检测效果</h3>
              <p>
                该结果展示了模型在真实夜间场景中的综合检测能力，可作为本项目的代表性检测结果。
              </p>
            </div>
          </div>
        </section>
      );

    case "reflection":
      return (
        <section className="detail-section">
          <h2>Reflection</h2>
          <p>
            本项目让我意识到，目标检测项目并不只是训练模型。
            数据质量、标注规范、错误样本分析和部署展示同样重要。
          </p>
          <p>
            后续优化方向将重点从降低误检转向提升 Recall 稳定性和减少重复框。
            一方面，继续补充远距离小目标、弱光目标和遮挡目标样本，提升模型对困难正样本的识别能力；
            另一方面，调整置信度阈值和 NMS 参数，减少密集路灯场景中的重复检测框。
            同时，会重新构建更贴近真实部署场景的验证集和测试集，使评估结果更准确地反映模型在实际夜间道路环境中的表现。
            最后也会进行模型部署，让项目从实验结果进一步走向可展示、可复现、可使用的完整作品。
          </p>
        </section>
      );

    default:
      return null;
  }
}

function EiYoloProjectPage() {
  return (
    <section className="project-header">
      <div className="eyebrow">EI Conference Paper Project</div>
      <h1>EI 论文 YOLO 项目</h1>
      <p className="project-desc">
        这里后续可以展示 EI 论文相关的 YOLO 实验、模型结构、数据集处理、
        结果对比、图表展示和论文成果。
      </p>
      <p className="project-desc">
        建议后续补充：研究背景、方法设计、实验结果、消融实验、论文链接或录用证明。
      </p>
    </section>
  );
}

function MusicProjectPage() {
  return (
    <section className="project-header">
      <div className="eyebrow">Audio Classification Project</div>
      <h1>音乐流派识别项目</h1>
      <p className="project-desc">
        这里后续可以展示音乐流派识别项目，包括音频特征提取、MFCC / Mel
        特征、模型训练、混淆矩阵和分类结果分析。
      </p>
      <p className="project-desc">
        如果这个项目和论文有关，可以放模型对比、数据增强方法和最终分类效果。
      </p>
    </section>
  );
}

function WebsiteProjectPage() {
  return (
    <section className="project-header">
      <div className="eyebrow">Portfolio Website Project</div>
      <h1>个人网站项目</h1>
      <p className="project-desc">
        这里可以展示当前个人网站的设计思路、页面结构、技术栈和部署方式。
      </p>
      <p className="project-desc">
        这个项目可以作为前端能力和项目展示能力的补充，重点说明你如何用
        Notion / Unity 文档风格组织个人项目材料。
      </p>
    </section>
  );
}

function ExperiencePage() {
  return (
    <main className="project-page">
      <section className="project-header">
        <div className="eyebrow">Experience</div>
        <h1>实习经历</h1>

        <p className="project-desc">
          本页面记录我的实习经历与阶段性成长，重点展示我在 AI/CV 项目实践、
          工程协作和项目总结中的具体收获。
        </p>
      </section>

      <section className="content-section">
        <div className="experience-card">
          <div className="eyebrow">AI / Computer Vision Intern</div>

          <h2>福州城投新基建｜计算机视觉实习</h2>

          <p>
            在实习期间，我主要参与夜间道路路灯检测相关项目，
            基于 YOLO 系列目标检测模型，对夜间道路场景中的灯杆进行识别。
            我的工作覆盖数据整理、图像标注、模型训练、测试评估、误检分析和项目展示等环节。
          </p>

          <ul>
            <li>整理夜间道路场景图像，并筛选适合路灯检测任务的训练样本。</li>
            <li>使用 Label Studio 自动化标注完成图像标注、标注检查与数据导出。</li>
            <li>使用 YOLO11 系列模型进行训练、验证与预测，分析不同版本模型的表现。</li>
            <li>结合 Precision、Recall、mAP50、mAP50-95 等指标评估模型效果。</li>
            <li>分析复杂背景下的误检、漏检和重复框问题，并整理阶段性优化思路。</li>
            <li>将项目过程整理进个人作品集网站，用于后续展示与总结。</li>
          </ul>

          <p>
            通过这段实习，我进一步理解了计算机视觉项目并不只是训练模型，
            数据质量、标注规范、硬件与算力资源配置、错误样本分析和项目展示同样重要。
            这段经历也帮助我从课程学习逐步过渡到更完整的 AI 应用项目实践。
          </p>
        </div>
      </section>
    </main>
  );
}

function SkillsPage() {
  return (
    <section className="project-header">
      <div className="eyebrow">个人技术</div>
      <h1>技术栈</h1>

      <p className="project-desc">
        我的技术能力主要围绕人工智能应用、计算机视觉项目实践与前端作品集开发展开，
        目前重点积累了数据处理、图像标注、YOLO 模型训练、结果分析和项目展示等能力。
      </p>

      <div className="skill-grid">
        <span>Python</span>
        <span>YOLO</span>
        <span>Computer Vision</span>
        <span>Object Detection</span>
        <span>Data Annotation</span>
        <span>Label Studio</span>
        <span>Dataset Cleaning</span>
        <span>Model Training</span>
        <span>Result Analysis</span>
        <span>Precision / Recall / mAP</span>
        <span>PyTorch / PaddlePaddle</span>
        <span>GitHub</span>
        <span>Vercel</span>
      </div>
    </section>
  );
}

function AchievementsPage() {
  return (
    <main className="project-page">
      <section className="project-header">
        <div className="eyebrow">Achievements</div>
        <h1>成果与荣誉</h1>

        <p className="project-desc">
          本科阶段，我积极参与科研训练、学科竞赛、英语能力提升和项目实践，
          逐步积累了跨学科问题分析、技术表达和团队协作能力。
        </p>
      </section>

      <section className="content-section">
        <div className="content-card">
          <h2>科研成果</h2>
          <ul>
            <li> <strong>第一作者 EI 会议论文</strong>：参与选题、实验分析、论文撰写与会议答辩。</li>
            <li>通过科研训练提升了英文论文写作、实验总结和学术表达能力。</li>
          </ul>
        </div>

        <div className="content-card">
          <h2>竞赛经历</h2>
          <ul>
            <li>美国大学生数学建模竞赛  <strong>Honorable Mention。</strong></li>
            <li><strong>挑战杯省级铜奖。</strong></li>
            <li><strong>电工杯数学建模竞赛省级三等奖。</strong></li>
          </ul>
        </div>

        <div className="content-card">
          <h2>学习与英语能力</h2>
          <ul>
            <li><strong>福州大学校三等奖学金。</strong></li>
            <li><strong>IELTS Overall 6.5。</strong></li>
            <li>CET-4 已通过，<strong>CET-6 504。</strong></li>
          </ul>
        </div>

        <div className="content-card">
          <h2>项目成果</h2>
          <ul>
            <li>完成夜间道路路灯检测项目的阶段性训练、评估与结果分析。</li>
            <li>搭建个人作品集网站，用于展示 AI/CV 项目过程与阶段性成果。</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

function ContactPage() {
  return (
    <main className="project-page">
      <section className="project-header">
        <div className="eyebrow">Contact</div>
        <h2>联系方式</h2>

        <p className="project-desc">
          如果你对我的项目经历、计算机视觉实践、保研/实习合作或技术交流感兴趣，
          欢迎通过以下方式联系我。我也会持续更新个人作品集中的项目内容与学习记录。
        </p>
      </section>

      <section className="content-section">
        <div className="content-card">
          <h2>Email</h2>
          <p>
            推荐通过邮箱联系我，适合用于项目交流、实习沟通、科研联系和正式材料往来。
          </p>
          <a href="mailto:YISHUN.YAN.2024@mumail.ie">
            YISHUN.YAN.2024@mumail.ie
          </a>
        </div>

        <div className="content-card">
          <h2>GitHub</h2>
          <p>
            我的部分项目代码、学习记录和作品集内容会整理在 GitHub 中，后续也会继续完善。
          </p>
          <a
            href="https://github.com/tobbyyan-barker"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/tobbyyan-barker
          </a>
        </div>

        <div className="content-card">
          <h2>Portfolio</h2>
          <p>
            个人作品集网站用于展示我的 AI/CV 项目实践、实习经历、技能能力和阶段性成果。
          </p>
          <p>个人网站链接将在部署完成后更新。</p>
        </div>

        <div className="content-card">
          <h2>Other Contact</h2>
          <p>
            微信、电话等联系方式可根据具体交流需要进一步提供。
          </p>
        </div>
      </section>
    </main>
  );
}


function ProgressItem({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="progress-item">
      <div className="progress-meta">
        <span>{label}</span>
        <span>{value}%</span>
      </div>

      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function StatusItem({ label, status }: { label: string; status: string }) {
  const isDone = status === "已完成";

  return (
    <div className="status-item">
      <div className="status-left">
        <span className={isDone ? "status-dot done" : "status-dot ongoing"} />
        <span className="status-label">{label}</span>
      </div>

      <span className={isDone ? "status-badge done" : "status-badge ongoing"}>
        {status}
      </span>
    </div>
  );
}
