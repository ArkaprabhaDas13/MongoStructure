class TodoData{
    constructor(obj){
        this.taskId = obj.taskId;
        this.taskName = obj.taskName;
        this.taskDesc = obj.taskDesc;
        this.isActive = obj.isActive;
    }
}

module.exports = TodoData;