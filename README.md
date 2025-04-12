# ai-chatboot
 

<body>

  <h1>🧠 AI Chatbot (with Learning Feature)</h1>

  <p>Yeh ek simple AI chatbot project hai jo continuously seekhta hai. Agar aap koi aisa question puchte ho jo chatbot ne pehle se nahi suna, toh wo aap se uska answer maangta hai — aur jab aap answer de dete ho, toh usko yaad rakh leta hai. Agli baar agar koi wahi question puchta hai, toh chatbot uska sahi jawab de deta hai.</p>

  <h2>📌 Features</h2>
  <ul>
    <li>✅ Known questions ke liye instant reply.</li>
    <li>🤖 Unknown questions ke liye user se answer maangta hai.</li>
    <li>💾 Answer save karta hai future use ke liye (learning).</li>
    <li>🗣️ Text-to-speech feature (voice output).</li>
    <li>⌨️ Text input + 🎤 Microphone input supported.</li>
  </ul>

  <h2>⚙️ How It Works</h2>
  <ol>
    <li><strong>User</strong> chatbot se koi question puchta hai.</li>
    <li>Agar wo question chatbot ke database me already hai, toh wo uska answer bata deta hai.</li>
    <li>Agar question naya hai:
      <ul>
        <li>Chatbot user se uska answer maangta hai.</li>
        <li>User jab answer deta hai, chatbot use database me save kar leta hai.</li>
      </ul>
    </li>
    <li>Next time se chatbot wo answer yaad rakhta hai.</li>
  </ol>

  <h2>🛠️ Tech Stack</h2>
  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>EJS (Templating)</li>
    <li>JavaScript</li>
    <li>JSON file for storing Q&A</li>
    <li>Web Speech API (for voice)</li>
  </ul>

  <h2>🚀 How to Run</h2>
  <pre><code>git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm run dev
node app.js</code></pre>
  <p>Open your browser and go to <code>http://localhost:3000</code></p>

  <h2>📷 Screenshots</h2>
  <p><em>(Add some screenshots or screen recordings here if possible)</em></p>

  <h2>🙌 Contribution</h2>
  <p>Feel free to fork this repo and add more features or improve the UI!</p>

</body>
</html>
