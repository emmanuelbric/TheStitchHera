// src/pages/UploadPage/UploadPage.js
import React, { useState } from "react";
import "./UploadPage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { meta } from "../../content_option";

export const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // You can implement the upload logic here, e.g., sending the file to a server
      console.log("File selected for upload:", selectedFile);
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <HelmetProvider>
      <Container className="Upload-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Upload | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Upload Fabric</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row>
          <Col lg="8">
            <Form>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Choose Fabric Image</Form.Label>
                <Form.Control type="file" onChange={handleFileChange} />
              </Form.Group>
              <Button variant="primary" onClick={handleUpload}>
                Upload
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
