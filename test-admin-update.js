import axios from 'axios';

const API_URL = "http://localhost:21000/api/v1/admin";

async function testUpdate() {
    try {
        console.log("Updating admin 1...");
        const res = await axios.patch(`${API_URL}/1`, { email: "updated_by_test@admin.com" });
        console.log("Update status:", res.status);
        console.log("Update data:", res.data);
    } catch (e) {
        console.error("Update failed:", e.message);
        if (e.response) {
            console.error("Response data:", e.response.data);
            console.error("Response status:", e.response.status);
        }
    }
}

testUpdate();
