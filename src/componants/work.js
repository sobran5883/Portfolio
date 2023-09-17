import WorkCard from "./workCard";
import WorkCardData from "./workData";
import React from "react";
const Work = ()=>{
    return(
        <div className="work-container">
           <h1 className="project-heading">Projects</h1>
           <div className="project-container">
            {WorkCardData.map((val,ind)=>{
                return(
                    <WorkCard key={ind} imgsrc={val.imgsrc} title={val.text} view={val.view} source={val.source}/>
                )
            })}
           </div>

        </div>
    )
}

export default Work;