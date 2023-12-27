import React from 'react';

const SkillButton = ({ skillName, iconPath, onSkillSelect }) => {
  return (
    <button className="skill-button" onClick={() => onSkillSelect(skillName)}>
      <img src={iconPath} alt={skillName} />
    </button>
  );
};

export default SkillButton;
