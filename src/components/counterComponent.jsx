import React, { Component } from 'react';


class Counter extends Component {

    state = {
        items: ["Hello!"],
        value: undefined,
    };

    handleSubmit= (event) => {
        event.preventDefault();
        let userInput  = event.target.item.value;
        event.target.item.value = '';
        if (!userInput) return;
        this.setState({items: [ userInput, ...this.state.items ]});
    }

    renderList = () => {
        let {items} = this.state;
        if (items.length === 0) return 'The list is empty!';
        return(
            items.map((item, index) => 
            (<li key={index}>{item} </li>))
        );
    }

    emptyList = () => {
       console.log('The list was emptied.')
       this.setState({items: this.state.items = []});
    }

   itemCount = () => {
       let {items} = this.state;
       let are = 'are'
       let s = 's'
       if (items.length === 1) {
           are = 'is';
           s = '';
        }
       return (<p>There {are} currently {items.length} item{s} in the list.</p>)
   }
    
    
    render( ) { 
    
        return (
        <>

         <form style={{display: 'flex', flexDirection: 'column'}}
            onSubmit={this.handleSubmit}>
                
            <label htmlFor='item'>Add an item to the list</label>

            <input autoComplete= 'off' id= 'item' type='text' name='newItem' value={this.state.value}>
            </input>

            <button type='submit'>Submit</button>

        </form>

        <ul>
            {this.renderList()}
        </ul>
     
     <section className="info">
        {this.itemCount()}
       
        <button onClick={this.emptyList}>Empty the list</button>
        </section>
       
        </>
        );
    }
}
 
export default Counter;