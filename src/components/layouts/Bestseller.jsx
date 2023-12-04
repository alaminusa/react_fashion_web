import Container from "../Container"
import Flex from "../Flex"
import Paragraph from "../Paragraph"
import Button from '../Button'
import Image from "../Image"
import white from "../../assets/whitegirl.png"
import caseone from "../../assets/caseone.png"
import sketbord from "../../assets/sketbord.png"
import casetwo from "../../assets/casetwo.png"

const Bestseller = () => {
  return (

    <section className="bg-bestsellingColor pb-20">
        <Container className="">
            <Flex className="justify-between">
                <div className="w-1/3 mt-10">
                    <Paragraph className="text-mainHeading font-bold font-frank text-white" text="Best Seller Product"/>
                    <Paragraph className="text-2xl font-bold font-frank text-white" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus."/>
                    <Button className="text-2xl w-[319px] font-semibold h-[86px] rounded-md shadow-xl bg-black text-white px-5 me-3 duration-500 mt-12 font-pop" text="Learn MORE"/>
                </div>
                <div className="w-1/3 mt-10">
                    <Image src={white}/>
                    <Image src={caseone}/>
                </div>
                <div className="w-1/3 mt-10">
                    <Image src={sketbord}/>
                    <Image src={casetwo}/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Bestseller