import React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import { makeStyles } from "@material-ui/core/styles"


const RecipeGrid = ({ title, recipe }) => {
    const useStyles = makeStyles((theme) => ({
        cardMedia: {
            width: 180,
        },
        card: {
            display: "flex",
        },
    }))

    const styles = useStyles()

    return (
        <Container maxWidth="md">
            <Box mt={6} mb={2}>
                <Typography variant="h5">{title}</Typography>
            </Box>
            <Grid container direction="column" spacing={4}>
                {recipe.map((data) => (
                    <Card className={styles.card}>
                        <CardContent>
                            <Typography variant="h6">{data.title}</Typography>
                            <Typography variant="subtitle">ingredients</Typography>
                            <ul>{data.ingredients.map((ingredient, i) => (
                                <li key={i}>{ingredient}</li>
                            ))}
                            </ul>
                            <ol>{data.instructions.map((instruction, i) => (
                                <li key={i}>{instruction}</li>
                            ))}
                            </ol>
                        </CardContent>
                        <CardMedia
                            className={styles.cardMedia}
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
