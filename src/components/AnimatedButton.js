import style from '../styles/AnimatedButton.css'

// Make stylesheet a prop? parameter ?
function AnimatedButton(props) {
    return (
        <div className={style}>
            <div>
                <button>
                    {props.text}
                </button>
            </div>
        </div>

    );
}

export default AnimatedButton;