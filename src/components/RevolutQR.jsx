import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const RevolutQR = () => {
    const revolutTopUpUrl = "revolut.me/iuriivcc6"; 
    const revolutTopUpLink = "https://revolut.me/iuriivcc6?amount=10&currency=EUR";

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            {/* URL Link Above QR Code */}
            <a 
                href={revolutTopUpLink} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                    display: "inline-block",
                    marginBottom: "10px",
                    fontSize: "1rem",
                    color: "#00c2ff", // Revolut-blue color
                    textDecoration: "underline"
                }}
            >
                Donate through the Revolut link...
                
            </a>
            <div style={{ display: "inline-block", width: "50vw", maxWidth: "300px" }}>
                <QRCodeCanvas 
                    value={revolutTopUpUrl} 
                    size={256} // Default size
                    level={"H"} 
                    includeMargin={true}
                    style={{ width: "100%", height: "auto" }} // Responsive sizing
                />
            </div>
            <p style={{ color: "white" }}>Scan to donate via Revolut</p>
        </div>
    );
};

export default RevolutQR;