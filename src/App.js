import React, { useState } from 'react';
//import SkillSelect from './components/SkillSelect';
import SkillButton from './components/SkillButton';
import LevelInput from './components/LevelInput';
import { fetchStats } from './utils/fetchStats';
import { calculateXP } from './utils/xpCalculator';
import skills from './components/skills';
import './App.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [playerStats, setPlayerStats] = useState({});
  const [selectedSkill, setSelectedSkill] = useState('');
  const [targetLevel, setTargetLevel] = useState('');
  const [xpNeeded, setXpNeeded] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const fetchPlayerStats = async () => {
    const stats = await fetchStats(username);
    setPlayerStats(stats);
  };

  const handleSkillSelect = (skillName) => {
    setSelectedSkill(skillName);
  };

  const calculate = () => {
    if (playerStats[selectedSkill] && playerStats[selectedSkill].xp !== undefined) {
      const currentXp = playerStats[selectedSkill].xp;
      const xpNeeded = calculateXP(currentXp, parseInt(targetLevel, 10));
      setXpNeeded(xpNeeded);
    } else {
      console.error('Current XP not available for selected skill');
    }
  };

  return (
    <div className="container">
      <div className="form-group">
        <input 
          type="text" 
          placeholder="Username" 
          value={username}
          onChange={handleUsernameChange} 
        />
        <button onClick={fetchPlayerStats}>Fetch Stats</button>
      </div>
  
      <div className="form-group-row">
        
        <LevelInput 
          onTargetLevelChange={(e) => setTargetLevel(e.target.value)} 
          currentLevel={playerStats[selectedSkill] ? playerStats[selectedSkill].level : ''} 
          currentXp={playerStats[selectedSkill] ? playerStats[selectedSkill].xp : ''} 
          targetLevel={targetLevel}
        />
      </div>
      {Object.keys(skills).map((skill) => (
        <SkillButton
          key={skill}
          skillName={skill}
          iconPath={skills[skill]}
          onSkillSelect={handleSkillSelect}
        />
      ))}
      <button onClick={calculate}>Calculate XP</button>
      {xpNeeded !== null && <p>XP Needed: {xpNeeded}</p>}
    </div>
  );
  
};
//<SkillSelect onSkillChange={handleSkillChange} />
export default App;
