const Candidate = require('../models/Candidate');


const addCandidate = async (req, res) => {
    try {
        const { fullname, email, phone, password, age, highestQualification, languages, experience, currentSalary, expectedSalary, country, city, postcode, fullAddress, description, resume, candidateImageUrl, appliedJobs } = req.body;


        

        // Create a new candidate document
        const candidate = new Candidate({
            fullname,
            email,
            phone,
            password,
            age,
            highestQualification,
            languages,
            experience,
            currentSalary,
            expectedSalary,
            country,
            city,
            postcode,
            fullAddress,
            description,
            resume,
            candidateImageUrl,
            appliedJobs,
        });

        // Save the candidate to the database
        await candidate.save();
        res.status(201).json({ message: 'Candidate added successfully', candidate });
    } catch (error) {
        if (error.code === 11000) {
            // Handle duplicate key error for unique fields
            return res.status(400).json({ message: 'Candidate with this email already exists' });
        }
        res.status(500).json({ message: 'Error adding candidate', error });
    }
};

const updateCandidate = async (req, res) => {
    try {
        const candidateId = req.params.id; // Get candidate ID from URL parameters
        const updateData = req.body; // Get update data from request body

        // Find the candidate by ID and update with new data
        const updatedCandidate = await Candidate.findByIdAndUpdate(
            candidateId,
            updateData,
            { new: true, runValidators: true } // Options to return the updated document and run validators
        );

        if (!updatedCandidate) {
            return res.status(404).json({ message: 'Candidate not found' });
        }

        // Respond with the updated candidate details
        res.status(200).json({
            message: 'Candidate updated successfully',
            candidate: updatedCandidate
        });
    } catch (error) {
        res.status(500).json({ message: 'Error updating candidate', error: error.message });
    }
};


module.exports = { addCandidate, updateCandidate };
