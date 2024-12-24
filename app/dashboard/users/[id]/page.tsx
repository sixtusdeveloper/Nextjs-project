import React from 'react'

const usersDetailPage = ({ params }: { params: { id: string }}) => {
    const id = params.id; //Or const { id } = params;
  return (
    <div>
       <h1 className='text-2xl text-center'>users Detail Page: { id } </h1>
       
    </div>
  )
}

export default usersDetailPage;