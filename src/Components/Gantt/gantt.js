import React, { useState,useEffect  } from "react";
//
import ReactDOM from "react-dom"
import TimeLine from "react-gantt-timeline";
// import MyGant from "./Components/Gantt/MyGantt/myGantt";
import workspaces from './workspace.json'
import './gantt.css'




export default function Gantt(props) {
    useEffect(() => {
        // Update the document title using the browser API
       
        window.location.reload();
      });
     
      const {projects}=props;
    
    debugger
    const allWorkspace = { workspaces };
    console.log(allWorkspace);
    const allProjects = allWorkspace.workspaces.workspaces.projects;
    // const allTasks=
    console.log(allProjects);
    const task1 = allWorkspace.workspaces.workspaces.projects[0].cards[0].tasks[0];
    const task2 = allWorkspace.workspaces.workspaces.projects[0].cards[0].tasks[1];
    const allTasks = allWorkspace.workspaces.workspaces.projects[0].cards[0].tasks;
    console.log(task1);
    console.log(allWorkspace.workspaces.workspaces.projects[0].cards[0].tasks);
    debugger
    let ff = new Date(task1.startDate)
    console.log(ff);
    // console.log(new Date(tasks.startDate));
    const d1 = new Date();
    const d2 = new Date();
    let d3 = new Date();
    d3.setDate(d3.getDate() + 8);
    let d4 = new Date();
    d4.setDate(d4.getDate() + 20);
    let d5 = new Date();
    d5.setDate(d5.getDate() + 25);
    d2.setDate(d2.getDate() + 5);
    const [gantData, setGantData] = useState({
        id: 1,
        start: d1,
        end: d2,
        name: "ui",
        color: "pink"
    });
    const data = [{
        id: task1.id,
        start: d3,
        end: d5,
        name: task1.description,
        color: task1.color
    }, {
        id: task2.id,
        start: d1,
        end: d2,
        name: task2.description,
        color: task2.color
    }];
    // allProjects.map((item, index) => {
    //     item.cards.map((item, index) => {
    //         item.tasks.map((item, index) => {
    //             console.log(item);
    //             // alert("hjvj");
    //         }

    //         )
    //     })
    // })


    // constructor(props) {

    //     super(props);
    //     // this.state = {
    //     //     gantData: {
    //     //         id: 0,
    //     //         start: '',
    //     //         end: '',
    //     //         name: "",
    //     //         color: ""
    //     //     }
    //     // };
    //     this.gantData = [{
    //         id: tasks.id,
    //         start: d1,
    //         end: d5,
    //         name: tasks.description,
    //         color: tasks.color,

    //     }]
    //     this.data = [
    //         {
    //             id: 1,
    //             start: d1,
    //             end: d5,
    //             name: "Demo Task 1",
    //             color: "blue",

    //         },
    //         {
    //             id: 2,
    //             start: d3,
    //             end: d4,
    //             name: "Demo Task 2",
    //             color: "pink"
    //         },
    //         {
    //             id: 2,
    //             start: d2,
    //             end: d5,
    //             name: "Demo Task 2",
    //             color: "orange"
    //         },
    //         {
    //             id: 2,
    //             start: d4,
    //             end: d5,
    //             name: "Demo Task 2",
    //             color: "pink"
    //         },
    //         {
    //             id: 2,
    //             start: d5,
    //             end: d6,
    //             name: "Demo Task 2",
    //             color: "blue"
    //         },
    //         {
    //             id: 2,
    //             start: d2,
    //             end: d6,
    //             name: "Demo Task 2",
    //             color: "orange"
    //         }
    //     ];
    //     // this.links = [{ id: 1, start: 1, end: 2 }];
    // }

    return (
        <div >
            
            <div className="time-line-container gantBody">
                <TimeLine data={data} />
            </div>
        </div>
    );
}