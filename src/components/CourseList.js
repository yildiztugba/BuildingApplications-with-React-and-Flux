import React from 'react';

function CourseList(props){
    
    function renderRow(course){
        return (
            <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
            </tr>
            );
    };

return (
    <table className="table">
    <thead>
        <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
        </tr>
    </thead>
    <tbody>
        {props.courses.map(renderRow)}
    </tbody>
</table>
)
}
export default CourseList;