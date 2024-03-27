import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import ErrorPage from './components/ErrorPage';
import Contact from './components/Contact';
import EditContact from './components/Edit';
import Index from './components/Index';

import { loader as homeLoader, action as homeAction } from './actions/home';
import {
  loader as contactLoader,
  action as contactAction,
} from './actions/contact';
import { action as editAction } from './actions/edit';
import { action as destroyAction } from './actions/delete';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/gerenciador-contatos"
      element={<Home />}
      loader={homeLoader}
      action={homeAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />

        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />

        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />

        <Route path="contacts/:contactId/destroy" action={destroyAction} />
      </Route>
    </Route>
  )
);

export default router;
