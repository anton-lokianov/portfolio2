import { Button, Html, Head, Text, Container } from "@react-email/components";
import * as React from "react";

type ForMeProps = {
  name: string;
  message: string;
  email: string;
};

export default function ForMeEmail({ name, message, email }: ForMeProps) {
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
          <Text className="heading">Message from {name}</Text>
        </div>

        <div className="body">
          <Text className="paragraph">You have received a new message:</Text>
          <Text className="blockquote">"{message}"</Text>
          <Text className="paragraph">
            Please review and respond at your earliest convenience.
          </Text>
        </div>

        <div className="button-container">
          <Button
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Re:%20Your%20Message&body=${encodeURIComponent(
              message
            )}`}
            style={{
              background: "#000",
              color: "#fff",
              padding: "12px 20px",
              textDecoration: "none",
              borderRadius: "5px",
              display: "inline-block",
              fontSize: "16px",
              fontWeight: "bold",
            }}>
            Reply
          </Button>
        </div>

        <div className="footer">
          <Text>&copy; Anton Lokianov</Text>
        </div>
      </Container>
    </Html>
  );
}
