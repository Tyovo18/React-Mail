import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './stories/text.css';
import {Master} from './Master';

const mails = [
    {
        client: 'bulgari',
        projects: ['2023-12', '2024-03']
    },
    {
        client: 'lesechos-events',
        projects: ['2024-08']
    },
    {
        client: 'boursier',
        projects: ['2024']
    }
]

const paths = [];

Object.values(mails).map((item, index) => {
    item.projects.map(project => {
        paths.push({
            path: `/${item.client}/${project}`,
            element: require(`./mailings/${item.client}/${project}/mail`).default
        })
    })
});


const router = createBrowserRouter(paths);

export const App = () => {

    console.log(process.env)
  return (
      <React.Fragment>
          <Master>
              <RouterProvider router={router} />
          </Master>
      </React.Fragment>
  );
};
 

export default App;