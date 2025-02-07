import CategoriesCard from "../components/CategoriesCard"
import BottomNavigation from "../components/BottomNavigation"
import { useEffect, useState } from "react"
import axios from "axios"

const Categories = () => {
    // Define a state to store categories

    const [categories, setCategories] = useState([])
    // Define a function to get categories
    const getCategories =async () => {
        const response = await axios.get (`${import.meta.env.VITE_RECIPE_API}/categories`)
        setCategories(response.data)
    };

    // fetch data with useEffect
    useEffect(() => {
        getCategories();
    }, []);



    return (
      <div>
          
          <h3 className="text-center font-bold text-2xl pt-4">Categories</h3>
          
          <div className="flex flex-col gap-[13px]">
              {categories.map(category => (
                <CategoriesCard
                key={category.id}
                name={category.name}
                image={`${import.meta.env.VITE_RECIPE_API}/${category.image}`} />
              )
              )}
          </div>
          <BottomNavigation/>
      </div>
    )
  }
  
  export default Categories