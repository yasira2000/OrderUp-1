import { Avatar, Button, Dropdown, Flowbite, Navbar, TextInput } from 'flowbite-react'
import {Link, useLocation} from 'react-router-dom'
import { RiAccountCircleLine } from "react-icons/ri";

export default function Header() {
  return (
    <Navbar className = 'border-b-50 flex flex-col gap-3'>
      <Link to='/'>
        <img class="h-auto max-w-full" src='../Images/Temp-Logo-Order-Up.png'/>
      </Link>
      <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
        Notifications
      </Button>
      <Button className='w-12 h-10 hidden sm:inline' color='gray' pill >
        <RiAccountCircleLine />
      </Button>
    </Navbar>
  )
}
