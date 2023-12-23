export const elementsProps = {
  welcomeText: {
    typographyStyle: {
      fontFamily: "monospace",
      fontSize: "x-large",
      color: "white",
    },
  },
  whoAmI: {
    typographyStyle: {
      fontFamily: "monospace",
      fontSize: "xx-large",
      color: "#4D5BCE",
    },

    typographyMobileStyle: {
      fontFamily: "monospace",
      fontSize: "large",
      color: "#4D5BCE",
    },

    spanStyle: {
      whiteSpace: "pre",
    },
  },
};

const HOME_CODING_CHARACTER_COLORING_ENUM = {
  declaration_keywords: ["var", "let", "const"],
  methodNaming: ["whoAmI"],
  objectKeys: ["name:", "surname:", "profession:"],
  specialCharacters1: ["=", ",", ";"],
  specialCharacters2: ["{", "}", "};"],
};

export const getHomeCodingWordColor = (word) => {
  if (HOME_CODING_CHARACTER_COLORING_ENUM.declaration_keywords.includes(word)) {
    return "#569CD6";
  } else if (HOME_CODING_CHARACTER_COLORING_ENUM.objectKeys.includes(word)) {
    return "#3F8BB4";
  } else if (HOME_CODING_CHARACTER_COLORING_ENUM.methodNaming.includes(word)) {
    return "#9CDCFE";
  } else if (
    HOME_CODING_CHARACTER_COLORING_ENUM.specialCharacters1.includes(word)
  ) {
    return "white";
  } else if (
    HOME_CODING_CHARACTER_COLORING_ENUM.specialCharacters2.includes(word)
  ) {
    return "#FFD700";
  } else {
    return "#43D9AD";
  }
};
