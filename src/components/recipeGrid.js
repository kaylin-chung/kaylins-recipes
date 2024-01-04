import React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import { makeStyles } from "@material-ui/core/styles"
import "@fontsource/oswald/500.css"
import "@fontsource/montserrat"
import "@fontsource/merriweather"


const RecipeGrid = ({ title, recipe }) => {
    const useStyles = makeStyles((theme) => ({
        cardMedia: {
            width: '30%', 
            height: '50%',
            marginTop: theme.spacing(3),
            marginRight: theme.spacing(3),
        },
        card: {
            display: "flex",
            margin: theme.spacing(2),
        },
    }))

    const styles = useStyles()

    return (
        <Container maxWidth="md">
            <Box mt={6} mb={2}>
                <Typography style= {{fontFamily: 'Montserrat', fontWeight:"bolder"}} variant="h5">{title}</Typography>
            </Box>
            <Grid container direction="column" spacing={4}>
                {recipe.map((data) => (
                    <Card className={styles.card}>
                        <CardContent style={{fontFamily: 'Merriweather'}}>
                            <Typography style={{fontFamily: 'Montserrat', fontWeight:"bold"}} variant="h6">{data.title}</Typography>
                            <br/>
                            <Typography style= {{backgroundColor: "#E9F79A"}} variant="subtitle">Prep Time:</Typography>
                            <br/>
                            <Typography style={{fontFamily: 'Merriweather'}} variant="h6">{data.preptime}</Typography>
                            <br/>
                            <Typography style= {{backgroundColor: "#E9F79A"}} variant="subtitle">Ingredients:</Typography>
                            <ul>{data.ingredients.map((ingredient, i) => (
                                <li key={i}>{ingredient}</li>
                            ))}
                            </ul>
                            <Typography style= {{backgroundColor: "#E9F79A"}} variant="subtitle">Instructions:</Typography>
                            <ol>{data.instructions.map((instruction, i) => (
                                <li key={i}>{instruction}</li>
                            ))}
                            </ol>
                        </CardContent>
                        <CardMedia
                            className={styles.cardMedia}
                            component="img"
                            src={data.image}
                            alt={data.title}
                        />
                    </Card>
                ))}
            </Grid>
        </Container>
    )
}

export default RecipeGrid;
