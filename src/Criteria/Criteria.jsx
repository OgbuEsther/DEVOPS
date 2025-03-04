import React from "react";
import "./Criteria.css";

import thumbImage from "../../public/thumb-image.png";

const Criteria = () => {
  return (
    <div className="container">
      <div className="content">
        {/* Left Column: Image */}
        <div className="image-container">
          <img src={thumbImage} alt="Judging Criteria" />
        </div>

        {/* Right Column: Text Content */}
        <div className="text-container">
          <h2 className="heading">Judging Criteria</h2>
          <h3 className="subheading">Key Attributes</h3>
          <p>
            <strong>Innovation and Creativity:</strong> Evaluate the uniqueness
            and creativity of the solution. Consider whether it addresses a
            real-world problem in a novel way or introduces innovative features.
          </p>
          <p>
            <strong>Functionality:</strong> Assess how well the solution works.
            Does it perform its intended functions effectively and without major
            issues? Judges would consider the completeness and robustness of the
            solution.
          </p>
          <p>
            <strong>Impact and Relevance:</strong> Determine the potential
            impact of the solution in the real world. Does it address a
            significant problem, and is it relevant to the target audience?
            Judges would assess the potential social, economic, or environmental
            benefits.
          </p>
          <p>
            <strong>Technical Complexity:</strong> Evaluate the technical
            sophistication of the solution. Judges would consider the complexity
            of the code, the use of advanced technologies or algorithms, and the
            scalability of the solution.
          </p>
          <button className="read-more">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Criteria;
