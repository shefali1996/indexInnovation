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
import './fonts/Ubuntu/Ubuntu-Regular.ttf';

const isProduction = process.env.NODE_ENV === 'production';

let store = null;
const translationObject = {
  GB: {
    title: 'IDEX - Innovation Management System',
    header: {
      home: 'Home',
      howitworks:'How It Works',
      testimonials:'Testimonials',
      blog: 'Blog',
      contactus:'Contact Us',
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
      video:'video_english_normal_speed.mp4'
    },
    benefits: {
      employee: 'Employee Engagement',
      engage: 'Engage your entire workforce in ideation. Break down department, language, and geographic barriers. Empower company-wide innovation and foster a culture of ownership.',
      continuous: 'Continuous Improvement',
      stakeholder: 'Stakeholders from all sides of the business collaborate to come up with, refine, and prioritize the best ideas in one platform. Improve products, processes, and customer satisfaction.',
      high: 'High Return on Investment',
      crowdsource: 'Crowdsource ideas for your organization. Create the next big thing with people who know your business the best. Track the performance of ideas and generate billions of dollars in return. '
    },
    howworks: {
      title: 'How it works',
      ideate: 'Ideate & Collect',
      harness: 'Harness the collective innovative power of your organization by allowing anyone to submit an idea, openly or anonymously. Gather all the ideas in one platform and systematically categorize them.',
      engage: 'Engage & Collaborate',
      easysearch: 'Easy search, dynamic ranking, and powerful filters for all ideas. Leverage your entire organization to vote, comment, and refine estimates. Work together to generate brilliant ideas.',
      evaluate: 'Evaluate & Implement',
      prioritize: 'Find and prioritize the best ideas to implement. Guide your innovations through the entire innovation pipeline from ideation to launch. Keep your employees updated on the status of their ideas.',
      evaluateimage: 'evaluateEN'

    },
    trusty: {
      title: 'Trusted by',
      identify: 'IDEX helps us to identify ideas that deliver positive results whilst empowering our employees by showing them their ideas are being listened to and valued. This is an initiative that gets people excited.',
      beforeIDEX: 'Before IDEX, we used email threads to exchange and manage ideas. Now our employees are able to easily submit their ideas in one platform. IDEX really helps us to increase efficiency in collecting ideas and selecting actionable ideas to implement.'
    },
    resource: {
      title: 'Resources',
      learn: 'Learn more on how to successfully manage innovation at your organization.',
      by: 'By',
      articles: 'See all articles'
    },
    contact: {
      keepTouch: 'Keep in touch',
      connect: 'Connect with an innovation management specialist. ',
      name: 'Name',
      company: 'Company',
      workEmail: 'Work email',
      message: 'Message',
      submit: 'Submit',
    },
    pricing:{
      plans_pricing:`Plans & Pricing`,
      choose_plan:`Choose the plan that best suits your needs. Don’t know which one to choose? Contact us.`,
      starter:`Starter`,
      usd:`USD`,
      99:`99`,
      499:`499`,
      999:`999`,
      month:`Month`,
      professional:`Professional`,
      business:`Business`,
      enterprise:`Enterprise`,
      for_pricing_custom:`For pricing and custom`,
      for_custom:`For pricing and custom features `,
      unlimited_members:`Unlimited members`,
      upto_xxx:`Up to XXX ideas`,
      xx_teams:`XX team(s)`,
      your_own_workspace:`Your own workspace for innovation`,
      collect_analyse:`Collect, analyze, and manage ideas`,
      performance_analytics:`Performance analytics on innovation and people`,
      advanced_audience:`Advanced audience segmentation`,
      custom_branding:`Customization according to your own branding`,
      single_sign_on:`Single-Sign-On`,
      dedicated_manager:`A dedicated innovation success manager`,
      sla_tech:`99.99% uptime SLA and technical support`,
      try_for_free:`Try it for free`,
      contact_us:`contact us`,
      faq:`Frequently Asked Questions`,
      can_i_cancel:`Can I cancel my subscription?`,
      our_goal:`Our goal is to make you happy. You can cancel at any time and won't be billed for subsequent months. `,
      payment_options:`What are my payment options?`,
      payments_made_via:`All payments are made via bank transfer. We will issue you invoices for payment. `,
      data_protection:`How is my data protected? `,
      serious_secutiry:`We take security very seriously. Your contact info, ideas and data are yours and yours alone. All data is encrypted using transport layer security. All ideas and content that you create and upload to the platform is only available to authenticated users. `,
      more_ides:`What happens if we collect more ideas than limited in the plan?`,
      dont_worry:`Don’t worry, we’ll let you know before you hit a limit so you can plan ahead. We facilitate Pay As You Grow - add 100 ideas for $99/month anytime.`,
      stay_in_touch:`Stay in touch if you have more questions`,
    },
    blog:{
      blog:`Blog`,
      recent_articles:`Recent Articles`,
      read:`Read`,
      read_more:`Read More`,
      previous_articles:`Previous Articles`,
      articles:{"1":{"title":"Innovation Management Essential - Series 1: Definition, Key Aspects, and Approaches","content":"<p>Innovation has been a top priority for the majority of leaders, both at company level and government level. However, deciding which approach will deliver the best ROI in innovation endeavor is not always easy. That is where innovation management comes into play. It takes innovation from a creative-thinking exclusive activity to a logically managed and measurable process. It leverages the collective intelligence of all to identify, curate, and implement the best ideas.<\/p>\r\n\r\n<p>In this article, we are going to examine the concept of innovation management, the key aspects of innovation management, and its methodologies and approaches.&nbsp;<\/p>\r\n\r\n<p>&nbsp;<\/p>\r\n\r\n<h2><strong>So, first things first, what Is Innovation Management?&nbsp;<\/strong><\/h2>\r\n\r\n<p>The concept of innovation management was first formulated by Austrian economist Joseph Schumpeter in his book<em> Capitalism, Socialism and Democracy<\/em> first published in 1943, in which he developed the term &ldquo;creative destruction&rdquo;, referring to industrial forces revolutionizing economic structured from within. Since then, several scholars, thinkers, and entrepreneurs have further developed the theory of innovation management.&nbsp;<\/p>\r\n\r\n<p>In this article, we are going to adopt the definition by <a href=\"https:\/\/www.gartner.com\/it-glossary\/innovation-management\/\">Gartner<\/a>, an IT research and consultancy company, innovation management is a <a href=\"https:\/\/searchcio.techtarget.com\/definition\/business-innovation\">business<\/a> discipline that aims to drive a sustainable innovation process or culture within an organization.&nbsp;<\/p>\r\n\r\n<p>By simply looking at the definition, innovation management is the systematic process of coming up and developing new things, be it a product, workflow, business model, or system and the fostering of innovation culture.&nbsp;<\/p>\r\n\r\n<p>&nbsp;<\/p>\r\n\r\n<h2><strong>The key aspects of innovation management<\/strong><\/h2>\r\n\r\n<p>While there are various aspects involved in innovation management, they usually include management of the following areas:<\/p>\r\n\r\n<p><strong>Ideation<\/strong>: Making sure ideas from internal or external stakeholders are collected, refined, and implemented efficiently.<\/p>\r\n\r\n<p><strong>Resources<\/strong>: Ensuring that capabilities and materials are at disposal for bringing about innovative changes &ndash; including but not limited to funding, human capital, time, and information.<\/p>\r\n\r\n<p><strong>Structures<\/strong>: Structures enable the effective use of the resources. In practice, this means improving the organizational structure, processes, and infrastructure to optimize innovation.&nbsp;<\/p>\r\n\r\n<p><strong>Strategy<\/strong>: Harnessing resources and ideas to reach innovation goals incrementally or disruptively. Ultimately, innovation is simply one of the means - arguably the most important one, to achieving your strategic goals.&nbsp;<\/p>\r\n\r\n<p><strong>Culture<\/strong>: Creating a pro-innovation culture where new ideas are encouraged, and stakeholders are incentivised to share and comment on insights. It also enables the organization to acquire the best people to achieve its innovation goals, and ultimately, its success.&nbsp;<\/p>\r\n\r\n<p>Innovation management always entails establishing a process by which a company can continuously and effectively promote innovative activity. To be effective at managing innovation, it is essential to be able to understand both the big picture, as well as the individual components that make it up.<\/p>\r\n\r\n<p>&nbsp;<\/p>\r\n\r\n<h2><strong>The methodologies &amp; approaches of innovation management<\/strong><\/h2>\r\n\r\n<p>Innovation management is complicated, it helps to look at some of the more widely accepted theories and approaches to choose one that fits best to your organization.&nbsp;<\/p>\r\n\r\n<h3><strong>The types of innovation<\/strong><\/h3>\r\n\r\n<p>The two broad methodology categories that innovation management typically falls into are &lsquo;incremental&rsquo; and &lsquo;disruptive&rsquo;. While the former involves making consistent improvements to existing products, services, or work processes, the latter involves introducing bolder changes which carry more risk but the possibility of large-scale returns.<\/p>\r\n\r\n<p>Greg Satell, writer and innovation adviser developed a system called &ldquo;The Innovation Matrix&rdquo;, mapping out the four different types of innovation: basic research, sustaining innovation, disruptive innovation, and breakthrough innovation depending on how well the domain and the problem are defined.&nbsp;&nbsp;<\/p>\r\n\r\n<p>We are going to combine both, and categorize innovation into 4 different types: incremental &amp; sustaining, incremental &amp; disruptive, radical &amp; sustaining, and radical &amp; disruptive innovations.<\/p>\r\n\r\n<p><img src=\"https:\/\/lh6.googleusercontent.com\/gEQhnVN0zi7E8UBo73AGBmvYRDlFlu9LelaG6Ie2k3IMqENbKTfqLFdyUuZSWrn92NH0FxWzhGzsZWoGOaKqQbJ3V0-HV1mc55rF684iFGAR2l5YdcpfrXaKaMBOYkEnT7khHDEV\" style=\"height:379px; width:624px\" \/><\/p>\r\n\r\n<p>&nbsp;<\/p>\r\n\r\n<h3><strong>The approaches to innovation management<\/strong><\/h3>\r\n\r\n<p>In her famous blog &ldquo;Future of CIO&rdquo;, Pearl Zhu, author and innovation expert summarizes the three management approaches to improve the innovation management success rate in the digital era: an emergent approach, an iterative approach, and an integrative approach. We will combine her insight with our research and experience working with organizations to propose the following three approaches:<\/p>\r\n\r\n<p><strong>The proactive approach<\/strong>: Proactive innovation management and continuous adaptability are essential in today&rsquo;s rapidly changing world. Managing, changes and innovations should not wait until there is an immediate pressing task.<\/p>\r\n\r\n<p><strong>The integrative approach:<\/strong> It focuses on how innovation can be best accommodated within an organization&rsquo;s existing structure to create value, and to ensure future growth.&nbsp;<\/p>\r\n\r\n<p><strong>The customer-centric approach<\/strong>: To make sure an innovation will have a positive impact on customers, partners, suppliers, and other stakeholders, the best way is to seek out input from all of them in your innovation endeavors.&nbsp;<\/p>\r\n\r\n<p>There is no size one size fit all success approach for innovation management. It is important for an organization to choose an approach or a mix of different approaches that best address their business. You can also choose different approaches to address different aspects of the business to innovation is managed in the most systematic and efficient way.&nbsp;<\/p>\r\n\r\n<p>&nbsp;<\/p>\r\n\r\n<p>In the next article of the same series, we will continue introducing the common models of innovation management.<\/p>\r\n\r\n<p>1. Schumpeter, J. (2003). <em>Capitalism, Socialism and Democracy<\/em>. Taylor &amp; Francis e-Library.<br \/>\r\n2.&nbsp;Gartner. Retrieved 7 July 2019, from <a href=\"https:\/\/www.gartner.com\/it-glossary\/innovation-management\/\">https:\/\/www.gartner.com\/it-glossary\/innovation-management\/<\/a><br \/>\r\n3. Satell, G. (2017). <em>Mapping Innovation: A Playbook for Navigating a Disruptive Age<\/em>. McGraw-Hill Education.<br \/>\r\n4. Pearl Zhu. (2017). <em>Three Innovation Management Approaches<\/em>. Retrieved 8 July 2019, from <a href=\"http:\/\/futureofcio.blogspot.com\/2017\/05\/three-innovation-management-approaches.html\">http:\/\/futureofcio.blogspot.com\/2017\/05\/three-innovation-management-approaches.html<\/a><\/p>\r\n"},"2":{"title":"Innovation Management Essentials - Serial 2: Common Models of Innovation Management","content":"<p>In the last blog post of the same series, we went through the definition of innovation management, the key aspects of it, and its methodologies and approaches. In this following series, before going through the common models of innovation management, let us take a look at what successful innovation management actually look like.&nbsp;<\/p>\r\n\r\n<p>&nbsp;<\/p>\r\n\r\n<h2><strong>What does successful innovation management look like?<\/strong><\/h2>\r\n\r\n<p>There is no simple answer to this question, as it is always dependent on the unique situation of each organization. However, the most innovative companies are normally the ones where the 5 aspects of innovation management - ideation, resources, structures, strategy, and culture aligned with each other.&nbsp;<\/p>\r\n\r\n<p>From our research, organizations that are considered to be the most innovative, creating disruptive products or technologies all the time tend to have these common characteristics:<\/p>\r\n\r\n<ul>\r\n\t<li>Have a unique, clearly defined, and relevant strategy that everyone at the organization understands;<\/li>\r\n\t<li>Accept that failure is always a possibility and are not afraid of it;<\/li>\r\n\t<li>Structure a repeatable and sustainable innovation process;<\/li>\r\n\t<li>Trust, encourage, and reward talents;<\/li>\r\n\t<li>Organize around small teams;<\/li>\r\n\t<li>Have cross-functional teams with autonomy;<\/li>\r\n\t<li>Have the resources and structures in place for making sure things happen.<\/li>\r\n<\/ul>\r\n\r\n<p>&nbsp;<\/p>\r\n\r\n<h2><strong>Common models of innovation management<\/strong><\/h2>\r\n\r\n<p>Innovation management is complicated. To achieve the best possible results in doing it, and to be successful at innovation management, there are some common models organizations could choose from according to their needs.<\/p>\r\n\r\n<p>The most common processes for innovation management:<\/p>\r\n\r\n<ul>\r\n\t<li>Technology Push vs. Market Pull<\/li>\r\n\t<li>Phase-Gate Process<\/li>\r\n\t<li>Lean Startup Model<\/li>\r\n<\/ul>\r\n\r\n<p>&nbsp;<\/p>\r\n\r\n<h3><strong>Technology Push vs. Market Pull<\/strong><\/h3>\r\n\r\n<p>The push-based model is a more internally and technologically driven approach, whereas pull-based model is more customer and market-oriented approach for managing innovation. In other words, technology push model is the one where products and processes at the core of innovation, usually driven by internal or external R&amp;D activities, whereas market pull model is driven by and designed to meet the market demand.<\/p>\r\n\r\n<p>Push-oriented organizations usually focus on searching for the best ways to address the challenges and the users, usually with new technology. Pull-oriented organizations, in contrast, are looking for ways to adapt to changing markets and customer demand, and usually focus on listening to customers, learning from them and moving fast in their innovation work.<\/p>\r\n\r\n<p>While push-oriented organizations are usually traditional and established ones, and pull-oriented ones are operating at an early stage, such as startups, they could usually intertwine. For example, some startups are building technology to solve problems using the push-based model, while some large organizations are taking radical initiatives within the organization.&nbsp;<\/p>\r\n\r\n<p>There is no better or worse here - they are simply aiming for addressing different challenges. The question to ask is which one of the approaches fit your organization or your need before you choose.<\/p>\r\n\r\n<p>&nbsp;<\/p>\r\n\r\n<h3><strong>The Phase-Gate Process<\/strong><\/h3>\r\n\r\n<p>The phase-gate process (also referred to as a stage-gate process or waterfall process) is probably the most well-known model in developing a new project, product, process, or business initiative. It has been around since the 1940s, and was further refined by Robert Cooper in the 1980s.&nbsp;<\/p>\r\n\r\n<p>The process separates the idea development process into five main phases. Between phases, a gate is used to determine whether the development should move to the next phase or an iteration should be applied in the current phase before moving to the next one. It is mainly used to reduce project uncertainty and cycle time.&nbsp;<\/p>\r\n\r\n<p><img src=\"https:\/\/lh5.googleusercontent.com\/mG9N0EQBWYEN4Gov8rYe84Q9-NK2T9lLw-b1Rzao5HGzUmwNFYM_V-PUoMY3r8ksd2hfBJIQhAiGRNNaY6C2rNSzCGLnKaOEO72NBnAqb8cIoQjHl1woYziT_z9wPCs9_7dP4euc\" style=\"height:201px; width:624px\" \/><\/p>\r\n\r\n<p>The phase-gate process guides idea development through five phases from ideation to launch as follows:<\/p>\r\n\r\n<p><strong>Phase 0: ideation<\/strong><\/p>\r\n\r\n<p>In this phase, organizations tend to discover opportunities through brainstorming and market research among all its stakeholders, including employees, customers, partners, suppliers, etc.<\/p>\r\n\r\n<p><strong>Phase 1: scoping<\/strong><\/p>\r\n\r\n<p>The main goal in this phase is to evaluate the idea and its market. The strengths and weaknesses of the idea, competition, and customer demand should all be evaluated to determine if the idea is going to move forward.&nbsp;<\/p>\r\n\r\n<p><strong>Phase 2: building business case<\/strong><\/p>\r\n\r\n<p>This is the last phase of concept development and is crucial before starting with the development of the actual product. There are four main steps to conclude this phase:&nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li><strong>Product definition and analysis<\/strong>: This step provides information to define and justify the development of a new idea;<\/li>\r\n\t<li><strong>Building the business case<\/strong>: This step provides documents that define the idea;&nbsp;<\/li>\r\n\t<li><strong>Building the project plan<\/strong>: This is a list of all tasks that are planned during the entire development process, and the resources it takes to carry them out;&nbsp;<\/li>\r\n\t<li><strong>Feasibility review<\/strong>: This step analyzes the information provided to decide whether or not the product should move forward.&nbsp;<\/li>\r\n<\/ul>\r\n\r\n<p><strong>Phase 3: development<\/strong><\/p>\r\n\r\n<p>The ultimate deliverable of the development phase is the prototype, which will undergo extensive testing and evaluation in the next phase of the process. The product&#39;s marketing and production plans are also developed.<\/p>\r\n\r\n<p><strong>Phase 4: testing and validation<\/strong><\/p>\r\n\r\n<p>The testing includes team testing for problems and issues in the product. Then, it goes for the field test, which includes consumer testing for the product in a beta version and a marketing test to identify market feasibility for the product.<\/p>\r\n\r\n<p><strong>Phase 5: launch<\/strong><\/p>\r\n\r\n<p>The product is introduced to the market based on a pre-defined marketing strategy. In this phase, the marketing and sales team play essential roles in creating the market need and increasing exposure for the product.<\/p>\r\n\r\n<p>The advantages of the phase-gate process is that it ensures consistency among your ideas and guarantees that each innovation matches the general standards. It also helps reduce complexity for large projects, making the decision-making process smoother. One problem with the process is it would potentially interfere with creativity and innovation, as overly structured processes may cause hinder the largely iterative process of innovation.<\/p>\r\n\r\n<p>&nbsp;<\/p>\r\n\r\n<h3><strong>The Lean Startup Model<\/strong><\/h3>\r\n\r\n<p>The lean startup model is proposed by Eric Ries in his book of the same name. It is a methodology for product and business development. Although it usually is not considered as an innovation management process, it is designed with the same goal as the pull-oriented innovation management approach to address market risk and customer demand fast to find the product market fit as soon as possible.&nbsp;<\/p>\r\n\r\n<p>The main idea of the lean startup model is to rapidly test and validate the assumptions related to the product market fit between your idea or innovation and your target market in order to learn and adapt as fast as possible.<\/p>\r\n\r\n<p><strong>Build-measure-learn<\/strong> is the main component of the lean startup model. It is a framework for establishing and continuously improving new ideas, products, and services quickly and cost-effectively.<\/p>\r\n\r\n<p>Building <strong>Minimum Viable Product (MVP) <\/strong>is another main concept in this model. The idea is, instead of taking a lot of time and resources to build a product that nobody knows if there is a market fit, build the most version of it to test the water.&nbsp;<\/p>\r\n\r\n<p>The lean startup model is a faster way to learn what works. Organizations are able to increase the speed of development and reduce development costs, thus lowering the overall risk of innovation.<\/p>\r\n\r\n<p>&nbsp;<\/p>\r\n\r\n<h2><strong>What is the right model for your organization?<\/strong><\/h2>\r\n\r\n<p>To figure out the right innovation management model for your organization can be challenging, as innovation is higher unpredictable and the only way to see if something works for you is to actually try it out. We do, however, have some tips to help you figure out it.<\/p>\r\n\r\n<p>1. Analyse your current situation.&nbsp;<\/p>\r\n\r\n<p>2. Educate yourself on all the models.&nbsp;<\/p>\r\n\r\n<p>3. Start simple.<\/p>\r\n\r\n<p>4. Keep testing until you find the right fit.<\/p>\r\n\r\n<p>And keep in mind that there is no right or wrong, better or worse, there is only fit or not fit. And if you are working in a larger organization, you will almost inevitably need more than one model for different types of innovations in different parts of the organization.<\/p>\r\n\r\n<p>&nbsp;<\/p>\r\n\r\n<p>In the next article of the series, we will take a look at key innovation metrics to drive innovation. Stay tuned!<\/p>\r\n\r\n<p>1. Brem, A. (2008). <em>The Boundaries of Innovation and Entrepreneurship: Conceptual Background and Essays on Selected Theoretical and Empirical Aspects<\/em>. Gabler.<br \/>\r\n2.&nbsp;Cooper, R. (1986). <em>Winning at New Products<\/em>. Addison-Wesley.<br \/>\r\n3.&nbsp;Ries, E. (2011). <em>The Lean Startup<\/em>. Crown Publishing Group.<\/p>\r\n\r\n<p>&nbsp;<\/p>\r\n"},"3":{"title":"Innovation Management Essentials: Series 3 - Innovation Metrics","content":"<p>In the previous articles of the same series, we have gone through the fundamentals of innovation management, where we learnt its definition, key aspects, approaches, and common models. In this one, we will discuss more on the key innovation metrics to measure and how to get the most of it.<\/p>\r\n\r\n<p>&nbsp;<\/p>\r\n\r\n<p>Metrics are important levers of innovation &ndash; for driving behavior, evaluating the results of specific initiatives, as well as guiding you in allocating resources. However, due to the abstract and somewhat uncertain nature of innovation, finding the right metrics to measure innovation can be tricky. It is easy to pick some metrics that are simple, without thinking whether they are the important ones that will actually be useful to your business.&nbsp;<\/p>\r\n\r\n<p>The most important thing in measuring innovation is to ensure that you are going in the right direction. To set the correct metrics, you should measure not only in the traditional ways, i.e. measuring return on investment, but also see if the organization, leadership, and resources are in line with your business goals.&nbsp;<\/p>\r\n\r\n<p>&nbsp;<\/p>\r\n\r\n<h2><strong>Input vs. output metrics<\/strong><\/h2>\r\n\r\n<p>To put it simply, the input and output metrics are used to measure what goes into your innovation process and what comes out of it. The input metrics are to measure if you are taking the right initiatives and if you are allocating your resources properly, whereas the output metrics are to measure the results they bring and if they are the desired results.&nbsp;<\/p>\r\n\r\n<p>Input metrics are a great starting point for measuring innovation in the early stage because they are straightforward and tangible. It is, however, important to have in mind that input does not guarantee output.&nbsp;<\/p>\r\n\r\n<p>&nbsp;<\/p>\r\n\r\n<h2><strong>Key types of innovation metrics<\/strong><\/h2>\r\n\r\n<p>Broadly speaking, there are three types of metrics when it comes to measuring innovation - return on investment metrics, capability &amp; structure metrics, and leadership metrics. We will briefly introduce each type of them and some examples in regards to what exactly to measure.&nbsp;<\/p>\r\n\r\n<h3><strong>Return on investment metrics<\/strong><\/h3>\r\n\r\n<p>ROI metrics are the most straightforward metrics of all, they focus on measuring resource investments and financial returns.&nbsp;<\/p>\r\n\r\n<p>&nbsp;<\/p>\r\n\r\n<table cellspacing=\"0\" style=\"border-collapse:collapse; width:624px\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td style=\"vertical-align:top\">\r\n\t\t\t<p><strong>Input metrics<\/strong><\/p>\r\n\t\t\t<\/td>\r\n\t\t\t<td style=\"vertical-align:top\">\r\n\t\t\t<p><strong>Output metrics<\/strong><\/p>\r\n\t\t\t<\/td>\r\n\t\t<\/tr>\r\n\t\t<tr>\r\n\t\t\t<td style=\"vertical-align:top\">\r\n\t\t\t<p>No. of ideas submitted<\/p>\r\n\t\t\t<\/td>\r\n\t\t\t<td style=\"vertical-align:top\">\r\n\t\t\t<p>No. of new products, services, and businesses launched<\/p>\r\n\t\t\t<\/td>\r\n\t\t<\/tr>\r\n\t\t<tr>\r\n\t\t\t<td style=\"vertical-align:top\">\r\n\t\t\t<p>No. of campaign \/ challenge launched and no. of ideas submitted for each of them<\/p>\r\n\t\t\t<\/td>\r\n\t\t\t<td style=\"vertical-align:top\">\r\n\t\t\t<p>Revenue \/ profit gained from the new launches<\/p>\r\n\t\t\t<\/td>\r\n\t\t<\/tr>\r\n\t\t<tr>\r\n\t\t\t<td style=\"vertical-align:top\">\r\n\t\t\t<p>Money spent on implementing the ideas<\/p>\r\n\t\t\t<\/td>\r\n\t\t\t<td style=\"vertical-align:top\">\r\n\t\t\t<p>No. of the new market entered<\/p>\r\n\t\t\t<\/td>\r\n\t\t<\/tr>\r\n\t\t<tr>\r\n\t\t\t<td style=\"vertical-align:top\">\r\n\t\t\t<p>Time spent on developing and implementing the ideas<\/p>\r\n\t\t\t<\/td>\r\n\t\t\t<td style=\"vertical-align:top\">\r\n\t\t\t<p>% of the market share<\/p>\r\n\t\t\t<\/td>\r\n\t\t<\/tr>\r\n\t\t<tr>\r\n\t\t\t<td style=\"vertical-align:top\">&nbsp;<\/td>\r\n\t\t\t<td style=\"vertical-align:top\">\r\n\t\t\t<p>% of ideas implemented vs ideas submitted<\/p>\r\n\t\t\t<\/td>\r\n\t\t<\/tr>\r\n\t<\/tbody>\r\n<\/table>\r\n\r\n<p>&nbsp;<\/p>\r\n\r\n<h3><strong>Capability, culture &amp; structure metrics<\/strong><\/h3>\r\n\r\n<p>Capability and structure metrics refer to the infrastructure and process an organization has to facilitate innovation. And culture metrics refer to if the culture of an organization is pro-innovation and can draw innovative talents. They focus on measuring the abilities and skills of people, as well as the organizational structure and process.<\/p>\r\n\r\n<table cellspacing=\"0\" style=\"border-collapse:collapse; width:624px\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td style=\"vertical-align:top\">\r\n\t\t\t<p><strong>Input metrics<\/strong><\/p>\r\n\t\t\t<\/td>\r\n\t\t\t<td style=\"vertical-align:top\">\r\n\t\t\t<p><strong>Output metrics<\/strong><\/p>\r\n\t\t\t<\/td>\r\n\t\t<\/tr>\r\n\t\t<tr>\r\n\t\t\t<td style=\"vertical-align:top\">\r\n\t\t\t<p>No. of employees who have received training and tools for innovation&nbsp;<\/p>\r\n\t\t\t<\/td>\r\n\t\t\t<td style=\"vertical-align:top\">\r\n\t\t\t<p>No. of innovations that significantly advance existing businesses<\/p>\r\n\t\t\t<\/td>\r\n\t\t<\/tr>\r\n\t\t<tr>\r\n\t\t\t<td style=\"vertical-align:top\">\r\n\t\t\t<p>Existence of formal structures &amp; processes that support innovation, e.g. an innovation management solution<\/p>\r\n\t\t\t<\/td>\r\n\t\t\t<td style=\"vertical-align:top\">\r\n\t\t\t<p>No. of new opportunities in new markets<\/p>\r\n\t\t\t<\/td>\r\n\t\t<\/tr>\r\n\t\t<tr>\r\n\t\t\t<td style=\"vertical-align:top\">\r\n\t\t\t<p>Resources spent on innovation program<\/p>\r\n\t\t\t<\/td>\r\n\t\t\t<td style=\"vertical-align:top\">&nbsp;<\/td>\r\n\t\t<\/tr>\r\n\t<\/tbody>\r\n<\/table>\r\n\r\n<p>&nbsp;<\/p>\r\n\r\n<h3><strong>Leadership metrics<\/strong><\/h3>\r\n\r\n<p>Leadership metrics measure if and how the management level supports innovation and is making an effort to boost an innovative culture, as well as if it supports specific initiatives.&nbsp;&nbsp;&nbsp;<\/p>\r\n\r\n<table cellspacing=\"0\" style=\"border-collapse:collapse; width:624px\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td style=\"vertical-align:top\">\r\n\t\t\t<p><strong>Input metrics<\/strong><\/p>\r\n\t\t\t<\/td>\r\n\t\t\t<td style=\"vertical-align:top\">\r\n\t\t\t<p><strong>Output metrics<\/strong><\/p>\r\n\t\t\t<\/td>\r\n\t\t<\/tr>\r\n\t\t<tr>\r\n\t\t\t<td style=\"vertical-align:top\">\r\n\t\t\t<p>% of time that executives spent on managing innovation&nbsp;<\/p>\r\n\t\t\t<\/td>\r\n\t\t\t<td style=\"vertical-align:top\">\r\n\t\t\t<p>No. of managers or team leaders that become leaders of new business initiatives<\/p>\r\n\t\t\t<\/td>\r\n\t\t<\/tr>\r\n\t\t<tr>\r\n\t\t\t<td style=\"vertical-align:top\">\r\n\t\t\t<p>No. of managers with innovation related training&nbsp;<\/p>\r\n\t\t\t<\/td>\r\n\t\t\t<td style=\"vertical-align:top\">&nbsp;<\/td>\r\n\t\t<\/tr>\r\n\t<\/tbody>\r\n<\/table>\r\n\r\n<p>&nbsp;<\/p>\r\n\r\n<h2><strong>Creating effective use of innovation metrics to drive innovation&nbsp;<\/strong><\/h2>\r\n\r\n<p>When it comes to measuring innovation, it is important to understand what, when, and how to measure the metrics to get the best possible result. Creating innovation metrics to drive innovation requires one to start with aligned organization strategy and cascade throughout each business division and group. It involves continuous planning, monitoring, and learning &amp; improving.&nbsp;<\/p>\r\n\r\n<p><strong>Planning:<\/strong> Involving key stakeholders in identifying the key metrics to insure they are clear and align with the organization&rsquo;s business strategy.<\/p>\r\n\r\n<p><strong>Monitoring:<\/strong> Tracking metrics against business goals to determine the progress and make necessary adjustments.<\/p>\r\n\r\n<p><strong>Learning &amp; improving: <\/strong>A process where an organization reviews its metrics and progress, engaging its key stakeholders in improving its use of current metrics, identifying new metrics, and achieving business objectives.&nbsp;<\/p>\r\n\r\n<p>Here are a few tips to create goal-driven innovation metrics:<\/p>\r\n\r\n<ol>\r\n\t<li>Clarify organization business objectives<\/li>\r\n\t<li>Define actionable innovation goals&nbsp;<\/li>\r\n\t<li>Identify innovation-related leadership behaviors<\/li>\r\n\t<li>Identify organizational processes required to drive incremental and disruptive innovation<\/li>\r\n\t<li>Create metrics that support the innovation strategy of the company<\/li>\r\n\t<li>Review and improve strategies and metrics on an ongoing basis<\/li>\r\n\t<li>Do not force the same metrics on every process or everyone<\/li>\r\n<\/ol>\r\n\r\n<p>&nbsp;<\/p>\r\n\r\n<p>While it can be rather difficult to choose what to measure, measuring innovation is not rocket science. It is critical to engage key stakeholders in every process and make sure the metrics are not overwhelmed but are aligned with the business strategy and objectives. And one should also keep in mind that metrics should not be standing alone but rather a part of an organization&rsquo;s growth plan.<\/p>\r\n\r\n<p>&nbsp;<\/p>\r\n"}}
    }
  },
  CN: {
    title: '畅意科技 - 创新管理系统',
    header: {
      home: '首页',
      howitworks:'How It Works',
      testimonials:'Testimonials',
      blog: '资源',
      contactus:'Contact Us',
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
      video:'video_chinese_normal_speed.mp4'
    },
    benefits: {
      employee: '高参与度',
      engage: '让企业的全体员工参与企业创新。打破由部门，语言和地理带来的障碍。培养企业创新氛围和文化。',
      continuous: '持续提升',
      stakeholder: '让企业的所有利益相关者合作，共同提出，完善和选择最佳想法。提升产品，研发过程和客户满意度。',
      high: '高回报率',
      crowdsource: '从员工、客户等这些最了解企业的人那里收集，评估和挑选最佳想法。追踪它们的表现，实现高投资回报率。'
    },
    howworks: {
      title: '产品概览',
      ideate: '发散思维 & 收集想法',
      harness: '充分利用集体的创新力量，让每个员工都能提出创新想法，并选择公开提交或匿名提交。把所有创新想法都收集在一个平台上，并系统化地归类它们。',
      engage: '积极参与 & 合作创新',
      easysearch: '系统提供高效的搜索，实时排序和强大的筛选功能。利用整个企业的智慧来为创新想法投票，评论，并完善预估数据。全员参与，创造出绝妙的想法。',
      evaluate: '评估想法 & 高效实施',
      prioritize: '发掘并选择最佳想法来优先实施。从想法到最终产品上线，我们将全面协助实现企业的创新想法。员工可以随时跟进其所提出或关注的创新想法的最新进展。'
    },
    trusty: {
      title: '我们的客户',
      identify: '畅意创新管理系统帮助我们发掘能为企业带来积极影响的创新想法。同时，员工因为自身的想法被聆听和重视而更有动力。这是一个让企业和员工都充满动力的项目。',
      beforeIDEX: '在使用畅意创新系统之前，我们一直都在使用邮件交换和管理创新想法。现在我们的员工可以非常轻松地在一个平台上提交他们的想法。畅意平台确实帮我们在收集想法和选择可行的想法来实施上提高了不少效率。'
    },
    resource: {
      title: '创新管理资源',
      learn: '通过我们的博客，进一步了解如何在企业内有效地管理创新。',
      by: '作者',
      articles: '查看所有博客'
    },
    contact: {
      keepTouch: '与我们联系',
      connect: '与我们的创新专家联系，获取更多创新管理资源。',
      name: '姓名',
      company: '公司名称',
      workEmail: '工作邮箱',
      message: '信息',
      submit: '提交',
    },
    pricing:{
      plans_pricing:`价格方案`,
      choose_plan:`选择最适合企业需求的方案。如果您不知道该选择哪一个方案，请随时联系我们。`,
      starter:`基础版`,
      usd:`元`,
      99:`699`,
      499:`3499`,
      999:`6999`,
      month:`每月`,
      professional:`专业版`,
      business:`商业版`,
      enterprise:`企业版`,
      for_pricing_custom:`联系我们获取报价和定制化功能`,
      for_custom:`联系我们获取报价和定制化功能`,
      unlimited_members:`无限用户`,
      upto_xxx:`最多XX个创新想法`,
      xx_teams:`XX个团队`,
      your_own_workspace:`企业独有的创新空间`,
      collect_analyse:`收集，分析和整理创新想法`,
      performance_analytics:`企业创新和员工创新数据分析`,
      advanced_audience:`先进的团队划分`,
      custom_branding:`根据企业的品牌形象定制`,
      single_sign_on:`单点登录（SSO）`,
      dedicated_manager:`专有创新成功专家支持`,
      sla_tech:`99.99%的可用时间保证和技术支持`,
      try_for_free:`免费试用`,
      contact_us:`联系我们`,
      faq:`常见问题`,
      can_i_cancel:`能否随时取消订阅？`,
      our_goal:`我们的目标是让您满意。您可以随时取消订阅，我们将从下月起取消对您的收费。`,
      payment_options:`付款方式有哪些？`,
      payments_made_via:`付款是通过银行转账进行，我们将每月为您开具发票。`,
      data_protection:`你们怎样保护数据安全？`,
      serious_secutiry:`我们非常重视数据安全。您的联系方式，创新想法和数据都是您自己的。您在我们平台上创建的所有创新想法和提交的所有内容都只对经过验证的用户开放。所有数据都通过传输层安全性协定进行加密。`,
      more_ides:`如果我们提交的创新想法数超过价格方案中的数量怎么办？`,
      dont_worry:`不用担心，我们将在您达到限额前通知您。我们支持即用即付 - 您可以随时付额外的699元以增加100个创新想法。`,
      stay_in_touch:`如果您还有其他问题，请随时与我们联系`,
    },
    blog:{
      blog:`博客`,
      recent_articles:`最新博文`,
      read:`阅读`,
      read_more:`阅读更多`,
      previous_articles:`过往文章`
    }
  },
  HK: {
    title: '暢意科技 - 創新管理系統',
    header: {
      home: '首頁',
      howitworks:'How It Works',
      testimonials:'Testimonials',
      blog: '資源',
      pricing: '價格方案',
      tryFree: '免費體驗',
      contactus:'Contact Us',
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
      video:'video_chinese_normal_speed.mp4'
    },
    benefits: {
      employee: '高參與度',
      engage: '讓企業的全體員工參與企業創新。打破由部門，語言和地理帶來的障礙。培養企業創新氛圍和文化。',
      continuous: '持續提升',
      stakeholder: '讓企業的所有利益相關者合作，共同提出，完善和選擇最佳想法。提升產品，研發過程和客戶滿意度。',
      high: '高回報率',
      crowdsource: '從員工、客戶等這些最了解企業的人那裡收集，評估和挑選最佳想法。追踪它們的表現，實現高投資回報率。'
    },
    howworks: {
      title: '產品概覽',
      ideate: '发散思维 & 收集想法',
      harness: '充分利用集體的創新力量，讓每個員工都能提出創新想法，並選擇公開提交或匿名提交。把所有創新想法都收集在一個平台上，並系統化地歸類它們。',
      engage: '积极参与 & 合作创新',
      easysearch: '系統提供高效的檢索，實時排序和強大的篩選功能。利用整個企業的智慧來為創新想法投票，評論，並完善預估數據。全員參與，創造出絕妙的想法。',
      evaluate: '評估想法 & 高效實施',
      prioritize: '發掘並選擇最佳想法來優先實施。從想法到最終產品上線，我們將全面協助實現企業的創新想法。員工可以隨時跟進其所提出或關注的創新想法的最新進展。'
    },
    trusty: {
      title: '我們的客戶',
      identify: '暢意創新管理系統幫助我們發掘能為企業帶來積極影響的創新想法。同時，員工因為自身的想法被聆聽和重視而更有動力。這是一個讓企業和員工都充滿動力的項目。',
      beforeIDEX: '在使用暢意創新系統之前，我們一直都在使用電郵交換和管理創新想法。現在我們的員工可以非常輕鬆地在一個平台上提交他們的想法。暢意平台確實幫我們在收集想法和選擇可行的想法來實施上提高了不少效率。'
    },
    resource: {
      title: '創新管理資源',
      learn: '通過我們的部落格，進一步了解如何在企業內有效地管理創新。',
      by: '作者',
      articles: '查看所有文章'
    },
    contact: {
      keepTouch: '與我們聯絡',
      connect: '與我們的創新專家聯繫，獲取更多創新管理資源。',
      name: '姓名',
      company: '公司名稱',
      workEmail: '工作電郵',
      message: '訊息',
      submit: '提交',
    },
    pricing:{
      plans_pricing:`價格方案`,
      choose_plan:`選擇最適合企業需求的方案。如果您不知道該選擇哪一個方案，請隨時聯繫我們。`,
      starter:`基礎版`,
      usd:`美元`,
      99:`99`,
      499:`499`,
      999:`999`,
      month:`每月`,
      professional:`專業版`,
      business:`商業版`,
      enterprise:`企業版`,
      for_pricing_custom:`聯絡我們獲取報價和定制化功能`,
      for_custom:`聯絡我們獲取報價和定制化功能`,
      unlimited_members:`無限用戶`,
      upto_xxx:`最多XX個創新想法`,
      xx_teams:`XX個團隊`,
      your_own_workspace:`企業獨有的創新空間`,
      collect_analyse:`收集，分析和整理創新想法`,
      performance_analytics:`企業創新和員工創新數據分析`,
      advanced_audience:`先進的團隊劃分`,
      custom_branding:`根據企業的品牌形象定制`,
      single_sign_on:`單一登入（SSO)`,
      dedicated_manager:`專有創新成功專家支持`,
      sla_tech:`99.99%的可用時間保證和技術支持`,
      try_for_free:`免費試用`,
      contact_us:`聯絡我們`,
      faq:`常見問題`,
      can_i_cancel:`能否隨時取消訂閱？`,
      our_goal:`我們的目標是讓您滿意。您可以隨時取消訂閱，我們將從下月起取消對您的收費。`,
      payment_options:`付款方式有哪些？`,
      payments_made_via:`付款是通過銀行轉帳進行，我們將每月為您開具付款通知。`,
      data_protection:`你們怎樣保護數據安全？`,
      serious_secutiry:`我們非常重視數據安全。您的聯繫方式，創新想法和數據都是您自己的。您在我們平台上創建的所有創新想法和提交的所有內容都只對經過驗證的用戶開放。所有數據都通過傳輸層安全性協定進行加密。`,
      more_ides:`如果我們提交的創新想法數超過價格方案中的數量怎麼辦？`,
      dont_worry:`不用擔心，我們將在您達到限額前通知您。我們支持即用即付 - 您可以隨時付額外的99美元以增加100個創新想法。`,
      stay_in_touch:`如果您還有其他問題，請隨時與我們聯絡`,
    },
    blog:{
      blog:`部落格`,
      recent_articles:`最新文章`,
      read:`閱讀`,
      read_more:`閱讀更多`,
      previous_articles:`過往文章`,
      articles:[
        
      ]
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
store.dispatch(setLocale('GB'));



ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
