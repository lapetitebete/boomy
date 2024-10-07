import Heading from "shared/Heading/Heading";
import NcImage from "shared/NcImage/NcImage";
import NcPlayIcon from "shared/NcPlayIcon/NcPlayIcon";
import React, { FC, useState } from "react";
import thumbnail from "images/projects/fonkou-3/20240207-DSC_0122.jpg";

export interface VideoType {
  id: string;
  title: string;
  thumbnail: string;
}

export interface SectionVideoProps {
  video?: VideoType;
  className?: string;
}

const VIDEO_DEMO: VideoType = {
  id: "Ao7e4iisKMs",
  title: "Présentation - Guy Rodrigue",
  thumbnail: thumbnail,
};

const SectionVideo: FC<SectionVideoProps> = ({
  video = VIDEO_DEMO,
  className = "",
}) => {
  const [isPlay, setIsPlay] = useState(false);

  const renderMainVideo = () => {
    return (
      <div
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
      {/* <Heading
        desc="Check out our hottest videos. View more and share more new
          perspectives on just about any topic. Everyone’s welcome."
      >
        🎬 The Videos
      </Heading> */}

      <div className="flex flex-col relative sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row">
        <div className="absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl bg-primary-100 bg-opacity-40 z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-1/2 dark:bg-neutral-800 dark:bg-opacity-40"></div>
        <div className="flex-grow relative pb-2 sm:pb-4 lg:pb-0 lg:pr-5 xl:pr-6">
          {renderMainVideo()}
        </div>
      </div>
    </div>
  );
};

export default SectionVideo;
