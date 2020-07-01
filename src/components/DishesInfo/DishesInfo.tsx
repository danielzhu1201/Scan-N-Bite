import React, {Component} from 'react'; 
import firebaseApp from '../../config/firebase'

// import Headline from '../../components/Headline'
import ArrowBack from "../ArrowBack";
import FoodInfoDescription from "../InfoDescription";
import OrderButton from "../OrderButton";
import Headline from "../Headline";

import modules from "../styles/FoodInfo.module.css";

const db = firebaseApp.firestore(); 

class DishesInfo extends Component<any, any>{
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
                snapshot.forEach(doc => {
                    const data = doc.data();
                    dishes.push(data); 
                })
                this.setState({dishes: dishes}); 
                // console.log(dishes); 
            })
            .catch(error => console.log(error)); 
    }

    render() {
        return (
            <div className={modules.Container}>
                <div className={modules.FoodInfoHeadline}>
                    <Headline title="Dishes" imageURL="/Fruits.jpg" />
                        {
                            this.state.dishes
                            .map(dish => {
                                return(
                                    <div className={modules.FoodInfoDescriptionWrapper}>
                                        <Headline title={dish.name} imageURL="/Fruits.jpg" />
                                        <FoodInfoDescription title={"Description"} content={dish.description} />
                                        <FoodInfoDescription title={"Calories"} content={dish.calories} />
                                        

                                        {/* <p>Dish Name: {dish.name}</p>
                                        <p>Dish Description: {dish.description}</p>
                                        <p>Dish Calories: {dish.calories}</p>
                                        <p>Dish Quantity: {dish.quantity}</p> */}

                                        {/*<div className={modules.FoodInfoOrderButton}>
                                        <OrderButton price={dish.price} />
                                        </div>*/}
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        )
    }
}

export default DishesInfo; 