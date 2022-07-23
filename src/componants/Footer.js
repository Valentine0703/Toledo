import { Typography, Box, Container, Grid } from "@mui/material";
import footer from "../assets/footer.png";
export default function Footer(){
    return(
        <>
            <Box className="footer">
                <Container fullWidth>
                    <Grid container sx={{textAlign:"left"}}>
                        <Grid item md={3}>
                            <Typography>Get VTC Toledo by car</Typography>
                            <Typography>Iberian Tours Alliance S.L.</Typography>
                            <Typography>C/Príncipe de Vergara 109 2ªPta</Typography>
                            <Typography>28002-Madrid</Typography>
                            <Typography>B-87208245</Typography>
                            <Typography>Licencia CICMA-3122</Typography>
                        </Grid>
                        <Grid item md={3}>
                            <Typography fontSize="1.3rem" fontWeight="600">INFORMACIÓN LEGAL</Typography>
                            <Typography>Condiciones generales</Typography>
                            <Typography>Preguntas frecuentes</Typography>
                            <Typography>Aceptación RGPD</Typography>
                            <Typography>Aviso legal</Typography>
                        </Grid>
                        <Grid item md={3}>
                            <Typography fontSize="1.3rem" fontWeight="600">ENLACES DE INTERÉS</Typography>
                            <Typography>Traslados VTC Toledo</Typography>
                            <Typography>Traslados a Puy du Fou</Typography>
                            <Typography>Transfer VTC Toledo-Madrid</Typography>
                            <Typography>Transfer a VTC Toledo</Typography>
                            <Typography>Transporte privado</Typography>
                            <Typography>Transfer VTC Toledo Aeropuerto</Typography>
                        </Grid>
                        <Grid item md={3}>
                            <Typography>Taxi VTC Toledo - Puy du Fou</Typography>
                            <Typography>Transporte VTC Toledo - Puy du Fou</Typography>
                            <Typography>Traslados grupos Puy du Fou</Typography>
                            <Typography>VTC Toledo - Puy du Fou cómo llegar</Typography>
                            <img src={footer} className="footerImg"/>
                        </Grid>
                    </Grid>
                    <Box sx={{mt:"100px", textAlign:"center"}}>
                        <Typography>Taxi Madrid Puy du Fou © 2022 Get VTC Toledo | Powered by MorfeoWeb</Typography>
                    </Box>
                </Container>
            </Box>
        </>
    );
}