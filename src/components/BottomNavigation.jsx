import { NavLink } from "react-router-dom"

import { BookmarkIcon, HeartIcon, HomeIcon, PlusIcon } from "@heroicons/react/24/solid"



const BottomNavigation = () => {
  return (
    <div className="flex justify-evenly items-center h-[96px] fixed bottom-0 w-full bg-slate-300">
        <NavLink to={"./recipes"}>
            <HomeIcon className="size-[24px]"/>
        </NavLink>

        <NavLink to={"./categories"}>
            <BookmarkIcon className="size-[24px]"/>
        </NavLink>

        <NavLink to={"./favorite"}>
            <HeartIcon className="size-[24px]"/>
        </NavLink>

        <NavLink to={"./ new/favorite"}>
            <PlusIcon className="size-[24px]"/>
        </NavLink>

    </div>
  )
}

export default BottomNavigation