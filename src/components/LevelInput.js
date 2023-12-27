import React from 'react';

const LevelInput = ({ onTargetLevelChange, currentLevel, currentXp, targetLevel }) => {
  return (
    <div>
      <div>
        Current Level: {currentLevel}
      </div>
      <div>
        Current XP: {currentXp}
      </div>
      <input 
        type="number" 
        placeholder="Target Level" 
        value={targetLevel}
        onChange={onTargetLevelChange} 
      />
    </div>
  );
};

export default LevelInput;
