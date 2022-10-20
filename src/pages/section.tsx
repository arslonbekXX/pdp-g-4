import React from "react";
import { useParams } from "react-router-dom";

interface SectionProps {}

const Section: React.FC<SectionProps> = () => {
  const { sectionID } = useParams<{ sectionID: string }>();
  return <h1>Section sectionID = ${sectionID}</h1>;
};

export default Section;
