const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Message = require("../models/messageModel");
const Chat = require("../models/chatModel");


// const allMessages = asyncHandler(async (req, res) => {
//     try {
//         const messages = await Message.find({ chat: req.params.chatId })
//             .populate("sender", "name pic email")
//             .populate("chat");
//         res.json(messages);
//     } catch (error) {
//         res.status(400);
//         throw new Error(error.message);
//     }
// });


const sendMessage = asyncHandler(async (req, res) => {
    const { content, chatId } = req.body;


    if (!content || !chatId) {
        console.log("Invalid data passed into request");
        return res.sendStatus(400);
    }


    var newMessage = {
        sender: req.user._id,
        content: content,
        chat: chatId,
    };
    console.log(newMessage)
    try {

        var message = await Message.create(newMessage);
    
        message = await (await message.populate("sender", "name pic")).populate({
            path: "chat",
            select: "chat chatName isGroupChat users",
            model: "Chat",
            populate: { path: "users", select: "name pic email", model: "User" }
        });
        

        await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message });
        res.json(message);
    }
    

    catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
})

module.exports = {  sendMessage };

// const asyncHandler = require("express-async-handler");
// const User = require("../models/userModel");
// const Message = require("../models/messageModel");
// const Chat = require("../models/chatModel");


// const allMessages = asyncHandler(async (req, res) => {
//     try {
//         const messages = await Message.find({ chat: req.params.chatId })
//             .populate("sender", "name pic email")
//             .populate("chat");
//         res.json(messages);
//     } catch (error) {
//         res.status(400);
//         throw new Error(error.message);
//     }
// });


// const sendMessage = asyncHandler(async (req, res) => {
//     const { content, chatId } = req.body;


//     if (!content || !chatId) {
//         console.log("Invalid data passed into request");
//         return res.sendStatus(400);
//     }


//     var newMessage = {
//         sender: req.user._id,
//         content: content,
//         chat: chatId,
//     };

//     try {

//         let message = await Message.create({ sender: User._id, content, chat: chatId });

//         message = await (
//             await message.populate("sender", "name profilePicture")
//         ).populate({
//             path: "chat",
//             select: "chatName isGroupChat User",
//             model: "Chat",
//             populate: { path: "User", select: "name email profilePicture", model: "User" },
//         });

//         await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message });

//         res.json(message);
//     } catch (error) {
//         res.status(400);
//         throw new Error(error.message);
//     }
// })

// module.exports = { allMessages, sendMessage };