import React,{useState} from 'react'
import {FcLike, FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';


const Card = (props) => {
   let course =props.course;
   let likedCourses = props.likedCourses;
   let setLikedCourses = props.setLikedCourses;

   function clickHandler(){
    if(likedCourses.includes(course.id)){
      // pehle s hi like hua va tha
      setLikedCourses((prev)=> prev.filter((cid)=>cid!== course.id));
      toast.warning("Like removed");
     
      
    }
    else{
      //pehle s like nhi tha
      if(likedCourses.length === 0){
        setLikedCourses([course.id]);
      }
      else{
        //insert kra h previous courses k sath nya course
        setLikedCourses((prev)=>[...prev, course.id]);
      }
      toast.success("Liked Suceessfully");
    }
   }

  return (
    <div className='card'>
      <div className='img'>
        <img src={course.image.url} alt=""/>
        <div className='desc'>
          <button className='btne' onClick={clickHandler}>
            {
              likedCourses.includes(course.id)? (<FcLike fontSize="1.3rem"/>) 
              : 
              (<FcLikePlaceholder fontSize='1.3rem'/>)
            }
           
          </button>
        </div>
      </div>
      <div className='details'>
        <p className='title'>{course.title}</p>
        <p className='description'>
          {
          course.description.length >100 ? 
          (course.description.substr(0,100))+ '...' 
          : (course.description)
          }
          </p>
        </div>
    </div>
  )
}

export default Card
