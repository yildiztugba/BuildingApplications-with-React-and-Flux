import React from 'react';
import{ getCourses} from "../api/courseApi";
class CoursesPage extends React.Component{
  
    state= {
        courses:[]
    };

    componentDidMount(){
        getCourses().then((courses) => this.setState({courses:courses }));
    
    }
    render(){
        return <h2>Courses</h2>
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author ID</th>
                    <th>Category</th>
                </tr>
            </thead>
        </table>
    }
}
export default CoursesPage;