import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import AvailableJobs from "../components/AvailableJobs";
import ChosenJob from "../components/ChosenJob";
import JobCard from "../components/JobCard";
import API from "../utils/API";

export default function Jobs() {
    const [queryParams, setQueryParams] = useState({
        title: "",
        location: "",
        jobType: 0,
        appliedTo: 0
    });
    const [jobToDiveInto, setJobToDiveInto] = useState({});
    var allJobs = [];
    

    useEffect(() => {
        retrieveJobs();
    }, []);

    function sortAndFilterJobs() {

    }

    function retrieveJobs() {
        API.getJobs().then(response => {
            allJobs = JSON.parse(response).jobs;
            console.log(allJobs);
        });
        sortAndFilterJobs();
    }

    return (
        <div>
            <SearchBar />

            <div className="jobListContainer">
                <AvailableJobs>
                    {allJobs.map(job =>
                        <JobCard />
                    )}
                </AvailableJobs>
                <ChosenJob />
            </div>

        </div>
    )
}