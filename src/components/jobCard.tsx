import { JobsState } from "../app/jobSlice";

interface IJobCardProps {
  job: JobsState;
}

const JobCard = ({ job }: IJobCardProps) => {
  return (
    <div>
      <h1>{job.companyName}</h1>
    </div>
  );
};

export default JobCard;
