/* Calculator form */

import React from 'react';

// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// action creators
import { calculate, clearResults } from "../../actions";

// utils
import { operations } from "../../utils";

class CalculatorForm extends React.Component {
    constructor (props) {
        super (props); // call super class and it props

        /* internal state to hold user input */
        this.state = {
            num_1: '',
            num_2: '',
            operation: operations[0]
        }
    }

    clearInternalState = () => {
        /* simple helper method to reset internal state */
        this.setState({num_1: '', num_2: '', operation: ''})
    };

    handleChange = e => {
        /* method to listen for changes in inputs and update internal state */
        const key = e.target.name;
        const value = e.target.value;
        let obj = {};

        obj[key] = value;
        this.setState(obj);
    };

    handleSubmit = e => {
        /* method to handle submission of provided inputs. */
        e.preventDefault();
        const { num_1, num_2, operation } = this.state;
        this.props.calculate({operation: operation}, num_1, num_2);
    };

    handleClear = e => {
        /* method to handle removing current results in the state and input values */
        e.preventDefault();
        this.props.clearResults();
        this.clearInternalState()
    };

    getOptions = () => {
        return operations.map(
            (op) => {
                return <option name={op} value={op} key={op}>{op}</option>
            }
        )
    };

    render () {

        return (
            <div className="col-lg-4 col-lg-offset-4">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="control-label" htmlFor="id_num_1">First Number</label>
                        <input onChange={this.handleChange}
                               className="form-control"
                               value={this.state.num_1}
                               id="id_num_1"
                               type="number"
                               name="num_1"/>
                    </div>

                    <div className="form-group">
                        <label className="control-label" htmlFor="id_num_2">Second Number</label>
                        <input onChange={this.handleChange}
                               className="form-control"
                               value={this.state.num_2}
                               id="id_num_2"
                               type="number"
                               name="num_2"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="id_operation">
                            Operation
                        </label>
                        <select onChange={this.handleChange} name="operation" className="form-control">
                            {this.getOptions()}
                            <option name="nnnkj">ajhvhva</option>
                        </select>
                    </div>

                    <button className="btn btn-success btn-sm calculate"
                            type="submit">Calculate</button>

                    <button className="btn btn-info btn-sm clear"
                            onClick={this.handleClear}>Clear</button>

                    {/* Check if results is available and show  */}
                    { this.props.calculator.results ?
                        <span className="pull-right">
                            Results: <label>{ this.props.calculator.results }</label>
                        </span>
                        :
                        ''
                    }
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({calculator}) => {
    return {calculator}
};

const mapDispatchToProps = dispatch => {
    return {
        calculate: bindActionCreators(calculate, dispatch),
        clearResults: bindActionCreators(clearResults, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorForm);