import { func } from 'assert-plus';
import React,{useState,useEffect} from 'react';
import CourseForm from './CourseForm';
import courseStore from '../stores/courseStore';
import {toast} from "react-toastify";
import * as courseActions from "../actions/courseActions";

const ManageCoursePage = props => {

    const [errors,setErrors] = useState({});

    const [course, setCourse] = useState ({
        id:null,
        slug:"",
        title:"",
        authorId:"",
        category:""
    });
    useEffect(()=>{
        const slug= props.match.params.slug;
        if (slug){
        setCourse(courseStore.getCourseBySLug(slug)); 
        }
    },
    [props.match.params.slug]);

    function handleChange({target}){
        
        setCourse({
            ...course,
            [target.name]: target.value
        });
    }

    function formIsValid(){
        const _errors={};
        if (!course.title) _errors.title= "Title is required";
        if (!course.authorId) _errors.authorId= "Title is required";
        if (!course.category) _errors.category= "Title is required";
   
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
    
    }
    function handleSubmit(event){
        event.preventDefault();

        if(!formIsValid()) return;
        courseActions.saveCourse(course).then(()=>{
            props.history.push("/courses");
            toast.success("Course saved");
        });
    }
return (
    <>
    <h2>Manage Course</h2>
    <CourseForm
    errors={errors}
     course={course} 
      onChange={handleChange} 
      onSubmit={handleSubmit}/>
    </>
)
}
export default ManageCoursePage;