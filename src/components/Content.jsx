import React from "react";
import CardProject from "./CardProject";
function Content() {
  return (
    <div className="flex flex-col w-full h-max lg:flex-row py-6">
      <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
        <CardProject title='Project 1' img='https://cdn.pixabay.com/photo/2023/02/09/16/36/bridge-7779222_960_720.jpg'/>
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
      <CardProject title='Project 2' img='https://cdn.pixabay.com/photo/2023/02/13/18/00/bird-7787970_960_720.jpg'/>
      </div>
    </div>
  );
}

export default Content;
