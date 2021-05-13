/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTemplates } from '../../redux/action/templates';
import { onTemplate } from '../../redux/action/editTemplate';

import './TemplateList.css';

function TemplateList() {
  const dispatch = useDispatch();
  const items = useSelector(({ templates }) => templates.items);

  React.useEffect(() => {
    dispatch(fetchTemplates());
  }, []);

  const handleTemplate = (item) => {
    dispatch(onTemplate(item));
  };

  return (
    <div>
      <table>
        <thead className="tablehead">
          <tr>
            <th>Template Name</th>
            <th>Last Change</th>
          </tr>
        </thead>
        <tbody className="tablebody">
          {items &&
            items.map((item) => {
              return (
                <tr key={item.id}>
                  <th onClick={() => handleTemplate(item)}>
                    <Link to={`/edit`}>{item.name}</Link>
                  </th>
                  <th>{new Date(item.modified).toDateString()}</th>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default TemplateList;
