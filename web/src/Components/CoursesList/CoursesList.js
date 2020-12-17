import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Course from '../Course/Course'

class CoursesList extends Component {
    state = {
        courses: [],
        searchString: ''
    }
    constructor() {
        super()
        this.getCourses()
    }
    getCourses = () => {
        this.setState({courses: [
            {id: "pepe", title: "pepe's title"},
            {id: "juan", title: "juan's title"},
            {id: "lola", title: "lola's title"},
        ]})
    }
    onSearchInputChange = (event) => {
        console.log("Search changed ..." + event.target.value)
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getCourses()
    }
    render() {
        return (
            <div>
                { this.state.courses ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Courses"
                            margin="normal"
                            onChange={this.onSearchInputChange}
                            />
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.courses.map(currentCourse => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Course course={currentCourse} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No courses found" }
            </div>
        )
    }
}
export default CoursesList;
