import React from './React';

const MealsContext=React.createContext();

const todaysMeals=["Baked Beans" , "Mashed Potatoes" , "Fish fillets"];

const MealsProvider =({children}) =>{
    const [meals, setMealsList] = React.useState(todaysMeals);

    return(
        <MealsContext.Provider value ={{meals}}>
            {children}
        </MealsContext.Provider>
    );
}

export const useMealsListContext=() => React.useContext(MealsContext);

export default MealsProvider;