import StudentModel from "../model/StudentModel.js";

export const getAllStudent = async (req, res) => {
    try {
      const students = await StudentModel.find().populate('invoices');
      return res.status(200).json({student: students, message: "Data successfully fetched"});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error occured while fetching the student details"});
    }
}

export const createStudent = async (req, res) => {
  try {
    const student = new StudentModel(req.body);
    await student.save();
    return res.status(201).json({ student, message: "Student successfully created" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error occured while creating the student"});
  }
}

export const getStudentById = async (req,res) => {
    try {
        const student = await Student.findById(req.params.id).populate('invoices');
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        return res.status(200).json({ student, message: "Student successfully fetched" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error occurred while fetching the student" });
    }
}

export const updateStudent = async (req, res) => {
    try {
        const student = await StudentModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        return res.status(200).json({ student, message: "Student successfully updated" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error occurred while updating the student" });
    }
};

export const deleteStudent = async (req, res) => {
    try {
        const student = await StudentModel.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        return res.status(200).json({ message: "Student successfully deleted" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error occurred while deleting the student" });
    }
};