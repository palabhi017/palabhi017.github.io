import {Box,Image,Grid,Show,Heading} from "@chakra-ui/react"
import Render from "../Images/render.jpg"
import { TypeAnimation } from 'react-type-animation';
export default function Skills(){

    return (
<>
    <Box  boxSizing="border-box" pb="30px" w={"98%"} m="auto" h={{sm:"auto",md:"auto",lg:"600px"}} mt={"10px"} borderRadius="10px" bgColor="#008970">
    <Heading color="#ffe77b"><TypeAnimation
      sequence={[
        2000,
         "Technical Skills",
         2000,
        () => {
      // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={false}
      repeat={0}
      style={{ fontSize: {sm:"35px",lg:"70px"} }}
    />   </Heading>
    
        <Show above="801px">
        <Box style={{width:"100%"}} h="450px" overflow="hidden" m="auto" top="100px" pos="relative"  w="0%"  >
    
        <Box  h="100%" w="200%" overflow={"hidden"} display={"flex"} className="slide">
        <Box >
        <Grid templateColumns='repeat(5, 20%)' templateRows='repeat(1, auto)' m="auto" marginTop="30px" w="100%" gap={4}>
        <Box w='50%'  borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" p="5% 0%" w='60%' src="https://ugross.gallerycdn.vsassets.io/extensions/ugross/vscode-react-snippets/1.3.0/1519481679046/Microsoft.VisualStudio.Services.Icons.Default"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" p="5% 0%" w='60%' src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" p="8% 0%" w='50%' src="https://p1.hiclipart.com/preview/951/574/485/react-logo-javascript-redux-vuejs-angular-angularjs-expressjs-front-and-back-ends-png-clipart.jpg"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto"p="8% 0%" w='50%' src="https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='50%' src="https://th.bing.com/th/id/OIP.NccvSu6Gut1HXGwUTBKYKgHaH3?pid=ImgDet&rs=1"/>
        </Box>
        </Grid>
        <Grid templateColumns='repeat(4, 20%)' templateRows='repeat(1, auto)' m="auto" marginTop="30px" w="100%" justifyContent={"space-evenly"}>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='65%' src="https://th.bing.com/th/id/R.8075e9fb9d9e4d38ab81dae248c6dbd0?rik=m8wEkmr8R1U1gA&riu=http%3a%2f%2fpnbmobile.com%2fimages%2ftypescript_logo.png&ehk=wde0lVRVQLeiYmCgdeE%2bTbW2qlCyP7smtUsY5bfYKwI%3d&risl=&pid=ImgRaw&r=0"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='70%' src="https://www.logolynx.com/images/logolynx/7f/7fb976a537620fed310872d533cd161c.png"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='60%' src="https://gocode.colorado.gov/wp-content/uploads/2020/11/MongoDB-logo-150x150.gif"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='60%' src="https://hackersandslackers-cdn.storage.googleapis.com/2020/05/express.png"/>
        </Box>
        </Grid>
        <Grid templateColumns='repeat(5, 20%)' templateRows='repeat(1, auto)' m="auto" marginTop="30px" w="100%" gap={5}>
        <Box w='50%'  borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='60%' src="https://th.bing.com/th/id/OIP.Xa0BEkwl0Zx4qnY9lMbD7gHaHa?w=214&h=214&c=7&r=0&o=5&pid=1.7"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='50%' src="https://th.bing.com/th/id/OIP.VaZkv-LlK-FiNoKWVKp3vAAAAA?w=160&h=180&c=7&r=0&o=5&pid=1.7"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='60%' src={Render}/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='60%' src="https://toppng.com/uploads/thumbnail/vscode-visual-studio-code-11562929010kudb93mlmx.png"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='70%' src="https://th.bing.com/th/id/R.137e567fcb8b63212827e9fe0801adfe?rik=Ta4lKd%2f5PFnwnA&riu=http%3a%2f%2fwww.boostit.net%2fwp-content%2fuploads%2f2016%2f08%2fnode-js-icon.png&ehk=v9%2bNcl4syCIPWNsVuuQBEDfnWaqKi9n9KNmSnRH70N4%3d&risl=&pid=ImgRaw&r=0"/>
        </Box>
        </Grid>
        </Box>
        
        <Box >
        <Grid templateColumns='repeat(5, 20%)' templateRows='repeat(1, auto)' h="auto" m="auto" marginTop="30px" w="100%" gap={4}>
        <Box w='50%'  borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" p="5% 0%" w='60%' src="https://ugross.gallerycdn.vsassets.io/extensions/ugross/vscode-react-snippets/1.3.0/1519481679046/Microsoft.VisualStudio.Services.Icons.Default"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" p="5% 0%" w='60%' src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" p="8% 0%" w='50%' src="https://p1.hiclipart.com/preview/951/574/485/react-logo-javascript-redux-vuejs-angular-angularjs-expressjs-front-and-back-ends-png-clipart.jpg"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto"p="8% 0%" w='50%' src="https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='50%' src="https://th.bing.com/th/id/OIP.NccvSu6Gut1HXGwUTBKYKgHaH3?pid=ImgDet&rs=1"/>
        </Box>
        </Grid>
        <Grid templateColumns='repeat(4, 20%)' templateRows='repeat(1, auto)' m="auto" marginTop="30px" w="100%" justifyContent={"space-evenly"}>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='65%' src="https://th.bing.com/th/id/R.8075e9fb9d9e4d38ab81dae248c6dbd0?rik=m8wEkmr8R1U1gA&riu=http%3a%2f%2fpnbmobile.com%2fimages%2ftypescript_logo.png&ehk=wde0lVRVQLeiYmCgdeE%2bTbW2qlCyP7smtUsY5bfYKwI%3d&risl=&pid=ImgRaw&r=0"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='70%' src="https://www.logolynx.com/images/logolynx/7f/7fb976a537620fed310872d533cd161c.png"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='60%' src="https://gocode.colorado.gov/wp-content/uploads/2020/11/MongoDB-logo-150x150.gif"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='60%' src="https://hackersandslackers-cdn.storage.googleapis.com/2020/05/express.png"/>
        </Box>
        </Grid>
        <Grid templateColumns='repeat(5, 20%)' templateRows='repeat(1, auto)' m="auto" marginTop="30px" w="100%" gap={5}>
        <Box w='50%'  borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='60%' src="https://th.bing.com/th/id/OIP.Xa0BEkwl0Zx4qnY9lMbD7gHaHa?w=214&h=214&c=7&r=0&o=5&pid=1.7"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='50%' src="https://th.bing.com/th/id/OIP.VaZkv-LlK-FiNoKWVKp3vAAAAA?w=160&h=180&c=7&r=0&o=5&pid=1.7"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='60%' src={Render}/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='60%' src="https://toppng.com/uploads/thumbnail/vscode-visual-studio-code-11562929010kudb93mlmx.png"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='70%' src="https://th.bing.com/th/id/R.137e567fcb8b63212827e9fe0801adfe?rik=Ta4lKd%2f5PFnwnA&riu=http%3a%2f%2fwww.boostit.net%2fwp-content%2fuploads%2f2016%2f08%2fnode-js-icon.png&ehk=v9%2bNcl4syCIPWNsVuuQBEDfnWaqKi9n9KNmSnRH70N4%3d&risl=&pid=ImgRaw&r=0"/>
        </Box>
        </Grid>
        </Box>
        
        
        </Box>
        </Box>
        </Show>
       
        <Show above="400px" below="800px">
        <Box  h="auto" overflow="hidden" m="auto" top="10px" pos="relative"  w="96%"  >
    
        <Box  h="auto" w="200%" overflow={"hidden"} display={"flex"} className="slide">
        <Box >
        <Grid templateColumns='repeat(5, 20%)' templateRows='repeat(1, auto)' m="auto" marginTop="30px" w="100%" gap={4}>
        <Box w='50%'  borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" p="5% 0%" w='60%' src="https://ugross.gallerycdn.vsassets.io/extensions/ugross/vscode-react-snippets/1.3.0/1519481679046/Microsoft.VisualStudio.Services.Icons.Default"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" p="5% 0%" w='60%' src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" p="8% 0%" w='50%' src="https://p1.hiclipart.com/preview/951/574/485/react-logo-javascript-redux-vuejs-angular-angularjs-expressjs-front-and-back-ends-png-clipart.jpg"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto"p="8% 0%" w='50%' src="https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='50%' src="https://th.bing.com/th/id/OIP.NccvSu6Gut1HXGwUTBKYKgHaH3?pid=ImgDet&rs=1"/>
        </Box>
        </Grid>
        <Grid templateColumns='repeat(4, 20%)' templateRows='repeat(1, auto)' m="auto" marginTop="30px" w="100%" justifyContent={"space-evenly"}>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='65%' src="https://th.bing.com/th/id/R.8075e9fb9d9e4d38ab81dae248c6dbd0?rik=m8wEkmr8R1U1gA&riu=http%3a%2f%2fpnbmobile.com%2fimages%2ftypescript_logo.png&ehk=wde0lVRVQLeiYmCgdeE%2bTbW2qlCyP7smtUsY5bfYKwI%3d&risl=&pid=ImgRaw&r=0"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='70%' src="https://www.logolynx.com/images/logolynx/7f/7fb976a537620fed310872d533cd161c.png"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='60%' src="https://gocode.colorado.gov/wp-content/uploads/2020/11/MongoDB-logo-150x150.gif"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='60%' src="https://hackersandslackers-cdn.storage.googleapis.com/2020/05/express.png"/>
        </Box>
        </Grid>
        <Grid templateColumns='repeat(5, 20%)' templateRows='repeat(1, auto)' m="auto" marginTop="30px" w="100%" gap={5}>
        <Box w='50%'  borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='60%' src="https://th.bing.com/th/id/OIP.Xa0BEkwl0Zx4qnY9lMbD7gHaHa?w=214&h=214&c=7&r=0&o=5&pid=1.7"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='50%' src="https://th.bing.com/th/id/OIP.VaZkv-LlK-FiNoKWVKp3vAAAAA?w=160&h=180&c=7&r=0&o=5&pid=1.7"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='60%' src={Render}/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='60%' src="https://toppng.com/uploads/thumbnail/vscode-visual-studio-code-11562929010kudb93mlmx.png"/>
        </Box>
        <Box w='50%' borderRadius={"30px"}  bg='white' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image m="auto" mt="10%" w='70%' src="https://th.bing.com/th/id/R.137e567fcb8b63212827e9fe0801adfe?rik=Ta4lKd%2f5PFnwnA&riu=http%3a%2f%2fwww.boostit.net%2fwp-content%2fuploads%2f2016%2f08%2fnode-js-icon.png&ehk=v9%2bNcl4syCIPWNsVuuQBEDfnWaqKi9n9KNmSnRH70N4%3d&risl=&pid=ImgRaw&r=0"/>
        </Box>
        </Grid>
        </Box>
        
       
        
        
        </Box> 
        </Box>
        </Show>
    </Box>
</>

    )
}