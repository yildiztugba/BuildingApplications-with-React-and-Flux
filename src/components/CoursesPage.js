import React from 'react';
import{ getCourses} from "../api/courseApi";
class CoursesPage extends React.Component{
  
    state= {
        courses:[]
    };

    componentDidMount(){
      
    }
    render(){
        return <h2>Courses</h2>
    }
}
export default CoursesPage;