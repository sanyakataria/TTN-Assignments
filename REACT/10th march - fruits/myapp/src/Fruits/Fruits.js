import React from 'react';
import "./Fruits.css"

const Fruits = (props) => {
    console.log(props);

    return (
        <div>
            <table className="table">
                <tbody>

                <tr className="row">
                    <td>{props.name}</td>
                    <td>{props.quantity}</td>
                    <td onClick={props.click}>delete</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
};

export default Fruits;