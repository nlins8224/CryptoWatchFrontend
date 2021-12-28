import React from "react";

export default interface IRenderText {
    text: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined
}