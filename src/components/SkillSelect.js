import React from 'react';

const SkillSelect = ({ onSkillChange }) => {
    return (
        <select onChange={onSkillChange}>
            <option value = "attack">attack</option>
            <option value = "defence">defence</option>
            <option value = "strength">strength</option>
            <option value = "hitpoints">hitpoints</option>
            <option value = "ranged">ranged</option>
            <option value = "prayer">prayer</option>
            <option value = "magic">magic</option>
            <option value = "cooking">cooking</option>
            <option value = "woodcutting">woodcutting</option>
            <option value = "fletching">fletching</option>
            <option value = "fishing">fishing</option>
            <option value = "firemaking">firemaking</option>
            <option value = "crafting">crafting</option>
            <option value = "smithing">smithing</option>
            <option value = "mining">mining</option>
            <option value = "herblore">herblore</option>
            <option value = "agility">agility</option>
            <option value = "thieving">thieving</option>
            <option value = "slayer">slayer</option>
            <option value = "farming">farming</option>
            <option value = "runecraft">runecraft</option>
            <option value = "hunter">hunter</option>
            <option value = "construction">construction</option>
        </select>
    );
};

export default SkillSelect;