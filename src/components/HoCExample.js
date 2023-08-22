const withUser = (WrappedComponent) => {
    const user = "Gaurav Kathiriya";
    return (props) => <WrappedComponent user={user} {...props} />;
};

const UserPage = (props) => {
    return (<div>
        <p>My name is {props.user}!</p>
    </div>)
};

export default withUser(UserPage);