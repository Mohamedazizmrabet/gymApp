let StepsType:string[]
interface Target{
    primary:Primary,
    secondary:Secondary
}
interface Primary{
    [index:number]:string
}
interface Secondary{
    [index:number]:string
}
interface VideoURL{
    [index:number]:string
}
type ExerciseType ={
Category:string,
Difficulty:string,
Force:string,
Grips:string,
details:string,
exercise_name:string,
id:number,
steps:StepsType,
target:Target,
videoURL:VideoURL,
youtubeURL:string
}

