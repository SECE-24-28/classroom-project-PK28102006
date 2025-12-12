import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminComponent = () => {
    const [admins, setAdmins] = useState([]);
    const [currentAdmin, setCurrentAdmin] = useState(null);
    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        mobileNumber: "",
        password: ""
    });
    const [status, setStatus] = useState("");

    const API_URL = "http://localhost:22000/api/v1/admin";

    // 1. getAllAdminDetails / getAllAdmins
    const getAllAdminDetails = async () => {
        try {
            const response = await axios.get(`${API_URL}/getAdmins`);
            setAdmins(response.data.data);
            setStatus("Fetched all admins");
        } catch (error) {
            console.error("Error fetching admins:", error);
            setStatus("Error fetching admins");
        }
    };

    const getAllAdmins = getAllAdminDetails;

    // 2. adminRegister / createAdmin
    const adminRegister = async (e) => {
        if(e) e.preventDefault();
        try {
            await axios.post(`${API_URL}/register`, formData);
            setStatus("Admin Registered Successfully");
            getAllAdminDetails();
            setFormData({ firstName: "", email: "", mobileNumber: "", password: "" });
        } catch (error) {
            console.error("Error registering admin:", error);
            setStatus("Error registering admin: " + (error.response?.data?.message || error.message));
        }
    };

    const createAdmin = adminRegister;

    // 3. createManyAdmins
    const createManyAdmins = async () => {
        const dummyAdmins = [
            { firstName: "Admin One", email: "one@admin.com", mobileNumber: "1111111111", password: "123" },
            { firstName: "Admin Two", email: "two@admin.com", mobileNumber: "2222222222", password: "123" }
        ];

        try {
            setStatus("Creating many admins...");
            await axios.post(`${API_URL}/createManyAdmins`, { details: dummyAdmins });
            setStatus("Created multiple admins successfully");
            getAllAdminDetails();
        } catch (error) {
            console.error("Error creating many admins:", error);
            setStatus("Error creating many admins");
        }
    };

    // 4. getAdminDetails (Single)
    const getAdminDetails = async (id) => {
        try {
            const response = await axios.get(`${API_URL}/getAdminDetails/${id}`);
            setCurrentAdmin(response.data);
            setStatus(`Fetched details for Admin ID: ${id}`);
        } catch (error) {
            console.error("Error fetching admin details:", error);
            setStatus("Error fetching admin details");
        }
    };

    // 5. updateAdminEmail
    const updateAdminEmail = async (name, newEmail) => {
        if (!newEmail) return;
        try {
            await axios.put(`${API_URL}/modifyAdminMail`, { name: name, email: newEmail });
            setStatus(`Updated email for Admin: ${name}`);
            getAllAdminDetails();
        } catch (error) {
            console.error("Error updating admin email:", error);
            setStatus("Error updating admin email");
        }
    };

    useEffect(() => {
        getAllAdminDetails();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2>Admin Management</h2>
            <p>Status: <strong>{status}</strong></p>

            <div style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
                <h3>Register New Admin</h3>
                <form onSubmit={adminRegister}>
                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required style={{ marginRight: "10px" }} />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={{ marginRight: "10px" }} />
                    <input type="text" name="mobileNumber" placeholder="Mobile Number" value={formData.mobileNumber} onChange={handleChange} required style={{ marginRight: "10px" }} />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required style={{ marginRight: "10px" }} />
                    <button type="submit">Admin Register</button>
                </form>
                <br />
                <button onClick={createManyAdmins}>Create Many Admins (Batch)</button>
            </div>

            <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ flex: 1 }}>
                    <h3>All Admins</h3>
                    <button onClick={getAllAdmins}>Refresh List</button>
                    <ul>
                        {admins.map((admin, index) => (
                            <li key={admin._id || index} style={{ marginBottom: "5px" }}>
                                <strong>{admin.firstName}</strong> ({admin.email})
                                <button onClick={() => getAdminDetails(admin._id)} style={{ marginLeft: "10px", fontSize: "0.8em" }}>View Details</button>
                                <button onClick={() => { const newEmail = prompt("Enter new email:", admin.email); if (newEmail) updateAdminEmail(admin.firstName, newEmail); }} style={{ marginLeft: "5px", fontSize: "0.8em" }}>Update Email</button>
                            </li>
                        ))}
                    </ul>
                </div>
                 <div style={{ flex: 1, borderLeft: "1px solid #ccc", paddingLeft: "10px" }}>
                    <h3>Current Admin Details</h3>
                    {currentAdmin ? (
                        <div>
                            <p><strong>ID:</strong> {currentAdmin._id}</p>
                            <p><strong>Name:</strong> {currentAdmin.firstName}</p>
                            <p><strong>Email:</strong> {currentAdmin.email}</p>
                        </div>
                    ) : (
                        <p>Select an admin to view details.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminComponent;