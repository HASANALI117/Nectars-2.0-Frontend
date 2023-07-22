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
      <Navbar css={{width:1400, display:"flex", opacity:100 }} shouldHideOnScroll  variant="static">
        {/* isBordered={isDark} */}
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            Name
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="underline">
         
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>
        <img className="download" alt="Download" src={process.env.PUBLIC_URL + '/download-10-1.png'}
         />
        
        <h1 className="text-wrapper">The global commerce platform</h1>
       
    
       
        <TypeWriterEffect
        textStyle={{
            fontfamily: "Inter-BlackItalic",
          color: "#221f1fd6",
          fontWeight: 900,
          fontsize: "1200px",
          letterspacing: 0,
          lineheight: "normal"
          
        }}
        startDelay={2000}
        cursorColor="black"
        css={{zIndex: 2,  
             margin: "40px 40px 40px 40px",
            left: "42px",
            
            
            position: "absolute",
            top: "326px",
            width: "1006px"}}
        multiText={[
          'The global commerce platform',
          'The global commerce platform 2',
          'The global commerce platform 3',
          'The global commerce platform 4',
          'The global commerce platform 5',
        ]}
        loop={true}
        nextTextDelay={1000}
        typeSpeed={45}
      />
        
        <p className="p">Build your business with Shop-name to sell online, offline, and everywhere in between.</p>
        <p className="text-wrapper-2">
          Discover why millions of entrepreneurs chose our site to build their business interface .
        </p>
        <div className="email-sign">
        <Grid>
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
            css={{background: "black", width:130,margin:"0px 0px 100px 410px", }}
        >
        Primary
        </Button>
      </Grid>
        </div>
        <p className="text-wrapper-3">
          Try Shop-name free for 30 days, no credit card required. By entering your email, you agree to the terms and
          services of Shop-name.
        </p>
        <p className="text-wrapper-4">Explore the our commerce community</p>
        <Grid.Container 
        css={{margin: "0px 0px 0px 0px", Bottom:"100px", maxwidth: "30%"}}
        gap={2}>
      <Grid sm={12} md={5}>
        <Card css={{ mw: "330px" }}>
          <Card.Header>
            <Text b>Partners</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
            Offer your expertise to STORE-NAME merchants all over the world.
            </Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
             
              <Button size="sm">Learn more</Button>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
      <Grid sm={12} md={5}>
        <Card css={{ mw: "330px" }}>
          <Card.Header>
            <Text
             b
             css={{margin: "0px 0px 10px 0px"}}
             >Designers</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10", margin: "0px  0px 0px 0px" }}>
            <Text>
            Offer your design expertise to STORE-NAME designers all over the world.
            </Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
            
              
              <Button size="sm" color="secondary">
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
        <div className="text-inv-card">
          <h1 className="text-inv-card-title">hello</h1>
          <p className="text-inv-card-p">test 1 test 2</p>
        </div> 
        <div className="text-inv-card-2">
          <h1>hello</h1>
          <p>test 1 test 2</p>

        </div> 
            
        </div> 
        <div className="text-wrapper-8">Your store, your way</div>
      </div>
    </div>
  </div>
);
};