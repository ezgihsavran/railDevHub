import { FaRobot, FaCode, FaBrain, FaDatabase, FaCloud } from 'react-icons/fa';
import { SiPytorch, SiTensorflow, SiScikitlearn, SiPython, SiJavascript, SiReact, SiNodedotjs, SiDocker } from 'react-icons/si';
import '../styles/expertise.css';

export default function Expertise() {
  return (
    <div className="expertise-page">
      <section className="hero-section">
        <div className="container">
          <h1>Our Expertise</h1>
          <p className="lead">
            Transforming businesses through cutting-edge AI solutions and expert software engineering.
          </p>
          <div className="hero-gradient-overlay"></div>
        </div>
      </section>

      <section className="ai-section">
        <div className="container">
          <h2>AI & Machine Learning</h2>
          <div className="ai-grid">
            <div className="ai-card">
              <h3><FaBrain /> Deep Learning</h3>
              <p>Advanced neural networks for complex pattern recognition and prediction tasks.</p>
              <div className="ai-features">
                <span className="tech-feature">Neural Networks</span>
                <span className="tech-feature">Computer Vision</span>
                <span className="tech-feature">NLP</span>
              </div>
            </div>
            <div className="ai-card">
              <h3><FaRobot /> Machine Learning</h3>
              <p>Data-driven algorithms for automated decision making and predictions.</p>
              <div className="ai-features">
                <span className="tech-feature">Classification</span>
                <span className="tech-feature">Regression</span>
                <span className="tech-feature">Clustering</span>
              </div>
            </div>
            <div className="ai-card">
              <h3><FaDatabase /> Big Data</h3>
              <p>Scalable solutions for processing and analyzing large datasets.</p>
              <div className="ai-features">
                <span className="tech-feature">Data Mining</span>
                <span className="tech-feature">ETL</span>
                <span className="tech-feature">Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-section">
        <div className="container">
          <h2>Software Engineering</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <FaCode className="tech-icon" />
              <h3>Modern Development</h3>
              <p>Building scalable applications with cutting-edge technologies.</p>
              <div className="tech-features">
                <span className="tech-feature">React</span>
                <span className="tech-feature">Node.js</span>
                <span className="tech-feature">Python</span>
              </div>
            </div>
            <div className="tech-card">
              <FaCloud className="tech-icon" />
              <h3>Cloud Solutions</h3>
              <p>Deploying and managing applications in the cloud.</p>
              <div className="tech-features">
                <span className="tech-feature">AWS</span>
                <span className="tech-feature">Azure</span>
                <span className="tech-feature">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-stack">
        <div className="container">
          <h2>Technology Stack</h2>
          <div className="stack-grid">
            <div className="stack-item">
              <h4>AI & ML</h4>
              <div className="stack-icons">
                <SiPytorch className="stack-icon" title="PyTorch" />
                <SiTensorflow className="stack-icon" title="TensorFlow" />
                <SiScikitlearn className="stack-icon" title="Scikit-learn" />
              </div>
            </div>
            <div className="stack-item">
              <h4>Development</h4>
              <div className="stack-icons">
                <SiPython className="stack-icon" title="Python" />
                <SiJavascript className="stack-icon" title="JavaScript" />
                <SiReact className="stack-icon" title="React" />
                <SiNodedotjs className="stack-icon" title="Node.js" />
              </div>
            </div>
            <div className="stack-item">
              <h4>Infrastructure</h4>
              <div className="stack-icons">
                <SiDocker className="stack-icon" title="Docker" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

