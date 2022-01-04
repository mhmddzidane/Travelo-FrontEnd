import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import styles from './Button.module.css'

type Props  = {
    children: ReactNode | string,
    className? : string,
    fullWidth? : boolean,
    outLined? : boolean,
    type? : ButtonHTMLAttributes<HTMLButtonElement>['type']
    variant? : 'primary' | 'google' | 'facebook' 
}

const Buttons = ({children, className = '', fullWidth, outLined, type, variant = 'primary'} : Props) => {
    return(
        <button className={clsx(
            styles.button,
            className,
            fullWidth && styles.fullWidth,
            outLined && styles.outLined,
            variant === 'primary' && 'bg-blue-100',
            variant === 'google' && 'bg-red-100',
            variant === 'facebook' && 'bg-facebook',
        )}>
            {variant === 'facebook' && (
                <FaFacebookF className='h-6 text-white mr-2'/>
            )}
            {variant === 'google' && <FaGoogle className='text-white h-6 w-6 mr-2'/>}
            {children}
        </button>
    )
}

export default Buttons