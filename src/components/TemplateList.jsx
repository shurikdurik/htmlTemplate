import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTemplates } from '../redux/action/templates';

function TemplateList() {
  const dispatch = useDispatch();
  const items = useSelector(({ templates }) => templates.items);

  React.useEffect(() => {
    dispatch(fetchTemplates());
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Template Name</th>
            <th>Last Change</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map((item) => {
              return (
                <tr key={item.id}>
                  <th>{item.name}</th>
                  <th>{item.modified}</th>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default TemplateList;
