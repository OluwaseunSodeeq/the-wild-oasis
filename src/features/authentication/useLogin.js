import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),


    onSuccess: (user) => {
      console.log("Login success:", user);
    
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard", { replace: true });
      toast.success("Login successful! Redirecting to dashboard...");
    },
    onError: (err) => {
      console.error("Login error:", err.message);
      toast.error("Provided email or password are incorrect");
    },

  });
  return { login, isLoading };
}






// // import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useMutation} from "@tanstack/react-query";
// import { login as loginApi } from "../../services/apiAuth";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";

// export function useLogin() {
//   // const queryClient = useQueryClient();
//   const navigate = useNavigate();

//   const { mutate: login, isLoading } = useMutation({
//     mutationFn: ({ email, password }) => loginApi({ email, password }),


//     onSuccess: (user) => {
//       console.log("Login success:", user);
    
//       // queryClient.setQueryData(["user"], user.user);
//       // navigate("/dashboard", { replace: true });
//       toast.success("Login successful! Redirecting to dashboard...");
//       navigate("/dashboard");
//     },
//     onError: (err) => {
//       console.error("Login error:", err.message);
//       toast.error("Provided email or password are incorrect");
//     },
    

//     // onSuccess: (user) => {
//     //   queryClient.setQueryData(["user"], user.user);
//     //   navigate("/dashboard", { replace: true });
//     // },
//     // onError: (err) => {
//     //   console.log("ERROR", err);
//     //   toast.error("Provided email or password are incorrect");
//     // },

//   });
//   // console.log(login, isLoading);
//   return { login, isLoading };
// }
