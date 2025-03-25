// === Navbar Highlight ===
document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav a");
  
    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      link.classList.toggle("text-yellow-400", href === path);
    });
  
    const btn = document.getElementById("explore-btn");
    if (btn) btn.addEventListener("click", () => window.location.href = "ask.html");
  });
  
  // === Chat Handling ===
  const chatInput = document.getElementById("chat-input");
  const chatLog = document.getElementById("chat-log");
  
  if (chatInput && chatLog) {
    chatInput.addEventListener("keydown", async (e) => {
      if (e.key === "Enter" && chatInput.value.trim() !== "") {
        const userMsg = chatInput.value.trim();
        appendMessage("You", userMsg, "user");
        showTypingIndicator();
        await streamLLMResponse(userMsg);
        removeTypingIndicator();
        chatInput.value = "";
      }
    });
  }
  
  function appendMessage(sender, msg, type) {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const wrapper = document.createElement("div");
    const bubble = document.createElement("div");
  
    bubble.className = `
      max-w-[75%] px-4 py-3 rounded-xl text-sm 
      ${type === "user" ? "bg-white/10 self-end text-white" : "bg-yellow-400/10 self-start text-white"}
      animate-fade-in shadow-sm`;
  
    bubble.innerHTML = `
      <div class="text-xs mb-1 ${type === "user" ? "text-gray-400 text-right" : "text-yellow-400"} font-semibold">
        ${sender}
      </div>
      <div>${msg}</div>
      <div class="text-[10px] text-gray-500 mt-1 ${type === "user" ? "text-right" : "text-left"}">${time}</div>`;
  
    wrapper.className = `flex flex-col ${type === "user" ? "items-end" : "items-start"}`;
    wrapper.appendChild(bubble);
    chatLog.appendChild(wrapper);
    chatLog.scrollTop = chatLog.scrollHeight;
  }
  
  function showTypingIndicator() {
    const typing = document.createElement("div");
    typing.id = "typing-indicator";
    typing.className = "text-yellow-400 text-sm italic mb-2 animate-pulse";
    typing.innerText = "Assistant is thinking...";
    chatLog.appendChild(typing);
    chatLog.scrollTop = chatLog.scrollHeight;
  }
  
  function removeTypingIndicator() {
    const typing = document.getElementById("typing-indicator");
    if (typing) typing.remove();
  }
  
  async function streamLLMResponse(userInput) {
    try {
      const response = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "regression-assistant", // your Ollama model name here
          prompt: userInput,
          system: "You are a regression expert who knows the details of Adib's Boston Housing dataset analysis...",
          stream: true
        })
      });
  
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullMessage = "";
      let bubble = null;
  
      // Create response bubble
      bubble = document.createElement("div");
      bubble.className = `max-w-[75%] px-4 py-3 rounded-xl text-sm prose prose-invert bg-yellow-400/10 self-start text-white animate-fade-in shadow-sm`;
      bubble.innerHTML = `<div class="text-xs mb-1 text-yellow-400 font-semibold">Assistant</div><div class="message-body"></div>`;
      const wrapper = document.createElement("div");
      wrapper.className = "flex flex-col items-start";
      wrapper.appendChild(bubble);
      chatLog.appendChild(wrapper);
      const bodyDiv = bubble.querySelector(".message-body");
  
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        const parsed = JSON.parse(chunk.trim().split("\n").pop());
        fullMessage += parsed.response || "";
        bodyDiv.innerHTML = marked.parse(fullMessage);
        chatLog.scrollTop = chatLog.scrollHeight;
      }
    } catch (err) {
      appendMessage("Assistant", "⚠️ Could not connect to the Ollama model.", "bot");
    }
  }  