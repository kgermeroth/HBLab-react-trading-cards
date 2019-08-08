class Homepage extends React.Component {
	render(){
		return (
        <div>
            <p>Welcome, User!</p>
            <a href="/cards">Go to cards page</a>
            <img src="https://files.gamebanana.com/img/ico/sprays/500386c464a26.png" />
        </div>);
	}
}

ReactDOM.render(<Homepage />, document.getElementById('app'));

