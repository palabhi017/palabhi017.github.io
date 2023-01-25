import {Box,Heading,Text,HStack,VStack,Image,Show,Flex,Link} from "@chakra-ui/react"
import { TypeAnimation } from 'react-type-animation';
import Time from "../Images/TimeAlways.png"
import Chargebee from "../Images/chargebee.png"
import Airtable from "../Images/Airtable.png"
import { FaGithub } from 'react-icons/fa';
import { GrDeploy } from 'react-icons/gr';
import ReadMoreReact from 'read-more-react';
export default function Projects(){

    return (
        <Box className="Project"  boxSizing="border-box"  w={"98%"} m="auto" h={"auto"} mt={"10px"} borderRadius="10px" bgColor="#f5f5f7">
          <Heading p="30px" fontSize={"40px"} color="#693fee">
         <TypeAnimation
      sequence={[
        2000,
         "Projects",
        2000,
        
      ]}
      wrapper="div"
      cursor={false}
      repeat={0}
     
    /> 
    </Heading>
      <Show above="801px">
        <HStack pb="40px" w="90%" m="auto" mt="50px">
            <VStack gap={5}  w="50%" borderRight={"3px solid #4f3f7d"}>
            <Heading color="#2f1c6a">DeskTime.com Clone</Heading>
            <Text w="80%" fontSize={"20px"} color="#4f3f7d" textAlign={"left"}>DeskTime is a time tracking tool with additional features for workforce management. These features can help you build a successful team that consistently achieves its goals.</Text>
            <Flex gap="10px">
              <Box fontSize={"20px"}  fontWeight={"900"} color="#2f1c6a">TECHSTACK :-</Box>
              <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"} box-Shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" fontWeight={"bold"} color="#fff">HTML</Box>
              <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"}  fontWeight={"bold"} color="#fff">CSS</Box>
             <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"}  fontWeight={"bold"} color="#fff">JavaScript</Box>
            </Flex>
            <Box    boxShadow= "rgba(0, 0, 0, 0.80) 0px 3px 8px" w="80%">
            <Image borderRadius={"5px"} src={Time}/>
            </Box>
            <Flex gap="20px">
            <Link target={"_blank"} href="https://github.com/palabhi017/terrific-language-9890"><Flex gap="5px" alignItems={"center"} color="#693fee" fontSize={"25px"}><FaGithub/>GitHub</Flex></Link>
            <Link target={"_blank"} href="https://time-always.netlify.app/"><Flex gap="5px" alignItems={"center"} color="#693fee" fontSize={"25px"}><GrDeploy/>Deploy</Flex></Link>
            </Flex>
            
            </VStack>
            <VStack gap={5}  w="50%" >
            <Heading color="#2f1c6a">Chargebee.com Clone</Heading>
            <Text w="80%" fontSize={"20px"} color="#4f3f7d" textAlign={"left"}>Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.</Text>
            <Flex gap="10px">
              <Box fontSize={"20px"}  fontWeight={"900"} color="#2f1c6a">TECHSTACK :-</Box>
              <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"} box-Shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" fontWeight={"bold"} color="#fff">HTML</Box>
              <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"}  fontWeight={"bold"} color="#fff">CSS</Box>
             <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"}  fontWeight={"bold"} color="#fff">JavaScript</Box>
            </Flex>
            <Box    boxShadow= "rgba(0, 0, 0, 0.80) 0px 3px 8px" w="80%">
            <Image borderRadius={"5px"} src={Chargebee}/>
            </Box>
            <Flex gap="20px">
            <Link target={"_blank"} href="https://github.com/palabhi017/loving-friends-4004"><Flex gap="5px" alignItems={"center"} color="#693fee" fontSize={"25px"}><FaGithub/>GitHub</Flex></Link>
            <Link target={"_blank"} href="https://fluffy-jelly-ba9f7f.netlify.app/"><Flex gap="5px" alignItems={"center"} color="#693fee" fontSize={"25px"}><GrDeploy/>Deploy</Flex></Link>
            </Flex>
            </VStack>
        </HStack>
        <HStack pb="40px" w="90%" m="auto" mt="50px">
            <VStack gap={5}  w="50%" borderRight={"3px solid #4f3f7d"}>
            <Heading color="#2f1c6a">Airtable.com Clone</Heading>
            <Text w="80%" fontSize={"20px"} color="#4f3f7d" textAlign={"left"}>A task management platform that allows users to organize and prioritize their to-do list. A comprehensive solution for tracking progress and meeting deadlines.</Text>
            <Flex gap="10px">
              <Box fontSize={"20px"}  fontWeight={"900"} color="#2f1c6a">TECHSTACK :-</Box>
              <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"} box-Shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" fontWeight={"bold"} color="#fff">React</Box>
              <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"}  fontWeight={"bold"} color="#fff">Chakra Ui</Box>
             <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"}  fontWeight={"bold"} color="#fff">Render</Box>
            </Flex>
            <Box    boxShadow= "rgba(0, 0, 0, 0.80) 0px 3px 8px" w="80%">
            <Image borderRadius={"5px"} src={Airtable}/>
            </Box>
            <Flex gap="20px">
            <Link target={"_blank"} href="https://github.com/palabhi017/bewildered-discussion-8431/tree/main/timetable"><Flex gap="5px" alignItems={"center"} color="#693fee" fontSize={"25px"}><FaGithub/>GitHub</Flex></Link>
            <Link target={"_blank"} href="https://time-blue.vercel.app/"><Flex gap="5px" alignItems={"center"} color="#693fee" fontSize={"25px"}><GrDeploy/>Deploy</Flex></Link>
            </Flex>
            </VStack>
            <VStack gap={5}  w="50%" >
            <Heading color="#2f1c6a">DailyObjects.com Clone</Heading>
            <Text w="80%" fontSize={"20px"} color="#4f3f7d" textAlign={"left"}>DailyObjects is a design-obsessed lifestyle accessories brand committed to making your everyday carry. You can look forward to a carefully-crafted range of products. </Text>
            <Flex gap="10px" >
              <Box fontSize={"20px"}  fontWeight={"900"} color="#2f1c6a">TECHSTACK :-</Box>
              <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"} box-Shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" fontWeight={"bold"} color="#fff">React</Box>
              <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"}  fontWeight={"bold"} color="#fff">Typescript</Box>
              <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"}  fontWeight={"bold"} color="#fff">Redux</Box>
             <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"}  fontWeight={"bold"} color="#fff">Chakra ui</Box>
            </Flex>
            <Box    boxShadow= "rgba(0, 0, 0, 0.80) 0px 3px 8px" w="80%">
            <Image borderRadius={"5px"} src={Time}/>
            </Box>
            <Flex gap="20px">
            <Link target={"_blank"} href="https://github.com/palabhi017/terrific-language-9890"><Flex gap="5px" alignItems={"center"} color="#693fee"  fontSize={"25px"}><FaGithub/>GitHub</Flex></Link>
            <Link target={"_blank"} href="https://time-always.netlify.app/"><Flex gap="5px" alignItems={"center"} color="#693fee" fontSize={"25px"}><GrDeploy/>Deploy</Flex></Link>
            </Flex>
            </VStack>
        </HStack>
        </Show>
        
        
        
        <Show below="800px" >
        <VStack pb="40px" w="90%" m="auto" mt="50px">
        <VStack gap={5} pb="10px"  w="90%" borderBottom={"3px solid #ffe77b"}>
            <Heading color="white">DeskTime.com Clone</Heading>
          
            <Text w="95%" fontSize={"20px"} color="#ffe77b" textAlign={"justify"}><ReadMoreReact 
        text={"DeskTime is a time tracking tool with additional features for workforce management. These features can help you build a successful team that consistently achieves its goals."}
        min={40}
        ideal={68}
        max={80} 
        color="blue"
        readMoreText={"...read more"}
/></Text>
              <Box fontSize={"25px"}  fontWeight={"bold"} color="#fff">TechStack</Box>
            <Flex gap="10px" alignItems={"center"} >
              <Box border="1px solid #fff"  p="0px 2px" fontSize={"20px"}  fontWeight={"bold"}  color="#fff">HTML</Box>
              <Box border="1px solid #fff" p="0px 2px" fontSize={"20px"}  fontWeight={"bold"} color="#fff">CSS</Box>
             <Box border="1px solid #fff" p="0px 2px" fontSize={"20px"}  fontWeight={"bold"} color="#fff">JavaScript</Box>
            </Flex>
            <Box    boxShadow= "rgba(0, 0, 0, 0.80) 0px 3px 8px" m="auto" w="90%">
            <Image borderRadius={"5px"} src={Time}/>
            </Box>
            <Flex gap="20px">
            <Link target={"_blank"} href="https://github.com/palabhi017/terrific-language-9890"><Flex gap="5px" alignItems={"center"} color="#fff" fontSize={"25px"}><FaGithub/>GitHub</Flex></Link>
            <Link target={"_blank"} href="https://time-always.netlify.app/"><Flex gap="5px" alignItems={"center"} color="#fff" fontSize={"25px"}><GrDeploy/>Deploy</Flex></Link>
            </Flex>
            </VStack>
            <VStack gap={5}  w="90%" mt="20px" borderBottom={"3px solid #ffe77b"}>
            <Heading color="white">Airtable.com Clone</Heading>
          
            <Text w="95%" fontSize={"20px"} color="#ffe77b" textAlign={"justify"}><ReadMoreReact 
        text={"A task management platform that allows users to organize and prioritize their to-do list. A comprehensive solution for tracking progress and meeting deadlines."}
        min={40}
        ideal={68}
        max={80} 
        color="blue"
        readMoreText={"...read more"}
/></Text>
              <Box fontSize={"25px"}  fontWeight={"bold"} color="#fff">TechStack</Box>
            <Flex gap="10px" alignItems={"center"} >
              <Box border="1px solid #fff"  p="0px 2px" fontSize={"20px"}  fontWeight={"bold"}  color="#fff">React</Box>
              <Box border="1px solid #fff" p="0px 2px" fontSize={"20px"}  fontWeight={"bold"} color="#fff">Chakra UI</Box>
             <Box border="1px solid #fff" p="0px 2px" fontSize={"20px"}  fontWeight={"bold"} color="#fff">Render</Box>
            </Flex>
            <Box    boxShadow= "rgba(0, 0, 0, 0.80) 0px 3px 8px" m="auto" w="90%">
            <Image borderRadius={"5px"} src={Airtable}/>
            </Box>
            <Flex gap="20px">
            <Link target={"_blank"} href="https://github.com/palabhi017/bewildered-discussion-8431/tree/main/timetable"><Flex gap="5px" alignItems={"center"} color="#fff" fontSize={"25px"}><FaGithub/>GitHub</Flex></Link>
            <Link target={"_blank"} href="https://time-blue.vercel.app/"><Flex gap="5px" alignItems={"center"} color="#fff" fontSize={"25px"}><GrDeploy/>Deploy</Flex></Link>
            </Flex>
            </VStack>
            <VStack gap={5}  w="90%" borderBottom={"3px solid #ffe77b"}>
            <Heading color="white">Chargebee.com Clone</Heading>
          
            <Text w="95%" fontSize={"20px"} color="#ffe77b" textAlign={"justify"}><ReadMoreReact 
        text={"Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow."}
        min={40}
        ideal={68}
        max={80} 
        color="blue"
        readMoreText={"...read more"}
/></Text>
              <Box fontSize={"25px"}  fontWeight={"bold"} color="#fff">TechStack</Box>
            <Flex gap="10px" alignItems={"center"} >
              <Box border="1px solid #fff"  p="0px 2px" fontSize={"20px"}  fontWeight={"bold"}  color="#fff">HTML</Box>
              <Box border="1px solid #fff" p="0px 2px" fontSize={"20px"}  fontWeight={"bold"} color="#fff">CSS</Box>
             <Box border="1px solid #fff" p="0px 2px" fontSize={"20px"}  fontWeight={"bold"} color="#fff">JavaScript</Box>
            </Flex>
            <Box    boxShadow= "rgba(0, 0, 0, 0.80) 0px 3px 8px" m="auto" w="90%">
            <Image borderRadius={"5px"} src={Chargebee}/>
            </Box>
            <Flex gap="20px">
            <Link target={"_blank"} href="https://github.com/palabhi017/loving-friends-4004"><Flex gap="5px" alignItems={"center"} color="#fff" fontSize={"25px"}><FaGithub/>GitHub</Flex></Link>
            <Link target={"_blank"} href="https://fluffy-jelly-ba9f7f.netlify.app/"><Flex gap="5px" alignItems={"center"} color="#fff" fontSize={"25px"}><GrDeploy/>Deploy</Flex></Link>
            </Flex>
            </VStack>
           
        </VStack>
       
        </Show>
        </Box>
    )
}