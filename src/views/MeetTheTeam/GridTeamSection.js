
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icon
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from '@material-ui/core/Button';
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import Zibaa from "assets/img/faces/Zibaa.jpg";
import Darren from "assets/img/faces/Darren.jpg";
import Kelly from "assets/img/faces/Kelly.jpg";
import Samrudh from "assets/img/faces/Samrudh.jpg";
import Aryaa from "assets/img/faces/Aryaa.jpg";
import Mayuri from "assets/img/faces/Mayuri.jpg";
import Rohan from "assets/img/faces/Rohan.jpg";
import Sruthi from "assets/img/faces/Sruthi.jpg";
import Raj from "assets/img/faces/Raj.jpg";
import Akshat from "assets/img/faces/Akshat.jpg";
import Erin from "assets/img/faces/Erin.jpg";
import Smera from "assets/img/faces/Smera.jpg";
import Nadya from "assets/img/faces/Nadya.jpg";
import Arnuv from "assets/img/faces/Arnuv.jpg";
import Martin from "assets/img/faces/Martin.jpg";
import Andra from "assets/img/faces/Andra.jpg";
import Tishani from "assets/img/faces/Tishani.jpg";
import Peri from "assets/img/faces/Peri.jpg";
import Catherine from "assets/img/faces/Catherine.jpg";
import Virginia from "assets/img/faces/Virginia.jpg";
import Roma from "assets/img/faces/Roma.jpg";
import Clarissa from "assets/img/faces/Clarissa.jpg";
import Grid from '@material-ui/core/Grid';



import Carousel from "react-bootstrap/Carousel"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const useStyles = makeStyles(styles);

