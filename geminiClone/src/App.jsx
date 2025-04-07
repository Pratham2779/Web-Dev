import SearchBar from './Components/SearchBar';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import './App.css'; // Ensure the CSS file is imported
import { useContext, useEffect } from 'react';
import { Context } from './Context/Context';
import { RiGeminiFill } from 'react-icons/ri';

function App() {
  const {
    showResult,
    resultData,
    loading,
    recentPrompt,
    recentChatPrompts,
    setRecentChatPrompts,
  } = useContext(Context);

  // Handle updates to recentChatPrompts based on loading and new prompts
  useEffect(() => {
    if (recentPrompt) {
      setRecentChatPrompts((prevPrompts) => {
        // If loading, add a new prompt to the list
        if (loading) {
          return [
            ...prevPrompts,
            {
              prompt: recentPrompt,
              isLoading: true,
              response: "",
            },
          ];
        }

        // If loading finishes, update the last prompt with the response
        return prevPrompts.map((chat, index) =>
          index === prevPrompts.length - 1
            ? { ...chat, isLoading: false, response: resultData }
            : chat
        );
      });
    }
  }, [recentPrompt, loading, resultData, setRecentChatPrompts]);

  return (
    <div className="App-container">
      <SideBar />
      <div className="chat-container">
        <Header />
        <div className="search-results">
          {!showResult ? (
            <h1>Hello, Prathamesh</h1>
          ) : (
            <div className="result-content-container">
              {recentChatPrompts.map((chat, index) => (
                <div key={index} className="chat-item">
                  
                  

                  {/* User Prompt */}
                  <div className="userQuery">
                    <span className="userPrompt">{chat.prompt}</span>
                  </div>
                  {/* Avatar */}
                  <div className="Avatar-container">
                    <RiGeminiFill
                      className={`Gemini-icon ${
                        chat.isLoading ? "Gemini-icon-active" : ""
                      }`}
                    />
                  </div>
                  
                  {/* Response or Loading Animation */}
                  {chat.isLoading ? (
                    <div className="loader">
                      <hr />
                      <hr />
                      <hr />
                    </div>
                  ) : (
                    <p className='response-final'
                      dangerouslySetInnerHTML={{
                        __html: chat.response,
                      }}
                    ></p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="Input-container">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default App;
