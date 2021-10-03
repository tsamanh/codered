// import React from 'react';

// const mySchedule = ({schedule, schedules, setSchedules}) => {

//   const completeHandler = (e) => {
//     e.preventDefault();
//     console.log("complete", todo.id);

//     // map each and update when id matches
//     setSchedules (
//       schedules.map(currentSchedule => {
//         if (currentSchedule.id === schedule.id) {
//           currentSchedule.completed = !currentSchedule.completed;
//         }
//         return currentSchedule;
//       })
//     )
//   }

//   const deleteHandler = (e) => {
//     e.preventDefault();
//     console.log("delete", todo.id);

//     // filter
//     setTodos(
//       todos.filter(currentSchedule => currentSchedule.id !== schedule.id)
//     )

//   }

//   return (
//     <li className={schedule.completed ? "completed" : ""}>
//       <span>{schedule.text}</span>
//       <div className="buttons">
//         <button onClick={completeHandler}>{schedule.completed ? "Incomplete" : "Complete"}</button>
//         <button onClick={deleteHandler}>Delete</button>
//       </div>
//     </li>
//   )
// }

// export default schedule;