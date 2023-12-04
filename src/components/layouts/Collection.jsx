import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"
import Paragraph from "../Paragraph"
import Sweter from "../../assets/Sweater.png"
import Jeans from "../../assets/Jeans.png"
import Shoo from "../../assets/Shoo.png"
import Button from "../Button"

const Collection = () => {
  return (
    <section className="h-[800px] mt-[150px]">
        <Paragraph className="text-mainHeading font-bold font-frank mt-12 me-40 text-center" text="New Collection"/>
        <Container>
           <Flex className="justify-between mt-[100px]">
            <div className="relative">
              <Image src={Sweter}/>
              <Button className="absolute top-80 left-4 text-2xl font-pop w-[315px] h-[57px] rounded-2xl bg-white text-black px-5 me-3 duration-500" text="Sweater"/>
            </div>
            <div className="relative">
              <Image src={Jeans}/>
              <Button className="absolute top-80 left-5 text-2xl font-pop w-[315px] h-[57px] rounded-2xl bg-white text-black px-5 me-3 duration-500" text="Jeans"/>
            </div>
            <div className="relative">
              <Image src={Shoo}/>
              <Button className="absolute top-80 left-10 text-2xl font-pop w-[315px] h-[57px] rounded-2xl bg-white text-black px-5 me-3 duration-500" text="Baskets"/>
            </div>
           </Flex>
        </Container>
    </section>
  )
}
            
export default Collection