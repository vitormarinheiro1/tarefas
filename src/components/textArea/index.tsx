import { HTMLProps } from 'react'
import styles from './styles.module.css'

export function Textarea({ ...rest }: HTMLProps<HTMLTextAreaElement>) {
    return (
        <div>
            <textarea className={styles.textarea} {...rest}></textarea>
        </div>
    )
}