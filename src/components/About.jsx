import {Box,Image,HStack,VStack,Text,Heading,Link} from "@chakra-ui/react"
import Profilepic from "../Images/webdesign.png"
import Aboutbg from "../Images/Aboutbg.png"
import {BsLinkedin} from "react-icons/bs"
import {BiMessageRoundedDetail} from "react-icons/bi"
import { FaGithub } from 'react-icons/fa';

import { Show } from '@chakra-ui/react'
export default function About(){

    return (
        <>
        <Show above="900px" >
            <Box id="about"  className="about section"  boxSizing="border-box"  w={"100%"}  m="auto" bgImage={Aboutbg} bgSize="100% 100%" h={"600px"} mt={"10px"} borderRadius="10px">
            <Heading  p="30px" color="#693fee" fontSize={"40px"}>About Me</Heading>
            <HStack p="20px"  justifyContent={"space-evenly"} alignItems="center" w={"98%"} m="auto" h={"60%"}  >
            
            <Box  w="40%" borderRadius={"10px"}  p="5px"  >
            <Image className="home-img" w={"100%"}  m="auto" borderRadius={"10px"}  src={Profilepic} alt='' />
            </Box>
            <Box w="40%">
            <VStack>
            <Box>
                
                <Text id="user-detail-intro"  mt="10px" textAlign={"left"} fontSize={"25px"} fontFamily={"sans-serif"} color="#4f3f7d" fontWeight={"bold"}>"Full stack web developer with a passion for creating intuitive and functional web applications using a variety of technologies including HTML, CSS, JavaScript, and modern frameworks such as React and Node.js."</Text>
            </Box>
            <HStack  justify={"center"} gap="10px">
              <Link   target={"_blank"} href="https://www.linkedin.com/in/abhishek-pal-14416323b/" w="10%" borderRadius={"5px"}><BsLinkedin color="#2f1c6a"  size="30px"/></Link>
               <Link    target={"_blank"} href="https://github.com/palabhi017"  w="14%" borderRadius={"5px"}>  <FaGithub color="#2f1c6a"  size="35px"/></Link>
               <Link  target={"_blank"} href="palabhi017@gmail.com"  borderRadius={"5px"} w="12%"><BiMessageRoundedDetail color="#2f1c6a" size="40px"/></Link>
               <Link id="resume-link-2" href="Abhishek_Pal_Resume.pdf"  target={"_blank"}  download={"Abhishek_Pal_Resume"}><Text id="resume-button-2" color="white" bgColor="#2f1c6a" p="5px 10px" fontSize={"20px"} borderRadius={"5px"}>Resume</Text></Link> 
        </HStack>
            </VStack>
            </Box>
           
        </HStack> 
       
            </Box>
       
        </Show>
        <Show below="900px">
        <VStack id="sabout" justifyContent={"space-evenly"} boxSizing="border-box" bgColor="#f5f5f7" w={"98%"} m="auto" pb="10px" h={"auto"} mt={"10px"} borderRadius="10px" >
        <Heading id="about.about.section" color="#693fee" p="20px" fontSize={"30px"}>About Me</Heading>
        <Box  w="95%" borderRadius={"10px"}  p="5px"  >
            <Image className="home-img" w={"100%"}  m="auto" borderRadius={"10px"}  src={Profilepic} alt='' />
            </Box>
            <VStack>
            <Box w="80%"  >
                
                <Text w="90%" m="auto" mt="10px" fontSize={"23px"} textAlign="justify" fontFamily={"sans-serif"} color="#2f1c6a">"Full stack web developer with a passion for creating intuitive and functional web applications using a variety of technologies including HTML, CSS, JavaScript, and modern frameworks such as React and Node.js.</Text>
            </Box>
            <HStack  justify={"center"} gap="20px">
              <Link target={"_blank"} href="https://www.linkedin.com/in/abhishek-pal-14416323b/" w="10%" borderRadius={"5px"}><BsLinkedin color="#2f1c6a"  size="30px"/></Link>
               <Link  target={"_blank"} href="https://github.com/palabhi017"  w="14%" borderRadius={"5px"}>  <FaGithub color="#2f1c6a"  size="35px"/></Link>
               <Link  target={"_blank"} href="palabhi017@gmail.com"  borderRadius={"5px"} w="12%"><BiMessageRoundedDetail color="#2f1c6a" size="40px"/></Link>
        </HStack>
            </VStack>
        </VStack>
        </Show>
        </>
    )
}