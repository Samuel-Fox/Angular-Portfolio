import { Project} from "./Projects"
export const PROJECTS: Project[] =  [
    {
        id: 1,
        github: 'https://github.com/Samuel-Fox/Unity-Roguelite',
        description: 'A small roguelite game made in Unity for a college class on managing projects. The game randomly generates an infinite number of levels that continue to get harder as the game progresses'
    },
    {
        id: 2,
        github: 'https://github.com/Samuel-Fox/Unity-Platformer',
        description: 'A small platformer game made in Unity for a college class on managing projects. The game has 3 levels that the player must navigate, where they will fight a boss at the end of the level to progress to the next one.'
    },
    {
        id: 3,
        github: 'https://github.com/Kirkpary/MMO-Expo',
        description: 'My senior project, where I worked with 3 others to make an MMO style game to replicate being able to attend conventions and expos during the pandemic. The player loads into a convention and is able to interact with others and visit booths as though they were actually able to attend the event.'
    }
]