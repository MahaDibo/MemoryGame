import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-center p-4" style={{ backgroundColor: "#f3faff" }}>
      <h1 className="mb-3" style={{ fontFamily: "'Quicksand', sans-serif" }}>
        🌟 Welcome to the Matching Game!
      </h1>

      <img
        src="/images/welcome banner.jpg"
        alt="Matching game intro"
        style={{
          width: "100%",
          maxWidth: "600px",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      />

      <p className="mt-4 fs-5" style={{ fontWeight: 500 }}>
        Train your brain with colorful matching cards.great for kids, adult, and
        grandparents, or anyone who loves fun!
      </p>

      <Button
        variant="primary"
        size="lg"
        className="mt-3"
        onClick={() => navigate("/game")}
      >
        🎮 Start Playing
      </Button>
    </div>
  );
}
