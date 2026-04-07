const chatBox = document.querySelector(".chatBox");
const input = document.querySelector(".inputMsg");
const sendBtn = document.querySelector(".sendBtn");
const loading = document.querySelector(".Loading");

function getTime(){
    return new Date().toLocaleTimeString([],{
        hour:"2-digit",
        minute:"2-digit"
    });
}

function addMsg(text,sender){
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message",sender);
    msgDiv.innerHTML =
    `${text} <span class="timestamp">${getTime()}</span>`;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(userText){
    const replies = [
        "Sounds Cool",
        "Good to know",
        "Interesting",
        "Got it!"
    ];

    const randomReply = replies[Math.floor(Math.random() * replies.length)];

    loading.style.display = "block";
    chatBox.appendChild(loading);
    chatBox.scrollTop = chatBox.scrollHeight;
    setTimeout(() => {
        loading.style.display = "none";
        addMsg(randomReply,"bot")
    },1000);
}

function sendMessage(){
    const text = input.value.trim();
    if(text == "")  return;
    addMsg(text,"user");
    input.value="";
    botReply(text);
}

sendBtn.addEventListener("click",sendMessage);

input.addEventListener("keypress", (e) => {
    if(e.key == "Enter"){
        sendMessage();
    }
});