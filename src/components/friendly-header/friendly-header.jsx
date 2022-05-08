import './friendly-navigation.css';

const FriendlyHeader = ({children}) => {
    return <header className="AppHeader">
        <h1>TablEdit</h1>
        {children}
    </header>;
};

export default FriendlyHeader;
