import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ success: null, message: '' });
  const [buttonText, setButtonText] = useState("Send");

  useEffect(() => {
    if (status.success) {
      clearFields();
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          firstName: "",  // Replace with actual data
          lastName: "",   // Replace with actual data
          email: email,
          message: "",    // Replace with actual data
          phone: ""       // Replace with actual data
        }),
      });
      let result = await response.json();
      console.log('Response:', result);  // Log response for debugging
      if (response.ok) {
        setStatus({ success: true, message: 'Message sent successfully' });
      } else {
        setStatus({ success: false, message: result.message || 'Something went wrong, please try again later.' });
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({ success: false, message: 'Network error, please try again later.' });
    } finally {
      setButtonText("Send");
      clearFields();
    }
  };
  

  const clearFields = () => {
    setEmail('');
  };

  
};
