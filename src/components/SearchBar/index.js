import React from "react";
import "react-input-range/lib/css/index.css";
import "./style.css";

export default function SearchBar(props) {
    return (
        <div className="searchContainer">
            <form className="searcForm" onSubmit={props.onSearch}>
                
                    <div className="titleInput">
                        <i class="fas fa-search"></i>
                        <input className="textInput" type="text" placeholder="e.g. developer"/>
                    </div>

                    <div className="locationInput">
                        <i class="fas fa-map-marker-alt"></i>
                        <input className="textInput" type="text" placeholder="e.g. Miami"/>
                    </div>

                    <div>
                        <button className="searchBtn">Search</button>
                    </div>

            </form>
        </div>
    )
}