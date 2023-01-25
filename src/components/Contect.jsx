import React from 'react'
import {Heading,Text,HStack,Image,VStack,Button,Input,Stack,Box,Link,Flex, Textarea} from "@chakra-ui/react"
const Contect = () => {
  return (
    <Flex  direction={{base:"column",lg:'row'}} bgColor="#f5f5f7" mt="10px" h="auto" p={{base:"0px",lg:'30px'}} w="100%">
        <VStack w={{base:"90%",lg:"50%"}} h="40%"  margin={"auto"}>
        <Heading fontSize={"50px"} mt="10px" color="#693fee">Get In Touch</Heading>
        <Text fontSize={"20px"} mt="10px" color="#2f1c6a">Phone :- +919993805253</Text>
        <HStack mt="10px" justify={"center"}>
              <Link target={"_blank"} href="https://www.linkedin.com/in/abhishek-pal-14416323b/" w="10%" borderRadius={"5px"}> <Image src="https://www.bing.com/th?id=OIP.C8b27iRAS2bcSGd-v_duTgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" /></Link>
               <Link  target={"_blank"} href="https://github.com/palabhi017"  w="14%" borderRadius={"5px"}> <Image  src="https://www.pngarts.com/files/8/Black-Github-Logo-PNG-Image-Background.png"/></Link>
               <Link  target={"_blank"} href="palabhi017@gmail.com"  borderRadius={"5px"} w="12%"> <Image   src="https://icones.pro/wp-content/uploads/2021/05/icones-de-messagerie-noires-300x300.png"/></Link>
        </HStack>
        </VStack>
        <VStack w={{base:"100%",lg:"50%"}}>
        <Stack
        mt="30px"
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4,  md: 8 }}
          spacing={{ base: 2 }}
         w={{base:"90%",lg:"60%"}}>
          <Stack spacing={4}>
            <Heading
              color={'#693fee'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              Connect with me
              <Text
                as={'span'}
                bgColor="#2f1c6a"
                bgClip="text">
                {" "}!
              </Text>
            </Heading>
            <Text color={'#2f1c6a'} fontSize={{ base: 'md', sm: 'md' }}>
              I am waiting for your message!
            </Text>
          </Stack>
            <form action="https://formspree.io/f/myyaynwl" method='POST'>
          <Box  mt={0}>
            <Stack spacing={4}>
              <Input
              name='Name'
                placeholder="Your Name"
                bg={'gray.100'}
                border={0}
                color={'#2f1c6a'}
                _placeholder={{
                  color: '#2f1c6a',
                }}
                w={{base:"100%",lg:"100%"}}
              />
              <Input
               name='Email'
                placeholder="Your email"
                bg={'gray.100'}
                border={0}
                color={'#2f1c6a'}
                _placeholder={{
                  color: '#2f1c6a',
                }}
              />
              <Textarea
              name='Message'
                placeholder="Message"
                bg={'gray.100'}
                border={0}
                height="150px"
                color={'#2f1c6a'}
                _placeholder={{
                  color: '#2f1c6a',
                }} >
              </Textarea>
              
            </Stack>
            <Button
            type='submit'
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgColor="#693fee"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl'
              }}>
              Send
            </Button>
          </Box>
            </form>
          form
        </Stack>
    </VStack>
        
    </Flex>
    
  )
}

export default Contect