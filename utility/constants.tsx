import Electrical from "../public/electrical-1-1024x410-1.jpg";
import Survey from "../public/surveyor-1.jpg";
import Electrical2 from "../public/eicr7.jpg";
import Certificate from "../public/image27.png";
import Engineer from "../public/image28.png";
import as1 from "../public/image28.png";
import epc from "../public/domesticepc.png";
import epcSurveyor from "../public/epcSurveyor.jpg";
import commercialEpc from "../public/Commercial-epc.jpg";
import commercialEpcRating from "../public/commercialEpcRating.jpg";
import {
  faBarChart,
  faCheckCircle,
  faHeadset,
  faTelevision,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ELight from "../public/Emergency-light.jpg";
import ELightIt from "../public/ELPITc.jpg";
import Fat from "../public/FAT.jpg";
import Fatt from "../public/FATT.png";
import Fra from "../public/FRA.png";
import Fra2 from "../public/FRA2.jpg";
import GasCertificate from "../public/Gas-certificate-1.jpeg";
import Bs from "../public/Boiler-service1.jpg";
import Bs2 from "../public/boiler-service2.jpg";
import Esr from "../public/ESR.jpg";
import Pat1 from "../public/pat1.gif";
import Pat2 from "../public/pat2.jpg";
import Fp1 from "../public/Fp1.jpg";
import Fp2 from "../public/Fp2.jpg";
import HBs1 from "../public/bs1.jpg";
import HBs2 from "../public/bs2.jpg";
import Legion1 from "../public/Legion1.jpg";
import Legion2 from "../public/Legion2.jpg";
import Sap2 from "../public/sap1.jpg";
import Sap1 from "../public/sap2.jpg";
import localFont from "@next/font/local";
import CallBack from "../public/callback.png";
import placeOrder from "../public/Student.png";
import assesment from "../public/Group1398.png";
import certificate from "../public/Group1834.png";
import as2 from "../public/image26.png";
import as3 from "../public/Rectangle308.png";
import as4 from "../public/Rectangle305.png";

// Images for services pages
import deicr_banner_dasktop from "../public/services/electrical-installation-condition-report.jpg";
import deicr_banner_mobile from "../public/services/eicr_image_mobile.jpg";

//EPC Service Page
import epc_banner_desktop from "../public/services/epc_thumb_desktop.jpg";
import epc_banner_mobile from "../public/services/epc_thumb_mobile.jpg";

//commercial epc Service Page
import commercial_epc_banner_desktop from "../public/services/epc-rating-commercial.jpg";
import commercial_epc_banner_mobile from "../public/services/epc-rating-commercial.jpg";


//Emergency Lights Test Report
import eltr_banner_desktop from "../public/services/ELPITc.jpg";
import eltr_banner_mobile from "../public/services/ELPITc.jpg";

//Fire Alarm Test Report
import fatr_banner_desktop from "../public/services/FATR.png";
import fatr_banner_mobile from "../public/services/FATR.png";


//Fire Risk Assessment
import fra_banner_desktop from "../public/services/fire_risk_desktop.jpg";
import fra_banner_mobile from "../public/services/fire_risk_mobile.jpg";

//Landlord Gas Safety
import lgs_banner_desktop from "../public/services/landlord_gas_safety_desktop.jpg";
import lgs_banner_mobile from "../public/services/landlord_gas_safety_mobile.jpg";


//Boiler Service
import bs_banner_desktop from "../public/services/landlord_gas_safety_mobile.jpg";
import bs_banner_mobile from "../public/services/landlord_gas_safety_mobile.jpg";

//Electrical Portable Appliance Test (PAT)
import epat_banner_desktop from "../public/services/epat_desktop.jpg";
import epat_banner_mobile from "../public/services/epat_desktop.jpg";


//EICR Remedial Work
import eicr_work_banner_desktop from "../public/services/eicr_work_desktop.jpg";
import eicr_work_banner_mobile from "../public/services/eicr_work_desktop.jpg";


//Floor Plans
import floor_plan_banner_desktop from "../public/services/floor-plans_desktop.jpg";
import floor_plan_banner_mobile from "../public/services/floor-plans_desktop.jpg";

//Building Surveys
import building_surveys_banner_desktop from "../public/services/building_surveys_desktop.jpg";
import building_surveys_banner_mobile from "../public/services/building_surveys_desktop.jpg";


//Legionella Risk Assessment
import legionella_risk_banner_desktop from "../public/services/legionella_risk_desktop.jpg";
import legionella_risk_banner_mobile from "../public/services/legionella_risk_desktop.jpg";



export const myFont = localFont({
  src: [
    {
      path: "../public/fonts/OpenSans/OpenSans-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/OpenSans/OpenSans-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/OpenSans/OpenSans-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/OpenSans/OpenSans-Bold.ttf",
      weight: "700",
    },
  ],
  fallback: ["Helvetica", "ui-sans-serif"],
});
//APPLICATION IMAGES
const images = {
  surveyour: Survey,
  electrical1: Electrical,
  electrical2: Electrical2,
  certificate: Certificate,
  engineer: Engineer,
  domesticEpc: epc,
  epcSurveyor: epcSurveyor,
  commercialEpc: commercialEpc,
  commercialEpcRating: commercialEpcRating,
  emergencyLight: ELight,
  emergencyLITL: ELightIt,
  fat: Fat,
  fatt: Fatt,
  fra: Fra,
  fra2: Fra2,
  gasCertificate: GasCertificate,
  bs1: Bs,
  bs2: Bs2,
  esr: Esr,
  pat1: Pat1,
  pat2: Pat2,
  fp1: Fp1,
  fp2: Fp2,
  hBs1: HBs1,
  hBs2: HBs2,
  legion1: Legion1,
  legion2: Legion2,
  sap1: Sap1,
  sap2: Sap2,
  callback: CallBack,
  deicr_banner_dasktop: deicr_banner_dasktop,
  deicr_banner_mobile: deicr_banner_mobile,
  epc_banner_desktop: epc_banner_desktop,
  epc_banner_mobile: epc_banner_mobile,
  commercial_epc_banner_desktop: commercial_epc_banner_desktop,
  commercial_epc_banner_mobile: commercial_epc_banner_mobile,
  eltr_banner_desktop:eltr_banner_desktop,
  eltr_banner_mobile: eltr_banner_mobile,
  fatr_banner_desktop: fatr_banner_desktop,
  fatr_banner_mobile: fatr_banner_mobile,
  fra_banner_desktop: fra_banner_desktop,
  fra_banner_mobile: fra_banner_mobile,
  lgs_banner_desktop: lgs_banner_desktop,
  lgs_banner_mobile: lgs_banner_mobile,
  bs_banner_desktop: bs_banner_desktop,
  bs_banner_mobile: bs_banner_mobile,
  epat_banner_desktop: epat_banner_desktop,
  epat_banner_mobile: epat_banner_mobile,
  eicr_work_banner_desktop: eicr_work_banner_desktop,
  eicr_work_banner_mobile: eicr_work_banner_mobile,
  floor_plan_banner_desktop: floor_plan_banner_desktop,
  floor_plan_banner_mobile: floor_plan_banner_mobile,
  building_surveys_banner_desktop: building_surveys_banner_desktop,
  building_surveys_banner_mobile: building_surveys_banner_mobile,
  legionella_risk_banner_desktop: legionella_risk_banner_desktop,
  legionella_risk_banner_mobile: legionella_risk_banner_mobile
 
  
};

export const LEC = {
  title: "Electrical Installation Condition Report (EICR)",
  subTitle: "From Only £79",
  points: [
    "For Landlords, Home Buyers & Sellers",
    "Flexible Availability & Fast Turnaround",
    "Get Instant Quote & Order Online",
    "Qualified & Registered Electricians",
    "Multi-Service Order Discount Available",
  ],
  btnText: "More About an EICR ",
  btnLink: "electrical-installation-condition-report",
};

export const EPC = {
  title: "Energy Performance Certificate",
  subTitle: "EPC From Only £35",
  points: [
    "Nationwide Coverage",
    "Fully Accredited Energy Assessors",
    "24/7 Online Order Tracking",
    "Fast Turnaround",
    "Bulk Quantity Discount Available",
  ],
  btnText: "Get Instant EPC Quote",
  btnLink: "/domestic-epc/",
};

export const GSC = {
  title: "Gas Safety Certificate",
  subTitle: "From Only £49",
  points: [
    "Nationwide Coverage",
    "Gas Safe Registered Engineers",
    "24/7 Online Order Tracking",
    "Fast Turnaround",
    "Bulk Quantity Discount Available",
  ],
  btnText: "Get Instant Quote Now",
  btnLink: "/gas-safety-certificate/",
};

export const BHR = {
  title: "Building Survey & HomeBuyer Reports",
  subTitle: "Nationwide Coverage",
  points: [
    "Homebuyer Reprt (RICS Level 2)",
    "Building Survey (RICS Level 3)",
    "Compatitive Prices",
    "Discount on Multi-Service Order",
  ],
  btnText: "Get Instant Quote Now",
  btnLink: "/building-surveys/",
};

export const SERVICES = [
  {
    title: "Domestic & ",
    certificate: "Commercial EICR",
    slug: { ...LEC },
  },
  {
    title: "Energy Performance ",
    certificate: "Certificate",
    slug: { ...EPC },
  },
  { title: "Gas Safety ", certificate: "Certificate", slug: { ...GSC } },
  {
    title: "Building Survey & ",
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
      service: 1,
      value: [11, 10],
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
      service: 2,
      value: [1, 10],
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
      service: 3,
      value: [7, 10, 11],
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
      service: 4,
      value: [1, 7, 10],
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
      type: "Home",
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
      type: "Home",
      link: "/service/electrical-installation-condition-report",
      image: images.electrical2,
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
      type: "Home",
      link: "service/domestic-epc",
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
      type: "Home",
      link: "service/gas-safety-certificate",
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
      type: "Home",
      link: "MORE ABOUT EICR Remedial Work",
      image: images.electrical1,
      subTitle: "WE ALSO PROVIDE",
      title: "New Electrical Installation and Remedial Work",
      paragraph1: "",
      paragraph2:
        "Whether you require a full house rewire, minor electrical works or simply looking for post EICR electrical remedial work for domestic or commercial property. We would be happy to provide a competitive all-inclusive fixed price quotation for most types of electrical work.",
    },
  },
];

