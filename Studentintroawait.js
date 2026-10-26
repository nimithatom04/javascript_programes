
const studentDetails = () => {
    return new Promise((resolve, reject) => {
        console.log("Student Introduction Started")
        resolve("Hello! My name is Nimitha. I am learning JavaScript.")
    });
};

const introduction = async () => {
    const result = await studentDetails()
    console.log(result)
};

introduction()
