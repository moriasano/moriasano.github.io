import styles from "../styles/Nav.css"

function Nav({setTab}) {

    return (
        <div className={styles}>
            <div class="container">

                &nbsp;
                <div class="buttonRow">
                    <div>
                        <button onClick={() => {setTab(1)}}>
                            [Parallax]
                        </button>
                    </div>

                    <div>
                        <button onClick={() => {setTab(2)}}>
                            [Button 2]
                        </button>
                    </div>

                    <div>
                        <button onClick={() => {setTab(3)}}>
                            [Button 3]
                        </button>
                    </div>

                </div>
            
                
            </div>
        </div>
    );
}

export default Nav;