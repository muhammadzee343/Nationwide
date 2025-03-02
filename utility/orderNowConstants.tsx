export const contactOptions = [
  { type: "radio", title: "Me", value: "" },
  { type: "radio", title: "Seller", value: "" },
  { type: "radio", title: "Tenant", value: "" },
  { type: "radio", title: "Landlord", value: "" },
  { type: "radio", title: "Agent", value: "" },
  { type: "radio", title: "Other", value: "" },
];

export const paymentTypes = {
  "stripe":"Debit/Credit Card",
  "cod":"Pay Over Phone",
  "bacs":"Bank Transfer",
  "google_pay":"Payment Request (Stripe)",
  "apple_pay":"Payment Request (Stripe)"
}

export const attributes = {
  property_type: {
    headings: "Property Type:",
    attr: "property_type",
    Alert: "",
    exactNumber: "",
    exactNumber2: "",
    radioQuestion: [],
    options: [
      {
        type: "radio",
        title: "Mid Terraced House",
        serviceType: "residential_property",
        value: "mid_terraced_house",
      },
      {
        type: "radio",
        title: "End Terraced / Semi House",
        serviceType: "residential_property",
        value: "end_terraced_or_semi_house",
      },
      {
        serviceType: "residential_property",
        type: "radio",
        title: "Detached House",
        value: "detached_house",
      },
      {
        serviceType: "residential_property",
        type: "radio",
        title: "Detached Bungalow",
        value: "detached_bungalow",
      },
      {
        type: "radio",
        title: "Semi Detached Bungalow",
        serviceType: "residential_property",
        value: "semi_detached_bungalow",
      },
      {
        type: "radio",
        title: "Flat / Maisonette / Other",
        serviceType: "residential_property",
        value: "flat_or_maisonette_or_other",
      },
      {
        type: "radio",
        title: "Pub/Restaurant",
        serviceType: "commercial_property",
        value: "pub_or_restaurant",
      },
      {
        type: "radio",
        title: "Shop",
        serviceType: "commercial_property",
        value: "shop",
      },
      {
        type: "radio",
        title: "Warehouse",
        serviceType: "commercial_property",
        value: "warehouse",
      },
      {
        type: "radio",
        title: "Office",
        serviceType: "commercial_property",
        value: "office",
      },
      {
        type: "radio",
        title: "Other",
        serviceType: "commercial_property",
        value: "other",
      },
    ],
  },
  bedrooms: {
    headings: "No of Bedrooms",
    attr: "bedrooms",
    Alert:
      "To Provide an accurate quotation for larger properties with multiple" +
      " living/study rooms, tell us exact number of additional rooms.",
    exactNumber: "Confirm exact number of bedrooms:",
    minValue: 5,
    exactNumber2: "Confirm number of other rooms:",
    radioQuestion: [],
    className: "w-14",
    options: [
      { type: "radio", title: "Studio", value: "s" },
      { type: "radio", title: "1 Bedrooms", value: 1 },
      { type: "radio", title: "2 Bed rooms", value: 2 },
      { type: "radio", title: "3 Bedrooms", value: 3 },
      { type: "radio", title: "4 Bedrooms", value: 4 },
      { type: "radio", title: "5+ Bedrooms", value: 5 },
    ],
  },
  distribution_boards: {
    headings: "Number of Consumer unit",
    attr: "distribution_boards",
    Alert: "",
    exactNumber: "",
    minValue: 1,
    exactNumber2: "",
    radioQuestion: [],
    options: [{ type: "counter", title: "Number of Consumer unit", value: "" }],
  },
  electrical_appliances: {
    headings: "Number of Electrical Appliances (PAT)",
    attr: "electrical_appliances",
    Alert: "",
    exactNumber: "Confirm exact Electrical Appliances:",
    minValue: 30,
    exactNumber2: "",
    className: "w-24",
    radioQuestion: [],
    options: [
      { type: "radio", title: "1-10 Appliances", value: "1-10" },
      { type: "radio", title: "11-20 Appliances", value: "11-20" },
      { type: "radio", title: "21-30 Appliances", value: "21-30" },
      { type: "radio", title: "30+ Appliances", value: 30 },
    ],
  },
  property_age: {
    headings: "Property Age",
    attr: "property_age",
    Alert: "",
    exactNumber: "",
    exactNumber2: "",
    radioQuestion: [],
    options: [
      { type: "radio", title: "Pre 1940", value: "pre_1940" },
      { type: "radio", title: "Post 1940", value: "post_1940" },
    ],
  },
  property_price: {
    headings: "Property Price",
    attr: "property_price",
    Alert: "",
    exactNumber: "Confirm exact Property Price £:",
    minValue: 1000001,
    exactNumber2: "",
    radioQuestion: [],
    className: "w-24",
    options: [
      { type: "radio", title: "Upto £100k", value: '1-100' },
      { type: "radio", title: "Upto £300k", value: '101-300' },
      { type: "radio", title: "Upto £600k", value: '301-600' },
      { type: "radio", title: "Upto £1M", value: "601-1000" },
      { type: "radio", title: "Upto £1000K+", value: 1000001 },
    ],
  },
  floors: {
    headings: "Number of Floors",
    attr: "floors",
    Alert: "",
    exactNumber: "Confirm exact Floors:",
    minValue: 4,
    exactNumber2: "",
    radioQuestion: [],
    className: "w-[80px]",
    options: [
      { type: "radio", title: "1 Floor", value: 1 },
      { type: "radio", title: "2 Floors", value: 2 },
      { type: "radio", title: "3 Floors", value: 3 },
      { type: "radio", title: "4+ Floors", value: 4 },
    ],
  },
  gas_appliances: {
    headings: "Number of Gas Appliances (CP12)",
    attr: "gas_appliances",
    Alert:
      "All gas burning appliances in the property must be tested. For an accurate quotation, please select correct number of gas appliances.",
    exactNumber: "Confirm exact Gas Appliances:",
    minValue: 4,
    exactNumber2: "",
    className: "w-24",
    radioQuestion1: {
      question: "Do you have gas fire in the property?",
      attr: "gas_fire",
      options: [
        { title: "Yes", value: true },
        { title: "No", value: false },
      ],
    },
    radioQuestion2: {
      question: "Does this gas fire has a back-boiler?",
      attr: "fire_back_boiler",
      options: [
        { title: "Yes", value: true },
        { title: "No", value: false },
      ],
    },
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
      { type: "radio", title: "1 gas appliance", value: 1 },
      { type: "radio", title: "2 gas appliance", value: 2 },
      { type: "radio", title: "3 gas appliance", value: 3 },
      { type: "radio", title: "4+ gas appliance", value: 4 },
    ],
  },
  circuits: {
    headings: "Number of Circuits",
    attr: "circuits",
    Alert: "",
    exactNumber: "Confirm exact circuits:",
    minValue: 31,
    exactNumber2: "",
    radioQuestion: [],
    className: "w-[80px]",
    options: [
      {
        type: "radio",
        title: "Upto 10 Circuits",
        value: '1-10',
      },
      {
        type: "radio",
        title: "Upto 20 Circuits",
        value: '11-20',
      },
      { type: "radio", title: "Upto 30 Circuits", value: '21-30' },
      { type: "radio", title: "30+ Circuits", value: 31 },
    ],
  },
  supply_type: {
    headings: "Type of Supply",
    attr: "supply_type",
    Alert: "",
    exactNumber: "",
    exactNumber2: "",
    radioQuestion: [],
    options: [
      {
        type: "radio",
        title: "Single Phase",
        value: "single_phase",
      },
      {
        type: "radio",
        title: "3 Phase",
        value: "three_phase",
      },
      { type: "radio", title: "Not Sure", value: "not_sure" },
    ],
  },
  property_area: {
    headings: "Property Area ㎡",
    attr: "property_area",
    type: "select",
    Alert: "",
    exactNumber: "",
    exactNumber2: "",
    radioQuestion: [],
    options: [
      {
        type: "select",
        title: "Area ㎡",
        value: "",
      },
      {
        type: "select",
        title: "Upto 100 ㎡",
        value: 100,
      },
      {
        type: "select",
        title: "Upto 200 ㎡",
        value: 200,
      },
      {
        type: "select",
        title: "Upto 300 ㎡",
        value: 300,
      },
      {
        type: "select",
        title: "Upto 500 ㎡",
        value: 500,
      },
      {
        type: "select",
        title: "Upto 750 ㎡",
        value: 750,
      },
      {
        type: "select",
        title: "Upto 1000 ㎡",
        value: 1000,
      },
      {
        type: "select",
        title: "Upto 1250 ㎡",
        value: 1250,
      },
      {
        type: "select",
        title: "Upto 1500 ㎡",
        value: 1500,
      },
      {
        type: "select",
        title: "Upto 1750 ㎡",
        value: 1750,
      },
      {
        type: "select",
        title: "Upto 2000 ㎡",
        value: 2000,
      },
      {
        type: "select",
        title: "Upto 2500 ㎡",
        value: 2500,
      },
      {
        type: "select",
        title: "Upto 3000 ㎡",
        value: 3000,
      },
      {
        type: "select",
        title: "Upto 3500 ㎡",
        value: 3500,
      },
      {
        type: "select",
        title: "Upto 4000 ㎡",
        value: 4000,
      },
      {
        type: "select",
        title: "Upto 4500 ㎡",
        value: 4500,
      },
      {
        type: "select",
        title: "Upto 5000 ㎡",
        value: 5000,
      },
      {
        type: "select",
        title: "5000+ ㎡",
        value: 50001,
      },
    ],
  },
};

export const services = [
  { name: "Electrical Installation Condition Report (EICR)" },
  { name: "Energy Performance Certificate" },
  { name: "Electrical Portable Appliance Test (PAT)" },
  { name: "Gas Safety Certificate" },
  { name: "Boiler Service" },
  { name: "Boiler Service" },
  { name: "Boiler Service" },
];
