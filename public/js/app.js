class ProductList extends React.Component {
  render() {
    return (
      <div className='ui unstackable items'>
        Hello, friend! I am a basic React component.
      </div>
    );
  }ß
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);
