import React, { useState } from "react";
import { Send, Lightbulb } from "lucide-react";

const App = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!question.trim()) return;
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      setAnswer(data.answer);
      setQuestion("");
    } catch (err) {
      setAnswer("Something went wrong! Make sure the server is running", err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Lightbulb className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h1 className="text-4xl font-light text-gray-800">
            Explain Like I'm 5
          </h1>
          <p className="text-gray-600 mt-2">Ask anything, get simple answers</p>
        </div>

        {/* Input */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="Why is the sky blue?"
              className="flex-1 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            />
            <button
              onClick={handleSubmit}
              disabled={loading || !question.trim()}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              {loading ? "Thinking..." : "Ask"}
            </button>
          </div>
        </div>

        {/* Answer */}
        {answer && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">{answer}</p>
            </div>
          </div>
        )}

        {/* Sample Questions */}
        {!answer && (
          <div className="text-center">
            <p className="text-gray-500 mb-4">Try asking:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Why is water wet?",
                "How do planes fly?",
                "What is gravity?",
              ].map((q) => (
                <button
                  key={q}
                  onClick={() => setQuestion(q)}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 text-sm"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
