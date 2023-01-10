import React from 'react'
import {Heading,Text,HStack,Image,VStack,Button,Input,Stack,Box,Link} from "@chakra-ui/react"
const Contect = () => {
  return (
    <HStack h="auto" p={"30px"} w="100%">
        <VStack w="50%">
        <Heading fontSize={"50px"} mt="10px">Get In Touch</Heading>
        <Text fontSize={"20px"} mt="10px">Phone :- +919993805253</Text>
        <HStack mt="10px" justify={"center"}>
              <Link target={"_blank"} href="https://www.linkedin.com/in/abhishek-pal-14416323b/" w="10%" borderRadius={"5px"}> <Image src="https://www.bing.com/th?id=OIP.C8b27iRAS2bcSGd-v_duTgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" /></Link>
               <Link  target={"_blank"} href="https://github.com/palabhi017"  w="14%" borderRadius={"5px"}> <Image  src="https://www.pngarts.com/files/8/Black-Github-Logo-PNG-Image-Background.png"/></Link>
               <Link  target={"_blank"} href="palabhi017@gmail.com"  borderRadius={"5px"} w="12%"> <Image   src="https://icones.pro/wp-content/uploads/2021/05/icones-de-messagerie-noires-300x300.png"/></Link>
        </HStack>
        </VStack>
        <VStack w="50%">
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={"600px"}>
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              Connect with me
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text">
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
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
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
               name='Email'
                placeholder="Your email"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
              name='Message'
                placeholder="Message"
                bg={'gray.100'}
                border={0}
                height="150px"
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              
            </Stack>
            <Button
            type='submit'
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              }}>
              Send
            </Button>
          </Box>
            </form>
          form
        </Stack>
    </VStack>
        
    </HStack>
    
  )
}

export default Contect