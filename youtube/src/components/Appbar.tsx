import { SearchBar } from "./Searchbar"
import {Signin } from "./Signin"
 

export const Appbar = ()=>{
    return <div className="flex justify-between pt-5">
        <div>
            <img className={'w-15 h-8 ps-10 cursor-pointer'}src='./Youtube.png'></img>
        </div>
        <div>
            <SearchBar />
        </div>
        <div>
            <Signin />
        </div>
    </div>
}