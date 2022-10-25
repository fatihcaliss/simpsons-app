export interface ISimpsonData {
    name: string;
    avatar: string;
    job: string;
    description: string;
    id: string;
}

export interface IStateProps {
    simpsons:any,
    loading:boolean,
    error:string,
}