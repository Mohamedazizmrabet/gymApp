import React from 'react';

interface ExerciseProps {
  exercises: ExerciseType;
}

function AllExercises({ exercises }: ExerciseProps) {

  return (
    <div>
     {exercises.exercise_name}
     {exercises.Difficulty}
     {/* <video  controls  >
      <source src={exercises.videoURL[0]} />
     </video> */}
    </div>
  );
}

export default AllExercises;
