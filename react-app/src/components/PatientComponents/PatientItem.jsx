import React, {Component} from 'react';
import { Link } from "react-router-dom";


class PatientItem extends Component {
    render() {
        const { patient } = this.props;
        return (
            <div className="container">
            <div className="card mb-1 bg-light">

            <div className="card-header text-primary">
                Name: { patient.name +' ' +patient.lastName }
            </div>
            <div className="card-body bg-light">
                <h5 className="card-title">Patient id { patient.id }</h5>
            </div>
            <div className="card-body bg-light">
                <h5 className="card-title">Records: { patient.records.length }</h5>
            </div>
            <Link to={`records/${patient.id}`} className="btn btn-primary">
                <i className="fas fa-plus-circle"> Record History</i>
            </Link>
            <Link to={`addRecord/${patient.id}`} className="btn btn-primary">
                <i className="fas fa-plus-circle"> New Record</i>
            </Link>
            </div>
            <br/>
            </div>
        );
    }
}

export default PatientItem;