import React from "react";
import { Button } from "@mui/material";
function Home({handleLogout}) {
    function handleClickLogout(){
        handleLogout();
    }
    return (
        <div>
            <Button onClick={handleClickLogout}>
                logout
            </Button>
        </div>
    )
}
export default Home;