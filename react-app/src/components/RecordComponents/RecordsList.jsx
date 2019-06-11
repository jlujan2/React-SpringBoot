import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import {getPatient} from "../../actions/patientActions";
import axios from 'axios';
import RecordItem from "../RecordComponents/RecordItem";

class RecordsList extends Component {

    constructor () {
        super();
        this.state = {
            records: []
        };
    }

    componentDidMount(){
        const {pt_id} = this.props.match.params;
        console.log(pt_id);
        axios.get("http://localhost:8080/demo/get-patient/?patientId="+pt_id)
            .then(response => {
                console.log(response.data);
                this.setState({
                    records : response.data.records
                });
            })
    }

    render() {
            let recordsDisplay = [];
            let RecordsContent;
            const RecordInfo = records => {
                const recordArray = this.state.records.map(record => (
                    <RecordItem key={record.id} record={record} />
                ));

                for(let i=0; i<recordArray.length; i++) {
                    recordsDisplay.push(recordArray[i]);
                }

            return (
                <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-center mb-2">

                            </div>
                            {recordsDisplay}
                        </div>
                    </div>
                </div>
                </React.Fragment>
        );
    };

    RecordsContent = RecordInfo(this.state.records);
    return (
        <div className="container">
        <Link to="/" className="btn btn-dark">
                Back to Board
        </Link>
        <br />
        <hr />
        {RecordsContent}
        </div>
    );
    }
}
RecordsList.propTypes = {
    //patient: PropTypes.object.isRequired,
    getPatient: PropTypes.func.isRequired

};

const mapStateToProps = state => ({
    //patient: state.patient
});

export default connect(mapStateToProps, {getPatient}) (RecordsList);