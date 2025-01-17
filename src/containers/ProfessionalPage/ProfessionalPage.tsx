import { MapPinIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { Tab } from "@headlessui/react";
import CommentListing from "components/CommentListing/CommentListing";
import StartRating from "components/StartRating/StartRating";
import { DEMO_PROJECT_LISTINGS } from "data/listings";
import React, { FC, Fragment, useState } from "react";
import Avatar from "shared/Avatar/Avatar";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import SocialsList from "shared/SocialsList/SocialsList";
import { Helmet } from "react-helmet";
import ProjectCard from "components/ProjectCard/ProjectCard";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import SectionVideo from "./SectionVideo";

export interface ProfessionalPageProps {
  className?: string;
}

const ProfessionalPage: FC<ProfessionalPageProps> = ({ className = "" }) => {
  let [categories] = useState(["Projets"]);

  const renderSidebar = () => {
    return (
      <div className=" w-full flex flex-col items-center text-center sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-6 sm:space-y-7 px-0 sm:p-6 xl:p-8">
        <Avatar
          hasChecked
          hasCheckedClass="w-6 h-6 -top-0.5 right-2"
          sizeClass="w-28 h-28"
        />

        {/* ---- */}
        <div className="space-y-3 text-center flex flex-col items-center">
          <h2 className="text-3xl font-semibold">Guy Rodrigue</h2>
          <h3 className="text-2xl font-semibold">
            Menuisier Métallique, Chaudronnier
          </h3>
          <StartRating className="!text-base" />
        </div>

        {/* ---- */}
        <p className="text-neutral-500 dark:text-neutral-400">
          Spécialisé dans le travail du fer, la menuiserie métallique est un art
          que j'ai su perfectionné au sein de mon propre atelier au cours de mes
          +15 années d'expérience
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
              Douala, Cameroun
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
              Parle Français, Yemba
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <WrenchScrewdriverIcon className="h-6 w-6 text-neutral-400" />
            <span className="text-neutral-6000 dark:text-neutral-300">
              Menuiserie métallique
            </span>
          </div>
          {/* SECTION */}
          <SectionVideo />
        </div>
      </div>
    );
  };

  const renderSection1 = () => {
    return (
      <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">
            Les réalisations de Guy Rodrigue
          </h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Les réalisations de Guy Rodrigue, diverses et variées, vous offrent
            un aperçu de la qualité de son travail.
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
                  {DEMO_PROJECT_LISTINGS.filter((_, i) => i < 4).map(
                    (project) => (
                      <ProjectCard key={project.id} data={project} />
                    )
                  )}
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

export default ProfessionalPage;
