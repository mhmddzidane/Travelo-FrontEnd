import Link from 'next/link'
import NavItem from '../NavItem'

const Nav = () => {
    return (
       <nav className="flex items-center gap-5 ">
           <NavItem href='/' label='Beranda'></NavItem>
           <NavItem href='/' label='Kontak'></NavItem>
           <NavItem href='/' label='Paket'></NavItem>
           <NavItem href='/' label='Testimonial'></NavItem>
       </nav>
    )
}

export default Nav