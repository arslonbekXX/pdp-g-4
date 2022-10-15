import { createSlice } from "@reduxjs/toolkit";

const problems = [
  {
    name: "Warmap-1",
    describe: `Simple warmup problems to get started 
    (solutions available)`,
    id: 1,
  },
  {
    name: "Warmap-2",
    describe: `Simple warmup problems to get started (solutions available)`,
    id: 2,
  },
  {
    name: "Warmap-3",
    describe: `Simple warmup problems to get started (solutions available)`,
    id: 3,
  },
  {
    name: "String-1",
    describe: `Simple warmup problems to get started (solutions available)`,
    id: 4,
  },
  {
    name: "String-2",
    describe: `Simple warmup problems to get started (solutions available)`,
    id: 5,
  },
  {
    name: "String-3",
    describe: `Simple warmup problems to get started (solutions available)`,
    id: 6,
  },
  {
    name: "Logic-1",
    describe: `Simple warmup problems to get started (solutions available)`,
    id: 7,
  },
  {
    name: "Logic-2",
    describe: `Simple warmup problems to get started (solutions available)`,
    id: 8,
  },
  {
    name: "Logic-3",
    describe: `Simple warmup problems to get started (solutions available)`,
    id: 9,
  },
];

const problemSlice = createSlice({
  name: "problems",
  initialState: problems,
  reducers: {
    allProblems: (state, action) => {},
  },
});

export const { allProblems } = problemSlice.actions;

export default problemSlice.reducer;
