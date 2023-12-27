export const fetchStats = async (username) => {
    try {
        const response = await fetch(`http://localhost:3001/api/stats/${username}`);

        const data = await response.text();
        const lines = data.split('\n');

        const skillDetails = lines.slice(1, 24).map(line => {
            const parts = line.split(',');
            return {
                rank: parts.length >= 1 ? parseInt(parts[0], 10) : null,
                level: parts.length >= 2 ? parseInt(parts[1], 10) : null,
                xp: parts.length === 3 ? parseInt(parts[2], 10) : null
            };
        });

        const skillNames = ['Attack', 'Defence', 'Strength', 'Hitpoints', 'Ranged', 'Prayer', 'Magic', 'Cooking', 'Woodcutting', 'Fletching', 'Fishing', 'Firemaking', 'Crafting', 'Smithing', 'Mining', 'Herblore', 'Agility', 'Thieving', 'Slayer', 'Farming', 'Runecraft', 'Hunter', 'Construction'];
        const playerStats = {};

        skillNames.forEach((name, index) => {
            playerStats[name.toLowerCase()] = skillDetails[index];
        });
        console.log(playerStats)
        return playerStats;
    } catch (error) {
        console.error("Error fetching stats:", error);
        return {};
    }
};
