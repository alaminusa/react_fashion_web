import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Model from '../../assets/Banner.png'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Button from '../Button'

const Banner = () => {
  return (
    <section className='bg-primaryColor pb-9'>
        <Container>
        <Flex className="justify-between">
            <div className="w-1/2">
              <Heading className="text-mainHeading font-semibold font-pop mt-12" text="Find The Best Fashion Style For You" as="h1"/>
              <Paragraph className="text-paraBanner font-normal font-pop mt-12 me-40" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra."/>
              <Button className="text-2xl w-[319px] h-[86px] rounded-md shadow-xl bg-black text-white px-5 me-3 duration-500 mt-12 font-pop" text="SHOP NOW"/>
            </div>
            <div className="w-1/2">
              <Image src={Model}/>
            </div>
        </Flex>
    </Container>
    </section>
  )
}

export default Banner

