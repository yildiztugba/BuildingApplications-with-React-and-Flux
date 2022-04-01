import { func } from 'assert-plus';
import React,{useState} from 'react';
import CourseForm from './CourseForm';
import * as courseApi from "../api/courseApi";
import { props } from 'bluebird';
const ManageCoursePage = props => {
    const [course, setCourse] = useState ({
        id:null,
        slug:"",
        title:"",
        authorId:"",
        category:""
    });

    function handleChange({target}){
        
        setCourse({
            ...course,
            [target.name]: target.value
        });
    }
    function handleSubmit(event){
        event.preventDefault();
        courseApi.saveCourse(course).then(()=>{
            props.history.push("/courses");
        });
    }
return (
    <>
    <h2>Manage Course</h2>
    <CourseForm course={course}  onChange={handleChange} onSubmit={handleSubmit}/>
    </>
)
}
export default ManageCoursePage;