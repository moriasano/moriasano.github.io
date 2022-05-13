import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// Parallax Images
import auroraImage from "./styles/parallax_images/aurora.jpeg"

function ParallaxDemo() {

    return (
        <div>
            <Parallax pages={3}>
                <ParallaxLayer
                    // offset={0}
                    speed={10}
                    style={{
                        backgroundImage: `url(${auroraImage})`,
                        display: "inline-block",
                        width: '100%',
                        height: '100%',
                        // overflowY: "hidden",
                        // display: "inline-block",
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        
                    }}
                >
                </ParallaxLayer>

                <ParallaxLayer>
                    <br />
                    <br />
                    <br />
                    <br />
                    WELCOME
                </ParallaxLayer>

                
            </Parallax>
            ASDfinas'lfdnsl
        </div>
    );
}

export default ParallaxDemo;