import { useEffect, useState } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { JobsState, setJobList } from "./app/jobSlice";
import JobCard from "./components/jobCard";

function App() {
  const dispatch = useAppDispatch();
  const { jobList } = useAppSelector((state) => state.jobs);
  const [jobsParams, setJobsParams] = useState<any>({
    limit: "10",
    offset: "0",
  });
  async function handleFetchJobs() {
    const response = await fetch(
      `https://api.weekday.technology/adhoc/getSampleJdJSON`,
      {
        method: "POST",
        body: JSON.stringify(jobsParams),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    dispatch(setJobList({ data: data.jdList, count: data.totalCount }));
    console.log(data);
  }

  useEffect(() => {
    handleFetchJobs();
  }, []);

  return (
    <div className="App">
      {jobList.map((job: JobsState) => {
        return <JobCard job={job} key={job.jdUid} />;
      })}
    </div>
  );
}

export default App;
