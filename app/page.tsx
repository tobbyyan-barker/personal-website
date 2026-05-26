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

const eiProjectSections: ProjectSection[] = [
  {
    id: "overview",
    title: "Project Overview",
    desc: "项目背景、论文主题和个人参与内容",
  },
  {
    id: "research-background",
    title: "Research Background",
    desc: "目标检测任务背景和研究动机",
  },
  {
    id: "method-workflow",
    title: "Method & Workflow",
    desc: "YOLO 实验流程、数据处理和模型训练",
  },
  {
    id: "experiments-results",
    title: "Experiments & Results",
    desc: "实验设置、指标结果和对比分析",
  },
  {
    id: "reflection",
    title: "Reflection",
    desc: "论文项目收获和后续优化方向",
  },
];

const musicProjectSections: ProjectSection[] = [
  {
    id: "overview",
    title: "Project Overview",
    desc: "项目背景、任务目标和主要内容",
  },
  {
    id: "research-background",
    title: "Research Background",
    desc: "音乐分类任务背景和研究动机",
  },
  {
    id: "method-workflow",
    title: "Method & Workflow",
    desc: "音频特征提取、模型训练和实验流程",
  },
  {
    id: "experiments-results",
    title: "Experiments & Results",
    desc: "实验设置、分类结果和指标分析",
  },
  {
    id: "reflection",
    title: "Reflection",
    desc: "项目收获和后续优化方向",
  },
];

