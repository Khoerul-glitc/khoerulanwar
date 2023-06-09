import { Navbar, Container, Nav,} from "react-bootstrap"

const NavigationBar =()=>{
    return (
        <div>
        <Navbar variant="dark">
           <Container>
            <Navbar.Brand>MAIN GAME YU</Navbar.Brand>
            <Nav>
             <Nav.Link>Game Populer</Nav.Link>
             <Nav.Link>Game Anak</Nav.Link>
             </Nav>
           </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar