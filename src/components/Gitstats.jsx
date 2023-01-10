import { Box,Heading,Show } from '@chakra-ui/react'
import GitHubCalendar from 'react-github-calendar';

import React from 'react'
// import { Box } from '@chakra-ui/react'
const Gitstats = () => {
  return (
<Box h="auto" m="auto" mt={"30px"} border="5px solid #008970" w="99%" borderRadius={"15px"}>
 <Heading fontSize={"50px"}>Github</Heading>
<Show above='801px'>
<Box h={"300px"} display="flex" m="auto" width={"98%"} justifyContent={"space-evenly"} alignItems="center">
 {/* <div align="center" style={{display:"flex"}}> */}

<img style={{height:"250px",width:"33%"}} src="https://github-readme-stats.vercel.app/api?username=palabhi017&theme=react&border_radius=4.6&show_icons=true&count_private=true&hide_border=true&show_icons=true&bg_color=008970&title_color=ffffff&text_color=fff" alt=""  />
{/* <div align="center" > */}
 
<img style={{height:"250px",width:"33%"}} src="https://streak-stats.demolab.com?user=palabhi017&theme=highcontrast&background=008970"  alt=""/>

{/* </div>  */}
  <img style={{height:"250px",width:"33%"}} src="https://github-readme-stats.vercel.app/api/top-langs/?username=palabhi017&theme=transparent&border_radius=4.6&hide_border=true&layout=compact&show_icons=true&bg_color=008970&title_color=ffffff&text_color=fff" alt=""   />

 {/* </div>  */}
</Box >
</Show>
<Show below="800px">
<Box h={"auto"}  m="auto" width={"98%"}>
 {/* <div align="center" style={{display:"flex"}}> */}

<img style={{height:"auto",width:"90%",margin:"auto"}} src="https://github-readme-stats.vercel.app/api?username=palabhi017&theme=react&border_radius=4.6&show_icons=true&count_private=true&hide_border=true&show_icons=true&bg_color=008970&title_color=ffffff&text_color=fff" alt=""  />
{/* <div align="center" > */}
 
<img style={{height:"auto",width:"90%",margin:"auto"}} src="https://streak-stats.demolab.com?user=palabhi017&theme=highcontrast&background=008970"  alt=""/>

{/* </div>  */}
  <img style={{height:"auto",width:"90%",margin:"auto"}} src="https://github-readme-stats.vercel.app/api/top-langs/?username=palabhi017&theme=transparent&border_radius=4.6&hide_border=true&layout=compact&show_icons=true&bg_color=008970&title_color=ffffff&text_color=fff" alt=""   />

 {/* </div>  */}
</Box >
</Show>
<Box>
<GitHubCalendar  style={{width:"90%",margin:"auto"}} username="palabhi017" />
</Box>

</Box>
  )
}

export default Gitstats