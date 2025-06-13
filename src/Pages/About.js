import React from "react";
import Work from "../Components/Work";
import { personalDetails, internshipDetails, eduDetails, organizationDetails, workExperienceDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
      </section>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {React.Children.toArray(
          workExperienceDetails.map((detail) => (
            <Work
              position={detail.Position}
              company={detail.Company}
              location={detail.Location}
              type={detail.Type}
              duration={detail.Duration}
              Description={detail.Description}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Internship Experience
        </h1>
        {React.Children.toArray(
          internshipDetails.map((detail) => (
            <Work
              position={detail.Position}
              company={detail.Company}
              location={detail.Location}
              type={detail.Type}
              duration={detail.Duration}
              Description={detail.Description}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Organization Experience
        </h1>
        {React.Children.toArray(
          (typeof organizationDetails !== "undefined"
            ? organizationDetails
            : []
          ).map((detail) => (
            <Work
              position={detail.Position}
              organization={detail.Organization}
              location={detail.Location}
              type={detail.Type}
              duration={detail.Duration}
              Description={detail.Description}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map((detail) => (
            <Work
              position={detail.Position}
              company={detail.Company}
              location={detail.Location}
              type={detail.Type}
              duration={detail.Duration}
              Description={detail.Description}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
