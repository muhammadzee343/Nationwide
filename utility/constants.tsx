import Image from "../public/electrical-1-1024x410-1.jpg";
import Survey from "../public/surveyor-1.jpg";
import Electrical from "../public/electrical-1-1024x410-1.jpg";
import Electrical2 from "../public/eicr7.jpg";
import Certificate from "../public/0001-1-1.jpg";
import Engineer from "../public/Engineer-.jpg";
import epc from "../public/domesticepc.png";
import epcSurveyor from "../public/epcSurveyor.jpg";
import commercialEpc from "../public/Commercial-epc.jpg";
import commercialEpcRating from "../public/commercialEpcRating.jpg";
import {
  faBarChart,
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
    title: "Domestic &",
    certificate: "Commercial EICR",
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
      type: "Home",
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
      type: "Home",
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
      type: "Home",
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
      { title: "Gas Safety Certificate", link: "/gas-safety-certificate" },
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
// Services
export const service = [
  {
    className: "flex flex-col lg:flex-row",
    content: {
      type: "Service",
      certificate: "domestic-epc",
      image: images.domesticEpc,
      heading: "EPC Explained",
      content:
        "<div>\n" +
        "<p>The Government is complying with the Energy Performance of Building Directive (EPBD) with the introduction of the Energy Performance Certificate. The EPC shows a record of the energy efficiency levels and CO2 emissions of a building, by using a standard table from A to G (A being very efficient, G being very inefficient).</p>\n" +
        "</div>",
    },
  },
  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "domestic-epc",
      image: images.epcSurveyor,
      heading: "How an EPC assessment is carried out?",
      content:
        "<p>An energy survey is performed by a qualified energy assessor who visits the property and examines key items within the premises such as loft insulation, domestic boiler, hot water tank, radiators, windows for double glazing, etc.</p>" +
        "<br/><p>Once this information is obtained it is then placed into a software programme which carries out and calculates the level of energy efficiency and CO2 emissions and advises us on the best measures in improving the energy performance of a property with an estimated cost and savings.</p>",
    },
  },
  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "commercial-epc",
      image: images.commercialEpc,
      heading: "Commercial EPCs",
      content:
        "<p>An energy survey is performed by a qualified energy assessor who visits the property and examines key items within the premises such as loft insulation, domestic boiler, hot water tank, radiators, windows for double glazing, etc.</p>" +
        "<br/><p>Once this information is obtained it is then placed into a software programme which carries out and calculates the level of energy efficiency and CO2 emissions and advises us on the best measures in improving the energy performance of a property with an estimated cost and savings.</p>",
    },
  },
  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "commercial-epc",
      image: images.commercialEpcRating,
      heading: "Who Needs a Commercial EPC?",
      content:
        "<p>An energy survey is performed by a qualified energy assessor who visits the property and examines key items within the premises such as loft insulation, domestic boiler, hot water tank, radiators, windows for double glazing, etc.</p>" +
        "<br/><p>Once this information is obtained it is then placed into a software programme which carries out and calculates the level of energy efficiency and CO2 emissions and advises us on the best measures in improving the energy performance of a property with an estimated cost and savings.</p>",
    },
  },

  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "emergency-light-test-report",
      image: images.emergencyLITL,
      heading: "Emergency Lights Testing",
      content:
        "<p>It’s a legal requirement for all commercial and industrial buildings to have emergency lighting system installed and maintained with emergency light testing conducted on a regular intervals by a competent person, as this will ensure a safe passage in case of an emergy evacuation.</p>" +
        "<br/><p>Emergency light testing is therefore a vital part of this process, it allows for proper maintenance of the system which in turn makes certain that the emergency light system itself is fit for purpose. Importantly, this is a statutory requirement and most insurance companies require it, not only this but your life, the lives of staff and employees could depend on you, having had emergency light testing when needed.</p>",
    },
  },
  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "emergency-light-test-report",
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
  },

  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "fire-alarm-test-report",
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
  },

  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "fire-alarm-test-report",
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
  },

  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "fire-risk-assessment",
      image: images.fra,
      heading: "Fire Safety Risk Assesment",
      content:
        "<p>Whether you are managing an HMO, Medical Practice, Care Home, Warehouse, Shop or an Office building," +
        " we want to give your organisation peace of mind when dealing with your legal obligation to have a compliant" +
        " Fire Risk Assesment in place. Our qualified Fire Risk Assessors are available across the country to carry out" +
        " comprehensive Assemssents and provide you with an easy to understand report that sets out clearly what" +
        " actions you need to take.</p>",
    },
  },
  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "fire-risk-assessment",
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
  },

  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "gas-safety-certificate",
      image: images.gasCertificate,
      heading: "Gas Safety Certificate for Landlords",
      content:
        "<p>Are you a landlord? Then you are legally obligated to have a Gas Safety check done every year. landlords" +
        " are also required to have their gas appliances serviced regularly to make sure they’re efficient and safe." +
        " It’s the law, as stated in the <a class='hover:text-lime ease-in duration-100' href='http://www.legislation.gov.uk/uksi/1998/2451/contents/made?_ga=2.57176426.1191280566.1669616964-1647189842.1667901178' target='_blank' rel='noopener noreferrer'>Gas Safety (Installation and Use) Regulations 1998</a></p>",
    },
  },
  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "gas-safety-certificate",
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
  },

  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "boiler-service",
      image: images.bs1,
      heading: "Boiler Service",
      content:
        "<p>Our UK wide network of Gas Safe Registered Engineers can complete boiler services in a timely and efficient manner.</p> <br/>" +
        "<p>A boiler service is the best way to ensure your boiler doesn’t unexpectedly let you down or fall out of " +
        "warranty. If you know your boiler needs servicing, please place your order online and leave rest with us.</p>",
    },
  },
  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "boiler-service",
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
          <ul class='pl-4 leading-7 text-[#1a1a1a]' style="list-style-type: circle">
            <li>A pre-service check and fault analysis.</li>
            <li>
              Check installation and positioning comply with building
              regulations
            </li>
            <li>
              Check installation and positioning comply with gas safe
              regulations
            </li>
            <li>
              Installation and positioning complies to installation &amp;
              British standards
            </li>
            <li>
              Removal of outer casing &amp;Inspection of main internal
              components (electrodes, fans etc)
            </li>
            <li>
              Inspection of electrics, pipework (water &amp; gas), joints and
              flue
            </li>
            <li>A gas rate test to ensure gas usage is correct</li>
            <li>Gas flue analysis</li>
            <li>Service certification paperwork</li>
          </ul>
        </ul>
      `,
    },
  },

  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "electrical-installation-condition-report",
      image: images.esr,
      heading: "Electrical Safety Certificate",
      content:
        "<p>Our UK wide network of Gas Safe Registered Engineers can complete boiler services in a timely and efficient manner.</p> <br/>" +
        "<p>A boiler service is the best way to ensure your boiler doesn’t unexpectedly let you down or fall out of " +
        "warranty. If you know your boiler needs servicing, please place your order online and leave rest with us.</p>",
    },
  },
  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "electrical-installation-condition-report",
      image: images.electrical2,
      heading: "What Is Inspected In An EICR ?",
      content:
        "<p>Our UK wide network of Gas Safe Registered Engineers can complete boiler services in a timely and efficient manner.</p> <br/>" +
        "<p>A boiler service is the best way to ensure your boiler doesn’t unexpectedly let you down or fall out of " +
        "warranty. If you know your boiler needs servicing, please place your order online and leave rest with us.</p>",
    },
  },

  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "electrical-portable-appliance-test",
      image: images.pat1,
      heading: "Electrical Portable Appliance Test (PAT)",
      content:
        "<p>Portable Appliance Testing is a routine inspection of electrical appliances with a plug top to check they" +
        " are safe to use, which consists of visual inspections and the testing of the appliance, each test result" +
        " in either a PASS or a FAIL.</p>",
    },
  },
  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "electrical-portable-appliance-test",
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
  },

  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "eicr-remedial-work",
      image: images.electrical2,
      heading: "SATISFACTORY and UNSATISFACTORY EICR Explained",
      content:
        "<p>Once you have received your Electrical Installation Condition Report (EICR), under the OBSERVATIONS and" +
        " RECOMMENDATIONS section of your report, it may contain one or more of the following codes:</p>" +
        "<ul>\n" +
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
  },
  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "eicr-remedial-work",
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
  },
  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "floor-plans",
      image: images.fp1,
      heading: "Floor Plans",
      content:
        "<p>We provide Property Floor Plan service to Estate Agents, Private Landlords and Homeowners across the UK." +
        " As we know, Property Floor Plans are now a days an essential property marketing tool to advertise your" +
        " property. We create 2D and 3D floor plans, ensuring accuracy and consistency in a range of style options." +
        " 2D and 3D floor plans are the most effective tool for presenting property’s layout, size, dimensions and" +
        " furniture configuration.</p>",
    },
  },
  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "floor-plans",
      image: images.fp2,
      heading: "Ordering Floor Plans through Nationwide Surveyors",
      content:
        "<p>Our trained property surveyors can visit a property across the mainland UK and supply the finalized" +
        "marketing floor plans to you, in most cases the next working day after we visit your property.</p>",
    },
  },
  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "building-surveys",
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
  },
  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "building-surveys",
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
  },
  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "legionella-risk-assessment",
      image: images.legion1,
      heading:
        "Legionella is a risk for almost all water systems found within buildings which must be effectively controlled",
      content:
        "<p>If you manage any water system within a building you need to have a risk assessment and some good control" +
        " measures in place. We can help you achieve this.</p>",
    },
  },
  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "legionella-risk-assessment",
      image: images.legion2,
      heading: "Cost effective compliance from a reliable source",
      content:
        "<p>Our assessors and operatives are provided with enough time and support for them to" +
        " develop the right combination of training, skills, experience and knowledge to carry out their role" +
        " effectively.</p>",
    },
  },

  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "sap-assessments-2",
      image: images.sap1,
      heading: "SAP Assessments Explained",
      content:
        "<p>SAP Calculations are an energy efficiency calculation, required by the Building Regulations on all new" +
        " build dwellings, converted dwellings and some extensions.</p><br/>" +
        "<p>Since 2008, in response to the Energy Performance of Buildings Directive (EPBD), all new homes in the" +
        " United Kingdom under construction require a Predicted Energy Assessment (PEA) and an On Construction" +
        " Energy Performance Certificate (OCEPC).</p>",
    },
  },
  {
    className: "flex flex-col-reverse lg:flex-row-reverse",
    content: {
      type: "Service",
      certificate: "sap-assessments-2",
      image: images.sap2,
      heading: "When SAP Assessments are Required ?",
      content:
        "<p>SAPs are used in partnership with the PEA during a property’s design phase. This is done to achieve" +
        " Building Control approval for the property; a legal requirement in the UK, according to Part L1a" +
        " of Building Regulations.</p>",
    },
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
      "Please select the services required and place order online 24/7. Our services can be ordered individually or as a combined Bundle Package.Prefer to place order over the phone? please call us FREE at 0800 048 7474.",
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