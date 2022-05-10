import styles from "../styles/Nav.css"
import AnimatedButton from './AnimatedButton';

function Nav() {

    return (
        <div className={styles}>
            <div class="container">
         
            <div class="button">
                ⬆️
            </div>
            
                
            </div>
            {/* <div class="container">
                <AnimatedButton text={"Home"}></AnimatedButton>
                <AnimatedButton text={"Learn More"}></AnimatedButton>
            </div> */}
        </div>
    );
}

export default Nav;