const { axiosInstance } = require("./axio")

const sendMessage = (messageObj, messageText) =>{
    return axiosInstance.get("sendMessage", {
        chat_id: messageObj.chat.id,
        text: messageText,
    })
}

const handleMessage = (messageObj) =>{
    const messageText = messageObj.text || "";

    if(messageText.charAt(0) === "/"){
        const command = messageText.substr(1);
        switch (command) {
            case "start":
                return sendMessage(
                    messageObj,
                    "Hi, how should i help you"
                )
            default: 
            return sendMessage(
                messageObj,
                "Command not found"
            )
        }

    } else{
        return sendMessage(messageObj, messageText)
    }
}

module.exports = {handleMessage};