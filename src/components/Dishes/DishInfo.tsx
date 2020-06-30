import React, {Component} from 'react'; 
import firebaseApp from '../../config/firebase'

const db = firebaseApp.firestore(); 

class DishInfo extends Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            dishes: Array(), 
        };
    }

    componentDidMount() {
        db.collection('menu').doc('smy7J1V4liwCklUdtncK').collection('category').doc('WAZAfnCeu8q6cbM9vA9L').collection('items')
            .get()
            .then(snapshot => {
                // console.log(snapshot);
                const dishes = Array()
                snapshot.forEach( doc => {
                    const data = doc.data();
                    dishes.push(data); 
                })
                this.setState({dishes: dishes}); 
                // console.log(dishes); 
            })
            .catch(error => console.log(error)); 
    }

    render() {
        const dishName = 'Lime Rita'
        
        return (
            <div>
                <h1>Dishes Page</h1>
                {/* {
                    this.state.dishes &&
                    this.state.dishes?.map(dish => {
                        return(
                            <div>
                                <p>Dish Name: {dish.name}</p>
                                <p>Dish Description: {dish.description}</p>
                                <p>Dish Calories: {dish.calories}</p>
                                <p>Dish Quantity: {dish.quantity}</p>
                                <p>Dish Price: {dish.price}</p>
                                <p> ----------------------- </p>
                            </div>
                        )
                    })
                } */}

                {
                    this.state.dishes &&
                    this.state.dishes?.filter(dish => dish.name === dishName)
                    .map(dish => {
                        return(
                            <div>
                                <p>Dish Name: {dish.name}</p>
                                <p>Dish Description: {dish.description}</p>
                                <p>Dish Calories: {dish.calories}</p>
                                <p>Dish Quantity: {dish.quantity}</p>
                                <p>Dish Price: {dish.price}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default DishInfo; 