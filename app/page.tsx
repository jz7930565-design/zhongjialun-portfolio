"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    no: "01",
    type: "AI FASHION FILM",
    title: "未来织物",
    desc: "从服装概念、动态分镜到成片质感，探索面料在数字空间里的流动与呼吸。",
    tags: ["AI 服装视频", "概念设计", "动态视觉"],
    tone: "violet",
  },
  {
    no: "02",
    type: "AI COMMERCIAL",
    title: "光感新品广告",
    desc: "以产品为视觉核心，用光影、材质与节奏建立具有记忆点的商业影像。",
    tags: ["AI 广告视频", "产品视觉", "创意策划"],
    tone: "cobalt",
  },
  {
    no: "03",
    type: "BRAND STORY",
    title: "城市漫游计划",
    desc: "结合真实街景与生成影像，创作年轻、轻盈又带有电影感的品牌短片。",
    tags: ["品牌短片", "视觉叙事", "后期合成"],
    tone: "lime",
  },
  {
    no: "04",
    type: "EXPERIMENTAL VISUAL",
    title: "梦境档案",
    desc: "用超现实空间与人物状态完成一组关于记忆、身份和想象力的实验影像。",
    tags: ["实验影像", "AI 艺术", "视觉开发"],
    tone: "coral",
  },
];

const caseSections = [
  {
    no: "01",
    type: "PRODUCT COMMERCIAL",
    title: "产品广告视频与图片",
    desc: "面向品牌产品与社交媒体传播，以材质、功能和使用场景为核心，展示从创意概念到成片交付的产品广告内容。",
    tags: ["产品广告", "产品视觉", "短视频"],
    tone: "cobalt",
    cases: [
      { kind: "VIDEO CASE", name: "产品广告视频", format: "视频 · 15–60 秒" },
      { kind: "IMAGE CASE", name: "产品广告图片", format: "图片 · 横版 / 竖版" },
    ],
  },
  {
    no: "02",
    type: "AI COMIC DRAMA",
    title: "AI 漫剧",
    desc: "通过角色设定、分镜、对白与动态演绎，完成具有连续叙事的 AI 漫剧内容。",
    tags: ["角色设计", "故事分镜", "AI 动画"],
    tone: "violet",
    cases: [
      { kind: "VIDEO CASE", name: "AI 漫剧正片", format: "视频 · 连载短剧" },
      { kind: "IMAGE CASE", name: "角色与场景设定", format: "图片 · 设定集" },
    ],
  },
  {
    no: "03",
    type: "VLOG & LIFESTYLE",
    title: "Vlog 视频",
    desc: "记录日常、旅行与工作片段，用自然的镜头语言呈现真实、有温度的个人表达。",
    tags: ["生活记录", "旅行影像", "剪辑包装"],
    tone: "lime",
    cases: [
      { kind: "VIDEO CASE", name: "生活 / 旅行 Vlog", format: "视频 · 横版 / 竖版" },
      { kind: "IMAGE CASE", name: "Vlog 封面与剧照", format: "图片 · 封面组图" },
    ],
  },
  {
    no: "04",
    type: "PORTRAIT PHOTOGRAPHY",
    title: "写真拍摄",
    desc: "围绕人物气质制定造型、场景与光线方向，呈现完整的写真影像与成片组图。",
    tags: ["人物写真", "造型策划", "后期修图"],
    tone: "coral",
    cases: [
      { kind: "VIDEO CASE", name: "写真幕后短片", format: "视频 · 花絮 / 成片" },
      { kind: "IMAGE CASE", name: "人物写真组图", format: "图片 · 精修系列" },
    ],
  },
  {
    no: "05",
    type: "FASHION COMMERCIAL",
    title: "服装广告视频与图片",
    desc: "围绕服装版型、面料质感与品牌风格，完成从造型概念、动态展示到平面视觉的一体化服装广告内容。",
    tags: ["服装广告", "时尚视觉", "造型策划"],
    tone: "magenta",
    cases: [
      { kind: "VIDEO CASE", name: "服装广告视频", format: "视频 · 横版 / 竖版" },
      { kind: "IMAGE CASE", name: "服装广告图片", format: "图片 · Lookbook / 海报" },
    ],
  },
];

