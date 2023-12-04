
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import List from '../List'
import Logo from '../../assets/Fresh.png'
import Button from '../Button'

const Navbar = () => {
  return (
    <nav className="bg-primaryColor py-5">
      <Container>
        <Flex>
          <div className="w-1/4 mt-2">
            <Image src={Logo}/>
          </div>
          <div className="w-1/2 mt-3">
            <ul>
                <Flex className="justify-between text-2xl font-semibold font-pop">
                  <List href="#" text="Men"/>
                  <List href="#" text="Womam"/>
                  <List href="#" text="Kids"/>
                  <List href="#" text="Collection"/>
                  <List href="#" text="Trends"/>
                </Flex>
              </ul>
          </div>
          <div className="w-1/4 px-8 text-2xl font-semibold font-pop">
            <Button className="rounded-md shadow-xl hover:bg-secondaryColor px-5 me-2 duration-500 py-2" text="Login"/>
            <Button className="rounded-md shadow-xl hover:bg-secondaryColor px-5 me-2 duration-500 py-2" text="Sign Up"/>
          </div>
        </Flex>
    </Container>
    </nav>
  )
}

export default Navbar