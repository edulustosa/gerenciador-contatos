import { Form, useLoaderData, useNavigate } from 'react-router-dom';

export default function EditContact() {
  const { contact } = useLoaderData();
  const navigate = useNavigate();

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Nome</span>

        <input
          placeholder="Nome"
          aria-label="Nome"
          type="text"
          name="first"
          defaultValue={contact.first}
        />

        <input
          placeholder="Sobrenome"
          aria-label="Sobrenome"
          type="text"
          name="last"
          defaultValue={contact.last}
        />
      </p>

      <label>
        <span>Twitter</span>

        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact.twitter}
        />
      </label>

      <label>
        <span>URL Foto</span>

        <input
          placeholder="https://examplo.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact.avatar}
        />
      </label>

      <label>
        <span>Notas</span>
        <textarea name="notes" defaultValue={contact.notes} rows={6} />
      </label>

      <p>
        <button type="submit">Salvar</button>
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancelar
        </button>
      </p>
    </Form>
  );
}
