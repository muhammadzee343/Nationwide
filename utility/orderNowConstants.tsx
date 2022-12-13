export const contactOptions = [
  { type: "radio", title: "Me", value: "" },
  { type: "radio", title: "Seller", value: "" },
  { type: "radio", title: "Tenant", value: "" },
  { type: "radio", title: "Landlord", value: "" },
  { type: "radio", title: "Agent", value: "" },
  { type: "radio", title: "Other", value: "" },
];

export const serviceAttributes = [
  {
    headings: "Property Type:",
    attr: "propertyType",
    Alert: "",
    exactNumber: "",
    exactNumber2: "",
    radioQuestion: [],
    options: [
      { type: "radio", title: "Mid Terraced House", value: "" },
      { type: "radio", title: "End Terraced / Semi House", value: "" },
      { type: "radio", title: "Detached House", value: "" },
      { type: "radio", title: "Detached Bungalow", value: "" },
      { type: "radio", title: "Semi Detached Bungalow", value: "" },
      { type: "radio", title: "Flat / Maisonette / Other", value: "" },
    ],
  },
  {
    headings: "No of Bedrooms",
    attr: "NoOfBedrooms",
    Alert:
      "To Provide an accurate quotation for larger properties with multiple" +
      " living/study rooms, tell us exact number of additional rooms.",
    exactNumber: "Confirm exact number of bedrooms:",
    exactNumber2: "Confirm number of other rooms:",
    radioQuestion: [],
    options: [
      { type: "radio", title: "Studio", value: "s" },
      { type: "radio", title: "1 Bedrooms", value: "1" },
      { type: "radio", title: "2 Bedrooms", value: "2" },
      { type: "radio", title: "3 Bedrooms", value: "3" },
      { type: "radio", title: "4 Bedrooms", value: "4" },
      { type: "radio", title: "5+ Bedrooms", value: "5" },
    ],
  },
  {
    headings: "How Many Fuse Boards You have in Property?",
    attr: "NoFuseBoard",
    Alert: "",
    exactNumber: "",
    exactNumber2: "",
    radioQuestion: [],
    options: [{ type: "counter", title: "No of Fuse Board", value: "" }],
  },
  {
    headings: "Number of Electrical Appliances (PAT)",
    attr: "NoElectricalAppliances",
    Alert: "",
    exactNumber: "Confirm exact Electrical Appliances:",
    exactNumber2: "",
    radioQuestion: [],
    options: [
      { type: "radio", title: "1-10 Appliances", value: "" },
      { type: "radio", title: "11-20 Appliances", value: "" },
      { type: "radio", title: "21-30 Appliances", value: "" },
      { type: "radio", title: "30+ Appliances", value: "" },
    ],
  },
  {
    headings: "Property Age",
    attr: "PropertyAge",
    Alert: "",
    exactNumber: "",
    exactNumber2: "",
    radioQuestion: [],
    options: [
      { type: "radio", title: "Pre 1940", value: "" },
      { type: "radio", title: "Post 1940", value: "" },
    ],
  },
  {
    headings: "Property Price",
    attr: "PropertyPrice",
    Alert: "",
    exactNumber: "Confirm exact Property Price £:",
    exactNumber2: "",
    radioQuestion: [],
    options: [
      { type: "radio", title: "Upto £100k", value: "" },
      { type: "radio", title: "Upto £300k", value: "" },
      { type: "radio", title: "Upto £600k", value: "" },
      { type: "radio", title: "Upto £1M", value: "" },
    ],
  },
  {
    headings: "Number of Floors",
    attr: "NoFloors",
    Alert: "",
    exactNumber: "Confirm exact Floors:",
    exactNumber2: "",
    radioQuestion: [],
    options: [
      { type: "radio", title: "1 Floor", value: "" },
      { type: "radio", title: "2 Floors", value: "" },
      { type: "radio", title: "3 Floors", value: "" },
      { type: "radio", title: "4+ Floors", value: "" },
    ],
  },
  {
    headings: "Number of Gas Appliances (CP12)",
    attr: "NoGasAppliances",
    Alert:
      "All gas burning appliances in the property must be tested. For an accurate quotation, please select correct number of gas appliances.",
    exactNumber: "Confirm exact Gas Appliances:",
    exactNumber2: "",
    radioQuestion: [
      {
        question: "Do you have gas fire in the property?",
        options: [
          { title: "Yes", value: "" },
          { title: "No", value: "" },
        ],
      },
      {
        question: "Does this gas fire has a back-boiler?",
        options: [
          { title: "Yes", value: "" },
          { title: "No", value: "" },
        ],
      },
    ],
    options: [
      { type: "radio", title: "1 gas appliance", value: "" },
      { type: "radio", title: "2 gas appliance", value: "" },
      { type: "radio", title: "3 gas appliance", value: "" },
      { type: "radio", title: "4+ gas appliance", value: "" },
    ],
  },
];

export const services = [
  "Electrical Installation Condition Report (EICR)",
  "Energy Performance Certificate",
  "Electrical Portable Appliance Test (PAT)",
  "Gas Safety Certificate",
  "Boiler Service",
];
