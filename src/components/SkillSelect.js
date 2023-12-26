import React from 'react';

const SkillSelect = ({ onSkillChange }) => {
    return (
        <select onChange={onSkillChange}>
            <option value = "Attack">Attack</option>
            <option value = "Defence">Defence</option>
            <option value = "Strength">Strength</option>
            <option value = "Hitpoints">Hitpoints</option>
            <option value = "Ranged">Ranged</option>
            <option value = "Prayer">Prayer</option>
            <option value = "Magic">Magic</option>
            <option value = "Cooking">Cooking</option>
            <option value = "Woodcutting">Woodcutting</option>
            <option value = "Fletching">Fletching</option>
            <option value = "Fishing">Fishing</option>
            <option value = "Firemaking">Firemaking</option>
            <option value = "Crafting">Crafting</option>
            <option value = "Smithing">Smithing</option>
            <option value = "Mining">Mining</option>
            <option value = "Herblore">Herblore</option>
            <option value = "Agility">Agility</option>
            <option value = "Thieving">Thieving</option>
            <option value = "Slayer">Slayer</option>
            <option value = "Farming">Farming</option>
            <option value = "Runecraft">Runecraft</option>
            <option value = "Hunter">Hunter</option>
            <option value = "Construction">Construction</option>
        </select>
    );
};

export default SkillSelect;