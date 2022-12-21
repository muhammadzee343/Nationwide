import React from "react";
import HeaderComponent from "../components/Header.component";
import {agreeListPoints} from "../utility/constants"
const TermsCondition = () => {
  
  return (
    <div className="w-full bg-white flex justify-center">
      <div className="w-full flex flex-col items-center">
        <HeaderComponent
          header="Terms & Conditions"
          breadcrumb="Terms & Conditions"
          className="bg-dark-blue"
        />
        <div className="w-full flex flex-col xl:max-w-[1114px] pt-[65px] pb-[40px] px-3 xl:px-0 font-opensans">
          <p className="footer-paragraph">
            These terms and conditions (“Terms”, “Agreement”) are an agreement
            between Nationwide Surveyors (“Nationwide Services-UK Ltd”, “us”,
            “we” or “our”) and you (“User”, “you” or “your”). This Agreement
            sets forth the general terms and conditions of your use of the
            Nationwide Surveyors’ websites and any of its products or services
            (collectively, “Website” or “Services”).
          </p>
          <p className="footer-paragraph">
            <br />
            You agree to adhere to all applicable laws, regulations and codes of
            conduct when using the Nationwide Surveyors’ websites.
          </p>
          <p className="footer-paragraph">
            You agree not to Damage, Interfere or Disrupt the website or access
            the website to:
          </p>
          <br />
          <ul className="list-disc list-inside bg-blue-400 footer-paragraph font-opensans">
            {agreeListPoints.map((item, index) => {
              return <li key={index}>{item.point}</li>;
            })}
          </ul>
          <br />
          <p className="footer-paragraph">
            Although Nationwide Services-UK Ltd endeavours to ensure the
            contents of this website are correct, it shall not be liable for any
            damages arising in contract or otherwise from the use of or
            inability to use this website, or any material contained within it,
            or from any action or decision taken as a result of using this
            website or any such material.
          </p>
          <p className="footer-paragraph">
          Please note that any links to external websites are provided for
            information and convenience only. Nationwide Services-UK Ltd does
            not accept responsibility for the websites linked to, or the
            information found there. A link does not imply an endorsement of a
            website; likewise, not linking to a particular site does not imply
            lack of endorsement.
          </p>
          <p className="footer-paragraph">
          We reserve the right to withdraw a link or refuse to link to any
            website without providing an explanation or justification.
          </p>
          <br />
          <h1 className="text-[30px] leading-9 font-semibold">
            Payment Terms and Conditions
          </h1>
          <br />
          <ul className="list-disc list-inside bg-blue-400 footer-paragraph">
            <li>
              Payment
              <ul className={"bg-blue-400 ml-5 circle-list ml-10"}>
                <li>
                  Payments can be made online, over the phone or through direct
                  bank transfer into our company account. All major debit/credit
                  cards are accepted.
                </li>
              </ul>
            </li>
            <li>
              Your Obligations
              <ul className={"bg-blue-400 ml-5 circle-list ml-10"}>
                <li>
                  You agree to ensure that the information that you supply to us
                  in the order including without limitation details of the
                  property is complete, accurate and up to date. You will notify
                  us immediately, should you become aware of any inaccuracy
                  contained within the order.
                </li>
                <li>
                  You agree that any order that we may deliver to you is
                  delivered on the understanding that it is only for your use
                  and for the purpose that you have disclosed to us.
                </li>
                <li>
                  Pre-arranged appointments with Engineers/Assessors are taken
                  on the understanding that an Adult will be present at the
                  appointment time. If the Engineer/Assessor is unable to obtain
                  access to the premises during the appointment time, then a
                  service charge is payable for re-booking the service.
                </li>
              </ul>
            </li>
            <li>
              Liability
              <ul className={"bg-blue-400 ml-5 circle-list ml-10"}>
                <li>
                  We cannot accept any liability for any error in
                  certificate/report, which is based on any error or inaccuracy
                  in a public register. Nor will we be liable for any
                  information contained within a certificate/report, which is
                  based on information that we have obtained from a third party
                  (not being information derived from the public register).
                </li>
                <li>
                  We cannot accept any responsibility for any inaccuracy or
                  error in the certificate/report that is based on incomplete or
                  inaccurate information supplied by you.
                </li>
                <li>
                  Subject to any other provisions in these Conditions, we will
                  not be liable to you for any loss, damages, costs or expenses
                  caused directly or indirectly by a delay in delivery to you
                  (even if caused by our negligence).
                </li>
                <li>
                  We will not be liable for any loss of actual or anticipated
                  profits or savings, loss of business, loss of opportunity or
                  for any special, indirect or consequential loss whether
                  arising from a breach of these Conditions or negligence in
                  performing the Services even if we were advised of or knew of
                  likelihood of such loss occurring.
                </li>
                <li>
                  Our entire aggregate liability to you for direct loss arising
                  from our being in breach of these Conditions or negligent in
                  the course of performing the Services will not exceed the cost
                  of the Service.
                </li>
                <li>
                  By placing an EPC order, you are confirming that you require
                  us to complete an EPC and replace any in date and active EPCs
                  that may exist, even if no changes have been made to the
                  property.
                </li>
              </ul>
            </li>
            <li>
              Pricing
              <ul className={"bg-blue-400 ml-5 circle-list ml-10"}>
                <li>
                  The website prices quoted are for properties anywhere on the
                  mainland of England and Wales.
                </li>
                <li>
                  Prices for all services differ and are based on multiple
                  factors, Including; Postcode of the property, Type and Size of
                  the property, No. of consumer units and No. of appliances etc.
                </li>
                <li>
                  Should we attend a property and find out the information
                  provided at the time of quotation/order was not accurate, an
                  additional fee will be requested before we can provide the
                  report/certificate.
                </li>
                <li>
                  <b>
                    We require payments to be cleared at-least 24 hours prior
                    the booked appointment(s) or you may risk losing your
                    appointment(s) or delaying the process and delivery of the
                    reports/certificates. We reserve the right to cancel your
                    un-paid order and terminate our services forthwith.
                  </b>
                </li>
                <li>
                  We do not send payment receipts or booking confirmations by
                  post. Payment confirmation will be sent to the email address
                  you provided.
                </li>
                <li>The method of payment will be as agreed between us.</li>
                <li>
                  If your Instruction is made under false pretence an additional
                  fee may be due and the report/certificate will not be issued
                  until we receive receipt of said additional fee.
                </li>
                <li>
                  Nationwide Services-UK Ltd acts as an agent on your behalf
                  when paying Engineers/Assessors.
                </li>
                <li>You are responsible for paying the Engineers/Assessors.</li>
                <li>
                  Nationwide Services-UK Ltd is authorised by you to pay the
                  Engineers/Assessors on your behalf.
                </li>
                <li>
                  You are aware that the services are to be provided to you by a
                  third party.
                </li>
              </ul>
            </li>
            <li>
              Cancellation
              <ul className={"bg-blue-400 ml-5 circle-list ml-10"}>
                <li>
                  Should you wish to cancel or re-schedule an order, you agree
                  to give us as much notice as is reasonably practicable. we
                  require a minimum 24 hours’ notice from the scheduled
                  appointment during our standard working hours.
                </li>
                <li>
                  Should we attend a pre-agreed appointment and not be provided
                  access for any reason, you will be liable to pay a call-out
                  fee before another appointment can be made.
                </li>
                <li>
                  We reserve the right to cancel any instruction after the
                  confirmation of order.
                </li>
                <li>
                  We are not obligated to inform the client of our reason for
                  cancellation, we will do our best to provide as much
                  information as possible. In this unlikely event, the client
                  will be contacted directly by a member of staff to discuss a
                  refund.
                </li>
              </ul>
            </li>
          </ul>
          <h1>
            <b>Complaints</b>
          </h1>
          <br />
          <ul className="list-disc list-inside bg-blue-400 footer-paragraph">
            <li>
              If you want to make a complaint, we will deal with it speedily and
              fairly. We will acknowledge your complaint within 5 working days
              of receipt and try and resolve your complaint fully within 4
              weeks. If there are valid reasons for consideration of the
              complaint taking longer, we will keep you fully informed in
              writing or via telephone or email and you will receive a response
              at the very latest within 8 weeks.
            </li>
            <li>
              If you are unhappy with our final resolution of your complaint
              then we recommend you approach The Citizens Advice, Trading
              Standards or seek independent advice. Complaints should be sent
              to: Nationwide Services-UK Ltd | Kemp House, 160 City Road,
              London, United Kingdom, EC1V 2NX, Phone: 0300 140 0023 |
              complaints@nationwidesurveyors.org.uk
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsCondition;
