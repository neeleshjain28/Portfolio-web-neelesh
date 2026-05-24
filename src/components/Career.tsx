import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>Self Learning / Personal Projects</h5>
              </div>
              <h3>2026 - Present</h3>
            </div>
            <p>
              Developed machine learning models such as laptop and bike price prediction systems. Performed data preprocessing, feature selection, and model training using Python and Scikit-learn. Focused on improving model accuracy and extracting insights from datasets.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>Self Learning / Personal Projects</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built multiple full stack projects including web applications with user authentication and CRUD operations. Used React, Node.js, Express, and MongoDB. Focused on clean UI, efficient backend, and real-world problem solving.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science Engineering</h4>
                <h5>Laxmi Devi Institute of Engineering and Technology</h5>
              </div>
              <h3>2024 - 2028</h3>
            </div>
            <p>
              Pursuing a B.Tech in Computer Science with a focus on Data Science and Full Stack Development. Gained deep understanding of programming foundations, data structures, algorithms, and practical implementation of ML systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
