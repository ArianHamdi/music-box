import DataProvider from '../Contexts/data-context';

const withData = Component => {
    return props => {
        return (
            <DataProvider props={props}>
                <Component {...props} />
            </DataProvider>
        )
    }
}



export default withData;