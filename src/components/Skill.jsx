import React from "react";

const Skill = (props) => {
  return (
    <div>
      <span style={{ backgroundColor: props.color }}>{props.skill}</span>
    </div>
  );
};

export default Skill;
