import HarmonyJPEG from "../../assets/companies/harmony.jpg";

const EXPERIENCES = {
  experience_one: {
    companyName: "Harmony Erp",
    companyLogo: HarmonyJPEG,
    EN: {
      companyLocation: "Sakarya/Turkey",
      companyAbout:
        "Bug bounty platform for security researchers to find cybersecurity vulnerabilities. EN",
      myProfession:
        "Development of backend s architecture and services using Nestjs, Typescript, and MongoDB. I developed test scenarios with Mocha for our software platform. EN",
      workingPosition: "Front-end DeveloperEN",
    },
    TR: {
      companyLocation: "Sakarya/Türkiye",
      companyAbout:
        "Bug bounty platform for security researchers to find cybersecurity vulnerabilities. TR",
      myProfession:
        "Development of backend s architecture and services using Nestjs, Typescript, and MongoDB. I developed test scenarios with Mocha for our software platform. TR",
      workingPosition: "Front-end DeveloperTR",
    },
    workingDate: {
      startDate: "10/2022",
      endDate: "10/2023",
    },
  },

  experience_two: {
    companyName: "Bug Bounty",
    companyLogo: HarmonyJPEG,
    EN: {
      companyLocation: "Pendik/Turkey",
      companyAbout:
        "Bug bounty platform for security researchers to find cybersecurity vulnerabilities. EN",
      myProfession:
        "Development of backend s architecture and services using Nestjs, Typescript, and MongoDB. I developed test scenarios with Mocha for our software platform. EN",
      workingPosition: "Front-end DeveloperEN",
    },
    TR: {
      companyLocation: "Pendik/Türkiye",
      companyAbout:
        "Bug bounty platform for security researchers to find cybersecurity vulnerabilities. TR",
      myProfession:
        "Development of backend s architecture and services using Nestjs, Typescript, and MongoDB. I developed test scenarios with Mocha for our software platform. TR",
      workingPosition: "Front-end DeveloperTR",
    },
    workingDate: {
      startDate: "10/2021",
      endDate: "10/2022",
    },
  },
};

export const experiencesPrepareForExperiencesPage = () => {
  let experiences = EXPERIENCES;
  let experiencesArr = Object.values(experiences);

  return experiencesArr;
};
