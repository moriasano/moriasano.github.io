import { Container, Navbar } from "react-bootstrap";

function Nav() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        🙂
                        {/* <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        /> */}{' '}
                        Mori Asano
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
}

export default Nav;