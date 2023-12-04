import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"
import Model from "../../assets/ladywithbag.png"
import Heading from "../Heading"
import Paragraph from "../Paragraph"

const Fashion = () => {
  return (
    <section className="h-[900px]">
        <Container className="absolute">
          <Flex className="justify-between z-20">
                <Image src={Model}/>
            <div className="ms-36">
                <Heading className="text-mainHeading font-semibold font-pop mt-12" text="Best Fashion Since 2010" as="h3"/>
                <Paragraph className="text-paraBanner font-normal font-pop mt-12" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra."/>
            </div>
          </Flex>
          <Flex className="bg-primaryColor rounded-xl mt-14 px-4 py-10 justify-between w-1/2 mx-auto relative bottom-28 left-64 -z-10">
                  <div>
                   <Paragraph className="text-mainHeading font-bold font-pod" text="2010"/>
                   <Paragraph className="text-counterText font-normal font-pop" text="Fronted "/>
                  </div>
                  <div className="border-solid border-black border-l-2 border-r-2 px-8">
                   <Paragraph className="text-mainHeading font-bold font-pod" text="5000+"/>
                   <Paragraph className="text-counterText font-normal font-pop" text="Product Sold "/>
                  </div>
                  <div>
                   <Paragraph className="text-mainHeading font-bold font-pod" text="4500+"/>
                   <Paragraph className="text-counterText font-normal font-pop" text="Best Reviews"/>
                  </div>
                </Flex>
        </Container>
    </section>

  )
}

export default Fashion