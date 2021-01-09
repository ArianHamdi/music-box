import React, { useState, useContext } from 'react';

const DataContext = React.createContext();
const DataContextSetState = React.createContext();

const DataProvider = ({ children, props }) => {
    const [data, setData] = useState(props);

    return (
        <DataContext.Provider value={data}>
            <DataContextSetState.Provider value={setData}>
                {children}
            </DataContextSetState.Provider>
        </DataContext.Provider>
    )
}

const useData = () => {
    const data = useContext(DataContext);
    return data;
}

const useDataUpdate = () => {
    const setData = useContext(DataContextSetState);

    const updateState = data => {
        setData(prevData => {
            return { ...prevData, ...data };
        })
    }

    return updateState;
}

export { useData, useDataUpdate };
export default DataProvider;