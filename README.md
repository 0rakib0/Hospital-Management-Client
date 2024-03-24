### Heath Care
Health Care is a Hospital Management System. This website caters to three types of users: Admins, Doctors, and Patients. Upon logging in, users are redirected to their respective dashboards based on their user type. This is a backend-focused web application built using Python/Django. SMTP server is utilized for sending emails. Below are some common features of this project:

#### Admin
* After logging in, the Admin is redirected to the Admin Dashboard.
* Admin can view a list of all patients along with their treatment status, such as "In Treatment" or "Discharged".
* Admin can filter "In Treatment" or "Discharged" data
* Admin can add patients.
* When adding patients, the system automatically creates a patient account and sends an email to the provided email address containing the patient's account email and password.
* Patients can log in to the website using the provided email and password.
* Admin can add doctors.
* When adding doctors, the system automatically creates a doctor account and sends an email to the provided email address containing the doctor's account email and password.
* Doctors can log in to the website using the provided email and password.
* Admin can schedule appointments between doctors and patients.
* Admin can make payments to patients. After successful payment, the web application sends an email to the provided payment email address, including patient information and payment amount.
* Admin can send messages to specific doctors.
* Admin can post notices and view all notices in a tabular format.

#### Doctor
* Doctors can view all appointments related to them.
* Doctor can approve or reject appointments.
* After approving or rejecting appointments, both the admin and the patient related to the appointment can see the updated status, whether it's approved or rejected.
* Doctor can view messages related to them and also see all notices published by the admin.
