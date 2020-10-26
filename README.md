# DeepLearning_FaceRecognition
Automatic Attendance System using Deep Learning Face Recognition (Final Year Project)                            (2020)

PPT Link: https://drive.google.com/file/d/17W6W_f2YuPdCEOaDrEL2E-J9nWvFIAUk/view?usp=sharing

Demo video: https://youtu.be/hDBrBgaV44k

About:
1) Automation of attendance system of a classroom using Pre trained DLIB module (has ResNet-34 n/w as backbone, 68 facial landmarks) for facial features extraction, face_recognition.py (uses Histogram of Oriented Gradients) for face detection & SVM(Support Vector Machine) as a classifier.
2) Training custom dataset of 10 different humans, 40 images each, deep metric learning technique used.
3) Incorporated a functionality to cancel the attendance in the attendance database if a student is not detected in frame for more than 10 minutes.

Pipeline:

Step 1: Face detection in the input image/input videostream/webcam input carried out by HOG (Histogram of Oriented Gradients) mechanism of face_recognition module.

Step 2: Face at different angles rotated, scaled or sheared using DLIB's 68 facial landmarks for better recognition.

Step 3: 128 encodings generated for each input image (128-d vectors) via DLIB. 'Single triplet training'(deep metric learning) used to train images with greater accuracy.

Step 4: Support Vector Machine (SVM) used as a linear classifier to find the person's name in the database with the closest 128-d vectors as of the output

Hurdles:
1) At first I had used machine learning algorithms like Eigenface, Fisherface and even Haarcascades but they gave low accuracy and low F1 Scores
2) Had to do many trial and error with the database as training of database was taking a lot of time and at times the laptop would crash as it only has CPU and no GPU
3) Tried to solve GPU limitation problems by trying out code on google collab but could not take real-time video input from webcam
4) As the model was too heavy(ResNet-34), the real-time video output was with 5-7 secs lag


•	Technologies used: Deep Learning (deep metric learning), Python 3.7.3, OpenCV, transfer learning.

