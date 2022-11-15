import React from "react";
import { Button } from "@mui/material";
function Home({handleLogout}) {
    function handleClickLogout(){
        handleLogout();
    }
    return (
        <div>
            <Button variant="contained" color="secondary" onClick={handleClickLogout}>
                Logout
            </Button>
        </div>
    )
}
export default Home;