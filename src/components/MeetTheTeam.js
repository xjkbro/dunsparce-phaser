import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardLink,
    Jumbotron,
    Button,
} from "reactstrap";
export default function MeetTheTeam() {
    return (
        // <div>
        //     <Card>
        //         <CardBody>
        //             <CardTitle tag="h4">Jason-Kyle De Lara</CardTitle>
        //             <CardSubtitle tag="h6" className="mb-2 text-muted">
        //                 Full Stack Web Developer
        //             </CardSubtitle>
        //         </CardBody>
        //         <img
        //             width="100%"
        //             src="/assets/318x180.svg"
        //             alt="photo of jason-kyle de lara"
        //         />
        //         <CardBody>
        //             <CardText>

        //             </CardText>
        //             <CardLink href="#">Card Link</CardLink>
        //         </CardBody>
        //     </Card>
        // </div>

        <div className="section" id="team">
            <Jumbotron>
                <h1 className="display-3 pixel-font">The Team</h1>
                <div className="team-content">
                    <div className="card-team">
                        <Card>
                            <CardImg
                                top
                                width="100%"
                                src="IMG_5033 copy.JPG"
                                alt="Card image cap"
                            />
                            <CardBody>
                                <CardTitle className="text-dark" tag="h4">
                                    Jason-Kyle De Lara
                                </CardTitle>
                                <CardSubtitle
                                    tag="h6"
                                    className="mb-2 text-muted"
                                >
                                    Full Stack Web Developer
                                </CardSubtitle>
                            </CardBody>
                            <CardBody>
                                <CardText></CardText>
                                <CardLink href="#">Card Link</CardLink>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="info-team">
                        <p className="lead nunito-font">
                            The Team is comprised of just myself, Jason-Kyle De
                            Lara. I'm a self taught web developer who has
                            background in programming since High School. I'm a
                            recent undergraduate from the University of Nevada
                            Las Vegas and earned a Bachelors of Science Degree
                            in Computer Science. I have also completed a Full
                            Stack Web Development bootcamp named NuCamp
                            recently.
                        </p>
                        <p className="lead nunito-font">
                            To be completely honest for the longest time, I
                            didn't have a passion for programming and I
                            mindlessly did my course work in college and was
                            eager to get out and find a job. My senior year of
                            college, I picked up Web Development to keep myself
                            learning and found myself enjoying the design and
                            creative aspect. Thankfully I did because finding a
                            job after college wasn't going to happen with an
                            empty portfolio and no passion for the field. I
                            gradually becoming more comforatable in my skills
                            and understanding better practices in web
                            development that I feel ready to approach employers
                            to show them what I am made out of. But that wasn't
                            going to do any good in this industry.
                        </p>
                        <hr className="my-2 nunito-font" />
                        <p>
                            It uses utility classes for typography and spacing
                            to space content out within the larger container.
                        </p>
                        <p className="lead nunito-font">
                            <Button color="primary">Learn More</Button>
                        </p>
                    </div>
                </div>
            </Jumbotron>
        </div>
    );
}
