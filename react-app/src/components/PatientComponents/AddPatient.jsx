import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Proptypes from "prop-types";
import {connect} from "react-redux";
import {addPatient} from "../../actions/patientActions";

class AddPatient extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            lastName : "",
            dob : new Date(),
            healthCondition : "",
            email : "",
            comments : ""
        };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const newPatient = {
            name: this.state.name,
            lastName : this.state.lastName,
            dob : this.state.dob,
            healthCondition : this.state.healthCondition,
            email : this.state.email,
            comments : this.state.comments
        };

        this.props.addPatient(newPatient, this.props.history);
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
                        type="text"
                        className="form-control form-control-lg"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <input type="text"
                        className="form-control form-control-lg"
                        name="lastName"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="date"
                        className="form-control form-control-lg"
                        name="dob"
                        placeholder="Date of Birth"
                        value={this.state.dob}
                        onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <input type="text"
                        className="form-control form-control-lg"
                        name="healthCondition"
                        placeholder="Health Condition"
                        value={this.state.healthCondition}
                        onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <input type="text"
                        className="form-control form-control-lg"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
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

AddPatient.prototypes = {
    addPatient : Proptypes.func.isRequired,
    patient: Proptypes.func.isRequired,
    errors : Proptypes.object.isRequired
}

const mapStateToProps = state => ({
    patient: state.patient,
    errors: state.errors
})

export default connect(mapStateToProps, {addPatient}) (AddPatient);