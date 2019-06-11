import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Proptypes from "prop-types";
import {connect} from "react-redux";
import {addRecord} from "../../actions/recordAction";
import className from "classnames";
import {getPatient} from "../../actions/patientActions";
class AddRecord extends Component {
    constructor() {
        super()
        this.state = {
            currentDate: new Date(),
            time1 : "",
            speed1 : "",
            time2 : "",
            speed2 : "",
            comments : ""
        };
        // This bind onChange method to all of the inputs fields
       this.onChange = this.onChange.bind(this);
       this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        const {pt_id} = this.props.match.params;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.props.match.params);
        const {pt_id} = this.props.match.params;
        const newRecord = {
            patientId: +pt_id,
            date: this.state.currentDate,
            time1 : this.state.time1,
            speed1 : this.state.speed1,
            time2 : this.state.time2,
            speed2 : this.state.speed2,
            comments : this.state.comments
        };
        console.log(newRecord);
        this.props.addRecord(newRecord, this.props.history);
    }
    render() {
        return (
        <div className="addProjectTask">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <Link to="/" className="btn btn-light">
                        Back to Board
                    </Link>
                    <h4 className="display-4 text-center">Create a Record</h4>
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input
                        type="date"
                        className="form-control form-control-lg"
                        name="currentDate"
                        placeholder="Date"
                        value={this.state.currentDate}
                        onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <input type="text"
                        className="form-control form-control-lg"
                        name="time1"
                        placeholder="Time"
                        value={this.state.time1}
                        onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                        className="form-control form-control-lg"
                        name="speed1"
                        placeholder="Speed m/s"
                        value={this.state.speed1}
                        onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <input type="text"
                        className="form-control form-control-lg"
                        name="time2"
                        placeholder="Time"
                        value={this.state.time2}
                        onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <input type="text"
                        className="form-control form-control-lg"
                        name="speed2"
                        placeholder="Speed m/s"
                        value={this.state.speed2}
                        onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <input type="text"
                        className="form-control form-control-lg"
                        name="comments"
                        placeholder="Comments"
                        value={this.state.comments}
                        onChange={this.onChange}
                        />
                    </div>

                    <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>

        );
    }

}

AddRecord.prototypes = {
    AddRecord : Proptypes.func.isRequired,
    patient: Proptypes.func.isRequired,
    errors : Proptypes.object.isRequired,
    getPatient: Proptypes.func.isRequired
}

const mapStateToProps = state => ({
    patient: state.patient,
    errors: state.errors
})

export default connect(mapStateToProps, {addRecord}) (AddRecord);