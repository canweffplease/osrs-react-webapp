export const fetchStats = async (username) => {
    try {
        const response = await fetch(`http://localhost:3001/api/stats/${username}`);

        const data = await response.text();
        console.log(data);
        const lines = data.split('/n');

        const skills = lines.slice(0,23).map(line => {
            const [,level] = line.split(',');
            return parseInt(level,10);
        });

        const skillNames = ['Attack', 'Defence', 'Strength', 'Hitpoints', 'Ranged', 'Prayer', 'Magic', 'Cooking', 'Woodcutting', 'Fletching', 'Fishing', 'Firemaking', 'Crafting', 'Smithing', 'Mining', 'Herblore', 'Agility', 'Thieving', 'Slayer', 'Farming', 'Runecraft', 'Hunter', 'Construction'];
        const playerStats = {};

        skillNames.forEach((name, index) => {
            playerStats[name.toLowerCase()] = skills[index];
            console.log(playerStats[name.toLowerCase()])
        });

        return playerStats;
    } catch (error) {
        console.error("Error fetching stats:", error);
        return {};
    }
}