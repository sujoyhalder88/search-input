import React, { useState } from "react";
import "./App.css";
import JSONDATA from "./MOCK_DATA.json";

const App = () => {
    const [text, setText] = useState("");
    return (
        <>
            <div className="container">
                <input
                    type="text"
                    placeholder="Search...."
                    onChange={(event) => setText(event.target.value)}
                />
            </div>
            <div className="json">
                {JSONDATA.filter((curr) => {
                    if (text === "") {
                        return curr;
                    } else if (
                        curr.first_name
                            .toLowerCase()
                            .includes(text.toLowerCase())
                    ) {
                        return curr;
                    }
                }).map((curr, index) => {
                    return <div key={curr.id}>{curr.first_name}</div>;
                })}
            </div>
        </>
    );
};

export default App;
