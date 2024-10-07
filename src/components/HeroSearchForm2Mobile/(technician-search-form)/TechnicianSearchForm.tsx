import React, { useState } from "react";
import LocationInput from "../LocationInput";
import ProfessionInput from "../ProfessionInput";

const TechnicianSearchForm = () => {
  //
  const [fieldNameShow, setFieldNameShow] = useState<"profession" | "location">(
    "profession"
  );
  //
  const [professionInputTo, setProfessionInputTo] = useState("");
  const [locationInputTo, setLocationInputTo] = useState("");

  const renderInputProfession = () => {
    const isActive = fieldNameShow === "profession";
    return (
      <div
        className={`w-full bg-white dark:bg-neutral-800 ${
          isActive
            ? "rounded-2xl shadow-lg"
            : "rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]"
        }`}
      >
        {!isActive ? (
          <button
            className={`w-full flex justify-between text-sm font-medium p-4`}
            onClick={() => setFieldNameShow("profession")}
          >
            <span className="text-neutral-400">Qui</span>
            <span>{professionInputTo || "Profession"}</span>
          </button>
        ) : (
          <ProfessionInput
            defaultValue={professionInputTo}
            onChange={(value) => {
              setProfessionInputTo(value);
            }}
          />
        )}
      </div>
    );
  };

  const renderInputLocation = () => {
    const isActive = fieldNameShow === "location";
    return (
      <div
        className={`w-full bg-white dark:bg-neutral-800 ${
          isActive
            ? "rounded-2xl shadow-lg"
            : "rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]"
        }`}
      >
        {!isActive ? (
          <button
            className={`w-full flex justify-between text-sm font-medium p-4`}
            onClick={() => setFieldNameShow("location")}
          >
            <span className="text-neutral-400">Où</span>
            <span>{locationInputTo || "Ville"}</span>
          </button>
        ) : (
          <LocationInput
            defaultValue={locationInputTo}
            onChange={(value) => {
              setLocationInputTo(value);
            }}
          />
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="w-full space-y-5">
        {/*  */}
        {renderInputProfession()}
        {/*  */}
        {renderInputLocation()}
      </div>
    </div>
  );
};

export default TechnicianSearchForm;