//MEGA MENU LINKS
export const megaMenu = [
  {
    heading: "Domestic & Commercial Certifications",
    links: [
      { title: "Energy Performance Certificate", link: "/domestic-epc" },
      { title: "Commercial EPC", link: "/commercial-epc" },
      {
        title: "Emergency Lights Test Report",
        link: "/emergency-light-test-report",
      },
      { title: "Fire Alarm Test Report", link: "/fire-alarm-test-report" },
      { title: "Fire Risk Assessment", link: "/fire-risk-assessment" },
    ],
  },
  {
    heading: "Gas Safety Certificate",
    links: [
      { title: "Landlord Gas Safety Certificate (CP12)", link: "/gas-safety-certificate" },
      { title: "Boiler Service", link: "/boiler-service" },
    ],
  },
  {
    heading: "Electrical Reports & Remedial Work",
    links: [
      {
        title: "Electrical Installation Condition Report (EICR)",
        link: "/electrical-installation-condition-report",
      },
      {
        title: "Electrical Portable Appliance Test (PAT)",
        link: "/electrical-portable-appliance-test",
      },
      { title: "EICR Remedial Work", link: "/eicr-remedial-work" },
    ],
  },

  {
    heading: "Other Services",
    links: [
      { title: "Floor Plans", link: "/floor-plans" },
      { title: "Building Surveys", link: "/building-surveys" },
      {
        title: "Legionella Risk Assessment",
        link: "/legionella-risk-assessment",
      },
      { title: "SAP Assessments", link: "/sap-assessments-2" },
    ],
  },
];
// OUR SERVICES
export const ourServices = [
  {
    title: "Domestic & Commercial Certifications",
    image: as2,
    list: [
      { text: "Energy Performance Certificate", link: "/domestic-epc" },
      { text: "Commercial EPC", link: "/commercial-epc" },
      {
        text: "Emergency Light Test Report",
        link: "/emergency-light-test-report",
      },
      { text: "Fire Alarm Test Report", link: "/fire-alarm-test-report" },
      { text: "Fire Risk Assessment", link: "/fire-risk-assessment" },
    ],
  },
  {
    title: "Gas Safety Certificate",
    image: as1,
    list: [
      { text: "Gas Safety Certificate", link: "/gas-safety-certificate" },
      { text: "Boiler Service", link: "/boiler-service" },
    ],
  },
  {
    title: "Electrical Reports & Remedial Work",
    image: as4,
    list: [
      {
        text: "Electrical Installation Condition Report (EICR)",
        link: "/electrical-installation-condition-report",
      },
      {
        text: "Electrical Portable Appliance Test (PAT)",
        link: "/electrical-portable-appliance-test",
      },
      { text: "EICR Remedial Work", link: "/eicr-remedial-work" },
    ],
  },
  {
    title: "Other Services",
    image: as3,
    list: [
      { text: "Floor Plans", link: "/floor-plans" },
      { text: "Building Surveys", link: "/building-surveys" },
      {
        text: "Legionella Risk Assessment",
        link: "/legionella-risk-assessment",
      },
      { text: "SAP Assessments", link: "/sap-assessments-2" },
    ],
  },
];
// HOW IT WORKS
export const howItWorks = [
  {
    title: "Place Order Online",
    image: placeOrder,
    paragraph:
      "Please select the services required and place order online 24/7." +
      " Our services can be ordered individually or as a combined Bundle" +
      " Package. Prefer to place order over the phone? Please call us FREE at 0800 048 7474.",
  },
  {
    title: "Assessment Survey Booked",
    image: assesment,
    paragraph:
      "Once you placed order online, our customer support team will get in touch with you" +
      " to arrange a suitable date and time to carry out" +
      " the assessment survey for each service ordered, according to your suitability.",
  },
  {
    title: "Certificates Issued",
    image: certificate,
    paragraph:
      "Certificates will be issued digitally for each service ordered and sent to you by email, within 48 hours of Assessor’s visit. Being an online customer," +
      " you will also be able to download your certificates from your online account with us.",
  },
];
// Services
export const service = [
  //Energy Performance Certificate
  {
    id: 1,
    title: "Get an EPC from £35 only | Energy Performance Certificate",
    bannerTitle: "Energy Performance Certificate",
    bannerImage: images.epc_banner_desktop,
    bannerImageMobile: images.epc_banner_mobile,
    servicesDec: [
      "For Landlords, Home Buyers & Sellers", 
      "For Domestic & Commercial Properties", 
      "Flexible Availability & Fast Turnaround", 
      "Instant Quotes & Nationwide Coverage", 
      "Order Online or Over the Phone", 
      "Prefer to Talk, Call Us 0800 048 7474",
    ],
    metaData: {
      description:
        "Nationwide Surveyors offer all types of Landlord Certifications &amp; reports for domestic and commercial properties at competitive prices with Nationwide Coverage.",
      keywords: "Load Removal",
    },
    certificate: "domestic-epc",
    content: [
      {
        className: "flex flex-col lg:flex-row",
        type: "Service",
        image: images.domesticEpc,
        heading: "EPC Explained",
        content:
          "<div>\n" +
          "<p>The Government is complying with the Energy Performance of Building Directive (EPBD) with the introduction of the Energy Performance Certificate. The EPC shows a record of the energy efficiency levels and CO2 emissions of a building, by using a standard table from A to G (A being very efficient, G being very inefficient).</p>\n" +
          "</div>",
      },
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.epcSurveyor,
        heading: "How an EPC assessment is carried out?",
        content:
          "<p>An energy survey is performed by a qualified energy assessor who visits the property and examines key items within the premises such as loft insulation, domestic boiler, hot water tank, radiators, windows for double glazing, etc.</p>" +
          "<br/><p>Once this information is obtained it is then placed into a software programme which carries out and calculates the level of energy efficiency and CO2 emissions and advises us on the best measures in improving the energy performance of a property with an estimated cost and savings.</p>",
      },
    ],
    faq: [
      {
        title: "Who require an EPC?",
        description: [
          {
            para1:
              "As of the 21st May 2010, if you decide to place your property on themarket for sale or rent in the UK you will need to purchase an EPC.This includes both residential and commercial properties. SinceApril 2018 it is also a legal requirement for the EPC rating to be aminimium of an ‘E’ rating in order for that property to be let to atenant.",
          },
        ],
      },
      {
        title: "Who is responsible for obtaining an EPC?",
        description: [
          {
            para1:
              "When you are selling or renting your property, you, as the seller or landlord must provide the EPC. The certificate should be given to the prospective buyer or tenant prior to entering into a sale or lease agreement.",
          },
          {
            para2:
              "With a new build it is the responsibility of the person carrying out the work. They must provide the owner with the certificate and inform the Building Control Officer or Approved Inspector that this has been completed within the specified time.",
          },
          {
            para3:
              "The owner/ landlord will have to pay for this survey and we offer extremely competitive prices.",
          },
          {
            para4:
              "The survey is designed to be a non-invasive visual inspection and all information is to be gathered whilst on site. If there are any measures that cannot be seen i.e. cavity wall insulation, we will require the associated documentation to include this within our certificate.",
          },
        ],
      },
      {
        title: "Can I market or rent the property before I receive the EPC?",
        description: [
          {
            para1:
              "As long as you have already ordered and paid for an EPC then you are permitted to put your property on the market or advertise it for renting purposes. We will make sure you receive confirmation of your order immediately after booking the EPC.",
          },
        ],
      },
      {
        title: " Can An EPC Fail?",
        description: [
          {
            para1:
              "When an EPC has been completed the property will get a rating between A and G. If you are selling the property then you cannot get a fail.",
          },
          {
            para2:
              "Since April 2018 it has been a legal requirement for the EPC rating to be at least an E rating if you are renting the property to a tenant (unless you have a suitable exemption). For more information on this please call 0800 048 7474.",
          },
        ],
      },
      {
        title: "How do I order my EPC?",
        description: [
          {
            para1:
              "You can easily place your order for the EPC via this website by clicking here.",
          },
          {
            para2:
              "Should you have any questions or would rather place an order over the telephone you can call our team on 0800 048 7474. Our opening times are Monday – Friday 9am – 6pm and Saturday 10am to 2pm.",
          },
        ],
      },
    ],
  },

  //Commercial EPC
  {
    id: 2,
    title: "Get Commercial EPC For as Little as £150",
    bannerTitle: "Commercial EPC",
    bannerImage: images.commercial_epc_banner_desktop,
    bannerImageMobile: images.commercial_epc_banner_mobile,
    servicesDec: [
      "For Landlords, Home Buyers & Sellers",
      "For Domestic & Commercial Properties",
      "Flexible Availability & Fast Turnaround",
      "Instant Quotes & Nationwide Coverage",
      "Order Online or Over the Phone",
      "Prefer to Talk, Call Us 0800 048 7474",
    ],
    metaData: {
      description:
          "Nationwide Surveyors offer all types of Landlord Certifications &amp; reports for domestic and commercial properties at competitive prices with Nationwide Coverage.",
      keywords: "Load Removal",
    },
    certificate: "commercial-epc",
    content: [
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.commercialEpc,
        heading: "Commercial EPCs",
        content:
          "<p>Any property that is not considered to be a dwelling such as shops, hotels and industrial units will require a Commercial EPC. Our competitive pricing means that we have many regular clients ordering consistently to ensure compliance of their portfolios.</p>",
      },
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.commercialEpcRating,
        heading: "Who Needs a Commercial EPC?",
        content:
          "<p>Before a building is put on the market the seller or landlord must commission an EPC for the building, which must be completed before the transaction can take place. We have expertly skilled level 3, 4 and 5 commercial energy assessors throughout the UK to cover the smallest coffee shops through to the largest shopping centers.</p>",
      },
    ],
    faq: [
      {
        title: "Who require an EPC?",
        description: [
          {
            para1:
              "As of the 21st May 2010, if you decide to place your property on themarket for sale or rent in the UK you will need to purchase an EPC.This includes both residential and commercial properties. SinceApril 2018 it is also a legal requirement for the EPC rating to be aminimium of an ‘E’ rating in order for that property to be let to atenant.",
          },
        ],
      },
      {
        title: "Who is responsible for obtaining an EPC?",
        description: [
          {
            para1:
              "When you are selling or renting your property, you, as the seller or landlord must provide the EPC. The certificate should be given to the prospective buyer or tenant prior to entering into a sale or lease agreement.",
          },
          {
            para2:
              "With a new build it is the responsibility of the person carrying out the work. They must provide the owner with the certificate and inform the Building Control Officer or Approved Inspector that this has been completed within the specified time.",
          },
          {
            para3:
              "The owner/ landlord will have to pay for this survey and we offer extremely competitive prices.",
          },
          {
            para4:
              "The survey is designed to be a non-invasive visual inspection and all information is to be gathered whilst on site. If there are any measures that cannot be seen i.e. cavity wall insulation, we will require the associated documentation to include this within our certificate.",
          },
        ],
      },
      {
        title: "Can I market or rent the property before I receive the EPC?",
        description: [
          {
            para1:
              "As long as you have already ordered and paid for an EPC then you are permitted to put your property on the market or advertise it for renting purposes. We will make sure you receive confirmation of your order immediately after booking the EPC.",
          },
        ],
      },
      {
        title: " Can An EPC Fail?",
        description: [
          {
            para1:
              "When an EPC has been completed the property will get a rating between A and G. If you are selling the property then you cannot get a fail.",
          },
          {
            para2:
              "Since April 2018 it has been a legal requirement for the EPC rating to be at least an E rating if you are renting the property to a tenant (unless you have a suitable exemption). For more information on this please call 0800 048 7474.",
          },
        ],
      },
      {
        title: "How do I order my EPC?",
        description: [
          {
            para1:
              "You can easily place your order for the EPC via this website by clicking here.",
          },
          {
            para2:
              "Should you have any questions or would rather place an order over the telephone you can call our team on 0800 048 7474. Our opening times are Monday – Friday 9am – 6pm and Saturday 10am to 2pm.",
          },
        ],
      },
    ],
  },

  //Emergency Lights Test Report

  {
    id: 3,
    title: "Emergency Lights Test Certificate | Become BS5266 Compliant",
    bannerTitle: "Emergency Lights Test Report",
    bannerImage: images.eltr_banner_desktop,
    bannerImageMobile: images.eltr_banner_mobile,
    servicesDec: [
      "For Landlords, Home Buyers & Sellers",
      "For Domestic & Commercial Properties",
      "Flexible Availability & Fast Turnaround",
      "Instant Quotes & Nationwide Coverage",
      "Order Online or Over the Phone",
      "Prefer to Talk, Call Us 0800 048 7474",
    ],
    metaData: {
      description:
          "Nationwide Surveyors offer all types of Landlord Certifications &amp; reports for domestic and commercial properties at competitive prices with Nationwide Coverage.",
      keywords: "Load Removal",
    },
    certificate: "emergency-light-test-report",
    content: [
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.emergencyLITL,
        heading: "Emergency Lights Testing",
        content:
          "<p>It’s a legal requirement for all commercial and industrial buildings to have emergency lighting system installed and maintained with emergency light testing conducted on a regular intervals by a competent person, as this will ensure a safe passage in case of an emergy evacuation.</p>" +
          "<br/><p>Emergency light testing is therefore a vital part of this process, it allows for proper maintenance of the system which in turn makes certain that the emergency light system itself is fit for purpose. Importantly, this is a statutory requirement and most insurance companies require it, not only this but your life, the lives of staff and employees could depend on you, having had emergency light testing when needed.</p>",
      },
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.emergencyLight,
        heading: "What Is Inspected during Emergency Lights Testing?",
        content:
          "<ul class='list-disc pl-4'>\n" +
          "<li>Luminaire duration testing</li>\n" +
          "<li>Cleaning of diffusers</li>\n" +
          "<li>Battery charging functional check</li>\n" +
          "<li>Labelling of luminaires</li>\n" +
          "<li>Supply of test results</li>\n" +
          "<li>Advice on any improvements required</li>\n" +
          "<li>Certification</li>\n" +
          "<li>General Information on Emergency Lighting</li>\n" +
          "</ul>",
      },
    ],
    faq: [
      {
        title: "Who require an EPC?",
        description: [
          {
            para1:
              "As of the 21st May 2010, if you decide to place your property on themarket for sale or rent in the UK you will need to purchase an EPC.This includes both residential and commercial properties. SinceApril 2018 it is also a legal requirement for the EPC rating to be aminimium of an ‘E’ rating in order for that property to be let to atenant.",
          },
        ],
      },
      {
        title: "Who is responsible for obtaining an EPC?",
        description: [
          {
            para1:
              "When you are selling or renting your property, you, as the seller or landlord must provide the EPC. The certificate should be given to the prospective buyer or tenant prior to entering into a sale or lease agreement.",
          },
          {
            para2:
              "With a new build it is the responsibility of the person carrying out the work. They must provide the owner with the certificate and inform the Building Control Officer or Approved Inspector that this has been completed within the specified time.",
          },
          {
            para3:
              "The owner/ landlord will have to pay for this survey and we offer extremely competitive prices.",
          },
          {
            para4:
              "The survey is designed to be a non-invasive visual inspection and all information is to be gathered whilst on site. If there are any measures that cannot be seen i.e. cavity wall insulation, we will require the associated documentation to include this within our certificate.",
          },
        ],
      },
      {
        title: "Can I market or rent the property before I receive the EPC?",
        description: [
          {
            para1:
              "As long as you have already ordered and paid for an EPC then you are permitted to put your property on the market or advertise it for renting purposes. We will make sure you receive confirmation of your order immediately after booking the EPC.",
          },
        ],
      },
      {
        title: " Can An EPC Fail?",
        description: [
          {
            para1:
              "When an EPC has been completed the property will get a rating between A and G. If you are selling the property then you cannot get a fail.",
          },
          {
            para2:
              "Since April 2018 it has been a legal requirement for the EPC rating to be at least an E rating if you are renting the property to a tenant (unless you have a suitable exemption). For more information on this please call 0800 048 7474.",
          },
        ],
      },
      {
        title: "How do I order my EPC?",
        description: [
          {
            para1:
              "You can easily place your order for the EPC via this website by clicking here.",
          },
          {
            para2:
              "Should you have any questions or would rather place an order over the telephone you can call our team on 0800 048 7474. Our opening times are Monday – Friday 9am – 6pm and Saturday 10am to 2pm.",
          },
        ],
      },
    ],
  },

  //Fire Alarm Test Report
  {
    id: 4,
    title: "Fire Alarm Testing BS5839",
    bannerTitle: "Fire Alarm Test Report",
    bannerImage: images.fatr_banner_desktop,
    bannerImageMobile: images.fatr_banner_mobile,
    servicesDec: [
      "For Landlords, Home Buyers & Sellers",
      "For Domestic & Commercial Properties",
      "Flexible Availability & Fast Turnaround",
      "Instant Quotes & Nationwide Coverage",
      "Order Online or Over the Phone",
      "Prefer to Talk, Call Us 0800 048 7474",
    ],
    metaData: {
      description:
          "Nationwide Surveyors offer all types of Landlord Certifications &amp; reports for domestic and commercial properties at competitive prices with Nationwide Coverage.",
      keywords: "Load Removal",
    },
    certificate: "fire-alarm-test-report",
    content: [
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.fatt,
        heading: "Fire Alarm Testing",
        content:
          "<p>Landlords, Employers and Homeowners all need to be careful when they are dealing with their building’s" +
          " systems. It is important that your fire alarm system is properly installed, maintained and tested regularly to ensure it is working to full capacity.</p> <br/>" +
          "<p>Following are some of the reasons why you should get you fire alarm system serviced and tested:</p>" +
          "<ul class='list-disc pl-4'>\n" +
          "<li>To comply with British Standard Health &amp; Safety regulations.</li>\n" +
          "<li>To avoid any problems with insurance claims should they arise.</li>\n" +
          "<li>Above all, for the safety of yourself, tenants, employees and your customers</li>\n" +
          "</ul>",
      },
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.fat,
        heading: "What is covered in a Fire Alarm Test Visit?",
        content:
          "<ul class='list-disc pl-4 leading-6'>\n" +
          "<li>Carrying out core battery and devices test</li>\n" +
          "<li>Checking fire alarm panel for faults</li>\n" +
          "<li>Completing a full sounder test</li>\n" +
          "<li>Noting all recommendations in fire log book</li>\n" +
          "<li>Recording works &amp; parts used in fire log book</li>\n" +
          "</ul>",
      },
    ],
    faq: [
      {
        title: "Who require an EPC?",
        description: [
          {
            para1:
              "As of the 21st May 2010, if you decide to place your property on themarket for sale or rent in the UK you will need to purchase an EPC.This includes both residential and commercial properties. SinceApril 2018 it is also a legal requirement for the EPC rating to be aminimium of an ‘E’ rating in order for that property to be let to atenant.",
          },
        ],
      },
      {
        title: "Who is responsible for obtaining an EPC?",
        description: [
          {
            para1:
              "When you are selling or renting your property, you, as the seller or landlord must provide the EPC. The certificate should be given to the prospective buyer or tenant prior to entering into a sale or lease agreement.",
          },
          {
            para2:
              "With a new build it is the responsibility of the person carrying out the work. They must provide the owner with the certificate and inform the Building Control Officer or Approved Inspector that this has been completed within the specified time.",
          },
          {
            para3:
              "The owner/ landlord will have to pay for this survey and we offer extremely competitive prices.",
          },
          {
            para4:
              "The survey is designed to be a non-invasive visual inspection and all information is to be gathered whilst on site. If there are any measures that cannot be seen i.e. cavity wall insulation, we will require the associated documentation to include this within our certificate.",
          },
        ],
      },
      {
        title: "Can I market or rent the property before I receive the EPC?",
        description: [
          {
            para1:
              "As long as you have already ordered and paid for an EPC then you are permitted to put your property on the market or advertise it for renting purposes. We will make sure you receive confirmation of your order immediately after booking the EPC.",
          },
        ],
      },
      {
        title: " Can An EPC Fail?",
        description: [
          {
            para1:
              "When an EPC has been completed the property will get a rating between A and G. If you are selling the property then you cannot get a fail.",
          },
          {
            para2:
              "Since April 2018 it has been a legal requirement for the EPC rating to be at least an E rating if you are renting the property to a tenant (unless you have a suitable exemption). For more information on this please call 0800 048 7474.",
          },
        ],
      },
      {
        title: "How do I order my EPC?",
        description: [
          {
            para1:
              "You can easily place your order for the EPC via this website by clicking here.",
          },
          {
            para2:
              "Should you have any questions or would rather place an order over the telephone you can call our team on 0800 048 7474. Our opening times are Monday – Friday 9am – 6pm and Saturday 10am to 2pm.",
          },
        ],
      },
    ],
  },

  //Fire Risk Assessment
  {
    id: 5,
    title: "Fire Risk Assessment",
    bannerTitle: "Fire Risk Assessment",
    bannerImage: images.fra_banner_desktop,
    bannerImageMobile: images.fra_banner_mobile,
    servicesDec: [
      "For Landlords, Home Buyers & Sellers",
      "For Domestic & Commercial Properties",
      "Flexible Availability & Fast Turnaround",
      "Instant Quotes & Nationwide Coverage",
      "Order Online or Over the Phone",
      "Prefer to Talk, Call Us 0800 048 7474",
    ],
    metaData: {
      description:
          "Nationwide Surveyors offer all types of Landlord Certifications &amp; reports for domestic and commercial properties at competitive prices with Nationwide Coverage.",
      keywords: "Load Removal",
    },
    certificate: "fire-risk-assessment",
    content: [
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.fra,
        heading: "Fire Safety Risk Assesment",
        content:
          "<p>Whether you are managing an HMO, Medical Practice, Care Home, Warehouse, Shop or an Office building," +
          " we want to give your organisation peace of mind when dealing with your legal obligation to have a compliant" +
          " Fire Risk Assesment in place. Our qualified Fire Risk Assessors are available across the country to carry out" +
          " comprehensive Assemssents and provide you with an easy to understand report that sets out clearly what" +
          " actions you need to take.</p>",
      },
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.fra2,
        heading: "What does a Fire Safety Risk Assessment Include?",
        content:
          "<p class='mb-1'>A typical Fire Safety Risk Assesment covers:</p>" +
          "<ul class='list-disc pl-4 leading-6'>\n" +
          "<li>Building Occupancy &amp; Persons at Risk</li>\n" +
          "<li>Means of Escape and Structural Fire Protection</li>\n" +
          "<li>Emergency Lighting</li>\n" +
          "<li>Fire Detection &amp; Warning Systems</li>\n" +
          "<li>Fire Safety Signs &amp; Notices</li>\n" +
          "<li>Fire Fighting &amp; Suppression Systems</li>\n" +
          "<li>Evaluation of Other Risks within the Premises</li>\n" +
          "<li>Planning and Training for Fire Emergencies</li>\n" +
          "<li>Significant Findings Action Plan</li>\n" +
          "</ul>",
      },
    ],
    faq: [
      {
        title: "Who require an EPC?",
        description: [
          {
            para1:
              "As of the 21st May 2010, if you decide to place your property on themarket for sale or rent in the UK you will need to purchase an EPC.This includes both residential and commercial properties. SinceApril 2018 it is also a legal requirement for the EPC rating to be aminimium of an ‘E’ rating in order for that property to be let to atenant.",
          },
        ],
      },
      {
        title: "Who is responsible for obtaining an EPC?",
        description: [
          {
            para1:
              "When you are selling or renting your property, you, as the seller or landlord must provide the EPC. The certificate should be given to the prospective buyer or tenant prior to entering into a sale or lease agreement.",
          },
          {
            para2:
              "With a new build it is the responsibility of the person carrying out the work. They must provide the owner with the certificate and inform the Building Control Officer or Approved Inspector that this has been completed within the specified time.",
          },
          {
            para3:
              "The owner/ landlord will have to pay for this survey and we offer extremely competitive prices.",
          },
          {
            para4:
              "The survey is designed to be a non-invasive visual inspection and all information is to be gathered whilst on site. If there are any measures that cannot be seen i.e. cavity wall insulation, we will require the associated documentation to include this within our certificate.",
          },
        ],
      },
      {
        title: "Can I market or rent the property before I receive the EPC?",
        description: [
          {
            para1:
              "As long as you have already ordered and paid for an EPC then you are permitted to put your property on the market or advertise it for renting purposes. We will make sure you receive confirmation of your order immediately after booking the EPC.",
          },
        ],
      },
      {
        title: " Can An EPC Fail?",
        description: [
          {
            para1:
              "When an EPC has been completed the property will get a rating between A and G. If you are selling the property then you cannot get a fail.",
          },
          {
            para2:
              "Since April 2018 it has been a legal requirement for the EPC rating to be at least an E rating if you are renting the property to a tenant (unless you have a suitable exemption). For more information on this please call 0800 048 7474.",
          },
        ],
      },
      {
        title: "How do I order my EPC?",
        description: [
          {
            para1:
              "You can easily place your order for the EPC via this website by clicking here.",
          },
          {
            para2:
              "Should you have any questions or would rather place an order over the telephone you can call our team on 0800 048 7474. Our opening times are Monday – Friday 9am – 6pm and Saturday 10am to 2pm.",
          },
        ],
      },
    ],
  },

  //Gas Safety Certificate
  {
    id: 7,
    title: "Gas Safety Certificate for Landlords from £49 Only",
    bannerTitle: "Landlord Gas Safety Certificate (CP12)",
    bannerImage: images.lgs_banner_desktop,
    bannerImageMobile: images.lgs_banner_mobile,
    servicesDec: [
      "Gas Safe Registered Engineers",
      "Flexible Availability & Nationwide Service",
      "Gas Safety Certificates Offered for Domestic and Commercial Properties",
      "Get Instant Quote & Order Online",
      "Multi-Service Order Discount Available",
      "<strong>Prefer to Talk, Call Us Free <a class='phone-red' href=\"tel:08000487474\">0800 048 7474</a></strong>",
    ],
    metaData: {
      description:
          "Nationwide Surveyors offer all types of Landlord Certifications &amp; reports for domestic and commercial properties at competitive prices with Nationwide Coverage.",
      keywords: "Load Removal",
    },
    certificate: "gas-safety-certificate",
    content: [
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.gasCertificate,
        heading: "Gas Safety Certificate for Landlords",
        content:
          "<p>Are you a landlord? Then you are legally obligated to have a Gas Safety check done every year. landlords" +
          " are also required to have their gas appliances serviced regularly to make sure they’re efficient and safe." +
          " It’s the law, as stated in the <a class='hover:text-lime ease-in duration-100' href='http://www.legislation.gov.uk/uksi/1998/2451/contents/made?_ga=2.57176426.1191280566.1669616964-1647189842.1667901178' target='_blank' rel='noopener noreferrer'>Gas Safety (Installation and Use) Regulations 1998</a></p>",
      },
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.engineer,
        heading: "Gas safety certificates and laws explained",
        content:
          "<p class='mb-2'>It’s a legal requirement for landlords to have all gas appliances, pipework, chimneys and flues" +
          " checked every 12 months to make sure the property they’re renting out is safe for their tenants.</p>" +
          "<p class='mb-2'>Once this check has been completed, you will get your Gas Safety Certificate also known as CP12" +
          " Certificate. You’ll need to provide a copy to your tenants within 28 days and you’ll need to give one" +
          " to new renters when they move in.</p>" +
          "<p class='mb-2'>Make sure you keep hold of old certificates as CP12s need to be kept for at least two years.</p>" +
          "<p class='mb-2'><span class=''><span class=''>&nbsp;</span></span></p>",
      },
    ],
    faq: [
      {
        title: "Who require an EPC?",
        description: [
          {
            para1:
              "As of the 21st May 2010, if you decide to place your property on themarket for sale or rent in the UK you will need to purchase an EPC.This includes both residential and commercial properties. SinceApril 2018 it is also a legal requirement for the EPC rating to be aminimium of an ‘E’ rating in order for that property to be let to atenant.",
          },
        ],
      },
      {
        title: "Who is responsible for obtaining an EPC?",
        description: [
          {
            para1:
              "When you are selling or renting your property, you, as the seller or landlord must provide the EPC. The certificate should be given to the prospective buyer or tenant prior to entering into a sale or lease agreement.",
          },
          {
            para2:
              "With a new build it is the responsibility of the person carrying out the work. They must provide the owner with the certificate and inform the Building Control Officer or Approved Inspector that this has been completed within the specified time.",
          },
          {
            para3:
              "The owner/ landlord will have to pay for this survey and we offer extremely competitive prices.",
          },
          {
            para4:
              "The survey is designed to be a non-invasive visual inspection and all information is to be gathered whilst on site. If there are any measures that cannot be seen i.e. cavity wall insulation, we will require the associated documentation to include this within our certificate.",
          },
        ],
      },
      {
        title: "Can I market or rent the property before I receive the EPC?",
        description: [
          {
            para1:
              "As long as you have already ordered and paid for an EPC then you are permitted to put your property on the market or advertise it for renting purposes. We will make sure you receive confirmation of your order immediately after booking the EPC.",
          },
        ],
      },
      {
        title: " Can An EPC Fail?",
        description: [
          {
            para1:
              "When an EPC has been completed the property will get a rating between A and G. If you are selling the property then you cannot get a fail.",
          },
          {
            para2:
              "Since April 2018 it has been a legal requirement for the EPC rating to be at least an E rating if you are renting the property to a tenant (unless you have a suitable exemption). For more information on this please call 0800 048 7474.",
          },
        ],
      },
      {
        title: "How do I order my EPC?",
        description: [
          {
            para1:
              "You can easily place your order for the EPC via this website by clicking here.",
          },
          {
            para2:
              "Should you have any questions or would rather place an order over the telephone you can call our team on 0800 048 7474. Our opening times are Monday – Friday 9am – 6pm and Saturday 10am to 2pm.",
          },
        ],
      },
    ],
  },

  //Boiler Service
  {
    id: 8,
    title: "Boiler Service | Completed by our Gas Safe Registered Engineers only",
    bannerTitle: "Boiler Service",
    bannerImage: images.bs_banner_desktop,
    bannerImageMobile: images.bs_banner_mobile,
    servicesDec: [
      "For Landlords, Home Buyers & Sellers",
      "For Domestic & Commercial Properties",
      "Flexible Availability & Fast Turnaround",
      "Instant Quotes & Nationwide Coverage",
      "Order Online or Over the Phone",
      "Prefer to Talk, Call Us 0800 048 7474",
    ],
    metaData: {
      description:
          "Nationwide Surveyors offer all types of Landlord Certifications &amp; reports for domestic and commercial properties at competitive prices with Nationwide Coverage.",
      keywords: "Load Removal",
    },
    certificate: "boiler-service",
    content: [
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.bs1,
        heading: "Boiler Service",
        content:
          "<p>Our UK wide network of Gas Safe Registered Engineers can complete boiler services in a timely and efficient manner.</p> <br/>" +
          "<p>A boiler service is the best way to ensure your boiler doesn’t unexpectedly let you down or fall out of " +
          "warranty. If you know your boiler needs servicing, please place your order online and leave rest with us.</p>",
      },
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.bs2,
        heading: "What to Expect in a Boiler Service",
        content: `
        <ul class='list-disc pl-4 leading-7'>
          <li>A pre-service check and fault analysis.</li>
          <li>
            Check installation and positioning comply with building regulations
          </li>
          <li>
            Check installation and positioning comply with gas safe regulations
          </li>
          <li>
            Installation and positioning complies to installation &amp; British
            standards
          </li>
          <li>
            Removal of outer casing &amp;Inspection of main internal components
            (electrodes, fans etc)
          </li>
          <li>
            Inspection of electrics, pipework (water &amp; gas), joints and flue
          </li>
          <li>A gas rate test to ensure gas usage is correct</li>
          <li>Gas flue analysis</li>
          <li class='mb-3'>Service certification paperwork</li>

        </ul>
      `,
      },
    ],
    faq: [
      {
        title: "Who require an EPC?",
        description: [
          {
            para1:
              "As of the 21st May 2010, if you decide to place your property on themarket for sale or rent in the UK you will need to purchase an EPC.This includes both residential and commercial properties. SinceApril 2018 it is also a legal requirement for the EPC rating to be aminimium of an ‘E’ rating in order for that property to be let to atenant.",
          },
        ],
      },
      {
        title: "Who is responsible for obtaining an EPC?",
        description: [
          {
            para1:
              "When you are selling or renting your property, you, as the seller or landlord must provide the EPC. The certificate should be given to the prospective buyer or tenant prior to entering into a sale or lease agreement.",
          },
          {
            para2:
              "With a new build it is the responsibility of the person carrying out the work. They must provide the owner with the certificate and inform the Building Control Officer or Approved Inspector that this has been completed within the specified time.",
          },
          {
            para3:
              "The owner/ landlord will have to pay for this survey and we offer extremely competitive prices.",
          },
          {
            para4:
              "The survey is designed to be a non-invasive visual inspection and all information is to be gathered whilst on site. If there are any measures that cannot be seen i.e. cavity wall insulation, we will require the associated documentation to include this within our certificate.",
          },
        ],
      },
      {
        title: "Can I market or rent the property before I receive the EPC?",
        description: [
          {
            para1:
              "As long as you have already ordered and paid for an EPC then you are permitted to put your property on the market or advertise it for renting purposes. We will make sure you receive confirmation of your order immediately after booking the EPC.",
          },
        ],
      },
      {
        title: " Can An EPC Fail?",
        description: [
          {
            para1:
              "When an EPC has been completed the property will get a rating between A and G. If you are selling the property then you cannot get a fail.",
          },
          {
            para2:
              "Since April 2018 it has been a legal requirement for the EPC rating to be at least an E rating if you are renting the property to a tenant (unless you have a suitable exemption). For more information on this please call 0800 048 7474.",
          },
        ],
      },
      {
        title: "How do I order my EPC?",
        description: [
          {
            para1:
              "You can easily place your order for the EPC via this website by clicking here.",
          },
          {
            para2:
              "Should you have any questions or would rather place an order over the telephone you can call our team on 0800 048 7474. Our opening times are Monday – Friday 9am – 6pm and Saturday 10am to 2pm.",
          },
        ],
      },
    ],
  },

  //Electrical Installation Condition Report (EICR)
  {
    id: 10,
    title: "Landlord EICR Certificate | Electrical Safety Check & Inspection",
    bannerTitle: "Electrical Installation Condition Report (EICR)",
    bannerImage: images.deicr_banner_dasktop,
    bannerImageMobile: images.deicr_banner_mobile,
    servicesDec: [
      "EICR For Landlords, Home Buyers & Sellers",
      "EICR For Domestic & Commercial Properties",
      "Flexible Availability & Nationwide Service",
      "Get Instant Quote & Order Online",
      "Multi-Service Order Discount Available",
      "<strong>Prefer to Talk, Call Us Free <a class='phone-red' href=\"tel:08000487474\">0800 048 7474</a></strong>",
    ],
    metaData: {
      description:
          "Nationwide Surveyors offer all types of Landlord Certifications &amp; reports for domestic and commercial properties at competitive prices with Nationwide Coverage.",
      keywords: "Load Removal",
    },
    certificate: "electrical-installation-condition-report",
    content: [
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.esr,
        heading: "What is an EICR Certificate?",
        content:
          "<p>An EICR, or Electrical Installation Condition Report, checks whether your property’s wiring and electrics are safe. It is also known as Landlord Safety Test, Electrical Safety Certificate or the Homebuyer’s Test.</p> <br/>" +
          "<p>Whether it’s a business or a domestic property you rent out; your electrical installation should always be covered by an in date EICR.</p> <br/>"+
          "<p>To make sure your home is safe, we recommend you have an EICR every 10 years. If you rent out a property, you should have one every five years, a sooner re-inspection may be required if specified in the most recent report or for certain commercial properties.</p>",
      },
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: '',
        heading: "What Happens During an EICR?",
        content:
          "<p>During an EICR, the Fuse Board (Consumer Unit), wiring and electrical accessories are inspected and tested for faults or deviations from the Wiring Standards. Throughout the test, the following will be inspected and tested:</p> <br/>" +
          "<p><ul class=\"list-disc list-inside\">" +
            "<li>The adequacy of the main earthing and bonding(s).</li>" +
            "<li>Devices for protection against fire and electric shock.</li>" +
            "<li>Any damage or wear and tear that might affect the safety of the property’s inhabitants.</li>" +
            "<li>Identification of any damaged electrical fittings and accessories.</li>" +
            "<li>Identification of any exposed live wires that could cause a fire or injury.</li>" +
            "</ul></p>",
      },
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: '',//images.electrical2
        heading: "What Does It Means For Landlords?",
        content:
            "<p>From April-2021, It’s a legal requirement for landlords to provide copy of EICR to their existing or new tenants.</p> <br/>" +
            "<p>As a landlord, you’re responsible for the safety of the electrics throughout the property – this includes the installation itself and any electrical appliances you’ve provided. You’ll need to make sure these are safe when a new tenant moves in and maintained for the duration of their tenancy.</p> <br/>" +
            "<p>But if you don’t, you could face fines of up to £30,000 and your insurance could be invalidated. Banning orders may also be brought for serious or repeated&nbsp;offences.</p>",
      },
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: '',//images.electrical2
        heading: "Do I Need an EICR When Buying or Selling?",
        content:

            "<p>EICRs may be required for a variety of purposes including buying, selling or renewal of lease/rental agreement and may have been requested by your solicitors.</p><br/>" +
            "<p>Building Surveyors may recommend their clients to obtain an upto date EICR in thier Building Survey or HomeBuyer Report, based on their overall observation of the state of electrical system in a property.</p><br/>" +
            "<p>Homeowners are recommended to have it carried out at-lease once every 10 years to ensure electrical safety within their property.</p>",
      },
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: '',//images.electrical2
        heading: "How Do I Book an EICR - Electrical Safety Certificate?",
        content:
            "<p>We’re here to help keep your property safe for you and your tenants. Order your EICR-Electrical Safety Certificate online or over the phone.</p><br/>" +
            "<ul class=\"list-disc list-inside\">" +
            "<li>If you are a landlord, simply provide us contact details of your tenants or property agent and we can coordinate directly with them to organise suitable appointment(s) according their earliest availability and keep you updated by automated emails.</li>" +
            "<li>If you are buyer or seller, simply provide us with vendor’s or property agent’s contact details and leave it to us to coordinate and book suitable appointment(s) as per vendor’s/agent’s earliest availability.</li>" +
            "<li>All the report(s)/certificate(s) are then shared only with yourself digitally via your email.</li>" +
            "</ul>" +
            "<p><strong>Call us free at <span style=\"color: #ff0000;\">0800 048 7474</span> to discuss a quotation and book. Alternately&nbsp; <a href=\"https://nationwide-surveyors.org.uk/order-now/\">Get Instant Quote Here and Order Online.</a></strong></p> <br/>",
      },
    ],
    faq: [
      {
        title: "Who require an EPC?",
        description: [
          {
            para1:
              "As of the 21st May 2010, if you decide to place your property on themarket for sale or rent in the UK you will need to purchase an EPC.This includes both residential and commercial properties. SinceApril 2018 it is also a legal requirement for the EPC rating to be aminimium of an ‘E’ rating in order for that property to be let to atenant.",
          },
        ],
      },
      {
        title: "Who is responsible for obtaining an EPC?",
        description: [
          {
            para1:
              "When you are selling or renting your property, you, as the seller or landlord must provide the EPC. The certificate should be given to the prospective buyer or tenant prior to entering into a sale or lease agreement.",
          },
          {
            para2:
              "With a new build it is the responsibility of the person carrying out the work. They must provide the owner with the certificate and inform the Building Control Officer or Approved Inspector that this has been completed within the specified time.",
          },
          {
            para3:
              "The owner/ landlord will have to pay for this survey and we offer extremely competitive prices.",
          },
          {
            para4:
              "The survey is designed to be a non-invasive visual inspection and all information is to be gathered whilst on site. If there are any measures that cannot be seen i.e. cavity wall insulation, we will require the associated documentation to include this within our certificate.",
          },
        ],
      },
      {
        title: "Can I market or rent the property before I receive the EPC?",
        description: [
          {
            para1:
              "As long as you have already ordered and paid for an EPC then you are permitted to put your property on the market or advertise it for renting purposes. We will make sure you receive confirmation of your order immediately after booking the EPC.",
          },
        ],
      },
      {
        title: " Can An EPC Fail?",
        description: [
          {
            para1:
              "When an EPC has been completed the property will get a rating between A and G. If you are selling the property then you cannot get a fail.",
          },
          {
            para2:
              "Since April 2018 it has been a legal requirement for the EPC rating to be at least an E rating if you are renting the property to a tenant (unless you have a suitable exemption). For more information on this please call 0800 048 7474.",
          },
        ],
      },
      {
        title: "How do I order my EPC?",
        description: [
          {
            para1:
              "You can easily place your order for the EPC via this website by clicking here.",
          },
          {
            para2:
              "Should you have any questions or would rather place an order over the telephone you can call our team on 0800 048 7474. Our opening times are Monday – Friday 9am – 6pm and Saturday 10am to 2pm.",
          },
        ],
      },
    ],
  },

  //Electrical Portable Appliance Test (PAT)
  {
    id: 11,
    title: "PAT Testing & Certificates | Domestic & Commercial",
    bannerTitle: "Electrical Portable Appliance Test (PAT)",
    bannerImage: images.epat_banner_desktop,
    bannerImageMobile: images.epat_banner_mobile,
    servicesDec: [
      "For Landlords, Home Buyers & Sellers",
      "For Domestic & Commercial Properties",
      "Flexible Availability & Fast Turnaround",
      "Instant Quotes & Nationwide Coverage",
      "Order Online or Over the Phone",
      "Prefer to Talk, Call Us 0800 048 7474",
    ],
    metaData: {
      description:
          "Nationwide Surveyors offer all types of Landlord Certifications &amp; reports for domestic and commercial properties at competitive prices with Nationwide Coverage.",
      keywords: "Load Removal",
    },
    certificate: "electrical-portable-appliance-test",
    content: [
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.pat1,
        heading: "Electrical Portable Appliance Test (PAT)",
        content:
          "<p>Portable Appliance Testing is a routine inspection of electrical appliances with a plug top to check they" +
          " are safe to use, which consists of visual inspections and the testing of the appliance, each test result" +
          " in either a PASS or a FAIL.</p>",
      },
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.pat2,
        heading: "Why PAT Testing is Required ?",
        content: `<ul class='list-disc pl-4 leading-7'>
        <li>To Prevent electrical accidents at the workplace.</li>
        <li>To provide responsibility as an employer of a safe working environment and to prevent harm to all employees and to the public of faulty electrical appliances.</li>
        <li>To make sure insurance is valid.</li>
        <li>To Meet the requirements stated in the following regulations: –
        <ul class='pl-4 leading-7 text-[#1a1a1a]' style="list-style-type: circle">
        <li>Health and Safety at Work Act 1974</li>
        <li>Electricity at Work Regulations 1989</li>
        <li>The Provision and Use of Working Equipment Regulations 1998</li>
        <li>The Management of Health &amp; Safety at Work Regulations 1999</li>
        <li>Workplace (Health, Safety &amp; Welfare) Regulations 1992</li>
        </ul>
        </li>
        </ul>`,
      },
    ],
    faq: [
      {
        title: "Who require an EPC?",
        description: [
          {
            para1:
              "As of the 21st May 2010, if you decide to place your property on themarket for sale or rent in the UK you will need to purchase an EPC.This includes both residential and commercial properties. SinceApril 2018 it is also a legal requirement for the EPC rating to be aminimium of an ‘E’ rating in order for that property to be let to atenant.",
          },
        ],
      },
      {
        title: "Who is responsible for obtaining an EPC?",
        description: [
          {
            para1:
              "When you are selling or renting your property, you, as the seller or landlord must provide the EPC. The certificate should be given to the prospective buyer or tenant prior to entering into a sale or lease agreement.",
          },
          {
            para2:
              "With a new build it is the responsibility of the person carrying out the work. They must provide the owner with the certificate and inform the Building Control Officer or Approved Inspector that this has been completed within the specified time.",
          },
          {
            para3:
              "The owner/ landlord will have to pay for this survey and we offer extremely competitive prices.",
          },
          {
            para4:
              "The survey is designed to be a non-invasive visual inspection and all information is to be gathered whilst on site. If there are any measures that cannot be seen i.e. cavity wall insulation, we will require the associated documentation to include this within our certificate.",
          },
        ],
      },
      {
        title: "Can I market or rent the property before I receive the EPC?",
        description: [
          {
            para1:
              "As long as you have already ordered and paid for an EPC then you are permitted to put your property on the market or advertise it for renting purposes. We will make sure you receive confirmation of your order immediately after booking the EPC.",
          },
        ],
      },
      {
        title: " Can An EPC Fail?",
        description: [
          {
            para1:
              "When an EPC has been completed the property will get a rating between A and G. If you are selling the property then you cannot get a fail.",
          },
          {
            para2:
              "Since April 2018 it has been a legal requirement for the EPC rating to be at least an E rating if you are renting the property to a tenant (unless you have a suitable exemption). For more information on this please call 0800 048 7474.",
          },
        ],
      },
      {
        title: "How do I order my EPC?",
        description: [
          {
            para1:
              "You can easily place your order for the EPC via this website by clicking here.",
          },
          {
            para2:
              "Should you have any questions or would rather place an order over the telephone you can call our team on 0800 048 7474. Our opening times are Monday – Friday 9am – 6pm and Saturday 10am to 2pm.",
          },
        ],
      },
    ],
  },

  //EICR Remedial Work
  {
    id: 13,
    title: "Electrical Remedial Work & Landlord Electrcial Safety Reports | Order Now",
    bannerTitle: "EICR Remedial Work",
    bannerImage: images.eicr_work_banner_desktop,
    bannerImageMobile: images.eicr_work_banner_mobile,
    servicesDec: [
      "For Landlords, Home Buyers & Sellers",
      "For Domestic & Commercial Properties",
      "Flexible Availability & Fast Turnaround",
      "Instant Quotes & Nationwide Coverage",
      "Order Online or Over the Phone",
      "Prefer to Talk, Call Us 0800 048 7474",
    ],
    metaData: {
      description:
          "Nationwide Surveyors offer all types of Landlord Certifications &amp; reports for domestic and commercial properties at competitive prices with Nationwide Coverage.",
      keywords: "Load Removal",
    },
    certificate: "eicr-remedial-work",
    content: [
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.electrical2,
        heading: "SATISFACTORY and UNSATISFACTORY EICR Explained",
        content:
          "<p>Once you have received your Electrical Installation Condition Report (EICR), under the OBSERVATIONS and" +
          " RECOMMENDATIONS section of your report, it may contain one or more of the following codes:</p>" +
          "<ul  class='list-disc pl-4 leading-7'>\n" +
          "<li>C1 (Danger Present, Risk of Injury. Immediate Remedial Action Required)</li>\n" +
          "<li>C2 (Potentially Dangerous, Urgent Remedial Action Required),</li>\n" +
          "<li>C3 (Improvement Recommended</li>\n" +
          "<li>FI (Further Investigation Required without delay)</li>\n" +
          "</ul>" +
          "<p>Depending on Engineer’s observations, your EICR will either be “SATISFACTORY” or “UNSATISFACTORY”. " +
          "If your EICR is UNSATISFACTORY, it means the electrical installation has a high risk of danger to yourself," +
          " tenants or your employees.</p>" +
          "<p>It is vital that these issues are resolved, in order to receive a satisfactory report. Until the remedial" +
          " work is completed, your installation will not be compliant with Health and Safety regulations and legislations.</p>",
      },
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: "",
        heading: "Electrical Remedial Work Following an EICR",
        content:
          "<p>Whether you have had your EICR completed and require electrical remedial repair work or yet to " +
          "have your EICR completed, we would be happy to provide you a quotation for works or to conduct the required " +
          "testing, to ensure your building remains compliant with current regulations.</p>" +
          "<p>Electrical Remedial or Minor Works Can Include:</p>" +
          "<ul class='list-disc pl-4 leading-7'>\n" +
          "<li>Repairs to electrical installation following an Electrical Installation Condition Report (Fixed Wire Test)</li>\n" +
          "<li>Replacement of electrical installation where damage has occurred</li>\n" +
          "<li>Replacement of small power (sockets) that are old or damaged</li>\n" +
          "<li>Replacement of failing emergency light systems</li>\n" +
          "<li>Replacement of lighting including LED</li>\n" +
          "</ul>",
      },
    ],
    faq: [
      {
        title: "Who require an EPC?",
        description: [
          {
            para1:
              "As of the 21st May 2010, if you decide to place your property on themarket for sale or rent in the UK you will need to purchase an EPC.This includes both residential and commercial properties. SinceApril 2018 it is also a legal requirement for the EPC rating to be aminimium of an ‘E’ rating in order for that property to be let to atenant.",
          },
        ],
      },
      {
        title: "Who is responsible for obtaining an EPC?",
        description: [
          {
            para1:
              "When you are selling or renting your property, you, as the seller or landlord must provide the EPC. The certificate should be given to the prospective buyer or tenant prior to entering into a sale or lease agreement.",
          },
          {
            para2:
              "With a new build it is the responsibility of the person carrying out the work. They must provide the owner with the certificate and inform the Building Control Officer or Approved Inspector that this has been completed within the specified time.",
          },
          {
            para3:
              "The owner/ landlord will have to pay for this survey and we offer extremely competitive prices.",
          },
          {
            para4:
              "The survey is designed to be a non-invasive visual inspection and all information is to be gathered whilst on site. If there are any measures that cannot be seen i.e. cavity wall insulation, we will require the associated documentation to include this within our certificate.",
          },
        ],
      },
      {
        title: "Can I market or rent the property before I receive the EPC?",
        description: [
          {
            para1:
              "As long as you have already ordered and paid for an EPC then you are permitted to put your property on the market or advertise it for renting purposes. We will make sure you receive confirmation of your order immediately after booking the EPC.",
          },
        ],
      },
      {
        title: " Can An EPC Fail?",
        description: [
          {
            para1:
              "When an EPC has been completed the property will get a rating between A and G. If you are selling the property then you cannot get a fail.",
          },
          {
            para2:
              "Since April 2018 it has been a legal requirement for the EPC rating to be at least an E rating if you are renting the property to a tenant (unless you have a suitable exemption). For more information on this please call 0800 048 7474.",
          },
        ],
      },
      {
        title: "How do I order my EPC?",
        description: [
          {
            para1:
              "You can easily place your order for the EPC via this website by clicking here.",
          },
          {
            para2:
              "Should you have any questions or would rather place an order over the telephone you can call our team on 0800 048 7474. Our opening times are Monday – Friday 9am – 6pm and Saturday 10am to 2pm.",
          },
        ],
      },
    ],
  },

  //Floor Plans
  {
    id: 14,
    title: "2D / 3D Floor Plans",
    bannerTitle: "Floor Plans",
    bannerImage: images.floor_plan_banner_desktop,
    bannerImageMobile: images.floor_plan_banner_mobile,
    servicesDec: [
      "For Landlords, Home Buyers & Sellers",
      "For Domestic & Commercial Properties",
      "Flexible Availability & Fast Turnaround",
      "Instant Quotes & Nationwide Coverage",
      "Order Online or Over the Phone",
      "Prefer to Talk, Call Us 0800 048 7474",
    ],
    metaData: {
      description:
          "Nationwide Surveyors offer all types of Landlord Certifications &amp; reports for domestic and commercial properties at competitive prices with Nationwide Coverage.",
      keywords: "Load Removal",
    },
    certificate: "floor-plans",
    content: [
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.fp1,
        heading: "Floor Plans",
        content:
          "<p>We provide Property Floor Plan service to Estate Agents, Private Landlords and Homeowners across the UK." +
          " As we know, Property Floor Plans are now a days an essential property marketing tool to advertise your" +
          " property. We create 2D and 3D floor plans, ensuring accuracy and consistency in a range of style options." +
          " 2D and 3D floor plans are the most effective tool for presenting property’s layout, size, dimensions and" +
          " furniture configuration.</p>",
      },
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.fp2,
        heading: "Ordering Floor Plans through Nationwide Surveyors",
        content:
          "<p>Our trained property surveyors can visit a property across the mainland UK and supply the finalized" +
          " marketing floor plans to you, in most cases the next working day after we visit your property.</p>",
      },
    ],
    faq: [
      {
        title: "Who require an EPC?",
        description: [
          {
            para1:
              "As of the 21st May 2010, if you decide to place your property on themarket for sale or rent in the UK you will need to purchase an EPC.This includes both residential and commercial properties. SinceApril 2018 it is also a legal requirement for the EPC rating to be aminimium of an ‘E’ rating in order for that property to be let to atenant.",
          },
        ],
      },
      {
        title: "Who is responsible for obtaining an EPC?",
        description: [
          {
            para1:
              "When you are selling or renting your property, you, as the seller or landlord must provide the EPC. The certificate should be given to the prospective buyer or tenant prior to entering into a sale or lease agreement.",
          },
          {
            para2:
              "With a new build it is the responsibility of the person carrying out the work. They must provide the owner with the certificate and inform the Building Control Officer or Approved Inspector that this has been completed within the specified time.",
          },
          {
            para3:
              "The owner/ landlord will have to pay for this survey and we offer extremely competitive prices.",
          },
          {
            para4:
              "The survey is designed to be a non-invasive visual inspection and all information is to be gathered whilst on site. If there are any measures that cannot be seen i.e. cavity wall insulation, we will require the associated documentation to include this within our certificate.",
          },
        ],
      },
      {
        title: "Can I market or rent the property before I receive the EPC?",
        description: [
          {
            para1:
              "As long as you have already ordered and paid for an EPC then you are permitted to put your property on the market or advertise it for renting purposes. We will make sure you receive confirmation of your order immediately after booking the EPC.",
          },
        ],
      },
      {
        title: " Can An EPC Fail?",
        description: [
          {
            para1:
              "When an EPC has been completed the property will get a rating between A and G. If you are selling the property then you cannot get a fail.",
          },
          {
            para2:
              "Since April 2018 it has been a legal requirement for the EPC rating to be at least an E rating if you are renting the property to a tenant (unless you have a suitable exemption). For more information on this please call 0800 048 7474.",
          },
        ],
      },
      {
        title: "How do I order my EPC?",
        description: [
          {
            para1:
              "You can easily place your order for the EPC via this website by clicking here.",
          },
          {
            para2:
              "Should you have any questions or would rather place an order over the telephone you can call our team on 0800 048 7474. Our opening times are Monday – Friday 9am – 6pm and Saturday 10am to 2pm.",
          },
        ],
      },
    ],
  },

  //Building Surveys
  {
    id: 15,
    title: "Home Buyer Reports and Surveys",
    bannerTitle: "Building Surveys",
    bannerImage: images.building_surveys_banner_desktop,
    bannerImageMobile: images.building_surveys_banner_mobile,
    servicesDec: [
      "For Landlords, Home Buyers & Sellers",
      "For Domestic & Commercial Properties",
      "Flexible Availability & Fast Turnaround",
      "Instant Quotes & Nationwide Coverage",
      "Order Online or Over the Phone",
      "Prefer to Talk, Call Us 0800 048 7474",
    ],
    metaData: {
      description:
          "Nationwide Surveyors offer all types of Landlord Certifications &amp; reports for domestic and commercial properties at competitive prices with Nationwide Coverage.",
      keywords: "Load Removal",
    },
    certificate: "building-surveys",
    content: [
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.hBs2,
        heading: "Building Survey Overview",
        content:
          "<p>A Building Survey is the most thorough and detailed report that you can commission on the condition of a" +
          " property. The survey is usually carried out by a Chartered Surveyor who will be a member of the Roya" +
          "l Institution of Chartered Surveyors (RICS) in which case he or she will have the letters MRICS or FRICS" +
          " after his or her name. The RICS ensures that all its members maintain professional standards in their work." +
          " When commissioning a Chartered Surveyor to carry out a survey you should be able to feel confident that the" +
          " results will be appropriate for your needs.</p>",
      },
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.hBs1,
        heading: "What is a Home buyer Survey?",
        content:
          "<p>A homebuyer survey covers a couple of different types of survey, so you need to make sure you know what you" +
          " want before placing any orders.</p> <br/>" +
          "<p>A <strong>HomeBuyer Report</strong> (which can also include a valuation as an addition) is provided by" +
          " <a class='hover:text-lime ease-in duration-200' href=\"https://www.rics.org/uk/\">RICS</a> approved" +
          " Surveyors. This will not include as much detail as a Building Survey, but typically does highlight" +
          " anything that will have a affect on the value of the property or anything that will require further" +
          " attention. it only covers areas that can be seen without having to take any further action – so they" +
          " will not drill into walls or lift up carpets..</p> <br/>" +
          "<p>A <strong>Homebuyer Survey</strong> could be provided by a non-RICS registered Surveyor, or by a Home" +
          " Inspector or Energy Assessor.&nbsp; This does not have a standard format, and so you will really need to" +
          " discuss your requirements prior to the commencement of any work to make sure you are getting everything you need.</p>",
      },
    ],
    faq: [
      {
        title: "Who require an EPC?",
        description: [
          {
            para1:
              "As of the 21st May 2010, if you decide to place your property on themarket for sale or rent in the UK you will need to purchase an EPC.This includes both residential and commercial properties. SinceApril 2018 it is also a legal requirement for the EPC rating to be aminimium of an ‘E’ rating in order for that property to be let to atenant.",
          },
        ],
      },
      {
        title: "Who is responsible for obtaining an EPC?",
        description: [
          {
            para1:
              "When you are selling or renting your property, you, as the seller or landlord must provide the EPC. The certificate should be given to the prospective buyer or tenant prior to entering into a sale or lease agreement.",
          },
          {
            para2:
              "With a new build it is the responsibility of the person carrying out the work. They must provide the owner with the certificate and inform the Building Control Officer or Approved Inspector that this has been completed within the specified time.",
          },
          {
            para3:
              "The owner/ landlord will have to pay for this survey and we offer extremely competitive prices.",
          },
          {
            para4:
              "The survey is designed to be a non-invasive visual inspection and all information is to be gathered whilst on site. If there are any measures that cannot be seen i.e. cavity wall insulation, we will require the associated documentation to include this within our certificate.",
          },
        ],
      },
      {
        title: "Can I market or rent the property before I receive the EPC?",
        description: [
          {
            para1:
              "As long as you have already ordered and paid for an EPC then you are permitted to put your property on the market or advertise it for renting purposes. We will make sure you receive confirmation of your order immediately after booking the EPC.",
          },
        ],
      },
      {
        title: " Can An EPC Fail?",
        description: [
          {
            para1:
              "When an EPC has been completed the property will get a rating between A and G. If you are selling the property then you cannot get a fail.",
          },
          {
            para2:
              "Since April 2018 it has been a legal requirement for the EPC rating to be at least an E rating if you are renting the property to a tenant (unless you have a suitable exemption). For more information on this please call 0800 048 7474.",
          },
        ],
      },
      {
        title: "How do I order my EPC?",
        description: [
          {
            para1:
              "You can easily place your order for the EPC via this website by clicking here.",
          },
          {
            para2:
              "Should you have any questions or would rather place an order over the telephone you can call our team on 0800 048 7474. Our opening times are Monday – Friday 9am – 6pm and Saturday 10am to 2pm.",
          },
        ],
      },
    ],
  },

  //Legionella Risk Assessment
  {
    id: 16,
    title: "Legionella Risk Assessment",
    bannerTitle: "Legionella Risk Assessment",
    bannerImage: images.legionella_risk_banner_desktop,
    bannerImageMobile: images.legionella_risk_banner_mobile,
    servicesDec: [
      "For Landlords, Home Buyers & Sellers",
      "For Domestic & Commercial Properties",
      "Flexible Availability & Fast Turnaround",
      "Instant Quotes & Nationwide Coverage",
      "Order Online or Over the Phone",
      "Prefer to Talk, Call Us 0800 048 7474",
    ],
    metaData: {
      description:
          "Nationwide Surveyors offer all types of Landlord Certifications &amp; reports for domestic and commercial properties at competitive prices with Nationwide Coverage.",
      keywords: "Load Removal",
    },
    certificate: "legionella-risk-assessment",
    content: [
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.legion1,
        heading:
          "Legionella is a risk for almost all water systems found within buildings which must be effectively controlled",
        content:
          "<p>If you manage any water system within a building you need to have a risk assessment and some good control" +
          " measures in place. We can help you achieve this.</p>",
      },
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.legion2,
        heading: "Cost effective compliance from a reliable source",
        content:
          "<p>Our assessors and operatives are provided with enough time and support for them to" +
          " develop the right combination of training, skills, experience and knowledge to carry out their role" +
          " effectively.</p>",
      },
    ],
    faq: [
      {
        title: "Who require an EPC?",
        description: [
          {
            para1:
              "As of the 21st May 2010, if you decide to place your property on themarket for sale or rent in the UK you will need to purchase an EPC.This includes both residential and commercial properties. SinceApril 2018 it is also a legal requirement for the EPC rating to be aminimium of an ‘E’ rating in order for that property to be let to atenant.",
          },
        ],
      },
      {
        title: "Who is responsible for obtaining an EPC?",
        description: [
          {
            para1:
              "When you are selling or renting your property, you, as the seller or landlord must provide the EPC. The certificate should be given to the prospective buyer or tenant prior to entering into a sale or lease agreement.",
          },
          {
            para2:
              "With a new build it is the responsibility of the person carrying out the work. They must provide the owner with the certificate and inform the Building Control Officer or Approved Inspector that this has been completed within the specified time.",
          },
          {
            para3:
              "The owner/ landlord will have to pay for this survey and we offer extremely competitive prices.",
          },
          {
            para4:
              "The survey is designed to be a non-invasive visual inspection and all information is to be gathered whilst on site. If there are any measures that cannot be seen i.e. cavity wall insulation, we will require the associated documentation to include this within our certificate.",
          },
        ],
      },
      {
        title: "Can I market or rent the property before I receive the EPC?",
        description: [
          {
            para1:
              "As long as you have already ordered and paid for an EPC then you are permitted to put your property on the market or advertise it for renting purposes. We will make sure you receive confirmation of your order immediately after booking the EPC.",
          },
        ],
      },
      {
        title: " Can An EPC Fail?",
        description: [
          {
            para1:
              "When an EPC has been completed the property will get a rating between A and G. If you are selling the property then you cannot get a fail.",
          },
          {
            para2:
              "Since April 2018 it has been a legal requirement for the EPC rating to be at least an E rating if you are renting the property to a tenant (unless you have a suitable exemption). For more information on this please call 0800 048 7474.",
          },
        ],
      },
      {
        title: "How do I order my EPC?",
        description: [
          {
            para1:
              "You can easily place your order for the EPC via this website by clicking here.",
          },
          {
            para2:
              "Should you have any questions or would rather place an order over the telephone you can call our team on 0800 048 7474. Our opening times are Monday – Friday 9am – 6pm and Saturday 10am to 2pm.",
          },
        ],
      },
    ],
  },

  //SAP Assessments
  {
    id: 17,
    title: "SAP Assessment",
    bannerTitle: "SAP Assessments",
    bannerImage: images.epc_banner_desktop,
    bannerImageMobile: images.epc_banner_desktop,
    servicesDec: [
      "For Landlords, Home Buyers & Sellers",
      "For Domestic & Commercial Properties",
      "Flexible Availability & Fast Turnaround",
      "Instant Quotes & Nationwide Coverage",
      "Order Online or Over the Phone",
      "Prefer to Talk, Call Us 0800 048 7474",
    ],
    metaData: {
      description: "Nationwide Surveyors offer all types of Landlord Certifications &amp; reports for domestic and commercial properties at competitive prices with Nationwide Coverage.",
      keywords: "Load Removal",
    },
    certificate: "sap-assessments-2",
    content: [
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.sap1,
        heading: "SAP Assessments Explained",
        content:
          "<p>SAP Calculations are an energy efficiency calculation, required by the Building Regulations on all new" +
          " build dwellings, converted dwellings and some extensions.</p><br/>" +
          "<p>Since 2008, in response to the Energy Performance of Buildings Directive (EPBD), all new homes in the" +
          " United Kingdom under construction require a Predicted Energy Assessment (PEA) and an On Construction" +
          " Energy Performance Certificate (OCEPC).</p>",
      },
      {
        className: "flex flex-col-reverse lg:flex-row-reverse",
        type: "Service",
        image: images.sap2,
        heading: "When SAP Assessments are Required ?",
        content:
          "<p>SAPs are used in partnership with the PEA during a property’s design phase. This is done to achieve" +
          " Building Control approval for the property; a legal requirement in the UK, according to Part L1a" +
          " of Building Regulations.</p>",
      },
    ],
    faq: [
      {
        title: "Who require an EPC?",
        description: [
          {
            para1:
              "As of the 21st May 2010, if you decide to place your property on themarket for sale or rent in the UK you will need to purchase an EPC.This includes both residential and commercial properties. SinceApril 2018 it is also a legal requirement for the EPC rating to be aminimium of an ‘E’ rating in order for that property to be let to atenant.",
          },
        ],
      },
      {
        title: "Who is responsible for obtaining an EPC?",
        description: [
          {
            para1:
              "When you are selling or renting your property, you, as the seller or landlord must provide the EPC. The certificate should be given to the prospective buyer or tenant prior to entering into a sale or lease agreement.",
          },
          {
            para2:
              "With a new build it is the responsibility of the person carrying out the work. They must provide the owner with the certificate and inform the Building Control Officer or Approved Inspector that this has been completed within the specified time.",
          },
          {
            para3:
              "The owner/ landlord will have to pay for this survey and we offer extremely competitive prices.",
          },
          {
            para4:
              "The survey is designed to be a non-invasive visual inspection and all information is to be gathered whilst on site. If there are any measures that cannot be seen i.e. cavity wall insulation, we will require the associated documentation to include this within our certificate.",
          },
        ],
      },
      {
        title: "Can I market or rent the property before I receive the EPC?",
        description: [
          {
            para1:
              "As long as you have already ordered and paid for an EPC then you are permitted to put your property on the market or advertise it for renting purposes. We will make sure you receive confirmation of your order immediately after booking the EPC.",
          },
        ],
      },
      {
        title: " Can An EPC Fail?",
        description: [
          {
            para1:
              "When an EPC has been completed the property will get a rating between A and G. If you are selling the property then you cannot get a fail.",
          },
          {
            para2:
              "Since April 2018 it has been a legal requirement for the EPC rating to be at least an E rating if you are renting the property to a tenant (unless you have a suitable exemption). For more information on this please call 0800 048 7474.",
          },
        ],
      },
      {
        title: "How do I order my EPC?",
        description: [
          {
            para1:
              "You can easily place your order for the EPC via this website by clicking here.",
          },
          {
            para2:
              "Should you have any questions or would rather place an order over the telephone you can call our team on 0800 048 7474. Our opening times are Monday – Friday 9am – 6pm and Saturday 10am to 2pm.",
          },
        ],
      },
    ],
  },
];
//Terms and condition lists
export const joinAdvantageList = [
  {
    point: "Weekly Payments Against All Completed Orders",
  },
  {
    point: "Pre-Booked Customer Appointments, No More Chasing Clients",
  },
  {
    point: "Business Support Team to Help Manage Your Appointments",
  },
  {
    point: "Market Leading Rates Paid",
  },
  {
    point:
      "Option to Offer us More than One Service, i.e EPC + Floor Plan/ PAT etc",
  },
  {
    point: "24/7 Access to Our Portal",
  },
];

