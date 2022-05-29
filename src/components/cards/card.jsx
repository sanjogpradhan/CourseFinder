import React from 'react';
import Card from '@mui/material/Card';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import './card.css';


export default function newCard(props){
    return(
        <Grid item xs={12} sm={6} md={4} >
            <Card >
                <CardContent 
                sx={{'&:hover': {
                backgroundColor: '#E5DCC3',
                },
                //whiteSpace: "noWrap",
                maxWidth: "380px",
                minHeight:"250px",
                }}>
                <div className='thisThat'>
                    <div>
                        <Grid container justifyContent="space-around">
                        <Grid item>
                            <Typography sx={{fontFamily: "Source Code Pro, monospace"}}>{props["Course Id"]}</Typography>
                        </Grid>
                        <Grid item >
                            <div className='dateItem'>
                            {<CalendarTodayIcon fontSize="small"/>}
                            <Typography float="right">{props["Next Session Date"]?props["Next Session Date"]:"NA"}</Typography>
                            </div>
                        </Grid>
                    </Grid>
                    </div> 
                    <div className='courseContainer'>
                        <div >
                            <Typography
                                variant='subtitle1'
                                sx={{
                                    color: "grey"
                                }}
                            >
                                    Provider
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold"
                                }}
                            >
                                {(props["Provider"])?props["Provider"]:"NA"}
                            </Typography>
                        </div>
                        <div className='item'>
                            <Typography
                                    variant='subtitle1'
                                    sx={{
                                        color: "grey",
                                        maxWidth: '100%',
                                    }}
                                >
                                    Course Name
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "red",
                                    fontWeight: "bold",
                                    maxWidth: '100%',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {props["Course Name"]}
                            </Typography>
                        </div>
                    </div>
                    <div className='item'>
                        <Typography
                            variant='subtitle1'
                            sx={{
                                color: "grey"
                            }}
                        >
                            Universities/Institutions
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            noWrap
                            sx={{
                                color: "black",
                                fontWeight: "bold",
                                maxWidth:"100%"
                            }}
                        >
                            {props["Universities/Institutions"]?props["Universities/Institutions"]:"NA"}
                        </Typography>
                    </div>
                    <div className="subjectContainer">
                        <div className='item'>
                            <Typography
                                variant='subtitle1'
                                sx={{
                                    color: "grey",
                                    maxWidth: "100%"
                                }}
                            >
                            Parent Subject
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                noWrap
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    maxWidth: '100%',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                            {props["Parent Subject"]}
                            </Typography>
                        </div>
                        <div className='item'>
                            <Typography
                                variant='subtitle1'
                                sx={{
                                    color: "grey"
                                }}
                            >
                            Child Subject
                        </Typography>
                        <Typography
                                variant="subtitle1"
                                noWrap
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    maxWidth: '100%',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                                >
                                {props["Child Subject"]?props["Child Subject"]:"NA"}
                        </Typography>
                        </div>
                    </div>
                </div>
                </CardContent>       
            </Card>
        </Grid>
    );
}

