import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './EditTemplate.css';

function EditTemplate() {
  const fontSizes = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  const item = useSelector(({ editTemplate }) => editTemplate.selectedItem);
  const [selectedElement, setSelectedElement] = useState(null);
  const [text, setText] = useState('');
  const [size, setSize] = useState('');
  const input = useRef(null);
  const select = useRef(null);

  const handleApply = (e) => {
    e.preventDefault();
    selectedElement.innerText = text;
    selectedElement.style.fontSize = size + 'px';
    console.log(size);
  };

  const handleTemplate = (e) => {
    e.preventDefault();
    setSelectedElement(e.target);
    input.current.value = e.target.innerText;
  };

  const handleChangeText = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleChangeSize = (e) => {
    e.preventDefault();
    setSize(e.target.value);
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
            You can change text here:
            <input
              onChange={handleChangeText}
              type="text"
              ref={input}
              placeholder="Click on any text"
            />
          </label>
          <label>
            You can change font size here:
            <select ref={select} onChange={handleChangeSize}>
              {fontSizes && fontSizes.map((size, index) => <option key={index}>{size}</option>)}
            </select>
          </label>

          <input type="submit" value="Apply" />
        </form>
      </div>
      <Link to="/">Back to List</Link>
    </>
  );
}

export default EditTemplate;
