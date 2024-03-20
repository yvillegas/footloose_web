import admin from "firebase-admin";

export default admin.initializeApp({
  credential: admin.credential.cert({
    type: "service_account",
    project_id: "footloseapp",
    private_key_id: "364f90a76ec3eeb675868237f4666b93ec9b7640",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCxHbZWkGcysQ4s\nmWuToQyvhBXJhugLsh8ckabfMC+nt2BfU0fJjzlWiVGEqQCECp+RphH+nmuGt8/u\nIsEmQ15jB87OB5FR57m4I7FU4k3lrIXhZkqZ5s2IsJ9Lm58U2v5fDuePy15NmFJL\nW9ZA+UVwgdTBt2RPqDIMF4vtKYuMx9xP6HdIR1o0YalSpCsSyclx7BKQ46+9Y2Pr\n8z+tJTdbm0JYvVd3fYuYLqzIl1IrOdchyyOcoi9cvbH+M5kDyqc2cW9uyyxpJMzx\nneRQv8CgbkufzXADOcMm0gGRcJnWgskiqJjA59jIKukwrnv9IyvNPvEiycK3UA8i\nZlGzjkapAgMBAAECggEAASqkwN6wQjN555qeDIPwa/2wL+3DC/JvN2zQzxlTIZcM\nHTupIc4copcFJw23HOT4xz+138qjDUVTbZ7FBZf013S9pjpFnNzLIGGVkBZYnuG/\nwvTXQ7Wj2AFrP/r6XTNhvX3xvVk48gx+NhwENBKDcR0LZ3CYVJEa5lK6vYzvmgd3\nw4zEKPcrRayJxh0pplFaA/+tf8Ht2i2Co7Hqf+WuqSblSc948f8c30eOy6ZtrSVx\no/sA2IN4O5EbHl08eM2nDULBt4+3fDqXfC5BIuATioK85zkvq34P37IELa5FT/Pl\nVBAT5fknsQxIM6vZwQF46SONHfW6sZd/kNJP6MZb7wKBgQDbUbwDZREblWf5E2NP\n3F06y+xXKavmhwSBPSuTU1b6EY8CdT4Db4w3zTgPUKdXNnTQhZkmnxUsDoWWxVfM\nxYem7Fp929ixd5GulB1lK/PC33fSJ59Yt/951n5qXZ+mqddohv1fweJt4r2BGRV9\nWjrQf9ADYI3W5wNys22UqhiPkwKBgQDOvQaoNk5WCH+JjHjBhV8QJ5MSsUY6I397\nTzGAgQeKwhLF55PBeAgzzsngrmDArGR7y8q7oBNWT+2RQjVRB4seuqvEa2rkHQw2\nivdV8a31+wMWJ6wt7QHY3wvSf4tgVLhIHZSvis8mVjUSb0SljJTI6rw3+rytmeKG\nrh8ypfmeUwKBgHhFCyiFbOtGdFz3j9eEja+nknR+CqGBWywQQmwpIKJDrLv5VUeH\nDUqwhFSJsyq1Vzved4zhYjflwsZac/p8PBaCuGEahWtUmZQ17yTDBIrSByA80DpT\ntIq44Fwt+VXo/5J3rEytwyDlXWyFN+6k42nhHU4szbuStaZZ1PbYjF13AoGAY3wA\n5Rdk8O+b9+PaBD4a9dolYvxdsAJ/CSadypnMuFAV2phKuPH6+HtNGEqxkmYi4JO7\n1jf8ti82Qg1bPMflgX8Qwy9xu53iz6hlxzzKmrEU1id3Ko5/sg37UWtA9bUvDLz3\nXNXuQyN+3IUgwo1414pl0oZdHykLIgZOSwAls7MCgYEAtytDqcORlk8sAzjcQm2l\nzVrIvSBrGj5802OFXR9Nt68pn7fHo62j+M5Lq8q+XA+q4fMXZOmA/HYq+xhdM2Mz\nRdwCJ9RP2YoNCrJoTj3/tQ6h20+SLInrVPb329bzDDUSSqRvgZJltPMJs+DtkAd3\n06prBlpCSW8piZ6cestxNYs=\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-zotzc@footloseapp.iam.gserviceaccount.com",
    client_id: "111925890836903150671",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zotzc%40footloseapp.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
  }),
});

