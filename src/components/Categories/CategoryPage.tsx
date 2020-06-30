import React, {Component} from 'react'; 
import firebaseApp from '../../config/firebase';
import FoodCategory from '../FoodCategory'; 
import Headline from "../Headline";
import modules from "../styles/Category.module.css";

const db = firebaseApp.firestore(); 

class CategoryPage extends Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            categories: Array() 
        };
    }

    componentDidMount() {
        db.collection('menu').doc('smy7J1V4liwCklUdtncK').collection('category')
            .get()
            .then(snapshot => {
                // console.log(snapshot);
                const categories = Array()
                snapshot.forEach( doc => {
                    const data = doc.data();
                    categories.push(data); 
                })
                this.setState({categories: categories}); 
                // console.log(categories); 

            })
            .catch(error => console.log(error)); 
    }

    render() {
        return (
            <div className={modules.Container}>
                <div>
                <Headline title="Bon Appétit!" imageURL="/Fruits.jpg" />
                </div>
                <div className={modules.FoodCategory} >
                {
                    this.state.categories &&
                    this.state.categories?.map(category => {
                        return(
                            <FoodCategory
                                category={category.name}
                                desc={category.description}
                            />
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

export default CategoryPage; 