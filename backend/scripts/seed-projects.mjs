import mongoose from "mongoose";
import config from "../src/config/config.js";
import Project from "../src/models/Project.js";

const projects = [
  {
    slug: "marketing-agency-seo-growth",
    title: "Marketing Agency Organic Growth",
    industry: "Marketing & Creative Agency",
    category: "Agency & Professional Services",
    duration: "6 months",
    clientScope:
      "Confidential engagement. The agency is not named. Industry, scope and Google Search Console data are published instead.",
    description:
      "How a marketing agency grew Google impressions from 127K to 404K (+218%) and held a top-10 average ranking in six months of technical and content SEO.",
    summary:
      "In six months the agency's website went from 127,000 to 404,000 Google Search impressions (+218%) and from 684 to 852 clicks (+24.6%), while average ranking improved from position 9.5 to 8.9, a top-10 average across a far larger keyword set.",
    image: "/projects/marketing-agency-seo-growth.png",
    imageAlt:
      "Google Search Console performance chart showing 404K impressions and 852 clicks over six months for a marketing agency website",
    imageCaption:
      "Google Search Console, last 6 months vs previous 6 months: 404K impressions, 852 clicks, average position 8.9.",
    technologies: [
      "Technical SEO",
      "Topical Authority",
      "Schema Markup",
      "Internal Linking",
      "Core Web Vitals",
      "Google Search Console",
    ],
    services: [
      "Technical SEO audit",
      "Service page architecture",
      "Topical cluster content",
      "Schema markup",
      "Internal linking",
    ],
    featured: true,
    results: [
      {
        label: "Google impressions",
        value: "404K",
        change: "+218% (was 127K)",
        direction: "up",
        context: "Last 6 months vs previous 6 months",
      },
      {
        label: "Organic clicks",
        value: "852",
        change: "+24.6% (was 684)",
        direction: "up",
        context: "Last 6 months vs previous 6 months",
      },
      {
        label: "Average position",
        value: "8.9",
        change: "Improved from 9.5",
        direction: "up",
        context: "Top-10 average across a wider query set",
      },
      {
        label: "Average CTR",
        value: "0.2%",
        change: "Was 0.5%",
        direction: "down",
        context: "Impressions expanded into informational queries",
      },
    ],
    highlights: [
      "Impressions grew 218%, from 127K to 404K, in six months while average ranking stayed inside the top 10.",
      "Clicks rose 24.6% (684 to 852) with no paid media behind them.",
      "Average position improved from 9.5 to 8.9 even though the ranking query set roughly tripled.",
      "CTR fell from 0.5% to 0.2% because reach expanded into upper-funnel informational queries, not because rankings dropped.",
      "The single largest lever was topical authority: hub pages plus supporting service and location pages.",
    ],
    sections: [
      {
        heading: "The challenge",
        body: "The agency ranked for its own brand name and a handful of service terms, but had no structured coverage of the topics its buyers actually research. Impressions had plateaued near 127K and the site was invisible for mid-funnel queries such as service comparisons, pricing questions and process explainers. Crawl budget was wasted on thin tag archives, and service pages shared near-identical copy, competing with one another.",
      },
      {
        heading: "What we did",
        body: "We ran a full technical audit first: removed duplicate and low-value archive pages from the index, fixed redirect chains, flattened the click depth to key service pages, and implemented Organization, ProfessionalService, BreadcrumbList and FAQPage schema. We then rebuilt the information architecture around topical clusters, one hub page per service line, supported by comparison, pricing and location pages, with descriptive internal links passing relevance from hub to spoke. Core Web Vitals were brought into the green on both mobile and desktop, and every page received a single, intent-matched title and one clear answer block directly beneath the heading.",
      },
      {
        heading: "Why CTR moved down while rankings improved",
        body: "Average CTR dropped from 0.5% to 0.2% at the same time average position improved to 8.9. That combination is expected when a site starts ranking for a much broader set of informational queries: impressions scale faster than clicks because most of the new visibility sits on results pages where the user is researching rather than buying. The commercially valuable queries, the ones the service and pricing pages target, held the top-10 average that pulled the position metric up.",
      },
      {
        heading: "What this means for other agencies",
        body: "For an agency or professional-services firm with an existing site, the first six months of disciplined technical SEO plus topical cluster build-out typically produce impression growth well ahead of click growth. Ranking depth improves before CTR does. The practical takeaway is to measure impressions and average position as leading indicators, and to treat CTR as a trailing metric that follows once the site earns positions on commercial queries.",
      },
    ],
    faqs: [
      {
        question: "How long does SEO take to work for a marketing agency website?",
        answer:
          "Technical fixes can register in Google Search Console within a few weeks, but compounding growth usually shows over three to six months. In this engagement the agency moved from 127K to 404K impressions and from position 9.5 to 8.9 over six months.",
      },
      {
        question: "What SEO work tripled the agency's Google impressions?",
        answer:
          "Three things: removing thin and duplicate pages from the index so crawl budget went to valuable pages, rebuilding the site around topical clusters with hub and spoke internal linking, and adding Organization, ProfessionalService and FAQPage schema. Impressions grew 218% while average position improved to 8.9.",
      },
      {
        question: "Why did organic CTR drop from 0.5% to 0.2%?",
        answer:
          "Because impressions expanded from 127K into 404K across informational, upper-funnel queries. Impressions on research-stage queries grow faster than clicks, so the average CTR falls even when rankings and clicks both improve. CTR recovers as the site earns top positions on commercial queries.",
      },
      {
        question: "What is a good average position in Google Search Console?",
        answer:
          "An average position of 10 or better means the site typically appears on page one. For most service businesses, moving from around 15 to under 10 is the threshold where click growth accelerates. This project reached 8.9 from a starting point of 9.5.",
      },
      {
        question: "Does schema markup actually increase organic traffic?",
        answer:
          "Schema does not directly raise rankings, but it makes pages eligible for rich results and helps search engines understand entities and relationships. On this project it was paired with content restructuring, and impressions grew 218% over the following six months.",
      },
    ],
    seo: {
      title: "Marketing Agency SEO: 404K Impressions",
      description:
        "Marketing agency SEO case study: 404K impressions (+218%), 852 clicks and an 8.9 average position in six months, client confidential.",
      keywords: [
        "marketing agency SEO",
        "SEO case study",
        "topical authority SEO",
        "technical SEO agency",
        "Google Search Console growth",
        "impressions growth SEO",
        "AEO for agencies",
        "GEO optimization",
      ],
    },
    fullDescription:
      "In six months the agency's website went from 127,000 to 404,000 Google Search impressions (+218%) and from 684 to 852 clicks (+24.6%), while average ranking improved from position 9.5 to 8.9.\n\nThe challenge: the agency ranked for its brand and a few service terms but had no coverage of mid-funnel research queries, with thin tag archives wasting crawl budget and duplicate service pages competing internally.\n\nWhat we did: technical audit and index clean-up, redirect chain fixes, flattened click depth, Organization, ProfessionalService, BreadcrumbList and FAQPage schema, topical cluster architecture with hub and spoke internal linking, and Core Web Vitals brought into the green.\n\nWhy CTR fell: impressions expanded into upper-funnel informational queries, so they grew faster than clicks. Ranking depth on commercial queries improved at the same time, lifting average position to 8.9.",
  },
  {
    slug: "beauty-ecommerce-seo-growth",
    title: "Beauty E-commerce Organic Growth",
    industry: "Beauty & Personal Care E-commerce",
    category: "E-commerce / Beauty & Personal Care",
    duration: "6 months",
    clientScope:
      "Confidential engagement. The brand is not named. Industry, scope and Google Search Console data are published instead.",
    description:
      "Beauty e-commerce SEO case study: organic clicks grew 32× (46 to 1,480) and impressions 97× (325 to 31,600) in six months as the store scaled from a near-zero base.",
    summary:
      "The beauty store grew from 46 to 1,480 organic clicks (about 32×) and from 325 to 31,600 impressions (about 97×) in six months. Average position moved from 9 to 19.4 because the store began ranking across a far broader and more competitive set of product and category queries.",
    image: "/projects/beauty-ecommerce-seo-growth.png",
    imageAlt:
      "Google Search Console performance chart showing 31.6K impressions and 1.48K clicks over six months for a beauty e-commerce store",
    imageCaption:
      "Google Search Console, last 6 months vs previous 6 months: 31.6K impressions, 1.48K clicks, 4.7% CTR.",
    technologies: [
      "E-commerce SEO",
      "Category Page Optimization",
      "Product Schema",
      "Content SEO",
      "Google Search Console",
      "Site Architecture",
    ],
    services: [
      "E-commerce SEO audit",
      "Category and product page SEO",
      "Faceted navigation control",
      "Product and review schema",
      "Buying-guide content",
    ],
    featured: true,
    results: [
      {
        label: "Organic clicks",
        value: "1.48K",
        change: "32× growth (was 46)",
        direction: "up",
        context: "Last 6 months vs previous 6 months",
      },
      {
        label: "Google impressions",
        value: "31.6K",
        change: "97× growth (was 325)",
        direction: "up",
        context: "Last 6 months vs previous 6 months",
      },
      {
        label: "Average CTR",
        value: "4.7%",
        change: "Was 14.2%",
        direction: "down",
        context: "Query base widened from 325 to 31.6K impressions",
      },
      {
        label: "Average position",
        value: "19.4",
        change: "Was 9",
        direction: "down",
        context: "Ranking across a far broader, deeper query set",
      },
    ],
    highlights: [
      "Organic clicks grew roughly 32×, from 46 to 1,480, in six months.",
      "Impressions grew roughly 97×, from 325 to 31,600, as the catalog became crawlable and indexable at scale.",
      "Average CTR settled at 4.7% on a base 97 times larger than before.",
      "Average position moved from 9 to 19.4 because the store started ranking for competitive head terms and long-tail product queries it previously had no presence for.",
      "Category pages, not product pages, carried the majority of new impression growth.",
    ],
    sections: [
      {
        heading: "The challenge",
        body: "The store was effectively invisible in Google: 325 impressions and 46 clicks over a six-month window is the profile of a site with almost no non-branded visibility. Category pages were near-duplicates of one another, product descriptions were manufacturer copy repeated across dozens of stores, and faceted filter URLs were generating thousands of thin pages that diluted crawl priority.",
      },
      {
        heading: "What we did",
        body: "We consolidated faceted navigation with consistent noindex and canonical rules so crawl budget went to real category and product pages. Each category received unique, search-intent-led copy, a buying-guide block and internal links from relevant blog content. Product pages were upgraded with Product, Offer and Review schema, unique descriptions and optimized image delivery. A small set of high-intent hub pages, routines, skin types and concerns, was added to capture informational demand and pass it down to categories.",
      },
      {
        heading: "Reading the position and CTR change honestly",
        body: "Average position moved from 9 to 19.4 and CTR from 14.2% to 4.7%. Those numbers look like a decline but they describe a site that went from ranking on a handful of low-competition queries to competing across an entire catalog. Averaging position 9 across 325 impressions means very few queries were being tracked at all; averaging 19.4 across 31,600 impressions means the store now surfaces on page one for some terms and page two for many others, the normal intermediate state before head-term rankings mature.",
      },
      {
        heading: "What this means for other online stores",
        body: "For a new or under-optimized e-commerce site, expect impressions and clicks to scale long before average position improves. The priority sequence that worked here is: control faceted URLs first, make every category page unique and useful second, add product schema third, and only then invest in informational content that feeds the commercial pages.",
      },
    ],
    faqs: [
      {
        question: "How long does e-commerce SEO take to show results?",
        answer:
          "A new or previously unoptimized store usually sees impression growth within the first two to three months and meaningful click growth by months three to six. This beauty store went from 46 to 1,480 monthly organic clicks over six months.",
      },
      {
        question: "Why did average position drop from 9 to 19.4 while traffic grew?",
        answer:
          "Because the site began ranking for many more queries. Averaging position 9 across only 325 impressions covers very few terms; averaging 19.4 across 31,600 impressions means the store now competes on a full catalog of head and long-tail queries. Position averages move down as coverage widens even while traffic climbs.",
      },
      {
        question: "What should I optimize first on an e-commerce product page?",
        answer:
          "Order of impact: unique category and product copy over manufacturer text, clean faceted-navigation rules so filter URLs do not split authority, Product and Offer schema, then image performance. Category pages typically drive the largest share of new impressions.",
      },
      {
        question: "What is a good CTR for beauty and personal care e-commerce?",
        answer:
          "It depends on query mix. Brand and exact-product queries can exceed 10%, while broad informational queries sit well below 2%. A blended 4.7% across 31.6K impressions, with a large share of research-stage queries, is a healthy working figure.",
      },
      {
        question: "Does product schema markup increase clicks from Google?",
        answer:
          "Product, Offer and Review schema make a listing eligible for rich results such as price and star ratings, which can improve CTR. It does not guarantee rich results, but it is a prerequisite and it helps search engines understand the product entity.",
      },
    ],
    seo: {
      title: "Beauty E-commerce SEO: 32× Organic Clicks",
      description:
        "Beauty e-commerce SEO case study: organic clicks grew 32× and impressions 97× in six months. Category and product schema work, brand confidential.",
      keywords: [
        "beauty ecommerce SEO",
        "e-commerce SEO case study",
        "product schema markup",
        "category page SEO",
        "faceted navigation SEO",
        "online store organic growth",
        "AEO ecommerce",
        "GEO ecommerce",
      ],
    },
    fullDescription:
      "The beauty store grew from 46 to 1,480 organic clicks (about 32×) and from 325 to 31,600 impressions (about 97×) in six months.\n\nThe challenge: 325 impressions over six months is near-invisible. Category pages were near-duplicates, product copy was generic manufacturer text, and faceted filter URLs were generating thousands of thin pages.\n\nWhat we did: consistent noindex and canonical rules on faceted navigation, unique intent-led copy on every category page, buying-guide content, Product, Offer and Review schema, optimized image delivery, and hub pages for routines, skin types and concerns.\n\nReading the data: average position moved from 9 to 19.4 and CTR from 14.2% to 4.7% because the query base widened roughly 97×, the normal intermediate state before head-term rankings mature.",
  },
  {
    slug: "cleaning-services-local-seo",
    title: "Cleaning Services Local SEO",
    industry: "Residential & Commercial Cleaning Services",
    category: "Local Services / Home Services",
    duration: "6 months",
    clientScope:
      "Confidential engagement. The cleaning company is not named. Industry, scope and Google Search Console data are published instead.",
    description:
      "New cleaning-services website earned 127K Google impressions and 1,080 clicks in its first six months, from a standing start of zero, at an average position of 20.8.",
    summary:
      "A newly launched cleaning-services website earned 127,000 Google impressions and 1,080 clicks in its first six months on Search Console, from a starting point of zero, at an average position of 20.8, early page-two depth across a wide set of local service queries.",
    image: "/projects/cleaning-services-local-seo.png",
    imageAlt:
      "Google Search Console performance chart showing 127K impressions and 1.08K clicks in the first six months for a cleaning services website",
    imageCaption:
      "Google Search Console, first 6 months of tracking: 127K impressions, 1,080 clicks, average position 20.8. Previous period: no data.",
    technologies: [
      "Local SEO",
      "Google Business Profile",
      "Service Area Pages",
      "LocalBusiness Schema",
      "Google Search Console",
      "On-page SEO",
    ],
    services: [
      "Local SEO setup",
      "Service area page build",
      "LocalBusiness schema",
      "Google Business Profile alignment",
      "Review and citation strategy",
    ],
    featured: true,
    results: [
      {
        label: "Google impressions",
        value: "127K",
        change: "From zero",
        direction: "up",
        context: "First 6 months of Search Console tracking",
      },
      {
        label: "Organic clicks",
        value: "1.08K",
        change: "From zero",
        direction: "up",
        context: "First 6 months of Search Console tracking",
      },
      {
        label: "Average position",
        value: "20.8",
        change: "New site baseline",
        direction: "neutral",
        context: "Early page-two depth across local queries",
      },
      {
        label: "Average CTR",
        value: "0.8%",
        change: "New baseline",
        direction: "neutral",
        context: "Positions improve, CTR follows",
      },
    ],
    highlights: [
      "127K impressions and 1,080 clicks in the first six months of tracking, from a standing start of zero.",
      "The previous six-month period recorded no data at all. This is a new-site baseline, not a recovery.",
      "Average position of 20.8 across local service queries is the expected starting depth before page-one conversion.",
      "Service-area pages, not the homepage, captured the majority of new local impressions.",
      "LocalBusiness schema and Google Business Profile alignment were shipped in the first sprint, not later.",
    ],
    sections: [
      {
        heading: "The challenge",
        body: "A new cleaning-services site with no historical authority had to compete against established local operators and directory results for queries such as deep cleaning, move-out cleaning and post-construction cleaning. There was no baseline data: the previous six-month window in Search Console shows zero impressions and zero clicks.",
      },
      {
        heading: "What we did",
        body: "We built one dedicated service-area page per city and locality the business actually serves, each with unique scope, pricing guidance and FAQ content rather than swapped-in city names. LocalBusiness and Service schema were added site-wide, NAP details were made consistent across the site and listings, and the Google Business Profile categories, services and service areas were aligned to match the page structure. Blog content targeted the research-stage questions, how often, how much, how long, and internally linked to the relevant service pages.",
      },
      {
        heading: "Why average position starts near 20",
        body: "A brand-new domain typically enters the index on page two for competitive local terms while it accumulates links, reviews and query-level engagement data. An average position of 20.8 across 127K impressions means the site is already surfacing broadly and needs depth of authority, not more pages, to cross onto page one. The CTR of 0.8% is consistent with that position band.",
      },
      {
        heading: "What this means for other local service businesses",
        body: "If your site is new or newly claimed in Search Console, judge the first six months on impressions and index coverage rather than clicks. The sequence that works: unique service-area pages first, structured data and profile alignment second, review velocity third, and link acquisition once the page set is stable.",
      },
    ],
    faqs: [
      {
        question: "How long does local SEO take for a cleaning company?",
        answer:
          "Impressions typically appear within the first weeks and build steadily; meaningful click volume and page-one positions usually take six to twelve months. This site produced 127K impressions and 1,080 clicks in its first six months from zero.",
      },
      {
        question: "How many service-area pages does a cleaning business need?",
        answer:
          "One page per city or locality you genuinely serve, with unique content: scope, pricing guidance, FAQs and local proof. Thin templated pages with only the city name swapped in are treated as duplicate content and rarely rank.",
      },
      {
        question: "Why is my average position around 20 on a new website?",
        answer:
          "Because new domains have no query-level history or link authority yet and typically settle on page two for competitive local terms while authority builds. Moving from around 20 to under 10 is the threshold where local click volume accelerates.",
      },
      {
        question: "Does Google Business Profile affect website rankings?",
        answer:
          "The profile mainly drives Map Pack visibility, and its categories, services and service areas influence which local queries you appear for. Aligning the profile with the site's service pages keeps both surfaces consistent and avoids mixed signals.",
      },
      {
        question: "What is a realistic CTR for local service results?",
        answer:
          "Local queries that reach position one or two commonly return 5% or more; averages near 1% reflect a site sitting mostly around position 20. CTR rises as a direct function of moving into the top few results.",
      },
    ],
    seo: {
      title: "Cleaning Local SEO: 127K Impressions",
      description:
        "Local SEO case study for a cleaning services business: 127K impressions and 1,080 clicks in six months from zero, company confidential.",
      keywords: [
        "local SEO cleaning business",
        "service area pages",
        "LocalBusiness schema",
        "new website SEO timeline",
        "Google Business Profile SEO",
        "local service SEO case study",
        "AEO local business",
        "GEO local search",
      ],
    },
    fullDescription:
      "A newly launched cleaning-services website earned 127,000 Google impressions and 1,080 clicks in its first six months on Search Console, from a starting point of zero, at an average position of 20.8.\n\nThe challenge: a new domain competing against established local operators and directories for deep cleaning, move-out cleaning and post-construction cleaning queries, with no historical data at all.\n\nWhat we did: dedicated service-area pages for every locality served, LocalBusiness and Service schema, consistent NAP details, Google Business Profile categories and service areas aligned to the site, and research-stage blog content linking into service pages.\n\nWhy position starts near 20: new domains enter the index without query-level authority. 127K impressions at position 20.8 shows broad visibility already exists. Authority, not more pages, is the next requirement.",
  },
  {
    slug: "mortgage-broker-seo-growth",
    title: "Mortgage Broker Organic Growth",
    industry: "Mortgage & Home-Loan Brokerage",
    category: "Finance / Mortgage Brokerage",
    duration: "6 months",
    clientScope:
      "Confidential engagement. The brokerage is not named. Industry, scope and Google Search Console data are published instead.",
    description:
      "Mortgage broker SEO case study: 6,530 Google impressions and 102 clicks earned in six months in a competitive YMYL category, from a starting point of zero.",
    summary:
      "A mortgage brokerage site earned 6,530 Google impressions and 102 clicks in its first six months in a YMYL category, at an average position of 20.5 and a 1.6% CTR, a first visibility baseline in one of the hardest local-finance niches.",
    image: "/projects/mortgage-broker-seo-growth.png",
    imageAlt:
      "Google Search Console performance chart showing 6.53K impressions and 102 clicks over six months for a mortgage broker website",
    imageCaption:
      "Google Search Console, first 6 months of tracking: 6.53K impressions, 102 clicks, average position 20.5. Previous period: no data.",
    technologies: [
      "YMYL SEO",
      "Finance Content Strategy",
      "FAQPage Schema",
      "E-E-A-T Signals",
      "Google Search Console",
      "Technical SEO",
    ],
    services: [
      "YMYL technical SEO",
      "Loan product page structure",
      "Calculator and explainer content",
      "FAQPage and Breadcrumb schema",
      "E-E-A-T and author signals",
    ],
    featured: false,
    results: [
      {
        label: "Google impressions",
        value: "6.53K",
        change: "From zero",
        direction: "up",
        context: "First 6 months of Search Console tracking",
      },
      {
        label: "Organic clicks",
        value: "102",
        change: "From zero",
        direction: "up",
        context: "First 6 months of Search Console tracking",
      },
      {
        label: "Average position",
        value: "20.5",
        change: "New site baseline",
        direction: "neutral",
        context: "Competitive YMYL query set",
      },
      {
        label: "Average CTR",
        value: "1.6%",
        change: "New baseline",
        direction: "neutral",
        context: "Higher than typical at this depth",
      },
    ],
    highlights: [
      "6,530 impressions and 102 clicks in six months in a YMYL category where new domains rarely break through quickly.",
      "The previous six-month period recorded no data. This is a first baseline, not a decline.",
      "CTR of 1.6% at an average position of 20.5 is stronger than typical for that depth, indicating well-matched titles and descriptions.",
      "Explainer and calculator pages produced the majority of impressions; product pages produced the clicks.",
      "E-E-A-T signals, named expertise, clear process, licence and disclosure information, were treated as ranking prerequisites, not optional extras.",
    ],
    sections: [
      {
        heading: "The challenge",
        body: "Mortgage search sits squarely inside Google's YMYL category, where experience, expertise, authority and trust signals are weighed more heavily and where established lenders and comparison sites dominate the first page. A new brokerage had no historical data, the previous six-month window shows zero impressions, and had to build credibility before it could build rankings.",
      },
      {
        heading: "What we did",
        body: "We restructured the site so every loan product had its own page with clear eligibility, process and disclosure content, and added named authorship and licence details wherever advice was given. Explainer pages and a repayment calculator captured research-stage demand and internally linked to the product pages. FAQPage and BreadcrumbList schema were implemented on every explainer, technical issues, crawlability, redirect chains, mobile rendering, were resolved in the first sprint, and content was reviewed for accuracy, freshness dates and clear sourcing.",
      },
      {
        heading: "Why CTR looks high for position 20.5",
        body: "An average CTR of 1.6% at an average position of 20.5 is above the norm for that depth, because the titles and descriptions matched search intent closely on the queries that did produce clicks. It also reflects a query mix weighted toward specific, lower-volume questions rather than broad head terms where a page-two listing earns almost nothing.",
      },
      {
        heading: "What this means for finance and YMYL sites",
        body: "In YMYL categories the first six months should be judged on index coverage, impression growth and trust infrastructure rather than clicks. Establish expertise and disclosure signals early, split products into their own pages, and use explainer content to earn the impressions that later convert once rankings mature.",
      },
    ],
    faqs: [
      {
        question: "How long does SEO take for a mortgage broker website?",
        answer:
          "YMYL finance sites typically take longer than local service businesses because trust signals carry more weight. Expect a first impression baseline within months and meaningful click volume over nine to eighteen months. This site produced 6,530 impressions and 102 clicks in its first six months.",
      },
      {
        question: "Why is mortgage SEO harder than other local SEO?",
        answer:
          "Mortgage queries are YMYL, so Google weighs experience, expertise, authority and trust more heavily, and the first page is crowded with lenders and comparison sites. New brokerages must establish credibility and accurate, sourced content before rankings follow.",
      },
      {
        question: "What is E-E-A-T and how do I show it on a finance site?",
        answer:
          "Experience, Expertise, Authoritativeness and Trust: named authors with real credentials, licence and disclosure information, clear process explanations, accurate and dated content, and consistent business details. It is an evaluation framework rather than a direct ranking factor, but it shapes how quality is assessed on YMYL pages.",
      },
      {
        question: "Should mortgage calculators be their own pages?",
        answer:
          "Yes, when they target distinct research intent. A calculator or explainer earns impressions for question-stage queries and can internally link to the loan product pages that convert. This pattern produced most of the impression growth in this project.",
      },
      {
        question: "Is 1.6% a good CTR at average position 20?",
        answer:
          "Yes. Listings around position 20 usually average well under 1%. Reaching 1.6% indicates titles and descriptions matched intent on the queries that produced clicks, and that the query mix leaned specific rather than broad.",
      },
    ],
    seo: {
      title: "Mortgage Broker SEO: 6.5K Impressions",
      description:
        "Mortgage broker SEO case study in a YMYL category: 6,530 impressions and 102 clicks in six months at position 20.5, brokerage confidential.",
      keywords: [
        "mortgage broker SEO",
        "YMYL SEO",
        "finance website SEO",
        "E-E-A-T SEO",
        "loan calculator content",
        "mortgage SEO case study",
        "AEO finance",
        "GEO YMYL",
      ],
    },
    fullDescription:
      "A mortgage brokerage site earned 6,530 Google impressions and 102 clicks in its first six months in a YMYL category, at an average position of 20.5 and a 1.6% CTR.\n\nThe challenge: mortgage search is YMYL, dominated by lenders and comparison sites, with no historical data, and the previous six-month window shows zero impressions.\n\nWhat we did: one page per loan product with eligibility, process and disclosure content; named authorship and licence details; explainer pages and a repayment calculator capturing research-stage demand; FAQPage and BreadcrumbList schema; technical fixes in the first sprint; and accuracy, freshness and sourcing reviews across all content.\n\nWhy CTR looks high: 1.6% at position 20.5 is above normal for that depth, reflecting closely matched titles and a query mix weighted toward specific questions.",
  },
  {
    slug: "product-brand-organic-growth",
    title: "Product Brand Organic Growth",
    industry: "Product-based Retail / Direct-to-Consumer Brand",
    category: "E-commerce / Product Brand",
    duration: "6 months",
    clientScope:
      "Confidential engagement. The brand is not named. Industry, scope and Google Search Console data are published instead.",
    description:
      "Product brand SEO case study: 11.6K organic clicks (+224%), 84.6K impressions (+319%) and a top-6 average position across six months of sustained growth.",
    summary:
      "The product brand grew organic clicks from 3,580 to 11,600 (+224%) and impressions from 20,200 to 84,600 (+319%) in six months, while holding an average position between 5.5 and 5.8, a sustained top-six ranking with a 13.7% CTR.",
    image: "/projects/product-brand-organic-growth.png",
    imageAlt:
      "Google Search Console performance chart showing 84.6K impressions and 11.6K clicks over six months for a product brand website",
    imageCaption:
      "Google Search Console, last 6 months vs previous 6 months: 84.6K impressions, 11.6K clicks, 13.7% CTR, average position 5.8.",
    technologies: [
      "E-commerce SEO",
      "Content Strategy",
      "Schema Markup",
      "Core Web Vitals",
      "Google Search Console",
      "Conversion-focused SEO",
    ],
    services: [
      "Technical SEO",
      "Product and collection page SEO",
      "Comparison and use-case content",
      "Product, Review and FAQ schema",
      "Internal linking and CRO review",
    ],
    featured: true,
    results: [
      {
        label: "Organic clicks",
        value: "11.6K",
        change: "+224% (was 3.58K)",
        direction: "up",
        context: "Last 6 months vs previous 6 months",
      },
      {
        label: "Google impressions",
        value: "84.6K",
        change: "+319% (was 20.2K)",
        direction: "up",
        context: "Last 6 months vs previous 6 months",
      },
      {
        label: "Average position",
        value: "5.8",
        change: "Was 5.5, held top-6",
        direction: "neutral",
        context: "Top-6 average despite 4× more impressions",
      },
      {
        label: "Average CTR",
        value: "13.7%",
        change: "Was 17.8%",
        direction: "down",
        context: "Still well above category benchmarks",
      },
    ],
    highlights: [
      "Organic clicks grew 224%, from 3,580 to 11,600, in six months.",
      "Impressions grew 319%, from 20,200 to 84,600, while average position held between 5.5 and 5.8.",
      "A 13.7% CTR on 84.6K impressions is far above typical e-commerce benchmarks.",
      "Ranking depth was preserved while reach quadrupled, the hardest combination to achieve in SEO.",
      "The gain came from comparison and use-case content feeding product pages, not from discount-led pages.",
    ],
    sections: [
      {
        heading: "The challenge",
        body: "The brand already performed well on a smaller footprint: position 5.5 and a 17.8% CTR across 20,200 impressions. Growth beyond that point usually costs ranking depth, because expanding into new queries pulls the average down. The objective was to increase reach substantially without surrendering the top-six average that made the existing traffic valuable.",
      },
      {
        heading: "What we did",
        body: "Product and collection pages were restructured around real comparison and use-case intent: alternatives, comparisons, suitability and how-to-choose content that links directly into the pages it discusses. Product, Review, FAQ and Breadcrumb schema were implemented, Core Web Vitals were kept green on mobile, and internal linking was rebuilt so authority flowed from the strongest pages to new ones. Titles and descriptions were rewritten to state the product's differentiator plainly, which protected CTR as the query set widened.",
      },
      {
        heading: "Holding position while impressions quadruple",
        body: "Average position moved only from 5.5 to 5.8 even though impressions grew 319%. That is the meaningful result in this project: reach expanded into new query territory without diluting existing rankings. CTR eased from 17.8% to 13.7%, a normal consequence of a wider query mix, but remained several times higher than typical e-commerce averages.",
      },
      {
        heading: "What this means for product brands",
        body: "Once a site holds strong positions, the growth constraint is topical coverage rather than technical health. Expansion content that genuinely answers comparison and suitability questions, wired into the product pages with schema and internal links, grows impressions without collapsing the ranking average.",
      },
    ],
    faqs: [
      {
        question: "How much organic traffic can SEO grow in six months?",
        answer:
          "It depends on the starting position, but on an already healthy site doubling or tripling clicks in six months is achievable. This product brand grew clicks 224% (3,580 to 11,600) and impressions 319% (20,200 to 84,600) while holding a top-six average position.",
      },
      {
        question: "How do I grow impressions without losing my average position?",
        answer:
          "Expand coverage through comparison, suitability and use-case content that links into existing product pages, rather than cannibalizing those pages with new near-duplicates. Keep schema, internal linking and Core Web Vitals healthy so new pages inherit authority quickly.",
      },
      {
        question: "What is a good CTR for an e-commerce site?",
        answer:
          "Blended e-commerce CTR often sits between 1% and 5% depending on query mix. A 13.7% average across 84.6K impressions indicates strong title and description matching, with a meaningful share of brand and exact-intent queries.",
      },
      {
        question: "Which schema types matter most for product pages?",
        answer:
          "Product with Offer and Review for price and rating eligibility, FAQPage for question blocks, and BreadcrumbList for sitelink clarity. None of these guarantee rich results, but each is a prerequisite for eligibility and helps engines understand the entity.",
      },
      {
        question: "Does Core Web Vitals affect rankings?",
        answer:
          "Core Web Vitals are a ranking signal within the broader page-experience set, weighted more heavily as a tie-breaker than as a primary driver. Their larger effect is on conversion: faster pages lose fewer visitors before they reach checkout.",
      },
    ],
    seo: {
      title: "Product Brand SEO: 11.6K Clicks, Top-6",
      description:
        "Product brand SEO case study: 11.6K clicks (+224%), 84.6K impressions (+319%) at a 5.8 average position in six months, brand confidential.",
      keywords: [
        "product brand SEO",
        "e-commerce SEO case study",
        "collection page SEO",
        "comparison content SEO",
        "product schema markup",
        "organic growth case study",
        "AEO product pages",
        "GEO ecommerce",
      ],
    },
    fullDescription:
      "The product brand grew organic clicks from 3,580 to 11,600 (+224%) and impressions from 20,200 to 84,600 (+319%) in six months, while holding an average position between 5.5 and 5.8.\n\nThe challenge: the site already held position 5.5 and a 17.8% CTR on 20,200 impressions. Expanding into new queries normally costs ranking depth.\n\nWhat we did: comparison and use-case content wired into product and collection pages, Product, Review, FAQ and Breadcrumb schema, green Core Web Vitals on mobile, rebuilt internal linking, and titles and descriptions rewritten to state the differentiator plainly.\n\nThe result: reach quadrupled while the top-six average held. CTR eased from 17.8% to 13.7% on a wider query mix, still several times the category benchmark.",
  },
];

async function seed() {
  if (!config.mongoUri) {
    console.error("MONGO_URI is not set, cannot seed.");
    process.exit(1);
  }

  await mongoose.connect(config.mongoUri);
  console.log("Connected to MongoDB");

  let upserted = 0;
  for (const project of projects) {
    const doc = await Project.findOneAndUpdate(
      { slug: project.slug },
      { $set: project },
      { new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true }
    );
    upserted += 1;
    console.log(`  ✓ ${doc.slug}  (${doc.title})`);
  }

  const total = await Project.countDocuments();
  console.log(`\nSeeded ${upserted} project(s). Collection now holds ${total}.`);

  await mongoose.disconnect();
  console.log("Disconnected.");
}

seed().catch(async (err) => {
  console.error("Seed failed:", err);
  try {
    await mongoose.disconnect();
  } catch {
    /* ignore */
  }
  process.exit(1);
});
