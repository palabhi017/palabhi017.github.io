import {Box,Image,HStack,VStack,Text,Heading} from "@chakra-ui/react"
import Profilepic from "../Images/portprofile.jpg"
import Homebg from "../Images/Homebg.png"
// import {BsLinkedin} from "react-icons/bs"
// import {BiMessageRoundedDetail} from "react-icons/bi"
// import { FaGithub } from 'react-icons/fa';
import Contactsmbg from "../Images/Contactsmbg.png"

import { Show } from '@chakra-ui/react'
export default function About(){

    return (
        <>
        <Show above="900px" >
            <Box id="home"  className="about section" boxSizing="border-box"  w={"100%"}  m="auto" bgImage={Homebg} bgSize="100% 100%" h={"auto"} mt={"90px"} borderRadius="10px">
            <Heading  p="30px" color="#693fee" fontSize={"40px"}>Home</Heading>
            <HStack p="50px 40px"  justifyContent={"space-evenly"}  w={"98%"} m="auto" h={"auto"}  >
            
            <Box  w="25%" borderRadius={"10px"} border="2px solid #693fee" p="5px"  boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" >
            <Image className="home-img" w={"100%"}  m="auto" borderRadius={"10px"}  src={Profilepic} alt='' />
            </Box>
            <Box w="50%">
            <VStack>
            <Box   alignItems={"top"} >
                <Text color="#693fee" fontSize={"30px"} fontWeight="600" fontFamily="cursive"   textAlign={"left"}>Hello..</Text>
                <Text id="user-detail-name" bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize={{md:"40px",lg:"60px"}} fontFamily="sans-serif" fontWeight="bold">I'm Abhishek Pal</Text>
                <Text id="user-detail-intro" mt="-10px" fontFamily='sans-serif' textAlign={"justify"} ml="40px" fontSize={"30px"} color="#693fee" fontWeight={"bold"} >I am a Full stack web developer</Text>
            </Box>
            {/* <HStack  justify={"center"} gap="20px">
              <Link  id="contact-linkedin" target={"_blank"} href="https://www.linkedin.com/in/abhishek-pal-14416323b/" w="10%" borderRadius={"5px"}><BsLinkedin color="#2f1c6a"  size="30px"/></Link>
               <Link  id="contact-github"  target={"_blank"} href="https://github.com/palabhi017"  w="14%" borderRadius={"5px"}>  <FaGithub color="#2f1c6a"  size="35px"/></Link>
               <Link  target={"_blank"} href="palabhi017@gmail.com"  borderRadius={"5px"} w="12%"><BiMessageRoundedDetail color="#2f1c6a" size="40px"/></Link>
        </HStack> */}
            </VStack>
            </Box>
           
        </HStack>
       
            </Box>
       
        </Show>
        <Show below="900px">
        <VStack id="shome" justifyContent={"space-evenly"}  boxSizing="border-box" bgImage={Contactsmbg} bgSize="100% 100%" w={"98%"} m="auto" pb="10px" h={"auto"} mt={"90px"} borderRadius="10px" >
        <Heading id="about.about.section" color="#693fee" p="20px" fontSize={"30px"}>Home</Heading>
            <Box mt="20px" border="2px solid #693fee" borderRadius={"5px"} w="55%" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" >
            <Image w={"100%"} m="auto" borderRadius={"10px"}  src={Profilepic}  />
            </Box>
           
            <Box   alignItems={"top"} p="30px 0px" >
                <Text color="#693fee" fontSize={"25px"} fontWeight="600" fontFamily="cursive"   textAlign={"left"}>Hello..</Text>
                <Text id="user-detail-name" bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize={"40px"} fontFamily="sans-serif" fontWeight="bold">I'm Abhishek Pal</Text>
                <Text id="user-detail-intro" mt="-10px" fontFamily='sans-serif' textAlign={"justify"} ml="30px" fontSize={"20px"} color="#693fee" fontWeight={"bold"} >I am a Full stack web developer</Text>
            </Box>
            {/* <HStack  justify={"center"} gap="20px">
              <Link target={"_blank"} href="https://www.linkedin.com/in/abhishek-pal-14416323b/" w="10%" borderRadius={"5px"}><BsLinkedin color="#2f1c6a"  size="30px"/></Link>
               <Link  target={"_blank"} href="https://github.com/palabhi017"  w="14%" borderRadius={"5px"}>  <FaGithub color="#2f1c6a"  size="35px"/></Link>
               <Link  target={"_blank"} href="palabhi017@gmail.com"  borderRadius={"5px"} w="12%"><BiMessageRoundedDetail color="#2f1c6a" size="40px"/></Link>
        </HStack> */}
  
        </VStack>
        </Show>
        </>
    )
}