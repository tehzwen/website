import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Grid, Image } from 'semantic-ui-react';

const ProjectBlock = (props) => {
    const navigate = useNavigate();

    const [imageString, setImageString] = useState(null);
    const [titleLink, setTitleLink] = useState(null);

    const contructTotalString = (stringVal) => {
        let tempString = props.title;
        tempString.split(" ");

        setImageString(require("../Resources/" + stringVal));
        setTitleLink("/" + props.title.split(" ").join("").toLowerCase() + "/");
    }

    useEffect(() => {
        if (props.imageName !== undefined) {
            contructTotalString(props.imageName);
        }
        else {
            contructTotalString("defaultProject.jpg");
        }
    }, []);


    return (
        <Grid textAlign="center">
            <Grid.Row onClick={() => { navigate(titleLink) }} verticalAlign="middle" className="ProjectContainer">
                <Grid.Column width={4}>
                    <Image
                        alt={"not found"}
                        size="tiny"
                        src={imageString} />
                </Grid.Column>
                <Grid.Column width={10}>
                    <h2>{props.title}</h2>
                </Grid.Column>
            </Grid.Row>

        </Grid>
    )
}

export default ProjectBlock;
