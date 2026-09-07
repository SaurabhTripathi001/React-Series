import React from 'react'
import {useParams} from 'react-router-dom'

const CourseDetail = () => {
    //it is basically used to written the parameter that is passed inside URL in the form of object
    //Recieving from here then passing value of params that is stored in params.id to h1 tag
    const params = useParams();
    console.log(params.id);
  return (
    <div>
        <h1>{params.id}</h1>
    </div>
  )
}

export default CourseDetail