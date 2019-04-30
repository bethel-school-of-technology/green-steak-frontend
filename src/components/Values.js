import React from 'react';
import * as api from '../api';

class Values extends React.Component {
    state = {
        values: [],
        error: false,
    };

    componentDidMount() {
        this.callValues();
        //console.log('componentDidMount: ', this.state.values);
    }

    callValues = () => {
        api.fetchValues()
            .then(response => {
                //console.log('callValues: ', response);
                this.setState(() => {
                    return {
                        values: response
                    };
                });
                //console.log('after SetState: ', this.state.values);
            })
            .catch(err => {
                //console.log('err', err)
                this.setState({
                    error: true,
                })
            });
    };

    

    render() {
        const { values, error } = this.state;
        console.log('values', values)
        return <div>
            {values && values.length > 0 && 
                values.map(val =><h3 key={val._id}>{val.name}</h3>)
            }
            {error && (<h1>Error!</h1>)}
        </div>;
        //return <div>{values.map(val => <h1>{val.name}</h1>)}</div>
    }
    
}

export default Values;