import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './EditTemplate.css';

function EditTemplate() {
  const item = useSelector(({ editTemplate }) => editTemplate.selectedItem);
  const [selectedElement, setSelectedElement] = useState(null);
  const [text, setText] = useState('');
  const input = useRef(null);

  const handleApply = (e) => {
    e.preventDefault();
    selectedElement.innerText = text;
  };

  const handleTemplate = (e) => {
    e.preventDefault();
    setSelectedElement(e.target);
    input.current.value = e.target.innerText;
  };

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  return (
    <>
      <div
        className="Container"
        onClick={handleTemplate}
        dangerouslySetInnerHTML={{ __html: item.template }}></div>
      <div className="inputs">
        <form onSubmit={handleApply}>
          <label>
            You can make your changes here:
            <input
              onChange={handleChange}
              type="text"
              ref={input}
              placeholder="Click on any text"
            />
          </label>

          <input type="submit" value="Apply" />
        </form>
      </div>
      <Link to="/">Back to List</Link>
    </>
  );
}

export default EditTemplate;
