import {Box,Heading,Text,HStack,VStack,Show,Flex,Link} from "@chakra-ui/react"
import { TypeAnimation } from 'react-type-animation';
import Time from "../Images/TimeAlways.png"
import T2 from "../Images/T2.png"
import T3 from "../Images/T3.png"
import T4 from "../Images/T4.png"
import C2 from "../Images/C2.png"
import C3 from "../Images/C3.png"
import C4 from "../Images/C4.png"
import A2 from "../Images/A2.png"
import A3 from "../Images/A3.png"
import A4 from "../Images/A4.png"
import Chargebee from "../Images/chargebee.png"
import Airtable from "../Images/Airtable.png"
import Dailyneeds from "../Images/Dailyneeds.png"
import D2 from "../Images/D2.png"
import D3 from "../Images/D3.png"
import D4 from "../Images/D4.png"
import { FaGithub } from 'react-icons/fa';
import { GrDeploy } from 'react-icons/gr';
import ReadMoreReact from 'read-more-react';
import SwiftSlider from 'react-swift-slider'
export default function Projects(){
  
  const data =  [
    {'id':'1','src': Time},
    {'id':'2','src': T2},
    {'id':'3','src': T3},
    {'id':'4','src': T4},
    
  ];
  const data2 =  [
    {'id':'1','src': Chargebee},
    {'id':'2','src': C2},
    {'id':'3','src': C3},
    {'id':'4','src': C4},
    
  ];
  const data3 =  [
    {'id':'1','src': Airtable},
    {'id':'2','src': A2},
    {'id':'3','src': A3},
    {'id':'4','src': A4},
    
  ];
  const data4 =  [
    {'id':'1','src': Dailyneeds},
    {'id':'2','src': D2},
    {'id':'3','src': D3},
    {'id':'4','src': D4},
    
  ];
  
    return (
        <Box id="project" className="Project"  boxSizing="border-box"  w={"98%"} m="auto" h={"auto"} mt={"10px"} borderRadius="10px" bgColor="#f5f5f7">
          <Heading id="projects" p="30px" fontSize={"40px"} color="#693fee">
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
        <HStack id=".project-card" pb="40px" w="90%" m="auto" mt="50px">
            <VStack className="project-card" gap={5}  w="50%" borderRight={"3px solid #4f3f7d"}>
            <Heading className="project-title" color="#2f1c6a">DeskTime.com Clone</Heading>
            <Text className="project-description" w="80%" fontSize={"20px"} color="#4f3f7d" textAlign={"left"}>DeskTime is a time tracking tool with additional features for workforce management. These features can help you build a successful team that consistently achieves its goals.</Text>
            <Flex gap="10px">
              <Box className="project-tech-stack" fontSize={"20px"}  fontWeight={"900"} color="#2f1c6a">TECHSTACK :-</Box>
              <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"} box-Shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" fontWeight={"bold"} color="#fff">HTML</Box>
              <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"}  fontWeight={"bold"} color="#fff">CSS</Box>
             <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"}  fontWeight={"bold"} color="#fff">JavaScript</Box>
            </Flex>
           
            <Box zIndex={2} w="80%" h="380px" className="img"  boxShadow= "rgba(0, 0, 0, 0.80) 0px 3px 8px" borderRadius={"5px"}> 
            <SwiftSlider height={380} enableNextAndPrev={false} interval={2000} showDots={false} data={data}/>
            </Box>
            
            <Flex gap="20px">
            <Link className="project-github-link" target={"_blank"} href="https://github.com/palabhi017/terrific-language-9890"><Flex gap="5px" alignItems={"center"} color="#693fee" fontSize={"25px"}><FaGithub color="#2f1c6a"/>GitHub</Flex></Link>
            <Link className="project-deployed-link" target={"_blank"} href="https://time-always.netlify.app/"><Flex gap="5px" alignItems={"center"} color="#693fee" fontSize={"25px"}><GrDeploy color="#2f1c6a" size="20px"/>Deploy</Flex></Link>
            </Flex>
            
            </VStack>
            <VStack className="project-card" gap={5}  w="50%" >
            <Heading className="project-title" color="#2f1c6a">Chargebee.com Clone</Heading>
            <Text className="project-description" w="80%" fontSize={"20px"} color="#4f3f7d" textAlign={"left"}>Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.</Text>
            <Flex gap="10px">
              <Box className="project-tech-stack" fontSize={"20px"}  fontWeight={"900"} color="#2f1c6a">TECHSTACK :-</Box>
              <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"} box-Shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" fontWeight={"bold"} color="#fff">HTML</Box>
              <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"}  fontWeight={"bold"} color="#fff">CSS</Box>
             <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"}  fontWeight={"bold"} color="#fff">JavaScript</Box>
            </Flex>
            <Box zIndex={2} w="80%" h="380px" className="img"  boxShadow= "rgba(0, 0, 0, 0.80) 0px 3px 8px" borderRadius={"5px"}> 
            <SwiftSlider height={380} enableNextAndPrev={false} interval={2000} showDots={false} data={data2}/>
            </Box>
            <Flex gap="20px">
            <Link className="project-github-link" target={"_blank"} href="https://github.com/palabhi017/loving-friends-4004"><Flex gap="5px" alignItems={"center"} color="#693fee" fontSize={"25px"}><FaGithub color="#2f1c6a"/>GitHub</Flex></Link>
            <Link className="project-deployed-link" target={"_blank"} href="https://fluffy-jelly-ba9f7f.netlify.app/"><Flex gap="5px" alignItems={"center"} color="#693fee" fontSize={"25px"}><GrDeploy color="#2f1c6a" size="20px"/>Deploy</Flex></Link>
            </Flex>
            </VStack>
        </HStack>
        <HStack pb="40px" w="90%" m="auto" mt="50px">
            <VStack className="project-card" gap={5}  w="50%" borderRight={"3px solid #4f3f7d"}>
            <Heading className="project-title" color="#2f1c6a">Airtable.com Clone</Heading>
            <Text className="project-description" w="80%" fontSize={"20px"} color="#4f3f7d" textAlign={"left"}>A task management platform that allows users to organize and prioritize their to-do list. A comprehensive solution for tracking progress and meeting deadlines.</Text>
            <Flex gap="10px">
              <Box className="project-tech-stack" fontSize={"20px"}  fontWeight={"900"} color="#2f1c6a">TECHSTACK :-</Box>
              <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"} box-Shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" fontWeight={"bold"} color="#fff">React</Box>
              <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"}  fontWeight={"bold"} color="#fff">Chakra Ui</Box>
             <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"}  fontWeight={"bold"} color="#fff">Render</Box>
            </Flex>
            <Box zIndex={2} w="80%" h="380px" className="img"   boxShadow= "rgba(0, 0, 0, 0.80) 0px 3px 8px" borderRadius={"5px"}> 
            <SwiftSlider height={380} enableNextAndPrev={false} interval={2000} showDots={false} data={data3}/>
            </Box>
            <Flex gap="20px">
            <Link className="project-github-link" target={"_blank"} href="https://github.com/palabhi017/bewildered-discussion-8431/tree/main/timetable"><Flex gap="5px" alignItems={"center"} color="#693fee" fontSize={"25px"}><FaGithub color="#2f1c6a"/>GitHub</Flex></Link>
            <Link className="project-deployed-link" target={"_blank"} href="https://time-blue.vercel.app/"><Flex gap="5px" alignItems={"center"} color="#693fee" fontSize={"25px"}><GrDeploy color="#2f1c6a" size="20px"/>Deploy</Flex></Link>
            </Flex>
            </VStack>
            <VStack className="project-card" gap={5}  w="50%" >
            <Heading className="project-title" color="#2f1c6a">DailyObjects.com Clone</Heading>
            <Text className="project-description" w="80%" fontSize={"20px"} color="#4f3f7d" textAlign={"left"}>DailyObjects is a design-obsessed lifestyle accessories brand committed to making your everyday carry. You can look forward to a carefully-crafted range of products. </Text>
            <Flex gap="10px" >
              <Box className="project-tech-stack" fontSize={"20px"}  fontWeight={"900"} color="#2f1c6a">TECHSTACK :-</Box>
              <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"} box-Shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" fontWeight={"bold"} color="#fff">React</Box>
              <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"}  fontWeight={"bold"} color="#fff">Typescript</Box>
              <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"}  fontWeight={"bold"} color="#fff">Redux</Box>
             <Box bgColor="#2f1c6a" borderRadius={"5px"} p="5px" fontSize={"15px"}  fontWeight={"bold"} color="#fff">Chakra ui</Box>
            </Flex>
            <Box zIndex={2} w="80%" h="380px" className="img"  boxShadow= "rgba(0, 0, 0, 0.80) 0px 3px 8px" borderRadius={"5px"}> 
            <SwiftSlider height={380} enableNextAndPrev={false} interval={2000} showDots={false} data={data4}/>
            </Box>
            <Flex gap="20px">
            <Link className="project-github-link" target={"_blank"} href="https://github.com/HANUMAT-SHARAN/bright-noise-2667/tree/master/cw-rct201"><Flex gap="5px" alignItems={"center"} color="#693fee"  fontSize={"25px"}><FaGithub color="#2f1c6a"/>GitHub</Flex></Link>
            <Link className="project-deployed-link" target={"_blank"} href="https://gentle-kringle-071b60.netlify.app/"><Flex gap="5px" alignItems={"center"} color="#693fee" fontSize={"25px"}><GrDeploy color="#2f1c6a" size="20px"/>Deploy</Flex></Link>
            </Flex>
            </VStack>
        </HStack>
        </Show>
        
        
        
        <Show below="800px" >
        <VStack pb="40px" w="90%" m="auto" mt="50px">
        <VStack gap={5} pb="10px"  w="90%" borderBottom={"3px solid #2f1c6a"}>
            <Heading color="#2f1c6a">DeskTime.com Clone</Heading>
          
            <Text w="95%" fontSize={"20px"} fontWeight={"bold"} color="#2f1c6a" textAlign={"justify"}><ReadMoreReact 
        text={"DeskTime is a time tracking tool with additional features for workforce management. These features can help you build a successful team that consistently achieves its goals."}
        min={40}
        ideal={68}
        max={80} 
        color="blue"
        readMoreText={"...read more"}
/></Text>
              <Box fontSize={"25px"}  fontWeight={"bold"} color="#2f1c6a">TechStack</Box>
            <Flex gap="10px" alignItems={"center"} >
              <Box   p="0px 2px" fontSize={"20px"}  fontWeight={"bold"} bgColor="#2f1c6a" color="#fff">HTML</Box>
              <Box  p="0px 2px" fontSize={"20px"}  fontWeight={"bold"} bgColor="#2f1c6a" color="#fff">CSS</Box>
             <Box  p="0px 2px" fontSize={"20px"}  fontWeight={"bold"} bgColor="#2f1c6a" color="#fff">JavaScript</Box>
            </Flex>
            <Box zIndex={2} w="95%" h="auto"  boxShadow= "rgba(0, 0, 0, 0.80) 0px 3px 8px" borderRadius={"5px"}> 
            <SwiftSlider height={380} enableNextAndPrev={false} interval={2000} showDots={false} data={data}/>
            </Box>
            <Flex gap="20px">
            <Link target={"_blank"} href="https://github.com/palabhi017/terrific-language-9890"><Flex gap="5px" alignItems={"center"} color="#2f1c6a" fontSize={"25px"}><FaGithub  color="#2f1c6a"/>GitHub</Flex></Link>
            <Link target={"_blank"} href="https://time-always.netlify.app/"><Flex gap="5px" alignItems={"center"} color="#2f1c6a" fontSize={"25px"}><GrDeploy color="#2f1c6a"/>Deploy</Flex></Link>
            </Flex>
            </VStack>
            <VStack gap={5} pb="10px"  w="90%" mt="20px" borderBottom={"3px solid #2f1c6a"}>
            <Heading color="#2f1c6a">Airtable.com Clone</Heading>
          
            <Text w="95%" fontSize={"20px"} color="#2f1c6a" fontWeight={"bold"} textAlign={"justify"}><ReadMoreReact 
        text={"A task management platform that allows users to organize and prioritize their to-do list. A comprehensive solution for tracking progress and meeting deadlines."}
        min={40}
        ideal={68}
        max={80} 
        color="blue"
        readMoreText={"...read more"}
/></Text>
              <Box fontSize={"25px"}  fontWeight={"bold"} color="#2f1c6a">TechStack</Box>
            <Flex gap="10px" alignItems={"center"} >
              <Box bgColor="#2f1c6a"  p="0px 2px" fontSize={"20px"}  fontWeight={"bold"}  color="#fff">React</Box>
              <Box bgColor="#2f1c6a" p="0px 2px" fontSize={"20px"}  fontWeight={"bold"} color="#fff">Chakra UI</Box>
             <Box bgColor="#2f1c6a" p="0px 2px" fontSize={"20px"}  fontWeight={"bold"} color="#fff">Render</Box>
            </Flex>
            <Box zIndex={2} w="95%" h="auto"  boxShadow= "rgba(0, 0, 0, 0.80) 0px 3px 8px" borderRadius={"5px"}> 
            <SwiftSlider height={380} enableNextAndPrev={false} interval={2000} showDots={false} data={data3}/>
            </Box>
            <Flex gap="20px">
            <Link target={"_blank"} href="https://github.com/palabhi017/bewildered-discussion-8431/tree/main/timetable"><Flex gap="5px" alignItems={"center"} color="#2f1c6a" fontSize={"25px"}><FaGithub color="#2f1c6a"/>GitHub</Flex></Link>
            <Link target={"_blank"} href="https://time-blue.vercel.app/"><Flex gap="5px" alignItems={"center"} color="#2f1c6a" fontSize={"25px"}><GrDeploy color="#2f1c6a"/>Deploy</Flex></Link>
            </Flex>
            </VStack>
            <VStack gap={5} pb="10px"  w="90%" borderBottom={"3px solid #2f1c6a"}>
            <Heading color="#2f1c6a">Chargebee.com Clone</Heading>
          
            <Text w="95%" fontSize={"20px"} fontWeight="bold" color="#2f1c6a" textAlign={"justify"}><ReadMoreReact 
        text={"Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow."}
        min={40}
        ideal={68}
        max={80} 
        color="blue"
        readMoreText={"...read more"}
/></Text>
              <Box fontSize={"25px"}  fontWeight={"bold"} color="#2f1c6a">TechStack</Box>
            <Flex gap="10px" alignItems={"center"} >
              <Box  bgColor="#2f1c6a" p="0px 2px" fontSize={"20px"}  fontWeight={"bold"}  color="#fff">HTML</Box>
              <Box bgColor="#2f1c6a" p="0px 2px" fontSize={"20px"}  fontWeight={"bold"} color="#fff">CSS</Box>
             <Box bgColor="#2f1c6a" p="0px 2px" fontSize={"20px"}  fontWeight={"bold"} color="#fff">JavaScript</Box>
            </Flex>
            <Box zIndex={2} w="95%" h="auto"  boxShadow= "rgba(0, 0, 0, 0.80) 0px 3px 8px" borderRadius={"5px"}> 
            <SwiftSlider height={380} enableNextAndPrev={false} interval={2000} showDots={false} data={data2}/>
            </Box>
            <Flex gap="20px">
            <Link target={"_blank"} href="https://github.com/palabhi017/loving-friends-4004"><Flex gap="5px" alignItems={"center"} color="#2f1c6a" fontSize={"25px"}><FaGithub color="#2f1c6a"/>GitHub</Flex></Link>
            <Link target={"_blank"} href="https://fluffy-jelly-ba9f7f.netlify.app/"><Flex gap="5px" alignItems={"center"} color="#2f1c6a" fontSize={"25px"}><GrDeploy  color="#2f1c6a"/>Deploy</Flex></Link>
            </Flex>
            </VStack>
            <VStack gap={5} pb="10px"  w="90%" borderBottom={"3px solid #2f1c6a"}>
            <Heading color="#2f1c6a">DailyObjects.com Clone</Heading>
          
            <Text w="95%" fontSize={"20px"} fontWeight="bold" color="#2f1c6a" textAlign={"justify"}><ReadMoreReact 
        text={"DailyObjects is a design-obsessed lifestyle accessories brand committed to making your everyday carry. You can look forward to a carefully-crafted range of products."}
        min={40}
        ideal={68}
        max={80} 
        color="blue"
        readMoreText={"...read more"}
/></Text>
              <Box fontSize={"25px"}  fontWeight={"bold"} color="#2f1c6a">TechStack</Box>
            <Flex gap="10px" alignItems={"center"} >
              <Box  bgColor="#2f1c6a" p="0px 2px" fontSize={"20px"}  fontWeight={"bold"}  color="#fff">React</Box>
              <Box bgColor="#2f1c6a" p="0px 2px" fontSize={"20px"}  fontWeight={"bold"} color="#fff">Typescript</Box>
             <Box bgColor="#2f1c6a" p="0px 2px" fontSize={"20px"}  fontWeight={"bold"} color="#fff">Redux</Box>
            </Flex>
            <Box zIndex={2} w="95%" h="auto"  boxShadow= "rgba(0, 0, 0, 0.80) 0px 3px 8px" borderRadius={"5px"}> 
            <SwiftSlider height={380} enableNextAndPrev={false} interval={2000} showDots={false} data={data4}/>
            </Box>
            <Flex gap="20px">
            <Link target={"_blank"} href="https://github.com/HANUMAT-SHARAN/bright-noise-2667/tree/master/cw-rct201"><Flex gap="5px" alignItems={"center"} color="#2f1c6a" fontSize={"25px"}><FaGithub color="#2f1c6a"/>GitHub</Flex></Link>
            <Link target={"_blank"} href="https://gentle-kringle-071b60.netlify.app/"><Flex gap="5px" alignItems={"center"} color="#2f1c6a" fontSize={"25px"}><GrDeploy  color="#2f1c6a"/>Deploy</Flex></Link>
            </Flex>
            </VStack>
           
        </VStack>
       
        </Show>
        </Box>
    )
}