const adVideos = [
  { src: "/videos/ad-01.mp4", poster: "/videos/posters/ad-01.webp", type: "video/mp4", title: "7月18日", subtitle: "产品广告视频 · 作品 01" },
  { src: "/videos/ad-02.mp4", poster: "/videos/posters/ad-02.webp", type: "video/mp4", title: "7月6日", subtitle: "产品广告视频 · 作品 02" },
  { src: "/videos/ad-03.mp4", poster: "/videos/posters/ad-03.webp", type: "video/mp4", title: "7月1日", subtitle: "产品广告视频 · 作品 03" },
];

const vlogVideos = [
  { src: "/videos/vlog-01-optimized.mp4", poster: "/videos/posters/vlog-01.webp", type: "video/mp4", title: "Vlog 01", subtitle: "生活影像记录" },
  { src: "/videos/vlog-02.mp4", poster: "/videos/posters/vlog-02.webp", type: "video/mp4", title: "Vlog 02", subtitle: "日常片段记录" },
];

const fashionVideo = {
  src: "/videos/fashion-ad-01.mp4",
  poster: "/videos/posters/fashion-ad-01.webp",
  type: "video/mp4",
  title: "深色丹宁衬衫",
  subtitle: "服装广告视频 · 作品 01",
};

const fashionImages = [
  { src: "/fashion/fashion-01.webp", alt: "深色丹宁衬衫：双胸袋结构与局部装饰" },
  { src: "/fashion/fashion-02.webp", alt: "深色丹宁衬衫：日常穿着的结构与质感" },
  { src: "/fashion/fashion-03.webp", alt: "深色丹宁衬衫：袖口结构与丹宁斜纹肌理" },
  { src: "/fashion/fashion-04.webp", alt: "深色丹宁衬衫：正反面结构展示" },
  { src: "/fashion/fashion-05.webp", alt: "深色丹宁衬衫：模特全身穿搭展示" },
  { src: "/fashion/fashion-06.webp", alt: "深色丹宁衬衫：日常搭配延展" },
  { src: "/fashion/fashion-07.webp", alt: "深色丹宁衬衫：结构车线细节" },
  { src: "/fashion/fashion-08.webp", alt: "深色丹宁衬衫：翻领与门襟细节" },
];

const portraitImages = [
  { src: "/portraits/portrait-01.webp", alt: "汉服写真：古城街巷中的少女侧影" },
  { src: "/portraits/portrait-02.webp", alt: "汉服写真：古建筑前的双人合影" },
  { src: "/portraits/portrait-03.webp", alt: "汉服写真：宫门前的蓝色汉服少女" },
  { src: "/portraits/portrait-04.webp", alt: "汉服写真：建筑中轴线上的持伞少女" },
  { src: "/portraits/portrait-05.webp", alt: "汉服写真：灯笼背景前的粉色汉服少女" },
  { src: "/portraits/portrait-06.webp", alt: "古装写真：山石旁读书的红衣少年" },
  { src: "/portraits/portrait-07.webp", alt: "汉服写真：古建筑栏杆旁的粉衣少女" },
  { src: "/portraits/portrait-08.webp", alt: "古装写真：草地边共读画卷的少年少女" },
  { src: "/portraits/portrait-09.webp", alt: "汉服写真：书案前小憩的蓝衣少女" },
  { src: "/portraits/portrait-10.webp", alt: "汉服写真：竹林中撑伞的蓝衣少女" },
  { src: "/portraits/portrait-11.webp", alt: "汉服写真：红色书法布景前的唐风人物" },
  { src: "/portraits/portrait-12.webp", alt: "古装写真：书案前阅读的蓝衣少年" },
  { src: "/portraits/portrait-13.webp", alt: "古装写真：宫殿前的侠客人物" },
  { src: "/portraits/portrait-14.webp", alt: "汉服写真：古建筑前撑伞的粉衣少女" },
];