// export default admin.initializeApp({
//   credential: admin.credential.cert({
//     projectId: "footloseapp",
//     clientEmail: "firebase-adminsdk-zotzc@footloseapp.iam.gserviceaccount.com",
//     private_key_id: "364f90a76ec3eeb675868237f4666b93ec9b7640",
//     private_key:
//       "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCxHbZWkGcysQ4s\nmWuToQyvhBXJhugLsh8ckabfMC+nt2BfU0fJjzlWiVGEqQCECp+RphH+nmuGt8/u\nIsEmQ15jB87OB5FR57m4I7FU4k3lrIXhZkqZ5s2IsJ9Lm58U2v5fDuePy15NmFJL\nW9ZA+UVwgdTBt2RPqDIMF4vtKYuMx9xP6HdIR1o0YalSpCsSyclx7BKQ46+9Y2Pr\n8z+tJTdbm0JYvVd3fYuYLqzIl1IrOdchyyOcoi9cvbH+M5kDyqc2cW9uyyxpJMzx\nneRQv8CgbkufzXADOcMm0gGRcJnWgskiqJjA59jIKukwrnv9IyvNPvEiycK3UA8i\nZlGzjkapAgMBAAECggEAASqkwN6wQjN555qeDIPwa/2wL+3DC/JvN2zQzxlTIZcM\nHTupIc4copcFJw23HOT4xz+138qjDUVTbZ7FBZf013S9pjpFnNzLIGGVkBZYnuG/\nwvTXQ7Wj2AFrP/r6XTNhvX3xvVk48gx+NhwENBKDcR0LZ3CYVJEa5lK6vYzvmgd3\nw4zEKPcrRayJxh0pplFaA/+tf8Ht2i2Co7Hqf+WuqSblSc948f8c30eOy6ZtrSVx\no/sA2IN4O5EbHl08eM2nDULBt4+3fDqXfC5BIuATioK85zkvq34P37IELa5FT/Pl\nVBAT5fknsQxIM6vZwQF46SONHfW6sZd/kNJP6MZb7wKBgQDbUbwDZREblWf5E2NP\n3F06y+xXKavmhwSBPSuTU1b6EY8CdT4Db4w3zTgPUKdXNnTQhZkmnxUsDoWWxVfM\nxYem7Fp929ixd5GulB1lK/PC33fSJ59Yt/951n5qXZ+mqddohv1fweJt4r2BGRV9\nWjrQf9ADYI3W5wNys22UqhiPkwKBgQDOvQaoNk5WCH+JjHjBhV8QJ5MSsUY6I397\nTzGAgQeKwhLF55PBeAgzzsngrmDArGR7y8q7oBNWT+2RQjVRB4seuqvEa2rkHQw2\nivdV8a31+wMWJ6wt7QHY3wvSf4tgVLhIHZSvis8mVjUSb0SljJTI6rw3+rytmeKG\nrh8ypfmeUwKBgHhFCyiFbOtGdFz3j9eEja+nknR+CqGBWywQQmwpIKJDrLv5VUeH\nDUqwhFSJsyq1Vzved4zhYjflwsZac/p8PBaCuGEahWtUmZQ17yTDBIrSByA80DpT\ntIq44Fwt+VXo/5J3rEytwyDlXWyFN+6k42nhHU4szbuStaZZ1PbYjF13AoGAY3wA\n5Rdk8O+b9+PaBD4a9dolYvxdsAJ/CSadypnMuFAV2phKuPH6+HtNGEqxkmYi4JO7\n1jf8ti82Qg1bPMflgX8Qwy9xu53iz6hlxzzKmrEU1id3Ko5/sg37UWtA9bUvDLz3\nXNXuQyN+3IUgwo1414pl0oZdHykLIgZOSwAls7MCgYEAtytDqcORlk8sAzjcQm2l\nzVrIvSBrGj5802OFXR9Nt68pn7fHo62j+M5Lq8q+XA+q4fMXZOmA/HYq+xhdM2Mz\nRdwCJ9RP2YoNCrJoTj3/tQ6h20+SLInrVPb329bzDDUSSqRvgZJltPMJs+DtkAd3\n06prBlpCSW8piZ6cestxNYs=\n-----END PRIVATE KEY-----\n",
//   }),
// });
