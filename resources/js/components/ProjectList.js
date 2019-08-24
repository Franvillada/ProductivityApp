import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar'
import Project from './Project'
import Pagination from './Pagination'

export default class ProjectList extends Component {
    constructor(props){
        super(props)

        this.state = {
            active: "en-curso",
            data: [],
            currentPage: 1,
            projectsPerPage: 3,
            error: null
        }
    
        this.getCurrentProjects = this.getCurrentProjects.bind(this)
        this.paginate = this.paginate.bind(this)
    }

    async componentDidMount(){
        try {
            let res = await fetch('/api/activeprojects')
            let data = await res.json()
            this.setState({
                data: data
            })
        } catch (error) {
            this.setState({
                error
            })
        }
    }
    
    getCurrentProjects(){
        const indexOfLastProject = this.state.currentPage * this.state.projectsPerPage
        const indexOfFirstProject = indexOfLastProject - this.state.projectsPerPage

        const currentProjects = this.state.data.slice(indexOfFirstProject, indexOfLastProject)

        return currentProjects
    }
    
    paginate(pageNumber){
        console.log(pageNumber)
        this.setState({
            currentPage: pageNumber
        })
    }
    render() {
        return (
            <div className="main-container">
                <Navbar />
                <Project 
                    data={this.getCurrentProjects()}
                />
                <Pagination 
                    projectsPerPage = {this.state.projectsPerPage}
                    totalProjects = {this.state.data.length}
                    paginate = {this.paginate}
                />
            </div>
        );
    }
}

if (document.getElementById('content')) {
    ReactDOM.render(<ProjectList />, document.getElementById('content'));
}
