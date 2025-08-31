import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import { formContext } from './Wrapper'

const ShowUser = () => {

  const [Users, setUsers] = useContext(formContext)
  console.log(Users);
  


  const HandleDelete = (id) => {
    const filterData = Users.filter((user) => user.id !== id)
    setUsers(filterData)
    toast.error("User Deleted Successfully")
  }

  const renderUsers = () => {
    return Users.map((user, index) => {
      return (
        <div key={user.id} className="flex justify-between p-3 bg-gray-700 items-center rounded-lg mb-2">
          <span>{user.name}</span>
          <span>{user.age}</span>
          <span>{user.email}</span>
          <span className=' py-3 px-5 bg-red-600 text-white rounded-xl cursor-pointer hover:bg-red-500 ' onClick={() => HandleDelete(user.id)}>Delete</span>
        </div>
      );
    });
  };



  return (
    <div className="mt-10  bg-gray-800 p-5 rounded-lg flex items-center flex-col w-[55%]">
      <h1 className="text-3xl font-light"> <span className='text-orange-600'>Users</span> Detail</h1>
      <div className="w-full mt-3 flex-col">
        {renderUsers()}
      </div>
    </div>
  )
}

export default ShowUser
