import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css';


export function Sidebar() {
return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src='https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50' 
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src='https://github.com/JoaoLima-dev.png'/>

                <strong>João Lima</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Edit your profile
                </a>
            </footer>
        </aside>
    );
}