import React, {Component} from 'react';

class RecordItem extends Component {
    render() {
        const { record } = this.props;
        record.date = (new Date(record.date)).toLocaleDateString();

        return (
            <div className="container">

                <div className="row" >Date : { record.date } </div>
                <div className="row"> Time : {record.time1} </div>
                <div className="row"> Speed : {record.speed1} </div>
                <div className="row"> Time : {record.time1} </div>
                <div className="row"> Speed : {record.speed1} </div>
                <div className="row"> Comments : {record.comments} </div>
                <br/>
            </div>

        );
    }
}

export default RecordItem;