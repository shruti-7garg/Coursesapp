import React, { useState } from 'react'
import Card from './Card'

const Cards = (props) => {

  let courses = props.courses;
  let category= props.category;
  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    if(category === "All"){
    let allCourses = [];
    if (!courses) return [];
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((courseData) => {
        allCourses.push(courseData);
      })
    })
    return allCourses;
  }
  else{
    return courses[category];
  }
}
  // let allCourses = [];
  // const getCourses = ()=>{
  //  if(!courses) return [];
  //  Object.values(courses).forEach((courseCategory)=>{
  //      courseCategory.forEach((course)=>{
  //          allCourses.push(course);
  //      })
  //  })
  //  return allCourses;
  // } 


  return (
    <div className='cards'>
      {!courses ? (
        <div>
          <p>No data found</p>
        </div>
      ) : (getCourses().map((course) => {
        return( <Card key={course.id} 
        course={course}
        likedCourses= {likedCourses}
        setLikedCourses={setLikedCourses} />
        )
      }))}
    
    </div>
  )
}

export default Cards


// import React from 'react';
// import Card from './Card';

// const Cards = ({ courses }) => {
//   const getCourses = () => {
//     if (!courses) return [];
//     let allCourses = [];
//     Object.values(courses).forEach((courseCategory) => {
//       courseCategory.forEach((course) => {
//         allCourses.push(course);
//       });
//     });
//     return allCourses;
//   }

//   const allCourses = getCourses();

//   return (
//     <div>
//       {allCourses.length > 0 ? (
//         allCourses.map((course) => <Card key={course.id} course={course} />)
//       ) : (
//         <p>No courses available</p>
//       )}
//     </div>
//   );
// }

// export default Cards;
