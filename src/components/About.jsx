import {Box,Image,HStack,VStack,Text,Heading,Link} from "@chakra-ui/react"
import Profilepic from "../Images/portprofile.jpg"
import Aboutbg from "../Images/Aboutbg.png"
import {BsLinkedin} from "react-icons/bs"
import {BiMessageRoundedDetail} from "react-icons/bi"
import { FaGithub } from 'react-icons/fa';

import { Show } from '@chakra-ui/react'
export default function About(){

    return (
        <>
        <Show above="800px" >
            <Box id="about" boxSizing="border-box"  w={"100%"}  m="auto" bgImage={Aboutbg} bgSize="cover" h={"auto"} mt={"90px"} borderRadius="10px">
            <Heading p="30px" color="#693fee" fontSize={"40px"}>About Me</Heading>
            <HStack p="40px"  justifyContent={"space-evenly"}  w={"98%"} m="auto" h={"auto"}  >
            
            <Box  w="25%" borderRadius={"10px"} border="2px solid #693fee" p="5px" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" >
            <Image w={"100%"}  m="auto" borderRadius={"10px"}  src={Profilepic} alt='' />
            </Box>
            <Box w="40%">
            <VStack>
            <Box    >
                <Heading color="#693fee">Hi..</Heading>
                <Heading color="#2f1c6a">I am Abhishek Pal</Heading>
                <Text mt="10px" fontSize={"23px"} color="#4f3f7d" fontWeight={"bold"}>"Full stack web developer with a passion for creating intuitive and functional web applications using a variety of technologies including HTML, CSS, JavaScript, and modern frameworks such as React and Node.js.</Text>
            </Box>
            <HStack  justify={"center"} gap="20px">
              <Link target={"_blank"} href="https://www.linkedin.com/in/abhishek-pal-14416323b/" w="10%" borderRadius={"5px"}><BsLinkedin color="#2f1c6a"  size="30px"/></Link>
               <Link  target={"_blank"} href="https://github.com/palabhi017"  w="14%" borderRadius={"5px"}>  <FaGithub color="#2f1c6a"  size="35px"/></Link>
               <Link  target={"_blank"} href="palabhi017@gmail.com"  borderRadius={"5px"} w="12%"><BiMessageRoundedDetail color="#2f1c6a" size="40px"/></Link>
        </HStack>
            </VStack>
            </Box>
           
        </HStack>
       
            </Box>
       

        </Show>
        <Show below="800px">
        <VStack justifyContent={"space-evenly"} boxSizing="border-box" bgColor="#f5f5f7" w={"98%"} m="auto" pb="10px" h={"auto"} mt={"90px"} borderRadius="10px" >
        <Heading color="#693fee" p="20px" fontSize={"30px"}>About Me</Heading>
            <Box mt="20px" border="2px solid #693fee" borderRadius={"5px"} w="55%" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" >
            <Image w={"90%"} m="auto" borderRadius={"10px"}  src={Profilepic}  />
            </Box>
            <VStack>
            <Box w="80%"  >
                <Heading color="#693fee">Hi..</Heading>
                <Heading color="#2f1c6a">I am Abhishek Pal</Heading>
                <Text w="90%" m="auto" mt="10px" fontSize={"23px"} textAlign="justify" color="#2f1c6a">"Full stack web developer with a passion for creating intuitive and functional web applications using a variety of technologies including HTML, CSS, JavaScript, and modern frameworks such as React and Node.js.</Text>
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