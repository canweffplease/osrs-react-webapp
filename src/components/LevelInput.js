import React from 'react';

const LevelInput = ({ onTargetLevelChange, currentLevel, targetLevel }) => {
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
