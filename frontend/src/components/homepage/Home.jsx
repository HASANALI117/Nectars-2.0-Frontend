// import React from 'react'
// // import '../App.css';
// // console.log("home")
// export default function Home() {
//   return (
    

//     <div className='homepage-div'>
//         <div className='email-sign'>
//             <input className='text-email' type='text' placeholder='Enter your email address' />
//             <button className='btn-email'>Get Started</button>
//             </div>
      
        
//         </div>
//   )
// }
import React from "react";
import { Navbar, Button, Link, Text, useTheme, Row, Card , Input, Grid} from "@nextui-org/react";
import { Layout } from "./imported/Layout.jsx";
import { AcmeLogo } from "./imported/AcmeLogo.jsx";
import TypeWriterEffect from 'react-typewriter-effect';



export const Home = () => {
    const imgSrc = process.env.PUBLIC_URL + '/download-10-1.png';
    console.log(imgSrc);
   
  return (
    
    <div className="Home">

    <div className="overlap-group-wrapper">
   
      <div className="overlap-group">
      <Layout>
      <Navbar css={{width:'100%' ,display:"flex", opacity:100 }} shouldHideOnScroll  variant="static">
        {/* isBordered={isDark} */}
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
          Nectars 2.0
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="underline">
         
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="/signup">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>
        <img className="download" alt="Download" src={process.env.PUBLIC_URL + '/download-10-1.png'}
         />
        
        {/* <h1 className="text-wrapper">The global commerce platform</h1> */}
       
    
       
        <TypeWriterEffect
        textStyle={{
            fontfamily: "Inter-BlackItalic",
          color: "#221f1fd6",
          fontWeight: 1000,
          fontsize: '100vw',
          letterspacing: 0,
          lineheight: "normal"
          
        }}
        startDelay={2000}
        cursorColor="black"
        css={{zIndex: 2,  
             margin: "400px 400px 400px 400px",
            left: "42px",
            
            
            position: "relative",
            top: "226px",
            width: "106px"}}
        multiText={[
          'The global commerce platform',
          'A marketplace of goods and services',
          // 'Your The global commerce platform',
          // 'Not your basic global commerce',
          // 'We are THE global commerce ',

        ]}
        loop={true}
        nextTextDelay={1000}
        typeSpeed={30}
      />
        
        <p className="p">Build your business with Nectars 2.0 to sell online, offline, and everywhere in between.</p>
        <p className="text-wrapper-2">
          Discover why millions of entrepreneurs chose our site to build their business interface .
        </p>
        <img alt="earth spinning" className="earth" src={process.env.PUBLIC_URL + '/earth.webp'}></img>

        <div className="email-sign">
        <Grid
        css={{margin:"-550px 0px 0px 30px",  position:" relative", width: "100%", height: "100%"}}
        >
        <Input
        rounded
        bordered
        label=""
        placeholder="Enter your email address"
        color="primary"
        css={{margin: "1200px 0px 0px 60px", width: "490px", height: "40px",background: "#FFFFFF",}}
        />
        <Button 
            auto
            color="secondary"
            rounded

            css={{background: "black", width:130,left:410, bottom:37, padding:"0px 10px 0px 10px", height:"35px" }}
        >
        Start Trial
        </Button>
      </Grid>
        </div>
        
        <p className="text-wrapper-3">
          Try Nectars 2.0 free for 30 days, no credit card required. By entering your email, you agree to the terms and
          services of Nectars 2.0.
        </p>
        <p className="text-wrapper-4">Explore the our commerce community</p>

        <Grid.Container 
        css={{margin: "1290px 1px 100px 230px", Bottom:"100px", maxwidth: "40%", width: "1400px",right:"200px" }}
        gap={2}>
      <Grid sm={12} md={5}>
        <Card css={{ mw: "330px" }}>
          <Card.Header>
            <Text 
            css={{padding: "10px 10px 10px 120px"}}
            b
            >Partners</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
            Offer your expertise to Nectars 2.0 merchants all over the world.
            </Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button 
              css={{right:"30%" }}
              size="sm">Learn more</Button>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
      <Grid sm={12} md={5}>
        <Card css={{ mw: "330px" }}>
          <Card.Header>
            <Text
             b
             css={{padding: "10px 10px 10px 120px"}}
             >Designers</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10", margin: "0px  0px 0px 0px" }}>
            <Text>
            Offer your design expertise to Nectars 2.0 designers all over the world.
            </Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
            
              
              <Button
              css={{right:"30%" }}
              size="sm"
              color="secondary">
                Learn more
              </Button>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
        <div className="div" />
 
        <div className="text-wrapper-7">Be your own boss</div>
        <div className="rectangle-4" />
        <img className="img" alt="Download" src={process.env.PUBLIC_URL + '/download-11-1.png'} />
      <div className="TORCH" >
        <div className="content-torch">
        <div className="text-inv-card">
          <h1 className="text-inv-card-title">Build an online storefront</h1>
          <p className="text-inv-card-p">Bring your vision to life with our drag-and-drop store creator. No coding expertise required — just your next big idea.</p>
        </div> 
        <div className="text-inv-card-2">
          <h1 className="text-inv-card-title-2">Craft the brand you want</h1>
          <p  className="text-inv-card-p-2">Select templates created by a community of world-class designers.</p>
        </div> 
        </div>
        </div> 
        <div className="your-store">Your store, your way</div>
        <div className="last">
         <div className="grow"> <h1 className="grow2">Grow your business with us.</h1></div>
         <div className="tools"><h4>Whether you're looking to sell locally or internationally, we have the tools you need to succeed.</h4></div>
          </div> 
      </div>
    </div>
  </div>
);
};