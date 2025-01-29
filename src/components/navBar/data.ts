export interface NavItem {
  title: string;
  href?: string;
  items?: {
    category: string;
    href?: string;
    description?: string;
    subitems?: {
      title: string;
      description?: string;
      href: string;
    }[];
  }[];
}

let resource_href;

if (typeof window !== "undefined") {
  const currentPath = window.location.pathname;
  // Set resourceHref based on current path
  resource_href = currentPath === "/blog" ? "/blog" : "/case-studies";
}

export const navItems: NavItem[] = [
  {
    title: "Courses",
    href: "/newCourse",
    // items: [
    //   {
    //     category: "Case Studies",
    //     description: "Explore real-world examples of our solutions in action",
    //     href: "/soon",
    //     // href: "/case-studies",
    //   },
    //   {
    //     category: "Blog",
    //     description: "Read insights, tips, and industry news on our blog.",
    //     href: "/soon",
    //     // href: "/blog",
    //   },
    // ],
  },
  {
    title: "About",
    href: "/about",
    // items: [
    //   {
    //     category: "Cloud Solutions",
    //     // href: "/solutions",
    //     description:
    //       "Explore our cloud solutions and services for your business needs",
    //     subitems: [
    //       {
    //         title: "Teverse Control",
    //         // description:
    //         //   "Cloud services platform providing visibility, guidance & support for your cloud",
    //         // href: "/solutions/teverse-control",
    //         href: "/soon",
    //       },
    //       {
    //         title: "Teverse Gateway",
    //         // description:
    //         //   "AWS guidance for efficient cloud growth and foundational best practices",
    //         href: "/soon",
    //         // href: "/solutions/teverse-gateway",
    //       },
    //       {
    //         title: "Teverse Engagements",
    //         // description:
    //         //   "Get transparent reporting and live updates on your team's status",
    //         href: "/soon",
    //         // href: "/solutions/cloud-engagements",
    //       },
    //       {
    //         title: "Teverse Cloud Score",
    //         // description:
    //         //   "Proprietary scoring of your cloud architecture against AWS best practices",
    //         href: "/soon",
    //         // href: "/solutions/cloud-score",
    //       },
    //       {
    //         title: "Teverse Cloud Secure",
    //         // description: "Fully managed security, detection, and response",
    //         href: "/soon",
    //         // href: "/solutions/cloud-secure",
    //       },
    //     ],
    //   },
    //   {
    //     category: "IDAM Solutions",
    //     // href: "/solutions/idam",
    //     description: "Comprehensive Identity & Access Management Solutions",
    //     subitems: [
    //       {
    //         title: "Identity Governance and Administration (IGA)",
    //         // description: "Manage user identities and access privileges",
    //         href: "/soon",
    //         // href: "/solutions/idam/iga",
    //       },
    //       {
    //         title: "Single Sign-On (SSO) and MFA",
    //         // description: "Simplify user authentication across multiple apps",
    //         href: "/soon",
    //         // href: "/solutions/idam/sso",
    //       },
    //       {
    //         title: "Identity Federation",
    //         // description:
    //         //   "Enable seamless integration of identity systems across organizations or domains.",
    //         href: "/soon",
    //         // href: "/solutions/idam/idf",
    //       },
    //       {
    //         title: "Privileged Access Management (PAM)",
    //         // description: "Secure privileged accounts and credentials",
    //         href: "/soon",
    //         // href: "/solutions/idam/pam",
    //       },
    //       {
    //         title: "Customer Identity and Access Management (CIAM)",
    //         // description:
    //         //   "Deliver secure, seamless, and personalized user experiences for your customers.",
    //         href: "/soon",
    //         // href: "/solutions/idam/ciam",
    //       },
    //       {
    //         title: "Managing machine identities and BoTs",
    //         // description:
    //         //   "Ensure secure authentication and lifecycle management for machine and bot identities.",
    //         href: "/soon",
    //         // href: "/solutions/idam/mmib",
    //       },
    //     ],
    //   },
    //   {
    //     category: "Generative AI",
    //     // href: "/solutions/generative-ai",
    //     description: "Explore AI-driven innovations for your business",
    //     subitems: [
    //       {
    //         title: "Document Reader",
    //         // description: "AI-powered document analysis and extraction",
    //         href: "/soon",
    //         // href: "/solutions/generative-ai/document-reader",
    //       },
    //       {
    //         title: "Safety Alerts",
    //         // description: "AI-based safety monitoring and alert system",
    //         href: "/soon",
    //         // href: "/solutions/generative-ai/safety-alerts",
    //       },
    //       {
    //         title: "Foundation Models",
    //         // description: "Leverage large-scale AI models for advanced tasks",
    //         href: "/soon",
    //         // href: "/solutions/generative-ai/foundation-models",
    //       },
    //     ],
    //   },
    // ],
  },
  {
    title: "Blog",
    href: "/blog",
    // items: [
    //   {
    //     category: "Cloud",
    //     description: "Optimize your cloud infrastructure",
    //     subitems: [
    //       {
    //         title: "Cloud Managed Services",
    //         // description:
    //         //   "We offer a comprehensive range of services for every challenge companies face on AWS.",
    //         href: "/soon",
    //         // href: "/services",
    //       },
    //       {
    //         title: "Cloud Foundation",
    //         // description:
    //         //   "Manage costs, support your teams, and build to scale.",
    //         href: "/soon",
    //         // href: "/services/cloud-management-services/cloud-foundation",
    //       },
    //       {
    //         title: "Cloud GoTo",
    //         // description:
    //         //   "Our comprehensive service for AWS optimization, operations, and security",
    //         href: "/soon",
    //         // href: "/services/cloud-management-services/cloud-goto",
    //       },
    //       {
    //         title: "AWS Migration",
    //         // description:
    //         //   "Minimize downtime, forecast costs, and migrate efficiently",
    //         href: "/soon",
    //         // href: "/services/professional-services/aws-migration",
    //       },
    //       {
    //         title: "AWS Modernization",
    //         // description: "Containerization, serverless, and microservices",
    //         href: "/soon",
    //         // href: "/services/professional-services/aws-modernization",
    //       },
    //     ],
    //   },
    //   {
    //     category: "Identity and Access Management (IDAM) ",
    //     // href: "/services/professional-services",
    //     description:
    //       "Expert consultation and implementation for robust Identity and Access Management.",
    //     subitems: [
    //       {
    //         title: "IDAM Migration",
    //         // description:
    //         //   "Seamless migration of existing identity and access systems with minimal downtime and maximum security.",
    //         href: "/soon",
    //         // href: "/services/idam#idam-migration",
    //       },
    //       {
    //         title: "Implementation & Integration ",
    //         // description:
    //         //   "End-to-end implementation and integration of IDAM solutions tailored to your business needs.",
    //         href: "/soon",
    //         // href: "/services/idam#idam-implementation-integration",
    //       },
    //       {
    //         title: "Customisation",
    //         // description:
    //         //   "Personalized customization of IDAM platforms to align with unique organizational requirements.",
    //         href: "/soon",
    //         // href: "/services/idam#idam-customization",
    //       },
    //       {
    //         title: "IDAM Strategy ",
    //         // description:
    //         //   "Personalized IDAM strategy platforms to align with unique organizational requirements.",
    //         href: "/soon",
    //         // href: "/services/idam#idam-strategy",
    //       },
    //       {
    //         title: "Evaluation & Recommendation",
    //         // description:
    //         //   "Comprehensive assessment and actionable recommendations for optimizing IDAM systems.",
    //         href: "/soon",
    //         // href: "/services/idam#idam-evaluation-recommendation",
    //       },
    //       {
    //         title: "Technology Roadmap & Planning",
    //         // description:
    //         //   "Strategic planning and roadmap development for future-proof IDAM implementations.",
    //         href: "/soon",
    //         // href: "/services/idam#idam-technology-roadmap",
    //       },
    //       {
    //         title: "Standard API Connectors",
    //         // description:
    //         //   "Pre-built API connectors for seamless integration with existing applications and systems.",
    //         href: "/soon",
    //         // href: "/services/idam#idam-api-connectors",
    //       },
    //       {
    //         title: "Managed Services",
    //         // description:
    //         //   "Ongoing management and support for maintaining a secure and efficient IDAM environment.",
    //         href: "/soon",
    //         // href: "/services/idam#idam-managed-services",
    //       },
    //     ],
    //   },
    //   {
    //     category: "Software Engineering",
    //     description:
    //       "Comprehensive software engineering services for modern and scalable solutions.",
    //     subitems: [
    //       {
    //         title: "Software Architecture and Design",
    //         // description:
    //         //   "Crafting scalable and robust software architecture tailored to your business goals.",
    //         href: "/soon",
    //         // href: "/services/software-engineering#software_archi",
    //       },
    //       {
    //         title: "Application Management Services",
    //         // description:
    //         //   "End-to-end management of software applications, ensuring performance and reliability.",
    //         href: "/soon",
    //         // href: "/services/software-engineering#application-management-services",
    //       },
    //       {
    //         title: "Software and App Development",
    //         // description:
    //         //   "Developing custom software and applications to meet your unique business requirements.",
    //         href: "/soon",
    //         // href: "/services/software-engineering#software-app-development",
    //       },
    //       {
    //         title: "Hire DevOps Engineers",
    //         // description:
    //         //   "Access highly skilled DevOps professionals to streamline and optimize your development pipeline.",
    //         href: "/soon",
    //         // href: "/services/software-engineering#devops",
    //       },
    //       {
    //         title: "System, Data, and API Integration",
    //         // description:
    //         //   "Seamlessly integrate systems, data, and APIs for enhanced interoperability and efficiency.",
    //         href: "/soon",
    //         // href: "/services/software-engineering#system-data-api-integration",
    //       },
    //       {
    //         title: "Strategic IT Consulting",
    //         // description:
    //         //   "Expert guidance on IT strategy and execution to align with business objectives.",
    //         href: "/soon",
    //         // href: "/services/software-engineering#strategic-it-consulting",
    //       },
    //     ],
    //   },
    //   {
    //     category: "Cyber Security",
    //     description: "Comprehensive cybersecurity solutions",
    //     subitems: [
    //       {
    //         title: "Cybersecurity",
    //         // description:
    //         //   "Protect your digital assets with our comprehensive cybersecurity services",
    //         href: "/soon",
    //         // href: "/services/security/cyber",
    //       },
    //     ],
    //   },
    //   {
    //     category: "Generative AI",
    //     // href: "",
    //     description:
    //       "Leverage AWS AI tools: Amazon Bedrock, SageMaker, and Foundation Models",
    //     subitems: [
    //       {
    //         title: "AI Management Services",
    //         // description: "Leverage AI solutions",
    //         href: "/soon",
    //         // href: "/services/ai-management",
    //       },
    //       {
    //         title: "AI Foundation",
    //         // description:
    //         //   "Cost management and foundational best practices for AI solutions on AWS",
    //         href: "/soon",
    //         // href: "/services/ai-management/ai-foundation",
    //       },
    //     ],
    //   },
    // ],
  },
  {
    title: "Reviews",
    href: "/reviews",
    // items: [
    //   {
    //     category: "Healthcare",
    //     description:
    //       "Learn how we support healthcare organizations with cloud solutions",
    //     href: "/soon",
    //     // href: "/industries/healthcare",
    //   },
    //   {
    //     category: "Life Sciences",
    //     description: "Discover our cloud services tailored for life sciences",
    //     href: "/soon",
    //     // href: "/industries/life-sciences",
    //   },
    //   {
    //     category: "Retail",
    //     description: "See how we help retail businesses thrive in the cloud",
    //     href: "/soon",
    //     // href: "/industries/retail",
    //   },
    //   {
    //     category: "Software",
    //     description: "Optimize software development with our cloud expertise",
    //     href: "/soon",
    //     // href: "/industries/software",
    //   },
    //   {
    //     category: "Finance",
    //     description: "Explore cloud solutions designed for the finance sector",
    //     href: "/soon",
    //     // href: "/industries/finance",
    //   },
    //   {
    //     category: "Media",
    //     description: "Empower media companies with robust cloud capabilities",
    //     href: "/soon",
    //     // href: "/industries/media",
    //   },
    //   {
    //     category: "Private Equity ",
    //     description: "",
    //     href: "/soon",
    //     // href: "/industries/private",
    //   },
    // ],
  },
];
