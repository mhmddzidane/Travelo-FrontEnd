import {ReactNode} from 'react'
import Footer from './Footer'
import Header from './Header'

type Props ={
    children : ReactNode
}

const Layout = ({children} : Props) => {
    return (
        <>
        <Header/>
        {children}
        <Footer></Footer>
        </>
    )
}

export default Layout