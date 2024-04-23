import { ID } from 'appwrite';
import{account} from '../appwriteconfig'
import React, { createContext,useContext,useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

// made a blank context
const AuthContext=createContext();

export const AuthProvider=({children})=>{

    const navigate=useNavigate();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
//    setLoading(false);
 checkUserStatus()
    }, [])

const loginUser=async({email,password})=>{
  setLoading(true);
    try {
  let res=await account.createEmailPasswordSession(email,password)
  let details=await account.get();
  setUser(details);
    } catch (error) {
        console.log(error);
    }
    setLoading(false);
}
const logoutUser=async()=>{
    await account.deleteSessions('current');
    setUser(null)
}
const registerUser=async({name,email,password1,password2})=>{
    setLoading(true);
    try {
  let res=await account.create(ID.unique(),email,password1,name)

  let response = await account.create(ID.unique(), userInfo.email, userInfo.password1, userInfo.name);

        await account.createEmailPasswordSession(userInfo.email, userInfo.password1)
        let accountDetails = await account.get();
        setUser(accountDetails)
        navigate('/')
    } catch (error) {
  console.log(error);
    }
    setLoading(false);
}
const checkUserStatus=async()=>{

    try {
   let details=await account.get();
   setUser(details)
    } catch (error) {
        console.log(error);
    }
    setLoading(false);
}

const contextData={
    user,loginUser,logoutUser,registerUser
}

return(
    <AuthContext.Provider value={contextData} >
   {loading ?<p>Loading ...</p> :children}
    </AuthContext.Provider>
)
}

// made a hoook so baar baar useContext(authcontext ) ko nahi likhna padega
export const useAuth=()=>{return useContext(AuthContext)}

export default AuthContext;

