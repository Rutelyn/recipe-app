import RecipeCard from "../components/RecipeCard"
import recipeOneImage from "../assets/images/recipe-one.png"
import recipeTwoImage from "../assets/images/recipe-two.png"
import recipeThreeImage from "../assets/images/recipe-three.png"
import recipeFourImage from "../assets/images/recipe-four.png"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import BottomNavigation from "../components/BottomNavigation"

const Recipes = () => {
  return (
    <>
     <div className="px-10 py-10">
        
        <h3 className="text-center font-bold">Search</h3>
        <div>
        <h3 className="font-bold">What is in your kitchen?</h3>
        <p>Enter some ingredients</p>
        </div>
        <div className="border border-blue-300">
            <MagnifyingGlassIcon className="size-[15px] "/>
            <h5>Type your ingredients here</h5>
        </div>
        
        <div className="grid grid-cols-2 gap-5 pt-5">
            <RecipeCard image={recipeOneImage} 
            name="Chorizo & mozzarella gnocchi bake" />
            <RecipeCard image={recipeTwoImage} 
            name="Coconut & squash curry" />
            <RecipeCard image={recipeThreeImage} 
            name="Huevos Rancheros" />
            <RecipeCard image={recipeFourImage} 
            name="Black forest Gateau" />
        </div>
    </div>
    <div>
        <BottomNavigation/>
    </div>
    </>
   
  )
}

export default Recipes