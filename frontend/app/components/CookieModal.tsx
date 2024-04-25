"use client";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "flowbite-react";

export const CookieModal = () => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookieAccepted")) {
      setOpenModal(true);
    }
  }, []);

  const handleCookie = (action: "accept" | "refuse") => () => {
    if (action === "accept") {
      localStorage.setItem("cookieAccepted", "true");
    } else {
      localStorage.setItem("cookieAccepted", "false");
    }
    setOpenModal(false);
  };

  return (
    <>
      <Modal size={"md"} show={openModal} onClose={() => setOpenModal(false)}>
        <div
          style={{
            backgroundColor: "#050505",
            color: "#F1ECE9",
            border: "3px solid #AD6F3D",
          }}
        >
          <Modal.Body>
            <div className="flex flex-col items-center">
              <h2 className={"mb-4 text-2xl"}>Cookies</h2>
              <img
                src="/cookie.png"
                style={{ width: "200px" }}
                className={"mb-4"}
              />
              <p
                className="max-w-sm text-center mb-6"
                style={{ color: "#DBBCA4" }}
              >
                Ce site utilise les cookies afin d’améliorer l’expérience
                utilisateur. Vous pouvez consulter la charte{" "}
                <span className={"underline"}>ici</span>.
              </p>
              <div className="flex items-center gap-8">
                <Button
                  style={{ backgroundColor: "#80002D", color: "3C2214" }}
                  className={"rounded-none"}
                  onClick={handleCookie("refuse")}
                >
                  Refuser
                </Button>
                <Button
                  style={{ backgroundColor: "#DBBCA4", color: "#3C2214" }}
                  className={"rounded-none"}
                  onClick={handleCookie("accept")}
                >
                  Accepter
                </Button>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};
