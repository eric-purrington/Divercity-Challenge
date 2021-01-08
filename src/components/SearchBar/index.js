import React from "react";
import "./style.css";

export default function SearchBar(props) {
    return (
        <div className="searchContainer">
            <form className="searchForm" onSubmit={props.onSearch}>
                
                    <div className="titleInput">
                        <i className="fas fa-search"></i>
                        <input className="textInput" type="text" placeholder="Title or Skill..."/>
                    </div>

                    <div className="locationInput">
                        <i className="fas fa-map-marker-alt"></i>
                        <input className="textInput" type="text" placeholder="City or State..."/>
                    </div>

                    <div>
                        <select className="jobType" name="jobType">
                            <option value="0">Full Time</option>
                            <option value="1">Part time</option>
                            <option value="2">Remote Position</option>
                            <option value="3">Internship</option>
                        </select>
                    </div>

                    <div>
                        <span>Sort by </span>
                        <select className="appliedTo" name="appliedTo">
                            <option value="0">Most applied</option>
                            <option value="1">Least applied</option>
                        </select>
                    </div>

                    <div>
                        <button className="searchBtn">Search</button>
                    </div>

            </form>

        </div>
    )
}