import { MapPinIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { Tab } from "@headlessui/react";
import CommentListing from "components/CommentListing/CommentListing";
import StartRating from "components/StartRating/StartRating";
import { DEMO_PROJECT_LISTINGS } from "data/listings";
import React, { FC, Fragment, useState } from "react";
import Avatar from "shared/Avatar/Avatar";
import SocialsList from "shared/SocialsList/SocialsList";
import { Helmet } from "react-helmet";
import ProjectCard from "components/ProjectCard/ProjectCard";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import ButtonThird from "shared/Button/ButtonThird";
// import SectionVideo from "./SectionVideo";
import SectionVideoPresentation from "./SectionVideoPresentation";
import { useParams } from "react-router-dom";
import { DEMO_PROFESSIONALS } from "data/professionals";

export interface ProfessionalProfilePageProps {
  className?: string;
}

const ProfessionalProfilePage: FC<ProfessionalProfilePageProps> = ({
  className = "",
}) => {
  const params = useParams();
  let [categories] = useState(["Projets"]);

  const professional = DEMO_PROFESSIONALS.filter(
    (professional) => professional.id.toString() === params.professionalId
  )[0];

  const video = {
    id: "pMbffErAHSI",
    title: `Présentation - ${professional.displayName}`,
    thumbnail: professional.thumbnail,
  };

  const experience = new Date().getFullYear() - professional.since;

  const renderSidebar = () => {
    return (
      <>
        <div className="grid grid-cols-1 sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-6 sm:space-y-7 px-0 sm:p-6 xl:p-8">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Introduction</h3>
            <div>{professional.desc}</div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Services</h3>
            <div>{professional.services.join(" • ")}</div>
          </div>

          {/* ---- */}
          <div className="flex flex-col items-center">
            <div className="w-1/2 border-b-2 border-neutral-200 dark:border-neutral-700"></div>
          </div>

          <div className="grid grid-cols-2">
            {/* First Column */}
            <div className="grid grid-rows-7 space-y-4">
              <h3 className="text-xl font-semibold">Général</h3>
              {/* Country, City */}
              <div className="flex flex-row space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-neutral-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className="text-neutral-6000 dark:text-neutral-300">
                  {professional.city}, {professional.country}
                </span>
              </div>
              {/* Formation */}
              <div className="flex flex-row space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-neutral-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
                <span className="text-neutral-6000 dark:text-neutral-300">
                  {professional.formation}
                </span>
              </div>

              {/* Languages */}
              <div className="flex flex-row space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-neutral-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
                <span className="text-neutral-6000 dark:text-neutral-300">
                  Parle {" " + professional.spokenLanguages.join(", ")}
                </span>
              </div>
              {/* Experience */}
              <div className="flex flex-row space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-neutral-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span className="text-neutral-6000 dark:text-neutral-300">
                  +
                  {`${experience} année${
                    experience > 1 ? "s" : ""
                  } d'expérience`}
                </span>
              </div>
              {/* Verified */}
              <div className="flex flex-row space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-neutral-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
                <span className="text-neutral-6000 dark:text-neutral-300">
                  Profil Vérifié
                </span>
              </div>
              {/* Collaborators */}
              <div className="flex flex-row space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-neutral-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
                <span className="text-neutral-6000 dark:text-neutral-300">
                  {`${2}-${5} Collaborateurs`}
                </span>
              </div>
            </div>

            {/* Second Column */}
            <div className="grid grid-rows-7 space-y-4">
              <h3 className="text-xl font-semibold">Moyens de paiement</h3>
              {/* Cash */}
              <div className="flex flex-row space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-neutral-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  />
                </svg>
                <span className="text-neutral-6000 dark:text-neutral-300">
                  Cash
                </span>
              </div>
              {/* Mobile money */}
              <div className="flex flex-row space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-neutral-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
                <span className="text-neutral-6000 dark:text-neutral-300">
                  Mobile money
                </span>
              </div>
              {/* Transfert bancaire */}
              <div className="flex flex-row space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-neutral-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                  />
                </svg>
                <span className="text-neutral-6000 dark:text-neutral-300">
                  Credit card
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="flex flex-col items-center">
              <ButtonPrimary href={"/checkout"} className="w-3/4 space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
                <span>Contacter</span>
              </ButtonPrimary>
            </div>

            <div className="flex flex-col items-center">
              <ButtonSecondary href={"/checkout"} className="w-3/4 space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>
                <span>Partager</span>
              </ButtonSecondary>
            </div>
          </div>

          {/* ---- */}
          <div className="flex flex-col items-center">
            <div className="w-1/2 border-b-2 border-neutral-200 dark:border-neutral-700"></div>
          </div>

          {/* PRESENTATION VIDEO */}
          <div className="grid grid-cols-1 space-y-2 sm:space-y-4 px-0 sm:p-6 xl:p-8">
            <h3 className="text-xl font-semibold">Présentation Vidéo</h3>

            <SectionVideoPresentation video={video} />
          </div>

          {/* ---- */}
          <div className="flex flex-col items-center">
            <div className="w-1/2 border-b-2 border-neutral-200 dark:border-neutral-700"></div>
          </div>

          {/* PHOTOS REALISATIONS */}
        </div>

        <div className="w-full flex flex-col items-center text-center sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-6 sm:space-y-7 px-0 sm:p-6 xl:p-8">
          <Avatar
            hasChecked
            hasCheckedClass="w-6 h-6 -top-0.5 right-2"
            sizeClass="w-28 h-28"
            imgUrl={professional.avatar}
          />

          {/* ---- */}
          <div className="space-y-3 text-center flex flex-col items-center">
            <h2 className="text-3xl font-semibold">
              {professional.displayName}
            </h2>
            <h3 className="text-xl text-gray-400 font-semibold">
              {professional.jobName}
            </h3>
            <StartRating className="!text-base" />
          </div>

          {/* ---- */}
          <p className="text-neutral-500 dark:text-neutral-400">
            {professional.desc}
          </p>

          {/* ---- */}
          {/* <SocialsList
          className="!space-x-3"
          itemClass="flex items-center justify-center w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xl"
        /> */}

          {/* ---- */}
          <ButtonPrimary href={"/checkout"}>Contacter</ButtonPrimary>

          {/* ---- */}
          <div className="border-b border-neutral-200 dark:border-neutral-700 w-14"></div>

          {/* ---- */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-neutral-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="text-neutral-6000 dark:text-neutral-300">
                {professional.city}, {professional.country}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-neutral-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <span className="text-neutral-6000 dark:text-neutral-300">
                {/* Speaking English */}
                Parle{" "}
                {professional.spokenLanguages.length > 1
                  ? professional.spokenLanguages.join(", ")
                  : professional.spokenLanguages}
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <WrenchScrewdriverIcon className="h-6 w-6 text-neutral-400" />
              <span className="text-neutral-6000 dark:text-neutral-300">
                {professional.jobName}
              </span>
            </div>
            {/* SECTION */}
            <SectionVideoPresentation video={video} />
          </div>
        </div>
      </>
    );
  };

  const renderSection1 = () => {
    return (
      <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">
            Les réalisations de {professional.displayName}
          </h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Les réalisations de {professional.displayName}, diverses et variées,
            vous offrent un aperçu de la qualité de son travail.
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

        <div>
          <Tab.Group>
            <Tab.List className="flex space-x-1 overflow-x-auto">
              {categories.map((item) => (
                <Tab key={item} as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`flex-shrink-0 block !leading-none font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full focus:outline-none ${
                        selected
                          ? "bg-secondary-900 text-secondary-50 "
                          : "text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      } `}
                    >
                      {item}
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel className="">
                <div className="mt-8 grid grid-cols-1 gap-6 md:gap-7 sm:grid-cols-2">
                  {DEMO_PROJECT_LISTINGS.filter(
                    (project, i) => project.professional.id === professional.id
                  ).map((project) => (
                    <ProjectCard key={project.id} data={project} />
                  ))}
                </div>
                <div className="flex mt-11 justify-center items-center">
                  <ButtonSecondary>Show me more</ButtonSecondary>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    );
  };

  const renderSection2 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold">Reviews (23 reviews)</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

        {/* comment */}
        <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
          <CommentListing hasListingTitle className="pb-8" />
          <CommentListing hasListingTitle className="py-8" />
          <CommentListing hasListingTitle className="py-8" />
          <CommentListing hasListingTitle className="py-8" />
          <div className="pt-8">
            <ButtonSecondary>View more 20 reviews</ButtonSecondary>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`nc-AuthorPage ${className}`} data-nc-id="AuthorPage">
      <Helmet>
        <title>Login || Booking React Template</title>
      </Helmet>
      <main className="container mt-12 mb-24 lg:mb-32 flex flex-col lg:flex-row">
        <div className="block flex-grow mb-24 lg:mb-0">
          <div className="lg:sticky lg:top-24">{renderSidebar()}</div>
        </div>
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pl-10 flex-shrink-0">
          {renderSection1()}
          {renderSection2()}
        </div>
      </main>
    </div>
  );
};

export default ProfessionalProfilePage;
