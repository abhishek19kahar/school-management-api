import { getDB } from "../config/db.js";
import { haversine } from "../utils/distance.js";

// Add School
export const addSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({ error: "Invalid input data" });
  }

  try {
    const db = getDB();
    const [result] = await db.execute(
      "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)",
      [name, address, latitude, longitude]
    );

    res.status(201).json({
      message: "School added successfully",
      id: result.insertId,
    });
  } catch (err) {
    res.status(500).json({ error: `Database error: ${err.message}` });
  }
};

// List Schools by Proximity
export const listSchools = async (req, res) => {
  const { latitude, longitude } = req.query;

  if (isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({ error: "Invalid user coordinates" });
  }

  try {
    const db = getDB();
    const [results] = await db.execute("SELECT * FROM schools");

    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    const schools = results.map((school) => ({
      ...school,
      distance: haversine(userLat, userLon, school.latitude, school.longitude),
    }));

    schools.sort((a, b) => a.distance - b.distance);

    res.json(schools);
  } catch (err) {
    res.status(500).json({ error: `Database error: ${err.message}` });
  }
};
