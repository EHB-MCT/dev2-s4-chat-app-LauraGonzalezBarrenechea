"use strict";

const chat = {
    author: "yourName",
    init() {
    },
    sendMessage() {
    },
    fetchMessages() {
        fetch ("https://dev2chat.onrender.com/messages")
        .then (function (response) {
            return response.json();
        })
        .then (function(messages) {
            console.log (messages);
            document.querySelector("messageContainer").innerHTML = messages(0).message;
        });
    },

    renderMessage(message) {}


}    
chat.init();