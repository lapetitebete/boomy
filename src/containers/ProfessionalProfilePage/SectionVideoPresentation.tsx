import Heading from "shared/Heading/Heading";
import NcImage from "shared/NcImage/NcImage";
import NcPlayIcon from "shared/NcPlayIcon/NcPlayIcon";
import React, { FC, useState } from "react";
import thumbnail from "images/projects/fonkou-3/20240207-DSC_0122.jpg";

export interface VideoPresentationType {
  id: string;
  title: string;
  thumbnail: string;
}

export interface SectionVideoPresentationProps {
  video?: VideoPresentationType;
  className?: string;
}

const VIDEO_DEMO: VideoPresentationType = {
  id: "Ao7e4iisKMs",
  title: "Présentation - Guy Rodrigue",
  thumbnail: thumbnail,
};

const SectionVideoPresentation: FC<SectionVideoPresentationProps> = ({
  video = VIDEO_DEMO,
  className = "",
}) => {
  const [isPlay, setIsPlay] = useState(false);

  const renderMainVideo = () => {
    return (
      <div
        // className="group aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px] will-change-transform"
        className="group aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px] will-change-transform"
        title={video.title}
      >
        {isPlay ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <div
              onClick={() => setIsPlay(true)}
              className="cursor-pointer absolute inset-0 flex items-center justify-center z-10"
            >
              <NcPlayIcon />
            </div>
            <NcImage
              containerClassName="absolute inset-0 "
              className="object-cover w-full h-full transform transition-transform group-hover:scale-105 duration-300 nc-will-change-transform"
              src={video.thumbnail}
              title={video.title}
              alt={video.title}
            />
          </>
        )}
      </div>
    );
  };

  return (
    <div className={`nc-SectionVideos ${className}`}>
      <div className="flex flex-col relative sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row">
        <div className="flex-grow relative w-2/3 pb-2 sm:pb-4 lg:pb-0 lg:pr-5 xl:pr-6">
          {renderMainVideo()}
        </div>
      </div>
    </div>
  );
};

export default SectionVideoPresentation;
