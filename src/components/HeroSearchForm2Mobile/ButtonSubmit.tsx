import React, { FC } from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

interface Props {
  className?: string;
  onClick?: () => void;
  href?: string;
}
const ButtonSubmit: FC<Props> = ({
  className = "",
  onClick = () => {},
  href = "/listing-stay",
}) => {
  // const searchParams = useSelector((state) => state.searchQuery);

  const searchParams = {
    profession: "menuisier",
    location: "douala",
  };

  return (
    <Link
      to={{
        pathname: "/professionnels/",
        search: `?profession=${searchParams.profession}&?location=${searchParams.location}`,
      }}
      relative="path"
    >
      <button
        type="button"
        onClick={(e) => {
          onClick();
        }}
        className={`flex-shrink-0 px-4 py-2.5 cursor-pointer rounded-xl bg-primary-6000 flex items-center justify-center text-neutral-50 focus:outline-none ${className} relative z-20`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span className="ml-2">Rechercher</span>
      </button>
    </Link>
  );
};

export default ButtonSubmit;
