const conection = require("../utilities/connection");
let dummyData = [
    {
        taskId: 1,
        taskName: "taskName1",
        taskDesc: "taskDesc1",
        isActive: true
    },
    {
        "taskId": 2,
        "taskName": "taskName2",
        "taskDesc": "taskDesc2",
        "isActive": true
    }
];
exports.todoSetup = () => {
    return conection.getTodoCollection().then((myData) => {
        return myData.deleteMany().then(() => {
            return myData.insertMany(dummyData).then((data) => {
                if (data) {
                    return "Connection established and database creation successfull !!"
                }
                else return "Database failed !!"
            })
        })
    })
}