export const contactOptions = [
  { type: "radio", title: "Me", value: "" },
  { type: "radio", title: "Seller", value: "" },
  { type: "radio", title: "Tenant", value: "" },
  { type: "radio", title: "Landlord", value: "" },
  { type: "radio", title: "Agent", value: "" },
  { type: "radio", title: "Other", value: "" },
];

export const attributes = {
  "property_type": {
    headings: "Property Type:",
    attr: "propertyType",
    Alert: "",
    exactNumber: "",
    exactNumber2: "",
    radioQuestion: [],
    options: [
      {type: "radio", title: "Mid Terraced House", value: "mid_terraced_house"},
      {type: "radio", title: "End Terraced / Semi House", value: "end_terraced_or_semi_house"},
      {type: "radio", title: "Detached House", value: "detached_house"},
      {type: "radio", title: "Detached Bungalow", value: "detached_bungalow"},
      {type: "radio", title: "Semi Detached Bungalow", value: "semi_detached_bungalow"},
      {type: "radio", title: "Flat / Maisonette / Other", value: "flat_or_maisonette_or_other"},
    ],
  },
  "bedrooms":{
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
      { type: "radio", title: "2 Bed rooms", value: "2" },
      { type: "radio", title: "3 Bedrooms", value: "3" },
      { type: "radio", title: "4 Bedrooms", value: "4" },
      { type: "radio", title: "5+ Bedrooms", value: "+" },
    ],
  },
  "distribution_boards":{
    headings: "How Many Fuse Boards You have in Property?",
    attr: "NoFuseBoard",
    Alert: "",
    exactNumber: "",
    exactNumber2: "",
    radioQuestion: [],
    options: [{ type: "counter", title: "No of Fuse Board", value: "" }],
  },
  "electrical_appliances":{
    headings: "Number of Electrical Appliances (PAT)",
    attr: "NoElectricalAppliances",
    Alert: "",
    exactNumber: "Confirm exact Electrical Appliances:",
    exactNumber2: "",
    radioQuestion: [],
    options: [
      { type: "radio", title: "1-10 Appliances", value: "1-10" },
      { type: "radio", title: "11-20 Appliances", value: "11-20" },
      { type: "radio", title: "21-30 Appliances", value: "21-30" },
      { type: "radio", title: "30+ Appliances", value: "+" },
    ],
  },
  "property_age":{
    headings: "Property Age",
    attr: "PropertyAge",
    Alert: "",
    exactNumber: "",
    exactNumber2: "",
    radioQuestion: [],
    options: [
      { type: "radio", title: "Pre 1940", value: "pre_1940" },
      { type: "radio", title: "Post 1940", value: "post_1940" },
    ],
  },
  "property_price":{
    headings: "Property Price",
    attr: "PropertyPrice",
    Alert: "",
    exactNumber: "Confirm exact Property Price £:",
    exactNumber2: "",
    radioQuestion: [],
    options: [
      { type: "radio", title: "Upto £100k", value: "100000" },
      { type: "radio", title: "Upto £300k", value: "300000" },
      { type: "radio", title: "Upto £600k", value: "600000" },
      { type: "radio", title: "Upto £1M", value: "1000000" },
    ],
  },
  "floors":{
    headings: "Number of Floors",
    attr: "NoFloors",
    Alert: "",
    exactNumber: "Confirm exact Floors:",
    exactNumber2: "",
    radioQuestion: [],
    options: [
      { type: "radio", title: "1 Floor", value: "1" },
      { type: "radio", title: "2 Floors", value: "2" },
      { type: "radio", title: "3 Floors", value: "3" },
      { type: "radio", title: "4+ Floors", value: "+" },
    ],
  },
  "gas_appliances":{
    headings: "Number of Gas Appliances (CP12)",
    attr: "NoGasAppliances",
    Alert:
      "All gas burning appliances in the property must be tested. For an accurate quotation, please select correct number of gas appliances.",
    exactNumber: "Confirm exact Gas Appliances:",
    exactNumber2: "",
    radioQuestion: [
      {
        question: "Do you have gas fire in the property?",
        attr: "gasFire",
        options: [
          { title: "Yes", value: true },
          { title: "No", value: false },
        ],
      },
      {
        question: "Does this gas fire has a back-boiler?",
        attr: "backBoiler",
        options: [
          { title: "Yes", value: true },
          { title: "No", value: false },
        ],
      },
    ],
    options: [
      { type: "radio", title: "1 gas appliance", value: "1" },
      { type: "radio", title: "2 gas appliance", value: "2" },
      { type: "radio", title: "3 gas appliance", value: "3" },
      { type: "radio", title: "4+ gas appliance", value: "+" },
    ],
  },
};

export const services = [
  "Electrical Installation Condition Report (EICR)",
  "Energy Performance Certificate",
  "Electrical Portable Appliance Test (PAT)",
  "Gas Safety Certificate",
  "Boiler Service",
];
