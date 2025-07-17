import mongoose from "mongoose";
import Student from "../model/studentModel.js";
import bcrypt from "bcryptjs";


export const registerStudent = async(req, res)=>{
    try{

   
    const {name, email,phoneNo,password} = req.body
    // 1. req.body
    // 2. req.params
    // 3. req.query
    if(!name || !email || !phoneNo || !password){
        return res.status(400).json({
            message:"Please fill all the required fields",
            success: false
        })
    }

    if(!email.includes('@' || !email.includes('.'))){
        return res.status(400).json({
            message:"Please enter a valid email",
            success: false
        })
    }
    // check existence in db
    const user = await Student.findOne({email});
    if(user){
        return res.status(400).json({
            message:"User already exists",
            success: false
        })
    }
    const hashedPaswd = await bcrypt.hash(password, 10);

    const newStudent = new Student({
        name, email, phoneNo, password:hashedPaswd
    })
    newStudent.save()
    return res.status(201).json({
        message:"User registered successfully",
        success: true,
        data: newStudent
    })

}
catch(err){
    console.error(err);
    return res.status(500).json({
        message:"Internal server error",
        success: false
    })
}

}
export const getAllStudents = async(req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Please provide email and password",
                success: false
            });
        };
        if (!email.includes('@') || !email.includes('.')) {
            return res.status(400).json({
                message: "Please enter a valid email",
                success: false
            });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}






