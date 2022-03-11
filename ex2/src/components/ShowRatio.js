import React, { memo } from 'react';

function ShowRatio(props) {
    console.log(props.doneWork)
    console.log(props.remainWork)

    return (
        <React.Fragment>
            <label>
                {(props.doneWork/(props.remainWork+ props.doneWork))*100 + "%"}
            </label>
        </React.Fragment>
    )
}

export default memo(ShowRatio);