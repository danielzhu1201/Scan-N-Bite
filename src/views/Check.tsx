import React from "react";

import ComHeader from "../components/ComHeader";
import ComFooter from "../components/ComFooter";
import CheckBody from "../components/TypeBody";

import "./Check.css";

function Check(){
    return (
        <div>
            <ComHeader />
            <CheckBody />
            <ComFooter />
        </div>
    );
}

export default Check; 