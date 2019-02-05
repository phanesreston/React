class Hello extends React.Component {
  render() {
    return (
        <div>
            <h1>Hello World!</h1>
            <p>i'm from an external javascript file</p>
        </div>);
  }
}

ReactDOM.render(<Hello />, document.getElementById('intro'));
