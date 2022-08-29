import React, { useState } from "react";
import { useHistory } from "react-router-dom";

    const Home = (props) => {
        const history = useHistory();
        const [type, setType] = useState("")
        const [id, setId] = useState("")
        

        const sendSurvey = (e) => {
            e.preventDefault();
            history.push("/" + type + "/" + id);
            console.log(history)
        }

        return (
            <form onSubmit={sendSurvey} >
                <label style={{padding:"4px", margin:"5px"}}>Search for:</label>
                <select style={{padding:"4px", margin:"5px"}} onChange={e => setType(e.target.value)} >
                    <option value="err">Please Select</option>
                    <option value="people">People</option>
                    <option value="planets">Planet</option>
                </select>
                <input onChange={e => setId(e.target.value)} type="number" min={1} style={{padding:"4px", margin:"5px"}}/>
                <input type="submit" value="Search" style={{padding:"6px", margin:"5px", border:"none", backgroundColor:"Bisque",cursor:"pointer"}}/>
            </form>
        );
    }

export default Home;