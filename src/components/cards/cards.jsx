import React, {useEffect, useState} from 'react'
// import {useSelector} from 'react-redux'
import newCard from './card'
import axios from 'axios'
import { Container,Grid} from '@mui/material';

export default function Cards(){
    const [currentRenderList,setCurrentRenderList]=useState([]);
    //const [currentPage,setCurrentPage]=useState(1);
    //const [cardsPerPage,setCardsPerPage]=useState(6);
    //const courselist= useSelector(state=>state.courselist)
    //const indexofLastPost = currentPage*cardsPerPage;
    //const indexofFirstPost= indexofLastPost-cardsPerPage;
    //const currentRenderList=courselist.slice(indexofFirstPost,indexofLastPost)
    //currentRenderList.map(element=>bargraphData(element["Parent Subject"],element["Universities/Institutions"]))
    useEffect(()=>{
        axios.get('https://nut-case.s3.amazonaws.com/coursessc.json')
        .then(response=>{
            const courseData= response.data
            setCurrentRenderList(courseData.slice(0,50))
            //dispatch(fetchCourseDataSuccess(courseData.slice(0,50)))
        })
        .catch(error=>{
            const errorMsg=error.message
            //dispatch(fetchCourseDataFailure(errorMsg))
        })
    },[])
    return(
        <Container sx={{margin: '250px auto 0 auto'}}>
            <Grid container spacing={3}>
                {currentRenderList.map(element=>newCard(element))}
            </Grid>    
        </Container>
        )

}