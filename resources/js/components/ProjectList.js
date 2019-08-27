import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar'
import Project from './Project'
import Pagination from './Pagination'
import Idea from './Idea'

export default class ProjectList extends Component {
    constructor(props){
        super(props)

        this.state = {
            active: "active",
            projectsData: [],
            ideasData: [],
            currentPage: 1,
            projectsPerPage: 4,
            error: null
        }
    
        this.getCurrentProjects = this.getCurrentProjects.bind(this)
        this.paginate = this.paginate.bind(this)
        this.changeData = this.changeData.bind(this)
    }

    async componentDidMount(){
        try {
            let res = await fetch('/api/activeprojects')
            let data = await res.json()
            this.setState({
                projectsData: data
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

        const currentProjects = this.state.projectsData.slice(indexOfFirstProject, indexOfLastProject)

        return currentProjects
    }
    
    paginate(pageNumber){
        this.setState({
            currentPage: pageNumber
        })
    }

    changeData(active){
        if(active == 'stand-by'){
            const fetchData = async () =>{
                try {
                    let res = await fetch('/api/standbyprojects')
                    let data = await res.json()
                    this.setState({
                        projectsData: data,
                        ideasData: [],
                        active: 'stand-by',
                        currentPage: 1
                    })
                } catch (error) {
                    this.setState({
                        error
                    })
                }
            }
            fetchData()
        }else if(active == 'finished'){
            const fetchData = async () =>{
                try {
                    let res = await fetch('/api/finishedprojects')
                    let data = await res.json()
                    this.setState({
                        projectsData: data,
                        ideasData: [],
                        active: 'finished',
                        currentPage: 1
                    })
                } catch (error) {
                    this.setState({
                        error
                    })
                }
            }
            fetchData()
        }else if(active == 'active'){
            const fetchData = async () =>{
                try {
                    let res = await fetch('/api/activeprojects')
                    let data = await res.json()
                    this.setState({
                        projectsData: data,
                        ideasData: [],
                        active: 'active',
                        currentPage: 1
                    })
                } catch (error) {
                    this.setState({
                        error
                    })
                }
            }
            fetchData()
        }else if(active == 'ideas'){
            const fetchData = async () =>{
                try{
                    let res = await fetch('/api/ideas')
                    let data = await res.json()
                    this.setState({
                        ideasData: data,
                        projectsData: [],
                        active: 'ideas',
                        currentPage: 1
                    })
                } catch (error) {
                    this.setState({
                        error
                    })
                }
            }
            fetchData()
        }
    }

    render() {
        return (
            <div className="main-container">
                <Navbar
                    active = {this.state.active} 
                    changeData = {this.changeData}
                />
                <div className="content-container">
                    <h3>{(this.state.active == 'active') ? 'Proyectos en Curso' : (this.state.active == 'stand-by') ? 'Proyectos en Stand-By' : (this.state.active == 'finished') ? 'Proyectos Finalizados' : 'Ideas'}</h3>
                    <div className="projects-list-container">
                        {this.getCurrentProjects().map((project) => (
                            <Project
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                tasks={project.tasks}
                            />
                        ))}
                    </div>
                    
                    <Idea 
                        data={this.state.ideasData}
                    />
                    <Pagination 
                        projectsPerPage = {this.state.projectsPerPage}
                        totalProjects = {this.state.projectsData.length}
                        paginate = {this.paginate}
                    />
                </div>
            </div>
        );
    }
}

if (document.getElementById('content')) {
    ReactDOM.render(<ProjectList />, document.getElementById('content'));
}
