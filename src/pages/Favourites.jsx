import FavouritesCard from "../components/FavouritesCard"
import favouritesOneImage from "../assets/images/favourites-one.png"
import favouritesTwoImage from "../assets/images/favourites-two.png"
import BottomNavigation from "../components/BottomNavigation"

const Favourites = () => {
  return (
    <>
     <div className="px-10 py-10">
        
        <h3 className="text-center font-bold">Favourites</h3>
    
        <div className="grid grid-cols-2 gap-5">
            <FavouritesCard image={favouritesOneImage} 
            name="Chorizo & mozzarella gnocchi bake" />
            <FavouritesCard image={favouritesTwoImage}
            name="Huevos Rancheros" />
            
        </div>
    </div>
    <div>
        <BottomNavigation/>
    </div>
    </>
   
  )
}

export default Favourites