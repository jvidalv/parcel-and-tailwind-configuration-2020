import { h, FunctionalComponent, ComponentChildren } from 'preact';
// @ts-ignore
import styles from './button.pcss'

interface Props {
    children?: ComponentChildren;
}

export const Button: FunctionalComponent<Props> = ({children}) => {
    return (
       <button className={styles.button}>
           {children}
       </button>
    )
}
