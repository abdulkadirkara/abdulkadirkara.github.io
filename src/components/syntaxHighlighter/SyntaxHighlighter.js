import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./syntaxHighlighter.css";

const SyntaxHighlighterComp = ({
  data,
  showLineNumbers = true,
  fontSize = "20px",
}) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDark}
      showLineNumbers={showLineNumbers}
      customStyle={{ fontSize: fontSize }}
    >
      {data.join("\n")}
    </SyntaxHighlighter>
  );
};

export default SyntaxHighlighterComp;
