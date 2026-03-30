import React from 'react';
import './Add.css';

const Add = () => {
  return (
    <div className="add-page-container">
      <h2 className="page-title"></h2>
      
      <div className="add-modal">
        {/* Modal Header */}
        <div className="modal-header">
          <div className="header-title">
            <span className="books-icon">📚</span>
            <h3>Add Study Topic</h3>
          </div>
          <button className="ai-suggestion-btn">AI suggestion topic</button>
        </div>

        {/* Modal Body / Form */}
        <form className="add-form">
          <div className="form-group">
            <label>Module</label>
            <input type="text" placeholder="" />
          </div>

          <div className="form-group">
            <label>Topic</label>
            <input type="text" placeholder="" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Date & Time</label>
              <input type="text" placeholder="" />
            </div>
            <div className="form-group">
              <label>Time</label>
              <input type="text" placeholder="" />
            </div>
          </div>

          {/* Form Actions */}
          <div className="form-actions">
            <button type="button" className="cancel-btn">Cancel</button>
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;