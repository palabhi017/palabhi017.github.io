import React from 'react'
import { Box,Heading,Show,HStack } from '@chakra-ui/react'
import GitHubCalendar from 'react-github-calendar';

// import { Box } from '@chakra-ui/react'
const Gitstats = () => {
  return (
<Box h="auto" m="auto" mt={"10px"} bgColor="#f5f5f7" w="99%" borderRadius={"15px"}>
 <Heading color="#693fee" p="30px" fontSize={"40px"}>Github</Heading>
<Show above='801px'>
<HStack  h={"300px"}  m="auto" width={"98%"} justifyContent={"space-evenly"} alignItems="center">
 {/* <div align="center" style={{display:"flex"}}> */}

<img id="github-stats-card" style={{width:"30%"}} src="https://github-readme-stats.vercel.app/api?username=palabhi017&theme=react&border_radius=4.6&show_icons=true&count_private=true&hide_border=true&show_icons=true&bg_color=153d82&title_color=ffffff&text_color=fff" alt=""  />
{/* <div align="center" > */}
 
<img id="github-streak-stats" style={{width:"33%"}} src="https://github-readme-streak-stats.herokuapp.com?user=palabhi017&theme=react&hide_border=true&border_radius=4.6&background=153d82&color=ffffff&text_color=fff"  alt=""/>

{/* </div>  */}
  <img id="github-top-langs" style={{width:"30%"}} src="https://github-readme-stats.vercel.app/api/top-langs/?username=palabhi017&theme=transparent&border_radius=4.6&hide_border=true&layout=compact&show_icons=true&bg_color=153d82&title_color=ffffff&text_color=fff" alt=""   />

 {/* </div>  */}
</HStack >
</Show>
<Show below="800px">
<Box h={"auto"}  m="auto" width={"98%"}>
 {/* <div align="center" style={{display:"flex"}}> */}

<img style={{height:"auto",width:"90%",margin:"auto"}} src="https://github-readme-stats.vercel.app/api?username=palabhi017&theme=react&border_radius=4.6&show_icons=true&count_private=true&hide_border=true&show_icons=true&bg_color=153d82&title_color=ffffff&text_color=fff" alt=""  />
{/* <div align="center" > */}
 
<img style={{height:"auto",width:"90%",margin:"auto"}} src="https://streak-stats.demolab.com?user=palabhi017&theme=highcontrast&background=153d82"  alt=""/>

{/* </div>  */}
  <img style={{height:"auto",width:"90%",margin:"auto"}} src="https://github-readme-stats.vercel.app/api/top-langs/?username=palabhi017&theme=transparent&border_radius=4.6&hide_border=true&layout=compact&show_icons=true&bg_color=153d82&title_color=ffffff&text_color=fff" alt=""   />

 {/* </div>  */}
</Box >
</Show>
<Box>
<GitHubCalendar className='react-activity-calendar'  style={{width:"90%",margin:"auto",color:"#693fee"}} username="palabhi017" />
</Box>

</Box>
  )
}

export default Gitstats