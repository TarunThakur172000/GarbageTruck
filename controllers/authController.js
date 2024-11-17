const Candidate = require('../models/Candidate');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Controller to handle login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the candidate exists in the database
        const candidate = await Candidate.findOne({ email });
        if (!candidate) {
            return res.status(404).json({ message: 'Candidate not found' });
        }

       // Validate the password
        // const isPasswordValid = await bcrypt.compare(password, candidate.password);
        // if (!isPasswordValid) {
        //     return res.status(400).json({ message: 'Invalid password' });
        // }


        if(password!=candidate.password){
            return res.status(400).json({ message: 'Invalid password' });
        }

      

        // Send response with candidate details and token
        res.status(200).json({
            message: 'Login successful',
            candidate: {
                id: candidate._id,
                fullName: candidate.fullName,
                email: candidate.email,
                phone: candidate.phone,
                age: candidate.age,
                highestQualification: candidate.highestQualification,
                languages: candidate.languages,
                experience: candidate.experience,
                currentSalary: candidate.currentSalary,
                expectedSalary: candidate.expectedSalary,
                country: candidate.country,
                city: candidate.city,
                postcode: candidate.postcode,
                fullAddress: candidate.fullAddress,
                description: candidate.description,
                resume: candidate.resume,
                candidateImageUrl: candidate.candidateImageUrl,
                appliedJobs: candidate.appliedJobs,
                createdAt: candidate.createdAt,
                updatedAt: candidate.updatedAt
            }
        });
    } catch (error) {
        console.error('Error during login:', error); // Log the error for debugging
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};

module.exports = { login };
