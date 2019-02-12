import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import propTypes from 'prop-types';
//PropTypes are a form of validation for component properties, which we will use for holding our items

class ShoppingList extends Component{


    componentDidMount(){
        this.props.getItems(); //TODO: figure out how this call works and makes ti so that this.props.item now holds the state for our application
    }//this is a react lifecycle method, which runs when this ShoppingList component mounts to our page in App.js
     //TODO: Figure out what a react lifecycle method is

    onClickDelete = (id) => {
        this.props.deleteItem(id); //because we used connect at the bottom, we can now access deleteItem through the props property, and call the deleteItem function with the id
                                   //so that it will call the item reducer with the action type and payload
    };

    render(){
        const { items } = this.props.item; //destructuring, i.e getting a reference to items directly 
        return(
            <Container>
                <ListGroup>
                   <TransitionGroup className="shopping-list">
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button 
                                        className="remove-btn" 
                                        color="danger" 
                                        size="sm"
                                        onClick={this.onClickDelete.bind(this,id)}>
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                   </TransitionGroup> 
                </ListGroup>
            </Container>
        );
    }
}

//TODO: Figure out what everything below is!

ShoppingList.propTypes = {
    getItems: propTypes.func.isRequired,
    item: propTypes.object.isRequired //It is a prop but were mapping it from the state we brought it to a property using mapStateToProps
}//when you bring in an action from redux like get items, it has to become a react prop

const mapStateToProps = (state) => ({
    item: state.item
}); //this function is going to take the state which we pass onto it and map it to a component property like 'this.props.items' and then load it into the page

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);  //this makes it so that getItems or deleteItem are accessible to us via 'this.props.getItems'
//connect is going to allow us to call the function as we're loading the shopping list component to get the item