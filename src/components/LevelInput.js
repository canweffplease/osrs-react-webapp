import React from 'react';

const LevelInput = ({ onTargetLevelChange, currentLevel, targetLevel }) => {
  console.log(currentLevel)
  return (
    <div>
      <div>
        Current Level: {currentLevel}
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
