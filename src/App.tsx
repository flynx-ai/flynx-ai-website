import React, { useState, useEffect } from 'react';
import { ArrowDownCircle, Twitter, Github } from 'lucide-react';

const App: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const animatedTexts = [
    "AI-Powered Research",
    "24/7 Market Monitoring",
    "Real-time Analysis",
    "Smart Investment Decisions"
  ];

  // 自动切换文本
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((current) => (current + 1) % animatedTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen bg-black text-white w-screen overflow-hidden"> {/* 添加 w-screen 和 overflow-hidden */}
      <div className="flex flex-col justify-center items-center h-full relative">
        <div className="absolute top-8 left-8 flex items-center gap-2">
        <img 
            src="/lynx-logo.PNG"  // 你的猫形logo图片路径
            alt="Flynx Logo" 
            className="h-8 w-8"  // 调整大小以匹配文字
        />
          <h1 className="text-2xl font-bold">Flynx.ai</h1>
        </div>
        
        <div className="text-center">
          <h2 className="text-6xl font-bold mb-6">
            Redefining Venture Capital <br />with AI
          </h2>
          <p className="text-xl text-gray-400 mb-4">
            Everyone Deserves to Invest in the Future
          </p>
          
          {/* 动态文本区域 */}
          <div className="h-8 overflow-hidden mb-12">
            <div 
              className="transition-all duration-500 ease-in-out"
              style={{ transform: `translateY(-${textIndex * 2}rem)` }}
            >
              {animatedTexts.map((text, i) => (
                <div key={i} className="h-8 text-blue-400">
                  {text}
                </div>
              ))}
            </div>
          </div>
          
          <ArrowDownCircle className="w-10 h-10 mx-auto animate-bounce text-blue-500" />
        </div>

        {/* 社交链接 */}
        <div className="absolute bottom-8 flex gap-6 text-gray-400">
          <a href="https://twitter.com/FlynxAI" className="flex items-center gap-2 hover:text-white transition-colors">
            <Twitter size={20} />
            <span>Twitter</span>
          </a>
          <a href="https://github.com/flynx-ai" className="flex items-center gap-2 hover:text-white transition-colors">
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;