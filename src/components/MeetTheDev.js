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
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";

export default function MeetTheDev() {
    return (
        <div className="section" id="dev">
            <Jumbotron>
                <h1 className="display-3 pixel-font">The Developer</h1>
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
                                <CardLink href="https://www.linkedin.com/in/jkdelara/">
                                    <LinkedInIcon style={{ color: "grey" }} />
                                </CardLink>
                                <CardLink href="https://www.github.com/xjkbro/">
                                    <GitHubIcon style={{ color: "grey" }} />
                                </CardLink>
                                <CardLink href="https://www.github.com/xjkbro/">
                                    <LanguageIcon style={{ color: "grey" }} />
                                </CardLink>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="info-team">
                        <p className="lead nunito-font">
                            Hello, my name is Jason-Kyle De Lara. I'm a
                            creative, outgoing, goal oriented individual who is
                            always looking for ways to improve. I'm a self
                            taught web developer who has background in
                            programming since High School. I'm a recent
                            undergraduate from the University of Nevada Las
                            Vegas and earned a Bachelors of Science Degree in
                            Computer Science. I have also completed a Full Stack
                            Web Development bootcamp named NuCamp recently.
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
                            gradually become more comforatable in my skills and
                            understanding better practices in web development
                            with all the projects that I've recently completed
                            that I feel ready to approach employers to show them
                            what I am made out of!
                        </p>
                        <hr className="my-2 nunito-font" />
                        <p>
                            If your enjoyed the application feel free to visit
                            my website and look at my other projects.
                        </p>
                        <p className="lead nunito-font">
                            {/* <Button color="light">
                                <a
                                    href="https://www.jkdelara.com"
                                    className="text-dark"
                                    style={{
                                        textDecoration: "none",
                                    }}
                                >
                                    Website
                                </a>
                            </Button> */}
                        </p>
                    </div>
                </div>
            </Jumbotron>
        </div>
    );
}
