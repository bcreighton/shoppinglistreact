import React from 'react';
import AddItemForm from './components/AddItemForm';
import ShoppingList from './components/ShoppingList';

class App extends React.Component {
  state = {
    shoppingItems: [
      /* put stub items in here for testing */
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false },
    ]
  };

  handleDeleteItem() {
    console.log('handle delete item called')
  }

  handleCheckItem() {
    console.log('handle check item called')
  }

  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm />
          </section>
          <section>
            <ShoppingList
              items={this.state.shoppingItems}
              onDeleteItem={this.handleDeleteItem}
              onCheckItem={this.handleCheckItem}
            />
          </section>
        </main>
      </>
    )
  }
}

export default App;