import * as React from 'react';
import Header from "../componants/Header";
import Footer from "../componants/Footer";
import { Box, Typography, Container, Divider, Grid, Accordion, AccordionSummary, AccordionDetails, FormControl, Select, MenuItem, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import "./style.css";
import banner from "../assets/8.jpg";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import puylogo from "../assets/puylogo.png";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/11.JPG";
import card5 from "../assets/card5.jpg";
import brand from "../assets/brands.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import { SelectChangeEvent } from '@mui/material/Select';
export default function Home() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    return (
        <>
            <Header />
            <Box>
                <img src={banner} width="100%" height="800px" />
                <Box className="form">
                    <Grid container>
                        <Grid item md={6}>
                            <Box className="formContent">
                                <Box padding="20px" textAlign="left">
                                    <Typography>
                                        Origen
                                    </Typography>
                                    <FormControl sx={{ width: "100%" }}>
                                        <Select
                                            value={age}
                                            onChange={handleChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            sx={{background:"white"}}
                                        >
                                            <MenuItem value="">
                                                <em>Seleccionar lugar de origen</em>
                                            </MenuItem>
                                            <MenuItem value={1}>Madrid City</MenuItem>
                                            <MenuItem value={2}>Madrid-Barajas Airport(MAD)</MenuItem>
                                            <MenuItem value={3}>VTC Toledo City</MenuItem>
                                            <MenuItem value={4}>Puy du Fou Park</MenuItem>
                                            <MenuItem value={5}>Madrid Atocha Station</MenuItem>
                                            <MenuItem value={6}>Madrid Chamartin Station</MenuItem>

                                        </Select>
                                    </FormControl>
                                    <Typography>
                                        Destino
                                    </Typography>
                                    <FormControl sx={{ width: "100%" }}>
                                        <Select
                                            value={age}
                                            onChange={handleChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            sx={{background:"white"}}
                                        >
                                            <MenuItem value="">
                                                <em>Seleccionar lugar de destino</em>
                                            </MenuItem>
                                            <MenuItem value={1}>Aeropuerto Madrid-Barajas(MAD)</MenuItem>
                                            <MenuItem value={3}>VTC Toledo Ciudad</MenuItem>
                                            <MenuItem value={4}>Parque Puy du Fou</MenuItem>
                                            <MenuItem value={5}>Estación de Atocha Madrid</MenuItem>
                                            <MenuItem value={6}>Estación de Chamartín Madrid</MenuItem>

                                        </Select>
                                    </FormControl>
                                    <Typography>
                                        Fecha y hora
                                    </Typography>
                                    <FormControl sx={{ width: "100%" }}>
                                        <TextField
                                            id="datetime-local"
                                            label="Date and Time"
                                            type="datetime-local"
                                            defaultValue="2022-07-22T10:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            sx={{background:"white"}}
                                        />
                                    </FormControl>
                                    <Box sx={{ width: "100%", display: "flex", justifyContent:"space-between" }}>
                                        <Box width="25%">
                                            <Typography>
                                                Adultos
                                            </Typography>
                                            <TextField id="outlined-basic" type="number" label="Teléfono" variant="outlined" sx={{background:"white"}}/>
                                        </Box>
                                        <Box width="25%">
                                            <Typography>
                                            Niños
                                            </Typography>
                                            <TextField id="outlined-basic" type="number" label="Teléfono" variant="outlined" sx={{background:"white"}}/>
                                        </Box>
                                        <Box width="25%">
                                            <Typography>
                                            Bebés
                                            </Typography>
                                            <TextField id="outlined-basic" type="number" label="Teléfono" variant="outlined" sx={{background:"white"}}/>
                                        </Box>
                                    </Box>
                                    <FormControl sx={{width:"100%", mt:"20px", textAlign:"center"}}>
                                    <a className="conBtn">Encuentra un transfer</a>
                                    </FormControl>
                                    
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Container fullWidth className="secContainer">
                <Typography fontSize="51px" fontWeight="700">Alquiler de Coches con Conductor con destino VTC Toledo y Puy du Fou</Typography>
                <Box sx={{ display: "flex" }}>
                    <Box className="iconBox">
                        <img src={icon1} />
                        <Typography fontWeight="600">CONDUCTOR PROFESIONAL</Typography>
                        <Typography>Coches con conductor a VTC Toledo y Puy du Fou</Typography>
                    </Box>
                    <Box className="iconBox">
                        <img src={icon2} />
                        <Typography fontWeight="600">SERVICIO PUERTA A PUERTA</Typography>
                        <Typography>Servicio puerta a puerta desde alojamiento o aeropuerto a destino</Typography>
                    </Box>
                    <Box className="iconBox">
                        <img src={icon3} />
                        <Typography fontWeight="600">CANCELACIÓN GRATUITA</Typography>
                        <Typography>Cancelación gratuita con 24 horas de antelacion</Typography>
                    </Box>
                    <Box className="iconBox">
                        <img src={icon4} />
                        <Typography fontWeight="600">ATENCIÓN 24/7</Typography>
                        <Typography>Servicio de atención 24 horas los 365 días del año</Typography>
                    </Box>
                    <Box className="iconBox">
                        <img src={icon5} />
                        <Typography fontWeight="600">PAGO SEGURO</Typography>
                        <Typography>Pasarela de pago online 100% segura y confiable</Typography>
                    </Box>
                </Box>
                <Divider sx={{ mb: "30px" }} />
                <Box sx={{ display: "flex" }}>
                    <Box width="50%" className="colBox">
                        <Typography fontSize="22px" fontWeight="600">Colaborador  de</Typography>
                    </Box>
                    <Box width="50%" textAlign="left" sx={{ padding: "10px" }}>
                        <img src={puylogo} width="30%" />
                    </Box>
                </Box>
                <Divider sx={{ mt: "30px", mb: "50px" }} />
                <a className="reservBtn">RESERVAR</a>
                <Box sx={{ mt: "50px", mb: "50px" }}>
                    <Typography fontSize="51px" fontWeight="700">Vehículos VTC Toledo y Puy du Fou España</Typography>
                    <Box sx={{ display: "flex" }}>
                        <Box className="cardBox">
                            <img src={card1} width="100%" height="250px" />
                            <Typography fontWeight="600" padding="20px">Somos especialistas en traslados en vehículos con conductor a VTC Toledo</Typography>
                            <Typography sx={{ textAlign: "justify" }}>Alquiler de coches con conductor a VTC Toledo y Puy du Fou. Te ayudamos como llegar a VTC Toledo. Nuestros vehículos cuentan con todas las comodidades y el confort necesario para ti y los tuyos.  Te ofrecemos coches y alquiler de furgonetas con conductor, minivan y minibuses privados con conductor a VTC Toledo. </Typography>
                        </Box>
                        <Box className="cardBox">
                            <img src={card2} width="100%" height="250px" />
                            <Typography fontWeight="600" padding="20px">Alquiler de coches con conductor al espectacular parque Puy du Fou</Typography>
                            <Typography sx={{ textAlign: "justify" }}>Conocemos los accesos al parque, todos los horarios Puy du Fou, su funcionamiento, localizaciones de descarga y recogida de clientes. Expertos en como ir y como llegar a Puy du Fou. Transfers directos desde Madrid a Puy du Fou y transfer desde  VTC Toledo centro a Puy du Fou.</Typography>
                        </Box>
                        <Box className="cardBox">
                            <img src={card3} width="100%" height="250px" />
                            <Typography fontWeight="600" padding="20px">Alquiler de vehículos con chófer a Puy du Fou</Typography>
                            <Typography sx={{ textAlign: "justify" }}>Traslado en vehículos con conductor a Puy du Fou. Te llevamos directamente al recién galardonado mejor espectáculo del mundo en VTC Toledo.
                                Podrás disfrutar del parque Puy du Fou y regresar a Madrid en el mismo día, o si lo deseas podrás ir en coche con conductor de VTC Toledo a Puy du Fou. </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Box width="70%" padding="10px">
                            <img src={card4} width="100%" height="400px" />
                            <Typography fontWeight="600" padding="20px">STe llevamos a VTC Toledo desde tu hotel, empresa o domicilio</Typography>
                            <Typography sx={{ textAlign: "justify" }}>Traslados VIP de ida y vuelta a VTC Toledo. También ofrecemos servicio con disposición de vehículos por horas. Disponible para grupos. Tambien furgonetas con conductor a VTC Toledo y Puy du Fou. Además realizamos traslados de VTC Toledo a Madrid en coche con conductor. </Typography>
                        </Box>
                        <Box width="30%" padding="10px">
                            <img src={card5} width="100%" height="200px" />
                            <Typography fontWeight="600" padding="20px">Transfer directo desde y hacia el aeropuerto de Madrid</Typography>
                            <Typography sx={{ textAlign: "justify" }}>Te recogemos en el aeropuerto, solo tienes que seleccionar la fecha y hora de recogida. Servicios aeropuerto a VTC Toledo y aeropuerto Madrid.<br /><br />
                                También realizamos servicios Atocha VTC Toledo y Chamartín VTC Toledo en coche con conductor.<br /><br />
                                Igualmente hacemos traslados de VTC Toledo a Madrid en coche con conductor. </Typography>
                        </Box>
                    </Box>
                </Box>
                <a className="reservBtn">RESERVAR</a>
                <Box sx={{ mt: "100px" }}>
                    <Typography fontSize="29px" fontWeight="600">Empresas que confían en nuestros vehículos y profesionales</Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
                        <Divider className="line" />
                    </Box>

                    <img src={brand} width="100%" />
                </Box>
                <Box sx={{ mt: "100px", mb: "50px" }}>
                    <Typography fontSize="29px" fontWeight="600">Preguntas frecuentes</Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
                        <Divider className="line" />
                    </Box>
                    <Box sx={{ mt: "50px" }}>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#007bff">¿Cuánto se tarda en coche con conductor de Madrid a VTC Toledo?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    El tiempo aproximado es de 50 minutos con un tráfico fluido sin complicaciones.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#007bff">¿Cuánto tiempo tarda el traslado de Madrid a Puy du Fou?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    El tiempo aproximado es de 50 a 60 minutos con un tráfico fluido.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#007bff">¿Con cuánta antelación puedo reservar el traslado a VTC Toledo?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Cuanto antes realices la reserva antes podremos planificar tu traslado, pero basta con que nos contactes al menos con 6 horas de antelación.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#007bff">¿Cuánto tiempo me puede esperar el conductor?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nuestro conductor podrá esperar hasta 15 minutos de cortesía para recogidas en hoteles, empresas, apartamentos, domicilio y hasta 30 minutos en aeropuertos, estaciones y parque Puy du Fou en VTC Toledo.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#007bff">¿Con cuánto tiempo puedo cancelar la reserva?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Podrás cancelar la reserva sin gastos, siempre que la cancelación se produzca con más de 24 horas de antelación.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#007bff">¿Una vez cancelada la reserva puedo recuperar el dinero?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Recuperarás el 100% de la reserva siempre que la cancelación se produzca antes de 24 horas. La devolución del importe se realizará a la misma tarjeta bancaria a la que se realizó el cargo de la reserva.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#007bff">¿Qué hago si no localizo a mi conductor?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Deberás llamar al teléfono móvil proporcionado en la confirmación de la reserva, o bien llamar a nuestro servicio de atención 24 horas que figura en nuestra web.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#007bff">¿Cómo localizar a mi conductor en caso de recogida en el parque Puy du Fou en VTC Toledo?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    El conductor esperará en la zona habilitada para vehículos de servicio público del aparcamiento de Puy du Fou. Nuestros coches y furgonetas suelen ser marca Mercedes de color negro. El propio conductor le llamará al teléfono facilitado en la reserva en caso de no localizarle a la salida de recinto a la hora pactada.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#007bff">Cómo llegar a Puy du Fou</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nuestros conductores conocen la ubicación y accesos al parque Puy du Fou. Nuestro chófer le dejará o recogerá en su caso, en la puerta principal de acceso que se encuentra en el parking de Puy du Fou. Nuestros conductores utilizan la autovía A-42 y enlazan con la A-40 y la CM-40.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#007bff">Cómo llegar a VTC Toledo</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Todos nuestros vehículos utilizan la autovía A-42 Madrid-VTC Toledo con llegada directa en 50 minutos.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
                <a className="reservBtn">RESERVAR</a>
                <Box sx={{ mt: "100px", display: "flex", justifyContent: "center" }}>
                    <img src={facebook} />
                    <img src={twitter} />
                    <img src={youtube} />
                </Box>
            </Container>
            <Footer />
        </>
    );
}