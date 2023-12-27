function levelToXp(level) {
  let xp = 0;
  for (let i = 1; i < level; i++) {
      xp += Math.floor(i + 300 * Math.pow(2, i / 7));
  }
  return Math.floor(xp / 4);
}

export const calculateXP = (currentXp, targetLevel) => {
  const targetXp = levelToXp(targetLevel);
  if (targetXp - currentXp < 0) return 0;
  else return targetXp - currentXp;
};
