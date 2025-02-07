
const CategoriesCard = ({name, image}) => {
    return (

        <div className= " relative items-center flex border rounded-2xl shadow-md h-[80px] w-[400px] bg-gray-200 ">
          <p className= " text-black font-bold text-2xl">{name}</p>
          <img className="absolute bottom-0 right-2 " src={image} alt={name} />
        </div>
    
    )
  }
  
  export default CategoriesCard