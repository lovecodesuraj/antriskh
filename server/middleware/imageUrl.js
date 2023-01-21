import { google } from "googleapis";

import fs from "fs";
import path from "path";

const CLIENT_ID =
  "807422864210-jrvdd7dprue49k2ojjbd24637shkjg8v.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REFRESH_TOKEN =
  "1//04u07Y-YrPNLBCgYIARAAGAQSNwF-L9Irp6VNIBbnfIaSsBf1kwzPiLJnvZqwFHWGk4TJQqyDW1N8o90CXNEiDgrimqM8UBqQmH0";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});

const __dirname = path.resolve(path.dirname(""));
const filePath = path.join(__dirname, "boss.jpg");
var fileId;
var publicUrl;


//fot uploading and getting url
async function generateUrl(photo) {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: "boss.jpg",
        mimeType: "image/jpg",
         
      },
      media: {
        mimeType: "image/jpg",
        body: fs.createReadStream(photo),
      },
    });

    console.log(response.data);
    fileId = response.data.id;
    generatePublicUrl();

    return publicUrl;

  } catch (error) {
    console.log(error.message);
  }
}

// async function deleteFile(){
//    try{
//       const response=await drive.files.delete({
//        fileId:'132khs3ewREb4X1NB11ssM4RoXxLMp670'
//       })
//       console.log(response.status);
//    }catch(error){
//        console.log(error.message);
//    }
// }
// deleteFile();

async function generatePublicUrl() {
  try {
    await drive.permissions.create({
      fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    const result = await drive.files.get({
      fileId,
      fields: "webViewLink,webContentLink",
    });

    console.log(result.data);
    publicUrl=result.data.webContentLink;
  } catch (error) {
    console.log(error.message);
  }
}

generateUrl();

export default generateUrl;


