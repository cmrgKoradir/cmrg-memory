import React, {useState} from 'react';

export const CardInfoContext = React.createContext([])
export const CardSelectionContext = React.createContext([])

const Store = ({children}) => {
    const [cardInfo, setCardInfo] = useState([])
    const [cardSelection, setCardSelection] = useState([])

    return (
        <CardInfoContext.Provider value={[cardInfo, setCardInfo]}>
            <CardSelectionContext.Provider value={[cardSelection, setCardSelection]}>
                {children}
            </CardSelectionContext.Provider>
        </CardInfoContext.Provider>
    )
}

export default Store