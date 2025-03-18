import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const RevolutQR = () => {
    // Replace with your actual Revolut top-up link
    const revolutTopUpUrl = "revolut.me/iuriivcc6"; 

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <QRCodeCanvas 
                value={revolutTopUpUrl} 
                size={200} 
                level={"H"} 
                includeMargin={true}
            />
            <p>Scan to donate via Revolut</p>
        </div>
    );
};

export default RevolutQR;