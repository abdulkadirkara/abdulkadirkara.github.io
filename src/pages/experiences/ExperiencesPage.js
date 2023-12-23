import React, { useEffect, useState } from "react";

import ExperienceTimelineCard from "../../components/multibleComp/customCard/experienceCard/ExperienceTimelineCard";
import ExperienceMobileCard from "../../components/multibleComp/customCard/experienceCard/ExperienceMobileCard";
import TimelineComp from "../../components/Timeline";
import { experiencesPrepareForExperiencesPage } from "../../utils/constants/experiencesConstant";
import BoxComp from "../../components/Box";

let experiencesData = experiencesPrepareForExperiencesPage();

export default function ExperiencesPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth < 1200 ? (
        <BoxComp
          style={{ display: "flex", flexDirection: "column", gap: "30px" }}
        >
          {experiencesData.map((item, index) => (
            <ExperienceMobileCard
              key={index}
              data={item}
              windowWidth={windowWidth}
            />
          ))}
        </BoxComp>
      ) : (
        <TimelineComp
          data={experiencesData}
          contentElement={ExperienceTimelineCard}
        />
      )}
    </>
  );
}
