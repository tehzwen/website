import { AnnouncementHeader, MyHeader, Footer, Boids } from '../Components/index';
import { Grid, Header, Button } from 'semantic-ui-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [currentString, setCurrentString] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentInfoStringIndex, setCurrentInfoStringIndex] = useState(0);
    const [addingString, setAddingString] = useState(true);
    const navigate = useNavigate();

    const index = 0;

    const infoStrings = [
        "I build computer things...",
        "I like dogs and have two myself (Copper & Nova)...",
        "I use React...",
        "I use Python...",
        "I use Java...",
        "I use JavaScript...",
        "I use Golang...",
        "I like to play with graphics...",
        "I use AWS...",
        "I enjoy video games...",
        "Coffee is life..."
    ]

    const getRandomInfoString = () => {
        let number = Math.floor(Math.random() * infoStrings.length);

        if (number === currentInfoStringIndex) {
            return getRandomInfoString();
        } else {
            return number;
        }
    }

    const addLetter = () => {
        if (currentIndex < infoStrings[currentInfoStringIndex].length) {
            setCurrentString(currentString + infoStrings[currentInfoStringIndex][currentIndex]);
        } else {
            setTimeout(() => {
                setAddingString(false);
            }, 2000);
        }
    }

    const removeLetter = () => {
        if (currentString.length > 0) {
            let tempString = currentString;
            tempString = tempString.substring(0, tempString.length - 1);
            setCurrentString(tempString);
        } else {
            setCurrentInfoStringIndex(getRandomInfoString());
            setAddingString(true);
        }
    }

    useEffect(() => {
        if (addingString) {
            setCurrentIndex(currentIndex + 1);
            setTimeout(() => {
                addLetter();
            }, 200);
        } else {
            setCurrentIndex(currentIndex - 1);
            setTimeout(() => {
                removeLetter();
            }, 100);
        }
    }, [currentString])

    useEffect(() => {
        if (addingString) {
            setCurrentString(currentString + infoStrings[currentInfoStringIndex][index]);
        } else {
            let tempString = currentString;
            tempString = tempString.substring(0, tempString.length - 1);
            setCurrentString(tempString);
        }

    }, [addingString])

    useEffect(() => {
        addLetter();
    }, []);

    return (
        <Grid centered className="App">
            <Boids />
            <AnnouncementHeader
                color={"#ff130e"}
                announcement={<h4>My new site (Construction Yard) is live now! Check it out <a href="http://constructionyard.ca/#/refinery">here!</a></h4>} />
            <MyHeader />
            <Grid.Row className="GridRow" columns={'equal'} textAlign={"center"} style={{ marginTop: "250px", marginBottom: "250px" }}>
                <Grid.Column width={10}>
                    <Header className="HomeJumboTron" as="h1">Hello, my name is <b>Zachary Shaw</b></Header>
                    {currentString !== "" ?
                        (<p style={{ fontSize: '22px' }}>
                            {currentString}
                        </p>)
                        :
                        (<p><br /><br /></p>)
                    }

                    <Button color="teal" onClick={() => navigate('/projects/')}>Learn more</Button>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Footer />
                </Grid.Column>
            </Grid.Row>
        </Grid >
    )
}

export default Home;
