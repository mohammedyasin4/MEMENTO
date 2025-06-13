import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function navbar () {
    return (
        <header className="bg-gray-400 ">
            <div className="container mx-auto flex justify-evenly">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-white"
                    className="inflex-flex items-center py-7 px-3 mr-4 text-black opacity-100 hover:text-gray-800  text-4xl font-bold tracking-widest">
                        junior devoloper
                    </NavLink>
                     <NavLink 
  to="/post" 
  className={({ isActive }) => 
    `inline-flex items-center py-0 px-3 my-6 rounded ${isActive ? 'text-gray-800 bg-red-100' : 'text-red-200 hover:text-gray-800'} text-2xl font-bold`
  }
>
  Blog Post
</NavLink>
                     <NavLink 
  to="/project" 
  className={({ isActive }) => 
    `inline-flex items-center py-0 px-3 my-6 rounded ${isActive ? 'text-gray-800 bg-red-100' : 'text-red-200 hover:text-gray-800'} text-2xl font-bold`
  }
>
  Projects
</NavLink>
                     <NavLink 
  to="/about" 
  className={({ isActive }) => 
    `inline-flex items-center py-0 px-3 my-6 rounded ${isActive ? 'text-gray-800 bg-red-100' : 'text-red-200 hover:text-gray-800'} text-2xl font-bold`
  }
>
  About Me!
</NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
<SocialIcon url="https://x.com/FrontendDaily" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
<SocialIcon url="https://www.facebook.com/scopicsoftware" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
<SocialIcon url="https://www.instagram.com/scopic_software/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                </div>
            </div>
        </header>
    )
}