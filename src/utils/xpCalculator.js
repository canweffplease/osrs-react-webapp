export const calculateXP = (currentLevel, targetLevel) => {
    const xpForLevel = (level) => {
      let xp = 0;
      for (let L = 1; L < level; L++) {
        xp += Math.floor(L + 300 * Math.pow(2, L / 7));
      }
      return xp;
    };
  
    const currentXP = xpForLevel(currentLevel);
    const targetXP = xpForLevel(targetLevel);
  
    return targetXP - currentXP;
  };
  