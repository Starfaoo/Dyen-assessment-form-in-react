import React from "react";

export const Text=(props) => {
    const {type, children, alt, href } = props;

    if (type==="h1") {
        return <h1 style={{...props}}>{children}</h1>
}

if (type==="h2") {
    return <h2 style={{...props}}>{children}</h2>
}

if (type==="a") {
    return <a style={{...props}} alt={alt} href={href}>{children}</a>
}

return(
    <>
    <span style={{...props}}>{children}</span>

    </>
);
}