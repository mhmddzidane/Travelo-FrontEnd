import Link from 'next/link'

type Props = {
    label : string,
    href : string
}

const NavItem = ({label, href = '/'} : Props) => {
    return (
        <Link href={href}>
            <a href="" className="text-heading-4 text-gray-70 font-label font-bold hover:text-blue-100">{label}</a>
        </Link>
    )
}

export default NavItem