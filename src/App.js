import { useState, useEffect } from "react";
import "./App.css";
import { jobsData } from "./jobs-data";
import Filter from "./components/Filter";
import Attribution from "./components/Attribution";
import Job from "./components/Job";

function App() {
  const [showFilter, setShowFilter] = useState(false);
  const [filterTags, setFilterTags] = useState([]);
  const [jobs, setJobs] = useState(jobsData);

  // Filter Jobs & Show/Hide Filter Box
  useEffect(() => {
    if (filterTags.length > 0) {
      setShowFilter(true);
    } else {
      setTimeout(() => {
        setShowFilter(false);
      }, 1000);
    }

    setJobs(
      jobsData.filter((job) =>
        filterTags.every((tag) =>
          [job.role, job.level, job.languages, job.tools].flat().includes(tag)
        )
      )
    );
  }, [filterTags]);

  // ---------- Event Handlers ----------

  // Add Filter Tags
  function handleAddTag(event) {
    if (!filterTags.includes(event.target.textContent)) {
      setFilterTags((prevState) => {
        return [...prevState, event.target.textContent];
      });
    }
  }

  // Remove Individual Tag
  function handleRemoveTag(event) {
    setFilterTags((prevState) => {
      return prevState.filter(
        (tag) => tag !== event.target.previousElementSibling.textContent
      );
    });
  }

  // Clear All Tags
  function handleClearTags() {
    setFilterTags([]);
    setJobs(jobsData);
  }

  return (
    <div>
      <header></header>
      <main>
        <div className="container">
          <Filter
            showFilter={showFilter}
            filterTags={filterTags}
            handleRemoveTag={handleRemoveTag}
            handleClearTags={handleClearTags}
          />
          <ul className="job-list">
            {jobs.map((job) => {
              return (
                <Job
                  key={job.id}
                  featured={job.featured}
                  logo={job.logo}
                  company={job.company}
                  new={job.new}
                  position={job.position}
                  postedAt={job.postedAt}
                  contract={job.contract}
                  location={job.location}
                  role={job.role}
                  level={job.level}
                  languages={job.languages}
                  tools={job.tools}
                  handleAddTag={handleAddTag}
                />
              );
            })}
          </ul>
        </div>
        <Attribution />
      </main>
    </div>
  );
}

export default App;
