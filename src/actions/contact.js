import { getContact, updateContact } from '../contacts';

export async function loader({ params }) {
  const contact = await getContact(params.contactId);

  if (!contact) {
    throw new Response('', {
      status: 404,
      statusText: 'Página não existe',
    });
  }

  return { contact };
}

export async function action({ request, params }) {
  let formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get('favorite') === 'true',
  });
}
