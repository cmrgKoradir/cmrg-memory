import React, {useState} from 'react';

export const CardInfoContext = React.createContext([])

const Store = ({children}) => {
    const [cardInfo, setCardInfo] = useState([])

    return (
        <CardInfoContext.Provider value= {[cardInfo, setCardInfo]}>
            {children}
        </CardInfoContext.Provider>
    )
}

export default Store