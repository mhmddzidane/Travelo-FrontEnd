import cn from 'classnames'
import styles from './Button.module.css'

type Props  = {
    children: string,
    className? : string,
    fullWidth? : boolean,
    outLined? : boolean
}

const Buttons = ({children, className = '', fullWidth, outLined} : Props) => {
    return(
        <button className={cn(styles.button, className, {
            [styles.fullWidth] : fullWidth,
            [styles.outLined] : outLined
        })}>
            {children}
        </button>
    )
}

export default Buttons