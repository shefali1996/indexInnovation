import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore
} from 'react-redux-i18n';
import Routes from './routes';
import pipelineApp from './reducers/index';
import * as serviceWorker from './serviceWorker';

const isProduction = process.env.NODE_ENV === 'production';

let store = null;
const translationObject = {
  en: {
    title: 'IDEX - Innovation Management System',
    header: {
      home: 'Home',
      blog: 'Blog',
      pricing: 'Pricing',
      tryFree: 'Try it for free'
    },
    footer: {
      idex: 'IDEX INNOVATION',
      address1: `20th Floor, Central Tower, 28 Queen's Road Central, Central, Hong Kong`,
      address2: `2nd Floor, Fortune Building, 88 Fuhua 3rd Road, Futian CBD, Futian District, Shenzhen, Guangdong, China`,
      blog: 'Blog',
      turnIdea: 'Turn ideas into innovations',
      startCollecting: 'Start collecting ideas for the next big thing in your organization now!',
      getStarted: 'Get started!'
    },
    headSection: {
      moveForward: 'Moving innovation forward',
      transform: 'Transform ideas into ground-breaking results.',
      expIDEX: 'Experience IDEX',
    },
    benefits: {
      employee: 'Employee Engagement',
      engage: 'Engage your entire workforce in ideation. Break down department, language, and geographic barriers. Empower company-wide innovation and foster a culture of ownership.',
      continuous: 'Continuous Improvement',
      stakeholder: 'Stakeholders from all sides of the business collaborate to come up with, refine, and prioritize the best ideas in one platform. Improve products, processes, and customer satisfaction.',
      high: 'High Return on Investment',
      crowdsource: 'Crowdsource ideas for your organization. Create the next big thing with people who know your business the best. Track the performance of ideas and generate billions of dollars in return. '
    }
  },
  zh_CN: {
    title: '畅意科技 - 创新管理系统',
    header: {
      home: '首页',
      blog: '资源',
      pricing: '价格方案',
      tryFree: '免费体验'
    },
    footer: {
      idex: '畅意科技',
      address1: `香港中环皇后大道中28号中环大厦20楼`,
      address2: `广东省深圳市福田区福华三路88号财富大厦2楼`,
      blog: '博客',
      turnIdea: '将想法转化为创新成果',
      startCollecting: '现在就开始，在企业内部收集有价值的创新想法！',
      getStarted: '即刻体验'
    },
    headSection: {
      moveForward: '助力企业创新发展',
      transform: '将创新想法转化为突破性成果',
      expIDEX: '即刻免费体验',
    },
    benefits: {
      employee: '高参与度',
      engage: '让企业的全体员工参与企业创新。打破由部门，语言和地理带来的障碍。培养企业创新氛围和文化。',
      continuous: '持续提升',
      stakeholder: '让企业的所有利益相关者合作，共同提出，完善和选择最佳想法。提升产品，研发过程和客户满意度。',
      high: '高回报率',
      crowdsource: '从员工、客户等这些最了解企业的人那里收集，评估和挑选最佳想法。追踪它们的表现，实现高投资回报率。'
    }
  },
  HK: {
    title: '暢意科技 - 創新管理系統',
    header: {
      home: '首頁',
      blog: '資源',
      pricing: '價格方案',
      tryFree: '免費體驗'
    },
    footer: {
      idex: '暢意科技',
      address1: `香港中環皇后大道中28號中環大廈20樓`,
      address2: `廣東省深圳市福田區福華三路88號財富大廈2樓`,
      blog: '部落格',
      turnIdea: '將想法轉化為創新成果',
      startCollecting: '現在就開始，在企業內部收集有價值的創新想法！',
      getStarted: '即刻體驗'
    },
    headSection: {
      moveForward: '推動企業創新發展',
      transform: '將創新想法轉化為突破性成果',
      expIDEX: '即刻免費體驗',
    },
    benefits: {
      employee: '高參與度',
      engage: '讓企業的全體員工參與企業創新。打破由部門，語言和地理帶來的障礙。培養企業創新氛圍和文化。',
      continuous: '持續提升',
      stakeholder: '讓企業的所有利益相關者合作，共同提出，完善和選擇最佳想法。提升產品，研發過程和客戶滿意度。',
      high: '高回報率',
      crowdsource: '從員工、客戶等這些最了解企業的人那裡收集，評估和挑選最佳想法。追踪它們的表現，實現高投資回報率。'
    }
  }
}

if(isProduction) {
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
store.dispatch(setLocale('en'));

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
