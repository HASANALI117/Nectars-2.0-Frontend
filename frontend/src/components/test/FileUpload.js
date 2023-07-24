import React, { useState } from "react";
import AWS from "aws-sdk";

const S3Uploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    try {
      setUploading(true);

      // Configure your AWS credentials here
      AWS.config.update({
        accessKeyId: "ASIAZ55AM5YJUCLKJNZC",
        secretAccessKey: "RbrYHkJ9B2Eyoq9xnfjEMTPeNvnxeqXPL9kmEDOb",
        sessionToken:
          "IQoJb3JpZ2luX2VjEEAaCm1lLXNvdXRoLTEiRjBEAiAR2q2YIVAa4SYBjXuQ/hHwy45hgkhdutjOol/WQ5pv7gIgCJ2nsTz30ccCmXIaYwIh2IF0Xfo/cgzxudk/OO6MJq4q6AIIHBAAGgw2ODI2OTkzMjA4NTEiDEzPTaSa/voRxtAwfSrFAkpooYClQnkYwD4A/TuJRwqAhk7w2ewFz4a/v84afvLOYVXyRicKh58+u8zYTU6md1H8U7D/5+N07gy5qmY83rZNzj6hvfv4Dz7hixjAQmOSDutywMKfAZNQv97LyzOdamBb7UjU2eUezdlBDSoxCyvt+9bNnUJW33u7EviLkTbOT/vP5JJt/3EwVY5Yp+hYyG1sm4Ckg7bgfndcZgL19nI1J9+wEKXSDbvVQAyeY+oSToouExkNzyR9vh38My/6KPdCDVSR5QS9O/0Vdh6Cd/iYE84WyVQt5bYj5HUNB76esf11AGoGUpwnOQoW83k7wkDdHASpAQ8dKWRMmnt7p/DSOuKSnK83HQebdv/dYvkimVYF4xtgyWH9sGnK4TbbJ5kG4co0+9ZKFIqA83pxI3kwvMNBnpDnRKWtmd/aYGF9cOVd7+Yw5ZP7pQY6qAE2z/XynhvctuWNMJe4Tv5FHDH1tDYJFO38U7y+1ZAV1ZgSO+k8Z/evybGKX3bMErWYSq259U1ck11sL48/0zIvICZ3yCRrhVgJU7sIr406m6Q1/T0QSDQGC3rOk8DSmDVY9RPuyA0/p6YEyJ2F9BAen87jAtlSF4kDBmKlyQwK0OYIaCc0u1lOdRhLko5fW8VaavMN/nPIGlRct3rEA5jNy/afYUq8hTE=",
        region: "me-south-1",
      });

      const s3 = new AWS.S3();
      const params = {
        Bucket: "anispace",
        Key: selectedFile.name,
        Body: selectedFile,
        ACL: "public-read",
      };

      const data = await s3.upload(params).promise();

      const publicUrl = data.Location;
      setImageUrl(publicUrl); // Save the public URL to the state

      alert("File uploaded successfully!");
      setSelectedFile(null);
    } catch (error) {
      console.log(error);
      alert("Error uploading file: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading || !selectedFile}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {imageUrl && (
        <div>
          <p>Public URL: {imageUrl}</p>
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "300px" }} />
        </div>
      )}
    </div>
  );
};

export default S3Uploader;
