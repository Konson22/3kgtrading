const projects = [
  {
    project: "SSUWC Revenue Collection",
    slug: "ssuwc-revenue-collection",
    client: "SSUWC",
    employmentSize: "12 staff",
    startDate: "2021-12-02",
    endDate: "2022-03-31",
    monthlyValue: 12000000,
    annualValue: 144000000,
    location: "Juba, South Sudan",
    image: "/images/projects/ssuwc-revenue-collection.jpg",
    gallery: [
      {
        src: "/images/gallery/financial‑systems‑presentation.jpg",
        caption: "3K Financial Management Groups Digital Systems Presentation to East Africa Go‑Green"
      },
      {
        src: "/images/gallery/mobile‑data‑devices.jpg",
        caption: "Mobile data and revenue collection devices used during SSUWC collection operations"
      }
    ],
    status: "Completed",
    category: "Financial Management",
    tools: ["Revenue Collection System", "Mobile Data Devices"],
    impact: "Improved revenue collection processes and ensured accurate tracking, reporting, and payments.",
    description:
      "A comprehensive revenue collection system implemented for SSUWC, enhancing transparency, reporting accuracy, and financial performance. This project included digital systems for revenue tracking and staff training for efficient operations.",
    clientFeedback:
      "The implementation brought greater clarity and control to our revenue collection processes.",
    tags: ["Revenue Collection", "Financial Systems", "Utility Services"]
  },
  {
    project: "SSUWC Water Meters Connection",
    slug: "ssuwc-water-meters-connection",
    client: "SSUWC",
    employmentSize: "75 staff",
    startDate: "2021-09-01",
    endDate: "2022-06-30",
    monthlyValue: 164000000,
    annualValue: null,
    location: "Juba, South Sudan",
    image: "/images/projects/ssuwc-water-meters.jpg",
    gallery: [
      {
        src: "/images/gallery/water‑treatment‑plant‑inauguration.jpg",
        caption: "3K at the inauguration of Juba's new water treatment plant by H.E the President of South Sudan"
      },
      {
        src: "/images/gallery/ssuwc‑jica‑award.jpg",
        caption: "SSUWC‑JICA award for community service excellence provided by 3K teams"
      }
    ],
    status: "Completed",
    category: "Utility Services",
    tools: ["Metering Equipment", "Field Deployment Tools"],
    impact: "Connected thousands of households and improved water usage billing accuracy across SSUWC service areas.",
    description:
      "A major infrastructure project involving the connection and installation of water meters across SSUWC networks to optimize billing accuracy and customer service responsiveness.",
    clientFeedback:
      "This initiative greatly improved meter reliability and customer satisfaction.",
    tags: ["Water Infrastructure", "Meters Installation", "Utility Services"]
  },
  {
    project: "Revenue Collection – East Africa Go Green",
    slug: "revenue-collection-eagg",
    client: "EAGG",
    employmentSize: "47 staff",
    startDate: "2021-09-01",
    endDate: "2022-08-31",
    monthlyValue: 528870000,
    annualValue: 6346440000,
    location: "Juba, South Sudan",
    image: "/images/projects/eagg-revenue-collection.jpg",
    gallery: [
      {
        src: "/images/gallery/financial‑systems‑presentation.jpg",
        caption: "Digital systems presentation to East Africa Go‑Green revenue team"
      },
      {
        src: "/images/gallery/mobile‑data‑devices.jpg",
        caption: "Field devices used for data and revenue collection across project zones"
      }
    ],
    status: "Completed",
    category: "Financial Management",
    tools: ["Custom Revenue Software", "Mobile Collection Tools"],
    impact: "Streamlined revenue collection, strengthened reporting systems, and improved operational efficiencies for EAGG.",
    description:
      "Implementation of a comprehensive revenue collection framework that included digital systems and field mobile data devices to enhance operational efficiency and ensure accurate financial reporting.",
    clientFeedback:
      "The enhanced system allowed for precise data capture and reliable revenue tracking.",
    tags: ["Revenue Collection", "Digital Systems", "Operational Efficiency"]
  }
];

const totalProjectValue = 6654440000;

export { projects, totalProjectValue };