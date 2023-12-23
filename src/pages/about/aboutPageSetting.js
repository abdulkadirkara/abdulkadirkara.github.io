export const elementsProps = {
  aboutMe: {
    typographyStyle: {
      fontFamily: "monospace",
      fontSize: "x-large",
      color: "#9BAEC1",
    },
  },
};

const ABOUT_TEXT_CHARACTER_COLORING_ENUM = {
  critical_texts: [
    "HTML",
    "HTML.",
    "HTML,",
    "CSS",
    "CSS.",
    "CSS,",
    "JavaScript",
    "JavaScript.",
    "JavaScript,",
    "ReactJS",
    "ReactJS.",
    "ReactJS,",
    "VueJS",
    "VueJS.",
    "VueJS,",
    "Redux",
    "Redux.",
    "Redux,",
    "NextJS",
    "NextJS.",
    "NextJS,",
  ],
  high_texts: [
    "MaterialUI",
    "MaterialUI,",
    "MaterialUI.",
    "Bootstrap",
    "Bootstrap,",
    "Bootstrap.",
    "SemanticUI",
    "SemanticUI,",
    "SemanticUI.",
  ],
  medium_texts: [
    "NodeJS",
    "NodeJS,",
    "NodeJS.",
    "MongoDB",
    "MongoDB,",
    "MongoDB.",
    "Firebase",
    "Firebase,",
    "Firebase.",
  ],
  low_texts: [
    "postman",
    "postman,",
    "postman.",
    "cypress",
    "cypress,",
    "cypress.",
    "Git",
    "Git,",
    "Git.",
  ],
};

export const getAboutTextWordColor = (word) => {
  if (ABOUT_TEXT_CHARACTER_COLORING_ENUM.critical_texts.includes(word)) {
    return "#FEA55F";
  } else if (ABOUT_TEXT_CHARACTER_COLORING_ENUM.high_texts.includes(word)) {
    return "#43D9AD";
  } else if (ABOUT_TEXT_CHARACTER_COLORING_ENUM.medium_texts.includes(word)) {
    return "#5565E8";
  } else if (ABOUT_TEXT_CHARACTER_COLORING_ENUM.low_texts.includes(word)) {
    return "#C98BDF";
  } else {
    return "#9BAEC1";
  }
};
