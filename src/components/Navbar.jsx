import {HStack,Box,Image,Text,Stack,VStack} from "@chakra-ui/react"
import React from "react"
import portlogo from "../Images/portlogo.png"
import {
    Drawer,
    DrawerBody,
   
    DrawerOverlay,
    DrawerContent,
   
  } from '@chakra-ui/react'
  // import { FcAbout } from 'react-icons/fc'
  import {HashLink as Link} from "react-router-hash-link"
  import { useDisclosure } from '@chakra-ui/react'
  import { Show, Hide } from '@chakra-ui/react'
  import { HamburgerIcon } from '@chakra-ui/icons'
export default function Navbar(){
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
    return (
        <>
        <HStack id="nav-menu" zIndex={1} pos="fixed" top="0px"  borderRadius={"10px"} w={"100%"} m="auto" boxSizing="border-box" bgColor={"#f5f5ff"} h="80px" justifyContent={"space-between"} p="10px 30px">
            <Box ml="30px">
            <Image w={"20%"} src={portlogo} alt='Dan Abramov' />
            </Box>
            <Hide below="800px">
            <HStack  justifyContent={"space-evenly"} font-family={"IBM Plex Sans', sans-serif"} fontWeight="900" w={"50%"} fontSize={"20px"} color="#693fee" >
            <Link className="nav-link.home"  scroll={el => el.scrollIntoView({ behavior: 'smooth'})} to="#about" >About</Link>
               <Link className="nav-link skills"  scroll={el => el.scrollIntoView({ behavior: 'smooth'})} to="#skills" >Skills</Link>
               <Link className="nav-link projects"  scroll={el => el.scrollIntoView({ behavior: 'smooth'})} to="#project" >Project</Link>
               <Link className="nav-link contact"  scroll={el => el.scrollIntoView({ behavior: 'smooth'})} to="#contact" >Contact</Link>
               <a  id="resume-link-1" href="Abhishek_Pal_Resume.pdf"  download={"Abhishek_Pal_Resume"}><Text id="nav-link resume"  color="white" bgColor="#693fee" p="5px" borderRadius={"5px"}>Resume</Text></a> 
            </HStack>
            </Hide> 
            <Show breakpoint='(max-width: 800px)'> 
             <Stack>
             <HamburgerIcon color={"#2f1c6a"} boxSize={"40px"}  ref={btnRef} colorScheme='teal' onClick={onOpen} />
            
          
            </Stack> 
             </Show>
            
        </HStack>
        <Drawer  placement={"rigth"} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay /> 
            <DrawerContent borderRadius="0px 0px 15px 15px" mt="80px" h="300px">
         
              <DrawerBody>
               <VStack fontSize={"30px"}>
               <Text  w="100%"  className="nav-link skills" textAlign={"center"} bgColor="#f5f5f7" _hover={{bgColor:"#693fee",color:"#fff"}} color="#693fee" borderBottom={"2px solid #1b49be"}><Link   scroll={el => el.scrollIntoView({ behavior: 'smooth'})} to="#home" >About</Link></Text>
               <Text w="100%" textAlign={"center"} bgColor="#f5f5f7" _hover={{bgColor:"#693fee",color:"#fff"}} color="#693fee" borderBottom={"2px solid #1b49be"}><Link   scroll={el => el.scrollIntoView({ behavior: 'smooth'})} to="#skills" >Skills</Link></Text>
                <Text w="100%" textAlign={"center"} bgColor="#f5f5f7" _hover={{bgColor:"#693fee",color:"#fff"}} color="#693fee" borderBottom={"2px solid #1b49be"}><Link   scroll={el => el.scrollIntoView({ behavior: 'smooth'})} to="#project" >Project</Link></Text>
                <Text w="100%" textAlign={"center"} bgColor="#f5f5f7" _hover={{bgColor:"#693fee",color:"#fff"}} color="#693fee" borderBottom={"2px solid #1b49be"}><Link   scroll={el => el.scrollIntoView({ behavior: 'smooth'})} to="#contact" >Contect</Link></Text>
                <Text w="100%" textAlign={"center"} bgColor="#693fee" _hover={{bgColor:"#fff",color:"#693fee"}} color="#fff" borderBottom={"2px solid #1b49be"} id="resume-button-1">Resume</Text>
               </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
    )
}