import {HStack,Box,Image,Text,Stack,VStack} from "@chakra-ui/react"
import React from "react"
import {
    Drawer,
    DrawerBody,
   
    DrawerOverlay,
    DrawerContent,
   
  } from '@chakra-ui/react'
  // import { FcAbout } from 'react-icons/fc'
  import { useDisclosure } from '@chakra-ui/react'
  import { Show, Hide } from '@chakra-ui/react'
  import { HamburgerIcon } from '@chakra-ui/icons'
export default function Navbar(){
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
    return (
        <>
        <HStack zIndex={"1"} pos="fixed" top="0px" left="1%" borderRadius={"10px"} w={"98%"} m="auto" boxSizing="border-box" bg={"#1b49be"} h="80px" justifyContent={"space-between"} p="10px 30px">
            <Box>
            <Image w={"25%"} src='https://logos.textgiraffe.com/logos/logo-name/32560807-designstyle-pixels-o.png' alt='Dan Abramov' />
            </Box>
            <Hide below="700px">
            <HStack justifyContent={"space-evenly"} fontWeight="900" w={"50%"} fontSize={"20px"} color="white" >
                <Text >About</Text>
                <Text>Skills</Text>
                <Text>Project</Text>
                <Text>Contect</Text>
                <Text>Resume</Text>
            </HStack>
            </Hide> 
            <Show breakpoint='(max-width: 700px)'> 
             <Stack>
             <HamburgerIcon color={"white"} boxSize={"40px"}  ref={btnRef} colorScheme='teal' onClick={onOpen} />
            
          
            </Stack> 
             </Show>
            
        </HStack>
        <Drawer  placement={"rigth"} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay /> 
            <DrawerContent borderRadius="0px 0px 15px 15px" mt="80px" h="300px">
         
              <DrawerBody>
               <VStack fontSize={"30px"}>
               <Text w="100%" textAlign={"center"} borderRadius="0px 0px 15px 15px" borderBottom={"2px solid #1b49be"}>About</Text>
                <Text w="100%" textAlign={"center"} borderRadius="0px 0px 15px 15px" borderBottom={"2px solid #1b49be"}>Skills</Text>
                <Text w="100%" textAlign={"center"} borderRadius="0px 0px 15px 15px" borderBottom={"2px solid #1b49be"}>Project</Text>
                <Text w="100%" textAlign={"center"} borderRadius="0px 0px 15px 15px" borderBottom={"2px solid #1b49be"}>Contect</Text>
                <Text w="100%" textAlign={"center"} borderRadius="0px 0px 15px 15px" borderBottom={"2px solid #1b49be"}>Resume</Text>
               </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
    )
}