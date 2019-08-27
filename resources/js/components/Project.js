import React, { Component } from 'react';

class Project extends Component{
    constructor(props){
        super(props)

        this.getNormalFinishedTasks = this.getNormalFinishedTasks.bind(this)
        this.getNormalTasks = this.getNormalTasks.bind(this)
        this.getCriticalFinishedTasks = this.getCriticalFinishedTasks.bind(this)
        this.getCriticalTasks = this.getCriticalTasks.bind(this)
    }

    getNormalFinishedTasks(){
        var count = 0
        for(let i = 0; i < this.props.tasks.length; i++){
            if(this.props.tasks[i].is_completed == 1 && this.props.tasks[i].is_critical == 0){
                count++
            }
        }
        return count
    }

    getNormalTasks(){
        var count = 0
        for(let i = 0; i < this.props.tasks.length; i++){
            if(this.props.tasks[i].is_critical == 0){
                count++
            }
        }
        return count
    }

    getCriticalFinishedTasks(){
        var count = 0
        for(let i = 0; i < this.props.tasks.length; i++){
            if(this.props.tasks[i].is_completed == 1 && this.props.tasks[i].is_critical == 1){
                count++
            }
        }
        return count
    }

    getCriticalTasks(){
        var count = 0
        for(let i = 0; i < this.props.tasks.length; i++){
            if(this.props.tasks[i].is_critical == 1){
                count++
            }
        }
        return count
    }

    render(){
        return(
            <div className="project-card">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <div className="task-amount-container">
                    <p>{this.getNormalFinishedTasks() + '/' + this.getNormalTasks()}</p>
                    <p className="critical-tasks">{this.getCriticalFinishedTasks() + '/' + this.getCriticalTasks()}</p>
                </div>
            </div>
        )
    }
}

export default Project