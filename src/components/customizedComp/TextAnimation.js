import React, { useEffect, useState } from "react";
import TypographyComp from "../Typography";

const TextAnimation = ({
  textArray = [],
  animationSpeed = 10,
  isCursor = true,
  cursorSpeed = 500,
  typographyStyle,
  spanStyle,
  getTextWordColorMethod,
  isTextWordColor,
}) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [lines, setLines] = useState([""]);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    let interval;

    const typeNextCharacter = () => {
      if (currentIndex < textArray[currentLine].length) {
        setLines((prevLines) => {
          const lastLine = prevLines.length - 1;
          const updatedLine =
            prevLines[lastLine] + textArray[currentLine][currentIndex];
          const updatedLines = [...prevLines.slice(0, lastLine), updatedLine];
          return updatedLines;
        });
        currentIndex++;
      } else if (currentLine < textArray.length - 1) {
        setLines((prevLines) => [...prevLines, ""]);
        setCurrentLine((prevLine) => prevLine + 1);
        currentIndex = 0;
      } else {
        clearInterval(interval);
        setCursorVisible(false);
      }
    };

    interval = setInterval(typeNextCharacter, animationSpeed);

    return () => {
      clearInterval(interval);
    };
  }, [currentLine, textArray]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, cursorSpeed);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div>
      {lines.map((line, index) => (
        <TypographyComp
          key={index}
          {...(typographyStyle ? { style: typographyStyle } : {})}
        >
          {isTextWordColor
            ? line.split(" ").map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  style={{
                    color: getTextWordColorMethod(word),
                    ...spanStyle,
                  }}
                >
                  {word}{" "}
                </span>
              ))
            : line}

          {index === lines.length - 1 && isCursor && cursorVisible && "_"}
        </TypographyComp>
      ))}
    </div>
  );
};

export default TextAnimation;
