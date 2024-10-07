import React, { FC } from "react";
import rightImgPng from "images/our-features.png";
import NcImage from "shared/NcImage/NcImage";
import Badge from "shared/Badge/Badge";

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: string;
  type?: "type1" | "type2";
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "lg:py-14",
  rightImg = rightImgPng,
  type = "type1",
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="flex-grow">
        <NcImage src={rightImg} />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          BENnefices
        </span>
        <h2 className="font-semibold text-4xl mt-5">Un projet... </h2>

        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <Badge color="red" name="Rapide" />
            <span className="block text-xl font-semibold">
              Une recherche intuitive
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Gagnez du temps en trouvant simplement les meilleurs
              professionnels pour la conduite de vos travaux
            </span>
          </li>
          <li className="space-y-4">
            <Badge name="Professionnel" />
            <span className="block text-xl font-semibold">
              Talent et savoir-faire
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Nous mettons en avant des professionnels compétents et passionnés
              par leur activité
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="green" name="Economique" />
            <span className="block text-xl font-semibold">
              Une réalisation à la hauteur
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Plus de besoin de reprendre plusieurs fois un même travail avant
              d’atteindre satisfaction
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="purple" name="Honnête" />
            <span className="block text-xl font-semibold">
              Confiance et sérénité
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Rencontrez des professionnels de bonne moralité ayant fait leurs
              preuves sur le terrain
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="pink" name="Recommandé" />
            <span className="block text-xl font-semibold">
              La meilleure des publicités
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Appuyez-vous sur les avis laissés par d’autres utilisateurs
              satisfaits
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
