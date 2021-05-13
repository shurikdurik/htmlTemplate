import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import axios from 'axios';

import './EditTemplate.css';

function EditTemplate() {
  const fontSizes = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  const item = useSelector(({ editTemplate }) => editTemplate.selectedItem);
  const [selectedElement, setSelectedElement] = useState(null);
  const [text, setText] = useState('');
  const [size, setSize] = useState('');
  const input = useRef(null);
  const select = useRef(null);

  if (item.length === 0) {
    <Redirect to="/" />;
  }

  const handleApply = (e) => {
    e.preventDefault();
    selectedElement.innerText = text;
    selectedElement.style.fontSize = size + 'px';
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

  const handleSave = () => {
    const fullHtml = document.querySelector('.container').firstChild;
    axios
      .patch(`http://localhost:3001/templates/${item.id}`, {
        template: fullHtml.outerHTML,
        modified: new Date(),
      })
      .then((res) => console.log(res));
  };

  return (
    <>
      <div className="greeting">
        <h3>Please click on text below you want to change</h3>
      </div>
      {item.template ? (
        <div
          className="container"
          onClick={handleTemplate}
          dangerouslySetInnerHTML={{ __html: item.template }}></div>
      ) : (
        <Redirect to="/" />
      )}
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
              {fontSizes.map((size, index) => (
                <option key={index}>{size}</option>
              ))}
            </select>
          </label>

          <input type="submit" value="Apply" />
          <button onClick={handleSave}>Save</button>
        </form>
      </div>
      <div className="link">
        <Link to="/">Back to List</Link>
      </div>
    </>
  );
}

export default EditTemplate;
