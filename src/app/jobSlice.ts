import { createSlice } from "@reduxjs/toolkit";

export type JobsState = {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number;
  minJdSalary: number;
  salaryCurrencyCode: string;
  location: string;
  minExp: number;
  maxExp: number;
  jobRole: string;
  companyName: string;
  logoUrl: string;
};

interface IInitialState {
  jobList: JobsState[];
  totalCount: number;
}

const initialState: IInitialState = {
  jobList: [],
  totalCount: 0,
};

export const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobList: (state, action) => {
      state.jobList = action.payload.data;
      state.totalCount = action.payload.count;
    },
    updateJobList: (state, action) => {
      state.jobList = [...state.jobList, ...action.payload];
    },
  },
});

export const { setJobList, updateJobList } = jobSlice.actions;
export default jobSlice.reducer;
