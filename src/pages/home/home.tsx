import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { http } from "../../services";
import classes from "./home.module.scss";
import { Language, HomeProps, Section } from "./types";

const Home: React.FC<HomeProps> = () => {
  const navigate = useNavigate();
  const { languageID } = useParams<{ languageID: string }>();
  const [languages, setLanguages] = useState<Language[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingSection, setLoadingSection] = useState(true);
  const [sections, setSections] = useState<Section[]>([]);

  React.useEffect(() => {
    http.get(`/language/list-for-users`).then(({ data }) => {
      console.log("data = ", data);
      setLanguages(data.data);
      setLoading(false);
      if (!languageID) navigate(`/${data.data[0].id}`);
    });
  }, []);

  React.useEffect(() => {
    setLoadingSection(true);
    http.get(`/section/by-language-id/${languageID}`).then(({ data }) => {
      setSections(data.data);
      setLoadingSection(false);
    });
  }, [languageID]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className={classes.wrapper}>
      <div>
        <h3>Languages</h3>
        <ol>
          {languages.map((language) => (
            <li style={languageID == language.id ? { background: "red" } : {}} key={language.id} onClick={() => navigate(`/${language.id}`)}>
              {language.title}
            </li>
          ))}
        </ol>
      </div>
      {loadingSection && <h1>Sections loading...</h1>}
      {sections.length > 0 && (
        <div>
          <h3>Sections</h3>
          <ol>
            {sections.map((section) => (
              <li key={section.id} onClick={() => navigate(`/section/${section.id}`)}>
                {section.title}
                <p>{section.description}</p>
                <span>Max Rate = {section.maxRate}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default Home;
