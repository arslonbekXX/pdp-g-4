import React from "react";
import { useAppSelector } from "../../hooks/root";
import homeCss from "./home.module.scss";
import { GiTrophyCup } from "react-icons/gi";
import Rating from "@mui/material/Rating";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";


const Problem: React.FC = () => {
  const problems = useAppSelector((state) => state.problems);
  return (
    <div className={homeCss.problems_page}>
      <div className={homeCss.problem_Cards_space}>
        {problems &&
          problems.map((problem) => {
            return (
              <div key={problem.id} className={homeCss.problemCard}>
                <div className={homeCss.name_rate}>
                  <p className={homeCss.name}>{problem.name}</p>
                  <span className={homeCss.Rating}>
                    <Rating name="read-only" value={4} readOnly />
                  </span>
                </div>
                <div className={homeCss.description}>
                  <p>{problem.describe}</p>
                </div>
                <div className={homeCss.vector}>
                  <span>
                    <GiTrophyCup />
                  </span>
                  <p>Task</p>
                </div>
              </div>
            );
          })}

        <Stack spacing={2}>
          <Pagination
            count={2}
            variant="outlined"
            shape="rounded"
            className={homeCss.pagnation}
          />
        </Stack>
      </div>
    </div>
  );
};

export default Problem;
