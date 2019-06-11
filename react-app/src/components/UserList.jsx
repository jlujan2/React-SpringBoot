import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getPatients} from "../actions/patientActions";
import PatientItem from './PatientComponents/PatientItem';

class UserList extends Component {
    componentDidMount(){
        this.props.getPatients();
    }
    render() {
        const { patients } = this.props.patients;
        let patientsInfo = [];
        let PatientContent;
        const PatientsInfo = patients => {

            if(patients.length < 1) {
                return (
                    <div className="alert alert-info text-center" role="alert">
                    No patients
                    </div>
                );
            } else {
                const patientsArray = patients.map(patient => (
                    <PatientItem key={patient.id} patient={patient} />
                ));

                for(let i=0; i< patients.length; i++){
                    patientsInfo.push(patientsArray[i]);
                }

                return(
                <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-secondary text-white">
                                    <h3>List of Patients</h3>
                                </div>
                            </div>
                            {patientsInfo}
                        </div>
                    </div>
                </div>
                </React.Fragment>
                );
            }
        };

        PatientContent = PatientsInfo(patients);
        return (
            <div className="container">
            <Link to={'/addPatient'} className="btn btn-primary mb-3">
                <i className="fas fa-plus-circle">Create a new Patient</i>
            </Link>
            <br />
            <hr />
            {PatientContent}
            </div>
        );
    }
  }

  UserList.propTypes = {
      getPatients: PropTypes.func.isRequired,
      patients: PropTypes.object.isRequired
  };

  const mapStateToProps = state => ({
      patients: state.patients
  });

  export default connect(mapStateToProps, {getPatients}) (UserList);