//Terms and condition lists
export const agreeListPoints = [
  {
    point:
      "Gain or attempt to gain unauthorised access by any means to any restricted Nationwide Services-UK Ltd. networks or systems;",
  },
  {
    point:
      "Make available, upload or distribute on the nationwidesurveyors.org.uk website any materials or files that contain viruses or any other harmful software;",
  },
  {
    point: "Use the website to send unsolicited material for any purpose.",
  },
];

// FAQ
export const faqCardData = [
  {
    iconName: (
      <FontAwesomeIcon
        className="w-[45px] text-lime"
        icon={faTelevision}
        style={{ fontSize: "40px" }}
      />
    ),
    headTitle: "Place Order Online",
    bodyContant:
      "Please select the services required and place order online 24/7. Our services can be ordered individually or as a combined Bundle Package. Prefer to place order over the phone? please call us FREE at 0800 048 7474.",
  },
  {
    iconName: (
      <FontAwesomeIcon
        className="w-[45px] text-lime"
        icon={faHeadset}
        style={{ fontSize: "40px" }}
      />
    ),
    headTitle: "Assessment Survey Booked",
    bodyContant:
      "Once you placed order online, our customer support team will get in touch with you to arrange a suitable date and time to carry out the assessment survey for each service ordered, according to your suitability.",
  },
  {
    iconName: (
      <FontAwesomeIcon
        className="w-[45px] text-lime"
        icon={faBarChart}
        style={{ fontSize: "40px" }}
      />
    ),
    headTitle: "Certificates Issued",
    bodyContant:
      "Certificates will be issued digitally for each service ordered and sent to you by email, within 48 hours of Assessor’s visit. Being an online customer, you will also be able to download your certificates from your online account with us.",
  },
];

