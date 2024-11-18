const mongoose = require('mongoose');
const { Schema } = mongoose;

const candidateSchema = new Schema({
    candidate_id: { type: Schema.Types.ObjectId, auto: true },
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Primary key
    phone: { type: String, required: true },
    password: { type: String, required: true },
    
    // Optional fields
    age: { type: Number },
    highestQualification: { type: String },
    languages: [{ type: String }],
    experience: { type: String },
    currentSalary: { type: Number },
    expectedSalary: { type: Number },
    country: { type: String },
    city: { type: String },
    postcode: { type: String },
    fullAddress: { type: String },
    description: { type: String },

    resume: {
        resumeLink1: { type: String },
        resumeLink2: { type: String },
    },
    candidateImageUrl: { type: String },

    // Applied jobs
    appliedJobs: [{ type: Schema.Types.ObjectId, ref: 'Job' }], // Array of Job IDs (foreign keys)
    
}, { timestamps: true }); // Adds createdAt and updatedAt fields automatically

module.exports = mongoose.model('Candidate', candidateSchema);
