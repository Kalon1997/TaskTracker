const Task = require('../models/Task.js')

exports.createTask = async (req, res) => {
    try{
       const {taskname, dueDate } = req.body; 
       if(!taskname || !dueDate || (taskname==="") || (dueDate==="")){
        return res.status(400).json({message: "Fill the fields."})
      }

      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; // Months start at 0!
      let dd = today.getDate();
      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;
      const formattedToday = dd + '-' + mm + '-' + yyyy;


      const day = dueDate.substr(8,2);
      const mon = dueDate.substr(5,2);
      const year = dueDate.substr(0,4);
      const duedateformatted = day + '-' + mon + '-' + year;


       var theTask = {
       taskname : taskname, 
       status : "pending",
       createdAt : formattedToday,
       createdById : req.user._id,
       dueDate :duedateformatted,
      }
       const newTask = await Task.create(theTask);
        res.status(200).json({success:true,
        newTask});
    } catch (err) {
        console.log(err)
        res.status(502).json({ message: 'unknown error' });
    }
}



exports.getAllTasks = async (req, res) => {
    try{
        const PAGE_SIZE = 6;
        const totalTasks= await Task.countDocuments();
        const page = parseInt(req.query.page || "0");

       const allTasks = await Task.find()
       .populate("createdById")
       .limit(PAGE_SIZE)
        .skip(PAGE_SIZE*page);

        res.status(200).json({success:true,
            totalPages: Math.ceil(totalTasks / PAGE_SIZE),
            allTasks});
    } catch (err) {
        console.log(err)
        res.status(502).json({ message: 'unknown error' });
    }
}

exports.changeStatus = async (req, res) => {
    try{
       const {status, id} = req.body
       const t = await Task.findById(id.toString());
       t.status = status;
       await t.save()
        res.status(200).json({success:true,
            t});
    } catch (err) {
        console.log(err)
        res.status(502).json({ message: 'unknown error' });
    }
}


exports.openTask = async (req, res) => {
    try{
       const openedTask = await Task.findById(req.params.id);
        if(!openedTask)
        return res.status(400).json({message: 'Task Not Found!' });
        res.status(200).json({success:true,
            openedTask});
    } catch (err) {
        console.log(err)
        res.status(502).json({ message: 'unknown error' });
    }
}

exports.searchTask = async (req, res) => {
    try{
        var {keywords} = req.body
        var regex = new RegExp(/\W+/gi)
        var keyws = keywords.split(regex).join(' ')
        var keyarr = keyws.split(' ');
        var searchResArray = []
        for(var i =0; i<keyarr.length; i++)
        {
            const g = 'gi'
            var r = new RegExp(`${keyarr[i]}` ,g)
            const obj = await Task.find(
                {
                    taskname : { $in : r}
                }
            )
            if(obj.length !== 0)
            {
                for(var j = 0; j<obj.length; j++)
                searchResArray.push(obj[j])
            }
                
            

        }
        res.status(200).json({success:true, searchResArray})
    }
    catch (err) {
        console.log(err)
        res.status(502).json({ message: 'unknown error' });
    }
}


exports.filter = async (req, res) => {
    try{
        const {s}= req.body;
        const resFilter = await Task.find({
            status : s
        })
        res.status(200).json({success:true, resFilter})
    }
    catch (err) {
        console.log(err)
        res.status(502).json({ message: 'unknown error' });
    }
}

exports.editTask = async (req, res) => {
    try{
    //    const {status, desp, dueDate, id, assignedTo} = req.body
       const {id, status, dueDate} = req.body
       const editedTask = await Task.findById(id.toString());
       if(!editedTask)
            return res.status(200).json({message: 'edited Task not found'})
       editedTask.status = status;
    //    editedTask.desp=desp
       editedTask.dueDate = dueDate,
    //    editedTask.assignedTo = assignedTo
       await editedTask.save()
        res.status(200).json({success:true,
            editedTask});
    } catch (err) {
        console.log(err)
        res.status(502).json({ message: 'unknown error' });
    }
}


exports.addRemark = async (req, res) => {
    try{
       const {remark, id } = req.body
      
       const remarkAddedTask = await Task.findById(id.toString());
       if(!remarkAddedTask)
            return res.status(200).json({message: 'Task not found'})

const obj = {
    remark: remark,
    remarkGiverId: req.user._id
}
        remarkAddedTask.remarks.push(obj)
       await remarkAddedTask.save()
        res.status(200).json({success:true,
            remarkAddedTask});
    } catch (err) {
        console.log(err)
        res.status(502).json({ message: 'unknown error' });
    }
}



exports.getRemarks = async (req, res) => {
    try{
        const id = req.body;
       const tk = await Task.findById(id);
        if(!tk)
        return res.status(400).json({message: 'Task Not Found!' });
        const rks = tk.remarks
        res.status(200).json({success:true,
            rks});
    } catch (err) {
        console.log(err)
        res.status(502).json({ message: 'unknown error' });
    }
}






