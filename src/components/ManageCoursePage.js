import { func } from 'assert-plus';
import React,{useState} from 'react';
import CourseForm from './CourseForm';

const ManageCoursePage = props => {
    const [course, setCourse] = useState ({
        id:null,
        slug:"",
        title:"",
        authorId:"",
        category:""
    });

    function handleTitleChange(event){
        const updateCourse ={...course,title: event.target.value};
        setCourse(updateCourse);
    }
return (
    <>
    <h2>Manage Course</h2>
    <CourseForm course={course}  onTitleChange={handleTitleChange}/>
    </>
)
}
export default ManageCoursePage;