const websiteProjectSections: ProjectSection[] = [
  {
    id: "overview",
    title: "Project Overview",
    desc: "项目概述、展示目标和网站定位",
  },
  {
    id: "motivation",
    title: "Motivation",
    desc: "搭建个人作品集网站的原因",
  },
  {
    id: "website-structure",
    title: "Website Structure",
    desc: "网站整体结构和内容组织方式",
  },
  {
    id: "implementation",
    title: "Implementation",
    desc: "Next.js、TypeScript 和组件化实现方式",
  },
  {
    id: "deployment",
    title: "Deployment",
    desc: "GitHub 与 Vercel 自动部署流程",
  },
  {
    id: "reflection",
    title: "Reflection",
    desc: "项目反思和阶段性收获",
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
    setActiveSection(null);
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

  function selectEiSection(sectionId: string) {
    setCurrentPage("ei-yolo-project");
    setActiveSection(sectionId);

    setTimeout(() => {
      const target = document.getElementById("ei-section-content");
      if (!target) return;

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  }

  function selectMusicSection(sectionId: string) {
    setCurrentPage("music-project");
    setActiveSection(sectionId);

    setTimeout(() => {
      const target = document.getElementById("music-section-content");
      if (!target) return;

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  }

  function selectWebsiteSection(sectionId: string) {
    setCurrentPage("website-project");
    setActiveSection(sectionId);

    setTimeout(() => {
      const target = document.getElementById("website-section-content");
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
          <a href="https://github.com/tobbyyan-barker" target="_blank" rel="noreferrer">
            GitHub
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

                    {project.pageKey === "ei-yolo-project" &&
                      currentPage === "ei-yolo-project" && (
                        <div className="sidebar-section-sublist">
                          {eiProjectSections.map((section) => (
                            <button
                              key={section.id}
                              type="button"
                              className={
                                activeSection === section.id
                                  ? "sidebar-section-link active"
                                  : "sidebar-section-link"
                              }
                              onClick={() => selectEiSection(section.id)}
                            >
                              {section.title}
                            </button>
                          ))}
                        </div>
                      )}

                    {project.pageKey === "music-project" &&
                      currentPage === "music-project" && (
                        <div className="sidebar-section-sublist">
                          {musicProjectSections.map((section) => (
                            <button
                              key={section.id}
                              type="button"
                              className={
                                activeSection === section.id
                                  ? "sidebar-section-link active"
                                  : "sidebar-section-link"
                              }
                              onClick={() => selectMusicSection(section.id)}
                            >
                              {section.title}
                            </button>
                          ))}
                        </div>
                      )}

                    {project.pageKey === "website-project" &&
                      currentPage === "website-project" && (
                        <div className="sidebar-section-sublist">
                          {websiteProjectSections.map((section) => (
                            <button
                              key={section.id}
                              type="button"
                              className={
                                activeSection === section.id
                                  ? "sidebar-section-link active"
                                  : "sidebar-section-link"
                              }
                              onClick={() => selectWebsiteSection(section.id)}
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

          {currentPage === "ei-yolo-project" && (
            <EiYoloProjectPage
              activeSection={activeSection}
              onSelectSection={selectEiSection}
            />
          )}

          {currentPage === "music-project" && (
            <MusicProjectPage
              activeSection={activeSection}
              onSelectSection={selectMusicSection}
            />
          )}

          {currentPage === "website-project" && (
            <WebsiteProjectPage
              activeSection={activeSection}
              onSelectSection={selectWebsiteSection}
            />
          )}

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

        <h2>Yan Yishun Portfolio</h2>

        <p className="project-desc">
          本作品集展示了我在计算机视觉，深度学习和网页开发方向的项目实践。我目前主要关注AI应用落地，重视
          从数据清洗，模型训练，结果分析，模型部署展示的完整工程流程。
        </p>

        <p className="project-desc">
          网站整体采用类似Notion/Unity 官方文档的设计风格，希望用简洁，清晰的方式呈现我参与的每个项目的背景,流程，结果和反思。
        </p>

        <div className="tags">
          <span>Computer Vision</span>
          <span>Object Detection</span>
          <span>Deep Learning</span>
          <span>YOLO</span>
          <span>Model Deployment</span>
          <span>Web Development</span>
        </div>

        <div className="action-row">
          <a href="https://github.com/tobbyyan-barker" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:YISHUN.YAN.2024@mumail.ie" target="_blank">
            YISHUN.YAN.2024@mumail.ie
          </a>
        </div>
      </section>

      <section className="detail-section">
        <h2>About This Portfolio</h2>
        <p>
          本网站以项目文档的形式整理我的学习，科研与实习经历。每个项目页面主要回答四个问题：项目想解决什么问题、我采用了哪些方法、最终取得了什么结果，以及这个过程中有哪些经验与反思。
        </p>
        <p>
          目前重点展示的是我在计算机视觉实习中完成的夜间路灯检测项目。后续我会继续完善 EI 论文项目、音乐流派识别项目，以及本作品集网站的开发过程记录。
        </p>
      </section>

      <section className="detail-section">
        <h2>Current Focus</h2>
        <div className="skill-grid">
          <span>Nighttime Object Detection</span>
          <span>YOLO Model Training</span>
          <span>Dataset Cleaning</span>
          <span>Error Case Analysis</span>
          <span>Model Evaluation</span>
          <span>Model Demo</span>
          <span>Portfolio Website</span>
        </div>
      </section>

      <section className="detail-section">
        <h2>Future Interests</h2>
        <p>
          未来，我希望进一步探索计算机视觉方向的 AI 应用落地，尤其是目标检测、机器视觉以及能够部署到真实场景中的智能系统。同时，我也对AI与机器人结合, AI Agent辅助模型训练评估等方向感兴趣，希望了解视觉感知如何支持智能决策和自主交互。
        </p>
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
          项目包含数据清洗、标注规范统一、YOLO11 模型训练、实验结果分析和模型部署规划等流程。
          Baseline 模型在测试集上取得了 P=0.854、R=0.750、mAP@0.5=0.839、mAP@0.5:0.95=0.621 的结果，
          并作为后续模型迭代的对照基础。
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
          <a href="https://github.com/tobbyyan-barker/nighttime-street-light-detection-demo" target="_blank" rel="noreferrer">
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

function EiProjectSectionNav({
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
        <p>下面 5 个入口属于当前 EI 论文 YOLO 项目的内部目录，点击后显示对应部分内容。</p>
      </div>

      <div className="section-list">
        {eiProjectSections.map((section) => (
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

function MusicProjectSectionNav({
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
        <p>下面 5 个入口属于当前音乐流派识别项目的内部目录，点击后显示对应部分内容。</p>
      </div>

      <div className="section-list">
        {musicProjectSections.map((section) => (
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

function WebsiteProjectSectionNav({
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
        <p>下面 6 个入口属于当前个人网站项目的内部目录，点击后显示对应部分内容。</p>
      </div>

      <div className="section-list">
        {websiteProjectSections.map((section) => (
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
            本项目面向复杂夜间道路场景下的路灯检测任务，旨在构建一个能够识别夜间路灯的检测模型，实际场景中常见的光照不足、
            遮挡、过曝、小目标，以及树干、建筑立柱、车身边缘、装饰灯与相似背景，容易造成的漏检和误检。
          </p>
          <p>
            本项目主要围绕数据清洗、标注规范统一、ExDark数据集里夜间正负样本补充、 YOLO11 模型训练和结果评估展开。通过多轮数据集调整与实验对比,
            我总结了模型在真实场景里的主要错误来源，为后续模型优化和部署提供依据。
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
                对数据进行筛选、清洗和人工复核，重点处理遮挡、过曝、远距离小目标和多头灯杆等复杂场景，
                统一标注框风格，降低数据噪声对模型训练的影响。
              </p>
            </li>

            <li>
              <h3>阶段 3：YOLO11 模型训练与版本迭代</h3>
              <p>
                先基于 YOLO11n 模型快速验证，判断 YOLO11 系列模型是否适合这个任务。随后使用 YOLO11s 进行 baseline 训练，并通过补充 ExDark 里面的夜间正样本、背景负样本和 AI 辅助标注与人工复核数据，
                开展多版本实验对比，使训练数据逐步贴近真实业务场景。
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
              <h3>阶段 5：Demo 部署与成果展示</h3>
              <p>
                基于训练后的 YOLO11 模型搭建云端 Demo ，支持图片和短视频输入，置信度阈值的调节、检测结果可视化和
                目标数量统计等功能。Demo 后端使用 Flask 框架调用模型推理，前端通过上传组件和结果展示区域呈现检测效果，
                用于展示模型在实际夜间道路场景中路灯目标检测效果。
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
            <StatusItem label="模型部署与视频 Demo" status="已完成" />
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
            对于背景图的筛选，本项目根据多轮模型测试出现的主要误检问题，有针对性地从 ExDark
            数据集中挑选包含公交车边缘、车灯、建筑立柱、树干、广告灯和装饰灯等相似干扰结构的图像，
            用于后续作为负样本补充到训练集中。
          </p>

          <h3>Annotation Standardization</h3>
          <p>
            为了防止本项目的标注和公开网络资源的路灯检测数据集标注差异给模型训练带来影响，以及解决公开网络资源中的路灯检测数据集中部分样本存在的
            远处模糊目标过度标注,部分标注框偏大的问题，本项目结合原始标注的合理性，对人工新增样本和原始数据集进行标注规范统一,标注规范如下所示:
          </p>

          <ul>
            <li>清晰目标：标注灯头、灯臂和主要可见杆体。不强求框完整杆体到底部, 重点框目标主体即可。</li>
            <li>标注框不宜太宽：如果标注框内包含大量无关背景，需要适当收紧。</li>
            <li>标注框不宜太细：如果标注框内只剩局部细杆且目标特征不明显，则不强行标注。</li>
            <li>遮挡目标：只标注可见且能够确认的主体部分。</li>
            <li>复杂近邻目标：当原始标注逻辑合理时，优先保持整体标注风格一致。</li>
            <li>过曝目标：保留主体区域，不将大面积光晕纳入标注框，不强求全标远处难以确认的小目标。</li>
            <li>增强图像：沿用原图风格，不随意改变标注框的大小。</li>
          </ul>

          <h3>Negative Samples</h3>
          <p>
            针对模型在公交车边缘，公交车的车灯，公交车内部的灯带，建筑立柱，广告灯，树干，
            装饰灯等竖直结构上发生误检的问题，本项目从 ExDark 数据集里的Car, Bus, People 文件夹里选取了62张包含所有上述
            竖直结构的背景图像作为负样本。
          </p>

          <p>
            针对这些负样本，本项目创建了对应的空标签文件,使它们能够正常参与 YOLO11 训练，旨在帮助模型学习哪些目标不该识别为路灯。
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
              由于整体训练数据量不足，模型性能出现明显下降。
            </li>
            <li>
              <strong>Version 3:</strong> 重新引入增强数据，并补充 34 张背景样本和 19 张额外标注的
              ExDark 正样本。相比 Version 2，模型表现有明显提升，但模型仍在公交车边缘、车灯和树干等复杂背景下出现误检。
            </li>
            <li>
              <strong>Version 4:</strong> 基于 Version 3 模型的主要误检类型，额外补充 28 张背景样本。
              模型误检情况相较 baseline、Version 2 和 Version 3 均有所下降， 说明针对性补充背景负样本在一定程度上可以压低误检。
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
            而YOLO11s参数量更大，特征提取能力更强，适合做本实验的 baseline 模型。
          </p>

          <h3>Training Configuration</h3>
          <p>
            本项目基于 Ultralytics YOLO 框架进行目标检测模型训练，训练环境主要包括
            Python、PyTorch、CUDA-enabled GPU 和 Ultralytics YOLO 框架。实验过程中主要使用
            YOLO11s 进行 baseline 训练，同时使用 YOLO11n 进行快速实验与方案验证。
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
            在训练前，本项目先检查了图片和标签是否一一对应，确保不存在图片或标签遗漏的情况。对于背景负样本，本项目也会检查每个背景图片是否都有对应的空标签文件。
            随后运用 Ultralytics YOLO 的命令行工具 yolo detect train... 来进行模型训练。每次训练都会新建独立文件夹，并把每次训练的最好权重和最后一轮权重保存到里面，
            便于后续进行模型评估和误检分析。
          </p>
          <p>
            在训练过程中，本研究主要关注box loss, classification loss, precision, recall, mAP50, mAP50@95 等指标的变化，根据这些变化来判断模型训练是否有效。
          </p>
          <p>
            训练完成后，本研究会根据验证集和测试集的评价指标定量分析模型的训练效果,同时也会根据模型预测出来的图片情况来定性分析模型的问题，重点观察误检，漏检，小目标不敏感等问题。
          </p>

          <h3>Experiment Design</h3>
          <p>
            由于夜间灯杆检测任务中可直接使用的公开数据集较少，本项目没有一开始就追求大规模数据训练，
            而是采用{" "}
            <strong>
              baseline 基础识别能力建立 → AI 辅助标注 → 人工复核修正 → 数据回灌 → 迭代训练
            </strong>{" "}
            的方式逐步优化模型，使得模型逐步贴近实际业务场景。
          </p>

          <p>
            在第一阶段，本项目先使用已有的公开网络数据集训练 baseline 模型，使模型初步学习 street light / lamp pole
            的基本外观特征。随后，将 ExDark 数据集中的夜间正样本输入 baseline 模型进行预测，
            利用模型生成初步检测框，再由人工检查并修正明显错误的预测框，形成新的高质量标注样本。
          </p>

          <p>
            对于容易引发误检的复杂背景场景，本项目也从 ExDark 数据集中补充背景负样本，并将其直接加入训练集。
            通过加入包含公交车边缘、建筑立柱、树干、车灯、广告灯和装饰灯等相似干扰结构的图像，模型能够逐步学习到哪些竖直结构、亮光区域或不属于目标类别，从而减少复杂夜间场景中的误检。
          </p>

          <p>
            整体来看，该流程可以理解为一种
            <strong>模型辅助标注与数据回灌结合的迭代训练方法</strong>：
            先用 baseline 建立基础识别能力，再通过模型预测辅助标注，结合人工复核保证数据质量，
            最后将修正后的正样本和用于减少误检的背景负样本回灌到训练集中，
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
                  <td>去除增强图像，并加入20张人工标注的 ExDark 夜间正样本</td>
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
            后续优化将继续从数据质量、困难样本补充、标注规范统一和置信度阈值调整等方面展开。
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
            从实验结果来看，Version 2 的性能出现明显下降。主要原因是该版本去除了公开网络数据集中的增强图像，导致训练数据规模和多样性下降；同时新增的 ExDark 夜间正样本数量较少，模型尚未充分适应 ExDark 数据集中更复杂的夜间场景特征。因此，Version 2 在 Precision、Recall、mAP50 和 mAP50@95 等指标上均低于 Baseline 模型。
          </p>
          <p>
            Version 3 和 Version 4 在重新引入增强数据并继续补充 ExDark 数据集中合适的夜间正样本，背景负样本后，整体性能有所恢复。其中，Version 3 的 Precision 达到 0.894，高于 Baseline，说明补充背景负样本后， 模型对部分非目标干扰结构的误检有所减少。
            但是 Version 3 和 Version 4 的 recall 和 mAP50 均低于 baseline, 说明虽然背景负样本有助于减少误检，但模型对小目标、遮挡目标和复杂夜间场景的泛化能力需要进一步优化。而且新增训练数据和原始的验证集，测试集之间仍存在一定的分布差异。
          </p>

          <h3>Error Analysis</h3>
          <p>
            从预测结果来看, 模型的主要问题集中在误检和漏检两个方面。误检主要出现在和路灯形态相似的竖直结构上,
            例如公交车边缘,公交车灯，车内灯带，建筑立柱，广告灯牌等。这说明模型在局部场景中容易依赖局部亮度,
            竖直结构，形状特征来判断，而对路灯结构的整体语义特征学习仍不充分。
          </p>
          <p>
            漏检问题主要出现在远距离小目标，密集路灯场景，被树木遮挡场景中。这类目标在图像中占比较小,
            或者很密集(不好从中提取目标特征)，或者与背景结构重叠严重，导致目标轮廓和背景之间的区分度较低, 模型难以稳定定位
            完整的灯头、灯臂和主要可见杆体区域。
          </p>
          <p>
            此外，部分场景中也出现了重复检测框问题。该问题可能与目标边界模糊、标注不完全统一以及 NMS 后处理阈值设置有关。单纯提高置信度阈值可以减少部分低置信度框，但对于置信度接近的重复框，仍需要结合 NMS IoU 阈值调整、标注规范优化和困难样本补充进一步解决。
          </p>
          <h4> Typical Error Cases / 典型错误案例</h4>

          <div className="case-grid">
            <figure className="case-card">
              <img
                src="/images/lamp-project/baseline-false-positive-bus-edge.png"
                alt="False positive caused by bus edge"
              />
              <figcaption>
                案例 1：公交车边缘、车内灯带等竖直结构容易被 Baseline 误检为路灯。
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
                案例 4：Version 4对部分路灯能够完成检测，但在远距离小目标、遮挡目标或弱光目标中，仍可能出现低置信度,定位不完整或漏检问题。
              </figcaption>
            </figure>
          </div>
          <h3> Optimization Direction / 后续优化方向</h3>
          <p>
            后续优化主要围绕数据补充、标注规范和推理参数调整三个方面展开：
          </p>

          <ul>
            <li>
              <strong>复杂背景负样本补充：</strong>
              继续补充包含公交车边缘、公交车灯带、建筑立柱、树干、广告灯和装饰灯等相似干扰结构的背景负样本，减少复杂夜间场景中的误检。
            </li>
            <li>
              <strong>标注规范优化：</strong>
              进一步统一复杂样本中灯头、灯臂、主要可见杆体和多头路灯的标注规范，降低标注不一致对模型训练的影响。
            </li>
            <li>
              <strong>困难样本补充：</strong>
              针对遮挡目标、远距离小目标和密集路灯场景补充更多困难样本，提升模型对复杂场景的召回能力。
            </li>
            <li>
              <strong>推理参数调整：</strong>
              在推理阶段尝试调整 confidence threshold（置信度阈值）和 NMS IoU threshold（非极大值抑制的交并比阈值），以减少低置信度误检和重复检测框问题。
            </li>
          </ul>
        </section>
      );

    case "deployment-demo":
      return (
        <section className="detail-section">
          <h2>Deployment & Demo</h2>

          <h3>1. Demo 概述</h3>
          <p>
            为了更清晰地展示模型的检测效果，本项目搭建了一个基于网页端的路灯检测 Demo。
            用户可以在前端页面上传道路图像或短视频，点击检测按钮后，系统会调用后端模型完成目标检测，
            并在页面中展示检测结果图、检测框数量、类别标签、置信度信息以及视频抽帧检测结果。
          </p>

          <div className="demo-box">
            <div>
              <h3>支持输入</h3>
              <p>.jpg / .jpeg / .png / .mp4，视频大小限制为 20MB 以内</p>
            </div>
            <div>
              <h3>输出结果</h3>
              <p>检测结果图、检测框数量、类别标签、置信度信息、视频信息和视频抽帧检测结果</p>
            </div>
          </div>

          <h3>2. 系统工作流程</h3>
          <p>
            该 Demo 采用“前端上传图片或视频 + 后端模型推理 + 前端结果展示”的基本流程。
            前端负责用户交互、文件上传和检测结果渲染；后端负责接收图片或视频文件、调用 YOLO 模型进行推理，并将检测结果返回给前端。
          </p>

          <div className="workflow-box">
            <div className="workflow-step">用户上传道路图片或短视频</div>
            <div className="workflow-arrow">↓</div>

            <div className="workflow-step">前端页面：HTML5 / CSS / JavaScript</div>
            <div className="workflow-arrow">↓</div>

            <div className="workflow-step">通过 POST 请求将 FormData 发送到 Flask API</div>
            <div className="workflow-arrow">↓</div>

            <div className="workflow-step">后端服务接收并保存上传文件</div>
            <div className="workflow-arrow">↓</div>

            <div className="workflow-branch">
              <div className="workflow-branch-card">
                <h4>图片检测流程</h4>
                <p>读取上传图片</p>
                <p>调用 YOLO 模型进行目标检测</p>
                <p>生成带检测框的结果图</p>
                <p>整理检测框数量、类别标签和置信度信息</p>
              </div>

              <div className="workflow-branch-card">
                <h4>视频检测流程</h4>
                <p>使用 OpenCV 读取视频信息</p>
                <p>限制视频大小和处理时长</p>
                <p>按固定时间间隔抽取视频帧</p>
                <p>逐帧调用 YOLO 模型进行目标检测</p>
              </div>
            </div>

            <div className="workflow-arrow">↓</div>
            <div className="workflow-step">后端返回 JSON 格式检测结果</div>
            <div className="workflow-arrow">↓</div>
            <div className="workflow-step">前端解析 JSON，并展示图片检测结果或视频抽帧检测结果</div>
          </div>

          <h3>3. 代码组织结构</h3>
          <p>
            Demo 代码按照“前端页面、静态资源、后端接口、模型权重、上传文件和检测结果”
            进行组织。下面仅展示与本地 Demo 运行直接相关的核心文件，调试脚本和练习文件未放入展示结构中。
          </p>

          <div className="code-structure-box">
            <pre>
              {`yolo_demo/
├── app.py                    # Flask 后端入口，负责图片/视频接收、模型推理和结果返回
├── best.pt                   # 训练好的 YOLO 模型权重，部署时需放置在项目根目录下，未上传至 GitHub
├── templates/
│   └── index.html            # 前端页面结构，定义网页标题、整个网页基础结构、上传区域和结果展示区域
└── static/
    ├── script.js             # 前后端交互逻辑：图片/视频预览、FormData 封装、POST 请求和结果渲染
    ├── style.css             # 页面样式文件，控制布局、卡片、按钮和结果展示效果
    ├── uploads/              # 保存用户上传的原始图片
    │   └── videos/           # 保存用户上传的视频文件，大小限制为 20MB 以内
    └── results/              # 保存图片检测生成的结果图
        └── video_frames/     # 保存 OpenCV 抽帧并经 YOLO 检测后的结果帧`}
            </pre>
          </div>

          <h3>4. 代码链接</h3>
          <p>
            项目代码已整理并上传至 GitHub，包括 Flask 后端接口、前端页面代码、
            YOLO 模型推理逻辑和本地运行说明，方便后续复现、展示和持续更新。
          </p>

          <div className="link-card">
            <a
              href="https://github.com/tobbyyan-barker/nighttime-street-light-detection-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub 仓库：夜间路灯检测 Web Demo
            </a>
          </div>


          <h3>5. 实现细节</h3>

          <p>
            前端部分采用 HTML5、CSS 和 JavaScript 实现，主要负责图片/视频上传、文件预览、
            检测按钮交互、检测结果展示以及检测信息渲染。用户上传的图片或视频会被封装为
            FormData，并通过 POST 请求发送至后端 Flask API。
          </p>

          <p>
            对于图片检测，后端接收到图片后，会先保存上传文件，然后调用训练好的 YOLO 模型进行目标检测。
            推理完成后，后端会将原始图片 URL、检测结果图 URL、检测框数量、类别标签和置信度信息整理为
            JSON 格式返回给前端，由前端动态渲染检测结果。
          </p>

          <p>
            对于视频检测，后端会先保存用户上传的视频，并限制视频大小不超过 20MB。随后使用 OpenCV
            读取视频，获取原始视频的 FPS、总帧数和视频时长。考虑到云服务器带宽和算力资源限制，
            当视频总时长超过 10 秒时，本项目仅处理前 10 秒内容，并按固定时间间隔抽帧后逐帧调用YOLO模型进行检测。
            最终，后端会将视频信息、抽帧数量、检测目标总数以及每一帧的检测结果整理为 JSON 格式返回给前端展示。
          </p>



          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>模块</th>
                  <th>功能</th>
                  <th>状态</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>前端页面</td>
                  <td>提供图片/视频上传入口，并展示原始文件、检测结果和统计信息</td>
                  <td>已完成</td>
                </tr>
                <tr>
                  <td>JavaScript 交互</td>
                  <td>处理文件预览、FormData 封装、POST 请求、JSON 解析和结果渲染</td>
                  <td>已完成</td>
                </tr>
                <tr>
                  <td>Flask API</td>
                  <td>接收图片/视频文件，调用 YOLO 模型，并返回 JSON 检测结果</td>
                  <td>已完成</td>
                </tr>
                <tr>
                  <td>图片检测</td>
                  <td>加载训练好的 YOLO 模型权重，生成带检测框、类别和置信度的结果图</td>
                  <td>已测试</td>
                </tr>
                <tr>
                  <td>视频检测</td>
                  <td>使用 OpenCV 读取视频、按固定时间间隔抽帧，并对抽帧结果逐张进行 YOLO 检测</td>
                  <td>已测试</td>
                </tr>
                <tr>
                  <td>结果展示</td>
                  <td>展示检测结果图、检测框数量、类别标签、置信度以及视频抽帧检测结果</td>
                  <td>已完成</td>
                </tr>
                <tr>
                  <td>Gunicorn 服务</td>
                  <td>加载 app.py 中名为 app 的 Flask 应用对象，并运行 Flask 后端服务</td>
                  <td>已完成</td>
                </tr>
                <tr>
                  <td>systemd 后台管理</td>
                  <td>管理 Gunicorn 进程，支持后台运行、状态检查、服务重启和开机自启</td>
                  <td>已完成</td>
                </tr>
                <tr>
                  <td>Nginx 反向代理</td>
                  <td>将公网 80 端口请求转发至本机 http://127.0.0.1:5000 服务</td>
                  <td>已完成</td>
                </tr>
                <tr>
                  <td>云端部署</td>
                  <td>将 Demo 部署至云服务器，并支持公网在线访问</td>
                  <td>已完成</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>6. Demo 预览</h3>
          <p>
            目前该 Demo 既可以在本地环境运行，也已部署至云服务器进行在线展示。本项目已经实现了从图像/视频上传、模型推理到结果可视化展示的完整流程。
            下方展示本项目 Demo 运行的 GIF 动图、云服务器访问界面和典型检测结果，用于说明系统的实际交互过程、部署状态和模型检测效果。
          </p>

          <div className="demo-preview-main">
            <img
              src="/images/lamp-project/yolo-demo-preview.gif"
              alt="YOLO Demo 图片检测运行预览"
            />
            <p>
              图片检测运行预览：用户上传夜间道路图片后，系统通过 Flask API 调用 YOLO 模型完成检测，
              并在网页端展示原图、检测结果图、检测目标数量和置信度列表。
            </p>
          </div>

          <div className="demo-preview-main">
            <img
              src="/images/lamp-project/server_deploy.png"
              alt="YOLO Demo 云服务器访问界面"
            />
            <p>
              云服务器访问界面：Demo 已部署至云服务器，用户可通过公网访问网页端，并进行在线图片/视频检测测试。
            </p>
          </div>

          <div className="demo-preview-main">
            <img
              src="/images/lamp-project/yolo-demo-video-server-preview1.gif"
              alt="YOLO Demo 云服务器视频检测运行预览"
            />
            <p>
              视频检测运行预览：用户上传视频后，后端使用 OpenCV 按固定时间间隔抽帧，
              并调用 YOLO 模型对抽帧图像逐张检测，最终在网页端展示视频信息、抽帧数量和检测结果。
            </p>
          </div>

          <div className="gallery-grid">
            <div className="gallery-card">
              <img
                src="/images/lamp-project/yolo-demo-interface.png"
                alt="YOLO Demo 页面界面"
              />
              <p>网页端界面：用于路灯检测 Demo 的上传、推理和结果展示页面。</p>
            </div>

            <div className="gallery-card">
              <img
                src="/images/lamp-project/yolo-detection-result.jpg"
                alt="YOLO 检测结果"
              />
              <p>检测结果示例：模型输出带有检测框、类别标签和置信度的结果图。</p>
            </div>
          </div>

          <h3>7. 云端部署与后续优化</h3>

          <p>
            目前该 Demo 已完成云服务器部署，支持通过公网访问进行在线测试。系统部署在云服务器上，
            后端使用 Flask 提供模型推理接口，Gunicorn 加载 app.py 中名为 app 的 Flask 应用对象并运行后端服务，
            systemd 负责 Gunicorn 进程的后台管理，Nginx 作为反向代理将用户请求转发至本机 127.0.0.1:5000 服务。
          </p>

          <p>
            通过本次部署，项目从本地模型推理 Demo 进一步扩展为可在线访问的 AI 应用原型。
            用户可以在网页端上传夜间道路图片或短视频，后端完成 YOLO 模型推理后，将检测结果以 JSON 格式返回给前端进行展示。
          </p>





          <div className="demo-box">
            <div>
              <h3>当前状态</h3>
              <p>
                本地网页 Demo、云服务器部署和公网访问配置已完成，当前支持图片检测和短视频抽帧检测展示。
              </p>
            </div>
            <div>
              <h3>后续扩展</h3>
              <p>
                后续将继续优化前端交互、异常处理、文件大小限制和视频检测结果展示，并探索误检/漏检案例自动整理功能。
              </p>
            </div>
          </div>
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
            数据质量、标注规范、错误样本分析和模型部署展示，都会直接影响模型在真实场景中的表现。相比于单纯的追求更高的指标，
            深度分析模型测试时出现的误检漏检问题，并根据错误来源有针对性地补充数据。同时，在数据量不足时，使用基线模型进行数据预标注，再进行人工复核提高数据质量，也是一种有效的数据迭代方式。
          </p>
          <p>
            后续优化方向将重点从降低误检转向提升 Recall 稳定性和减少重复框。
            一方面，我会继续补充远距离小目标、弱光目标和遮挡目标样本，提升模型对困难正样本的识别能力；
            另一方面，我也会调整置信度阈值和 NMS 参数，减少密集路灯场景中的重复检测框。
            同时，我计划重新构建更贴近真实部署场景的验证集和测试集，使评估结果更准确地反映模型在实际夜间道路环境中的表现。
          </p>
          <p>
            在后续扩展中，我也希望探索 Agent 辅助分析功能，例如自动整理误检/漏检案例、生成检测结果报告，并为数据补充和模型优化提供参考建议。
          </p>
        </section>
      );

    default:
      return null;
  }
}

function renderEiSectionContent(sectionId: string) {
  switch (sectionId) {
    case "overview":
      return (
        <section className="detail-section">
          <h2>Project Overview</h2>
          <p>
            晴朗天气下目标检测的准确度已达到非常高的水平，但在雨，雾，雪等恶劣天气下，现有模型的性能会严重衰退。本研究在图像自适应 YOLO 的 ISP 轻量化自动预测图像处理参数的神经网络模型上，运用正负样本对 YOLOV3 模型进行无偏差训练，以提高模型在现实雾天场景中的检测能力。
          </p>
          <p>
            该训练策略训练出的 YOLOV3 模型在真实雾天场景数据集 RTTS 的平均准确度达到了<strong> 42.68% </strong>，相比于 YOLOV3 基线模型, mAP@50 提升了 <strong> 16.09% </strong>，证明了用正负样本混合策略训练目标检测模型在真实的雾天场景下能更好的检测出目标物体。
          </p>
        </section>
      );

    case "research-background":
      return (
        <section className="detail-section">
          <h2>Research Background</h2>
          <p>
            自动驾驶需要感知道路车辆、行人、交通对象，但雨，雾，雪等恶劣天气会降低图像质量，导致大部分目标检测器无法感知到周围环境的变化，进而引起事故，这让人们不再相信自动驾驶的安全性和可靠性。
          </p>
          <p>
            针对这一问题，本项目在原有的 YOLOV3 检测器基础上，引入了图像自适应处理模块，并采用正负样本混合训练的策略，探索模型在真实雾天场景下进行目标检测的能力。
          </p>
        </section>
      );

    case "method-workflow":
      return (
        <section className="detail-section">
          <h2>Method & Workflow</h2>

          <h3>选择 YOLOv3 的原因</h3>
          <p>
            本项目使用 YOLOv3 作为基线模型，因为 YOLOV3 是原始 YOLO 系列中较成熟的单阶段目标检测模型，
            在检测速度和精度之间取得良好的平衡。与此同时，本项目的重点是在 YOLOv3 的基础上验证图像自适应处理模块和正负样本混合训练策略对模型目标检测的鲁棒性的提升作用，而不是重新设计、优化目标检测器的网络结构。
          </p>

          <h3>2. Overall Workflow</h3>
          <p>
            为了提高 ISP 模块的处理效率以及更好的观察图像宏观特征，本研究首先将输入的原始高分辨率图像进行下采样，再将低分辨率图像输入 ISP 模块，由 ISP 模块自动预测图像处理所需要的六个参数。
          </p>

          <p>
            与此同时，原始高分辨率图像会被直接输入到数字图像处理模块中。该模块根据 ISP 模块预测得到的参数， 对原始图像进行去雾、白平衡、伽马校正、色调、对比度和锐化处理，最后将处理后的图像输入 YOLOV3 检测器完成目标检测。
          </p>

          <div className="demo-preview-main">
            <img
              src="/ei-yolo-project/isp-yolo-structure.jpg"
              alt="ISP-YOLO 模型结构图"
            />
            <p>
              ISP-YOLO 整体流程：低分辨率图像用于图像自适应参数预测，高分辨率原始图像用于图像恢复与增强。
              预测得到的参数会指导数字图像处理模块完成去雾和图像增强，随后由 YOLOv3 对处理后的图像进行目标检测。
            </p>
          </div>

          <h3>3. Model Structure</h3>
          <p>
            整个 ISP-YOLO 模型主要由三个部分组成：图像自适应参数网络（ISP模块）、数字图像处理模块 （DIP模块）和 YOLOv3 检测器。
            图像自适应参数网络负责根据输入低分辨率图像的宏观特征自动化预测图像处理参数；数字图像处理模块根据这些参数对输入的原始图像进行增强和去雾；
            YOLOv3 检测器则负责对处理后的图像进行目标定位和类别预测。
          </p>

          <h3>4. Training Process</h3>
          <p>
            在训练阶段，本研究采用正负样本混合输入的方式进行训练，并结合清晰图像和人工合成雾图像提升模型的泛化能力。
            训练过程中，模型仅通过 YOLOv3 的检测损失进行端到端优化，使检测损失能够反向传播并指导前面的图像处理模块(ISP模块) 调整参数。
          </p>

          <p>
            论文中使用伪代码展示了 ISP-YOLO 的训练流程，包括数据输入、人工增雾样本选择、图像处理参数预测、
            图像增强、目标检测以及检测损失反向传播等步骤。该流程体现了本项目从图像恢复到目标检测的完整闭环。
          </p>

          <div className="demo-preview-main">
            <img
              src="/ei-yolo-project/isp-yolo-training-process.png"
              alt="ISP-YOLO 训练流程伪代码"
            />
            <p>
              根据ISP-YOLO训练流程伪代码，在训练数据输入上，本研究将离线人工增雾视为一种针对雾天场景的数据增强方式。
              对于每一张清晰图像 Mc，本研究都会离线生成与之对应的十张不同雾气程度的人工增雾图像 Mf。
              由于人工增雾只改变图像的视觉质量和天气风格，并不会改变目标物体的位置和类别，
              因此 Mf 可以继续使用 Mc 对应的目标检测标签 B。
            </p>

            <p>
              在每轮训练中，模型会先读取清晰图像 Mc 及其对应标签 B，并将 Mc 作为默认输入图像 Minput。
              随后，训练流程会以 2/3 的概率将 Minput 替换为该图像对应的人工增雾版本 Mf， 1/3 的概率将 Mc 作为输入图像Minput，
              从而实现清晰图像与人工雾图像的混合输入。最终，Minput 会经过图像自适应处理模块和数字图像处理模块处理，
              再输入 YOLOv3 检测器，并使用同一组标签 B 计算检测损失。
            </p>
          </div>
        </section>
      );

    case "experiments-results":
      return (
        <section className="detail-section">
          <h2>Experiments & Results</h2>

          <p>
            本实验主要围绕三类模型进行对比：YOLOv3 基线模型、加入 ISP 模块且仅使用正样本训练的
            ISP-YOLO 模型，以及加入 ISP 模块并采用正负样本混合训练的 ISP-YOLO 模型。
            实验重点评估这三类模型在清晰图像、人工合成雾图像和真实雾天场景下的目标检测表现。
          </p>

          <h3>1. Experimental Settings</h3>
          <p>
            本实验在 AutoDL 云平台上完成，硬件使用 NVIDIA RTX 4090 GPU。软件环境包括
            TensorFlow 2.10、Python 3.8 和 CUDA 11.8。训练轮数设置为 80，批次大小设置为 6，
            优化器采用 Adam，学习率从 1e-6 逐步调整到 1e-7。
          </p>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Item</th>
                  <th>Setting</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>硬件</td>
                  <td>GPU</td>
                  <td>NVIDIA RTX 4090</td>
                </tr>
                <tr>
                  <td>软件</td>
                  <td>深度学习框架</td>
                  <td>TensorFlow 2.10</td>
                </tr>
                <tr>
                  <td>软件</td>
                  <td>编程语言</td>
                  <td>Python 3.8</td>
                </tr>
                <tr>
                  <td>软件</td>
                  <td>CUDA版本</td>
                  <td>CUDA 11.8</td>
                </tr>
                <tr>
                  <td>核心训练参数</td>
                  <td>训练轮数</td>
                  <td>80</td>
                </tr>
                <tr>
                  <td>核心训练参数</td>
                  <td>批次大小</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>核心训练参数</td>
                  <td>优化器</td>
                  <td>Adam</td>
                </tr>
                <tr>
                  <td>核心训练参数</td>
                  <td>学习率</td>
                  <td>初始: 1e-6, 最终: 1e-7</td>
                </tr>
                <tr>
                  <td>核心训练参数</td>
                  <td>训练时图片输入尺寸</td>
                  <td>[320, 352, 384, 416, 448, 480, 512, 544, 576, 608] 中随机选择</td>
                </tr>
                <tr>
                  <td>Testing</td>
                  <td>测试时图片输入尺寸</td>
                  <td>544 pixels</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>2. Experiment Design</h3>
          <p>
            为了验证 ISP 模块是否能够提升图像处理效果，以及正负样本混合训练是否能够增强模型在真实雾天场景下的泛化能力，
            本研究设置了三组模型进行对比。三组模型在相同实验环境下训练和测试，通过比较不同数据集上的 mAP@50 表现来评估方法有效性。
          </p>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>模型类别</th>
                  <th>采用的模块</th>
                  <th>训练时采用的数据</th>
                  <th>训练目的</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>模型 A</td>
                  <td>YOLOv3</td>
                  <td>只有正样本</td>
                  <td>作为基线模型，用于评估原始 YOLOv3 在不同天气场景下的检测表现</td>
                </tr>
                <tr>
                  <td>模型 B</td>
                  <td>YOLOv3 + ISP</td>
                  <td>只有正样本</td>
                  <td>验证 ISP 图像自适应处理模块是否能提升目标检测效果</td>
                </tr>
                <tr>
                  <td>模型 C</td>
                  <td>YOLOv3 + ISP</td>
                  <td>正负样本混合</td>
                  <td>验证正负样本混合训练是否能提升真实雾天场景下的泛化能力</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>3. 数据集</h3>

          <h4>PASCAL VOC 数据集</h4>
          <p>
            本研究使用 PASCAL VOC2008 和 PASCAL VOC2012 的训练集与验证集，并按照训练集：
            验证集 = 9:1 的比例重新划分。测试阶段使用 PASCAL VOC2007 测试集作为清晰图像测试集，
            并命名为VOC_norm_test，用于评估模型在清晰图片下的表现。与此同时，基于原有的 PASCAL VOC2007 测试集，本研究对其进行随机人工增雾后生成的测试集命名为 VOC_foggy_test，
            用于评估模型在人工合成雾天场景下的表现。
          </p>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>划分后的数据集</th>
                  <th>图片总数</th>
                  <th>正样本总数</th>
                  <th>负样本总数</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>训练集</td>
                  <td>14,896</td>
                  <td>7,315</td>
                  <td>7,581</td>
                </tr>
                <tr>
                  <td>验证集</td>
                  <td>1,655</td>
                  <td>796</td>
                  <td>859</td>
                </tr>
                <tr>
                  <td>测试集</td>
                  <td>4,952</td>
                  <td>2,734</td>
                  <td>2,218</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            从数据分布来看，PASCAL VOC 数据集中正负样本并不完全均衡，训练集和验证集中负样本数量略高于正样本。
            如果训练过程只使用正样本而忽略背景负样本，模型可能更容易受到背景区域干扰，从而影响其在真实雾天检测的泛化能力。
            此外，PASCAL VOC 数据集中 person 类别数量明显高于 bicycle、motorcycle 和 bus 等类别，导致模型可能因为其它类别的数据量不足，模型可能对 bicycle、 motorcycle 和 bus 对象的检测能力较弱。
          </p>

          <div className="gallery-grid">
            <div className="gallery-card">
              <img
                src="/ei-yolo-project/pascal-voc-train-distribution.png"
                alt="PASCAL VOC training set category distribution"
              />
              <h3>PASCAL VOC Training Set</h3>
              <p>训练集中 5 类目标对象的实例分布，用于观察不同类别样本数量是否均衡。</p>
            </div>

            <div className="gallery-card">
              <img
                src="/ei-yolo-project/pascal-voc-val-distribution.png"
                alt="PASCAL VOC validation set category distribution"
              />
              <h3>PASCAL VOC Validation Set</h3>
              <p>验证集中 5 类目标对象的实例分布，用于辅助分析模型验证阶段的类别偏差。</p>
            </div>

            <div className="gallery-card">
              <img
                src="/ei-yolo-project/pascal-voc-test-distribution.png"
                alt="PASCAL VOC test set category distribution"
              />
              <h3>PASCAL VOC Test Set</h3>
              <p>测试集中 5 类目标对象的实例分布，用于评估模型在清晰图像和人工增雾图像上的表现。</p>
            </div>
          </div>

          <h4>RTTS 数据集</h4>
          <p>
            为了进一步评估模型在真实雾天自动驾驶场景中的鲁棒性，本研究采用 RTTS
            （Real-world Task-Driven Testing Set）数据集。与人工合成雾图像不同，RTTS 数据来自真实世界雾天场景，
            图像中的雾气浓度、光照条件和目标遮挡情况更加复杂，因此该数据集更适合用于检验模型在真实场景下的泛化能力。
          </p>

          <p>
            本研究 RTTS 数据集按照 8:1:1 的比例划分为训练集、验证集和测试集，用于对已经在
            PASCAL VOC 混合数据上已经训练好的模型进行微调和测试。由下图我们可以观察到在 RTTS 数据集里，大量目标样本集中在中小尺寸区域，
            因此该数据集也能用于观察模型对中小目标和复杂真实雾天场景的检测能力。
          </p>

          <div className="demo-preview-main">
            <img
              src="/ei-yolo-project/rtts-box-distribution.png"
              alt="RTTS dataset bounding box distribution"
            />
            <p>
              RTTS 数据集边框分布：大部分目标框集中在宽度和高度较小的区域，说明该数据集以中小目标为主，
              对模型在真实雾天场景下的目标检测能力提出了更高要求。
            </p>
          </div>

          <h3>4. 定量结果分析 </h3>
          <p>
            本研究分别在 VOC_norm_test、VOC_foggy_test 和 RTTS 测试集上评估三组模型。
            VOC_norm_test 用于测试清晰图像场景下模型的表现，VOC_foggy_test 用于测试人工合成雾天场景下模型的表现，
            RTTS 用于测试真实雾天场景下模型的表现。所有结果均使用 mAP@0.5 作为主要评价指标。
          </p>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>模型</th>
                  <th>训练策略</th>
                  <th>VOC_norm_test mAP</th>
                  <th>VOC_foggy_test mAP</th>
                  <th>RTTS mAP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>模型 A</td>
                  <td>只用正样本训练</td>
                  <td>50.60%</td>
                  <td>50.80%</td>
                  <td>26.59%</td>
                </tr>
                <tr>
                  <td>模型 B</td>
                  <td>只用正样本训练</td>
                  <td>61.37%</td>
                  <td>61.29%</td>
                  <td>28.63% (+2.04%)</td>
                </tr>
                <tr>
                  <td>模型 C</td>
                  <td>正负样本混合训练</td>
                  <td>58.38%</td>
                  <td>58.61%</td>
                  <td>42.68% (+16.09%)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            从定量结果来看，加入 ISP 模块后的模型 B 在清晰图像和人工合成雾图像场景下，目标检测的平均准确率相比 YOLOv3 基线模型有了明显提升，
            说明图像自适应处理模块能够帮助 YOLOv3 更好地识别原图像里的目标对象。
            采用正负样本混合训练的模型 C 在 VOC_norm_test 和 VOC_foggy_test 上与模型 B 表现接近，
            但在真实雾天 RTTS 数据集上达到 mAP@0.5 为 42.68% 的结果，相比基线模型提升 16.09 个百分点。
          </p>

          <p>
            这一结果说明，单纯加入 ISP 模块可以提升模型在清晰图像和人工雾图像上的检测效果，
            但对于真实雾天场景而言，正负样本混合训练对提升模型鲁棒性更加关键。
            这也表明真实雾天场景与人工合成雾图像之间仍存在明显差异，不能完全依赖人工增雾数据来代表真实雾天环境。
          </p>

          <h4>RTTS 数据集上的按类别的细分性能分析</h4>
          <p>
            为了进一步分析模型性能瓶颈，本研究还比较了三组模型在 RTTS 数据集上的按类别 AP 表现。
            结果显示，模型 C 在多数类别上取得更高的平均精度，尤其是在 person 和 car 类别上表现更突出；
            但在 bicycle 和 bus 等类别上仍然存在检测能力不足的问题。
          </p>

          <div className="demo-preview-main">
            <img
              src="/ei-yolo-project/rtts-classwise-ap.png"
              alt="Class-wise AP comparison on RTTS dataset"
            />
            <p>
              RTTS数据集上不同模型按类别 AP 对比：模型 C 在真实雾天场景中的整体表现更好，但 bicycle 和 bus 类别仍是本研究后续优化重点。
            </p>
          </div>

          <h3>5. 定性结果分析</h3>
          <p>
            为了进一步观察正负样本混合训练是否能够提升模型在真实雾天场景下的泛化能力，本研究选取了模型 B 和模型 C 在 RTTS 测试集上的检测结果进行对比。
            发现在部分真实雾天图像中，仅使用正样本训练的模型 B 更容易受到交通标志牌等无关背景的干扰，模型在这些包含无关背景的图片上容易产生误检；
            而采用正负样本混合训练的模型 C 能够更好地区分目标对象和无关背景。
          </p>

          <div className="gallery-grid">
            <div className="gallery-card">
              <img
                src="/ei-yolo-project/model-b-rtts-detection.png"
                alt="Model B detection result on RTTS"
              />
              <h3>模型 B 在RTTS测试集上检测效果</h3>
              <p>
                仅使用正样本训练的 ISP-YOLO 在真实雾天场景中容易受到背景干扰，
                例如将交通标志牌等非目标区域误识别为目标对象。
              </p>
            </div>

            <div className="gallery-card">
              <img
                src="/ei-yolo-project/model-c-rtts-detection.png"
                alt="Model C detection result on RTTS"
              />
              <h3>模型 C 在RTTS测试集上检测效果</h3>
              <p>
                采用正负样本混合训练的 ISP-YOLO 对背景干扰更不敏感，
                在该场景下能够更稳定地检测车辆目标，并减少误检。
              </p>
            </div>
          </div>

          <h3>6. 模型 C 的局限性以及后续优化方向 </h3>
          <p>
            虽然模型 C 在真实雾天场景下的整体检测效果明显优于其他模型，但模型 C 在 RTTS 测试集上检测后的结果也暴露出当前方法的局限性。
            进一步讲，当输入测试图像中存在严重重叠目标、远距离小目标或目标仅有局部特征可见时，三组模型都可能出现漏检或定位不完整的问题。
            这说明 ISP-YOLO 在真实复杂道路场景中的感知能力仍有提升空间。
          </p>

          <div className="demo-preview-main">
            <img
              src="/ei-yolo-project/rtts-overlap-failure.jpg"
              alt="Failure cases with overlapping objects in RTTS"
            />
            <p>
              模型局限性示例：当真实雾天场景中出现重叠目标或目标特征不完整时，
              模型 A、模型 B 和模型 C 都难以稳定检测出所有正确目标。
            </p>
          </div>
        </section>
      );

    case "reflection":
      return (
        <section className="detail-section">
          <h2>Reflection</h2>
          <p>
            通过该项目，我学到了可以运用 ISP 模块来指导 DIP 模块对输入图像进行去雾处理的功能， 能够提高人们处理输入图像的效率，省去了"人们观察输入图像---运用对应的算法---调参“这种耗时的过程。
            以及正负样本混合训练能更好的在恶劣天气背景下区分目标物体和无关背景，进一步增强了视觉模型在恶劣天气下的泛化能力。
          </p>

          <p>
            这种运用 ISP 图像自适应调节网络进行输入图片自动预测参数，正负样本混合训练增强模型在恶劣天气下检测特定目标的能力，让人们在恶劣天气下出行的安全性得以提高。
          </p>

          <p>
            未来的研究可以采用元学习或者注意力机制的方式，进一步优化 ISP-YOLO 模型结构，让 ISP-YOLO 模型能在多种恶劣天气环境下更好地检测到远距离，小目标物体。
          </p>

        </section>
      );

    default:
      return null;
  }
}

function EiYoloProjectPage({
  activeSection,
  onSelectSection,
}: {
  activeSection: string | null;
  onSelectSection: (sectionId: string) => void;
}) {
  return (
    <>
      <section className="project-header">
        <div className="eyebrow">EI Conference Paper Project</div>

        <h1>EI 论文 YOLO 项目</h1>

        <p className="project-desc">
          本项目是我本科阶段参与的 EI 会议论文相关目标检测项目，主要围绕 YOLO 系列模型展开，
          关注目标检测任务中的数据处理、模型训练、实验对比、结果分析和论文内容整理。
          相比实习项目，本项目更侧重实验组织、指标分析和科研表达。
        </p>

        <p className="project-desc">
          在项目过程中，我参与了实验流程整理、模型训练与结果分析，并将实验现象进一步转化为论文中的方法描述、
          结果展示和分析讨论。这段经历帮助我从单纯完成模型训练，进一步过渡到理解实验设计与科研写作之间的关系。
        </p>

        <div className="tags">
          <span>Computer Vision</span>
          <span>Object Detection</span>
          <span>YOLO</span>
          <span>Model Training</span>
          <span>Experiment Analysis</span>
          <span>Academic Writing</span>
        </div>

        <EiProjectSectionNav
          activeSection={activeSection}
          onSelectSection={onSelectSection}
        />
      </section>

      <section id="ei-section-content" className="detail-content">
        {!activeSection && (
          <div className="detail-section empty-section">
            <h2>Choose a Section</h2>
            <p>
              请点击上方或左侧的项目章节入口。点击不同部分后，这里会显示 EI 论文 YOLO 项目的详细内容。
            </p>
          </div>
        )}

        {activeSection && renderEiSectionContent(activeSection)}
      </section>
    </>
  );
}

function renderMusicSectionContent(sectionId: string) {
  switch (sectionId) {
    case "overview":
      return (
        <section className="detail-section">
          <h2>Project Overview</h2>

          <p>
            在数字信息时代，音乐内容的快速分类与检索变得越来越重要。音乐流派识别的核心是从音频信号中提取有效特征，比如根据提取出的节奏、旋律、音色和频谱分布等信息来判断音乐所属类别。
            然而，传统机器学习方法通常依赖手工设计特征；当音乐内容更加复杂，或者不同流派之间存在风格重叠时，仅依靠这些特征往往难以获得稳定的分类效果。
          </p>

          <p>
            在这个项目中，我采用了在 AudioSet 数据集上预训练的 PANNs 模型作为频域特征提取器，
            利用其 CNN 骨干网络捕捉音乐信号中的频谱特征。同时，我将 PANNs 模型与两层双向长短时记忆网络
            （BiLSTM）结合，用于建模音乐片段中的长时序依赖关系，例如节奏变化和旋律走向。
            通过结合 CNN 的频域表征能力与 BiLSTM 的时序建模能力，模型能够同时关注音乐的局部频谱信息和整体时序变化。
          </p>

          <p>
            在 GTZAN 数据集上，我采用 10 折交叉验证对模型进行评估，最终取得了{" "}
            <strong>87.29%</strong> 的平均准确率。结果显示，该方法能够较好地完成音乐流派分类任务，
            并超过了多种基于 CNN、RNN、混合模型以及部分 Transformer 的方法。通过这个项目，
            我进一步理解了音频信号处理流程、预训练模型迁移和时序建模在 AI 音频分类任务中的应用。
          </p>
        </section>
      );

    case "research-background":
      return (
        <section className="detail-section">
          <h2>Research Background</h2>
          <p>
            音乐流派识别并不是简单的音频分类问题，而是需要同时结合提取的频域信息和时域信息来区分不同的音乐流派：
            频域特征可以反映音色、音高和能量分布等局部声学特征，而时域变化则与节奏、
            旋律走向和音乐结构这些整体声学特征有关。因此，如果模型只关注某一类特征，往往难以充分描述完整的音乐内容。
          </p>

          <p>
            传统机器学习方法通常依赖人工设计的音频特征，例如 MFCC、Chroma 等。
            这些特征在一定程度上能够描述音乐信号的声学属性，但当不同流派之间存在风格重叠、
            编曲复杂时，模型依据手工特征区分不同音乐流派的能力会受到限制。
          </p>

          <p>
            深度学习方法可以从音频数据中自动学习更高层次的特征表示。其中，CNN 模型擅长从输入的二维频谱图中捕捉局部频域模式，
            而 RNN 模型，尤其是 BiLSTM，则更适合建模音乐片段中的前后文关系和长时序依赖。
            因此，我将预训练的 PANNs 作为特征提取器，将其输出的特征沿时间轴展平为序列，并输入 BiLSTM。
            这样既保留了 CNN 提取的高层声学表征，又使 BiLSTM 能够沿时间维度捕捉音乐的节奏演进与结构变化，
            以同时捕捉音乐信号的局部频域特征和整体时序特征。
          </p>
        </section>
      );

    case "method-workflow":
      return (
        <section className="detail-section">
          <h2>Method & Workflow</h2>
          <h3>1. Dataset & Input</h3>
          <p>
            本项目使用 GTZAN 数据集进行音乐流派识别实验。GTZAN 数据集原本包含 10 类音乐流派，
            分别为 Blues, Classical, Country, Disco, Hiphop, Jazz, Metal, Pop, Reggae 和 Rock。
            每个流派包含 100 个 30 秒音频片段，理论上总计 1000 个样本。
            在实验检查过程中，我们发现 Rock 类别中存在一个损坏音频文件，因此最终使用了
            999 个有效音频片段进行后续实验。
          </p>

          <h3>2. Audio Preprocessing</h3>
          <p>
            为了保证输入数据的一致性，我首先将原始音频转换为单通道格式，并统一重采样到
            32,000 Hz。对于长度不足或超过 30 秒的音频，分别进行补零或截断处理，使所有输入音频保持相同长度。
            随后，我使用 Librosa 库将原始音频转换为二维 Mel Spectrogram，
            以便将连续的一维音频信号表示为包含时间特征和频率信息的特征图。
          </p>

          <p>
            在特征处理过程中，Mel Spectrogram 可以进一步转换为 Log-Mel Spectrogram，
            用于更稳定地表示音频能量分布。同时，MFCC 特征也可以通过对 Log-Mel 特征进行离散余弦变换
            （DCT）得到，用于描述音频信号的声学特征。预处理后的音频特征被统一保存为 HDF5 文件，
            以便后续模型训练和交叉验证过程中高效读取。
          </p>

          <h3>3. Feature Extraction</h3>

          <div className="project-image-block">
            <img
              src="/music-project/panns-bilstm-architecture.png"
              alt="PANN CNN14 feature extraction and BiLSTM temporal modeling architecture"
              className="project-image"
            />
            <p className="image-caption">
              模型整体结构：PANNs CNN14 负责提取音频频域特征，BiLSTM 分类头用于建模时序信息并输出音乐流派预测结果。
            </p>
          </div>

          <p>
            在模型结构中，我采用在 AudioSet 数据集上预训练的 PANNs 模型作为频域特征提取器。
            PANNs 的 CNN14 骨干首先通过 Log-Mel Extractor 将输入音频波形转换为
            Log-Mel Spectrogram，随后通过六层卷积结构提取高层次频谱特征。
            这些特征能够捕捉不同音乐流派在音色、频谱分布和局部声学模式上的差异。
            相比传统机器学习完全依赖手工特征的方法，预训练模型能够在小规模数据集 GTZAN 上提供更强的音频表征能力。
          </p>

          <p>
            在 CNN14 backbone 的第六个卷积模块之后，模型会输出一个四维特征图，
            其形状可以表示为 <strong>(B, C, T, F)</strong>。其中，
            B 表示 batch size，C 表示通道数，在本项目中为 <strong>2048</strong>，
            T 表示时间帧数，F 表示 Mel 频率维度。
          </p>

          <p>
            为了将 CNN 提取出的频域特征输入到后续的 BiLSTM 模块中，我首先沿着频率维度
            F 进行全局平均池化，将特征图从 <strong>(B, C, T, F)</strong> 压缩为
            <strong>(B, C, T)</strong>。随后，对张量维度进行转置，得到
            <strong>(B, T, C)</strong> 的序列表示，即 <strong>(B, T, 2048)</strong>。
          </p>

          <p>
            经过这一转换后，每个时间步都对应一个 2048 维的高层音频特征向量。
            这样，CNN14 提取出的频谱特征就被整理成了适合 BiLSTM 处理的时序输入，
            使后续模型能够进一步学习音乐片段中的时间依赖关系。
          </p>

          <h3>4. Temporal Modeling</h3>
          <p>
            音乐信号不仅包含局部频谱信息，还具有明显的时序结构，例如节奏变化、旋律走向。
            因此，如果仅依靠 CNN 骨干提取到的局部频域特征进行音乐流派识别，可能因为难以捕捉到音乐片段中的长时序依赖造成模型对存在风格重叠的音乐流派的分类能力较弱。
            为了进一步捕捉到这些长时序依赖信息，本项目在 PANNs 特征提取器后加入了两层双向长短时记忆网络（BiLSTM），用于进一步捕捉音乐片段中的长时序依赖。两层 BiLSTM 相比单层结构具有更强的时序特征提取能力，
            同时又避免了更深层网络带来的参数量增加和训练复杂度上升，因此本项目设计两层（BiLSTM）能够在模型表达能力与计算成本之间取得较好的平衡。
          </p>

          <p>
            在模型中，经过 CNN14 backbone 和频率维度池化后的序列张量
            <strong> (B, T, 2048) </strong>
            会被输入到两层 BiLSTM 中。BiLSTM 能够同时从前向和后向两个方向捕捉长时序依赖特征，
          </p>

          <p>
            本项目中 BiLSTM 每个方向的隐藏层尺寸设置为 256，因此双向输出会形成
            <strong> 512 维 </strong> 的时序特征表示。随后，这些时序特征会被送入分类头，通过全连接层和 LogSoftmax 层输出最终的音乐流派预测结果。
            这种结构使模型既能够利用 PANNs 的局部频域特征提取能力，也能够通过 BiLSTM 捕捉到输入音乐片段中的整体长时序特征。
          </p>

          <h3>5. Classification & Evaluation</h3>
          <p>
            经过 PANNs 局部频域特征提取和 BiLSTM 时序建模后，模型最终通过分类层输出音乐片段所属的流派类别。
            在实验评估阶段，我采用 10 折交叉验证对模型进行测试，以减少单次数据划分带来的偶然性，
            并更稳定地评估模型在 GTZAN 数据集上的整体表现。最终，该方法取得了
            <strong> 87.29% </strong>
            的平均准确率，说明模型能够较好地完成音乐流派分类任务。
          </p>

          <h3>6. Training Settings</h3>
          <p>
            在训练设置方面，实验基于 Python 3.7 和 PyTorch 1.1.0 框架完成，
            并使用 CUDA 10.0 进行 GPU 加速。模型训练过程中采用 Adam 优化器进行参数更新，
            初始学习率设置为 <strong>0.001</strong>，batch size 设置为
            <strong> 32</strong>，训练轮数为 <strong>3000 epochs</strong>。
          </p>

          <p>
            本项目中的 BiLSTM 采用两层结构，每个方向的 hidden size 设置为
            <strong> 256</strong>，因此双向输出形成 <strong>512 维</strong>
            的时序特征表示。为了增强模型在小规模数据集 GTZAN 上的泛化能力，防止模型出现过拟合的问题，
            本研究在训练过程中引入了 Mixup 数据增强策略，并将其超参数设置为<strong>0.4</strong>。
            该策略会按照一定权重混合两个训练样本以及标签形成一个新的样本及其软标签，从而提升模型的泛化能力。
          </p>

          <div className="mixup-flow-block">
            <h4> Mixup 数据增强策略流程图解释</h4>

            <div className="mixup-flow">
              <div className="mixup-item">
                <div className="mixup-box">
                  <strong>样本 A</strong>
                  <p>Blues 音频特征</p>
                  <p>标签: [1, 0, 0, ..., 0]</p>
                </div>
              </div>

              <div className="mixup-symbol">+</div>

              <div className="mixup-item">
                <div className="mixup-box">
                  <strong>样本 B</strong>
                  <p>Rock 音频特征</p>
                  <p>标签: [0, 0, 0, ..., 1]</p>
                </div>
              </div>

              <div className="mixup-arrow">↓</div>

              <div className="mixup-item">
                <div className="mixup-box mixup-highlight">
                  <strong>按权重混合（λ = 0.7）</strong>
                  <p>混合输入: 0.7 × Blues + 0.3 × Rock</p>
                  <p>混合标签: [0.7, 0, 0, ..., 0.3]</p>
                </div>
              </div>

              <div className="mixup-arrow">↓</div>

              <div className="mixup-item">
                <div className="mixup-box">
                  <strong>输入模型训练</strong>
                  <p>PANNs + BiLSTM</p>
                  <p>提升泛化能力与鲁棒性</p>
                </div>
              </div>
            </div>

            <p className="image-caption">
              Mixup 通过对两个训练样本及其标签进行线性加权混合，生成新的训练样本和软标签。
            </p>
          </div>

          <p>
            损失函数方面，本项目采用 NLL Loss 作为损失函数。由于音乐流派识别任务属于
            10 分类的任务，模型最后通过 LogSoftmax 输出每个类别对应的对数概率，
            从理论角度看，NLL Loss 会对真实类别预测概率较低的情况给予更大的惩罚，
            从而引导模型提高目标类别的预测概率。从实现角度看，
            PyTorch 中的 CrossEntropyLoss 通常等价于 LogSoftmax 与 NLL Loss 的组合；
            因此，在原有的模型已经使用 LogSoftmax 的情况下，选择 NLL Loss 更加匹配。
          </p>

          <h3>7. Experimental Design</h3>
          <p>
            为了验证不同模块对音乐流派识别性能的影响，本项目设计了三组对比实验，
            可视为简化的消融实验。三组模型分别从传统手工特征、预训练模型提取频域特征的能力和时序建模三个角度进行对比，
            用于分析不同模块对最终分类效果的贡献。
          </p>

          <div className="table-wrapper">
            <table className="project-table">
              <thead>
                <tr>
                  <th>模型</th>
                  <th>输入 / 特征</th>
                  <th>实验目的</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>BiLSTM + MFCC</strong>
                  </td>
                  <td>MFCC 手工提取的声学特征</td>
                  <td>
                    作为传统声学特征基线，用于观察仅依赖 MFCC 特征时的分类效果。
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>PANNs + Mel</strong>
                  </td>
                  <td>Log-Mel 频谱图 + PANNs CNN14 深度频谱特征</td>
                  <td>
                    验证预训练 CNN14 频域特征提取器在小规模数据集 GTZAN 上的音频表征能力。
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>PANNs + BiLSTM + Mixup</strong>
                  </td>
                  <td>PANNs 频域特征提取 + BiLSTM 时序特征</td>
                  <td>
                    在预训练模型提取的频域特征相同基础上，进一步验证 BiLSTM 时序建模模块与 Mixup 数据增强策略对模型分类性能的提升作用。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            这样的实验设计能够逐步分析不同模块的作用：从 <strong>BiLSTM + MFCC</strong> 到
            <strong> PANNs + Mel</strong>，主要观察预训练的 PANNs 提取到的频域特征相较于传统手工特征的提升；
            从 <strong>PANNs + Mel</strong> 到
            <strong> PANNs + BiLSTM + Mixup</strong>，则进一步观察在提取的频域特征相同的基础上，
            引入 BiLSTM 时序建模和 Mixup 数据增强后对分类性能的整体提升。
          </p>

          <p>
            在评估方式上，实验采用 <strong>10 折交叉验证</strong>，
            每次使用 9 个子集进行训练，剩余 1 个子集用于测试，
            最终报告 10 次实验结果的平均表现。评价指标包括 Accuracy、Precision、Recall、
            F1-score。
          </p>

          <p>
            除了以上四个基本的评价指标外，本项目同时使用 macro average 和 weighted average 来分析模型表现。
            Macro average 会在计算前四个评价指标的平均方式时，对每个音乐流派赋予相同权重，因此更能反映模型在不同类别上的识别能力；
            weighted average 则会根据每个类别的样本数量进行加权，更接近模型在整体数据分布下的综合表现。
            由于 GTZAN 数据集中 Rock 类别存在一个损坏音频文件，最终有效样本数为 99 个，
            而其他类别通常为 100 个，因此引入这两类平均指标可以更全面地观察模型性能。同时，项目还引入混淆矩阵，
            用于观察不同音乐流派之间的误分类情况，并进一步分析模型在相似流派上的识别能力。
          </p>
        </section>
      );

    case "experiments-results":
      return (
        <section className="detail-section">
          <h2>Experiments & Results</h2>

          <p>
            实验部分主要围绕模型性能对比、消融实验、混淆矩阵分析和真实场景泛化测试展开。
            本项目在 GTZAN 数据集上采用 10 折交叉验证进行评估，并使用 Accuracy、Precision、
            Recall、F1-score、macro average 和 weighted average 等指标综合分析模型表现。
          </p>

          <p>
            其中，macro average 会对每个音乐流派赋予相同权重，更适合观察模型在不同类别上的平均识别能力；
            weighted average 则会根据每个类别的样本数量进行加权，更接近模型在整体数据分布下的综合表现。
            由于 GTZAN 数据集中 Rock 类别存在一个损坏音频文件，最终有效样本数为 99 个，
            因此该 GTZAN 数据集中存在轻微的类别数量不均衡。
          </p>

          <p>
            不过，这种不均衡程度较小，因此 macro average 和 weighted average 的计算结果差异并不明显。
            在后续结果展示中，我主要采用 macro average 指标进行分析，以便更公平地观察模型在每个音乐流派上的平均表现，
            避免评价结果过度受到单一类别样本数量的影响。
          </p>

          <h3>1. 模型性能比较和分析 </h3>
          <p>
            为了验证不同模块对音乐流派识别性能的影响，本项目对三组模型进行了对比：
            <strong> BiLSTM + MFCC</strong>、
            <strong> PANNs + Mel</strong> 和
            <strong> PANNs + BiLSTM + Mixup</strong>。其中，BiLSTM + MFCC 主要用于观察传统手工声学特征的表现；
            PANNs + Mel 用于验证预训练 CNN14 特征提取器的优势；最终模型则进一步结合 BiLSTM
            时序建模和 Mixup 数据增强策略。
          </p>

          <div className="table-wrapper">
            <table className="project-table">
              <thead>
                <tr>
                  <th>模型结构</th>
                  <th>Accuracy</th>
                  <th>F1-score</th>
                  <th>Precision</th>
                  <th>Recall</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>BiLSTM + MFCC</strong>
                  </td>
                  <td>76.50%</td>
                  <td>0.7600</td>
                  <td>0.7770</td>
                  <td>0.7650</td>
                </tr>
                <tr>
                  <td>
                    <strong>PANNs + Mel</strong>
                  </td>
                  <td>79.88%</td>
                  <td>0.8790</td>
                  <td>0.8723</td>
                  <td>0.8798</td>
                </tr>
                <tr>
                  <td>
                    <strong>PANNs + BiLSTM + Mixup</strong>
                  </td>
                  <td>87.29%</td>
                  <td>0.8709</td>
                  <td>0.8854</td>
                  <td>0.8723</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            从上表可以看出，使用预训练 PANNs 模型提取深度音频频域特征后，模型准确率从
            <strong> 76.50%</strong> 提升到 <strong>79.88%</strong>，
            说明相比 MFCC 这类传统手工特征，基于大规模 AudioSet 数据集预训练的 PANNs
            能够提取更丰富的音频语义信息。在预训练的 PANNs 模型基础上加入 BiLSTM 和 Mixup 后，
            最终模型准确率进一步提升到 <strong>87.29%</strong>，表明时序特征提取和数据增强能够有效提升音乐流派分类性能。
          </p>

          <h3>2. 模型和已有方法的比较 </h3>
          <p>
            除了与基线模型进行对比外，本项目还将最终模型与近年来不同学者在 GTZAN 数据集上的提出的解决音乐流派识别问题的主流方法进行了比较。
            本研究选取的对比方法包括传统机器学习方法、CNN、CRNN、2D CNN 以及部分 Transformer-based 方法。
          </p>

          <div className="table-wrapper">
            <table className="project-table">
              <thead>
                <tr>
                  <th>方法 / 模型结构</th>
                  <th>Accuracy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SVM</td>
                  <td>76.40%</td>
                </tr>
                <tr>
                  <td>CRNN</td>
                  <td>77.89%</td>
                </tr>
                <tr>
                  <td>CNN</td>
                  <td>80.50%</td>
                </tr>
                <tr>
                  <td>2D CNN</td>
                  <td>83.00%</td>
                </tr>
                <tr>
                  <td>S3T / Swin Transformer</td>
                  <td>81.10%</td>
                </tr>
                <tr>
                  <td>Deformer / Transformer</td>
                  <td>84.50%</td>
                </tr>
                <tr>
                  <td>
                    <strong>PANNs + BiLSTM + Mixup</strong>
                  </td>
                  <td>
                    <strong>87.29%</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            对比结果显示，本项目提出的 PANNs + BiLSTM + Mixup 模型在 GTZAN 数据集上取得了
            <strong> 87.29%</strong> 的准确率，高于多种传统机器学习、CNN、CRNN 以及部分 Transformer-based 方法。
            这一结果说明，预训练 PANNs 能够缓解在小规模数据集 GTZAN 训练时由于训练数据量不足可能引起的过拟合问题，
            而 BiLSTM 时间特征提取器则能进一步捕捉音乐片段中的长时序依赖。
          </p>

          <h3>3. 混淆矩阵分析，定性找出模型的优劣</h3>

          <div className="project-image-block">
            <img
              src="/music-project/confusion-matrix-comparison.jpg"
              alt="Confusion matrices of BiLSTM MFCC, PANNs Mel, and PANNs BiLSTM Mixup"
              className="project-image"
            />
            <p className="image-caption">
              BiLSTM + MFCC, PANNs + Mel 和 PANNs + BiLSTM + Mixup 三个模型的混淆矩阵图.
            </p>
          </div>

          <p>
            为了进一步分析不同模型在各音乐流派上的分类表现，本项目比较了三组模型的混淆矩阵。
            仅使用 MFCC 特征的 BiLSTM 模型存在较明显的类别混淆，尤其在 Rock 类别上表现较弱，其正确分类比例只有 <strong>0.40</strong>。
            从混淆矩阵图可以看出， BiLSTM 模型易混淆 Rock 类别和 Pop、Reggae、Metal、Disco 和 Hiphop 类型混淆起来，
            说明传统手工声学特征难以充分表达复杂音乐流派之间的音色和节奏差异。
          </p>

          <p>
            引入预训练 PANNs 特征提取器后，模型在 Metal、Classical 等具有明显频谱特征的类别上表现显著提升，从原来的正确分类比例 0.8 和 0.9
            提升到了现在的<strong>1.00</strong> 和 <strong>1.00</strong>。但对于 Country 和 Blues， Rock 和 Country 这两对节奏结构或音色较接近的类别，仅仅依靠 CNN 提取的静态频域特征仍然无法取得很高的正确分类比例。
            在最终的 PANNs + BiLSTM + Mixup 模型中，Rock 和 Country 等较难分类的类别表现得到改善，说明 BiLSTM 可以捕捉音乐中的节奏演化和长时序结构。
          </p>

          <h3>4. 最终模型易混淆类别分析</h3>

          <p>
            从最终模型的混淆矩阵可以看出，PANNs + BiLSTM + Mixup 在大部分类别上取得了较高的识别率，
            其中 Blues、Classical、Hiphop、Jazz 和 Reggae 等类别均能够被较稳定地识别。最明显的是 Rock 的正确分类比例从原来的<strong>0.20</strong> 大幅提升到了现在的<strong>0.80</strong> 。
            Reggae 的正确分类比例相比于 PANNs 模型提高了 <strong>20%</strong> 。相比前两组基线模型，最终模型的对角线颜色更深，说明整体分类边界更加清晰。
          </p>

          <p>
            但模型在 Rock、Pop、Country 和 Disco 等类别上仍然存在一定混淆。例如，Rock 类别仍有 20% 的样本被模型误判为 Pop 类别；
            Country 类别也有 10% 的样本被误判为 Blues 类别，10% 的样本被误判为 Rock 类别的情况；Disco 类别也存在少量被误判为 Pop 或 Rock 类别。
            说明后续我们需要补充更多的乐器配置或节奏结构相近的音乐类别微调模型，进一步加强模型区分这些类别的能力。
          </p>

          <p>
            除了混淆矩阵中的错误类别外，我还进一步观察了 Reggae 和 Rock 两类音乐的 Mel Spectrogram。
            虽然最终模型在 Reggae 类别上的分类结果较好，但这两类音乐在低频能量分布和节奏纹理上仍具有一定相似性。
            这一现象说明，音乐流派识别不能只依赖静态频谱特征，也需要结合节奏变化和时间结构进行分析。
          </p>

          <div className="spectrogram-grid">
            <div className="spectrogram-card">
              <img
                src="/music-project/reggae-mel-spectrogram.jpg"
                alt="Reggae Mel Spectrogram"
                className="spectrogram-image"
              />
              <p className="image-caption">Reggae 音频片段的梅尔频谱图</p>
            </div>

            <div className="spectrogram-card">
              <img
                src="/music-project/rock-mel-spectrogram.jpg"
                alt="Rock Mel Spectrogram"
                className="spectrogram-image"
              />
              <p className="image-caption">Rock 音频片段的梅尔频谱图</p>
            </div>
          </div>

          <h3>5. 跨域分析测试 --- 基于 Youtube 上流行歌曲的分析</h3>
          <p>
            为了测试模型在真实场景中的泛化能力，本项目额外构建了一个小规模真实场景测试集，
            从 YouTube 平台收集了 20 首近几年高质量的音乐片段，覆盖 GTZAN 数据集中的 10 个音乐流派。
            在该测试集上，模型最终取得了 <strong>60%</strong> 的整体准确率。
          </p>

          <div className="table-wrapper">
            <table className="project-table">
              <thead>
                <tr>
                  <th>流派</th>
                  <th>Accuracy</th>
                  <th>典型误分类情况</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hiphop</td>
                  <td>100%</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Reggae</td>
                  <td>100%</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Pop</td>
                  <td>100%</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Classical</td>
                  <td>100%</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Rock</td>
                  <td>50%</td>
                  <td>部分样本被误分为 Metal</td>
                </tr>
                <tr>
                  <td>Jazz</td>
                  <td>50%</td>
                  <td>部分样本被误分为 Reggae</td>
                </tr>
                <tr>
                  <td>Metal</td>
                  <td>50%</td>
                  <td>部分样本被误分为 Hiphop</td>
                </tr>
                <tr>
                  <td>Blues</td>
                  <td>50%</td>
                  <td>部分样本被误分为 Classical</td>
                </tr>
                <tr>
                  <td>Country</td>
                  <td>0%</td>
                  <td>部分样本被误分为 Pop 或 Rock</td>
                </tr>
                <tr>
                  <td>Disco</td>
                  <td>0%</td>
                  <td>部分样本被误分为 Classical 或 Reggae</td>
                </tr>
                <tr>
                  <td>
                    <strong>Overall</strong>
                  </td>
                  <td>
                    <strong>60%</strong>
                  </td>
                  <td>12 / 20 samples correctly classified</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            真实场景测试结果表明，模型在 Hiphop、Reggae、Pop 和 Classical 等具有较明显节奏或频谱特征的类别上表现较好。
            但在 Country、Disco 类别，模型更容易受到现代歌曲和 GTZAN 数据集里的歌曲在年代、编曲风格和录音质量的差别，导致该模型的泛化能力减弱。
            与 GTZAN 上的 87.29% 准确率相比，真实场景准确率下降到 60%，说明模型仍受到数据集域偏移的影响。
          </p>

          <h3>6. Summary</h3>
          <p>
            综合来看，PANNs + BiLSTM + Mixup 模型在 GTZAN 数据集上取得了较好的分类效果。
            预训练 PANNs 提供了稳定的频域特征提取能力，BiLSTM 进一步补充了对音乐长时序结构的建模能力，
            Mixup 则在小样本条件下提升了模型的泛化能力和鲁棒性。
          </p>

          <p>
            同时，实验也暴露出模型在真实音乐场景中的不足。GTZAN 数据集里的音频与现代 YouTube 音乐在采样率、
            音质、压缩方式、混音风格和年代特征上存在差异，因此模型在真实场景中会出现一定性能下降。
            后续可以通过引入更多跨年代、跨平台的真实场景音乐数据，进一步提升模型在真实场景下的泛化能力。
          </p>
        </section>
      );

    case "reflection":
      return (
        <section className="detail-section">
          <h2>Reflection</h2>

          <p>
            通过此项目，我理解了音频分类任务与图像分类、目标检测任务之间的差异。
            音频数据本质上是一维时间信号，需要先通过对原始音频数据进行快速傅里叶变换操作得到 Mel Spectrogram 或者进一步得到更符合人耳听觉的 Log-Mel Spectrogram。
            通过这种方式把原始的一维时间信号转换成时频信息，才能更好地输入深度学习模型进行特征学习。
          </p>

          <p>
            在模型设计方面，我认识到预训练模型和长时序特征提取在小规模音频数据集上的重要性。
            考虑到 GTZAN 数据集规模有限，因此使用在 AudioSet 上预训练的 PANNs / CNN14 作为特征提取器，
            可以缓解从零训练模型带来的数据不足可能导致的过拟合问题；而 BiLSTM 则进一步帮助模型捕捉输入音乐片段中长时序依赖。
          </p>

          <p>
            在结果分析中，我也意识到模型评估不能只关注最终准确率。虽然模型在 GTZAN 上取得了
            <strong> 87.29% </strong> 的平均准确率，但真实场景测试中的准确率却下降到 <strong>60%</strong>，
            说明模型仍然受到数据集域偏移的影响。后续我会引入更多跨年代、跨平台的真实场景下的音乐数据，并尝试更丰富的数据增强和微调策略，以提升模型的泛化能力。
          </p>
        </section>
      );

    default:
      return null;
  }
}

function MusicProjectPage({
  activeSection,
  onSelectSection,
}: {
  activeSection: string | null;
  onSelectSection: (sectionId: string) => void;
}) {
  return (
    <>
      <section className="project-header">
        <div className="eyebrow">Audio Classification Project</div>

        <h1>音乐流派识别项目</h1>

        <p className="project-desc">
          本项目是一个面向音乐流派识别任务的音频分类项目，主要围绕音频特征提取、
          深度学习模型运用和分类结果评估展开。项目关注如何从音乐片段中提取有效的时频特征，
          并利用深度学习模型完成不同音乐流派的识别。
        </p>

        <p className="project-desc">
          相比图像类目标检测项目，本项目更侧重音频信号处理、时频信息提取、深度学习模型训练和结果分析。
          通过该项目，我进一步理解了信号处理方法与深度学习模型在音频分类任务中的结合过程，
          也学习了如何利用提取到的时频信息提高模型在音乐流派识别任务中的分类能力，
          还进一步拓展了自己在非图像模态数据分类方面的实践经验。
        </p>

        <div className="tags">
          <span>Audio Classification</span>
          <span>Signal Processing</span>
          <span>MFCC</span>
          <span>Mel Spectrogram</span>
          <span>Deep Learning</span>
          <span>Model Evaluation</span>
        </div>

        <MusicProjectSectionNav
          activeSection={activeSection}
          onSelectSection={onSelectSection}
        />
      </section>

      <section id="music-section-content" className="detail-content">
        {!activeSection && (
          <div className="detail-section empty-section">
            <h2>Choose a Section</h2>
            <p>
              请点击上方或左侧的项目章节入口。点击不同部分后，这里会显示音乐流派识别项目的详细内容。
            </p>
          </div>
        )}

        {activeSection && renderMusicSectionContent(activeSection)}
      </section>
    </>
  );
}

function WebsiteProjectPage({
  activeSection,
  onSelectSection,
}: {
  activeSection: string | null;
  onSelectSection: (sectionId: string) => void;
}) {
  return (
    <>
      <section className="project-header">
        <div className="eyebrow">Portfolio Website Project</div>
        <h1>个人网站项目</h1>

        <p className="project-desc">
          本项目是一个面向保研、留学申请和未来 AI 应用岗求职展示的个人作品集网站，
          主要用于系统整理我的项目经历、实习经历、技能栈、论文竞赛成果和联系方式。
        </p>

        <p className="project-desc">
          网站重点展示计算机视觉、深度学习和 AI 应用开发相关经历，包括夜间路灯检测项目、
          EI 论文 YOLO 项目、音乐流派识别项目和个人网站项目本身。相比传统简历，
          个人网站可以更完整地呈现项目背景、技术路线、实验结果、Demo 展示和阶段性反思。
        </p>

        <WebsiteProjectSectionNav
          activeSection={activeSection}
          onSelectSection={onSelectSection}
        />
      </section>

      <section id="website-section-content" className="detail-content">
        {!activeSection && (
          <div className="detail-section empty-section">
            <h2>Choose a Section</h2>
            <p>
              请点击上方或左侧的项目章节入口。点击不同部分后，这里会显示个人网站项目的详细内容。
            </p>
          </div>
        )}

        {activeSection && renderWebsiteSectionContent(activeSection)}
      </section>
    </>
  );
}

function renderWebsiteSectionContent(sectionId: string) {
  switch (sectionId) {
    case "overview":
      return (
        <section className="detail-section">
          <h2>1. Project Overview 项目概述</h2>
          <p>
            本项目是一个面向保研、留学申请和未来 AI 应用岗求职展示的个人作品集网站，
            主要用于系统整理我的项目经历、实习经历、技能栈、论文竞赛成果和联系方式。
          </p>
          <p>
            网站重点展示计算机视觉、深度学习和 AI 应用开发相关经历，包括夜间路灯检测项目、
            EI 论文 YOLO 项目、音乐流派识别项目和个人网站项目本身。相比传统简历，
            个人网站可以更完整地呈现项目背景、技术路线、实验结果、Demo 展示和阶段性反思。
          </p>
        </section>
      );

    case "motivation":
      return (
        <section className="detail-section">
          <h2>2. Motivation 项目动机</h2>
          <p>
            在准备保研、留学申请以及暑期实习投递的过程中，我发现一页简历很难全面展示一个
            AI 项目从 0 到 1 的完整过程。很多项目不仅包括模型训练，还包括数据处理、误检分析、
            结果可视化、Demo 搭建和后续部署规划。
          </p>
          <p>
            因此，我搭建了这个个人网站，希望把分散在简历、论文、代码仓库和本地文件夹里的项目内容
            统一整理，让导师、面试官和合作伙伴可以更直观地了解我的技术兴趣、未来方向、项目经历和成长路径。
            我也希望通过这个网站，让我的项目实践和阶段性成长能够被更清晰地看到。
          </p>
        </section>
      );

    case "website-structure":
      return (
        <section className="detail-section">
          <h2>3. Website Structure 网站结构</h2>
          <p>
            网站采用侧边栏导航结构，主要包括 Overview、Projects、Experience、Skills、
            Achievements 和 Contact 六个部分。
          </p>
          <p>
            其中 Projects 是网站的核心板块，用于展示我的主要项目经历。前三个项目页面进一步拆分为
            项目概述、时间线、数据处理、模型训练、结果分析、部署 Demo 和项目反思等子页面，
            方便读者从不同角度了解项目内容。
          </p>

          <div className="code-structure-box">
            <pre>
              {`Portfolio Website
├── Overview              # 个人简介与方向概览
├── Projects              # 项目展示
│   ├── 新国投 CV 项目
│   ├── EI 论文 YOLO 项目
│   ├── 音乐流派识别项目
│   └── 个人网站项目
├── Experience            # 实习经历
├── Skills                # 技能栈
├── Achievements          # 论文、竞赛与证书
└── Contact               # 联系方式`}
            </pre>
          </div>
        </section>
      );

    case "implementation":
      return (
        <section className="detail-section">
          <h2>4. Implementation 实现方式</h2>
          <p>
            由于该网站主要用于作品集展示，不涉及用户数据存储和复杂后端业务逻辑，
            因此整体采用 Next.js 和 TypeScript 搭建，并使用组件化方式组织页面内容。
            网站视觉风格参考 Notion / Unity 官方文档，采用侧边栏导航和卡片式内容展示，
            便于读者快速浏览不同板块。
          </p>
          <p>
            在内容组织上，我将最核心的项目经历拆分为多个可切换的详情板块，例如
            Project Overview、Timeline、Model Training、Result Analysis、Deployment & Demo
            和 Reflection。这样可以避免所有内容堆叠在一个页面中，也方便后续持续更新。
          </p>
          <p>
            对于 Skills、Experience、Achievements 和 Contact 等内容相对简洁的部分，
            网站采用侧边栏点击和单页展示的形式，保证页面结构清晰，降低阅读成本。
          </p>
        </section>
      );

    case "deployment":
      return (
        <section className="detail-section">
          <h2>5. Deployment 部署方式</h2>
          <p>
            网站通过 GitHub 与 Vercel 进行部署。每次在本地完成内容更新后，
            我会使用 Git 将修改内容提交并推送到 GitHub 仓库，Vercel 会自动触发重新部署，
            使网站内容保持在线更新。
          </p>
          <p>
            这种部署方式降低了维护成本，也让我能够快速更新项目进展、添加新的实验结果、
            补充 Demo 预览或完善作品集材料。
          </p>

          <div className="workflow-box">
            <div className="workflow-step">本地修改网站内容</div>
            <div className="workflow-arrow">↓</div>
            <div className="workflow-step">Git 提交版本记录</div>
            <div className="workflow-arrow">↓</div>
            <div className="workflow-step">推送到 GitHub 仓库</div>
            <div className="workflow-arrow">↓</div>
            <div className="workflow-step">Vercel 自动触发部署</div>
            <div className="workflow-arrow">↓</div>
            <div className="workflow-step">个人网站在线更新</div>
          </div>
        </section>
      );

    case "reflection":
      return (
        <section className="detail-section">
          <h2>6. Reflection 项目反思</h2>
          <p>
            通过搭建个人作品集网站，我意识到项目能力不仅体现在代码和模型指标上，
            也体现在如何清晰地组织、表达和展示项目过程。一个完整的 AI 项目需要让读者看懂
            项目背景、技术路线、实验结果、遇到的问题和后续优化方向。
          </p>
          <p>
            这个网站也帮助我重新梳理了自己的经历，让我的项目、实习、论文和技能之间形成更清晰的主线：
            以计算机视觉和 AI 应用开发为核心，逐步从课程学习过渡到真实项目实践。
          </p>
        </section>
      );

    default:
      return null;
  }
}

function ExperiencePage() {
  return (
    <>
      <section className="project-header">
        <div className="eyebrow">Experience</div>
        <h1>实习经历</h1>

        <p className="project-desc">
          本页面记录我的实习经历与阶段性成长，重点展示我在 AI/CV 项目实践、
          工程协作和项目总结中的具体收获。
        </p>
      </section>

      <section className="detail-section">
        <div className="eyebrow">AI / Computer Vision Intern</div>

        <h2>福州城投新基建｜计算机视觉实习</h2>

        <p>
          在实习期间，我主要参与夜间道路路灯检测相关项目，
          基于 YOLO 系列目标检测模型，对夜间道路场景中的路灯目标进行识别。
          我的工作覆盖数据整理、图像标注、模型训练、测试评估、误检分析、Demo 搭建和项目展示等环节。
        </p>

        <ul>
          <li>整理夜间道路场景图像，并筛选适合路灯检测任务的训练样本。</li>
          <li>使用 Label Studio 与预标注工具完成图像标注、标注检查与数据导出。</li>
          <li>使用 YOLO11 系列模型进行训练、验证与预测，分析不同版本模型的表现。</li>
          <li>结合 Precision、Recall、mAP50、mAP50@95 等指标评估模型效果。</li>
          <li>分析复杂背景下的误检、漏检和重复框问题，并整理阶段性优化思路。</li>
          <li>搭建本地 Web Demo，实现图片上传、YOLO 模型推理、检测结果返回与网页端可视化展示。</li>
          <li>将项目过程整理进个人作品集网站，并完成 GitHub 仓库整理与云服务器部署，用于项目展示、复现和在线体验。</li>
        </ul>
      </section>
    </>
  );
}

function SkillsPage() {
  return (
    <section className="project-header">
      <div className="eyebrow">个人技术</div>
      <h1>技术栈</h1>

      <p className="project-desc">
        我的技术能力主要围绕人工智能应用、计算机视觉项目实践与 Web Demo 开发展开。
        目前重点积累了数据处理、图像标注、YOLO 模型训练、结果分析、模型部署和项目展示等能力。
      </p>

      <div className="skill-grid">
        <span>Python</span>
        <span>PyTorch </span>
        <span>YOLO</span>
        <span>Computer Vision</span>
        <span>Object Detection</span>
        <span>OpenCV</span>
        <span>Flask</span>
        <span>Data Annotation</span>
        <span>Label Studio</span>
        <span>Dataset Cleaning</span>
        <span>Model Training</span>
        <span>Result Analysis</span>
        <span>Precision / Recall / mAP</span>
        <span>GitHub</span>
        <span>Vercel</span>
      </div>
    </section>
  );
}

function AchievementsPage() {
  return (
    <>
      <section className="project-header">
        <div className="eyebrow">Achievements</div>
        <h1>成果与荣誉</h1>

        <p className="project-desc">
          本科阶段，我积极参与科研训练、学科竞赛、英语能力提升和项目实践，
          逐步积累了跨学科问题分析、技术表达和团队协作能力。
        </p>
      </section>

      <section className="detail-section">
        <h2>科研成果</h2>
        <ul>
          <li>
            <strong>第一作者 EI 会议论文：</strong>
            参与选题、实验分析、论文撰写与会议答辩。
          </li>
          <li>
            通过科研训练提升了英文论文写作、实验总结和学术表达能力。
          </li>
        </ul>
      </section>

      <section className="detail-section">
        <h2>竞赛经历</h2>
        <ul>
          <li>
            美国大学生数学建模竞赛 <strong>Honorable Mention</strong>。
          </li>
          <li>
            <strong>中国国际大学生创新大赛省级铜奖。</strong>
          </li>
          <li>
            <strong>电工杯数学建模竞赛省级三等奖。</strong>
          </li>
        </ul>
      </section>

      <section className="detail-section">
        <h2>学习与英语能力</h2>
        <ul>
          <li>
            <strong>福州大学校三等奖学金。</strong>
          </li>
          <li>
            IELTS Overall 6.5。
          </li>
          <li>
            CET-6 504。
          </li>
        </ul>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <section className="project-header">
        <div className="eyebrow">Contact</div>
        <h1>联系方式</h1>

        <p className="project-desc">
          如果你对我的项目经历、计算机视觉实践、保研/实习合作或技术交流感兴趣，
          欢迎通过以下方式联系我。我也会持续更新个人作品集中的项目内容与学习记录。
        </p>
      </section>

      <section className="detail-section">
        <h2>Email</h2>
        <p>
          推荐通过邮箱联系我，适合用于项目交流、实习沟通、科研联系和正式材料往来。
        </p>
        <a href="mailto:YISHUN.YAN.2024@mumail.ie">
          YISHUN.YAN.2024@mumail.ie
        </a>
      </section>

      <section className="detail-section">
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
      </section>

      <section className="detail-section">
        <h2>Portfolio</h2>
        <p>
          个人作品集网站用于展示我的 AI/CV 项目实践、实习经历、技能能力和阶段性成果。
        </p>
        <a
          href="https://personal-website-d3ys.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://personal-website-d3ys.vercel.app/
        </a>
      </section>

      <section className="detail-section">
        <h2>Other Contact</h2>
        <p>
          微信、电话等联系方式可根据具体交流需要进一步提供。
        </p>
      </section>
    </>
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