//FAQ Accordion data
export const faqAccordionData = [
  {
    title: "Who require an EPC?",
    description: [
      {
        para1:
          "As of the 21st May 2010, if you decide to place your property on the market for sale or rent in the UK you will need to purchase an EPC. This includes both residential and commercial properties. Since April 2018 it is also a legal requirement for the EPC rating to be a minimium of an ‘E’ rating in order for that property to be let to atenant.",
      },
    ],
  },
  {
    title: "Who is responsible for obtaining an EPC?",
    description: [
      {
        para1:
          "When you are selling or renting your property, you, as the seller or landlord must provide the EPC. The certificate should be given to the prospective buyer or tenant prior to entering into a sale or lease agreement.",
      },
      {
        para2:
          "With a new build it is the responsibility of the person carrying out the work. They must provide the owner with the certificate and inform the Building Control Officer or Approved Inspector that this has been completed within the specified time.",
      },
      {
        para3:
          "The owner/ landlord will have to pay for this survey and we offer extremely competitive prices.",
      },
      {
        para4:
          "The survey is designed to be a non-invasive visual inspection and all information is to be gathered whilst on site. If there are any measures that cannot be seen i.e. cavity wall insulation, we will require the associated documentation to include this within our certificate.",
      },
    ],
  },
  {
    title: "Can I market or rent the property before I receive the EPC?",
    description: [
      {
        para1:
          "As long as you have already ordered and paid for an EPC then you are permitted to put your property on the market or advertise it for renting purposes. We will make sure you receive confirmation of your order immediately after booking the EPC.",
      },
    ],
  },
  {
    title: " Can An EPC Fail?",
    description: [
      {
        para1:
          "When an EPC has been completed the property will get a rating between A and G. If you are selling the property then you cannot get a fail.",
      },
      {
        para2:
          "Since April 2018 it has been a legal requirement for the EPC rating to be at least an E rating if you are renting the property to a tenant (unless you have a suitable exemption). For more information on this please call 0800 048 7474.",
      },
    ],
  },
  {
    title: "How do I order my EPC?",
    description: [
      {
        para1:
          "You can easily place your order for the EPC via this website by clicking here.",
      },
      {
        para2:
          "Should you have any questions or would rather place an order over the telephone you can call our team on 0800 048 7474. Our opening times are Monday – Friday 9am – 6pm and Saturday 10am to 2pm.",
      },
    ],
  },
];

