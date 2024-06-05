import { clearAuthError, setAuthError, setUserCredentials } from "@/redux/authSlice";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface IUserCredentails{
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  skills?: string;
}

const useMutate = (url:string) =>{

    const dispatch = useDispatch()
    const navigate = useNavigate()

    return useMutation({
      mutationFn: async(userCredentails: IUserCredentails) =>{
        const response = await fetch(`http://127.0.0.1:8000/api/${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentails),
      });
      console.log(response)
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! Status ${response.status}`);
      }

      return response.json();
    },
    onError: () => {
      dispatch(setAuthError("Email already exists"));
      console.error(" Email already exists" );
    },
    onSuccess: (response) => {
      if(url === 'login'){
      const {user,token} = response.data; 
        dispatch(setUserCredentials({user ,token}))
        dispatch(clearAuthError())
        navigate('/dashboard')
      }
      console.log('Mutation successful:', response);
      navigate('/login')
    },
  });
};

export default useMutate;