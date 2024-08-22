import { useState } from "react";
import supabaseClient from "../lib/supabaseClient";

const LoginPage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const authResponse = await supabaseClient.auth.signInWithPassword({
            email,
            password
        });

        if(authResponse.error) {
            console.error("login fehlgeschlagen");
            return;
        }
        if (authResponse.data?.user) {
            console.log("login hat geklappt");
        }

    }

    return ( 
        <>

        </>
     );
}
 
export default LoginPage;