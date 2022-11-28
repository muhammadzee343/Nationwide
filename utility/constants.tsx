import Image from "../public/electrical-1-1024x410-1.jpg";
import Survey from "../public/surveyor-1.jpg";
import Electrical from "../public/electrical-1-1024x410-1.jpg";
import Electrical2 from "../public/eicr7.jpg";
import Certificate from "../public/0001-1-1.jpg";
import Engineer from "../public/Engineer-.jpg";

const images = {
  surveyour: Survey,
  electrical1: Electrical,
  electrical2: Electrical2,
  certificate: Certificate,
  engineer: Engineer,
};

export const LEC = {
  title: "Electrical Installation Condition Report (EICR)",
  subTitle: "From Only £79*",
  points: [
    "Provides a Safety Inspection",
    "Online Order Tracking",
    "Qualified & Registered Electricians",
    "Fast Turnaround",
    "Bulk Quantity Discount Available",
  ],
  btnText: "More About an EICR ",
};

export const EPC = {
  title: "Energy Performance Certificate",
  subTitle: "EPC From Only £35*",
  points: [
    "Nationwide Coverage",
    "Fully Accredited Energy Assessors",
    "24/7 Online Order Tracking",
    "Fast Turnaround",
    "Bulk Quantity Discount Available",
  ],
  btnText: "Get Instant EPC Quote",
};

export const GSC = {
  title: "Gas Safety Certificate",
  subTitle: "From Only £49*",
  points: [
    "Nationwide Coverage",
    "Gas Safe Registered Engineers",
    "24/7 Online Order Tracking",
    "Fast Turnaround",
    "Bulk Quantity Discount Available",
  ],
  btnText: "Get Instant Quote Now",
};

export const BHR = {
  title: "Building Survey & HomeBuyer Reports",
  subTitle: "Nationwide Coverage*",
  points: [
    "Nationwide Coverage",
    "Multiple Services at one place",
    "Compatitive Prices",
    "Fast Turnaround",
    "Bulk Quantity Discount Available",
  ],
  btnText: "Get Instant Quote Now",
};
export const SERVICES = [
  {
    title: "Landlord Electrical",
    certificate: "Certificates",
    slug: { ...LEC },
  },
  {
    title: "Energy Performance",
    certificate: "Certificates",
    slug: { ...EPC },
  },
  { title: "Gas Safety", certificate: "Certificates", slug: { ...GSC } },
  {
    title: "Building Survey &",
    certificate: "HomeBuyer Reports",
    slug: { ...BHR },
  },
];

//Pricing Component
export const bundles = [
  {
    className: "bg-cream",
    content: {
      bundleName: "Service Bundle One",
      price: "129",
      list: [
        "Electrical Portable Appliance Test (PAT)",
        "Electrical Installation Condition Report (EICR)",
      ],
    },
  },
  {
    className: "bg-cream",
    content: {
      bundleName: "Service Bundle Two",
      price: "129",
      list: [
        "Energy Performance Certificate",
        "Electrical Installation Condition Report (EICR)",
      ],
    },
  },
  {
    className: "bg-white",
    content: {
      bundleName: "Service Bundle Three",
      price: "199",
      list: [
        "Gas Safety Certificate",
        "Electrical Portable Appliance Test (PAT)",
        "Electrical Installation Condition Report (EICR)",
      ],
    },
  },
  {
    className: "bg-cream",
    content: {
      bundleName: "Service Bundle Four",
      price: "199",
      list: [
        "Energy Performance Certificate",
        "Gas Safety Certificate",
        "Electrical Installation Condition Report (EICR)",
      ],
    },
  },
];