const capabilities = [
  ["01", "创意策划", "从 brief 提炼概念，完成创意方向、情绪板与脚本结构。"],
  ["02", "AI 视觉生成", "覆盖人物、服装、场景、产品及风格一致性的视觉开发。"],
  ["03", "动态与剪辑", "通过镜头设计、节奏、转场与声音形成完整的观看体验。"],
  ["04", "商业交付", "面向社交媒体、广告投放与品牌传播输出多尺寸成片。"],
];

export default function Home() {
  const [activeProject, setActiveProject] = useState<(typeof caseSections)[number] | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (selectedImage) setSelectedImage(null);
      else setActiveProject(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = activeProject || selectedImage ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [activeProject, selectedImage]);

  return (
    <main>
      <nav className="nav shell" aria-label="主导航">
        <a className="wordmark" href="#top" aria-label="返回首页">
          AI<span>／</span>PORTFOLIO
        </a>
        <div className="navLinks">
          <a href="#work">作品</a>
          <a href="#about">关于</a>
          <a href="#resume">简历</a>
        </div>
        <a className="contactPill" href="#contact">联系我 ↗</a>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroKicker"><i /> AI VISUAL CREATOR · 2026</div>
        <h1>
          我用 AI，<br />
          把<span>想象</span>变成影像。
        </h1>
        <div className="heroBottom">
          <p>专注 AI 服装视频、AI 广告视频与品牌视觉。<br />让概念不只停留在脑海，而是成为可被看见的故事。</p>
          <a className="roundLink" href="#work" aria-label="查看精选作品">↓</a>
        </div>
        <div className="heroOrb" aria-hidden="true"><b>AI</b><em>VISUAL<br />STORYTELLING</em></div>
      </section>

      <section className="work shell" id="work">
        <div className="sectionHead">
          <div><span>01</span><p>SELECTED WORK</p></div>
          <h2>精选作品</h2>
          <p className="sectionNote">一组横跨时尚、广告与实验视觉的 AI 影像实践。</p>
        </div>
        <div className="projectGrid">
          {caseSections.map((project) => (
            <article className="project" key={project.no}>
              <button className="projectOpen" type="button" onClick={() => setActiveProject(project)} aria-label={`打开${project.title}案例`}>
                <div className={`projectVisual ${project.tone}`}>
                  <span>{project.type}</span>
                  <strong>{project.no}</strong>
                  {project.no === "01" || project.no === "03" ? (
                    <div className={`videoTeaser ${project.no === "01" ? "adTeaser" : "vlogTeaser"}`} aria-hidden="true">
                      {(project.no === "01" ? adVideos : vlogVideos).map((video, index) => (
                        <figure key={video.src}>
                          <img src={video.poster} alt="" loading="lazy" decoding="async" />
                          <span>0{index + 1}</span>
                          <i>▶</i>
                          <figcaption>{video.title}</figcaption>
                        </figure>
                      ))}
                    </div>
                  ) : project.no === "04" ? (
                    <div className="portraitTeaser" aria-hidden="true">
                      <img src={portraitImages[0].src} alt="" loading="lazy" decoding="async" />
                      <img src={portraitImages[6].src} alt="" loading="lazy" decoding="async" />
                    </div>
                  ) : project.no === "05" ? (
                    <div className="fashionTeaser" aria-hidden="true">
                      <figure className="fashionTeaserVideo">
                        <img src={fashionVideo.poster} alt="" loading="lazy" decoding="async" />
                        <i>▶</i>
                        <figcaption>FASHION FILM</figcaption>
                      </figure>
                      <img src={fashionImages[0].src} alt="" loading="lazy" decoding="async" />
                      <img src={fashionImages[6].src} alt="" loading="lazy" decoding="async" />
                    </div>
                  ) : (
                    <div className="caseMediaPair">
                      {project.cases.map((item) => (
                        <div className="casePreview" key={item.kind}>
                          <span>{item.kind}</span>
                          <b>{item.name}</b>
                          <small>{item.format}</small>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="projectInfo">
                  <div className="projectMeta"><small>{project.no} / 2026</small><span>{project.no === "01" ? "3 VIDEOS ONLINE" : project.no === "03" ? "2 VIDEOS ONLINE" : project.no === "04" ? "14 PHOTOS ONLINE" : project.no === "05" ? "1 VIDEO · 8 IMAGES" : "OPEN PROJECT ↗"}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="mediaLabels"><span>01 · VIDEO</span><span>02 · IMAGE</span></div>
                  <div className="projectTags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </button>
            </article>
          ))}
        </div>

        {activeProject && (
          <div className="projectModal" role="dialog" aria-modal="true" aria-label={`${activeProject.title}案例详情`} onMouseDown={() => setActiveProject(null)}>
            <div className="modalPanel" onMouseDown={(event) => event.stopPropagation()}>
              <button className="modalClose" type="button" onClick={() => setActiveProject(null)} aria-label="关闭案例详情">关闭 ×</button>
              <div className={`modalHero ${activeProject.tone}`}>
                <small>{activeProject.type} · {activeProject.no}</small>
                <h2>{activeProject.title}</h2>
                <p>{activeProject.desc}</p>
              </div>
              {activeProject.no === "01" ? (
                <>
                  <div className="vlogVideoGrid adVideoGrid">
                    {adVideos.map((video, index) => (
                      <article className="vlogVideo" key={video.src}>
                        <video controls preload="metadata" poster={video.poster} playsInline aria-label={`广告视频 ${video.title}`}>
                          <source src={video.src} type={video.type} />
                          你的浏览器暂不支持视频播放。
                        </video>
                        <div><small>0{index + 1}</small><h3>{video.title}</h3><p>{video.subtitle}</p></div>
                      </article>
                    ))}
                  </div>
                  <div className="vlogImagePending"><span>IMAGE CASE</span><b>产品广告图片</b><small>图片素材待上传</small></div>
                </>
              ) : activeProject.no === "03" ? (
                <>
                  <div className="vlogVideoGrid">
                    {vlogVideos.map((video, index) => (
                      <article className="vlogVideo" key={video.src}>
                        <video controls preload="metadata" poster={video.poster} playsInline aria-label={video.title}>
                          <source src={video.src} type={video.type} />
                          你的浏览器暂不支持视频播放。
                        </video>
                        <div><small>0{index + 1}</small><h3>{video.title}</h3><p>{video.subtitle}</p></div>
                      </article>
                    ))}
                  </div>
                  <div className="vlogImagePending"><span>IMAGE CASE</span><b>Vlog 封面与剧照</b><small>图片素材待上传</small></div>
                </>
              ) : activeProject.no === "04" ? (
                <div className="portraitGallery" aria-label="写真作品画廊">
                  {portraitImages.map((image, index) => (
                    <button className="portraitThumb" type="button" key={image.src} onClick={() => setSelectedImage(image)} aria-label={`放大查看第 ${index + 1} 张写真`}>
                      <img src={image.src} alt={image.alt} loading="lazy" />
                      <span><small>{String(index + 1).padStart(2, "0")}</small> 点击放大</span>
                    </button>
                  ))}
                </div>
              ) : activeProject.no === "05" ? (
                <div className="fashionCase">
                  <article className="fashionVideoFeature">
                    <video controls preload="metadata" poster={fashionVideo.poster} playsInline aria-label={fashionVideo.title}>
                      <source src={fashionVideo.src} type={fashionVideo.type} />
                      你的浏览器暂不支持视频播放。
                    </video>
                    <div><small>01 · VIDEO</small><h3>{fashionVideo.title}</h3><p>{fashionVideo.subtitle}</p></div>
                  </article>
                  <div className="fashionGallery" aria-label="服装广告图片画廊">
                    {fashionImages.map((image, index) => (
                      <button className="fashionThumb" type="button" key={image.src} onClick={() => setSelectedImage(image)} aria-label={`放大查看第 ${index + 1} 张服装广告图片`}>
                        <img src={image.src} alt={image.alt} loading="lazy" />
                        <span><small>{String(index + 1).padStart(2, "0")}</small> 点击放大</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="modalCases">
                  {activeProject.cases.map((item, index) => (
                    <article className="modalCase" key={item.kind}>
                      <div className="mediaPlaceholder">
                        <span>{item.kind}</span>
                        <b>{index === 0 ? "▶" : "＋"}</b>
                        <small>{index === 0 ? "上传视频后可在这里播放" : "上传图片后可在这里浏览"}</small>
                      </div>
                      <div><small>0{index + 1}</small><h3>{item.name}</h3><p>{item.format}</p></div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {selectedImage && (
          <div className="imageLightbox" role="dialog" aria-modal="true" aria-label="作品大图预览" onMouseDown={() => setSelectedImage(null)}>
            <button type="button" className="lightboxClose" onClick={() => setSelectedImage(null)} aria-label="关闭大图">关闭 ×</button>
            <figure onMouseDown={(event) => event.stopPropagation()}>
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <figcaption>{selectedImage.alt}</figcaption>
            </figure>
          </div>
        )}
      </section>

      <section className="about shell" id="about">
        <div className="sectionHead lightHead">
          <div><span>02</span><p>ABOUT ME</p></div>
          <h2>关于我</h2>
        </div>
        <div className="aboutGrid">
          <p className="bigStatement">我相信，好看的 AI 影像不只依赖技术，<span>更需要审美、叙事与对品牌的理解。</span></p>
          <div className="aboutCopy">
            <p>我是一名专注生成式影像的视觉创作者，擅长把模糊的想法整理成清晰的视觉语言，并贯穿概念、生成、动态到后期的完整流程。</p>
            <p>目前开放品牌广告、时尚短片、产品视觉及创意共创合作。</p>
          </div>
        </div>
        <div className="capabilities">
          {capabilities.map(([no, title, text]) => (
            <article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="resume shell" id="resume">
        <div className="sectionHead">
          <div><span>03</span><p>RESUME</p></div>
          <h2>个人简历</h2>
          <p className="sectionNote">一位同时理解创意与执行的 AI 视觉创作者。</p>
        </div>
        <div className="resumeGrid">
          <div className="resumeIntro">
            <div className="portrait" aria-label="个人头像占位"><span>YOUR<br />PHOTO</span></div>
            <div><small>AI VISUAL CREATOR</small><h3>钟家伦</h3><p>中国 · 可远程合作</p></div>
          </div>
          <div className="resumeColumn">
            <h4>擅长领域</h4>
            <p>AI 视频创作</p><p>时尚与广告视觉</p><p>创意策划 / 分镜</p><p>剪辑与后期合成</p>
          </div>
          <div className="resumeColumn">
            <h4>工作方式</h4>
            <p>项目制合作</p><p>品牌视觉共创</p><p>社交媒体内容</p><p>长期创意支持</p>
          </div>
          <div className="resumeColumn">
            <h4>常用工具</h4>
            <p>生成式图像 / 视频</p><p>Premiere / After Effects</p><p>Photoshop</p><p>大语言模型工作流</p>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="shell footerInner">
          <div><small>HAVE A PROJECT IN MIND?</small><h2>一起做点<br /><i>有意思的。</i></h2></div>
          <div className="contactBox">
            <p>欢迎联系项目合作、品牌视觉与影像创作。<br />可通过电话或邮箱直接与我联系。</p>
            <a href="tel:15220017059">手机 · 152 2001 7059 ↗</a>
            <a href="mailto:3315466882@qq.com">邮箱 · 3315466882@qq.com ↗</a>
          </div>
        </div>
        <div className="shell footerBar"><span>© 2026 AI VISUAL PORTFOLIO</span><a href="#top">回到顶部 ↑</a></div>
      </footer>
    </main>
  );
}
