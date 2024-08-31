import React from "react";
import { Html, Button, Head, Text, Container } from "@react-email/components";

type ThankYouEmailProps = {
  name?: string;
  message: string;
};

const ThankYouEmail = ({ name, message }: ThankYouEmailProps) => {
  return (
    <Html>
      <Head>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .container {
              background-color: #ffffff;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              text-align: center;
              padding-bottom: 20px;
            }
            .heading {
              color: #007291;
              font-size: 24px;
              font-weight: bold;
              margin: 0;
            }
            .body {
              padding-bottom: 20px;
            }
            .paragraph {
              color: #555555;
              font-size: 16px;
              line-height: 24px;
              margin: 0 0 20px 0;
            }
            .blockquote {
              border-left: 4px solid #007291;
              padding-left: 16px;
              color: #666666;
              font-style: italic;
              margin: 20px 0;
            }
            .button-container {
              text-align: center;
              padding-bottom: 20px;
            }
            .footer {
              text-align: center;
              padding-top: 20px;
              border-top: 1px solid #dddddd;
              color: #aaaaaa;
              font-size: 12px;
            }
          `}
        </style>
      </Head>
      <Container className="container">
        <div className="header">
          <Text className="heading">Thank You!</Text>
        </div>

        <div className="body">
          <Text className="paragraph">
            Hey <strong>{name}</strong>,
          </Text>
          <Text className="paragraph">
            Thank you for reaching out! I appreciate your message and will get
            back to you as soon as possible.
          </Text>
          <Text className="paragraph">Here's what you wrote to me:</Text>
          <Text className="blockquote">"{message}"</Text>
        </div>

        <div className="button-container">
          <Button
            href="https://example.com"
            style={{
              background: "#007291",
              color: "#ffffff",
              padding: "12px 20px",
              textDecoration: "none",
              borderRadius: "5px",
              display: "inline-block",
              fontSize: "16px",
              fontWeight: "bold",
            }}>
            Visit My Website
          </Button>
        </div>

        <div className="footer">
          <Text>&copy; 2024 Anton Lokianov</Text>
        </div>
      </Container>
    </Html>
  );
};

export default ThankYouEmail;
