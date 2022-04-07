import React from 'react';
import useValueContext from '../../hooks/useValueContextCer';

const Message = () => {

    const [state] = useValueContext()
    console.log(state)

    return(
        <div>Message</div>
    )
}

export default Message;