import React from "react";

// const withClass = (props) => {
//   return(
//   <div className={props.classes}>{props.children}</div>
//   );
// };

const withClass = (WrappedComponents, className) => {
    return (props) => (
        <div className = {className}>
            <WrappedComponents {...props} />
        </div>
    );
}



export default withClass;
