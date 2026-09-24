export type Role = "player" | "master";
export type Player = {
    name : String;
    characterClass : string;
    role : Role; 
    level : number;
    xp : number;
    nextLevelXp: number;
    coins : number;
    streak : number;

};

export type Boss = {
    name: String;
    remainHealth: number;
    classContribution: number;
};

export type Rewards = {
    xp : number;
    coins : number;
};

export type Quest = {
    id : string;
    tittle: string;
    description: string;
    difficulty : "Fácil" | "Média" | "Difícil";
    dueDate?: string;
    reward : Rewards;
}