export default function GridTeamSection() {
    window.scrollTo(0, 0);

    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    const carouselStyles = <span aria-hidden="true" className="carousel-override-prev-icon" />
    return (
        <div className={classes.section}>
            <h2 className={classes.title}>Meet the Team</h2>
            <div>
                <GridContainer>
                    <Container>
                        <Row>
                            <Col>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={Zibaa} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Zibaa Adil
                <br />
                                    <small className={classes.smallTitle}>President</small>
                                </h4>
                                <CardBody style={{ color: "#000" }}>
                                    Hello everyone! My name is Zibaa, I’m a senior, and I am so excited to be your President this year. Inside of FBLA, I've had so much fun meeting new people, doing Jazzercise at conferences, and documenting the good times through vlogs to look back on later. Outside of FBLA, my passions include advocating for Uyghur rights and spreading awareness, enjoying music through playing and listening, and seeking out little bouts of magic in everyday life. I’m really looking forward to getting to know all of you and playing silly games together so please don’t hesitate to come chat or hang out.
                                </CardBody>
                                <CardBody style={{ color: "#34495e", marginTop: "13px" }}>
                                    <i>"It'll be alright in the end. And if it's not alright, it's not the end." - 2D</i>
                                </CardBody>
                            </Col>
                            <Col>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={Darren} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Darren Hsing
                <br />
                                    <small className={classes.smallTitle}>Executive Vice President</small>
                                </h4>
                                <CardBody style={{ color: "#000", fontSize: "0.9rem" }}>
                                    Hello friends! My name is Darren, I am a senior, and I will be serving as your Executive Vice President and your Bay Section Vice President of Outreach. Homestead FBLA has played a huge role in shaping me into the ambitious and hard working person that I am today and I will be forever grateful. Throughout my experience in FBLA, I've made many life long friends, experienced the craziest stories at conferences, and found my place in this amazing family. In my free time I enjoy scouring Spotify for new music, teaching myself ukulele & guitar, hanging out with my friends, dreaming, and drinking arguably too much boba. I absolutely love meeting new people so if you have a question or if you need recommendations for music, please just come by and say hello! I can't wait to see all your beautiful faces! See you soon :))
                                </CardBody>
                                <CardBody style={{ color: "#34495e" }}>
                                    <i>"Success is no accident. It is sacrifice, self pride, and loving what you do." - Darren Hsing</i>
                                </CardBody>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={Kelly} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Kelly Mao
                <br />
                                    <small className={classes.smallTitle}>VP Conferences</small>
                                </h4>
                                <CardBody style={{ color: "#000" }}>
                                    Hey everyone! My name is Kelly, I’m a senior, and I am super excited to be your VP Conferences this year! When I'm not crying over college apps, you can find me aggressively giving hugs, listening to music, making conference vlogs (check out my youtube channel ;)), experimenting with graphic design, and spending too much money on food. I know that this year will be amazing and I can’t wait to meet all of you, so come introduce yourself to me if you want a hug, or if you want to talk about anything!
                                </CardBody>
                                <CardBody style={{ color: "#34495e" }}>
                                    <i>"amstud or fbla?"</i>
                                </CardBody>
                            </Col>
                            <Col>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={Samrudh} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Samrudh Shenoy
                <br />
                                    <small className={classes.smallTitle}>VP Tech Operations</small>
                                </h4>
                                <CardBody style={{ color: "#000" }}>
                                    Hey everyone! My name is Kelly, I’m a senior, and I am super excited to be your VP Conferences this year! When I'm not crying over college apps, you can find me aggressively giving hugs, listening to music, making conference vlogs (check out my youtube channel ;)), experimenting with graphic design, and spending too much money on food. I know that this year will be amazing and I can’t wait to meet all of you, so come introduce yourself to me if you want a hug, or if you want to talk about anything!
                                </CardBody>
                                <CardBody style={{ color: "#34495e" }}>
                                    <i>"amstud or fbla?"</i>
                                </CardBody>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row>
                            <Col>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={Aryaa} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Aryaa Sapkota
                <br />
                                    <small className={classes.smallTitle}>VP Member Relations</small>
                                </h4>
                                <CardBody style={{ color: "#000" }}>
                                    Hey guys! My name is Aryaa, and I am your VP of Member Relations as well as a junior this year (send help or more importantly COFFEE). FBLA has made a huge impact on my life whether it be through the opportunities it gave me to meet amazing people, wild memories of drinking soda for breakfast, or helping me grow into a hardworking, strong and optimistic individual. Outside of FBLA, you can find me volunteering, getting lost, rapping Hamilton at the top of my lungs, chugging lots of water, binge watching Netflix at Starbucks instead of doing my homework, or more likely buying bucket hats. Please come by and talk to me about anything! I can’t wait to meet all of you!
                                </CardBody>
                                <CardBody style={{ color: "#34495e", marginTop: "20px" }}>
                                    <i>"It is our choices, that show us what we truly are, far more than our abilities - Albus Dumbledore"</i>
                                </CardBody>
                            </Col>
                            <Col>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={Rohan} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Rohan Zamvar
                <br />
                                    <small className={classes.smallTitle}>VP Speaking Competitions</small>
                                </h4>
                                <CardBody style={{ color: "#000", fontSize: "0.95rem" }}>
                                    Hey guys!! My name is Rohan Zamvar, I’m a junior :( this year, and I'm your Vice President of Prepared Speaking Competitions! Though I *love* FBLA, you can also find me singing a wide variety of songs (you'll grow to either hate it or deal with it), walking in the hallways with my airpods (AKA my best friends), screaming at any and all school events (GO 2021!!!), studying at Starbucks (the Fremont Mary one is objectively better), and saving the turtles with my metal straw (get one and prevent plastic pollution!). I hope as many of you as possible receive the opportunity to be part of a prepared speaking competition because it's an experience that not only prepares you in so many ways, but lets you have so much fun and express your creativity. If you have any questions about anything, feel free to ask! Can’t wait to meet all of you!
                                </CardBody>
                                <CardBody style={{ color: "#34495e" }}>
                                    <i>"Ad astra per aspera."</i>
                                </CardBody>
                            </Col>
                            <Container>
                                <Row>
                                    <Col>
                                        <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                            <img src={Sruthi} alt="..." className={imageClasses} />
                                        </GridItem>
                                        <h4 className={classes.cardTitle}>
                                            Sruthi Rayaprolu
                <br />
                                            <small className={classes.smallTitle}>VP Written Competitions</small>
                                        </h4>
                                        <CardBody style={{ color: "#000" }}>
                                            Hey guys! My name is Sruthi and I am beyond excited to be serving as your Vice President of Written Competitions. Outside of FBLA I love traveling, singing, hiking, eating, and hanging out with friends. I am so excited to meet all of you and feel free to come up to me anytime, I'm always down to talk.
                                </CardBody>
                                        <CardBody style={{ color: "#34495e" }}>
                                            <i>"Kindness is spreading sunshine into people's lives regardless of the weather"</i>
                                        </CardBody>
                                    </Col>
                                    <Col>
                                        <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                            <img src={Mayuri} alt="..." className={imageClasses} />
                                        </GridItem>
                                        <h4 className={classes.cardTitle}>
                                            Mayuri Hebbar
                <br />
                                            <small className={classes.smallTitle}>VP Case Studies</small>
                                        </h4>
                                        <CardBody style={{ color: "#000" }}>
                                            Hi everyone! I'm Mayuri and I am super excited to be serving as your VP of Case Study Speaking Competitions this year. I am a junior this year (eeee) and outside of FBLA I spend my time petting random doggos and eating good food. :) I can't wait to meet all of you this year so please do come say hi!
                                </CardBody>
                                        <CardBody style={{ color: "#34495e" }}>
                                            <i>"I'm not clumsy, I just get attacked by the random chairs, trees, and people that are in my way."</i>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={Raj} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Raj Raghulan
                <br />
                                    <small className={classes.smallTitle}>VP Tech Competitions</small>
                                </h4>
                                <CardBody style={{ color: "#000" }}>
                                    Hello! My name is Raj Raghulan, I’m a junior, and I’ll be serving as your VP of Technology Competitions this year! Here’s a little about myself: I currently enjoy doing Robotics, History, and teaching. I may act cool but am a huge nerd so feel free to talk to me about anything. I can’t wait to meet all of you!
                                </CardBody>
                                <CardBody style={{ color: "#34495e", marginTop: "25px" }}>
                                    <i>"School is like a pressure cooker, too little pressure you come out raw, too much stress you come out overcooked, the key is finding an outlet" - Raj Raghulan</i>
                                </CardBody>
                            </Col>
                            <Col>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={Akshat} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Akshat Jain
                <br />
                                    <small className={classes.smallTitle}>Middle Level Chair</small>
                                </h4>
                                <CardBody style={{ color: "#000", fontSize: "0.9rem" }}>
                                    Hey everyone! My name is Akshat Jain and I'm a junior (yay?), but most importantly, I am one of your Middle Level Chairs for this year! Outside of school, you can find me hanging out with Middle Level FBLA, eating Chipotle, drinking too much boba, trying to cook, solving Rubik's Cubes (let me know if you want to learn!), or watching way too many Bollywood movies. I absolutely love meeting new people so always feel free to come talk to me!
                                </CardBody>
                                <CardBody style={{ color: "#34495e" }}>
                                    <i>"The only place where success comes before work is in the dictionary."- Vince Lombardi</i>
                                </CardBody>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={Erin} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Erin Yoon
                <br />
                                    <small className={classes.smallTitle}>Middle Level Chair</small>
                                </h4>
                                <CardBody style={{ color: "#000" }}>
                                    Hi everyone! I'm Erin and this year I'm a junior (send help) as well as one of the Middle Level Chairs. When I'm not FBLA-ing, you can find me binge watching any and all Netflix shows, finding new songs to play on the piano, going on wild adventures with friends, being a terrible I mean amazing driver, and saving turtles (iykyk)! I love meeting new people, so don't hesitate to come talk to me anytime about anything! I can't wait for more amazing memories :)
                                </CardBody>
                                <CardBody style={{ color: "#34495e", marginTop: "64px" }}>
                                    <i>"Do you even skate bro? It's ok me neither."</i>
                                </CardBody>
                            </Col>
                            <Col>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={Smera} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Smera Doshi
                <br />
                                    <small className={classes.smallTitle}>Public Relations</small>
                                </h4>
                                <CardBody style={{ color: "#000", fontSize: "0.9rem" }}>
                                    hey pals! i'm smera, i'm a senior, and i'm your public relations officer this year. fbla has been one of my most valuable experiences, as it has helped me understand the true meaning of hard work, helped me meet some of the most amazing people in the world, and taught me that a small effort will go a long way. in my free time, i love staring at dog pictures, stalking people’s Spotify playlists (so drop recs please!), attempting to not drown while swimming, discovering new hiking trails, shopping for yet another bucket hat, and consuming way too much coffee. come say hi to talk about anything, discover cute coffee shops, or go on fun adventures with me, and i cannot wait to meet all of you amazing people!
                                </CardBody>
                                <CardBody style={{ color: "#34495e" }}>
                                    <i>"if life gives you lemons, just hope they are lulu "</i>
                                </CardBody>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={Nadya} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Nadya Svidzerskaya
                <br />
                                    <small className={classes.smallTitle}>Treasurer</small>
                                </h4>
                                <CardBody style={{ color: "#000" }}>
                                    Hey guys! My name is Nadya and I am going to be your Treasurer for the 19-20 school year :) Outside of school, you can find me listening to my very bad music tastes, dancing very awkwardly, and petting every dog I find. I am so excited for this year and can not wait to meet all of you! I'm going to be spending a lot of lunches in I2 so please come say hi and hang out with me!
                                </CardBody>
                                <CardBody style={{ color: "#34495e" }}>
                                    <i>"To be old and wise you must first be young and stupid"</i>
                                </CardBody>
                            </Col>
                            <Col>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={Arnuv} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Arnuv Tandon
                <br />
                                    <small className={classes.smallTitle}>Executive Technology Chair</small>
                                </h4>
                                <CardBody style={{ color: "#000" }}>
                                    Hey Guys! My name is Arnuv, I am a sophomore this year, and I will be serving as your Executive Technology Chair. Outside of FBLA, I enjoy playing tennis, programming, hanging out with friends, watching Narcos, and most importantly booking Delta Flights with Mr. Wu. If you ever need help with anything, feel free to ask!
                                </CardBody>
                                <CardBody style={{ color: "#34495e" }}>
                                    <i>"Leaders don't look backwards to condemn what has already been done, they look forward to create a better future" - Mark Cuban</i>
                                </CardBody>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={Martin} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Martin Wu
                <br />
                                    <small className={classes.smallTitle}>American Enterprise Chair</small>
                                </h4>
                                <CardBody style={{ color: "#000", fontSize: "0.9rem" }}>
                                    Hey Homestead! I am beyond excited to be working with you all this year in FBLA as one of your American Enterprise Chairs! Being a member of this club since 7th grade has changed my life and I hope it makes a valuable impact on you! Outside of FBLA, you can find me running around at Rallies for ASB, playing tennis, competing in abacus, or helping the technological challenged kiddos (Andra, Virginia and Arnuv) book Delta Flights. ALSO If you'd like, I am always available to cry to americas got talent golden buzzer compilations with you. Please feel free to message me on facebook anytime and we can become besties! ❤
                                </CardBody>
                                <CardBody style={{ color: "#34495e" }}>
                                    <i>"Work hard to have the ability to play hard"</i>
                                </CardBody>
                            </Col>
                            <Col>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={Andra} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Andra Liu
                <br />
                                    <small className={classes.smallTitle}>American Enterprise Chair</small>
                                </h4>
                                <CardBody style={{ color: "#000" }}>
                                    Hey guys! My name is Andra Liu, I’m a sophomore this year, and I am super excited to be one of your American Enterprise Project Chairs this year. Outside of FBLA, you can find me playing tennis, hanging out with friends, listening to Troye Sivan, or booking delta airlines plane tickets with my favorite client service associate, Martin! I can’t wait to meet all of you this year, so please feel free to come talk to me and we can become friendsies! :)
                                </CardBody>
                                <CardBody style={{ color: "#34495e", marginTop: "43px" }}>
                                    <i>“All things are difficult before they are easy.” - Thomas Fuller</i>
                                </CardBody>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={Peri} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Peri Plantenberg
                <br />
                                    <small className={classes.smallTitle}>Community Service Chair</small>
                                </h4>
                                <CardBody style={{ color: "#000" }}>
                                    Hello friends! My name is Peri, I am a sophomore, and I'll be serving as one of the CS chairs this year. Outside of FBLA, I enjoy running, eating everything that is available except meat, socializing, reading, writing, and petting dogs. I know the officer team might seem intimidating at first, but they're secretly softies. I can't wait to meet you!
                                </CardBody>
                                <CardBody style={{ color: "#34495e" }}>
                                    <i>"Use your smile to change the world, don't let the world change your smile"</i>
                                </CardBody>
                            </Col>
                            <Col>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={Tishani} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Tishani Weerasuriya
                <br />
                                    <small className={classes.smallTitle}>Community Service Chair</small>
                                </h4>
                                <CardBody style={{ color: "#000" }}>
                                    Hello my name is Tishani, I'm a sophomore and I am one of your CS chairs this year! I love meeting new people so feel free to talk to me anytime you want to! I'm absolutely terrified of birds (I'm working on it) and love watching the most random videos on YouTube. I also make really, really bad jokes all the time. Excited to meet you all this year!
                                </CardBody>
                                <CardBody style={{ color: "#34495e" }}>
                                    <i>"Make yourself proud" - Peter W. Smith </i>
                                </CardBody>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={Virginia} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Virginia Anderson
                <br />
                                    <small className={classes.smallTitle}>Partnership with Business Chair</small>
                                </h4>
                                <CardBody style={{ color: "#000" }}>
                                    Hello everyone! My name is Virginia Anderson. I am a sophomore, and I am excited to be one of your Partnership with Business chairs. On my free time I enjoy playing the trumpet, traveling, rollerblading, booking delta airline flights with Martha (martin), and drinking boba. If you ever want to have a good laugh or  simple conversation, you know who to go to!
                                </CardBody>
                                <CardBody style={{ color: "#34495e" }}>
                                    <i>"Run the day, don't let the day run you" </i>
                                </CardBody>
                            </Col>
                            <Col>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={Catherine} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Catherine Zhang
                <br />
                                    <small className={classes.smallTitle}>Partnership with Business Chair</small>
                                </h4>
                                <CardBody style={{ color: "#000" }}>
                                    Hey guys! My name is Catherine, I'm a sophomore this year, and I'm so excited to be one of the Partnership with Business project chairs. Outside of FBLA, you can find me playing soccer, taking naps, hanging out with friends, shopping, and binge watching shows (mostly The Office). I'm so excited for the fun year we're going to have and I can't wait to meet all of you guys.
                                </CardBody>
                                <CardBody style={{ color: "#34495e" }}>
                                    <i>"Laugh a lot - its good for you"  </i>
                                </CardBody>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={Clarissa} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Clarissa Gao
                <br />
                                    <small className={classes.smallTitle}>Ex-Offcio/State PR</small>
                                </h4>
                                <CardBody style={{ color: "#000" }}>
                                    Hey you! It's Clarissa Gao, serving as your ex-officio/State PR this year! I'm so so so excited to get to know all of you this year :) But before that happens here's a little about myself: I love to venture new food spots, but since I've spent too much money on food, I've resorted to watching other people eat on Youtube, and I love music, you'll always see me on Spotify, or humming along to something. If you have any questions, if you want a hug, or just someone to talk to, feel free to talk to me :)
                                </CardBody>
                                <CardBody style={{ color: "#34495e" }}>
                                    <i>"forgive your enemies - nothing annoys them more"</i>
                                </CardBody>
                            </Col>
                            <Col>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={Roma} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Roma Bedekar
                <br />
                                    <small className={classes.smallTitle}>Ex-Officio/Bay Section President</small>
                                </h4>
                                <CardBody style={{ color: "#000" }}>
                                    Mo Bamba. Sicko Mode. Gucci Flip Flops. These have one thing in common: they’re all high quality songs I know every lyric of. Hi there! I’m Roma Bedekar, a senior (??!!). I’m the Bay Section President, a California FBLA Vice President, and your Homestead exofficio! My entire life rests upon my quite lit Spotify playlists, my trips to Trader Joes, and having a blast with FBLA members so don’t hesitate to talk to me about anything from whether toads are real to whether the sky is pink or yellow!
                                </CardBody> <CardBody style={{ color: "#34495e" }}>
                                    <i>“Big boi buds make big boi bucks.”</i>
                                </CardBody>
                            </Col>
                        </Row>
                    </Container>
                </GridContainer>
            </div>
        </div>
    );
}
