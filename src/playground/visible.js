class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visibility: false
        };
    };
    handleToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    };
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>

                <button onClick={this.handleToggle}>
                    {this.state.visibility ? 'Hide it!' : 'Show it!'}
                </button>

                {this.state.visibility && <p>Now you see me, now you don't</p>}
            </div>            
        )
    };
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const app = {
//     title: 'Visibility Toggle',
//     hiddenSentence: 'Now you see me, now you don\'t',
//     visibility: false
// };

// const onToggle = () => {
//     app.visibility = !app.visibility;

//     render()
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={onToggle}>{app.visibility ? 'Hide it!' : 'Show it!'}</button>
//             {app.visibility && <p>Now you see me, now you don't</p>}
//         </div>
//     );

//     const appRoot = document.getElementById('app');
//     ReactDOM.render(template, appRoot);
// };

// render()