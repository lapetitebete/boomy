import CardProfessionalBox from "components/CardProfessionalBox/CardProfessionalBox";
import CardProfessionalBox2 from "components/CardProfessionalBox2/CardProfessionalBox2";
import Heading from "components/Heading/Heading";
import { DEMO_PROFESSIONALS } from "data/professionals";
import { ProfessionalType } from "data/types";
import React, { FC } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";

export interface SectionGridProfessionalBoxProps {
  className?: string;
  professionals?: ProfessionalType[];
  boxCard?: "box1" | "box2";
  gridClassName?: string;
}

const DEMO_DATA = DEMO_PROFESSIONALS.filter((_, i) => i < 10);

const SectionGridProfessionalBox: FC<SectionGridProfessionalBoxProps> = ({
  className = "",
  professionals = DEMO_DATA,
  boxCard = "box1",
  gridClassName = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ",
}) => {
  return (
    <div
      className={`nc-SectionGridAuthorBox relative ${className}`}
      data-nc-id="SectionGridAuthorBox"
    >
      <Heading desc="Rating based on customer reviews" isCenter>
        Top 10 professionals of the month
      </Heading>
      <div className={`grid gap-6 md:gap-8 ${gridClassName}`}>
        {professionals.map((professional, index) =>
          boxCard === "box2" ? (
            <CardProfessionalBox2
              key={professional.id}
              professional={professional}
            />
          ) : (
            <CardProfessionalBox
              index={index < 3 ? index + 1 : undefined}
              key={professional.id}
              professional={professional}
            />
          )
        )}
      </div>
      <div className="mt-16 flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-5">
        <ButtonSecondary>Show me more </ButtonSecondary>
        <ButtonPrimary>Become a host</ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionGridProfessionalBox;
