import * as emoji from 'node-emoji';
import { uniqueNamesGenerator, Config, adjectives, colors, animals } from 'unique-names-generator';

const uniqueNamesConfig: Config = {
    dictionaries: [adjectives, colors, animals],
    separator: ' ',
    length: 3,
}

export const capitalizeFirstLetter = (str: string) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export const getRandomName = () => {
    return capitalizeFirstLetter(uniqueNamesGenerator(uniqueNamesConfig));
};

export const getRandomIcon = () => {
    return emoji.random().name
};

export const getRandomColor = () => {
    
}