//Home Services Component
export const homeServices = [
  {
    className: "flex flex-col lg:flex-row",
    content: {
      link: "",
      image: images.surveyour,
      subTitle: "Why Choose",
      title: "Nationwide Surveyors",
      paragraph1:
        "Our Understanding of our customer’s needs, superb level of\n" +
        "                service and cost-effective approach has been vital to our\n" +
        "                success.",
      paragraph2:
        "We have established a nationwide network of qualified\n" +
        "                  professionals to offer a range of services at unbeatable\n" +
        "                  prices. Depending on the location and the services you\n" +
        "                  require, our customers can save up to 40%, when compared to\n" +
        "                  getting the same services booked through local estate agents.\n" +
        "                  Find below some of the frequently ordered services",
    },
  },
  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      link: "More about Domestic and Commercial EICRs ",
      image: images.electrical1,
      subTitle: "WHAT IS AN EICR AND WHO MAY REQUIRE IT?",
      title: "Electrical Installation Condition Report (EICR)",
      paragraph1:
        "Whether it’s a business or a domestic property you rent out; your electrical " +
        "installation should always be covered by an in date Electrical Installation Condition Report, commonly known as EICR.",
      paragraph2:
        "From April-2021, It’s a legal requirement for landlords to provide copy of EICR to their" +
        " existing or new tenants. EICRs may be required for a variety of other purposes including buying, selling or renewal of lease/contract and may have been requested by your solicitors. Home owners can have it carried out to ensure electrical safety within their property.",
    },
  },
  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      link: "MORE ABOUT Energy Performance Certificate ",
      image: images.certificate,
      subTitle: "DOMESTIC AND COMMERCIAL",
      title: "Energy Performance Certificate (EPC)",
      paragraph1:
        "A valid Energy Performance Certificate (EPC) details the current energy " +
        "efficiency of a property with recommendations to further improve property’s energy rating with most cost-effective ways.",
      paragraph2:
        "The Domestic Minimum Energy Efficiency Standard (MEES) Regulations set a minimum energy efficiency level for domestic private rented properties. Landlords can no longer let or continue to let properties covered by the MEES Regulations" +
        " if they have an EPC rating below E, unless they have a valid exemption in place." +
        "A valid EPC is also required for domestic and commercial properties to market for sale or rent.",
    },
  },
  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      link: "MORE ABOUT Gas Safety Certificate",
      image: images.engineer,
      subTitle: "LANDLORD / HOMEOWNER",
      title: "Gas Safety Certificate",
      paragraph1:
        "It’s a legal requirement for landlords to have all gas appliances, pipework, chimneys and flues checked every 12 months to" +
        " make sure the property they’re renting out is safe for their tenants.",
      paragraph2:
        "Once a Gas Safety check has been completed, you will get your Landlord/Homeowner" +
        " Gas Safety Record, also known as Gas Safety Certificate or CP12 Certificate." +
        " You’ll need to provide a copy to your existing tenants within 28 days of the safety check or you’ll need to give one to new renters when they move in.",
    },
  },
  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      link: "MORE ABOUT EICR Remedial Work",
      image: images.electrical2,
      subTitle: "WE ALSO PROVIDE",
      title: "New Electrical Installation and Remedial Work",
      paragraph1: "",
      paragraph2:
        "Whether you require a full house rewire, minor electrical works or simply looking for post EICR electrical remedial work for domestic or commercial property. We would be happy to provide a competitive all-inclusive fixed price quotation for most types of electrical work.",
    },
  },
];

// <img src={image} />
// <img src={require(`../dfgdgdf/dfgffgdf/dfgdfdf/${image}`)} />

// OUR SERVICES
export const ourServices = [
  {
    title: "Domestic & Commercial Certifications",
    list: [
      { text: "Energy Performance Certificate", link: "#" },
      { text: "Commercial EPC", link: "#" },
      { text: "Emergency Light Test Report", link: "#" },
      { text: "Fire Alarm Test Report", link: "#" },
      { text: "Fire Risk Assessment", link: "#" },
    ],
  },
  {
    title: "Gas Safety Certificate",
    list: [
      { text: "Gas Safety Certificate", link: "#" },
      { text: "Boiler Service", link: "#" },
    ],
  },
  {
    title: "Electrical Reports & Remedial Work",
    list: [
      { text: "Electrical Installation Condition Report (EICR)", link: "#" },
      { text: "Electrical Portable Appliance Test (PAT)", link: "#" },
      { text: "EICR Remedial Work", link: "#" },
    ],
  },
  {
    title: "Other Services",
    list: [
      { text: "Floor Plans", link: "#" },
      { text: "Building Surveys", link: "#" },
      { text: "Legionella Risk Assessment", link: "#" },
      { text: "SAP Assessments", link: "#" },
    ],
  },
];

// HOW IT WORKS
export const howItWorks = [
  {
    title: "Place Order Online",
    paragraph:
      "Please select the services required and place order online 24/7." +
      " Our services can be ordered individually or as a combined Bundle" +
      " Package. Prefer to place order over the phone? Please call us FREE at 0800 048 7474.",
  },
  {
    title: "Assessment Survey Booked",
    paragraph:
      "Once you placed order online, our planning team will get in touch with you" +
      " to arrange a suitable date and time to carry out" +
      " the assessment survey for each service ordered, according to your suitability.",
  },
  {
    title: "Certificates Issued",
    paragraph:
      "Certificates / Reports will be issued digitally for each service ordered and sent to you by email, within 48 hours of Assessor’s visit. However," +
      " if it’s urgent, please advise this in your order notes or let us know when booking appointment(s).",
  },
];
