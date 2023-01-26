import {Box,Image,HStack,VStack,Text,Heading} from "@chakra-ui/react"
import Profilepic from "../Images/portprofile.jpg"
import Aboutbg from "../Images/Aboutbg.png"
import {BsLinkedin} from "react-icons/bs"
import {BiMessageRoundedDetail} from "react-icons/bi"
import { FaGithub } from 'react-icons/fa';

import { Show } from '@chakra-ui/react'
export default function About(){

    return (
        <>
        <Show above="700px" >
            <Box boxSizing="border-box"  w={"100%"}  m="auto" bgImage={Aboutbg} bgSize="cover" h={"auto"} mt={"90px"} borderRadius="10px">
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
            <HStack justify={"center"} gap="10px">
                {/* <Image w="9%" borderRadius={"5px"} src="https://www.bing.com/th?id=OIP.C8b27iRAS2bcSGd-v_duTgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
                <Image w="12%"  src="https://www.pngarts.com/files/8/Black-Github-Logo-PNG-Image-Background.png"/>
                <Image w="10%"  src="https://icones.pro/wp-content/uploads/2021/05/icones-de-messagerie-noires-300x300.png"/> */}
                <BsLinkedin color="#2f1c6a"  size="30px"/>
                <FaGithub color="#2f1c6a"  size="35px"/>
                <BiMessageRoundedDetail color="#2f1c6a" size="40px"/>
            </HStack>
            </VStack>
            </Box>
           
        </HStack>
       
            </Box>
       

        </Show>
        <Show below="700px">
        <VStack justifyContent={"space-evenly"} boxSizing="border-box"  w={"98%"} m="auto" pb="10px" h={"auto"} mt={"90px"} borderRadius="10px" bgColor="#008970">
        <Heading color="#ffe77b" fontSize={"30px"}>About Me</Heading>
            <Box mt="20px"   w="55%" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" >
            <Image w={"90%"} m="auto" borderRadius={"10px"}  src={Profilepic}  />
            </Box>
            <VStack>
            <Box w="80%"  >
                <Heading color="#fff">Hi..</Heading>
                <Heading color="#fff">I am Abhishek Pal</Heading>
                <Text w="90%" m="auto" mt="10px" fontSize={"23px"} textAlign="justify" color="#ffe77b">"Full stack web developer with a passion for creating intuitive and functional web applications using a variety of technologies including HTML, CSS, JavaScript, and modern frameworks such as React and Node.js.</Text>
            </Box>
            <HStack justify={"center"}>
                <Image w={"10%"} src={"https://www.bing.com/th?id=OIP.C8b27iRAS2bcSGd-v_duTgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"} />
                <Image w={"14%"} src={"https://www.pngarts.com/files/8/Black-Github-Logo-PNG-Image-Background.png"}/>
                <Image w={"12%"} src={"https://icones.pro/wp-content/uploads/2021/05/icones-de-messagerie-noires-300x300.png"}/>
            </HStack>
            </VStack>
        </VStack>
        </Show>
        </>
    )
}