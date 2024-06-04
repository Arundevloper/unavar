import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import Banner from "@/components/subcomponents/banner";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div className="relative overflow-hidden bg-cover bg-no-repeat p-40 text-center bg-img bg-[url(/images/web.png)]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a className="text-4xl font-bold text-white">CONFIDENTIAL POLICY</a>
          <p className="text-white text-l md:text-xl m-0 md:m-3 my-5 w-screen px-3"></p>
          <a className="text-white text-lg font-semibold"></a>
        </div>
      </div>
      {/* ------- */}
      <div className="flex flex-col justify-center align-middle p-2 md:p-20">
        <div className="flex flex-col p-10">
          <p className="text-black font-bold text-lg">SCOPE</p>
          <p className="text-black font-normal text-wrap text-md p-3">
            To provide guidance and direction with respect to the management,
            use and disclosure of confidential datum. To secure data of the
            clients from the top management to the lower employee of the
            company.
          </p>
        </div>
        <div className="flex flex-col p-10">
          <p className="text-black font-bold text-lg">DESCRIPTION</p>
          <p className="text-black font-normal text-wrap text-md p-3">
            The employees and personnel of UNAVAR FOOD INSPECTION AND
            CERTIFICATION PRIVATE LIMITED, have a duty of maintaining the
            confidentiality of information received by them in the course of
            their employment or engagement.
          </p>
          <p className="text-black font-normal text-wrap text-md p-3">
            This Confidentiality Policy documents the confidentiality and non –
            disclosure duties and obligations of the employees and personnel of
            UNAVAR FOOD INSPECTION AND CERTIFICATION PRIVATE LIMITED.
          </p>
          <p className="text-black font-normal text-wrap text-md p-3">
            All employees and personnel of the UNAVAR FOOD INSPECTION AND
            CERTIFICATION PRIVATE LIMITED have a duty to keep such information
            strictly confidential and to use it only for the proper purposes in
            accordance with the law.
          </p>
          <p className="text-black font-bold text-wrap text-md p-3">
            UNAVAR FOOD INSPECTION AND CERTIFICATION PRIVATE LIMITED, and every
            member of its certification and inspection body team, employees, and
            contractors commits to adhere to the following policies:
          </p>

          <ul className="list-disc ml-5 pl-5">
            <li>
              All information received by or available to UNAVAR FOOD INSPECTION
              AND CERTIFICATION PRIVATE LIMITED, staff, auditors, contractors or
              committee members (in whatever format) received in conducting
              audit activities, or during other certification activities, or
              during any dealings with an organization for any other reason
              shall be regarded as strictly confidential and shall not be
              divulged to any 3rd party without the express permission of the
              organization or individual concerned.
            </li>
            <br></br>
            <li>
              The requirement to keep confidential any information will also
              include any organization that has a legitimate right to audit or
              inspect UNAVAR FOOD INSPECTION AND CERTIFICATION PRIVATE LIMITED.
              Where UNAVAR FOOD INSPECTION AND CERTIFICATION PRIVATE LIMITED, is
              required by law to release confidential information to a third
              party the client or individual concerned shall, unless regulated
              by law, be notified in advance of the information provided However
              where the organization is seen to be operating contrary to legal
              requirements or has operating practices which pose a danger to
              staff, customers or the environment UNAVAR FOOD INSPECTION AND
              CERTIFICATION PRIVATE LIMITED, reserves the right to immediately
              report any such incident to the relevant authority. Any such
              reporting will only be undertaken with the permission of SME/
              Technical Manager.
            </li>
            <br></br>
            <li>
              All records will be retained in a secure manner, only accessible
              to authorized staff via either paper records or password
              controlled electronic records. Contractors will be limited to
              accessing information produced by them in conducting an audit.
              Records will only be made available to organizations who can
              demonstrate a legitimate (and legal) right to view those records
              and specifically to Accreditation Bodies.
            </li>
          </ul>
        </div>

        <div className="flex flex-col p-10">
          <a className="text-black font-bold text-xl">
            CONFIDENTIALITY DECLARATIONS
          </a>
          <p className="text-black font-normal text-wrap text-md p-3">
            All staff, auditors, contractors, SME and other members will be
            required to agree to UNAVAR FOOD INSPECTION AND CERTIFICATION
            PRIVATE LIMITED, confidentiality policy and sign a confidentiality
            agreement. Contractors will also sign an agreement which also
            contains the responsibility to maintain confidentiality.
          </p>
          <p className="text-black font-normal text-wrap text-md p-3">
            The audit personnel shall not, either during continuance of
            employment or thereafter, use to the prejudice of the certification
            body divulge to any person, any sensitive information concerning the
            inspection body, customer confidential information. In the event of
            ceasing of the employment, the personnel shall return all the
            document or paper copies or electronic copies of the documents or
            audit reports. Upon cessation of services, audit personnel shall not
            photocopy any such documents or records for subsequent use.
          </p>
        </div>
      </div>
      <footer>
        <div>
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default page;