//FAQ Accordion data
export const careerAccordionData = [
  {
    title: "Qualified Domestic Energy Assessor",
    head1: "Job Description",
    description: [
      {
        para1:
          "We are looking for Qualified DEAs across the country, If you are looking for a regular flow of work, with everything pre-booked, then look no further. We will provide you access to our state of the art CRM and having our customer support team dealing with all the appointment bookings and customer inquiries, letting you focus only on the work that are good at.",
      },
    ],
    head2: "Requirements",
    requirementList: [
      {
        iconName: (
          <FontAwesomeIcon
            className="pt-2 text-lime"
            icon={faCheckCircle}
            style={{ fontSize: "15px" }}
          />
        ),
        listPoint: "You must own and drive vehicle",
      },
      {
        iconName: (
          <FontAwesomeIcon
            className="pt-2 text-lime"
            icon={faCheckCircle}
            style={{ fontSize: "15px" }}
          />
        ),
        listPoint: "Have access to internet and smart phone",
      },
      {
        iconName: (
          <FontAwesomeIcon
            className="pt-2 text-lime"
            icon={faCheckCircle}
            style={{ fontSize: "15px" }}
          />
        ),
        listPoint:
          "Upload all the Certificates and relevant paperwork on to our portal",
      },
    ],
    sendCdInsctruction:
      "In order to be considered for this role, Please send your CV to admin@nationwidesurveyors.org.uk",
  },
];

//Cookie policy
export const cookielistPoints = [
  {
    point:
      "Strictly necessary cookies. These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website.",
  },
  {
    point:
      "Analytical/performance cookies. They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.",
  },
  {
    point:
      "Functionality cookies. These are used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name and remember your preferences (for example, your choice of language or region).",
  },
  {
    point:
      "Targeting cookies. These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests.",
  },
];

//privacy policy
export const infolistPoints = [
  {
    point: "Identify you when you contact us.",
  },
  {
    point: "Enable us to contact you.",
  },
  {
    point:
      "Help contact you regarding your order/enquiry (we may contact you by telephone or e-mail if you have given us these contact details).",
  },
  {
    point: "Help to prevent and detect fraud or loss; and",
  },
];
