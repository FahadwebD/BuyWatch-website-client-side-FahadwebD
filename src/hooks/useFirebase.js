import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged ,signOut,updateProfile } from "firebase/auth";


initializeFirebase();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError , setAuthError] = useState('')
    const [admin , setAdmin] = useState(false)
    const auth = getAuth();
    
  const registerUser = (email , password, name, history)=>{
    setIsLoading(true);
      createUserWithEmailAndPassword(auth , email, password)
      .then((userCredential)=>{
        setAuthError('');
        const newUser = {email, displayName:name}
        setUser(newUser)
        saveUser(email , name)
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
        history.replace('/')
      })
      .catch((error)=>{
          
          setAuthError(error.message)
      })
      .finally(()=>setIsLoading(false));
  }


  const loginUser = (email, password , location , history) =>{
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination = location?.state?.from || '/';
      history.replace(destination)
     setAuthError('');
    })
    .catch((error) => {
      setAuthError(error.message)
    })
    .finally(()=>setIsLoading(false));;
  
  }


 
   useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
           
        } else {
            setUser({})
        }
        setIsLoading(false);
        
    });
    return () => unsubscribed;
}, [])


    const saveUser = (email, displayName) =>{

      const user ={email,displayName}
      fetch('http://localhost:5000/users',{
        method:'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
      
      })
      .then()

    }

    useEffect(()=>{
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res=> res.json())
      .then(data => setAdmin(data.admin))
    },[user.email])

  const logout = ()=>{
    setIsLoading(true);
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    })
    .finally(()=> setIsLoading(false));
        
  }

  const [deliveryReport , setDeliveryReport] = useState('Pending');
    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logout,
        deliveryReport,
        setDeliveryReport
    }
}

export default useFirebase;