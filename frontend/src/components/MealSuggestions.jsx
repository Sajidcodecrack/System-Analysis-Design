import React from 'react';
import ReactMarkdown from 'react-markdown';

const MealSuggestions = ({ suggestions }) => {
  // Split suggestions into an array assuming they are separated by newlines
  const suggestionList = suggestions.split('\n').filter(item => item.trim() !== '');

  return (
    <div className="my-5" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', minHeight: '100vh' }}>
      <h3
        className="text-center mb-5 fw-bold"
        style={{
          color: '#2c3e50',
          fontSize: '2rem',
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.1)',
        }}
      >
        Your Personalized Meal Suggestions
      </h3>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div
              className="card border-0"
              style={{
                background: '#ffffff',
                borderRadius: '15px',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
              }}
            >
              <div className="card-body p-4">
                <div className="meal-suggestions">
                  {suggestionList.length > 0 ? (
                    <ul className="list-group list-group-flush">
                      {suggestionList.map((suggestion, index) => (
                        <li
                          key={index}
                          className="list-group-item mb-3 rounded-3 p-3"
                          style={{
                            background: `linear-gradient(90deg, #e3f2fd ${index % 2 === 0 ? '10%' : '90%'}, #bbdefb 100%)`,
                            border: '1px solid #e0e0e0',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'pointer',
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          <div
                            className="d-flex align-items-center"
                            style={{ color: '#1a3c34', fontSize: '1.1rem' }}
                          >
                            <span
                              className="me-3"
                              style={{
                                display: 'inline-block',
                                width: '30px',
                                height: '30px',
                                backgroundColor: '#4caf50',
                                color: '#fff',
                                borderRadius: '50%',
                                textAlign: 'center',
                                lineHeight: '30px',
                                fontWeight: 'bold',
                              }}
                            >
                              {index + 1}
                            </span>
                            <ReactMarkdown>{suggestion}</ReactMarkdown>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p
                      className="text-center"
                      style={{ color: '#7f8c8d', fontStyle: 'italic', fontSize: '1.2rem' }}
                    >
                      No suggestions available yet!
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealSuggestions;