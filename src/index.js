import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore
} from "react-redux-i18n";
import Routes from "./routes";
import pipelineApp from "./reducers/index";
import * as serviceWorker from "./serviceWorker";
import "./fonts/Ubuntu/Ubuntu-Regular.ttf";
import "./index.scss";
import blog_GB from "./blogsContent/blogs_GB";
import blog_CN from "./blogsContent/blogs_CN";
import blog_HK from "./blogsContent/blogs_HK";
import pricing_content from "./blogsContent/pricing";

const isProduction = process.env.NODE_ENV === "production";
let store = null;
const translationObject = {
  GB: {
    title: "IDEX - Innovation Management System",
    header: {
      home: "Home",
      howitworks: "How It Works",
      testimonials: "Testimonials",
      blog: "Blog",
      contactus: "Contact Us",
      pricing: "Pricing",
      tryFree: "Try it for free"
    },
    modal: {
      try: `Try IDEX for free`,
      totry: `To try IDEX Innovation Management Software for free, enter your details below. We will be in touch shortly with your login details. Rest assured, your data is secure with us. `,
      fullname: `Full Name`,
      workemail: `Work Email`,
      company: `Company`,
      phone: `Phone number`,
      optional: `(optional)`,
      submit: `Submit`,
      close: `Close`
    },
    footer: {
      idex: "IDEX INNOVATION",
      address1: `20th Floor, Central Tower, 28 Queen's Road Central, Central, Hong Kong`,
      address2: `2nd Floor, Fortune Building, 88 Fuhua 3rd Road, Futian CBD, Futian District, Shenzhen, Guangdong, China`,
      blog: "Blog",
      turnIdea: "Turn ideas into innovations",
      startCollecting:
        "Start collecting ideas for the next big thing in your organization now!",
      getStarted: "Get started!"
    },
    headSection: {
      moveForward: "Moving innovation forward",
      transform: "Transform ideas into ground-breaking results.",
      expIDEX: "Experience IDEX",
      video: "https://youtu.be/M3WoC6vuspw"
    },
    benefits: {
      employee: "Employee Engagement",
      engage:
        "Engage your entire workforce in ideation. Break down department, language, and geographic barriers. Empower company-wide innovation and foster a culture of ownership.",
      continuous: "Continuous Improvement",
      stakeholder:
        "Stakeholders from all sides of the business collaborate to come up with, refine, and prioritize the best ideas in one platform. Improve products, processes, and customer satisfaction.",
      high: "High Return on Investment",
      crowdsource:
        "Crowdsource ideas for your organization. Create the next big thing with people who know your business the best. Track the performance of ideas and generate billions of dollars in return. "
    },
    howworks: {
      title: "How it works",
      ideate: "Ideate & Collect",
      harness:
        "Harness the collective innovative power of your organization by allowing anyone to submit an idea, openly or anonymously. Gather all the ideas in one platform and systematically categorize them.",
      engage: "Engage & Collaborate",
      easysearch:
        "Easy search, dynamic ranking, and powerful filters for all ideas. Leverage your entire organization to vote, comment, and refine estimates. Work together to generate brilliant ideas.",
      evaluate: "Evaluate & Implement",
      prioritize:
        "Find and prioritize the best ideas to implement. Guide your innovations through the entire innovation pipeline from ideation to launch. Keep your employees updated on the status of their ideas.",
      evaluateimage: "evaluateEN"
    },
    trusty: {
      title: "Trusted by",
      identify:
        "IDEX helps us to identify ideas that deliver positive results whilst empowering our employees by showing them their ideas are being listened to and valued. This is an initiative that gets people excited.",
      beforeIDEX:
        "Before IDEX, we used email threads to exchange and manage ideas. Now our employees are able to easily submit their ideas in one platform. IDEX really helps us to increase efficiency in collecting ideas and selecting actionable ideas to implement.",
      card1Name: "Rajat Chugh",
      card1Position: "General Manager",
      card2Name: "Jason Peterson",
      card2Position: "Product Director"
    },
    resource: {
      title: "Resources",
      learn:
        "Learn more on how to successfully manage innovation at your organization.",
      by: "By",
      articles: "See all articles"
    },
    contact: {
      keepTouch: "Keep in touch",
      connect: "Connect with an innovation management specialist. ",
      name: "Name",
      company: "Company",
      workEmail: "Work email",
      message: "Message",
      submit: "Submit",
      empty_all:"Please provide your details to proceed",
      emply_email:'Please enter a valid email address',
      message_sent_successfull:"Message successfully sent. We will be in touch soon"
    },
    pricing: pricing_content.GB,

    blog: {
      blog: `Blog`,
      recent_articles: `Recent Articles`,
      read: `Read`,
      read_more: `Read More`,
      previous_articles: `Previous Articles`,
      articles: blog_GB,
      next_article: "Next Articles",
      previous: "Previous",
      by: "By"
    },
    modalForm: {
      try_free: "Try IDEX for free",
      para1:
        "To try IDEX Innovation Management Software for free,enter your details below.",
      para2:
        "We will be in touch shortly with login details.Rest assure, your data is secure with us.",
      fullName: "Full Name",
      emailAddress: "Email address",
      company: "Company",
      phoneNumber: "Phone Number",
      optional: "optional",
      submit:"Submit",
      close:"Close",
      required:"* field is required"

    }
  },
  CN: {
    title: "畅意科技 - 创新管理系统",
    header: {
      home: "首页",
      howitworks: "How It Works",
      testimonials: "Testimonials",
      blog: "资源",
      contactus: "Contact Us",
      pricing: "价格方案",
      tryFree: "免费体验"
    },
    modal: {
      try: `免费体验畅意系统`,
      totry: `填写下方表格，提交后即可免费体验畅意创新管理系统。我们将尽快与您联系为您提供登录信息。请放心，您的信息是绝对安全的。`,
      fullname: `姓名`,
      workemail: `工作邮箱`,
      company: `公司名称`,
      phone: `联系电话`,
      optional: `可选`,
      submit: `提交`,
      close: `关闭`
    },
    footer: {
      idex: "畅意科技",
      address1: `香港中环皇后大道中28号中环大厦20楼`,
      address2: `广东省深圳市福田区福华三路88号财富大厦2楼`,
      blog: "博客",
      turnIdea: "将想法转化为创新成果",
      startCollecting: "现在就开始，在企业内部收集有价值的创新想法！",
      getStarted: "即刻体验"
    },
    headSection: {
      moveForward: "助力企业创新发展",
      transform: "将创新想法转化为突破性成果",
      expIDEX: "即刻免费体验",
      video: "https://www.youtube.com/watch?v=Jb8lDt6EaxE"
    },
    benefits: {
      employee: "高参与度",
      engage:
        "让企业的全体员工参与企业创新。打破由部门，语言和地理带来的障碍。培养企业创新氛围和文化。",
      continuous: "持续提升",
      stakeholder:
        "让企业的所有利益相关者合作，共同提出，完善和选择最佳想法。提升产品，研发过程和客户满意度。",
      high: "高回报率",
      crowdsource:
        "从员工、客户等这些最了解企业的人那里收集，评估和挑选最佳想法。追踪它们的表现，实现高投资回报率。"
    },
    howworks: {
      title: "产品概览",
      ideate: "发散思维 & 收集想法",
      harness:
        "充分利用集体的创新力量，让每个员工都能提出创新想法，并选择公开提交或匿名提交。把所有创新想法都收集在一个平台上，并系统化地归类它们。",
      engage: "积极参与 & 合作创新",
      easysearch:
        "系统提供高效的搜索，实时排序和强大的筛选功能。利用整个企业的智慧来为创新想法投票，评论，并完善预估数据。全员参与，创造出绝妙的想法。",
      evaluate: "评估想法 & 高效实施",
      prioritize:
        "发掘并选择最佳想法来优先实施。从想法到最终产品上线，我们将全面协助实现企业的创新想法。员工可以随时跟进其所提出或关注的创新想法的最新进展。"
    },
    trusty: {
      title: "我们的客户",
      identify:
        "畅意创新管理系统帮助我们发掘能为企业带来积极影响的创新想法。同时，员工因为自身的想法被聆听和重视而更有动力。这是一个让企业和员工都充满动力的项目。",
      beforeIDEX:
        "在使用畅意创新系统之前，我们一直都在使用邮件交换和管理创新想法。现在我们的员工可以非常轻松地在一个平台上提交他们的想法。畅意平台确实帮我们在收集想法和选择可行的想法来实施上提高了不少效率。",
      card1Name: "拉杰特·楚",
      card1Position: "总经理",
      card2Name: "杰森·彼得森",
      card2Position: "产品总监"
    },
    resource: {
      title: "创新管理资源",
      learn: "通过我们的博客，进一步了解如何在企业内有效地管理创新。",
      by: "作者",
      articles: "查看所有博客"
    },
    contact: {
      keepTouch: "与我们联系",
      connect: "与我们的创新专家联系，获取更多创新管理资源。",
      name: "姓名",
      company: "公司名称",
      workEmail: "工作邮箱",
      message: "信息",
      submit: "提交",
      empty_all:"请提交您的信息之后再提交。",
      emply_email:'请提交有效的邮箱。',
      message_sent_successfull:"消息已成功发送，我们将尽快联系您"
    },
    pricing: pricing_content.CN,
    blog: {
      blog: `博客`,
      recent_articles: `最新博文`,
      read: `阅读`,
      read_more: `阅读更多`,
      previous_articles: `过往文章`,
      articles: blog_CN,
      next_article: "下一篇文章",
      previous: "以前",
      by: "通过"
    },
    modalForm: {
      try_free: "免费体验畅意系统",
      para1: "填写下方表格，提交后即可免费体验畅意创新管理系统。",
      para2: "我们将尽快与您联系为您提供登录信息。请放心，您的信息是绝对安全的。",
      fullName: "姓名",
      emailAddress: "工作邮箱",
      company: "公司名称",
      phoneNumber: "联系电话",
      optional: "可选",
      submit:"提交",
      close:"关闭",
      required:"*为必填项"
    }
  },
  HK: {
    title: "暢意科技 - 創新管理系統",
    header: {
      home: "首頁",
      howitworks: "How It Works",
      testimonials: "Testimonials",
      blog: "資源",
      pricing: "價格方案",
      tryFree: "免費體驗",
      contactus: "Contact Us"
    },
    modal: {
      try: `免費體驗暢意系統`,
      totry: `填寫下方表格，提交後即可免費體驗暢意創新管理系統。我們將盡快與您聯絡為您提供登入信息。請放心，您的信息是絕對安全的。`,
      fullname: `姓名`,
      workemail: `工作電郵`,
      company: `公司名稱`,
      phone: `聯絡電話`,
      optional: `可選`,
      submit: `提交`,
      close: `關閉`
    },
    footer: {
      idex: "暢意科技",
      address1: `香港中環皇后大道中28號中環大廈20樓`,
      address2: `廣東省深圳市福田區福華三路88號財富大廈2樓`,
      blog: "部落格",
      turnIdea: "將想法轉化為創新成果",
      startCollecting: "現在就開始，在企業內部收集有價值的創新想法！",
      getStarted: "即刻體驗"
    },
    headSection: {
      moveForward: "推動企業創新發展",
      transform: "將創新想法轉化為突破性成果",
      expIDEX: "即刻免費體驗",
      video: "https://www.youtube.com/watch?v=Jb8lDt6EaxE"
    },
    benefits: {
      employee: "高參與度",
      engage:
        "讓企業的全體員工參與企業創新。打破由部門，語言和地理帶來的障礙。培養企業創新氛圍和文化。",
      continuous: "持續提升",
      stakeholder:
        "讓企業的所有利益相關者合作，共同提出，完善和選擇最佳想法。提升產品，研發過程和客戶滿意度。",
      high: "高回報率",
      crowdsource:
        "從員工、客戶等這些最了解企業的人那裡收集，評估和挑選最佳想法。追踪它們的表現，實現高投資回報率。"
    },
    howworks: {
      title: "產品概覽",
      ideate: "发散思维 & 收集想法",
      harness:
        "充分利用集體的創新力量，讓每個員工都能提出創新想法，並選擇公開提交或匿名提交。把所有創新想法都收集在一個平台上，並系統化地歸類它們。",
      engage: "积极参与 & 合作创新",
      easysearch:
        "系統提供高效的檢索，實時排序和強大的篩選功能。利用整個企業的智慧來為創新想法投票，評論，並完善預估數據。全員參與，創造出絕妙的想法。",
      evaluate: "評估想法 & 高效實施",
      prioritize:
        "發掘並選擇最佳想法來優先實施。從想法到最終產品上線，我們將全面協助實現企業的創新想法。員工可以隨時跟進其所提出或關注的創新想法的最新進展。"
    },
    trusty: {
      title: "我們的客戶",
      identify:
        "暢意創新管理系統幫助我們發掘能為企業帶來積極影響的創新想法。同時，員工因為自身的想法被聆聽和重視而更有動力。這是一個讓企業和員工都充滿動力的項目。",
      beforeIDEX:
        "在使用暢意創新系統之前，我們一直都在使用電郵交換和管理創新想法。現在我們的員工可以非常輕鬆地在一個平台上提交他們的想法。暢意平台確實幫我們在收集想法和選擇可行的想法來實施上提高了不少效率。",
      card1Name: "拉傑特·楚",
      card1Position: "總經理",
      card2Name: "傑森·彼得森",
      card2Position: "產品總監"
    },
    resource: {
      title: "創新管理資源",
      learn: "通過我們的部落格，進一步了解如何在企業內有效地管理創新。",
      by: "作者",
      articles: "查看所有文章"
    },
    contact: {
      keepTouch: "與我們聯絡",
      connect: "與我們的創新專家聯繫，獲取更多創新管理資源。",
      name: "姓名",
      company: "公司名稱",
      workEmail: "工作電郵",
      message: "訊息",
      submit: "提交",
      empty_all:"請提供您的資料之後再提交。",
      emply_email:'請提交有效的電郵。',
      message_sent_successfull:"訊息已成功發送，我們將儘快聯絡您。"
    },
    pricing: pricing_content.HK,

    blog: {
      blog: `部落格`,
      recent_articles: `最新文章`,
      read: `閱讀`,
      read_more: `閱讀更多`,
      previous_articles: `過往文章`,
      articles: blog_HK,
      next_article: "下一篇文章",
      previous: "以前",
      by: "通過"
    },
    modalForm: {
      try_free: "免費體驗暢意系統",
      para1: "填寫下方表格，提交後即可免費體驗暢意創新管理系統。",
      para2: "我們將盡快與您聯絡為您提供登入信息。請放心，您的信息是絕對安全的。",
      fullName: "姓名",
      emailAddress: "工作電郵",
      company: "公司名稱",
      phoneNumber: "聯絡電話",
      optional: "可選",
      submit:"提交",
      close:"關閉",
      required:"*必填項"

    }
  }
};

if (isProduction) {
  const middleware = applyMiddleware(thunk);
  const enhancer = compose(middleware);
  store = createStore(pipelineApp, enhancer);
} else {
  const middleware = applyMiddleware(thunk);
  const enhancer = compose(middleware);
  store = createStore(pipelineApp, enhancer);
}

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translationObject));
store.dispatch(setLocale("GB"));

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
